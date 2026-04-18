// ========== AI Council App ==========

const AI_CONFIG = {
  claude: { name: 'Claude', color: '#da7756', fullName: 'Anthropic Claude' },
  openai: { name: 'ChatGPT', color: '#10a37f', fullName: 'OpenAI GPT' },
  gemini: { name: 'Gemini', color: '#4285f4', fullName: 'Google Gemini' },
  perplexity: { name: 'Perplexity', color: '#20b8cd', fullName: 'Perplexity' },
  council: { name: 'Council', color: '#d4ff3a', fullName: 'AI Council' }
};

const TABS = ['claude', 'openai', 'gemini', 'perplexity', 'council'];
const STORAGE_KEYS = {
  keys: 'aic_keys',
  models: 'aic_models',
  history: 'aic_history',
  mode: 'aic_council_mode'
};

// ========== State ==========
let state = {
  activeTab: 'claude',
  keys: {},
  models: {},
  councilMode: 'parallel',
  history: {}, // { claude: [], openai: [], ... }
  loading: false
};

// ========== Storage ==========
function loadState() {
  try {
    state.keys = JSON.parse(localStorage.getItem(STORAGE_KEYS.keys) || '{}');
    state.models = JSON.parse(localStorage.getItem(STORAGE_KEYS.models) || '{}');
    state.councilMode = localStorage.getItem(STORAGE_KEYS.mode) || 'parallel';
    state.history = JSON.parse(localStorage.getItem(STORAGE_KEYS.history) || '{}');
    TABS.forEach(t => { if (!state.history[t]) state.history[t] = []; });
  } catch (e) {
    console.error('Load error:', e);
    TABS.forEach(t => { state.history[t] = []; });
  }
}
function saveKeys() { localStorage.setItem(STORAGE_KEYS.keys, JSON.stringify(state.keys)); }
function saveModels() { localStorage.setItem(STORAGE_KEYS.models, JSON.stringify(state.models)); }
function saveMode() { localStorage.setItem(STORAGE_KEYS.mode, state.councilMode); }
function saveHistory() { localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(state.history)); }

// ========== Minimal markdown ==========
function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function renderMarkdown(text) {
  if (!text) return '';
  let s = escapeHtml(text);
  // Code blocks
  s = s.replace(/```([a-z]*)\n([\s\S]*?)```/g, (_, lang, code) => `<pre><code>${code.trim()}</code></pre>`);
  // Inline code
  s = s.replace(/`([^`\n]+)`/g, '<code>$1</code>');
  // Headers
  s = s.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  s = s.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  s = s.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  // Bold / italic
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '<em>$1</em>');
  // Lists
  s = s.replace(/^\s*[-*]\s+(.+)$/gm, '<li>$1</li>');
  s = s.replace(/(<li>.*<\/li>\n?)+/g, m => `<ul>${m}</ul>`);
  // Numbered
  s = s.replace(/^\s*\d+\.\s+(.+)$/gm, '<li>$1</li>');
  // Paragraphs
  s = s.split(/\n\n+/).map(p => {
    if (p.match(/^<(h\d|ul|ol|pre|li)/)) return p;
    return `<p>${p.replace(/\n/g, '<br>')}</p>`;
  }).join('\n');
  return s;
}

// ========== UI: Tabs ==========
function renderTabs() {
  const el = document.getElementById('tabs');
  el.innerHTML = TABS.map(t => {
    const ai = AI_CONFIG[t];
    const isCouncil = t === 'council';
    const activeClass = state.activeTab === t ? 'active' : '';
    return `<button class="tab ${activeClass} ${isCouncil ? 'council' : ''}" data-tab="${t}" style="--tab-color: ${ai.color};">
      <span class="tab-dot"></span>
      ${ai.name}
    </button>`;
  }).join('');
  el.querySelectorAll('.tab').forEach(b => {
    b.addEventListener('click', () => {
      state.activeTab = b.dataset.tab;
      document.getElementById('councilModeBar').style.display = state.activeTab === 'council' ? 'flex' : 'none';
      document.getElementById('activeLabel').textContent = AI_CONFIG[state.activeTab].fullName;
      renderTabs();
      renderMessages();
      updatePlaceholder();
    });
  });
}

function updatePlaceholder() {
  const input = document.getElementById('input');
  if (state.activeTab === 'council') {
    input.placeholder = 'Питання для Ради AI...';
  } else {
    input.placeholder = `Написати до ${AI_CONFIG[state.activeTab].name}...`;
  }
}

// ========== UI: Messages ==========
function renderMessages() {
  const wrap = document.getElementById('messages');
  const msgs = state.history[state.activeTab] || [];

  if (msgs.length === 0) {
    const ai = AI_CONFIG[state.activeTab];
    const emptyMsg = state.activeTab === 'council'
      ? 'Задай питання — всі 4 AI дадуть свої відповіді, обери режим роботи нижче.'
      : `Почни розмову з ${ai.name}. Переконайся що API ключ додано в налаштуваннях.`;
    wrap.innerHTML = `
      <div class="empty-state">
        <h2>${ai.fullName}</h2>
        <p>${emptyMsg}</p>
        ${state.activeTab === 'council' ? '<div class="hint">PARALLEL · SYNTHESIS · DEBATE · VOTE</div>' : ''}
      </div>`;
    return;
  }

  wrap.innerHTML = msgs.map(m => renderMessage(m)).join('');
  requestAnimationFrame(() => {
    document.querySelector('main').scrollTop = document.querySelector('main').scrollHeight;
  });
}

function renderMessage(m) {
  const isUser = m.role === 'user';
  const isCouncilSynth = m.source === 'council-synth';
  const ai = isUser
    ? { name: 'ТИ', color: '#e8e8f0' }
    : (AI_CONFIG[m.source] || AI_CONFIG.council);

  const time = m.time ? new Date(m.time).toLocaleTimeString('uk', {hour:'2-digit', minute:'2-digit'}) : '';

  let bodyContent;
  if (m.loading) {
    bodyContent = `<div class="thinking"><span></span><span></span><span></span></div>`;
  } else if (m.error) {
    bodyContent = `<div class="error-msg">✕ ${escapeHtml(m.content)}</div>`;
  } else {
    bodyContent = renderMarkdown(m.content);
  }

  return `
    <div class="msg ${isUser ? 'user' : ''} ${isCouncilSynth ? 'council-synth' : ''}" style="--msg-color: ${ai.color};">
      <div class="msg-head">
        <span class="dot"></span>
        <span class="author">${escapeHtml(ai.name)}</span>
        ${m.modelLabel ? `<span style="color:var(--text-mute);font-size:10px;">${escapeHtml(m.modelLabel)}</span>` : ''}
        <span class="time">${time}</span>
      </div>
      <div class="msg-body">${bodyContent}</div>
    </div>`;
}

// ========== API calls ==========

async function callClaude(messages, systemPrompt) {
  if (!state.keys.claude) throw new Error('Немає API ключа Claude. Додай у налаштуваннях.');
  const model = state.models.claude || 'claude-sonnet-4-5';
  const body = {
    model,
    max_tokens: 4096,
    messages: messages.map(m => ({ role: m.role, content: m.content }))
  };
  if (systemPrompt) body.system = systemPrompt;

  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': state.keys.claude,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify(body)
  });
  if (!resp.ok) {
    const err = await resp.text();
    throw new Error(`Claude API: ${resp.status} ${err.slice(0, 200)}`);
  }
  const data = await resp.json();
  return { text: data.content[0].text, model };
}

async function callOpenAI(messages, systemPrompt) {
  if (!state.keys.openai) throw new Error('Немає API ключа OpenAI.');
  const model = state.models.openai || 'gpt-4o';
  const msgs = systemPrompt ? [{ role: 'system', content: systemPrompt }] : [];
  msgs.push(...messages.map(m => ({ role: m.role, content: m.content })));

  const resp = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${state.keys.openai}`
    },
    body: JSON.stringify({ model, messages: msgs, max_tokens: 4096 })
  });
  if (!resp.ok) {
    const err = await resp.text();
    throw new Error(`OpenAI: ${resp.status} ${err.slice(0, 200)}`);
  }
  const data = await resp.json();
  return { text: data.choices[0].message.content, model };
}

async function callGemini(messages, systemPrompt) {
  if (!state.keys.gemini) throw new Error('Немає API ключа Gemini.');
  const model = state.models.gemini || 'gemini-2.0-flash-exp';

  const contents = messages.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }]
  }));

  const body = { contents };
  if (systemPrompt) body.systemInstruction = { parts: [{ text: systemPrompt }] };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${state.keys.gemini}`;
  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!resp.ok) {
    const err = await resp.text();
    throw new Error(`Gemini: ${resp.status} ${err.slice(0, 200)}`);
  }
  const data = await resp.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  return { text, model };
}

async function callPerplexity(messages, systemPrompt) {
  if (!state.keys.perplexity) throw new Error('Немає API ключа Perplexity.');
  const model = state.models.perplexity || 'sonar-pro';
  const msgs = systemPrompt ? [{ role: 'system', content: systemPrompt }] : [];
  msgs.push(...messages.map(m => ({ role: m.role, content: m.content })));

  const resp = await fetch('https://api.perplexity.ai/chat/completions', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${state.keys.perplexity}`
    },
    body: JSON.stringify({ model, messages: msgs })
  });
  if (!resp.ok) {
    const err = await resp.text();
    throw new Error(`Perplexity: ${resp.status} ${err.slice(0, 200)}`);
  }
  const data = await resp.json();
  return { text: data.choices[0].message.content, model };
}

const CALLERS = {
  claude: callClaude,
  openai: callOpenAI,
  gemini: callGemini,
  perplexity: callPerplexity
};

// ========== Message flow ==========

function addMessage(tab, msg) {
  if (!state.history[tab]) state.history[tab] = [];
  state.history[tab].push(msg);
  saveHistory();
  if (state.activeTab === tab) renderMessages();
}

function updateMessage(tab, id, updates) {
  const msgs = state.history[tab];
  const m = msgs.find(x => x.id === id);
  if (m) {
    Object.assign(m, updates);
    saveHistory();
    if (state.activeTab === tab) renderMessages();
  }
}

function uid() { return Math.random().toString(36).slice(2, 10) + Date.now().toString(36); }

async function sendToSingleAI(source) {
  const text = document.getElementById('input').value.trim();
  if (!text) return;

  addMessage(source, {
    id: uid(), role: 'user', content: text, time: Date.now()
  });
  document.getElementById('input').value = '';
  adjustInput();

  const loadingId = uid();
  addMessage(source, {
    id: loadingId, role: 'assistant', source, content: '', loading: true, time: Date.now()
  });

  try {
    const history = state.history[source]
      .filter(m => !m.loading && !m.error)
      .slice(-20)
      .map(m => ({ role: m.role, content: m.content }));
    // Remove the current loading message from history copy
    const cleanHistory = history.filter(m => m.content);

    const { text: reply, model } = await CALLERS[source](cleanHistory);
    updateMessage(source, loadingId, {
      loading: false, content: reply, modelLabel: model
    });
  } catch (err) {
    updateMessage(source, loadingId, {
      loading: false, error: true, content: err.message
    });
  }
}

async function sendToCouncil() {
  const text = document.getElementById('input').value.trim();
  if (!text) return;

  addMessage('council', { id: uid(), role: 'user', content: text, time: Date.now() });
  document.getElementById('input').value = '';
  adjustInput();

  const mode = state.councilMode;
  const activeAIs = ['claude', 'openai', 'gemini', 'perplexity'].filter(k => state.keys[k]);

  if (activeAIs.length === 0) {
    addMessage('council', {
      id: uid(), role: 'assistant', source: 'council',
      error: true, content: 'Додай хоча б один API ключ у налаштуваннях.', time: Date.now()
    });
    return;
  }

  if (mode === 'parallel' || mode === 'vote' || mode === 'synthesis') {
    // Step 1: all AIs answer in parallel
    const loadings = {};
    for (const ai of activeAIs) {
      const id = uid();
      loadings[ai] = id;
      addMessage('council', {
        id, role: 'assistant', source: ai, content: '', loading: true, time: Date.now()
      });
    }

    const results = await Promise.all(activeAIs.map(async (ai) => {
      try {
        const { text: reply, model } = await CALLERS[ai]([{ role: 'user', content: text }]);
        updateMessage('council', loadings[ai], {
          loading: false, content: reply, modelLabel: model
        });
        return { ai, text: reply, ok: true };
      } catch (err) {
        updateMessage('council', loadings[ai], {
          loading: false, error: true, content: err.message
        });
        return { ai, text: err.message, ok: false };
      }
    }));

    const good = results.filter(r => r.ok);

    // Synthesis step
    if ((mode === 'synthesis' || mode === 'vote') && good.length >= 2) {
      const synthId = uid();
      addMessage('council', {
        id: synthId, role: 'assistant', source: 'council-synth',
        content: '', loading: true, time: Date.now()
      });

      const synthPrompt = mode === 'synthesis'
        ? buildSynthesisPrompt(text, good)
        : buildVotePrompt(text, good);

      try {
        // Prefer Claude for synthesis if available, else fallback
        const synthesizer = state.keys.claude ? 'claude' : good[0].ai;
        const { text: reply, model } = await CALLERS[synthesizer]([{ role: 'user', content: synthPrompt }]);
        updateMessage('council', synthId, {
          loading: false,
          content: reply,
          modelLabel: `${synthesizer}/${model}`
        });
      } catch (err) {
        updateMessage('council', synthId, {
          loading: false, error: true, content: 'Синтез не вдався: ' + err.message
        });
      }
    }
  } else if (mode === 'debate') {
    await runDebate(text, activeAIs);
  }
}

function buildSynthesisPrompt(question, answers) {
  const formatted = answers.map(r =>
    `=== ${AI_CONFIG[r.ai].fullName} ===\n${r.text}`
  ).join('\n\n');

  return `Ти — голова ради AI. На питання користувача відповіли кілька AI-моделей. Проаналізуй їхні відповіді, знайди точки згоди та розбіжності, і сформулюй одне підсумкове рішення/відповідь, яке враховує найкраще з кожного та відзначає важливі відмінності.

ПИТАННЯ:
${question}

ВІДПОВІДІ AI:

${formatted}

Дай структуровану підсумкову відповідь українською мовою:
1. **Консенсус** — в чому всі згодні
2. **Розбіжності** — де думки розходяться і чому це важливо
3. **Рекомендація** — твоя фінальна відповідь, яка враховує сильні сторони кожної думки`;
}

function buildVotePrompt(question, answers) {
  const formatted = answers.map(r =>
    `=== ${AI_CONFIG[r.ai].fullName} ===\n${r.text}`
  ).join('\n\n');

  return `На питання відповіли кілька AI-моделей. Оціни якість кожної відповіді та назви переможця.

ПИТАННЯ:
${question}

ВІДПОВІДІ:

${formatted}

Українською мовою:
1. **Ранжування** — від найкращої до найслабшої відповіді, з короткою оцінкою (1-2 речення на кожну)
2. **Переможець** — хто дав найкращу відповідь і чому
3. **Що було б ідеально** — коротка ідеальна відповідь на основі найкращих елементів`;
}

async function runDebate(question, activeAIs) {
  if (activeAIs.length < 2) {
    addMessage('council', {
      id: uid(), role: 'assistant', source: 'council',
      error: true, content: 'Для дебату потрібно мінімум 2 AI з налаштованими ключами.', time: Date.now()
    });
    return;
  }

  // Round 1: initial opinions
  const initial = {};
  for (const ai of activeAIs) {
    const id = uid();
    addMessage('council', {
      id, role: 'assistant', source: ai, content: '', loading: true,
      modelLabel: 'Раунд 1', time: Date.now()
    });
    try {
      const { text: reply, model } = await CALLERS[ai]([{ role: 'user', content: question }]);
      initial[ai] = reply;
      updateMessage('council', id, { loading: false, content: reply, modelLabel: `Раунд 1 · ${model}` });
    } catch (err) {
      updateMessage('council', id, { loading: false, error: true, content: err.message });
    }
  }

  // Round 2: each AI sees others and responds
  const othersFormatted = Object.entries(initial)
    .map(([ai, txt]) => `${AI_CONFIG[ai].fullName} сказав:\n${txt}`).join('\n\n');

  for (const ai of activeAIs) {
    if (!initial[ai]) continue;
    const id = uid();
    addMessage('council', {
      id, role: 'assistant', source: ai, content: '', loading: true,
      modelLabel: 'Раунд 2', time: Date.now()
    });
    const debatePrompt = `Оригінальне питання:
${question}

Ти вже відповів:
${initial[ai]}

Ось що відповіли інші AI:

${othersFormatted}

Українською мовою: проаналізуй їхні точки зору. З чим ти згоден? Де вони праві там, де ти помилявся? Де ти вважаєш свою позицію правильною? Дай оновлену, вдосконалену відповідь.`;

    try {
      const { text: reply, model } = await CALLERS[ai]([{ role: 'user', content: debatePrompt }]);
      updateMessage('council', id, { loading: false, content: reply, modelLabel: `Раунд 2 · ${model}` });
    } catch (err) {
      updateMessage('council', id, { loading: false, error: true, content: err.message });
    }
  }

  // Final synthesis
  if (state.keys.claude) {
    const synthId = uid();
    addMessage('council', {
      id: synthId, role: 'assistant', source: 'council-synth',
      content: '', loading: true, time: Date.now()
    });
    try {
      const { text: reply, model } = await callClaude([{
        role: 'user',
        content: `Після двох раундів дебату AI-моделей на питання "${question}", дай коротке фінальне узагальнення найсильнішої спільної позиції українською мовою. Без зайвої води — лише суть.`
      }]);
      updateMessage('council', synthId, {
        loading: false, content: reply, modelLabel: `підсумок · ${model}`
      });
    } catch (err) {
      updateMessage('council', synthId, { loading: false, error: true, content: err.message });
    }
  }
}

// ========== Send handler ==========
function handleSend() {
  const text = document.getElementById('input').value.trim();
  if (!text) return;
  if (state.activeTab === 'council') {
    sendToCouncil();
  } else {
    sendToSingleAI(state.activeTab);
  }
}

// ========== Input autoresize ==========
function adjustInput() {
  const el = document.getElementById('input');
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 140) + 'px';
}

// ========== Settings ==========
function openSettings() {
  document.getElementById('key-claude').value = state.keys.claude || '';
  document.getElementById('key-openai').value = state.keys.openai || '';
  document.getElementById('key-gemini').value = state.keys.gemini || '';
  document.getElementById('key-perplexity').value = state.keys.perplexity || '';
  document.getElementById('model-claude').value = state.models.claude || 'claude-sonnet-4-5';
  document.getElementById('model-openai').value = state.models.openai || 'gpt-4o';
  document.getElementById('model-gemini').value = state.models.gemini || 'gemini-2.0-flash-exp';
  document.getElementById('model-perplexity').value = state.models.perplexity || 'sonar-pro';
  updateStatusDots();
  document.getElementById('settingsOverlay').classList.add('open');
}
function closeSettings() {
  document.getElementById('settingsOverlay').classList.remove('open');
}
function updateStatusDots() {
  ['claude','openai','gemini','perplexity'].forEach(k => {
    const dot = document.getElementById(`status-${k}`);
    if (dot) dot.classList.toggle('active', !!state.keys[k]);
  });
}
function saveSettings() {
  state.keys.claude = document.getElementById('key-claude').value.trim();
  state.keys.openai = document.getElementById('key-openai').value.trim();
  state.keys.gemini = document.getElementById('key-gemini').value.trim();
  state.keys.perplexity = document.getElementById('key-perplexity').value.trim();
  state.models.claude = document.getElementById('model-claude').value;
  state.models.openai = document.getElementById('model-openai').value;
  state.models.gemini = document.getElementById('model-gemini').value;
  state.models.perplexity = document.getElementById('model-perplexity').value;
  // remove empties
  Object.keys(state.keys).forEach(k => { if (!state.keys[k]) delete state.keys[k]; });
  saveKeys(); saveModels();
  updateStatusDots();
  closeSettings();
  flash('Налаштування збережено');
}

function flash(text) {
  const el = document.createElement('div');
  el.textContent = text;
  el.style.cssText = `position:fixed;bottom:100px;left:50%;transform:translateX(-50%);
    background:var(--accent);color:#000;padding:10px 18px;border-radius:8px;
    font-family:var(--mono);font-size:12px;font-weight:700;z-index:999;
    animation:slideIn 0.25s ease;`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1800);
}

// ========== Install PWA ==========
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (!localStorage.getItem('aic_install_dismissed')) {
    document.getElementById('installBanner').classList.add('show');
  }
});
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

// ========== Init ==========
function init() {
  loadState();
  renderTabs();
  renderMessages();
  updatePlaceholder();
  updateStatusDots();

  // Set council mode button active
  document.querySelectorAll('.mode-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.mode === state.councilMode);
    b.addEventListener('click', () => {
      state.councilMode = b.dataset.mode;
      saveMode();
      document.querySelectorAll('.mode-btn').forEach(x =>
        x.classList.toggle('active', x.dataset.mode === state.councilMode)
      );
    });
  });

  // Input
  const input = document.getElementById('input');
  input.addEventListener('input', adjustInput);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey && window.innerWidth > 768) {
      e.preventDefault();
      handleSend();
    }
  });

  document.getElementById('sendBtn').addEventListener('click', handleSend);
  document.getElementById('settingsBtn').addEventListener('click', openSettings);
  document.getElementById('closeSettings').addEventListener('click', closeSettings);
  document.getElementById('saveSettings').addEventListener('click', saveSettings);
  document.getElementById('settingsOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'settingsOverlay') closeSettings();
  });

  document.getElementById('clearBtn').addEventListener('click', () => {
    if (confirm(`Очистити історію ${AI_CONFIG[state.activeTab].name}?`)) {
      state.history[state.activeTab] = [];
      saveHistory();
      renderMessages();
    }
  });

  document.getElementById('clearAllData').addEventListener('click', () => {
    if (confirm('Видалити ВСІ дані, історію та ключі? Це не можна скасувати.')) {
      localStorage.clear();
      location.reload();
    }
  });

  // Service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(e => console.log('SW:', e));
  }
}

document.addEventListener('DOMContentLoaded', init);
