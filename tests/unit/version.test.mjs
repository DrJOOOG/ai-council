import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { APP_VERSION } from '../../src/config/version.mjs';

const pkg = JSON.parse(readFileSync(new URL('../../package.json', import.meta.url), 'utf8'));
const appJs = readFileSync(new URL('../../app.js', import.meta.url), 'utf8');
const swJs = readFileSync(new URL('../../sw.js', import.meta.url), 'utf8');

test('version is synchronized across package, app, module and service worker', () => {
  assert.equal(APP_VERSION, pkg.version);
  assert.match(appJs, new RegExp(`const APP_VERSION = '${pkg.version.replaceAll('.', '\\.')}';`));
  assert.match(swJs, new RegExp(`ai-council-v${pkg.version.replaceAll('.', '\\.')}`));
});
