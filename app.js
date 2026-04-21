// ================================================================
// AI Council v4.0-beta — Multi-chat, thinking levels, attachments, research
// ================================================================

const APP_VERSION = '4.0-beta';
const APP_VERSION_DATE = '2026-04-21';

// ==================== LOGOS ====================
const LOGOS = {
  claude: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35"/><path d="M12 5.5 7 18h2.2l1-2.6h3.6l1 2.6H17L12 5.5zm-1.1 8.1L12 10.2l1.1 3.4h-2.2z"/></svg>`,
  openai: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="2.5"/><circle cx="12" cy="4.5" r="1.8"/><circle cx="18.5" cy="8.3" r="1.8"/><circle cx="18.5" cy="15.7" r="1.8"/><circle cx="12" cy="19.5" r="1.8"/><circle cx="5.5" cy="15.7" r="1.8"/><circle cx="5.5" cy="8.3" r="1.8"/><g stroke="currentColor" stroke-width="0.8" opacity="0.5"><line x1="12" y1="4.5" x2="12" y2="19.5"/><line x1="5.5" y1="8.3" x2="18.5" y2="15.7"/><line x1="5.5" y1="15.7" x2="18.5" y2="8.3"/></g></svg>`,
  gemini: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 C13 7 13.5 10 22 12 C13.5 14 13 17 12 22 C11 17 10.5 14 2 12 C10.5 10 11 7 12 2 Z"/></svg>`,
  perplexity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="9" opacity="0.4"/><line x1="12" y1="3" x2="12" y2="21" stroke-width="1.4"/><line x1="3" y1="12" x2="21" y2="12" stroke-width="1.4"/><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/></svg>`,
  council: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M9 5 C6 5 4 7.5 4 10 C3 10.5 3 12 3.5 13 C3 14 3.5 15.5 5 16 C5 18 7 19 9 18.5 M15 5 C18 5 20 7.5 20 10 C21 10.5 21 12 20.5 13 C21 14 20.5 15.5 19 16 C19 18 17 19 15 18.5"/><path d="M9 5 C10 4 11 4 12 5 C13 4 14 4 15 5 M9 18.5 C10 19.5 11 19.5 12 18.5 C13 19.5 14 19.5 15 18.5"/><path d="M12 5 L12 18.5" opacity="0.5"/><circle cx="7" cy="10" r="1" fill="currentColor"/><circle cx="17" cy="10" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>`,
  emptyChat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M9 5 C6 5 4 7.5 4 10 C3 10.5 3 12 3.5 13 C3 14 3.5 15.5 5 16 C5 18 7 19 9 18.5 M15 5 C18 5 20 7.5 20 10 C21 10.5 21 12 20.5 13 C21 14 20.5 15.5 19 16 C19 18 17 19 15 18.5"/><path d="M9 5 C10 4 11 4 12 5 C13 4 14 4 15 5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>`
};

// ==================== MODELS with price data ====================
// Prices: USD per 1M tokens (input, output). Based on official provider pages.
// Level 0 = grey (cheapest), Level 3 = red (most expensive/smart)
const MODELS = {
  claude: [
    { id: 'claude-haiku-4-5',   name: 'Haiku 4.5',   short: 'HAIKU',  inPrice: 1.00,  outPrice: 5.00 },
    { id: 'claude-sonnet-4-5',  name: 'Sonnet 4.5',  short: 'SONNET', inPrice: 3.00,  outPrice: 15.00 },
    { id: 'claude-sonnet-4-6',  name: 'Sonnet 4.6',  short: 'SONNET+',inPrice: 3.00,  outPrice: 15.00 },
    { id: 'claude-opus-4-7',    name: 'Opus 4.7',    short: 'OPUS',   inPrice: 15.00, outPrice: 75.00 }
  ],
  openai: [
    { id: 'gpt-5.4-nano',  name: 'GPT-5.4 Nano',  short: 'NANO', inPrice: 0.10, outPrice: 0.40 },
    { id: 'gpt-5.4-mini',  name: 'GPT-5.4 Mini',  short: 'MINI', inPrice: 0.25, outPrice: 2.00 },
    { id: 'gpt-5.4',       name: 'GPT-5.4',       short: '5.4',  inPrice: 1.25, outPrice: 10.00 },
    { id: 'gpt-5.4',       name: 'GPT-5.4 (max)', short: '5.4+', inPrice: 1.25, outPrice: 10.00 }
  ],
  gemini: [
    { id: 'gemini-2.5-flash-lite', name: 'Flash Lite 2.5', short: 'LITE',  inPrice: 0.10, outPrice: 0.40 },
    { id: 'gemini-2.5-flash',      name: 'Flash 2.5',      short: 'FLASH', inPrice: 0.30, outPrice: 2.50 },
    { id: 'gemini-2.5-pro',        name: 'Pro 2.5',        short: 'PRO',   inPrice: 1.25, outPrice: 10.00 },
    { id: 'gemini-3-pro-preview',  name: 'Pro 3 Preview',  short: 'PRO3',  inPrice: 2.00, outPrice: 10.00 }
  ],
  perplexity: [
    { id: 'sonar',           name: 'Sonar',          short: 'SONAR',  inPrice: 1.00, outPrice: 1.00 },
    { id: 'sonar-pro',       name: 'Sonar Pro',      short: 'PRO',    inPrice: 3.00, outPrice: 15.00 },
    { id: 'sonar-reasoning', name: 'Sonar Reasoning',short: 'REASON', inPrice: 1.00, outPrice: 5.00 },
    { id: 'sonar-reasoning-pro', name: 'Reasoning Pro', short: 'R-PRO', inPrice: 2.00, outPrice: 8.00 }
  ]
};

const LEVEL_COLORS = ['#6a6a80', '#d4d600', '#ff9500', '#ff3030'];
const LEVEL_NAMES = ['ШВИДКИЙ', 'СЕРЕДНІЙ', 'РОЗУМНИЙ', 'МАКСИМУМ'];

const AI_CONFIG = {
  claude: {
    name: 'Claude', color: '#da7756', fullName: 'Anthropic Claude', logo: LOGOS.claude,
    keyPlaceholder: 'sk-ant-...',
    keyUrl: 'https://console.anthropic.com/settings/keys',
    billingUrl: 'https://console.anthropic.com/settings/billing'
  },
  openai: {
    name: 'ChatGPT', color: '#10a37f', fullName: 'OpenAI GPT', logo: LOGOS.openai,
    keyPlaceholder: 'sk-...',
    keyUrl: 'https://platform.openai.com/api-keys',
    billingUrl: 'https://platform.openai.com/settings/organization/billing/overview'
  },
  gemini: {
    name: 'Gemini', color: '#4285f4', fullName: 'Google Gemini', logo: LOGOS.gemini,
    keyPlaceholder: 'AIza...',
    keyUrl: 'https://aistudio.google.com/app/apikey',
    billingUrl: 'https://aistudio.google.com/usage'
  },
  perplexity: {
    name: 'Perplexity', color: '#20b8cd', fullName: 'Perplexity', logo: LOGOS.perplexity,
    keyPlaceholder: 'pplx-...',
    keyUrl: 'https://www.perplexity.ai/settings/api',
    billingUrl: 'https://www.perplexity.ai/settings/api'
  },
  // Virtual entry for Council UI (not a real AI, just for multi-AI chat styling)
  council: {
    name: 'РАДА', color: '#d4ff3a', fullName: 'Рада AI', logo: LOGOS.council
  }
};

const AI_ORDER = ['claude', 'openai', 'gemini', 'perplexity'];

const MODES = {
  parallel:  { name: 'Паралельно', desc: 'Всі відповідають одночасно, результати поруч' },
  synthesis: { name: 'Синтез', desc: 'Claude узагальнює всі відповіді в одне рішення' },
  debate:    { name: 'Дебат', desc: 'Раунди з урахуванням відповідей один одного' },
  vote:      { name: 'Голосування', desc: 'Ранжування відповідей, обрання переможця' }
};

// ==================== STATE ====================
const STORAGE = {
  keys: 'aic3_keys',
  chats: 'aic3_chats',
  settings: 'aic3_settings',
  draft: 'aic3_new_draft',
  memory: 'aic3_memory',
  templates: 'aic4_templates',    // v4.0
  cases: 'aic4_cases',            // v4.0
  stats: 'aic4_stats'             // v4.0
};

// Default templates for dental context
const DEFAULT_TEMPLATES = [
  {
    id: 'endo',
    icon: '🦷',
    name: 'Ендодонтія',
    description: 'Лікування кореневих каналів, діагностика пульпіту',
    systemAddition: 'Користувач потребує консультацію з ендодонтії. Давай структуровану відповідь: діагностика → план лікування → матеріали → прогноз. Згадуй сучасні протоколи (ESE guidelines).',
    suggestedAI: ['claude', 'perplexity'],
    suggestedLevel: 2
  },
  {
    id: 'implants',
    icon: '🔩',
    name: 'Імплантологія',
    description: 'Планування імплантації, вибір системи, ускладнення',
    systemAddition: 'Користувач потребує консультацію з імплантології. Структура: клінічна ситуація → варіанти імплант-системи → хірургічний протокол → протезування → ризики. Враховуй ITI та EAO guidelines.',
    suggestedAI: ['claude', 'gemini', 'perplexity'],
    suggestedLevel: 3
  },
  {
    id: 'perio',
    icon: '🩸',
    name: 'Пародонтологія',
    description: 'Лікування пародонтиту, підтримуюча терапія',
    systemAddition: 'Консультація з пародонтології. Структура: оцінка стадії/ступеня → план лікування → підтримуюча терапія. Посилайся на EFP 2018 classification.',
    suggestedAI: ['claude', 'perplexity'],
    suggestedLevel: 2
  },
  {
    id: 'urgent',
    icon: '🚨',
    name: 'Ургентний випадок',
    description: 'Швидке рішення для гострого болю/травми',
    systemAddition: 'УРГЕНТНИЙ ВИПАДОК. Дай КОРОТКУ відповідь у 3 пункти: що робити зараз, що дати з медикаментів (з дозуванням), коли призначити повторний візит. Без зайвих деталей.',
    suggestedAI: ['claude'],
    suggestedLevel: 1
  },
  {
    id: 'diff-pain',
    icon: '🔍',
    name: 'Диф. діагностика болю',
    description: 'Визначення джерела зубного болю',
    systemAddition: 'Диференційна діагностика болю у щелепно-лицевій ділянці. Структура: можливі джерела (пульпа/періодонт/TMJ/невралгія/синусит) → які тести підтвердити → що виключити першочергово.',
    suggestedAI: ['claude', 'gemini', 'perplexity'],
    suggestedLevel: 3
  }
];

// Czech practice context blocks (toggleable)
const CZECH_CONTEXT_BLOCKS = {
  sukl: {
    name: 'SÚKL — довідник препаратів',
    description: 'Дозволені в Чехії препарати та їх дозування',
    text: 'Використовуй для рекомендацій препаратів тільки ті що зареєстровані в SÚKL (Státní ústav pro kontrolu léčiv). При згадці антибіотиків/анестетиків вказуй чеські торгові назви (Amoxiclav, Augmentin, Supracillin) разом з МНН. Для анестетиків — Ubistesin, Mepivastesin, Septanest. Дозування — згідно SPC SÚKL.'
  },
  vzp: {
    name: 'VZP — страхові коди',
    description: 'Коди для здоровотньої страховки',
    text: 'Якщо доречно — згадуй VZP коди процедур (4-значні, формат K-коди або інші). Приклади: 00900 (prohlídka), 00911 (konzultace), 01701-01765 (záchovná stom.), 02101-02115 (endodoncie). Враховуй що деякі процедури є плноі (плними за страхування), деякі nadstandard (пацієнт доплачує).'
  },
  consent: {
    name: 'Шаблони інформованої згоди',
    description: 'Чеські формулювання для письмової згоди',
    text: 'При обговоренні інвазивних процедур (імплантація, хірургічне видалення, ендо з ускладненнями) — пропонуй структуру informovaného souhlasu чеською: popis výkonu, možné komplikace, alternativy léčby, rizika odmítnutí, následná péče.'
  },
  local: {
    name: 'Локальна практика',
    description: 'Особливості роботи у ProfiDentist s.r.o.',
    text: 'Практика: ProfiDentist s.r.o. в Остраві, Чехія. Non-VAT payer (neplátce DPH) — враховуй при калькуляціях витрат. Обладнання: Acteon X-Mind Trium для OPG, планується Planmeca CBCT Viso G3/G5. Для імплант-планування використовується зовнішнє ПО.'
  }
};

let state = {
  keys: {},
  chats: {},
  chatOrder: [],
  archivedChatIds: [],
  activeChatId: null,
  currentScreen: 'list',
  newChatDraft: null,
  pendingAttachments: [],
  showFullLog: false,
  sendInProgress: false,
  chatSearchQuery: '',
  selectionMode: false,
  selectedChatIds: new Set(),
  memory: {
    profile: '',
    facts: [],
    czechContextEnabled: {} // {sukl: true, vzp: true, ...}
  },
  templates: [],  // loaded from storage, fallback to DEFAULT_TEMPLATES
  cases: [],      // [{id, title, tags, description, createdAt, updatedAt}]
  stats: {
    // Per-AI cumulative usage since reset
    // { claude: {requests: 0, inputTokens: 0, outputTokens: 0, estCost: 0}, ... }
    byAI: {},
    // Historical contribution tracking from Council syntheses
    // [{chatId, timestamp, participants: [{ai, uniqueInsights, supportedBy, level}]}]
    contributions: [],
    resetAt: null
  }
};

// ==================== STORAGE ====================
function load() {
  try {
    state.keys = JSON.parse(localStorage.getItem(STORAGE.keys) || '{}');
    const saved = JSON.parse(localStorage.getItem(STORAGE.chats) || '{}');
    state.chats = saved.chats || {};
    state.chatOrder = saved.order || [];
    state.archivedChatIds = saved.archived || [];
    const mem = JSON.parse(localStorage.getItem(STORAGE.memory) || '{}');
    state.memory.profile = mem.profile || '';
    state.memory.facts = mem.facts || [];
    state.memory.czechContextEnabled = mem.czechContextEnabled || {};
    const templates = JSON.parse(localStorage.getItem(STORAGE.templates) || 'null');
    state.templates = templates || [...DEFAULT_TEMPLATES];
    state.cases = JSON.parse(localStorage.getItem(STORAGE.cases) || '[]');
    const stats = JSON.parse(localStorage.getItem(STORAGE.stats) || '{}');
    state.stats.byAI = stats.byAI || {};
    state.stats.contributions = stats.contributions || [];
    state.stats.resetAt = stats.resetAt || Date.now();
  } catch (e) {
    console.error('Load error:', e);
    state.chats = {};
    state.chatOrder = [];
  }
}
function saveKeys() {
  try {
    localStorage.setItem(STORAGE.keys, JSON.stringify(state.keys));
  } catch (e) {
    flash('Не вдалось зберегти ключі: сховище переповнене', true);
  }
}
function saveMemory() {
  try {
    localStorage.setItem(STORAGE.memory, JSON.stringify(state.memory));
  } catch (e) {
    flash('Не вдалось зберегти пам\'ять', true);
  }
}
function saveTemplates() {
  try { localStorage.setItem(STORAGE.templates, JSON.stringify(state.templates)); }
  catch (e) { flash('Не вдалось зберегти шаблони', true); }
}
function saveCases() {
  try { localStorage.setItem(STORAGE.cases, JSON.stringify(state.cases)); }
  catch (e) { flash('Не вдалось зберегти випадки', true); }
}
function saveStats() {
  try { localStorage.setItem(STORAGE.stats, JSON.stringify(state.stats)); }
  catch (e) { /* silent */ }
}
function saveMemory() {
  try {
    localStorage.setItem(STORAGE.memory, JSON.stringify(state.memory));
  } catch (e) {
    flash('Не вдалось зберегти пам\'ять', true);
  }
}
function saveChats() {
  const cleaned = {};
  for (const id in state.chats) {
    const c = {...state.chats[id]};
    c.messages = (c.messages || []).filter(m => !m.loading);
    cleaned[id] = c;
  }
  try {
    const data = JSON.stringify({
      chats: cleaned,
      order: state.chatOrder,
      archived: state.archivedChatIds
    });
    if (data.length > 4 * 1024 * 1024) {
      console.warn('Chat storage is getting large:', Math.round(data.length / 1024), 'KB');
    }
    localStorage.setItem(STORAGE.chats, data);
  } catch (e) {
    try {
      const slim = {};
      for (const id in cleaned) {
        const c = {...cleaned[id]};
        c.messages = (c.messages || []).map(m => {
          if (m.attachments) {
            return {...m, attachments: m.attachments.map(a => ({...a, data: undefined, kind: a.kind, name: a.name}))};
          }
          return m;
        });
        slim[id] = c;
      }
      localStorage.setItem(STORAGE.chats, JSON.stringify({
        chats: slim, order: state.chatOrder, archived: state.archivedChatIds
      }));
      flash('Сховище переповнене — великі вкладення видалено з історії', true);
    } catch (e2) {
      flash('Сховище переповнене. Видали старі чати.', true);
    }
  }
}

// ==================== UTILS ====================
function uid() { return Math.random().toString(36).slice(2, 10) + Date.now().toString(36); }
function escapeHtml(s) { return String(s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function fmtTime(ts) { return ts ? new Date(ts).toLocaleTimeString('uk', {hour:'2-digit', minute:'2-digit'}) : ''; }
function fmtDate(ts) {
  if (!ts) return '';
  const d = new Date(ts), now = new Date();
  if (d.toDateString() === now.toDateString()) return fmtTime(ts);
  const diff = (now - d) / (1000*60*60*24);
  if (diff < 7) return d.toLocaleDateString('uk', { weekday: 'short' });
  return d.toLocaleDateString('uk', { day: '2-digit', month: '2-digit' });
}
function renderMd(text) {
  if (!text) return '';
  let s = escapeHtml(text);
  s = s.replace(/```([a-z]*)\n([\s\S]*?)```/g, (_, l, c) => `<pre><code>${c.trim()}</code></pre>`);
  s = s.replace(/`([^`\n]+)`/g, '<code>$1</code>');
  s = s.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  s = s.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  s = s.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '<em>$1</em>');
  // [text](url) markdown links — only https/http, only if url doesn't contain dangerous chars
  s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s<>"')]+)\)/g, (_, t, u) =>
    `<a href="${u}" target="_blank" rel="noopener noreferrer">${t}</a>`);
  // Raw autolinks (http(s)://...)
  s = s.replace(/(^|[\s(])(https?:\/\/[^\s<>"')]+)/g, (_, pre, u) =>
    `${pre}<a href="${u}" target="_blank" rel="noopener noreferrer">${u}</a>`);
  s = s.replace(/^\s*[-*]\s+(.+)$/gm, '<li>$1</li>');
  s = s.replace(/(<li>.*<\/li>\n?)+/g, m => `<ul>${m}</ul>`);
  s = s.split(/\n\n+/).map(p => {
    if (/^<(h\d|ul|ol|pre|li)/.test(p)) return p;
    return `<p>${p.replace(/\n/g,'<br>')}</p>`;
  }).join('\n');
  return s;
}
function flash(text, err) {
  const el = document.createElement('div');
  el.className = 'flash' + (err ? ' err' : '');
  el.textContent = text;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2200);
}

// ==================== SCREEN NAV ====================
function goScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen' + name.charAt(0).toUpperCase() + name.slice(1)).classList.add('active');
  state.currentScreen = name;
  if (name === 'list') renderChatList();
  if (name === 'new') initNewChatScreen();
  if (name === 'chat') renderChatScreen();
  window.scrollTo(0, 0);
}
function openOverlay(id) { document.getElementById(id).classList.add('open'); }
function closeOverlay(id) { document.getElementById(id).classList.remove('open'); }

// ==================== CHAT LIST ====================
function renderChatList() {
  const el = document.getElementById('chatList');

  // Search filter + archive split
  const query = (state.chatSearchQuery || '').toLowerCase().trim();
  const activeIds = state.chatOrder.filter(id => !state.archivedChatIds.includes(id));
  const archivedIds = state.archivedChatIds.filter(id => state.chats[id]);

  const matchesQuery = (c) => {
    if (!query) return true;
    if ((c.name || '').toLowerCase().includes(query)) return true;
    return (c.messages || []).some(m => typeof m.content === 'string' && m.content.toLowerCase().includes(query));
  };

  const filteredActive = activeIds.map(id => state.chats[id]).filter(c => c && matchesQuery(c));
  const filteredArchived = archivedIds.map(id => state.chats[id]).filter(c => c && matchesQuery(c));

  if (activeIds.length === 0 && archivedIds.length === 0) {
    el.innerHTML = `
      <div class="chat-list-empty">
        <div class="icon-wrap">${LOGOS.emptyChat}</div>
        <h2>Ще немає чатів</h2>
        <p>Натисни <strong>+</strong> внизу щоб створити свій перший чат.</p>
      </div>`;
    return;
  }

  let html = '';

  // Search bar
  html += `<div class="chat-search-wrap">
    <input type="text" class="chat-search-input" id="chatSearchInput" placeholder="🔍 Пошук по чатах..." value="${escapeHtml(state.chatSearchQuery || '')}">
    ${state.chatSearchQuery ? '<button class="chat-search-clear" id="chatSearchClear">✕</button>' : ''}
  </div>`;

  // Selection mode bar
  if (state.selectionMode) {
    const count = state.selectedChatIds.size;
    html += `<div class="selection-bar">
      <span class="selection-count">${count} обрано</span>
      <div class="selection-actions">
        <button class="selection-btn" id="selectionCancel">Скасувати</button>
        <button class="selection-btn danger" id="selectionDelete" ${count === 0 ? 'disabled' : ''}>Видалити</button>
        <button class="selection-btn" id="selectionArchive" ${count === 0 ? 'disabled' : ''}>Архів</button>
      </div>
    </div>`;
  }

  // Active chats
  if (filteredActive.length > 0) {
    html += filteredActive.map(c => renderChatItem(c, false)).join('');
  } else if (query) {
    html += `<div class="chat-list-empty" style="padding:30px 20px;"><p>Нічого не знайдено за запитом "${escapeHtml(query)}"</p></div>`;
  }

  // Archived section
  if (filteredArchived.length > 0) {
    html += `<div class="archive-section">
      <div class="archive-header">📦 Архів (${filteredArchived.length})</div>
      ${filteredArchived.map(c => renderChatItem(c, true)).join('')}
    </div>`;
  }

  el.innerHTML = html;

  // Attach handlers
  el.querySelectorAll('[data-chat-id]').forEach(item => {
    const chatId = item.dataset.chatId;
    let longPressTimer = null;
    let touchStartX = 0;
    let touchStartY = 0;
    let isSwiping = false;

    // Click → open chat (or toggle selection in selection mode)
    item.addEventListener('click', (e) => {
      // Don't open if clicking on swipe action
      if (e.target.closest('.swipe-action')) return;
      if (state.selectionMode) {
        toggleChatSelection(chatId);
      } else {
        openChat(chatId);
      }
    });

    // Long press → enter selection mode
    item.addEventListener('touchstart', (e) => {
      if (e.target.closest('.chat-search-wrap') || e.target.closest('.selection-bar')) return;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      isSwiping = false;
      longPressTimer = setTimeout(() => {
        if (!state.selectionMode) {
          state.selectionMode = true;
          state.selectedChatIds = new Set([chatId]);
          if (navigator.vibrate) navigator.vibrate(40);
          renderChatList();
        }
      }, 500);
    }, { passive: true });

    item.addEventListener('touchmove', (e) => {
      const dx = e.touches[0].clientX - touchStartX;
      const dy = e.touches[0].clientY - touchStartY;
      if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
        clearTimeout(longPressTimer);
      }
      // Swipe left detection (only if not in selection mode)
      if (!state.selectionMode && dx < -20 && Math.abs(dx) > Math.abs(dy) * 2) {
        isSwiping = true;
        const inner = item.querySelector('.chat-item-inner');
        if (inner) {
          const offset = Math.max(dx, -140);
          inner.style.transform = `translateX(${offset}px)`;
        }
      }
    }, { passive: true });

    item.addEventListener('touchend', (e) => {
      clearTimeout(longPressTimer);
      if (isSwiping) {
        const dx = (e.changedTouches[0]?.clientX || 0) - touchStartX;
        const inner = item.querySelector('.chat-item-inner');
        if (inner) {
          if (dx < -80) {
            inner.style.transform = 'translateX(-140px)';
            inner.dataset.swiped = '1';
          } else {
            inner.style.transform = '';
            delete inner.dataset.swiped;
          }
        }
      }
    }, { passive: true });
  });

  // Swipe action buttons
  el.querySelectorAll('.swipe-action').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const chatId = btn.dataset.chatId;
      const action = btn.dataset.action;
      if (action === 'delete') {
        if (confirm('Видалити цей чат?')) {
          deleteChat(chatId);
        } else {
          // Reset swipe
          const inner = btn.closest('.chat-item')?.querySelector('.chat-item-inner');
          if (inner) { inner.style.transform = ''; delete inner.dataset.swiped; }
        }
      } else if (action === 'archive') {
        archiveChat(chatId);
      } else if (action === 'unarchive') {
        unarchiveChat(chatId);
      }
    });
  });

  // Search input
  const searchEl = document.getElementById('chatSearchInput');
  if (searchEl) {
    searchEl.addEventListener('input', (e) => {
      state.chatSearchQuery = e.target.value;
      renderChatList();
      // Restore focus
      setTimeout(() => {
        const newSearch = document.getElementById('chatSearchInput');
        if (newSearch) {
          newSearch.focus();
          newSearch.setSelectionRange(newSearch.value.length, newSearch.value.length);
        }
      }, 0);
    });
  }
  const clearEl = document.getElementById('chatSearchClear');
  if (clearEl) {
    clearEl.addEventListener('click', () => {
      state.chatSearchQuery = '';
      renderChatList();
    });
  }

  // Selection actions
  document.getElementById('selectionCancel')?.addEventListener('click', () => {
    state.selectionMode = false;
    state.selectedChatIds.clear();
    renderChatList();
  });
  document.getElementById('selectionDelete')?.addEventListener('click', () => {
    const count = state.selectedChatIds.size;
    if (!count) return;
    if (confirm(`Видалити ${count} ${count === 1 ? 'чат' : 'чатів'}?`)) {
      for (const id of state.selectedChatIds) deleteChat(id, false);
      state.selectionMode = false;
      state.selectedChatIds.clear();
      saveChats();
      renderChatList();
    }
  });
  document.getElementById('selectionArchive')?.addEventListener('click', () => {
    for (const id of state.selectedChatIds) {
      if (!state.archivedChatIds.includes(id)) state.archivedChatIds.push(id);
    }
    state.selectionMode = false;
    state.selectedChatIds.clear();
    saveChats();
    renderChatList();
    flash('Перенесено в архів');
  });
}

function toggleChatSelection(chatId) {
  if (state.selectedChatIds.has(chatId)) {
    state.selectedChatIds.delete(chatId);
  } else {
    state.selectedChatIds.add(chatId);
  }
  renderChatList();
}

function deleteChat(chatId, rerender = true) {
  delete state.chats[chatId];
  state.chatOrder = state.chatOrder.filter(id => id !== chatId);
  state.archivedChatIds = state.archivedChatIds.filter(id => id !== chatId);
  if (rerender) { saveChats(); renderChatList(); }
}

function archiveChat(chatId) {
  if (!state.archivedChatIds.includes(chatId)) state.archivedChatIds.push(chatId);
  saveChats();
  renderChatList();
  flash('Перенесено в архів');
}

function unarchiveChat(chatId) {
  state.archivedChatIds = state.archivedChatIds.filter(id => id !== chatId);
  saveChats();
  renderChatList();
  flash('Повернуто зі архіву');
}

function renderChatItem(c, isArchived = false) {
  const participants = c.participants || [];
  const lastMsg = [...(c.messages || [])].reverse().find(m => !m.loading && !m.hidden);
  const preview = lastMsg ? (lastMsg.role === 'user' ? 'Ти: ' : '') + (lastMsg.content || '').slice(0, 50) : 'Новий чат';
  const isMulti = participants.length > 1;

  let avatars;
  if (isMulti) {
    avatars = `<div class="chat-avatars">` +
      participants.slice(0, 4).map((p, i) =>
        `<div class="avatar pos-${i+1}" style="--color: ${AI_CONFIG[p.ai].color};">${AI_CONFIG[p.ai].logo}</div>`
      ).join('') + `</div>`;
  } else if (participants[0]) {
    const ai = AI_CONFIG[participants[0].ai];
    avatars = `<div class="chat-avatars single">
      <div class="avatar pos-1" style="--color: ${ai.color};">${ai.logo}</div>
    </div>`;
  } else {
    avatars = `<div class="chat-avatars"></div>`;
  }

  const modeLabel = isMulti ? (c.mode ? MODES[c.mode].name.toUpperCase() : 'РАДА') : AI_CONFIG[participants[0]?.ai]?.name.toUpperCase() || '';
  const badgeClass = isMulti ? 'council' : '';

  const isSelected = state.selectedChatIds.has(c.id);
  const checkbox = state.selectionMode
    ? `<div class="selection-checkbox ${isSelected ? 'checked' : ''}"></div>`
    : '';

  const swipeActions = isArchived
    ? `<button class="swipe-action swipe-unarchive" data-action="unarchive" data-chat-id="${c.id}">↩</button>
       <button class="swipe-action swipe-delete" data-action="delete" data-chat-id="${c.id}">✕</button>`
    : `<button class="swipe-action swipe-archive" data-action="archive" data-chat-id="${c.id}">📦</button>
       <button class="swipe-action swipe-delete" data-action="delete" data-chat-id="${c.id}">✕</button>`;

  return `
    <div class="chat-item ${isSelected ? 'selected' : ''} ${isArchived ? 'archived' : ''}" data-chat-id="${c.id}">
      <div class="chat-item-inner">
        ${checkbox}
        ${avatars}
        <div class="chat-meta">
          <div class="chat-title">${escapeHtml(c.name || 'Без назви')}</div>
          <div class="chat-preview">
            <span class="chat-mode-badge ${badgeClass}">${modeLabel}</span>
            ${escapeHtml(preview)}
          </div>
        </div>
        <div class="chat-time">${fmtDate(c.updatedAt || c.createdAt)}</div>
      </div>
      <div class="swipe-actions-wrap">
        ${swipeActions}
      </div>
    </div>`;
}

// ==================== NEW CHAT SCREEN ====================
function initNewChatScreen() {
  // Reset draft
  state.newChatDraft = {
    name: '',
    participants: AI_ORDER.map(ai => ({
      ai,
      selected: false,
      level: 1 // default: 2nd level
    })),
    mode: 'synthesis',
    debateRounds: 2,
    webSearch: false,
    research: false
  };

  document.getElementById('chatNameInput').value = '';
  renderAICards();
  renderModePicker();
  updateCouncilVisibility();
  updateCostEstimate();
  updateCreateButton();
}

function renderAICards() {
  const wrap = document.getElementById('aiCardsContainer');
  wrap.innerHTML = state.newChatDraft.participants.map((p, idx) => {
    const ai = AI_CONFIG[p.ai];
    const hasKey = !!state.keys[p.ai];
    const model = MODELS[p.ai][p.level];
    return `
      <div class="ai-card ${p.selected ? 'selected' : ''} ${!hasKey ? 'disabled' : ''}"
           style="--ai-color: ${ai.color}; --level-color: ${LEVEL_COLORS[p.level]};"
           data-idx="${idx}">
        <div class="ai-card-head">
          <div class="ai-logo">${ai.logo}</div>
          <div class="ai-card-name">
            ${ai.name}
            ${!hasKey ? '<span class="missing">Немає ключа</span>' : ''}
          </div>
          <div class="toggle" data-toggle="${idx}"></div>
        </div>
        <div class="level-slider-wrap">
          <div class="level-slider-label">
            <span>${LEVEL_NAMES[p.level]}</span>
            <span class="level-name">${model.name}</span>
          </div>
          <input type="range" class="slider" min="0" max="3" step="1" value="${p.level}" data-level="${idx}">
          <div class="price-hint">~$${model.inPrice.toFixed(2)} / $${model.outPrice.toFixed(2)} за 1M токенів (in/out)</div>
        </div>
      </div>`;
  }).join('');

  wrap.querySelectorAll('[data-toggle]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = +el.dataset.toggle;
      const p = state.newChatDraft.participants[idx];
      if (!state.keys[p.ai]) { flash('Додай API ключ у налаштуваннях', true); return; }
      p.selected = !p.selected;
      renderAICards();
      updateCouncilVisibility();
      updateCostEstimate();
      updateCreateButton();
      autoName();
    });
  });

  wrap.querySelectorAll('[data-level]').forEach(el => {
    el.addEventListener('input', (e) => {
      const idx = +el.dataset.level;
      state.newChatDraft.participants[idx].level = +e.target.value;
      renderAICards();
      updateCostEstimate();
    });
  });
}

function renderModePicker() {
  const wrap = document.getElementById('modePicker');
  wrap.innerHTML = Object.entries(MODES).map(([key, m]) => `
    <div class="mode-option ${state.newChatDraft.mode === key ? 'active' : ''}" data-mode="${key}">
      <div class="mode-name">${m.name}</div>
      <div class="mode-desc">${m.desc}</div>
    </div>
  `).join('');
  wrap.querySelectorAll('[data-mode]').forEach(el => {
    el.addEventListener('click', () => {
      state.newChatDraft.mode = el.dataset.mode;
      renderModePicker();
      document.getElementById('debateRoundsWrap').style.display = state.newChatDraft.mode === 'debate' ? 'block' : 'none';
      updateCostEstimate();
    });
  });

  // Debate rounds
  document.querySelectorAll('.round-btn').forEach(b => {
    b.classList.toggle('active', +b.dataset.rounds === state.newChatDraft.debateRounds);
    b.onclick = () => {
      state.newChatDraft.debateRounds = +b.dataset.rounds;
      document.querySelectorAll('.round-btn').forEach(x =>
        x.classList.toggle('active', +x.dataset.rounds === state.newChatDraft.debateRounds));
      updateCostEstimate();
    };
  });

  document.getElementById('debateRoundsWrap').style.display = state.newChatDraft.mode === 'debate' ? 'block' : 'none';
}

function updateCouncilVisibility() {
  const selected = state.newChatDraft.participants.filter(p => p.selected);
  const isMulti = selected.length > 1;
  document.getElementById('councilBlock').style.display = isMulti ? 'block' : 'none';
}

function updateCreateButton() {
  const selected = state.newChatDraft.participants.filter(p => p.selected);
  document.getElementById('createChatBtn').disabled = selected.length === 0;
}

function autoName() {
  const el = document.getElementById('chatNameInput');
  if (el.value && el.dataset.auto !== '1') return;
  const selected = state.newChatDraft.participants.filter(p => p.selected);
  if (selected.length === 0) { el.value = ''; return; }
  if (selected.length === 1) {
    el.value = `Чат з ${AI_CONFIG[selected[0].ai].name}`;
  } else {
    el.value = `Рада: ${selected.map(p => AI_CONFIG[p.ai].name).join(' · ')}`;
  }
  el.dataset.auto = '1';
}

// ==================== COST ESTIMATE ====================
function updateCostEstimate() {
  const d = state.newChatDraft;
  const selected = d.participants.filter(p => p.selected);
  const box = document.getElementById('costEstimate');

  if (selected.length === 0) {
    box.innerHTML = `<div class="cost-main">$0.00</div><div class="cost-detail">Обери учасників щоб побачити оцінку</div>`;
    return;
  }

  // Assume ~800 tokens input, ~1200 tokens output per AI per request
  const INPUT_TOK = 800;
  const OUTPUT_TOK = 1200;

  let runs = 1; // how many times each AI answers
  let synth = 0;
  if (selected.length > 1) {
    if (d.mode === 'debate') runs = d.debateRounds;
    if (d.mode === 'synthesis' || d.mode === 'vote') synth = 1;
    if (d.mode === 'debate') synth = 1;
  }
  if (d.research) runs += 3; // 3 extra iterations

  let total = 0;
  selected.forEach(p => {
    const m = MODELS[p.ai][p.level];
    const cost = runs * (INPUT_TOK * m.inPrice + OUTPUT_TOK * m.outPrice) / 1_000_000;
    total += cost;
  });

  // Synthesizer uses Claude Opus-level or top of first selected
  if (synth > 0) {
    const synthAI = state.keys.claude ? 'claude' : selected[0].ai;
    const synthLevel = 3; // assume highest for synthesis
    const m = MODELS[synthAI][synthLevel];
    total += synth * (INPUT_TOK * 2 * m.inPrice + OUTPUT_TOK * m.outPrice) / 1_000_000;
  }

  let cls = '';
  if (total > 0.10) cls = 'warn';
  if (total > 0.50) cls = 'danger';

  const runsLabel = runs > 1 ? ` × ${runs} раунди` : '';
  const modeLabel = selected.length > 1 ? ` · ${MODES[d.mode].name}` : '';
  const researchLabel = d.research ? ' · Research' : '';

  box.innerHTML = `
    <div class="cost-main ${cls}">$${total.toFixed(4)}</div>
    <div class="cost-detail">${selected.length} AI${modeLabel}${runsLabel}${researchLabel}<br>Оцінка приблизна, залежить від довжини</div>`;
}

// ==================== CREATE CHAT ====================
function createChat() {
  const d = state.newChatDraft;
  const selected = d.participants.filter(p => p.selected);
  if (selected.length === 0) return;
  const name = document.getElementById('chatNameInput').value.trim() || `Чат ${new Date().toLocaleDateString('uk')}`;

  const chat = {
    id: uid(),
    name,
    participants: selected.map(p => ({ ai: p.ai, level: p.level })),
    mode: selected.length > 1 ? d.mode : null,
    debateRounds: d.debateRounds,
    webSearch: d.webSearch,
    research: d.research,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    messages: []
  };

  state.chats[chat.id] = chat;
  state.chatOrder.unshift(chat.id);
  saveChats();
  openChat(chat.id);
}

// ==================== OPEN CHAT ====================
function openChat(chatId) {
  const c = state.chats[chatId];
  if (!c) return;
  state.activeChatId = chatId;
  state.showFullLog = false;
  state.pendingAttachments = [];
  updateAttachmentsUI();
  goScreen('chat');
}

function renderChatScreen() {
  const c = state.chats[state.activeChatId];
  if (!c) return;

  // Header
  document.getElementById('chatHeaderTitle').textContent = c.name;
  const participants = c.participants || [];
  const subEl = document.getElementById('chatHeaderSub');
  let sub;
  if (participants.length === 1) {
    const m = MODELS[participants[0].ai][participants[0].level];
    sub = m.name.toUpperCase();
  } else {
    const modeName = c.mode ? MODES[c.mode].name.toUpperCase() : 'РАДА';
    sub = `${participants.length} AI · ${modeName}${c.research && participants.length === 1 ? ' · RESEARCH' : ''}`;
  }

  // Session cost pill (Пункт 7)
  const cost = getSessionCost(c.id);
  const costHtml = cost > 0 ? ` <span class="session-cost-pill">💰 ${formatCost(cost)}</span>` : '';

  // Make subtitle clickable for level change (Пункт 2)
  subEl.innerHTML = `<span class="chat-sub-level" style="cursor:pointer;text-decoration:underline dotted;">${sub}</span>${costHtml}`;
  const levelSpan = subEl.querySelector('.chat-sub-level');
  if (levelSpan) {
    levelSpan.addEventListener('click', () => openLevelMenu(c));
  }

  // Update menu label
  document.getElementById('menuToggleLogLabel').textContent = state.showFullLog ? 'Згорнути до головних' : 'Повний лог розмови';

  // Background watermarks
  renderChatBackground(c);

  // Messages
  renderMessages();
}

// Open level menu for this chat (Пункт 2)
function openLevelMenu(c) {
  const existing = document.getElementById('levelMenuOverlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'levelMenuOverlay';
  overlay.className = 'level-menu-overlay open';

  const participants = c.participants || [];
  let html = `<div class="level-menu-sheet">
    <div class="level-menu-title">Змінити рівень AI для цього чату</div>`;

  participants.forEach(p => {
    const ai = AI_CONFIG[p.ai];
    html += `<div style="margin-bottom:14px;">
      <div style="font-weight:600;font-size:13px;margin-bottom:6px;color:${ai.color};">${ai.name}</div>`;
    for (let lvl = 0; lvl < 4; lvl++) {
      const m = MODELS[p.ai][lvl];
      const isCurrent = p.level === lvl;
      html += `<div class="level-option ${isCurrent ? 'current' : ''}" data-ai="${p.ai}" data-level="${lvl}">
        <div class="level-option-dot" style="background:${LEVEL_COLORS[lvl]};"></div>
        <div class="level-option-info">
          <div class="level-option-name">${LEVEL_NAMES[lvl]}</div>
          <div class="level-option-model">${m.name}</div>
        </div>
      </div>`;
    }
    html += `</div>`;
  });
  html += `<button class="settings-btn" id="levelMenuClose" style="width:100%;margin-top:8px;">Готово</button></div>`;
  overlay.innerHTML = html;
  document.body.appendChild(overlay);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.id === 'levelMenuClose') {
      overlay.remove();
      return;
    }
    const opt = e.target.closest('.level-option');
    if (opt) {
      const ai = opt.dataset.ai;
      const level = parseInt(opt.dataset.level);
      const p = c.participants.find(x => x.ai === ai);
      if (p) {
        p.level = level;
        saveChats();
        flash(`${AI_CONFIG[ai].name}: ${LEVEL_NAMES[level]}`);
        renderChatScreen();
      }
    }
  });
}

function renderChatBackground(c) {
  const bg = document.getElementById('chatBg');
  bg.innerHTML = '';
  const participants = c.participants || [];
  const isMulti = participants.length > 1;

  const watermarkSvg = isMulti ? LOGOS.council : AI_CONFIG[participants[0]?.ai]?.logo;
  const color = isMulti ? AI_CONFIG.council.color : AI_CONFIG[participants[0]?.ai]?.color || '#fff';
  if (!watermarkSvg) return;

  // Create 9 scattered watermarks
  const positions = [
    { t: 8, l: 10, s: 140, r: -8 },
    { t: 20, l: 70, s: 90, r: 12 },
    { t: 35, l: 30, s: 120, r: -15 },
    { t: 48, l: 78, s: 110, r: 5 },
    { t: 60, l: 15, s: 95, r: 20 },
    { t: 72, l: 60, s: 130, r: -10 },
    { t: 85, l: 25, s: 100, r: 15 },
    { t: 92, l: 75, s: 90, r: -20 },
    { t: 5, l: 45, s: 80, r: 8 }
  ];
  bg.innerHTML = positions.map(p => `
    <div class="watermark" style="top: ${p.t}%; left: ${p.l}%; width: ${p.s}px; height: ${p.s}px; color: ${color}; transform: rotate(${p.r}deg);">
      ${watermarkSvg}
    </div>
  `).join('');
}

// ==================== RENDER MESSAGES ====================
function renderMessages() {
  const wrap = document.getElementById('messages');
  const c = state.chats[state.activeChatId];
  if (!c) return;

  const msgs = c.messages || [];
  if (msgs.length === 0) {
    const isMulti = c.participants.length > 1;
    wrap.innerHTML = `
      <div class="chat-empty">
        <h2>${escapeHtml(c.name)}</h2>
        <p>${isMulti ? `Задай питання — ${c.participants.length} AI відповідатимуть за режимом "${MODES[c.mode].name}".` : `Почни розмову з ${AI_CONFIG[c.participants[0].ai].name}.`}</p>
      </div>`;
    return;
  }

  // Filter messages based on showFullLog
  const visibleMsgs = state.showFullLog
    ? msgs.filter(m => !m.loading || msgs.indexOf(m) >= msgs.length - 5)
    : msgs.filter(m => m.role === 'user' || m.isPrimary || m.loading);

  wrap.innerHTML = visibleMsgs.map((m, i) => {
    // Add round separator if needed
    const prev = visibleMsgs[i-1];
    let sep = '';
    if (m.round && (!prev || prev.round !== m.round)) {
      sep = `<div class="round-sep">Раунд ${m.round}</div>`;
    }
    return sep + renderMessage(m);
  }).join('');

  // Attach handlers to action buttons (copy, memory)
  wrap.querySelectorAll('.msg-action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const msgId = btn.dataset.msgId;
      const action = btn.dataset.action;
      const msg = (state.chats[state.activeChatId]?.messages || []).find(m => m.id === msgId);
      if (!msg || !msg.content) return;
      if (action === 'copy') copyMessageText(msg.content);
      else if (action === 'memory') saveFactFromMessage(msg.content);
    });
  });

  // TL;DR button handler (Пункт 5)
  wrap.querySelectorAll('.tldr-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const msgId = btn.dataset.msgId;
      const msg = (state.chats[state.activeChatId]?.messages || []).find(m => m.id === msgId);
      if (!msg || !msg.content) return;

      btn.textContent = '⏳ Стискаю...';
      btn.disabled = true;

      // Use cheapest available AI
      let aiToUse = null;
      if (state.keys.claude) aiToUse = 'claude';
      else if (state.keys.gemini) aiToUse = 'gemini';
      else if (state.keys.openai) aiToUse = 'openai';
      if (!aiToUse) {
        flash('Немає ключа для TL;DR', true);
        btn.textContent = '⚡ TL;DR';
        btn.disabled = false;
        return;
      }

      const model = MODELS[aiToUse][0];
      const prompt = `Стисни цей текст до 1-2 речень українською, збережи головну суть без води:\n\n${msg.content}`;
      try {
        const { text } = await CALLERS[aiToUse]([{role:'user', content: prompt}], { model: model.id });
        msg.tldr = (text || '').trim();
        saveChats();
        renderMessages();
      } catch (err) {
        flash('TL;DR не вдався: ' + err.message, true);
        btn.textContent = '⚡ TL;DR';
        btn.disabled = false;
      }
    });
  });

  requestAnimationFrame(() => {
    const main = document.querySelector('#screenChat main');
    if (main) main.scrollTop = main.scrollHeight;
  });
}

function renderMessage(m) {
  if (!m) return '';
  const isUser = m.role === 'user';
  const isCouncilSynth = m.source === 'council-synth';
  let ai;
  if (isUser) {
    ai = { name: 'ТИ', color: '#e8e8f0', logo: LOGOS.user };
  } else if (isCouncilSynth) {
    ai = { name: 'РАДА', color: (AI_CONFIG.council && AI_CONFIG.council.color) || '#d4ff3a', logo: LOGOS.council };
  } else if (m.source && AI_CONFIG[m.source]) {
    ai = AI_CONFIG[m.source];
  } else {
    ai = { name: '?', color: '#888888', logo: LOGOS.user };
  }
  // Safety: ensure ai has all fields
  if (!ai.color) ai.color = '#888888';
  if (!ai.logo) ai.logo = '';
  if (!ai.name) ai.name = '?';

  let bodyContent;
  if (m.loading) {
    bodyContent = `<div class="thinking"><span></span><span></span><span></span>${m.loadingLabel ? `<span class="thinking-label">${escapeHtml(m.loadingLabel)}</span>` : ''}</div>`;
  } else if (m.error) {
    bodyContent = `<div class="error-msg">✕ ${escapeHtml(m.content || 'Невідома помилка')}</div>`;
  } else {
    bodyContent = renderMd(m.content || '');
    if (m.attachments && m.attachments.length > 0) {
      bodyContent += `<div class="msg-attachments">${m.attachments.map(a => renderAttachment(a)).join('')}</div>`;
    }
  }

  const modelTag = m.modelShort ? `<span class="model-tag" style="--level-color: ${m.levelColor || 'var(--text-mute)'};">${escapeHtml(m.modelShort)}</span>` : '';
  const roundTag = m.round ? `<span class="round-tag">R${m.round}</span>` : '';
  const compactClass = (state.showFullLog && !m.isPrimary && !isUser) ? 'compact' : '';

  // Confidence badge (Пункт 4) — only for synthesis messages with meta
  const confidenceHtml = (isCouncilSynth && m.synthMeta) ? renderConfidenceBadge(m.synthMeta) : '';

  // Contribution block (Пункт 12) — only for synthesis messages with meta
  const contributionHtml = (isCouncilSynth && m.synthMeta) ? renderContributionBlock(m.synthMeta) : '';

  // TL;DR section (Пункт 5)
  const hasLongContent = !isUser && !m.loading && !m.error && m.content && m.content.length > 400;
  const tldrBtnHtml = hasLongContent
    ? (m.tldr
        ? `<div class="tldr-content">${renderMd(m.tldr)}</div>`
        : `<button class="tldr-btn" data-action="tldr" data-msg-id="${m.id}">⚡ TL;DR</button>`)
    : '';

  // Action buttons — only for non-user, non-loading, non-error AI responses with content
  const actionsHtml = (!isUser && !m.loading && !m.error && m.content)
    ? `<div class="msg-actions">
         <button class="msg-action-btn" data-action="copy" data-msg-id="${m.id}">📋 Копіювати</button>
         <button class="msg-action-btn" data-action="memory" data-msg-id="${m.id}">🧠 В пам'ять</button>
       </div>`
    : '';

  return `
    <div class="msg ${isUser ? 'user' : ''} ${isCouncilSynth ? 'council-synth' : ''} ${compactClass}" style="--msg-color: ${ai.color};" data-msg-id="${m.id}">
      <div class="msg-head">
        <span class="msg-logo">${ai.logo}</span>
        <span class="author">${escapeHtml(ai.name)}</span>
        ${modelTag}
        ${roundTag}
        ${confidenceHtml}
        <span class="time">${fmtTime(m.time)}</span>
      </div>
      <div class="msg-body">${bodyContent}</div>
      ${tldrBtnHtml}
      ${contributionHtml}
      ${actionsHtml}
    </div>`;
}

function renderAttachment(a) {
  if (a.kind === 'image' && a.data) {
    return `<div class="msg-attachment"><img src="data:${a.mime};base64,${a.data}" alt=""></div>`;
  }
  if (a.kind === 'pdf') {
    return `<div class="msg-attachment">📄 ${escapeHtml(a.name)}</div>`;
  }
  return `<div class="msg-attachment">📎 ${escapeHtml(a.name || 'файл')}</div>`;
}

// ==================== ATTACHMENTS ====================
function handleFiles(files) {
  for (const file of files) {
    if (file.size > 8 * 1024 * 1024) { flash(`${file.name} > 8 МБ`, true); continue; }
    const reader = new FileReader();
    reader.onload = () => {
      const data = reader.result.split(',')[1]; // base64
      const kind = file.type.startsWith('image/') ? 'image' : (file.type === 'application/pdf' ? 'pdf' : 'other');
      state.pendingAttachments.push({
        id: uid(),
        kind,
        name: file.name,
        mime: file.type,
        size: file.size,
        data
      });
      updateAttachmentsUI();
    };
    reader.readAsDataURL(file);
  }
}

function updateAttachmentsUI() {
  const wrap = document.getElementById('attachmentsPreview');
  const btn = document.getElementById('attachBtn');
  if (state.pendingAttachments.length === 0) {
    wrap.classList.remove('show');
    btn.classList.remove('has-files');
    return;
  }
  wrap.classList.add('show');
  btn.classList.add('has-files');
  wrap.innerHTML = state.pendingAttachments.map(a => {
    const thumb = a.kind === 'image'
      ? `<img src="data:${a.mime};base64,${a.data}" alt="">`
      : `<div style="width:30px;height:30px;background:var(--bg-3);border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:14px;">${a.kind === 'pdf' ? '📄' : '📎'}</div>`;
    return `<div class="attach-chip">
      ${thumb}
      <span class="chip-name">${escapeHtml(a.name)}</span>
      <button class="chip-remove" data-remove="${a.id}">×</button>
    </div>`;
  }).join('');
  wrap.querySelectorAll('[data-remove]').forEach(b => {
    b.onclick = () => {
      state.pendingAttachments = state.pendingAttachments.filter(a => a.id !== b.dataset.remove);
      updateAttachmentsUI();
    };
  });
}

// ==================== API CALLS ====================
// All support images for AI that handle them. PDFs for Claude/Gemini.

// ==================== API ERROR SANITIZER ====================
// Filters out any accidental key exposure and limits error details
function sanitizeApiError(status, rawText) {
  // Extract only safe parts of the error
  let message = '';
  try {
    const parsed = JSON.parse(rawText);
    message = parsed.error?.message || parsed.message || parsed.error || '';
  } catch {
    message = rawText;
  }
  // Remove any patterns that look like API keys
  message = String(message)
    .replace(/sk-ant-[a-zA-Z0-9_-]+/g, '[KEY_HIDDEN]')
    .replace(/sk-[a-zA-Z0-9_-]{20,}/g, '[KEY_HIDDEN]')
    .replace(/AIza[a-zA-Z0-9_-]{20,}/g, '[KEY_HIDDEN]')
    .replace(/pplx-[a-zA-Z0-9_-]+/g, '[KEY_HIDDEN]')
    .slice(0, 200);
  return `${status}: ${message}`;
}

async function callClaude(messages, opts = {}) {
  const key = state.keys.claude;
  if (!key) throw new Error('Немає Claude ключа');
  const model = opts.model || 'claude-sonnet-4-6';

  const body = {
    model,
    max_tokens: opts.research ? 4096 : 4096,
    messages
  };
  if (opts.system) body.system = opts.system;
  if (opts.webSearch) {
    body.tools = [{ type: 'web_search_20250305', name: 'web_search', max_uses: opts.research ? 5 : 2 }];
  }

  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify(body)
  });
  if (!resp.ok) throw new Error('Claude ' + sanitizeApiError(resp.status, await resp.text()));
  const data = await resp.json();
  const texts = (data.content || []).filter(b => b.type === 'text').map(b => b.text);
  return { text: texts.join('\n\n'), model };
}

async function callOpenAI(messages, opts = {}) {
  const key = state.keys.openai;
  if (!key) throw new Error('Немає OpenAI ключа');
  const model = opts.model || 'gpt-5.4-mini';
  const msgs = opts.system ? [{role:'system', content: opts.system}, ...messages] : messages;

  // GPT-5.x models require max_completion_tokens, older models use max_tokens
  const isGPT5 = model.startsWith('gpt-5');
  const body = {
    model,
    messages: msgs
  };
  if (isGPT5) {
    body.max_completion_tokens = 4096;
  } else {
    body.max_tokens = 4096;
  }

  const resp = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'authorization': `Bearer ${key}` },
    body: JSON.stringify(body)
  });
  if (!resp.ok) throw new Error('OpenAI ' + sanitizeApiError(resp.status, await resp.text()));
  const data = await resp.json();
  return { text: data.choices[0].message.content, model };
}

async function callGemini(messages, opts = {}) {
  const key = state.keys.gemini;
  if (!key) throw new Error('Немає Gemini ключа');
  const model = opts.model || 'gemini-2.5-flash';

  const contents = messages.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: (Array.isArray(m.content) ? m.content : [{ text: m.content }])
      .map(p => {
        if (p.text) return { text: p.text };
        if (p.type === 'image' && p.source) return { inline_data: { mime_type: p.source.media_type, data: p.source.data }};
        if (p.type === 'document' && p.source) return { inline_data: { mime_type: p.source.media_type, data: p.source.data }};
        return p;
      })
  }));

  const body = { contents };
  if (opts.system) body.systemInstruction = { parts: [{ text: opts.system }] };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!resp.ok) throw new Error('Gemini ' + sanitizeApiError(resp.status, await resp.text()));
  const data = await resp.json();
  const text = data.candidates?.[0]?.content?.parts?.map(p => p.text).filter(Boolean).join('\n') || '';
  return { text, model };
}

async function callPerplexity(messages, opts = {}) {
  const key = state.keys.perplexity;
  if (!key) throw new Error('Немає Perplexity ключа');
  const model = opts.model || 'sonar-pro';
  const msgs = opts.system ? [{role:'system', content: opts.system}, ...messages] : messages;

  const resp = await fetch('https://api.perplexity.ai/chat/completions', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'authorization': `Bearer ${key}` },
    body: JSON.stringify({ model, messages: msgs })
  });
  if (!resp.ok) throw new Error('Perplexity ' + sanitizeApiError(resp.status, await resp.text()));
  const data = await resp.json();
  let text = data.choices[0].message.content || '';
  // Reasoning models (sonar-reasoning, sonar-reasoning-pro) include <think>...</think> blocks with internal CoT
  // First try closed blocks, then fallback to unclosed (truncated by token limit)
  text = text.replace(/<think>[\s\S]*?<\/think>/gi, '');
  // If there's still an orphan opening <think> without closing tag — strip from it to end
  const orphanStart = text.search(/<think>/i);
  if (orphanStart !== -1) {
    text = text.slice(0, orphanStart);
  }
  text = text.trim();
  return { text, model };
}

const CALLERS = { claude: callClaude, openai: callOpenAI, gemini: callGemini, perplexity: callPerplexity };

// ==================== STATS TRACKING ====================
// Rough token estimation: 1 token ≈ 4 chars for English/Ukrainian
function estimateTokens(text) {
  if (!text) return 0;
  return Math.ceil(String(text).length / 4);
}

function findModelPricing(ai, modelId) {
  const models = MODELS[ai] || [];
  return models.find(m => m.id === modelId) || null;
}

function computeCost(ai, modelId, inputTokens, outputTokens) {
  const model = findModelPricing(ai, modelId);
  if (!model) return 0;
  return (inputTokens / 1_000_000) * model.inPrice + (outputTokens / 1_000_000) * model.outPrice;
}

function trackUsage(ai, modelId, inputText, outputText, chatId) {
  const inputTokens = typeof inputText === 'number' ? inputText : estimateTokens(
    Array.isArray(inputText) ? inputText.map(m => typeof m.content === 'string' ? m.content : JSON.stringify(m.content)).join('\n') : inputText
  );
  const outputTokens = typeof outputText === 'number' ? outputText : estimateTokens(outputText);
  const cost = computeCost(ai, modelId, inputTokens, outputTokens);

  // Update global stats
  if (!state.stats.byAI[ai]) {
    state.stats.byAI[ai] = { requests: 0, inputTokens: 0, outputTokens: 0, estCost: 0 };
  }
  state.stats.byAI[ai].requests += 1;
  state.stats.byAI[ai].inputTokens += inputTokens;
  state.stats.byAI[ai].outputTokens += outputTokens;
  state.stats.byAI[ai].estCost += cost;

  // Update chat-level stats
  if (chatId && state.chats[chatId]) {
    const c = state.chats[chatId];
    if (!c.sessionStats) c.sessionStats = { totalCost: 0, byAI: {} };
    if (!c.sessionStats.byAI[ai]) c.sessionStats.byAI[ai] = { requests: 0, cost: 0 };
    c.sessionStats.byAI[ai].requests += 1;
    c.sessionStats.byAI[ai].cost += cost;
    c.sessionStats.totalCost += cost;
  }
  saveStats();
  return { inputTokens, outputTokens, cost };
}

function getSessionCost(chatId) {
  const c = state.chats[chatId];
  if (!c || !c.sessionStats) return 0;
  return c.sessionStats.totalCost || 0;
}

function formatCost(cost) {
  if (cost < 0.001) return '< $0.001';
  if (cost < 0.01) return '$' + cost.toFixed(4);
  if (cost < 1) return '$' + cost.toFixed(3);
  return '$' + cost.toFixed(2);
}

// Parse meta JSON from synthesis response (confidence + contributions)
function parseSynthMeta(text) {
  if (!text) return { cleanedText: text, meta: null };
  // Look for ```json ... ``` block at the end
  const jsonBlockRegex = /```json\s*\n?([\s\S]*?)\n?```\s*$/i;
  const match = text.match(jsonBlockRegex);
  if (!match) return { cleanedText: text, meta: null };
  try {
    const meta = JSON.parse(match[1].trim());
    const cleanedText = text.replace(jsonBlockRegex, '').trim();
    return { cleanedText, meta };
  } catch (e) {
    return { cleanedText: text, meta: null };
  }
}

// Render confidence badge (Пункт 4)
function renderConfidenceBadge(meta) {
  if (!meta || !meta.confidence) return '';
  const levels = {
    high: { icon: '✅', label: 'Висока впевненість', cls: 'confidence-high' },
    medium: { icon: '⚠️', label: 'Середня впевненість', cls: 'confidence-medium' },
    low: { icon: '❌', label: 'Низька впевненість', cls: 'confidence-low' }
  };
  const cfg = levels[meta.confidence] || levels.medium;
  const reason = meta.confidence_reason ? ` — ${escapeHtml(meta.confidence_reason)}` : '';
  return `<span class="confidence-badge ${cfg.cls}" title="${escapeHtml(reason)}">${cfg.icon} ${cfg.label}</span>`;
}

// Render contribution block (Пункт 12)
function renderContributionBlock(meta) {
  if (!meta || !Array.isArray(meta.contributions) || meta.contributions.length === 0) return '';
  const maxInsights = Math.max(1, ...meta.contributions.map(c => c.unique_insights || 0));
  const rows = meta.contributions.map(c => {
    const ai = AI_CONFIG[c.ai];
    if (!ai) return '';
    const count = c.unique_insights || 0;
    const pct = Math.round((count / maxInsights) * 100);
    const supportedBy = (c.supported_by || []).map(a => AI_CONFIG[a]?.name || a).join(', ');
    const supportHtml = supportedBy ? `<div style="font-size:10px;color:var(--text-dim);margin-top:2px;">Підтримали: ${escapeHtml(supportedBy)}</div>` : '';
    return `<div class="contribution-row">
      <div class="contribution-ai" style="color:${ai.color};">${escapeHtml(ai.name)}</div>
      <div style="flex:1;">
        <div class="contribution-bar"><div class="contribution-bar-fill" style="width:${pct}%;"></div></div>
        ${supportHtml}
      </div>
      <div class="contribution-count">${count}</div>
    </div>`;
  }).join('');
  return `<div class="contribution-block">
    <div class="contribution-header">📊 Внесок у фінал (унікальні інсайти)</div>
    ${rows}
  </div>`;
}

// ==================== BUILD MESSAGE WITH ATTACHMENTS ====================
// ==================== MEMORY PROMPT ====================
// Builds the system prompt that carries the user's profile + saved facts to every AI call
function buildMemoryPrompt() {
  const parts = [];
  if (state.memory.profile && state.memory.profile.trim()) {
    parts.push('ПРО КОРИСТУВАЧА:\n' + state.memory.profile.trim());
  }
  if (state.memory.facts && state.memory.facts.length > 0) {
    const factsText = state.memory.facts.map((f, i) => `${i + 1}. ${f.text}`).join('\n');
    parts.push('ЗБЕРЕЖЕНІ ФАКТИ (пам\'ять користувача):\n' + factsText);
  }
  if (parts.length === 0) return '';
  return parts.join('\n\n') + '\n\nВикористовуй цю інформацію якщо вона доречна. Не згадуй її явно якщо про це не запитують.';
}

function buildMessagesForAI(aiName, history, userText, attachments) {
  // Different AIs format attachments differently
  const supportsPdf = aiName === 'claude' || aiName === 'gemini';
  const supportsImage = true;

  const userContent = [];
  userContent.push({ text: userText });

  if (attachments && attachments.length > 0) {
    for (const a of attachments) {
      if (a.kind === 'image' && supportsImage) {
        if (aiName === 'claude') {
          userContent.push({ type: 'image', source: { type: 'base64', media_type: a.mime, data: a.data } });
        } else if (aiName === 'openai') {
          userContent.push({ type: 'image_url', image_url: { url: `data:${a.mime};base64,${a.data}` } });
        } else if (aiName === 'gemini') {
          userContent.push({ type: 'image', source: { media_type: a.mime, data: a.data }});
        } else if (aiName === 'perplexity') {
          userContent.push({ type: 'image_url', image_url: { url: `data:${a.mime};base64,${a.data}` } });
        }
      } else if (a.kind === 'pdf' && supportsPdf) {
        if (aiName === 'claude') {
          userContent.push({ type: 'document', source: { type: 'base64', media_type: 'application/pdf', data: a.data }});
        } else if (aiName === 'gemini') {
          userContent.push({ type: 'document', source: { media_type: 'application/pdf', data: a.data }});
        }
      } else if (a.kind === 'pdf') {
        // Not supported, prepend note to text
        userContent[0].text += `\n\n[Прикріплений PDF "${a.name}" — ${aiName} не підтримує PDF, надішли до Claude або Gemini]`;
      }
    }
  }

  // Format for each AI
  const msgs = [];
  if (aiName === 'claude') {
    for (const h of history) msgs.push({ role: h.role, content: h.content });
    // Last message: build multi-part
    const parts = [];
    for (const p of userContent) {
      if (p.text) parts.push({ type: 'text', text: p.text });
      else if (p.type) parts.push(p);
    }
    msgs.push({ role: 'user', content: parts.length === 1 && parts[0].type === 'text' ? parts[0].text : parts });
  } else if (aiName === 'openai') {
    for (const h of history) msgs.push({ role: h.role, content: h.content });
    // OpenAI multimodal format
    const parts = [];
    for (const p of userContent) {
      if (p.text) parts.push({ type: 'text', text: p.text });
      else if (p.type) parts.push(p);
    }
    msgs.push({ role: 'user', content: parts.length === 1 && parts[0].type === 'text' ? parts[0].text : parts });
  } else if (aiName === 'gemini') {
    for (const h of history) msgs.push({ role: h.role, content: h.content });
    msgs.push({ role: 'user', content: userContent });
  } else {
    // perplexity — simple text
    for (const h of history) msgs.push({ role: h.role, content: typeof h.content === 'string' ? h.content : String(h.content) });
    const textOnly = userContent.filter(p => p.text).map(p => p.text).join('\n');
    msgs.push({ role: 'user', content: textOnly });
  }

  return msgs;
}

// ==================== SEND ====================
async function handleSend() {
  // Prevent double-send race condition
  if (state.sendInProgress) return;

  const input = document.getElementById('input');
  const text = input.value.trim();
  if (!text && state.pendingAttachments.length === 0) return;

  const c = state.chats[state.activeChatId];
  if (!c) return;

  state.sendInProgress = true;
  const sendBtn = document.getElementById('sendBtn');
  if (sendBtn) sendBtn.disabled = true;

  const attachments = [...state.pendingAttachments];
  state.pendingAttachments = [];
  updateAttachmentsUI();
  input.value = '';
  adjustInput();

  // Add user message
  const userMsg = {
    id: uid(),
    role: 'user',
    content: text,
    attachments: attachments.length > 0 ? attachments : undefined,
    time: Date.now(),
    isPrimary: true
  };
  c.messages.push(userMsg);
  c.updatedAt = Date.now();
  saveChats();
  renderMessages();

  const isMulti = c.participants.length > 1;

  try {
    if (!isMulti) {
      await handleSingleAI(c, text, attachments);
    } else {
      await handleCouncil(c, text, attachments);
    }
  } catch (e) {
    console.error(e);
    flash(e.message || 'Помилка', true);
  } finally {
    state.sendInProgress = false;
    if (sendBtn) sendBtn.disabled = false;
  }
  saveChats();
  renderMessages();
  state.chatOrder = [c.id, ...state.chatOrder.filter(id => id !== c.id)];

  // Auto-generate chat name after first successful exchange (only if still default)
  const hasDefault = /^(Чат з |Рада:)/i.test(c.name || '');
  const aiMessages = (c.messages || []).filter(m => m.role === 'assistant' && !m.loading && !m.error && m.content);
  if (hasDefault && aiMessages.length === 1) {
    // Fire and forget — don't await
    generateChatName(c.id).catch(() => {});
  }
}

async function handleSingleAI(c, text, attachments) {
  const p = c.participants[0];
  const model = MODELS[p.ai][p.level];

  const loadingId = uid();
  const loadingMsg = {
    id: loadingId, role: 'assistant', source: p.ai,
    loading: true, isPrimary: true,
    modelShort: model.short, levelColor: LEVEL_COLORS[p.level],
    time: Date.now()
  };
  c.messages.push(loadingMsg);
  renderMessages();

  // Build history (text-only for simplicity in past turns)
  const history = c.messages
    .filter(m => !m.loading && !m.error && m.id !== loadingId && m.id !== c.messages[c.messages.length - 2]?.id)
    .slice(-20)
    .map(m => ({ role: m.role, content: typeof m.content === 'string' ? m.content : '' }));

  const msgs = buildMessagesForAI(p.ai, history, text, attachments);
  const memorySystem = buildMemoryPrompt();
  const opts = {
    model: model.id,
    webSearch: c.webSearch && p.ai === 'claude',
    research: c.research,
    system: memorySystem || undefined
  };

  try {
    let finalText;
    if (c.research) {
      finalText = await runResearch(p.ai, msgs, opts, loadingId, c);
    } else {
      const { text: reply } = await CALLERS[p.ai](msgs, opts);
      finalText = reply;
      trackUsage(p.ai, model.id, msgs, reply, c.id);
    }
    // Replace loading
    const idx = c.messages.findIndex(m => m.id === loadingId);
    c.messages[idx] = {
      id: loadingId, role: 'assistant', source: p.ai,
      content: finalText, isPrimary: true,
      modelShort: model.short, levelColor: LEVEL_COLORS[p.level],
      time: Date.now()
    };
  } catch (err) {
    const idx = c.messages.findIndex(m => m.id === loadingId);
    c.messages[idx] = {
      id: loadingId, role: 'assistant', source: p.ai,
      error: true, content: err.message, isPrimary: true, time: Date.now()
    };
  }
  renderMessages();
}

async function handleCouncil(c, text, attachments) {
  const active = c.participants.filter(p => state.keys[p.ai]);
  if (active.length === 0) {
    c.messages.push({
      id: uid(), role: 'assistant', source: 'council-synth',
      error: true, content: 'Немає активних AI з ключами', isPrimary: true, time: Date.now()
    });
    return;
  }

  const mode = c.mode || 'synthesis';

  if (mode === 'parallel' || mode === 'synthesis' || mode === 'vote') {
    await runParallel(c, text, attachments, active, mode);
  } else if (mode === 'debate') {
    await runDebate(c, text, attachments, active);
  }
}

async function runParallel(c, text, attachments, active, mode) {
  // If synthesis/vote mode has only 1 active AI → promote that AI's answer to primary
  const canSynthesize = (mode === 'synthesis' || mode === 'vote') && active.length >= 2;

  // Step 1: every AI answers in parallel
  const loadings = {};
  for (const p of active) {
    const id = uid();
    const model = MODELS[p.ai][p.level];
    loadings[p.ai] = id;
    c.messages.push({
      id, role: 'assistant', source: p.ai,
      loading: true,
      // In parallel mode → all are primary
      // In synthesis/vote → individual answers are only shown in full log (unless we can't synthesize, then they become primary)
      isPrimary: mode === 'parallel' || !canSynthesize,
      modelShort: model.short, levelColor: LEVEL_COLORS[p.level],
      time: Date.now()
    });
  }
  renderMessages();

  const history = [];
  const memorySystem = buildMemoryPrompt();
  const results = await Promise.all(active.map(async p => {
    const model = MODELS[p.ai][p.level];
    const msgs = buildMessagesForAI(p.ai, history, text, attachments);
    const opts = {
      model: model.id,
      webSearch: c.webSearch && p.ai === 'claude',
      research: false,
      system: memorySystem || undefined
    };
    try {
      const { text: reply } = await CALLERS[p.ai](msgs, opts);
      trackUsage(p.ai, model.id, msgs, reply, c.id);
      const idx = c.messages.findIndex(m => m.id === loadings[p.ai]);
      c.messages[idx] = {
        id: loadings[p.ai], role: 'assistant', source: p.ai,
        content: reply,
        isPrimary: mode === 'parallel' || !canSynthesize,
        modelShort: model.short, levelColor: LEVEL_COLORS[p.level],
        time: Date.now()
      };
      renderMessages();
      return { ai: p.ai, text: reply, ok: true };
    } catch (err) {
      const idx = c.messages.findIndex(m => m.id === loadings[p.ai]);
      c.messages[idx] = {
        id: loadings[p.ai], role: 'assistant', source: p.ai,
        error: true, content: err.message,
        isPrimary: true, // errors are ALWAYS primary so user sees what went wrong
        modelShort: model.short, levelColor: LEVEL_COLORS[p.level],
        time: Date.now()
      };
      renderMessages();
      return { ai: p.ai, text: err.message, ok: false };
    }
  }));

  const good = results.filter(r => r.ok);

  // Synthesis/Vote — only if we have at least 2 successful answers
  if ((mode === 'synthesis' || mode === 'vote') && good.length >= 2) {
    const synthId = uid();
    c.messages.push({
      id: synthId, role: 'assistant', source: 'council-synth',
      loading: true, isPrimary: true, loadingLabel: 'Синтезую...',
      time: Date.now()
    });
    renderMessages();

    const synthPrompt = mode === 'synthesis' ? buildSynthesisPrompt(text, good) : buildVotePrompt(text, good);
    const synthesizerAI = state.keys.claude ? 'claude' : good[0].ai;
    const synthModel = MODELS[synthesizerAI][3];

    try {
      const synthMsgs = [{role:'user', content: synthPrompt}];
      const { text: reply } = await CALLERS[synthesizerAI](synthMsgs, { model: synthModel.id });
      trackUsage(synthesizerAI, synthModel.id, synthMsgs, reply, c.id);
      const { cleanedText, meta } = parseSynthMeta(reply);
      const idx = c.messages.findIndex(m => m.id === synthId);
      c.messages[idx] = {
        id: synthId, role: 'assistant', source: 'council-synth',
        content: cleanedText, isPrimary: true,
        modelShort: `${synthesizerAI}/${synthModel.short}`,
        levelColor: LEVEL_COLORS[3],
        synthMeta: meta,
        time: Date.now()
      };
    } catch (err) {
      // Synthesis failed — promote individual answers to primary
      const idx = c.messages.findIndex(m => m.id === synthId);
      c.messages[idx] = {
        id: synthId, role: 'assistant', source: 'council-synth',
        error: true, content: 'Синтез не вдався: ' + err.message, isPrimary: true, time: Date.now()
      };
      // Upgrade successful answers to primary since synthesis died
      c.messages.forEach(m => {
        if (m.source && good.some(g => g.ai === m.source) && !m.error) {
          m.isPrimary = true;
        }
      });
    }
    renderMessages();
  } else if ((mode === 'synthesis' || mode === 'vote') && good.length === 1) {
    // Only 1 succeeded — make it primary, add a note
    c.messages.forEach(m => {
      if (m.source === good[0].ai && !m.error) m.isPrimary = true;
    });
    c.messages.push({
      id: uid(), role: 'assistant', source: 'council-synth',
      content: `⚠️ Синтез не виконано — тільки ${AI_CONFIG[good[0].ai].fullName} відповів успішно. Інші AI повернули помилку.`,
      isPrimary: true, time: Date.now()
    });
    renderMessages();
  }
}

async function runDebate(c, text, attachments, active) {
  const rounds = c.debateRounds || 2;
  const allAnswers = {}; // ai -> [round1, round2, ...]
  active.forEach(p => allAnswers[p.ai] = []);

  for (let r = 1; r <= rounds; r++) {
    // Prepare round loadings
    const loadings = {};
    for (const p of active) {
      const id = uid();
      const model = MODELS[p.ai][p.level];
      loadings[p.ai] = id;
      c.messages.push({
        id, role: 'assistant', source: p.ai,
        loading: true, isPrimary: false, round: r,
        modelShort: model.short, levelColor: LEVEL_COLORS[p.level],
        time: Date.now(), loadingLabel: `Раунд ${r}`
      });
    }
    renderMessages();

    await Promise.all(active.map(async p => {
      const model = MODELS[p.ai][p.level];

      let prompt;
      if (r === 1) {
        prompt = text;
      } else {
        const others = Object.entries(allAnswers)
          .filter(([ai]) => ai !== p.ai)
          .map(([ai, arr]) => `${AI_CONFIG[ai].fullName} у попередньому раунді сказав:\n${arr[arr.length - 1] || '(немає відповіді)'}`)
          .join('\n\n---\n\n');
        prompt = `Оригінальне питання:\n${text}\n\nТи раніше відповів:\n${allAnswers[p.ai][r-2]}\n\nІнші AI відповіли:\n\n${others}\n\nПроаналізуй їхні позиції, визнай де вони праві, збережи де ти правий. Дай оновлену, відшліфовану відповідь українською.`;
      }

      const msgs = buildMessagesForAI(p.ai, [], prompt, r === 1 ? attachments : []);
      const memorySystem = buildMemoryPrompt();
      const opts = { model: model.id, webSearch: c.webSearch && p.ai === 'claude', system: memorySystem || undefined };

      try {
        const { text: reply } = await CALLERS[p.ai](msgs, opts);
        trackUsage(p.ai, model.id, msgs, reply, c.id);
        allAnswers[p.ai].push(reply);
        const idx = c.messages.findIndex(m => m.id === loadings[p.ai]);
        c.messages[idx] = {
          id: loadings[p.ai], role: 'assistant', source: p.ai,
          content: reply, isPrimary: false, round: r,
          modelShort: model.short, levelColor: LEVEL_COLORS[p.level],
          time: Date.now()
        };
      } catch (err) {
        allAnswers[p.ai].push('');
        const idx = c.messages.findIndex(m => m.id === loadings[p.ai]);
        c.messages[idx] = {
          id: loadings[p.ai], role: 'assistant', source: p.ai,
          error: true, content: err.message, round: r, time: Date.now()
        };
      }
      renderMessages();
    }));
  }

  // Final synthesis
  const synthId = uid();
  c.messages.push({
    id: synthId, role: 'assistant', source: 'council-synth',
    loading: true, isPrimary: true, loadingLabel: 'Фінальний висновок...',
    time: Date.now()
  });
  renderMessages();

  const finalAnswers = active.map(p => ({
    ai: p.ai,
    text: allAnswers[p.ai][allAnswers[p.ai].length - 1] || '(немає)',
    ok: !!allAnswers[p.ai][allAnswers[p.ai].length - 1],
    roundsAnswered: allAnswers[p.ai].filter(x => x).length
  })).filter(x => x.ok);

  // Check if any AI failed to complete all rounds
  const incompleteAI = active.filter(p => {
    const answers = allAnswers[p.ai] || [];
    return answers.filter(x => x).length < rounds;
  });
  const warningNote = incompleteAI.length > 0
    ? `\n\n⚠️ УВАГА: ${incompleteAI.length} з ${active.length} AI не завершили всі ${rounds} раунди (використано їхні останні успішні відповіді). Це може знизити якість синтезу.`
    : '';

  const aiIdList = finalAnswers.map(a => a.ai).join(', ');
  const synthPrompt = `Після ${rounds} раундів дебату AI-моделей на питання "${text}", дай короткий фінальний висновок українською мовою.${warningNote}

Фінальні позиції:
${finalAnswers.map(a => `=== ${AI_CONFIG[a.ai].fullName} (раундів: ${a.roundsAnswered}/${rounds}) ===\n${a.text}`).join('\n\n')}

Структура:
1. **Консенсус** — спільна позиція (1-2 речення)
2. **Ключові розбіжності** — якщо залишились (коротко)
3. **Рекомендація** — фінальна відповідь від імені Ради${incompleteAI.length > 0 ? '\n4. **⚠️ Обмеження** — зазнач що не всі AI завершили повний цикл' : ''}

В КІНЦІ додай JSON-блок з мета-аналізом (у backticks):
\`\`\`json
{
  "confidence": "high|medium|low",
  "confidence_reason": "коротке пояснення",
  "contributions": [
    {"ai": "claude", "unique_insights": 2, "supported_by": ["gemini"]}
  ]
}
\`\`\`
Доступні ai-id: ${aiIdList}`;

  try {
    const synthesizerAI = state.keys.claude ? 'claude' : finalAnswers[0].ai;
    const synthModel = MODELS[synthesizerAI][3];
    const synthMsgs = [{role:'user', content: synthPrompt}];
    const { text: reply } = await CALLERS[synthesizerAI](synthMsgs, { model: synthModel.id });
    trackUsage(synthesizerAI, synthModel.id, synthMsgs, reply, c.id);
    const { cleanedText, meta } = parseSynthMeta(reply);
    const idx = c.messages.findIndex(m => m.id === synthId);
    c.messages[idx] = {
      id: synthId, role: 'assistant', source: 'council-synth',
      content: cleanedText, isPrimary: true,
      modelShort: `${synthesizerAI}/${synthModel.short}`,
      levelColor: LEVEL_COLORS[3], synthMeta: meta, time: Date.now()
    };
  } catch (err) {
    const idx = c.messages.findIndex(m => m.id === synthId);
    c.messages[idx] = {
      id: synthId, role: 'assistant', source: 'council-synth',
      error: true, content: err.message, isPrimary: true, time: Date.now()
    };
  }
  renderMessages();
}

// ==================== RESEARCH MODE ====================
async function runResearch(aiName, messages, opts, loadingId, c) {
  // 3 iterations: plan → search → synthesize
  const iters = [
    { label: 'Складаю план...', prompt: 'Перед відповіддю: проаналізуй питання і склади короткий план дослідження (3-5 пунктів) українською.' },
    { label: 'Глибоко аналізую...', prompt: 'Тепер детально досліди кожен пункт плану, використовуй веб-пошук де потрібно. Знаходь конкретні факти і джерела.' },
    { label: 'Формую висновок...', prompt: 'На основі всього дослідження вище, дай фінальну структуровану відповідь українською з чіткими висновками і практичними рекомендаціями.' }
  ];

  let context = messages;
  let lastReply = '';

  for (const it of iters) {
    const idx = c.messages.findIndex(m => m.id === loadingId);
    if (idx >= 0) c.messages[idx].loadingLabel = it.label;
    renderMessages();

    const iterMsgs = [...context];
    iterMsgs.push({ role: 'user', content: it.prompt });

    const { text: reply } = await CALLERS[aiName](iterMsgs, opts);
    lastReply = reply;
    context.push({ role: 'user', content: it.prompt });
    context.push({ role: 'assistant', content: reply });
  }
  return lastReply;
}

// ==================== SYNTHESIS PROMPTS ====================
function buildSynthesisPrompt(question, answers) {
  const formatted = answers.map(r => `=== ${AI_CONFIG[r.ai].fullName} ===\n${r.text}`).join('\n\n');
  const aiList = answers.map(r => r.ai).join(', ');
  return `Ти — голова ради AI. На питання користувача відповіли кілька AI-моделей. Проаналізуй їхні відповіді, знайди точки згоди та розбіжності, і сформулюй одне підсумкове рішення.

ПИТАННЯ:
${question}

ВІДПОВІДІ:

${formatted}

Дай структуровану відповідь українською:
1. **Консенсус** — в чому всі згодні
2. **Розбіжності** — де думки розходяться і чому це важливо
3. **Рекомендація** — фінальна відповідь, яка враховує сильні сторони кожного

В САМОМУ КІНЦІ своєї відповіді додай JSON-блок з мета-аналізом (у трьох backticks, мовою json):
\`\`\`json
{
  "confidence": "high|medium|low",
  "confidence_reason": "коротке пояснення чому такий рівень впевненості (1 речення)",
  "contributions": [
    {"ai": "claude", "unique_insights": 2, "supported_by": ["gemini"]},
    {"ai": "gemini", "unique_insights": 1, "supported_by": []}
  ]
}
\`\`\`
Де:
- confidence "high" — якщо всі AI значно згодні
- "medium" — є часткова згода але важливі розбіжності
- "low" — моделі значно не згодні
- unique_insights — скільки цінних пунктів саме цей AI додав до фіналу (0-5)
- supported_by — масив ai-ідентифікаторів які підтвердили/підкріпили його позицію
Доступні ai-ідентифікатори: ${aiList}`;
}

function buildVotePrompt(question, answers) {
  const formatted = answers.map(r => `=== ${AI_CONFIG[r.ai].fullName} ===\n${r.text}`).join('\n\n');
  return `На питання відповіли кілька AI-моделей. Оціни якість кожної відповіді та обери переможця.

ПИТАННЯ:
${question}

ВІДПОВІДІ:

${formatted}

Українською:
1. **Ранжування** — від найкращої до найслабшої (1-2 речення оцінки кожної)
2. **Переможець** — хто дав найкращу відповідь і чому
3. **Ідеальна відповідь** — на основі найкращих елементів`;
}

// ==================== SETTINGS ====================
function openSettings() {
  const wrap = document.getElementById('apiKeysContainer');
  wrap.innerHTML = AI_ORDER.map(ai => {
    const cfg = AI_CONFIG[ai];
    const active = state.keys[ai] ? 'active' : '';
    return `
      <div class="api-row">
        <div class="api-label">
          <span class="logo-mini" style="--color: ${cfg.color};">${cfg.logo}</span>
          <span class="status-dot ${active}"></span>
          <span class="name">${cfg.fullName}</span>
        </div>
        <input type="password" class="api-input" id="key-${ai}" placeholder="${cfg.keyPlaceholder}" value="${state.keys[ai] || ''}">
        <div class="api-links">
          <a href="${cfg.keyUrl}" target="_blank" rel="noopener" class="api-link" style="--link-color: ${cfg.color};">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
            Отримати ключ
          </a>
          <a href="${cfg.billingUrl}" target="_blank" rel="noopener" class="api-link" style="--link-color: ${cfg.color};">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
            Баланс
          </a>
        </div>
      </div>`;
  }).join('');

  // Load memory into UI
  document.getElementById('memoryProfile').value = state.memory.profile || '';
  document.getElementById('memoryFactsCount').textContent = (state.memory.facts || []).length;

  openOverlay('settingsOverlay');
}

function saveSettings() {
  AI_ORDER.forEach(ai => {
    const v = document.getElementById('key-' + ai).value.trim();
    if (v) state.keys[ai] = v;
    else delete state.keys[ai];
  });
  saveKeys();
  // Save memory profile
  const profileEl = document.getElementById('memoryProfile');
  if (profileEl) {
    state.memory.profile = profileEl.value.trim();
    saveMemory();
  }
  closeOverlay('settingsOverlay');
  flash('Налаштування збережено');
}

// ==================== MEMORY FACTS ====================
function openMemoryFacts() {
  document.getElementById('newFactText').value = '';
  renderFactsList();
  openOverlay('memoryFactsOverlay');
}

function renderFactsList() {
  const wrap = document.getElementById('memoryFactsList');
  const facts = state.memory.facts || [];
  if (facts.length === 0) {
    wrap.innerHTML = '<div class="fact-empty">Ще немає збережених фактів</div>';
    return;
  }
  wrap.innerHTML = facts.map(f => `
    <div class="fact-item">
      <div class="fact-text">${escapeHtml(f.text)}</div>
      <button class="fact-delete" data-fact-id="${f.id}" title="Видалити">✕</button>
    </div>
  `).join('');
  // Attach delete handlers
  wrap.querySelectorAll('.fact-delete').forEach(btn => {
    btn.addEventListener('click', () => deleteFact(btn.dataset.factId));
  });
}

function addFact() {
  const el = document.getElementById('newFactText');
  const text = el.value.trim();
  if (!text) {
    flash('Напиши факт який треба запам\'ятати', true);
    return;
  }
  if (text.length > 500) {
    flash('Факт занадто довгий (макс 500 символів)', true);
    return;
  }
  state.memory.facts.push({
    id: uid(),
    text,
    createdAt: Date.now(),
    source: 'manual'
  });
  saveMemory();
  el.value = '';
  renderFactsList();
  // Update counter in settings
  const counter = document.getElementById('memoryFactsCount');
  if (counter) counter.textContent = state.memory.facts.length;
  flash('Факт збережено в пам\'ять');
}

function deleteFact(id) {
  state.memory.facts = state.memory.facts.filter(f => f.id !== id);
  saveMemory();
  renderFactsList();
  const counter = document.getElementById('memoryFactsCount');
  if (counter) counter.textContent = state.memory.facts.length;
}

function saveFactFromMessage(messageText) {
  if (!messageText) return;
  // Truncate if too long
  const text = messageText.length > 500 ? messageText.slice(0, 497) + '...' : messageText;
  state.memory.facts.push({
    id: uid(),
    text,
    createdAt: Date.now(),
    source: 'message'
  });
  saveMemory();
  flash('Збережено в пам\'ять');
}

function copyMessageText(text) {
  if (!text) return;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(
      () => flash('Скопійовано'),
      () => flash('Не вдалось скопіювати', true)
    );
  } else {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); flash('Скопійовано'); }
    catch { flash('Не вдалось скопіювати', true); }
    document.body.removeChild(ta);
  }
}

// ==================== CHAT EXPORT (Пункт 6) ====================
function exportChatAsMarkdown(chatId) {
  const c = state.chats[chatId];
  if (!c) return;

  const participants = (c.participants || []).map(p => {
    const ai = AI_CONFIG[p.ai]?.name || p.ai;
    const m = MODELS[p.ai]?.[p.level];
    return `${ai} (${m?.name || 'unknown'})`;
  }).join(', ');

  const mode = c.participants.length > 1 && c.mode ? MODES[c.mode]?.name : 'Одиночний чат';
  const cost = getSessionCost(chatId);
  const created = new Date(c.createdAt).toLocaleString('uk-UA');

  let md = `# ${c.name || 'Без назви'}\n\n`;
  md += `**Учасники:** ${participants}\n`;
  md += `**Режим:** ${mode}\n`;
  md += `**Створено:** ${created}\n`;
  if (cost > 0) md += `**Вартість сесії:** ${formatCost(cost)}\n`;
  md += `\n---\n\n`;

  (c.messages || []).forEach(m => {
    if (m.loading) return;
    const time = m.time ? new Date(m.time).toLocaleString('uk-UA') : '';
    if (m.role === 'user') {
      md += `## 👤 Ти · ${time}\n\n${m.content || ''}\n\n`;
    } else if (m.source === 'council-synth') {
      md += `## 🧠 РАДА (синтез) · ${time}\n\n${m.error ? '❌ ' : ''}${m.content || ''}\n\n`;
    } else {
      const aiName = AI_CONFIG[m.source]?.name || m.source;
      const modelInfo = m.modelShort ? ` [${m.modelShort}]` : '';
      const roundInfo = m.round ? ` Раунд ${m.round}` : '';
      md += `## 🤖 ${aiName}${modelInfo}${roundInfo} · ${time}\n\n${m.error ? '❌ ' : ''}${m.content || ''}\n\n`;
    }
    md += `---\n\n`;
  });

  md += `\n*Експортовано з AI Council · ${new Date().toLocaleString('uk-UA')}*\n`;

  // Create download
  const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const safeName = (c.name || 'chat').replace(/[^a-zа-яіїєґ0-9_-]/gi, '_').slice(0, 40);
  a.href = url;
  a.download = `${safeName}_${Date.now()}.md`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  flash('Експортовано як .md');
}

// ==================== AUTO CHAT NAME (Пункт 8) ====================
async function generateChatName(chatId) {
  const c = state.chats[chatId];
  if (!c || !c.messages || c.messages.length < 2) return;
  // Only auto-rename if user hasn't manually named it (still has default name)
  const isDefault = /^(Чат з |Рада:)/i.test(c.name || '');
  if (!isDefault) return;
  // Must have at least one user message and one AI response
  const userMsg = c.messages.find(m => m.role === 'user');
  const aiMsg = c.messages.find(m => m.role === 'assistant' && !m.loading && !m.error && m.content);
  if (!userMsg || !aiMsg) return;

  // Find a working AI — prefer the cheapest one
  let aiToUse = null;
  if (state.keys.claude) aiToUse = 'claude';
  else if (state.keys.gemini) aiToUse = 'gemini';
  else if (state.keys.openai) aiToUse = 'openai';
  if (!aiToUse) return;

  const model = MODELS[aiToUse][0]; // cheapest tier
  const prompt = `Згенеруй дуже коротку назву чату (3-5 слів, українською, без лапок, без емодзі, без крапки в кінці) на основі першого питання і відповіді:

Питання: ${String(userMsg.content).slice(0, 200)}
Відповідь: ${String(aiMsg.content).slice(0, 300)}

Назва:`;

  try {
    const { text } = await CALLERS[aiToUse]([{role:'user', content: prompt}], { model: model.id });
    const cleanName = String(text || '').trim()
      .replace(/^["'«»]|["'«»]$/g, '')
      .replace(/^Назва:?\s*/i, '')
      .split('\n')[0]
      .slice(0, 60);
    if (cleanName && cleanName.length >= 3) {
      c.name = cleanName;
      saveChats();
      // Re-render chat list and header
      if (state.activeChatId === chatId) {
        document.getElementById('chatHeaderTitle').textContent = cleanName;
      }
      if (state.currentScreen === 'list') renderChatList();
    }
  } catch (e) {
    // Silent failure — auto-name is nice-to-have
    console.warn('Auto-name failed:', e.message);
  }
}

// ==================== CHAT INFO ====================
function showChatInfo() {
  const c = state.chats[state.activeChatId];
  if (!c) return;
  const el = document.getElementById('chatInfoContent');

  const participantsHtml = c.participants.map(p => {
    const ai = AI_CONFIG[p.ai];
    const m = MODELS[p.ai][p.level];
    return `<div style="display:flex;align-items:center;gap:10px;padding:8px 0;">
      <div class="ai-logo" style="--ai-color:${ai.color};width:28px;height:28px;">${ai.logo}</div>
      <div style="flex:1;"><div style="font-weight:600;">${ai.name}</div>
      <div style="font-family:var(--mono);font-size:11px;color:${LEVEL_COLORS[p.level]};">${m.name} · ${LEVEL_NAMES[p.level]}</div></div>
    </div>`;
  }).join('');

  const modeBlock = c.participants.length > 1 ? `
    <div class="info-block">
      <div class="info-label">Режим</div>
      <div class="info-value">${MODES[c.mode].name}${c.mode === 'debate' ? ` · ${c.debateRounds} раундів` : ''}</div>
    </div>` : '';

  const extras = (c.webSearch || c.research) ? `
    <div class="info-block">
      <div class="info-label">Додатково</div>
      <div class="info-value">${c.webSearch ? '🌐 Веб-пошук · ' : ''}${c.research ? '🔬 Research' : ''}</div>
    </div>` : '';

  el.innerHTML = `
    <div class="info-block">
      <div class="info-label">Назва</div>
      <div class="info-value">${escapeHtml(c.name)}</div>
    </div>
    <div class="info-block">
      <div class="info-label">Учасники</div>
      ${participantsHtml}
    </div>
    ${modeBlock}
    ${extras}
    <div class="info-block">
      <div class="info-label">Створено</div>
      <div class="info-value">${new Date(c.createdAt).toLocaleString('uk')}</div>
    </div>
    <div class="info-block">
      <div class="info-label">Повідомлень</div>
      <div class="info-value">${(c.messages || []).filter(m => !m.loading).length}</div>
    </div>`;
  openOverlay('chatInfoOverlay');
}

// ==================== INPUT HELPERS ====================
function adjustInput() {
  const el = document.getElementById('input');
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 140) + 'px';
}

// ==================== PWA INSTALL ====================
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (!localStorage.getItem('aic_install_dismissed')) {
    document.getElementById('installBanner').classList.add('show');
  }
});

// ==================== INIT ====================
function init() {
  load();

  // Set version in UI (settings footer + header pill)
  const vFooter = document.getElementById('appVersion');
  if (vFooter) vFooter.textContent = `AI Council · v${APP_VERSION} · ${APP_VERSION_DATE}`;
  const vPill = document.getElementById('headerVersion');
  if (vPill) vPill.textContent = `v${APP_VERSION}`;

  // List screen
  document.getElementById('newChatBtn').addEventListener('click', () => goScreen('new'));
  document.getElementById('settingsBtn').addEventListener('click', openSettings);

  // New chat screen
  document.getElementById('newBackBtn').addEventListener('click', () => goScreen('list'));
  document.getElementById('createChatBtn').addEventListener('click', createChat);

  const nameInput = document.getElementById('chatNameInput');
  nameInput.addEventListener('input', () => {
    nameInput.dataset.auto = '0';
  });

  document.getElementById('webSearchToggle').addEventListener('change', e => {
    state.newChatDraft.webSearch = e.target.checked;
    updateCostEstimate();
  });
  document.getElementById('researchToggle').addEventListener('change', e => {
    state.newChatDraft.research = e.target.checked;
    updateCostEstimate();
  });

  // Chat screen
  document.getElementById('chatBackBtn').addEventListener('click', () => goScreen('list'));
  document.getElementById('chatMenuBtn').addEventListener('click', () => openOverlay('chatMenuOverlay'));
  document.getElementById('sendBtn').addEventListener('click', handleSend);

  const input = document.getElementById('input');
  input.addEventListener('input', adjustInput);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey && window.innerWidth > 768) {
      e.preventDefault();
      handleSend();
    }
  });

  // Attachments
  document.getElementById('attachBtn').addEventListener('click', () => {
    document.getElementById('fileInput').click();
  });
  document.getElementById('fileInput').addEventListener('change', (e) => {
    handleFiles(e.target.files);
    e.target.value = ''; // allow re-selecting same file
  });

  // Menu
  document.getElementById('menuToggleLog').addEventListener('click', () => {
    state.showFullLog = !state.showFullLog;
    closeOverlay('chatMenuOverlay');
    renderChatScreen();
  });
  document.getElementById('menuChatInfo').addEventListener('click', () => {
    closeOverlay('chatMenuOverlay');
    showChatInfo();
  });
  document.getElementById('menuClearChat').addEventListener('click', () => {
    if (confirm('Очистити історію цього чату?')) {
      const c = state.chats[state.activeChatId];
      if (c) { c.messages = []; saveChats(); renderMessages(); }
      closeOverlay('chatMenuOverlay');
    }
  });
  document.getElementById('menuDeleteChat').addEventListener('click', () => {
    if (confirm('Видалити цей чат повністю?')) {
      delete state.chats[state.activeChatId];
      state.chatOrder = state.chatOrder.filter(id => id !== state.activeChatId);
      state.archivedChatIds = state.archivedChatIds.filter(id => id !== state.activeChatId);
      saveChats();
      closeOverlay('chatMenuOverlay');
      goScreen('list');
    }
  });
  // Export chat as .md (Пункт 6)
  document.getElementById('menuExportChat').addEventListener('click', () => {
    exportChatAsMarkdown(state.activeChatId);
    closeOverlay('chatMenuOverlay');
  });

  // Settings save
  document.getElementById('saveSettingsBtn').addEventListener('click', saveSettings);
  document.getElementById('wipeDataBtn').addEventListener('click', () => {
    if (confirm('Видалити ВСЕ: ключі, чати, історію, пам\'ять?')) {
      localStorage.clear();
      location.reload();
    }
  });

  // Memory facts
  document.getElementById('openMemoryFactsBtn').addEventListener('click', openMemoryFacts);
  document.getElementById('addFactBtn').addEventListener('click', addFact);

  // Global close-button handler for all overlays (replaces inline onclick which CSP blocks)
  document.addEventListener('click', (e) => {
    const closeBtn = e.target.closest('[data-close]');
    if (closeBtn) {
      const id = closeBtn.dataset.close;
      closeOverlay(id);
    }
  });

  // Install banner
  document.getElementById('installBtn')?.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    document.getElementById('installBanner').classList.remove('show');
  });
  document.getElementById('installClose')?.addEventListener('click', () => {
    document.getElementById('installBanner').classList.remove('show');
    localStorage.setItem('aic_install_dismissed', '1');
  });

  // Service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(e => console.log('SW:', e));
  }

  // Initial render
  renderChatList();
}

window.closeOverlay = closeOverlay;
document.addEventListener('DOMContentLoaded', init);
