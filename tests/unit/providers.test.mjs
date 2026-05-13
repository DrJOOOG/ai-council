import test from 'node:test';
import assert from 'node:assert/strict';
import {
  requestTimeoutFor,
  openAIResponseInput,
  extractOpenAIResponseText,
  stripPerplexityReasoning,
  normalizeProviderModel
} from '../../src/api/providers.mjs';

test('requestTimeoutFor chooses long-running modes', () => {
  assert.equal(requestTimeoutFor({}), 120_000);
  assert.equal(requestTimeoutFor({ synthesis: true }), 150_000);
  assert.equal(requestTimeoutFor({ research: true }), 240_000);
  assert.equal(requestTimeoutFor({ deepResearch: true }), 360_000);
  assert.equal(requestTimeoutFor({ timeoutMs: 123 }), 123);
});

test('openAIResponseInput maps text, images and files', () => {
  const input = openAIResponseInput([
    { role: 'user', content: [
      { type: 'text', text: 'Analyze' },
      { type: 'image_url', image_url: { url: 'data:image/png;base64,aaa' } },
      { type: 'input_file', filename: 'case.pdf', file_data: 'data:application/pdf;base64,bbb' }
    ]},
    { role: 'assistant', content: 'Done' }
  ]);
  assert.equal(input[0].role, 'user');
  assert.deepEqual(input[0].content.map(p => p.type), ['input_text', 'input_image', 'input_file']);
  assert.equal(input[1].role, 'assistant');
});

test('extractOpenAIResponseText supports output_text and structured output', () => {
  assert.equal(extractOpenAIResponseText({ output_text: 'hello' }), 'hello');
  assert.equal(extractOpenAIResponseText({ output: [{ content: [{ text: 'a' }, { output_text: 'b' }] }] }), 'a\nb');
});

test('Perplexity helpers normalize models and remove reasoning wrappers', () => {
  assert.equal(normalizeProviderModel('perplexity', 'sonar-reasoning'), 'sonar');
  assert.equal(stripPerplexityReasoning('<think>hidden</think>Final answer'), 'Final answer');
});
