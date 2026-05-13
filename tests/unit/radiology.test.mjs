import test from 'node:test';
import assert from 'node:assert/strict';
import { extractDoctorCorrectionsFromMessages, hasDoctorCorrection } from '../../src/clinical/radiology.mjs';

test('OPG doctor correction detects Ukrainian tooth correction phrases', () => {
  assert.equal(hasDoctorCorrection('Ні, імплант не 46, це 36'), true);
  assert.equal(hasDoctorCorrection('замість 46 має бути 36'), true);
  assert.equal(hasDoctorCorrection('правильно 36'), true);
});

test('OPG doctor correction detects English correction phrases', () => {
  assert.equal(hasDoctorCorrection('not 46, this is 36'), true);
  assert.equal(hasDoctorCorrection('instead of 46 use 36'), true);
  assert.equal(hasDoctorCorrection('implant 36'), true);
});

test('OPG doctor corrections preserve last clinician messages only', () => {
  const messages = [
    { role: 'assistant', content: 'draft' },
    { role: 'user', content: 'звичайне питання без FDI' },
    { role: 'user', content: 'Помилка сторони: це 36, не 46' }
  ];
  const out = extractDoctorCorrectionsFromMessages(messages);
  assert.match(out, /36/);
  assert.doesNotMatch(out, /звичайне питання/);
});
