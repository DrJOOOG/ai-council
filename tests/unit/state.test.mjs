import test from 'node:test';
import assert from 'node:assert/strict';
import { createStore, toggleInSet, radioSelect } from '../../src/core/state.mjs';

test('toggleInSet toggles optional selection off and on', () => {
  assert.deepEqual([...toggleInSet(new Set(['endo']), 'endo')], []);
  assert.deepEqual([...toggleInSet(new Set(), 'endo')], ['endo']);
});

test('radioSelect keeps exactly one selected option', () => {
  const out = radioSelect([{ value: 'economy' }, { value: 'balanced' }, { value: 'maximum' }], 'balanced');
  assert.equal(out.filter(x => x.selected).length, 1);
  assert.equal(out.find(x => x.selected).value, 'balanced');
});

test('createStore updates state and notifies listeners', () => {
  const store = createStore({ a: 1 });
  let seen = null;
  store.subscribe(s => { seen = s; });
  store.setState({ b: 2 });
  assert.deepEqual(store.getState(), { a: 1, b: 2 });
  assert.deepEqual(seen, { a: 1, b: 2 });
});
