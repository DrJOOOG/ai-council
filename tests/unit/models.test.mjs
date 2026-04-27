import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizePerplexityModel, shouldFallbackPerplexity } from '../../src/api/models.mjs';

test('Perplexity deprecated sonar-reasoning falls back to sonar', () => {
  assert.equal(normalizePerplexityModel('sonar-reasoning'), 'sonar');
});

test('Perplexity valid reasoning pro is preserved', () => {
  assert.equal(normalizePerplexityModel('sonar-reasoning-pro'), 'sonar-reasoning-pro');
});

test('Perplexity invalid_model/deprecated error is fallback-safe', () => {
  assert.equal(shouldFallbackPerplexity("invalid_model: sonar-reasoning has been deprecated"), true);
});
