import test from 'node:test';
import assert from 'node:assert/strict';
import { estimateLocalStorageBytes, estimateAfterSet, makePendingRequest } from '../../src/storage/storage.mjs';

function fakeStorage(init = {}) {
  const map = new Map(Object.entries(init));
  return {
    get length() { return map.size; },
    key(i) { return [...map.keys()][i]; },
    getItem(k) { return map.has(k) ? map.get(k) : null; },
    setItem(k, v) { map.set(k, String(v)); }
  };
}

test('estimateLocalStorageBytes counts UTF-16 key + value', () => {
  const s = fakeStorage({ ab: 'cd' });
  assert.equal(estimateLocalStorageBytes(s), 8);
});

test('estimateAfterSet projects replacement size', () => {
  const s = fakeStorage({ ab: 'cd' });
  assert.equal(estimateAfterSet(s, 'ab', 'cdef'), 12);
});

test('makePendingRequest stores recoverable text and status', () => {
  const p = makePendingRequest({ chatId: 'c1', userMsgId: 'u1', text: 'hello', participants: [] });
  assert.equal(p.chatId, 'c1');
  assert.equal(p.status, 'running');
  assert.equal(p.text, 'hello');
});
