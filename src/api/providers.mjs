import { normalizePerplexityModel, shouldFallbackPerplexity } from './models.mjs';

export const REQUEST_TIMEOUT_MS = Object.freeze({
  default: 120_000,
  synthesis: 150_000,
  research: 240_000,
  deepResearch: 360_000
});

export function requestTimeoutFor(opts = {}) {
  if (opts.timeoutMs) return opts.timeoutMs;
  if (opts.deepResearch) return REQUEST_TIMEOUT_MS.deepResearch;
  if (opts.research) return REQUEST_TIMEOUT_MS.research;
  if (opts.synthesis) return REQUEST_TIMEOUT_MS.synthesis;
  return REQUEST_TIMEOUT_MS.default;
}

export function openAIResponseInput(messages = []) {
  return messages.map(m => {
    const role = m.role === 'assistant' ? 'assistant' : 'user';
    if (typeof m.content === 'string') return { role, content: m.content };
    if (Array.isArray(m.content)) {
      const content = [];
      for (const part of m.content) {
        if (part.type === 'text' && part.text) content.push({ type: 'input_text', text: part.text });
        else if (part.type === 'image_url' && part.image_url?.url) content.push({ type: 'input_image', image_url: part.image_url.url });
        else if (part.type === 'input_file' && part.file_data) content.push({ type: 'input_file', filename: part.filename || 'file.pdf', file_data: part.file_data });
        else if (part.text) content.push({ type: 'input_text', text: part.text });
      }
      return { role, content: content.length ? content : [{ type: 'input_text', text: '' }] };
    }
    return { role, content: String(m.content || '') };
  });
}

export function extractOpenAIResponseText(data = {}) {
  if (data.output_text) return data.output_text;
  if (Array.isArray(data.output)) {
    return data.output
      .flatMap(item => item.content || [])
      .map(part => part.text || part.output_text || '')
      .filter(Boolean)
      .join('\n')
      .trim();
  }
  return '';
}

export function stripPerplexityReasoning(text) {
  let out = String(text || '');
  out = out.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
  out = out.replace(/^\s*(reasoning|thinking)\s*:\s*[\s\S]*?\n\s*(answer|відповідь|final)\s*:\s*/i, '');
  return out.trim();
}

export function normalizeProviderModel(provider, model) {
  if (provider === 'perplexity') return normalizePerplexityModel(model);
  return model;
}

export { normalizePerplexityModel, shouldFallbackPerplexity };
