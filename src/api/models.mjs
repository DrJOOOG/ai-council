export const PERPLEXITY_MODELS = Object.freeze({
  fast: 'sonar',
  balanced: 'sonar-pro',
  reasoning: 'sonar-reasoning-pro',
  maximum: 'sonar-reasoning-pro',
  deepResearch: 'sonar-deep-research'
});

export const VALID_PERPLEXITY_MODELS = new Set(Object.values(PERPLEXITY_MODELS));

export function normalizePerplexityModel(model) {
  return VALID_PERPLEXITY_MODELS.has(model) ? model : PERPLEXITY_MODELS.fast;
}

export function shouldFallbackPerplexity(errorText = '') {
  return /invalid_model|deprecated|no longer available|model.*not.*found/i.test(String(errorText));
}
