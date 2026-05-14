import test from 'node:test';
import assert from 'node:assert/strict';
import { VISUAL_LIBRARY } from '../../src/config/visuals.config.mjs';

test('visual library has at least 40 starter visuals', () => {
  assert.ok(VISUAL_LIBRARY.items.length >= 40);
});

test('visual library items have multilingual patient text and assets', () => {
  for (const item of VISUAL_LIBRARY.items) {
    assert.ok(item.id);
    assert.ok(item.asset);
    assert.ok(item.title.uk && item.title.cs && item.title.en);
    assert.ok(item.patientText.uk && item.patientText.cs && item.patientText.en);
  }
});

test('visual library includes required dental categories', () => {
  for (const key of ['caries', 'pulp', 'endo', 'perio', 'implants', 'surgery', 'prosthetics', 'hygiene', 'radiology']) {
    assert.ok(VISUAL_LIBRARY.categories[key], key);
  }
});

test('visual library includes doctor-facing visuals', () => {
  const doctorItems = VISUAL_LIBRARY.items.filter(item => item.audience === 'doctor');
  assert.ok(doctorItems.length >= 4);
});
