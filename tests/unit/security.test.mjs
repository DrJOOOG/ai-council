import test from 'node:test';
import assert from 'node:assert/strict';
import { detectPotentialPII, listPotentialPIIMatches } from '../../src/security/pii.mjs';

function withTinyDom(fn) {
  const oldDocument = globalThis.document;
  const oldNodeFilter = globalThis.NodeFilter;
  class TextNode { constructor(text) { this.textContent = text; } toString() { return this.textContent; } }
  class Element {
    constructor(tagName) { this.tagName = tagName.toUpperCase(); this.attributes = []; this.children = []; this.textContent = ''; }
    setAttribute(name, value) { const existing = this.attributes.find(a => a.name === name); if (existing) existing.value = String(value); else this.attributes.push({ name, value: String(value) }); }
    removeAttribute(name) { this.attributes = this.attributes.filter(a => a.name !== name); }
    replaceWith(node) { this._replacedWith = node; }
  }
  class Template {
    constructor() { this.content = { nodes: [], html: '' }; }
    set innerHTML(html) {
      this.content.html = String(html || '');
      const tagRe = /<([a-z0-9]+)([^>]*)>/gi;
      this.content.nodes = [];
      let m;
      while ((m = tagRe.exec(this.content.html))) {
        const el = new Element(m[1]);
        const attrRe = /([a-zA-Z:-]+)="([^"]*)"/g;
        let a;
        while ((a = attrRe.exec(m[2]))) el.setAttribute(a[1], a[2]);
        this.content.nodes.push(el);
      }
    }
    get innerHTML() {
      let html = this.content.html;
      for (const el of this.content.nodes) {
        const attrs = el.attributes.map(a => ` ${a.name}="${a.value}"`).join('');
        html = html.replace(new RegExp(`<${el.tagName.toLowerCase()}[^>]*>`, 'i'), `<${el.tagName.toLowerCase()}${attrs}>`);
      }
      html = html.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '$1');
      return html;
    }
  }
  globalThis.NodeFilter = { SHOW_ELEMENT: 1 };
  globalThis.document = {
    createElement(name) { return name === 'template' ? new Template() : new Element(name); },
    createTextNode(text) { return new TextNode(text); },
    createTreeWalker(content) {
      let i = -1;
      return { currentNode: null, nextNode() { i += 1; this.currentNode = content.nodes[i]; return !!this.currentNode; } };
    }
  };
  return Promise.resolve()
    .then(fn)
    .finally(() => { globalThis.document = oldDocument; globalThis.NodeFilter = oldNodeFilter; });
}

test('PII detection catches common patient identifiers', () => {
  assert.equal(detectPotentialPII('Пацієнт Іван Петренко, дата народження 12.03.1985'), true);
  assert.equal(detectPotentialPII('Novak_1985_OPG.pdf'), true);
  assert.equal(detectPotentialPII('Телефон +420 777 123 456'), true);
  assert.equal(detectPotentialPII('анонімний кейс: біль 36, перкусія +'), false);
  assert.ok(listPotentialPIIMatches('patient email test@example.com').length >= 1);
});

test('sanitizer strips scripts and dangerous attributes', async () => withTinyDom(async () => {
  const { sanitizeRenderedHtml, renderMd } = await import('../../src/security/sanitize.mjs');
  const html = sanitizeRenderedHtml('<p onclick="x()">ok</p><script>alert(1)</script><a href="javascript:alert(1)" target="_blank">x</a>');
  assert.equal(html.includes('onclick'), false);
  assert.equal(html.includes('<script'), false);
  assert.equal(html.includes('javascript:'), false);
  const md = renderMd('[safe](https://example.com) [bad](javascript:alert(1)) <img src=x onerror=alert(1)>');
  assert.equal(md.includes('https://example.com'), true);
  assert.equal(md.includes('href="javascript:'), false);
  assert.equal(md.includes('<img'), false);
}));
