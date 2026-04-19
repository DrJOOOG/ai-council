// ================================================================
// AI Council v3 — Multi-chat, thinking levels, attachments, research
// ================================================================

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
    { id: 'gpt-4o-mini', name: 'GPT-4o Mini', short: 'MINI', inPrice: 0.15,  outPrice: 0.60 },
    { id: 'gpt-4o',      name: 'GPT-4o',      short: '4O',   inPrice: 2.50,  outPrice: 10.00 },
    { id: 'o1-mini',     name: 'o1-mini',     short: 'O1M',  inPrice: 3.00,  outPrice: 12.00 },
    { id: 'o1-preview',  name: 'o1-preview',  short: 'O1P',  inPrice: 15.00, outPrice: 60.00 }
  ],
  gemini: [
    { id: 'gemini-1.5-flash-8b',  name: 'Flash 8B',  short: '8B',    inPrice: 0.04,  outPrice: 0.15 },
    { id: 'gemini-1.5-flash',     name: 'Flash 1.5', short: 'FLASH', inPrice: 0.075, outPrice: 0.30 },
    { id: 'gemini-2.0-flash-exp', name: 'Flash 2.0', short: 'FLASH2',inPrice: 0.15,  outPrice: 0.60 },
    { id: 'gemini-1.5-pro',       name: 'Pro 1.5',   short: 'PRO',   inPrice: 1.25,  outPrice: 5.00 }
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
  claude: { name: 'Claude', color: '#da7756', fullName: 'Anthropic Claude', logo: LOGOS.claude, keyHint: 'console.anthropic.com → API Keys', keyPlaceholder: 'sk-ant-...' },
  openai: { name: 'ChatGPT', color: '#10a37f', fullName: 'OpenAI GPT', logo: LOGOS.openai, keyHint: 'platform.openai.com → API Keys', keyPlaceholder: 'sk-...' },
  gemini: { name: 'Gemini', color: '#4285f4', fullName: 'Google Gemini', logo: LOGOS.gemini, keyHint: 'aistudio.google.com → Get API Key', keyPlaceholder: 'AIza...' },
  perplexity: { name: 'Perplexity', color: '#20b8cd', fullName: 'Perplexity', logo: LOGOS.perplexity, keyHint: 'perplexity.ai/settings/api', keyPlaceholder: 'pplx-...' }
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
  draft: 'aic3_new_draft'
};

let state = {
  keys: {},
  chats: {},
  chatOrder: [],
  activeChatId: null,
  currentScreen: 'list',
  newChatDraft: null,
  pendingAttachments: [],
  showFullLog: false
};

// ==================== STORAGE ====================
function load() {
  try {
    state.keys = JSON.parse(localStorage.getItem(STORAGE.keys) || '{}');
    const saved = JSON.parse(localStorage.getItem(STORAGE.chats) || '{}');
    state.chats = saved.chats || {};
    state.chatOrder = saved.order || [];
  } catch (e) {
    console.error('Load error:', e);
    state.chats = {};
    state.chatOrder = [];
  }
}
function saveKeys() { localStorage.setItem(STORAGE.keys, JSON.stringify(state.keys)); }
function saveChats() {
  // Do not save pending/loading messages
  const cleaned = {};
  for (const id in state.chats) {
    const c = {...state.chats[id]};
    c.messages = (c.messages || []).filter(m => !m.loading);
    cleaned[id] = c;
  }
  localStorage.setItem(STORAGE.chats, JSON.stringify({ chats: cleaned, order: state.chatOrder }));
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
  if (state.chatOrder.length === 0) {
    el.innerHTML = `
      <div class="chat-list-empty">
        <div class="icon-wrap">${LOGOS.emptyChat}</div>
        <h2>Ще немає чатів</h2>
        <p>Натисни <strong>+</strong> внизу щоб створити свій перший чат. Обери AI, їх рівень мислення та режим роботи.</p>
      </div>`;
    return;
  }
  el.innerHTML = state.chatOrder.map(id => {
    const c = state.chats[id];
    if (!c) return '';
    return renderChatItem(c);
  }).join('');
  el.querySelectorAll('[data-chat-id]').forEach(item => {
    item.addEventListener('click', () => openChat(item.dataset.chatId));
  });
}

function renderChatItem(c) {
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

  return `
    <div class="chat-item" data-chat-id="${c.id}">
      ${avatars}
      <div class="chat-meta">
        <div class="chat-title">${escapeHtml(c.name || 'Без назви')}</div>
        <div class="chat-preview">
          <span class="chat-mode-badge ${badgeClass}">${modeLabel}</span>
          ${escapeHtml(preview)}
        </div>
      </div>
      <div class="chat-time">${fmtDate(c.updatedAt || c.createdAt)}</div>
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
  let sub;
  if (participants.length === 1) {
    const m = MODELS[participants[0].ai][participants[0].level];
    sub = m.name.toUpperCase();
  } else {
    const modeName = c.mode ? MODES[c.mode].name.toUpperCase() : 'РАДА';
    sub = `${participants.length} AI · ${modeName}${c.research ? ' · RESEARCH' : ''}`;
  }
  document.getElementById('chatHeaderSub').textContent = sub;

  // Update menu label
  document.getElementById('menuToggleLogLabel').textContent = state.showFullLog ? 'Згорнути до головних' : 'Повний лог розмови';

  // Background watermarks
  renderChatBackground(c);

  // Messages
  renderMessages();
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

  requestAnimationFrame(() => {
    const main = document.querySelector('#screenChat main');
    if (main) main.scrollTop = main.scrollHeight;
  });
}

function renderMessage(m) {
  const isUser = m.role === 'user';
  const isCouncilSynth = m.source === 'council-synth';
  let ai;
  if (isUser) ai = { name: 'ТИ', color: '#e8e8f0', logo: LOGOS.user };
  else if (isCouncilSynth) ai = { name: 'РАДА', color: AI_CONFIG.council.color, logo: LOGOS.council };
  else ai = AI_CONFIG[m.source] || { name: '?', color: '#888', logo: '' };

  let bodyContent;
  if (m.loading) {
    bodyContent = `<div class="thinking"><span></span><span></span><span></span>${m.loadingLabel ? `<span class="thinking-label">${escapeHtml(m.loadingLabel)}</span>` : ''}</div>`;
  } else if (m.error) {
    bodyContent = `<div class="error-msg">✕ ${escapeHtml(m.content)}</div>`;
  } else {
    bodyContent = renderMd(m.content);
    if (m.attachments && m.attachments.length > 0) {
      bodyContent += `<div class="msg-attachments">${m.attachments.map(a => renderAttachment(a)).join('')}</div>`;
    }
  }

  const modelTag = m.modelShort ? `<span class="model-tag" style="--level-color: ${m.levelColor || 'var(--text-mute)'};">${m.modelShort}</span>` : '';
  const roundTag = m.round ? `<span class="round-tag">R${m.round}</span>` : '';
  const compactClass = (state.showFullLog && !m.isPrimary && !isUser) ? 'compact' : '';

  return `
    <div class="msg ${isUser ? 'user' : ''} ${isCouncilSynth ? 'council-synth' : ''} ${compactClass}" style="--msg-color: ${ai.color};">
      <div class="msg-head">
        <span class="msg-logo">${ai.logo}</span>
        <span class="author">${escapeHtml(ai.name)}</span>
        ${modelTag}
        ${roundTag}
        <span class="time">${fmtTime(m.time)}</span>
      </div>
      <div class="msg-body">${bodyContent}</div>
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

async function callClaude(messages, opts = {}) {
  const key = state.keys.claude;
  if (!key) throw new Error('Немає Claude ключа');
  const model = opts.model || 'claude-sonnet-4-5';

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
  if (!resp.ok) throw new Error(`Claude: ${resp.status} ${(await resp.text()).slice(0, 200)}`);
  const data = await resp.json();
  // Extract text blocks (skip tool_use and tool_result)
  const texts = (data.content || []).filter(b => b.type === 'text').map(b => b.text);
  return { text: texts.join('\n\n'), model };
}

async function callOpenAI(messages, opts = {}) {
  const key = state.keys.openai;
  if (!key) throw new Error('Немає OpenAI ключа');
  const model = opts.model || 'gpt-4o';
  const msgs = opts.system ? [{role:'system', content: opts.system}, ...messages] : messages;

  const resp = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'authorization': `Bearer ${key}` },
    body: JSON.stringify({ model, messages: msgs, max_tokens: 4096 })
  });
  if (!resp.ok) throw new Error(`OpenAI: ${resp.status} ${(await resp.text()).slice(0, 200)}`);
  const data = await resp.json();
  return { text: data.choices[0].message.content, model };
}

async function callGemini(messages, opts = {}) {
  const key = state.keys.gemini;
  if (!key) throw new Error('Немає Gemini ключа');
  const model = opts.model || 'gemini-1.5-flash';

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
  if (!resp.ok) throw new Error(`Gemini: ${resp.status} ${(await resp.text()).slice(0, 200)}`);
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
  if (!resp.ok) throw new Error(`Perplexity: ${resp.status} ${(await resp.text()).slice(0, 200)}`);
  const data = await resp.json();
  return { text: data.choices[0].message.content, model };
}

const CALLERS = { claude: callClaude, openai: callOpenAI, gemini: callGemini, perplexity: callPerplexity };

// ==================== BUILD MESSAGE WITH ATTACHMENTS ====================
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
  const input = document.getElementById('input');
  const text = input.value.trim();
  if (!text && state.pendingAttachments.length === 0) return;

  const c = state.chats[state.activeChatId];
  if (!c) return;

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
  }
  saveChats();
  renderMessages();
  // Move chat to top
  state.chatOrder = [c.id, ...state.chatOrder.filter(id => id !== c.id)];
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
  const opts = {
    model: model.id,
    webSearch: c.webSearch && p.ai === 'claude',
    research: c.research
  };

  try {
    let finalText;
    if (c.research) {
      finalText = await runResearch(p.ai, msgs, opts, loadingId, c);
    } else {
      const { text: reply } = await CALLERS[p.ai](msgs, opts);
      finalText = reply;
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
  // Step 1: every AI answers in parallel
  const loadings = {};
  for (const p of active) {
    const id = uid();
    const model = MODELS[p.ai][p.level];
    loadings[p.ai] = id;
    c.messages.push({
      id, role: 'assistant', source: p.ai,
      loading: true, isPrimary: mode === 'parallel',
      modelShort: model.short, levelColor: LEVEL_COLORS[p.level],
      time: Date.now()
    });
  }
  renderMessages();

  const history = []; // no history for parallel (each gets fresh question)
  const results = await Promise.all(active.map(async p => {
    const model = MODELS[p.ai][p.level];
    const msgs = buildMessagesForAI(p.ai, history, text, attachments);
    const opts = {
      model: model.id,
      webSearch: c.webSearch && p.ai === 'claude',
      research: false
    };
    try {
      const { text: reply } = await CALLERS[p.ai](msgs, opts);
      const idx = c.messages.findIndex(m => m.id === loadings[p.ai]);
      c.messages[idx] = {
        id: loadings[p.ai], role: 'assistant', source: p.ai,
        content: reply, isPrimary: mode === 'parallel',
        modelShort: model.short, levelColor: LEVEL_COLORS[p.level],
        time: Date.now()
      };
      renderMessages();
      return { ai: p.ai, text: reply, ok: true };
    } catch (err) {
      const idx = c.messages.findIndex(m => m.id === loadings[p.ai]);
      c.messages[idx] = {
        id: loadings[p.ai], role: 'assistant', source: p.ai,
        error: true, content: err.message, time: Date.now()
      };
      renderMessages();
      return { ai: p.ai, text: err.message, ok: false };
    }
  }));

  const good = results.filter(r => r.ok);

  // Synthesis/Vote
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
    const synthModel = MODELS[synthesizerAI][3]; // highest level

    try {
      const { text: reply } = await CALLERS[synthesizerAI]([{role:'user', content: synthPrompt}], { model: synthModel.id });
      const idx = c.messages.findIndex(m => m.id === synthId);
      c.messages[idx] = {
        id: synthId, role: 'assistant', source: 'council-synth',
        content: reply, isPrimary: true,
        modelShort: `${synthesizerAI}/${synthModel.short}`,
        levelColor: LEVEL_COLORS[3],
        time: Date.now()
      };
    } catch (err) {
      const idx = c.messages.findIndex(m => m.id === synthId);
      c.messages[idx] = {
        id: synthId, role: 'assistant', source: 'council-synth',
        error: true, content: 'Синтез: ' + err.message, isPrimary: true, time: Date.now()
      };
    }
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
      const opts = { model: model.id, webSearch: c.webSearch && p.ai === 'claude' };

      try {
        const { text: reply } = await CALLERS[p.ai](msgs, opts);
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
    ok: !!allAnswers[p.ai][allAnswers[p.ai].length - 1]
  })).filter(x => x.ok);

  const synthPrompt = `Після ${rounds} раундів дебату AI-моделей на питання "${text}", дай короткий фінальний висновок українською мовою.

Фінальні позиції:
${finalAnswers.map(a => `=== ${AI_CONFIG[a.ai].fullName} ===\n${a.text}`).join('\n\n')}

Структура:
1. **Консенсус** — спільна позиція (1-2 речення)
2. **Ключові розбіжності** — якщо залишились (коротко)
3. **Рекомендація** — фінальна відповідь від імені Ради`;

  try {
    const synthesizerAI = state.keys.claude ? 'claude' : finalAnswers[0].ai;
    const synthModel = MODELS[synthesizerAI][3];
    const { text: reply } = await CALLERS[synthesizerAI]([{role:'user', content: synthPrompt}], { model: synthModel.id });
    const idx = c.messages.findIndex(m => m.id === synthId);
    c.messages[idx] = {
      id: synthId, role: 'assistant', source: 'council-synth',
      content: reply, isPrimary: true,
      modelShort: `${synthesizerAI}/${synthModel.short}`,
      levelColor: LEVEL_COLORS[3], time: Date.now()
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
  return `Ти — голова ради AI. На питання користувача відповіли кілька AI-моделей. Проаналізуй їхні відповіді, знайди точки згоди та розбіжності, і сформулюй одне підсумкове рішення.

ПИТАННЯ:
${question}

ВІДПОВІДІ:

${formatted}

Дай структуровану відповідь українською:
1. **Консенсус** — в чому всі згодні
2. **Розбіжності** — де думки розходяться і чому це важливо
3. **Рекомендація** — фінальна відповідь, яка враховує сильні сторони кожного`;
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
        <div class="api-hint">${cfg.keyHint}</div>
      </div>`;
  }).join('');
  openOverlay('settingsOverlay');
}

function saveSettings() {
  AI_ORDER.forEach(ai => {
    const v = document.getElementById('key-' + ai).value.trim();
    if (v) state.keys[ai] = v;
    else delete state.keys[ai];
  });
  saveKeys();
  closeOverlay('settingsOverlay');
  flash('Налаштування збережено');
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
      saveChats();
      closeOverlay('chatMenuOverlay');
      goScreen('list');
    }
  });

  // Settings save
  document.getElementById('saveSettingsBtn').addEventListener('click', saveSettings);
  document.getElementById('wipeDataBtn').addEventListener('click', () => {
    if (confirm('Видалити ВСЕ: ключі, чати, історію?')) {
      localStorage.clear();
      location.reload();
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
