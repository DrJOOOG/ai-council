export function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));
}

export function sanitizeRenderedHtml(html) {
  if (typeof document === 'undefined') {
    throw new Error('sanitizeRenderedHtml requires a DOM document');
  }
  const template = document.createElement('template');
  template.innerHTML = String(html || '');
  const allowedTags = new Set(['P','BR','STRONG','EM','CODE','PRE','H1','H2','H3','UL','OL','LI','A','DIV','SPAN']);
  const allowedClasses = new Set(['finding-line','finding-red','finding-yellow','finding-neutral']);
  const walk = document.createTreeWalker(template.content, NodeFilter.SHOW_ELEMENT);
  const toRemove = [];
  while (walk.nextNode()) {
    const el = walk.currentNode;
    if (!allowedTags.has(el.tagName)) { toRemove.push(el); continue; }
    [...el.attributes].forEach(attr => {
      const name = attr.name.toLowerCase();
      const val = attr.value || '';
      if (name.startsWith('on') || name === 'style') el.removeAttribute(attr.name);
      else if (el.tagName === 'A' && name === 'href') {
        if (!/^https?:\/\//i.test(val)) el.removeAttribute(attr.name);
      } else if (el.tagName === 'A' && ['target','rel'].includes(name)) {
        // allowed
      } else if (name === 'class') {
        const safe = val.split(/\s+/).filter(c => allowedClasses.has(c)).join(' ');
        if (safe) el.setAttribute('class', safe); else el.removeAttribute('class');
      } else {
        el.removeAttribute(attr.name);
      }
    });
  }
  toRemove.forEach(el => el.replaceWith(document.createTextNode(el.textContent || '')));
  return template.innerHTML;
}

export function renderMd(text) {
  if (!text) return '';
  let s = escapeHtml(text);
  s = s.replace(/```([a-z]*)\n([\s\S]*?)```/g, (_, l, c) => `<pre><code>${c.trim()}</code></pre>`);
  s = s.replace(/`([^`\n]+)`/g, '<code>$1</code>');
  s = s.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  s = s.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  s = s.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '<em>$1</em>');
  s = s.replace(/^🔴\s*(.+)$/gm, '<div class="finding-line finding-red">🔴 $1</div>');
  s = s.replace(/^🟡\s*(.+)$/gm, '<div class="finding-line finding-yellow">🟡 $1</div>');
  s = s.replace(/^⚪\s*(.+)$/gm, '<div class="finding-line finding-neutral">⚪ $1</div>');
  s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s<>"')]+)\)/g, (_, t, u) =>
    `<a href="${u}" target="_blank" rel="noopener noreferrer">${t}</a>`);
  s = s.replace(/(^|[\s(])(https?:\/\/[^\s<>"')]+)/g, (_, pre, u) =>
    `${pre}<a href="${u}" target="_blank" rel="noopener noreferrer">${u}</a>`);
  s = s.replace(/^\s*[-*]\s+(.+)$/gm, '<li>$1</li>');
  s = s.replace(/(<li>.*<\/li>\n?)+/g, m => `<ul>${m}</ul>`);
  s = s.split(/\n\n+/).map(p => {
    if (/^<(h\d|ul|ol|pre|li|div)/.test(p)) return p;
    return `<p>${p.replace(/\n/g,'<br>')}</p>`;
  }).join('\n');
  return sanitizeRenderedHtml(s);
}
