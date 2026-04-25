// ================================================================
// AI Council v6.0.0-beta — localization UA/CS/EN
// ================================================================

const APP_VERSION = '6.0.0-beta';
const APP_VERSION_DATE = '2026-04-25';
const APP_AUTHOR = 'Dr. Parkhoma';

// Changelog — newest first
const CHANGELOG = [
  {
    version: '6.0.0-beta',
    date: '2026-04-25',
    highlights: [
      '🌐 Додано локалізацію інтерфейсу UA / CS / EN',
      '🧠 AI-side language instruction для відповідей, TL;DR, автоназв і синтезу',
      '🧪 Додано i18n Playwright smoke tests'
    ]
  },
  {
    version: '5.1.6',
    date: '2026-04-25',
    highlights: [
      '🧪 Додано Playwright smoke/E2E тести та GitHub Actions workflow',
      '📄 OpenAI Responses API тепер отримує PDF як input_file, а не лише текстове попередження',
      '🛡️ Debate mode більше не падає, якщо всі AI дали помилку'
    ]
  },
  {
    version: '5.1.5',
    date: '2026-04-25',
    highlights: [
      '✋ Прибрано надлишковий confirm-діалог при кожному вкладенні (заважав щоденній роботі)',
      '🛡️ Залишено confirm тільки для PII та запитів дорожче $0.10',
      '🚫 Жорсткий ліміт $1.00 на запит (захист від випадкових великих витрат)'
    ]
  },
  {
    version: '5.1.4-files-pro',
    date: '2026-04-25',
    highlights: [
      '📄 DOCX/DOCM тепер читаються локально: витягується текст з document/header/footer/footnotes/endnotes',
      '📊 XLSX/XLSM тепер читаються локально: витягуються аркуші у TSV-preview з shared strings',
      '🧯 Legacy DOC/XLS мають безпечний heuristic text extraction замість повної відмови',
      '🛡️ Прибрано application/octet-stream із whitelist MIME — доступ контролюється також за розширенням файлу'
    ]
  },

  {
    version: '5.1.3-files',
    date: '2026-04-25',
    highlights: [
      '📎 Додано ширшу підтримку вкладень: PDF, Word, Excel/CSV, TXT/MD/JSON/XML, PNG/JPG/WebP, STL',
      '🛡️ Файли й далі не зберігаються в localStorage як base64; зображення очищаються від EXIF',
      '🧩 TXT/CSV/JSON/MD/XML/STL передаються AI як текстовий екстракт/summary; Word/Excel приймаються як вкладення з безпечним попередженням'
    ]
  },

  {
    version: '5.1.2-security',
    date: '2026-04-25',
    highlights: [
      '🔐 Швидкий security patch: whitelist типів файлів, заборона SVG upload',
      '🧼 Фото перед відправкою перемальовуються через canvas для видалення EXIF/metadata',
      '🗃️ Вкладення більше не зберігаються в localStorage як base64',
      '💸 Додано попередження/блокування дорогих запитів',
      '🛡️ Додано підтвердження перед відправкою потенційних персональних/клінічних даних',
      '🧹 Очистка даних тепер видаляє localStorage, CacheStorage і Service Worker',
      '🔑 Gemini API key перенесено з URL у x-goog-api-key header'
    ]
  },
  {
    version: '5.1.1-beta',
    date: '2026-04-25',
    highlights: [
      '💰 Виправлено офіційні ціни OpenAI: nano $0.20/$1.25, mini $0.75/$4.50, gpt-5.4 $2.50/$15',
      '🐛 Cost tracking тепер враховує fallback (gpt-5.5 → gpt-5.4 рахується правильно)',
      '🛡️ Захист від падіння Дебату коли всі AI помилки в усіх раундах'
    ]
  },
  {
    version: '5.1-beta',
    date: '2026-04-25',
    highlights: [
      '🚀 OpenAI Responses API для GPT-5+ моделей (рекомендований OpenAI)',
      '🐛 Виправлено передачу синтезу Ради як user-context (краща якість дебатів)',
      '📊 Research mode тепер коректно рахується в статистиці витрат',
      '🏷️ Автоназва чату тепер працює і в режимі Ради',
      '🧹 Видалено дублікат функції saveMemory()',
      '⚙️ Service Worker стійкий до відсутності окремих файлів (Promise.allSettled)'
    ]
  },
  {
    version: '5.0.1-beta',
    date: '2026-04-25',
    highlights: [
      '🆕 OpenAI GPT-5.5 додано на ЧЕРВОНИЙ рівень ($5/$30 за 1M токенів)',
      '🐛 Виправлено дублікат id моделі OpenAI (тепер cost tracking коректний)'
    ]
  },
  {
    version: '5.0-beta',
    date: '2026-04-23',
    highlights: [
      '✍️ Підпис автора "by Dr. Parkhoma" під логотипом',
      '📋 Журнал версій у налаштуваннях — прозора історія змін',
      '👥 AI Personas — шаблони з ролями для кожного AI (Ендодонтист, Хірург, Скептик, Аудитор)',
      '🎨 Оновлений логотип Ради з медичним стилем'
    ]
  },
  {
    version: '4.5-beta',
    date: '2026-04-22',
    highlights: [
      '🔴 Критичний фікс: історія контексту для Ради (більше "256=Алабама")',
      '🦷 5 шаблонів стоматолога (ендо, імпланти, пародонт, ургент, диф-біль)',
      '🇨🇿 Чеський контекст — SÚKL, VZP, інформована згода',
      '📁 База випадків з GDPR-детектором',
      '↔️ Покращений свайп (закриття зворотним свайпом або тапом)'
    ]
  },
  {
    version: '4.0-beta',
    date: '2026-04-19',
    highlights: [
      '✅ Confidence indicator над синтезом Ради',
      '⚡ TL;DR кнопка на довгих відповідях',
      '📥 Експорт чату як .md (для Obsidian)',
      '💰 Лічильник вартості сесії в хедері',
      '🏷️ Автоназва чату через найдешевший AI',
      '📊 Блок внеску учасників під синтезом',
      '👈 Свайп-видалення + batch вибір'
    ]
  },
  {
    version: '3.12',
    date: '2026-04-18',
    highlights: [
      'Фільтр <think> блоків для Perplexity Reasoning',
      'Warning при недозавершених раундах дебату'
    ]
  },
  {
    version: '3.11',
    date: '2026-04-18',
    highlights: [
      'Виправлено GPT-5.4 Pro 404 (fallback на GPT-5.4)',
      'Фільтр reasoning-блоків Perplexity'
    ]
  },
  {
    version: '3.10',
    date: '2026-04-17',
    highlights: [
      'CSP-сумісні кнопки закриття overlay',
      'Виправлено хрестик у налаштуваннях'
    ]
  },
  {
    version: '3.7',
    date: '2026-04-15',
    highlights: [
      '🧠 Система пам\'ять AI — профіль "Про мене" + збережені факти',
      'Пам\'ять передається як system prompt у кожен запит'
    ]
  },
  {
    version: '3.0',
    date: '2026-04-12',
    highlights: [
      'Початкова робоча версія: 4 AI, 4 рівні, 4 режими Ради',
      'PWA з offline UI, ключі в localStorage'
    ]
  }
];

// ==================== LOGOS ====================
const LOGOS = {
  claude: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35"/><path d="M12 5.5 7 18h2.2l1-2.6h3.6l1 2.6H17L12 5.5zm-1.1 8.1L12 10.2l1.1 3.4h-2.2z"/></svg>`,
  openai: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="2.5"/><circle cx="12" cy="4.5" r="1.8"/><circle cx="18.5" cy="8.3" r="1.8"/><circle cx="18.5" cy="15.7" r="1.8"/><circle cx="12" cy="19.5" r="1.8"/><circle cx="5.5" cy="15.7" r="1.8"/><circle cx="5.5" cy="8.3" r="1.8"/><g stroke="currentColor" stroke-width="0.8" opacity="0.5"><line x1="12" y1="4.5" x2="12" y2="19.5"/><line x1="5.5" y1="8.3" x2="18.5" y2="15.7"/><line x1="5.5" y1="15.7" x2="18.5" y2="8.3"/></g></svg>`,
  gemini: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 C13 7 13.5 10 22 12 C13.5 14 13 17 12 22 C11 17 10.5 14 2 12 C10.5 10 11 7 12 2 Z"/></svg>`,
  perplexity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="9" opacity="0.4"/><line x1="12" y1="3" x2="12" y2="21" stroke-width="1.4"/><line x1="3" y1="12" x2="21" y2="12" stroke-width="1.4"/><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/></svg>`,
  council: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
    <!-- Stylized tooth outline (dental context) -->
    <path d="M8 3.5 C6 3.5 5 5 5 7 C5 9 5.5 10.5 6 12.5 L7 17 C7.3 18.5 8 19 9 19 C9.8 19 10.5 18.5 10.8 17 L11.5 14 C11.7 13 12.3 13 12.5 14 L13.2 17 C13.5 18.5 14.2 19 15 19 C16 19 16.7 18.5 17 17 L18 12.5 C18.5 10.5 19 9 19 7 C19 5 18 3.5 16 3.5 C14.5 3.5 13 4 12 4 C11 4 9.5 3.5 8 3.5 Z" opacity="0.85"/>
    <!-- Neural nodes (4 AI representation) -->
    <circle cx="8.5" cy="8" r="0.9" fill="currentColor" stroke="none"/>
    <circle cx="15.5" cy="8" r="0.9" fill="currentColor" stroke="none"/>
    <circle cx="9.5" cy="12" r="0.9" fill="currentColor" stroke="none"/>
    <circle cx="14.5" cy="12" r="0.9" fill="currentColor" stroke="none"/>
    <!-- Connections between nodes -->
    <line x1="8.5" y1="8" x2="15.5" y2="8" opacity="0.4" stroke-width="0.8"/>
    <line x1="8.5" y1="8" x2="14.5" y2="12" opacity="0.4" stroke-width="0.8"/>
    <line x1="15.5" y1="8" x2="9.5" y2="12" opacity="0.4" stroke-width="0.8"/>
    <line x1="9.5" y1="12" x2="14.5" y2="12" opacity="0.4" stroke-width="0.8"/>
  </svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>`,
  emptyChat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 3.5 C6 3.5 5 5 5 7 C5 9 5.5 10.5 6 12.5 L7 17 C7.3 18.5 8 19 9 19 C9.8 19 10.5 18.5 10.8 17 L11.5 14 C11.7 13 12.3 13 12.5 14 L13.2 17 C13.5 18.5 14.2 19 15 19 C16 19 16.7 18.5 17 17 L18 12.5 C18.5 10.5 19 9 19 7 C19 5 18 3.5 16 3.5 C14.5 3.5 13 4 12 4 C11 4 9.5 3.5 8 3.5 Z"/>
    <circle cx="12" cy="10" r="1.5" fill="currentColor"/>
  </svg>`
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
    { id: 'gpt-5.4-nano',  name: 'GPT-5.4 Nano',  short: 'NANO', inPrice: 0.20, outPrice: 1.25 },
    { id: 'gpt-5.4-mini',  name: 'GPT-5.4 Mini',  short: 'MINI', inPrice: 0.75, outPrice: 4.50 },
    { id: 'gpt-5.4',       name: 'GPT-5.4',       short: '5.4',  inPrice: 2.50, outPrice: 15.00 },
    { id: 'gpt-5.5',       name: 'GPT-5.5',       short: '5.5',  inPrice: 5.00, outPrice: 30.00 }
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


// ==================== SECURITY SETTINGS ====================
// Client-side mitigation only. Real production security still requires a backend proxy.
const SECURITY = {
  // Keep this whitelist narrow. Unsupported files are accepted as metadata only, not executed or rendered as HTML.
  allowedFileTypes: [
    'image/jpeg', 'image/png', 'image/webp',
    'application/pdf',
    'text/plain', 'text/markdown', 'text/csv', 'text/tab-separated-values',
    'application/json', 'application/xml', 'text/xml',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'model/stl', 'application/sla', 'application/vnd.ms-pki.stl'
  ],
  allowedFileExtensions: [
    'jpg', 'jpeg', 'png', 'webp', 'pdf',
    'txt', 'md', 'markdown', 'csv', 'tsv', 'json', 'xml',
    'doc', 'docx', 'docm', 'xls', 'xlsx', 'xlsm', 'stl'
  ],
  maxFileBytes: 15 * 1024 * 1024,
  maxTextExtractChars: 180000,
  maxStlTrianglesForSummary: 250000,
  confirmCostAboveUsd: 0.10,
  hardCostAboveUsd: 1.00,
  stripAttachmentDataOnSave: true,
  // v5.1.5: Не надокучати дантисту confirm'ом при кожному фото пацієнта.
  // Залишаємо тільки confirm для PII і високої ціни — це справді важливе.
  requireConfirmationForAttachments: false,
  requireConfirmationForPotentialPII: true
};



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
// v5.0: Templates now support per-AI personas (roles)
const DEFAULT_TEMPLATES = [
  {
    id: 'endo',
    icon: '🦷',
    name: 'Ендодонтія',
    description: 'Лікування кореневих каналів, діагностика пульпіту',
    systemAddition: 'Користувач потребує консультацію з ендодонтії. Давай структуровану відповідь: діагностика → план лікування → матеріали → прогноз. Згадуй сучасні протоколи (ESE guidelines).',
    suggestedAI: ['claude', 'perplexity'],
    suggestedLevel: 2,
    personas: {
      claude: 'Ти — ендодонтист-консерватор з 15-річним досвідом. Твій фокус: збереження природного зуба, максимальна обережність з перфораціями, сучасні протоколи ESE. Запропонуй консервативний план.',
      perplexity: 'Ти — дослідник доказової стоматології. Знайди останні публікації PubMed (2023-2026) щодо ендодонтичних протоколів, MTA vs Biodentine, рівні доказовості. Цитуй джерела.',
      gemini: 'Ти — матеріалознавець стоматолог. Аналізуй доступні на ринку матеріали (іригaнти, силери, coronal seal), їхні переваги/недоліки, ціну.',
      openai: 'Ти — критичний рев\'юер. Шукай слабкі місця в плані лікування, ризики, альтернативи. Запитай що могло б піти не так.'
    }
  },
  {
    id: 'implants',
    icon: '🔩',
    name: 'Імплантологія',
    description: 'Планування імплантації, вибір системи, ускладнення',
    systemAddition: 'Користувач потребує консультацію з імплантології. Структура: клінічна ситуація → варіанти імплант-системи → хірургічний протокол → протезування → ризики. Враховуй ITI та EAO guidelines.',
    suggestedAI: ['claude', 'gemini', 'perplexity'],
    suggestedLevel: 3,
    personas: {
      claude: 'Ти — досвідчений хірург-імплантолог, ITI Fellow. Мислиш поетапно, від діагностики CBCT до остаточного протезування. Обережний щодо аугментацій.',
      perplexity: 'Ти — пошуковик доказової медицини. Знаходь сучасні studies (2023-2026) про successes rates, peri-implantitis, нові поверхні імплантів. Цитуй джерела.',
      gemini: 'Ти — аналітик ринку імплант-систем. Порівнюй Straumann, Nobel, Zimmer, MIS та інших. Вартість, доступність у ЄС, довгострокова підтримка.',
      openai: 'Ти — ризик-менеджер у хірургії. Прораховуй ускладнення, протипоказання, законні аспекти informed consent.'
    }
  },
  {
    id: 'perio',
    icon: '🩸',
    name: 'Пародонтологія',
    description: 'Лікування пародонтиту, підтримуюча терапія',
    systemAddition: 'Консультація з пародонтології. Структура: оцінка стадії/ступеня → план лікування → підтримуюча терапія. Посилайся на EFP 2018 classification.',
    suggestedAI: ['claude', 'perplexity'],
    suggestedLevel: 2,
    personas: {
      claude: 'Ти — пародонтолог-клініцист. Робиш staging/grading за EFP 2018, плануєш нехірургічне та хірургічне лікування крок за кроком.',
      perplexity: 'Ти — дослідник мікробіології та доказів. Знаходь протоколи антимікробної терапії, ризики системних захворювань, guidelines EFP.',
      gemini: 'Ти — спеціаліст з підтримуючої терапії. Фокус на SPT, homecare, compliance пацієнта, технології (AirFlow, лазер).',
      openai: 'Ти — рев\'юер плану лікування. Оцінюй чи правильно визначена стадія, чи не пропущені фактори ризику (діабет, куріння).'
    }
  },
  {
    id: 'urgent',
    icon: '🚨',
    name: 'Ургентний випадок',
    description: 'Швидке рішення для гострого болю/травми',
    systemAddition: 'УРГЕНТНИЙ ВИПАДОК. Дай КОРОТКУ відповідь у 3 пункти: що робити зараз, що дати з медикаментів (з дозуванням), коли призначити повторний візит. Без зайвих деталей.',
    suggestedAI: ['claude'],
    suggestedLevel: 1,
    personas: {
      claude: 'Ти — досвідчений лікар ургентної стоматології. Швидко тріажуєш, приймаєш рішення за хвилини, знаєш стандартні протоколи. Коротко і по-ділу.'
    }
  },
  {
    id: 'diff-pain',
    icon: '🔍',
    name: 'Диф. діагностика болю',
    description: 'Визначення джерела зубного болю',
    systemAddition: 'Диференційна діагностика болю у щелепно-лицевій ділянці. Структура: можливі джерела (пульпа/періодонт/TMJ/невралгія/синусит) → які тести підтвердити → що виключити першочергово.',
    suggestedAI: ['claude', 'gemini', 'perplexity'],
    suggestedLevel: 3,
    personas: {
      claude: 'Ти — діагност-консультант. Систематично працюєш через диф-діагноз, від найімовірнішого до рідкісного, не пропускаєш non-odontogenic причини.',
      perplexity: 'Ти — невролог-стоматолог. Шукай доказові протоколи для TMJ, тригемінальної невралгії, атипового болю обличчя. Посилайся на джерела.',
      gemini: 'Ти — експерт з візуалізації. Радиш які RTG/CBCT/МРТ потрібні, як інтерпретувати знахідки, коли направити до ЛОР або невролога.',
      openai: 'Ти — скептик-перевіряч. Запитуй "а якщо це не зуб?", змушуй думати про синусит, міофасціальний біль, психогенні причини.'
    }
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
    description: 'Посилання на офіційні джерела кодів',
    text: 'УВАГА: НЕ ВИГАДУЙ коди VZP. Якщо не знаєш точний код — напиши "[перевір код у číselníku VZP]". Офіційні джерела: vzp.cz/poskytovatele/ciselniky/zdravotni-vykony та публікація ČSK "Stomatologické výkony v roce 2026". Відомі реальні коди: endodoncie 00925/00926 (за kanálek), výplně signální 00921+00828-00830, dětská péče 00906/00907/00920, pohotovost 00819, stomatologická vyšetření 00901-00902. Amalgam заборонено від 1.7.2026 крім výjimečných випадків. Завжди рекомендуй перевірити поточний číselník перед виставленням рахунку.'
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
  settings: { language: 'uk' },
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
    const appSettings = JSON.parse(localStorage.getItem(STORAGE.settings) || '{}');
    state.settings = { language: ['uk','cs','en'].includes(appSettings.language) ? appSettings.language : 'uk' };
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
    flash(t('flash.storageKeysFailed'), true);
  }
}
function saveMemory() {
  try {
    localStorage.setItem(STORAGE.memory, JSON.stringify(state.memory));
  } catch (e) {
    flash(t('flash.storageMemoryFailed'), true);
  }
}
function saveTemplates() {
  try { localStorage.setItem(STORAGE.templates, JSON.stringify(state.templates)); }
  catch (e) { flash(t('flash.storageTemplatesFailed'), true); }
}
function saveCases() {
  try { localStorage.setItem(STORAGE.cases, JSON.stringify(state.cases)); }
  catch (e) { flash(t('flash.storageCasesFailed'), true); }
}
function saveStats() {
  try { localStorage.setItem(STORAGE.stats, JSON.stringify(state.stats)); }
  catch (e) { /* silent */ }
}
function stripAttachmentForStorage(a) {
  return { id: a.id, kind: a.kind, name: a.name, mime: a.mime, size: a.size };
}

function stripMessageForStorage(m) {
  const out = { ...m };
  if (SECURITY.stripAttachmentDataOnSave && Array.isArray(out.attachments)) {
    out.attachments = out.attachments.map(stripAttachmentForStorage);
  }
  return out;
}

function saveChats() {
  const cleaned = {};
  for (const id in state.chats) {
    const c = { ...state.chats[id] };
    c.messages = (c.messages || []).filter(m => !m.loading).map(stripMessageForStorage);
    cleaned[id] = c;
  }
  try {
    const data = JSON.stringify({ chats: cleaned, order: state.chatOrder, archived: state.archivedChatIds });
    if (data.length > 4 * 1024 * 1024) {
      console.warn('Chat storage is getting large:', Math.round(data.length / 1024), 'KB');
    }
    localStorage.setItem(STORAGE.chats, data);
  } catch (e) {
    flash(t('flash.storageFull'), true);
  }
}

// ==================== UTILS ====================
const SUPPORTED_LANGS = ['uk', 'cs', 'en'];
const HTML_LANG = { uk: 'uk', cs: 'cs-CZ', en: 'en' };
const LOCALES = { uk: 'uk-UA', cs: 'cs-CZ', en: 'en-US' };

function getLang() {
  const lang = state.settings?.language || 'uk';
  return SUPPORTED_LANGS.includes(lang) ? lang : 'uk';
}

function locale() {
  return LOCALES[getLang()] || 'uk-UA';
}

function t(key, params = {}) {
  const dict = (typeof TRANSLATIONS !== 'undefined') ? TRANSLATIONS : { uk: {} };
  const lang = getLang();
  let text = dict[lang]?.[key] ?? dict.uk?.[key] ?? key;
  for (const [k, v] of Object.entries(params)) {
    text = String(text).replaceAll(`{{${k}}}`, String(v));
  }
  return text;
}

function hasTranslation(key, lang = getLang()) {
  const dict = (typeof TRANSLATIONS !== 'undefined') ? TRANSLATIONS : { uk: {} };
  return Boolean(dict[lang]?.[key] || dict.uk?.[key]);
}

function plural(count, forms) {
  const lang = getLang();
  if (lang === 'en') return count === 1 ? forms.one : forms.other;
  if (lang === 'cs') {
    if (count === 1) return forms.one;
    if (count >= 2 && count <= 4) return forms.few;
    return forms.many;
  }
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return forms.one;
  if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return forms.few;
  return forms.many;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel));
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.setAttribute('title', t(el.dataset.i18nTitle));
  });
  document.documentElement.lang = HTML_LANG[getLang()] || 'uk';
}

function saveSettingsState() {
  try { localStorage.setItem(STORAGE.settings, JSON.stringify(state.settings || {})); }
  catch (e) { console.warn('Settings save failed:', e); }
}

function renderLanguagePicker() {
  document.querySelectorAll('[data-lang-option]').forEach(btn => {
    const lang = btn.dataset.langOption;
    btn.classList.toggle('active', lang === getLang());
    btn.onclick = () => {
      if (!SUPPORTED_LANGS.includes(lang)) return;
      state.settings.language = lang;
      saveSettingsState();
      applyTranslations();
      renderLanguagePicker();
      if (state.currentScreen === 'list') renderChatList();
      if (state.currentScreen === 'new') {
        renderTemplates(); renderAICards(); renderModePicker(); updateCostEstimate();
      }
      if (state.currentScreen === 'chat') renderChatScreen();
      flash(t('flash.languageChanged'));
    };
  });
}

function getLanguageInstruction() {
  return t(`prompt.language.${getLang()}`);
}

function levelName(level) {
  const keys = ['level.fast', 'level.medium', 'level.smart', 'level.maximum'];
  return t(keys[level] || 'level.medium');
}

function modeName(key) {
  return t(`mode.${key}.name`);
}

function modeDesc(key) {
  return t(`mode.${key}.desc`);
}

function templateText(template, field) {
  if (!template) return '';
  const key = `template.${template.id}.${field}`;
  return hasTranslation(key) ? t(key) : (template[field] || '');
}

function templatePersonaText(template, ai) {
  const key = `template.${template.id}.persona.${ai}`;
  return hasTranslation(key) ? t(key) : template.personas?.[ai];
}

function czechBlockName(key, block) {
  const k = `czechContext.${key}.name`;
  return hasTranslation(k) ? t(k) : block.name;
}

function czechBlockDesc(key, block) {
  const k = `czechContext.${key}.description`;
  return hasTranslation(k) ? t(k) : block.description;
}

function uid() { return Math.random().toString(36).slice(2, 10) + Date.now().toString(36); }
function escapeHtml(s) { return String(s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function fmtTime(ts) { return ts ? new Date(ts).toLocaleTimeString(locale(), {hour:'2-digit', minute:'2-digit'}) : ''; }
function fmtDate(ts) {
  if (!ts) return '';
  const d = new Date(ts), now = new Date();
  if (d.toDateString() === now.toDateString()) return fmtTime(ts);
  const diff = (now - d) / (1000*60*60*24);
  if (diff < 7) return d.toLocaleDateString(locale(), { weekday: 'short' });
  return d.toLocaleDateString(locale(), { day: '2-digit', month: '2-digit' });
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
        <h2>${t('list.empty.title')}</h2>
        <p>${t('list.empty.desc')}</p>
      </div>`;
    return;
  }

  let html = '';

  // Search bar
  html += `<div class="chat-search-wrap">
    <input type="text" class="chat-search-input" id="chatSearchInput" placeholder="${escapeHtml(t('list.search.placeholder'))}" value="${escapeHtml(state.chatSearchQuery || '')}">
    ${state.chatSearchQuery ? '<button class="chat-search-clear" id="chatSearchClear">✕</button>' : ''}
  </div>`;

  // Selection mode bar
  if (state.selectionMode) {
    const count = state.selectedChatIds.size;
    html += `<div class="selection-bar">
      <span class="selection-count">${t('selection.count', {count})}</span>
      <div class="selection-actions">
        <button class="selection-btn" id="selectionCancel">${t('selection.cancel')}</button>
        <button class="selection-btn danger" id="selectionDelete" ${count === 0 ? 'disabled' : ''}>${t('selection.delete')}</button>
        <button class="selection-btn" id="selectionArchive" ${count === 0 ? 'disabled' : ''}>${t('selection.archive')}</button>
      </div>
    </div>`;
  }

  // Active chats
  if (filteredActive.length > 0) {
    html += filteredActive.map(c => renderChatItem(c, false)).join('');
  } else if (query) {
    html += `<div class="chat-list-empty" style="padding:30px 20px;"><p>${t('list.noResults', {query: escapeHtml(query)})}</p></div>`;
  }

  // Archived section
  if (filteredArchived.length > 0) {
    html += `<div class="archive-section">
      <div class="archive-header">${t('list.archive', {count: filteredArchived.length})}</div>
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

    // Click → open chat (or close swipe, or toggle selection)
    item.addEventListener('click', (e) => {
      if (e.target.closest('.swipe-action')) return;
      const inner = item.querySelector('.chat-item-inner');
      // v4.5: If this chat has swipe open, tap closes it
      if (inner && inner.dataset.swiped === '1') {
        inner.style.transform = '';
        delete inner.dataset.swiped;
        return;
      }
      // v4.5: If ANY other chat has swipe open, close it and don't open this one
      const openOne = el.querySelector('.chat-item-inner[data-swiped="1"]');
      if (openOne) {
        openOne.style.transform = '';
        delete openOne.dataset.swiped;
        return;
      }
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
      const inner = item.querySelector('.chat-item-inner');
      // Capture current transform state so we can swipe from swiped position
      item._startOffset = inner && inner.dataset.swiped === '1' ? -140 : 0;
      longPressTimer = setTimeout(() => {
        if (!state.selectionMode && item._startOffset === 0) {
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
      // v4.5: Swipe detection — both directions, and works from swiped position
      if (!state.selectionMode && Math.abs(dx) > 20 && Math.abs(dx) > Math.abs(dy) * 2) {
        isSwiping = true;
        const inner = item.querySelector('.chat-item-inner');
        if (inner) {
          // startOffset + dx, clamped to [-140, 0]
          const raw = (item._startOffset || 0) + dx;
          const offset = Math.max(-140, Math.min(0, raw));
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
          const finalOffset = (item._startOffset || 0) + dx;
          // Snap: if past halfway toward revealing → open; else → close
          if (finalOffset < -70) {
            inner.style.transform = 'translateX(-140px)';
            inner.dataset.swiped = '1';
            // v4.5: Close any other open swipe
            el.querySelectorAll('.chat-item-inner[data-swiped="1"]').forEach(other => {
              if (other !== inner) {
                other.style.transform = '';
                delete other.dataset.swiped;
              }
            });
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
        if (confirm(t('confirm.deleteChat'))) {
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
    if (confirm(t('confirm.deleteChats', {count}))) {
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
    flash(t('flash.archived'));
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
  flash(t('flash.archived'));
}

function unarchiveChat(chatId) {
  state.archivedChatIds = state.archivedChatIds.filter(id => id !== chatId);
  saveChats();
  renderChatList();
  flash(t('flash.unarchived'));
}

function renderChatItem(c, isArchived = false) {
  const participants = c.participants || [];
  const lastMsg = [...(c.messages || [])].reverse().find(m => !m.loading && !m.hidden);
  const preview = lastMsg ? (lastMsg.role === 'user' ? t('chat.youPreview') : '') + (lastMsg.content || '').slice(0, 50) : t('chat.newPreview');
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

  const modeLabel = isMulti ? (c.mode ? modeName(c.mode).toUpperCase() : t('label.council')) : AI_CONFIG[participants[0]?.ai]?.name.toUpperCase() || '';
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
          <div class="chat-title">${escapeHtml(c.name || t('chat.noTitle'))}</div>
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
    research: false,
    templateSystemAddition: null,
    templatePersonas: null  // v5.0
  };

  document.getElementById('chatNameInput').value = '';
  renderTemplates();
  renderAICards();
  renderModePicker();
  updateCouncilVisibility();
  updateCostEstimate();
  updateCreateButton();
}

// v4.5: Render template cards
function renderTemplates() {
  const wrap = document.getElementById('templatesGrid');
  if (!wrap) return;
  const templates = state.templates || DEFAULT_TEMPLATES;
  wrap.innerHTML = templates.map(t => `
    <button class="template-card" data-template-id="${t.id}">
      <div class="template-icon">${t.icon}</div>
      <div class="template-name">${escapeHtml(templateText(t, 'name'))}</div>
      <div class="template-desc">${escapeHtml(templateText(t, 'description'))}</div>
    </button>
  `).join('');
  wrap.querySelectorAll('.template-card').forEach(btn => {
    btn.addEventListener('click', () => applyTemplate(btn.dataset.templateId));
  });
}

function applyTemplate(templateId) {
  const templates = state.templates || DEFAULT_TEMPLATES;
  const t = templates.find(x => x.id === templateId);
  if (!t) return;

  const d = state.newChatDraft;
  // Set name if still empty
  if (!document.getElementById('chatNameInput').value) {
    document.getElementById('chatNameInput').value = templateText(t, 'name');
  }
  // Apply suggested AIs
  d.participants.forEach(p => {
    p.selected = t.suggestedAI.includes(p.ai) && !!state.keys[p.ai];
    if (p.selected) p.level = t.suggestedLevel !== undefined ? t.suggestedLevel : 2;
  });
  // If no AI available → select any available one
  if (!d.participants.some(p => p.selected)) {
    const firstAvail = d.participants.find(p => state.keys[p.ai]);
    if (firstAvail) firstAvail.selected = true;
  }
  // Mode: 1 AI → single, 2+ → synthesis
  const selCount = d.participants.filter(p => p.selected).length;
  if (selCount >= 2) d.mode = 'synthesis';
  // Store system addition to inject at send time
  d.templateSystemAddition = templateText(t, 'systemAddition');
  d.templateName = templateText(t, 'name');
  d.templatePersonas = t.personas ? Object.fromEntries(Object.keys(t.personas).map(ai => [ai, templatePersonaText(t, ai)])) : null; // v6.0: localized per-AI personas when available

  renderAICards();
  renderModePicker();
  updateCouncilVisibility();
  updateCostEstimate();
  updateCreateButton();
  // Highlight selected template card
  document.querySelectorAll('.template-card').forEach(card => {
    card.classList.toggle('selected', card.dataset.templateId === templateId);
  });
  flash(t('template.applied', {name: templateText(t, 'name')}));
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
            ${!hasKey ? `<span class="missing">${t('label.missingKey')}</span>` : ''}
          </div>
          <div class="toggle" data-toggle="${idx}"></div>
        </div>
        <div class="level-slider-wrap">
          <div class="level-slider-label">
            <span>${levelName(p.level)}</span>
            <span class="level-name">${model.name}</span>
          </div>
          <input type="range" class="slider" min="0" max="3" step="1" value="${p.level}" data-level="${idx}">
          <div class="price-hint">${t('label.priceHint', {inPrice: model.inPrice.toFixed(2), outPrice: model.outPrice.toFixed(2)})}</div>
        </div>
      </div>`;
  }).join('');

  wrap.querySelectorAll('[data-toggle]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = +el.dataset.toggle;
      const p = state.newChatDraft.participants[idx];
      if (!state.keys[p.ai]) { flash(t('flash.addApiKey'), true); return; }
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
      <div class="mode-name">${modeName(key)}</div>
      <div class="mode-desc">${modeDesc(key)}</div>
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
    el.value = `${t('chat.title')} · ${AI_CONFIG[selected[0].ai].name}`;
  } else {
    el.value = `${t('chat.council')}: ${selected.map(p => AI_CONFIG[p.ai].name).join(' · ')}`;
  }
  el.dataset.auto = '1';
}

// ==================== COST ESTIMATE ====================
function updateCostEstimate() {
  const d = state.newChatDraft;
  const selected = d.participants.filter(p => p.selected);
  const box = document.getElementById('costEstimate');

  if (selected.length === 0) {
    box.innerHTML = `<div class="cost-main">$0.00</div><div class="cost-detail">${t('newChat.costEmpty')}</div>`;
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

  const runsLabel = runs > 1 ? ` × ${runs}` : '';
  const modeLabel = selected.length > 1 ? ` · ${modeName(d.mode)}` : '';
  const researchLabel = d.research ? ` · ${t('label.research')}` : '';

  box.innerHTML = `
    <div class="cost-main ${cls}">$${total.toFixed(4)}</div>
    <div class="cost-detail">${t('label.aiCount', {count: selected.length})}${modeLabel}${runsLabel}${researchLabel}<br>${t('newChat.costApprox')}</div>`;
}

// ==================== CREATE CHAT ====================
function createChat() {
  const d = state.newChatDraft;
  const selected = d.participants.filter(p => p.selected);
  if (selected.length === 0) return;
  const name = document.getElementById('chatNameInput').value.trim() || `${t('chat.title')} ${new Date().toLocaleDateString(locale())}`;

  const chat = {
    id: uid(),
    name,
    participants: selected.map(p => ({ ai: p.ai, level: p.level })),
    mode: selected.length > 1 ? d.mode : null,
    debateRounds: d.debateRounds,
    webSearch: d.webSearch,
    research: d.research,
    templateSystemAddition: d.templateSystemAddition || null,  // v4.5
    templateName: d.templateName || null,
    templatePersonas: d.templatePersonas || null,  // v5.0
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
    const modeNameText = c.mode ? modeName(c.mode).toUpperCase() : t('label.council');
    sub = `${participants.length} AI · ${modeNameText}${c.research && participants.length === 1 ? ` · ${t('label.research').toUpperCase()}` : ''}`;
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
  document.getElementById('menuToggleLogLabel').textContent = state.showFullLog ? t('menu.compactLog') : t('menu.fullLog');

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
    <div class="level-menu-title">${t('chatInfo.mode')}</div>`;

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
          <div class="level-option-name">${levelName(lvl)}</div>
          <div class="level-option-model">${m.name}</div>
        </div>
      </div>`;
    }
    html += `</div>`;
  });
  html += `<button class="settings-btn" id="levelMenuClose" style="width:100%;margin-top:8px;">${t('label.ready')}</button></div>`;
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
        flash(`${AI_CONFIG[ai].name}: ${levelName(level)}`);
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
        <p>${isMulti ? t('chat.askMulti', {count: c.participants.length, mode: modeName(c.mode)}) : t('chat.askSingle', {ai: AI_CONFIG[c.participants[0].ai].name})}</p>
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
      sep = `<div class="round-sep">${t('chat.round', {n: m.round})}</div>`;
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

      btn.textContent = t('action.tldrLoading');
      btn.disabled = true;

      // Use cheapest available AI
      let aiToUse = null;
      if (state.keys.claude) aiToUse = 'claude';
      else if (state.keys.gemini) aiToUse = 'gemini';
      else if (state.keys.openai) aiToUse = 'openai';
      if (!aiToUse) {
        flash(t('flash.noTldrKey'), true);
        btn.textContent = t('action.tldr');
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
        flash(t('flash.tldrFailed', {error: err.message}), true);
        btn.textContent = t('action.tldr');
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
    ai = { name: t('chat.you'), color: '#e8e8f0', logo: LOGOS.user };
  } else if (isCouncilSynth) {
    ai = { name: t('chat.council'), color: (AI_CONFIG.council && AI_CONFIG.council.color) || '#d4ff3a', logo: LOGOS.council };
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
    bodyContent = `<div class="error-msg">✕ ${escapeHtml(m.content || t('chat.unknownError'))}</div>`;
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
        : `<button class="tldr-btn" data-action="tldr" data-msg-id="${m.id}">${t('action.tldr')}</button>`)
    : '';

  // Action buttons — only for non-user, non-loading, non-error AI responses with content
  const actionsHtml = (!isUser && !m.loading && !m.error && m.content)
    ? `<div class="msg-actions">
         <button class="msg-action-btn" data-action="copy" data-msg-id="${m.id}">${t('action.copy')}</button>
         <button class="msg-action-btn" data-action="memory" data-msg-id="${m.id}">${t('action.memory')}</button>
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

function fileIcon(kind) {
  const icons = {
    image: '🖼️', pdf: '📄', text: '📝', csv: '📊', spreadsheet: '📊',
    word: '📝', stl: '🧊', json: '🧩', xml: '🧩', other: '📎'
  };
  return icons[kind] || icons.other;
}

function renderAttachment(a) {
  if (a.kind === 'image' && a.data) {
    return `<div class="msg-attachment"><img src="data:${a.mime};base64,${a.data}" alt=""></div>`;
  }
  const extra = a.extractedText
    ? ` <span style="color:var(--text-mute);">(${t('chat.attachmentTextSent')})</span>`
    : (a.summary ? ` <span style="color:var(--text-mute);">(${t('chat.attachmentSummarySent')})</span>` : '');
  return `<div class="msg-attachment">${fileIcon(a.kind)} ${escapeHtml(a.name || t('chat.file'))}${extra}</div>`;
}

// ==================== ATTACHMENTS ====================
function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(',')[1]);
    reader.onerror = () => reject(reader.error || new Error('FileReader error'));
    reader.readAsDataURL(blob);
  });
}

async function sanitizeImageFile(file) {
  // Re-encode via canvas to strip EXIF/GPS/device metadata before sending to AI.
  const objectUrl = URL.createObjectURL(file);
  try {
    const img = await new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error('Не вдалось прочитати зображення'));
      image.src = objectUrl;
    });
    const maxSide = 2200;
    let { width, height } = img;
    const scale = Math.min(1, maxSide / Math.max(width, height));
    width = Math.max(1, Math.round(width * scale));
    height = Math.max(1, Math.round(height * scale));
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d', { alpha: false });
    ctx.drawImage(img, 0, 0, width, height);
    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.92));
    if (!blob) throw new Error('Не вдалось очистити metadata зображення');
    return { data: await blobToBase64(blob), mime: 'image/jpeg', size: blob.size };
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}
function getFileExt(name) {
  const m = String(name || '').toLowerCase().match(/\.([a-z0-9]{1,12})$/);
  return m ? m[1] : '';
}

function classifyAttachment(file) {
  const type = (file.type || '').toLowerCase();
  const ext = getFileExt(file.name);
  if (type.startsWith('image/')) return 'image';
  if (type === 'application/pdf' || ext === 'pdf') return 'pdf';
  if (['txt', 'md', 'markdown'].includes(ext) || type === 'text/plain' || type === 'text/markdown') return 'text';
  if (ext === 'csv' || ext === 'tsv' || type === 'text/csv' || type === 'text/tab-separated-values') return 'csv';
  if (ext === 'json' || type === 'application/json') return 'json';
  if (ext === 'xml' || type === 'application/xml' || type === 'text/xml') return 'xml';
  if (['doc', 'docx', 'docm'].includes(ext) || type.includes('wordprocessingml') || type.includes('macroenabled') || type === 'application/msword') return 'word';
  if (['xls', 'xlsx', 'xlsm'].includes(ext) || type.includes('spreadsheetml') || type.includes('macroenabled') || type === 'application/vnd.ms-excel') return 'spreadsheet';
  if (ext === 'stl' || type === 'model/stl' || type === 'application/sla' || type === 'application/vnd.ms-pki.stl') return 'stl';
  return 'other';
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(reader.error || new Error('FileReader text error'));
    reader.readAsText(file);
  });
}

function readFileAsArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error || new Error('FileReader buffer error'));
    reader.readAsArrayBuffer(file);
  });
}

function decodeUtf8(bytes) {
  return new TextDecoder('utf-8', { fatal: false }).decode(bytes);
}

function getXmlAttr(tag, name) {
  const re = new RegExp('(?:^|\\s)' + name.replace(':', '\\:') + '="([^"]*)"');
  const m = String(tag || '').match(re);
  return m ? decodeXmlEntities(m[1]) : '';
}

function decodeXmlEntities(text) {
  return String(text || '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(parseInt(n, 10)));
}

function xmlToPlainText(xml) {
  let s = String(xml || '');
  s = s
    .replace(/<w:tab\s*\/?>/gi, '\t')
    .replace(/<w:br\s*\/?>/gi, '\n')
    .replace(/<w:cr\s*\/?>/gi, '\n')
    .replace(/<\/w:p>/gi, '\n')
    .replace(/<\/w:tr>/gi, '\n')
    .replace(/<\/w:tc>/gi, '\t')
    .replace(/<\/a:p>/gi, '\n')
    .replace(/<\/si>/gi, '\n')
    .replace(/<[^>]+>/g, '');
  s = decodeXmlEntities(s);
  return s
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function findZipEndOfCentralDirectory(view) {
  const min = Math.max(0, view.byteLength - 22 - 65535);
  for (let i = view.byteLength - 22; i >= min; i--) {
    if (view.getUint32(i, true) === 0x06054b50) return i;
  }
  return -1;
}

function listZipEntries(buffer) {
  const view = new DataView(buffer);
  const bytes = new Uint8Array(buffer);
  const eocd = findZipEndOfCentralDirectory(view);
  if (eocd < 0) throw new Error('ZIP структура не знайдена');
  const total = view.getUint16(eocd + 10, true);
  let offset = view.getUint32(eocd + 16, true);
  const entries = [];

  for (let i = 0; i < total && offset < view.byteLength; i++) {
    if (view.getUint32(offset, true) !== 0x02014b50) break;
    const flags = view.getUint16(offset + 8, true);
    const method = view.getUint16(offset + 10, true);
    const compressedSize = view.getUint32(offset + 20, true);
    const uncompressedSize = view.getUint32(offset + 24, true);
    const nameLen = view.getUint16(offset + 28, true);
    const extraLen = view.getUint16(offset + 30, true);
    const commentLen = view.getUint16(offset + 32, true);
    const localOffset = view.getUint32(offset + 42, true);
    const rawName = bytes.slice(offset + 46, offset + 46 + nameLen);
    const name = decodeUtf8(rawName).replace(/^\/+/, '');
    entries.push({ name, method, compressedSize, uncompressedSize, localOffset, flags });
    offset += 46 + nameLen + extraLen + commentLen;
  }
  return entries;
}

async function inflateZipPayload(payload, method) {
  if (method === 0) return payload;
  if (method !== 8) throw new Error('ZIP compression method ' + method + ' не підтримується');
  if (typeof DecompressionStream === 'undefined') {
    throw new Error('Браузер не підтримує DecompressionStream для DOCX/XLSX');
  }
  const ds = new DecompressionStream('deflate-raw');
  const stream = new Blob([payload]).stream().pipeThrough(ds);
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

async function readZipEntry(buffer, entryName) {
  const entries = listZipEntries(buffer);
  const normalized = String(entryName || '').replace(/^\/+/, '');
  const entry = entries.find(e => e.name === normalized);
  if (!entry) return null;
  const view = new DataView(buffer);
  const bytes = new Uint8Array(buffer);
  const lo = entry.localOffset;
  if (view.getUint32(lo, true) !== 0x04034b50) throw new Error('ZIP local header пошкоджений: ' + entry.name);
  const localNameLen = view.getUint16(lo + 26, true);
  const localExtraLen = view.getUint16(lo + 28, true);
  const dataStart = lo + 30 + localNameLen + localExtraLen;
  const payload = bytes.slice(dataStart, dataStart + entry.compressedSize);
  return inflateZipPayload(payload, entry.method);
}

async function readZipText(buffer, entryName) {
  const bytes = await readZipEntry(buffer, entryName);
  return bytes ? decodeUtf8(bytes) : '';
}

async function extractDocxText(file) {
  const buffer = await readFileAsArrayBuffer(file);
  const entries = listZipEntries(buffer).map(e => e.name);
  const wanted = [
    'word/document.xml',
    ...entries.filter(n => /^word\/(header|footer)\d*\.xml$/i.test(n)).sort(),
    'word/footnotes.xml',
    'word/endnotes.xml',
    'word/comments.xml'
  ].filter((n, i, arr) => arr.indexOf(n) === i && entries.includes(n));

  const sections = [];
  for (const name of wanted) {
    const xml = await readZipText(buffer, name);
    const text = xmlToPlainText(xml);
    if (text) sections.push('### ' + name + '\n' + text);
  }
  const body = sections.join('\n\n').trim();
  return 'Word файл: ' + file.name + '\nФормат: DOCX/DOCM\nВитягнуто секцій: ' + sections.length + '\n\n' + trimExtract(body);
}

function colLettersToIndex(ref) {
  const letters = String(ref || '').match(/^[A-Z]+/i)?.[0]?.toUpperCase() || '';
  let n = 0;
  for (const ch of letters) n = n * 26 + (ch.charCodeAt(0) - 64);
  return Math.max(0, n - 1);
}

function parseSharedStrings(xml) {
  const items = [];
  const re = /<si[\s\S]*?<\/si>/gi;
  let m;
  while ((m = re.exec(xml))) items.push(xmlToPlainText(m[0]));
  return items;
}

function parseWorkbookSheets(workbookXml, relsXml, entries) {
  const rels = {};
  relsXml.replace(/<Relationship\b([^>]*)\/>/gi, (_, attrs) => {
    const id = getXmlAttr(attrs, 'Id');
    let target = getXmlAttr(attrs, 'Target');
    if (id && target) {
      target = target.replace(/^\/+/, '');
      if (!target.startsWith('xl/')) target = 'xl/' + target;
      rels[id] = target;
    }
    return '';
  });

  const sheets = [];
  workbookXml.replace(/<sheet\b([^>]*)\/>/gi, (_, attrs) => {
    const name = getXmlAttr(attrs, 'name') || 'Sheet';
    const rid = getXmlAttr(attrs, 'r:id');
    const path = rels[rid];
    if (path) sheets.push({ name, path });
    return '';
  });

  if (sheets.length) return sheets;
  return entries
    .filter(n => /^xl\/worksheets\/sheet\d+\.xml$/i.test(n))
    .sort()
    .map((path, i) => ({ name: 'Sheet' + (i + 1), path }));
}

function parseXlsxSheetXml(sheetXml, sharedStrings, maxRows = 120, maxCols = 60) {
  const rows = [];
  const rowRe = /<row\b[^>]*>([\s\S]*?)<\/row>/gi;
  let rowMatch;
  while ((rowMatch = rowRe.exec(sheetXml)) && rows.length < maxRows) {
    const row = [];
    const cellRe = /<c\b([^>]*)>([\s\S]*?)<\/c>/gi;
    let cellMatch;
    while ((cellMatch = cellRe.exec(rowMatch[1]))) {
      const attrs = cellMatch[1];
      const inner = cellMatch[2];
      const ref = getXmlAttr(attrs, 'r');
      const t = getXmlAttr(attrs, 't');
      const idx = Math.min(maxCols - 1, colLettersToIndex(ref));
      let value = '';
      const v = inner.match(/<v[^>]*>([\s\S]*?)<\/v>/i)?.[1] ?? '';
      if (t === 's') value = sharedStrings[parseInt(v, 10)] || '';
      else if (t === 'inlineStr') value = xmlToPlainText(inner.match(/<is[^>]*>([\s\S]*?)<\/is>/i)?.[1] || inner);
      else if (t === 'b') value = v === '1' ? 'TRUE' : 'FALSE';
      else value = decodeXmlEntities(v);
      const f = inner.match(/<f[^>]*>([\s\S]*?)<\/f>/i)?.[1];
      if (!value && f) value = '=' + decodeXmlEntities(f);
      if (idx >= 0 && idx < maxCols) row[idx] = String(value || '').replace(/[\r\n\t]+/g, ' ').trim();
    }
    while (row.length && !row[row.length - 1]) row.pop();
    if (row.length) rows.push(row);
  }
  return rows.map(r => r.map(v => v || '').join('\t')).join('\n');
}

async function extractXlsxText(file) {
  const buffer = await readFileAsArrayBuffer(file);
  const entries = listZipEntries(buffer).map(e => e.name);
  const sharedXml = entries.includes('xl/sharedStrings.xml') ? await readZipText(buffer, 'xl/sharedStrings.xml') : '';
  const sharedStrings = sharedXml ? parseSharedStrings(sharedXml) : [];
  const workbookXml = entries.includes('xl/workbook.xml') ? await readZipText(buffer, 'xl/workbook.xml') : '';
  const relsXml = entries.includes('xl/_rels/workbook.xml.rels') ? await readZipText(buffer, 'xl/_rels/workbook.xml.rels') : '';
  const sheets = parseWorkbookSheets(workbookXml, relsXml, entries).slice(0, 12);

  const sections = [];
  for (const sheet of sheets) {
    const xml = await readZipText(buffer, sheet.path);
    if (!xml) continue;
    const tsv = parseXlsxSheetXml(xml, sharedStrings);
    if (tsv) sections.push('### Аркуш: ' + sheet.name + '\n' + tsv);
  }
  const body = sections.join('\n\n').trim();
  return 'Excel файл: ' + file.name + '\nФормат: XLSX/XLSM\nАркушів витягнуто: ' + sections.length + '/' + sheets.length + '\nЛіміт preview: до 120 рядків і 60 колонок на аркуш.\n\n' + trimExtract(body);
}

function extractPrintableStringsFromBuffer(buffer, fileName, kind) {
  const bytes = new Uint8Array(buffer);
  const ascii = [];
  let cur = '';
  for (const b of bytes) {
    if (b >= 32 && b <= 126) cur += String.fromCharCode(b);
    else {
      if (cur.length >= 5) ascii.push(cur);
      cur = '';
    }
  }
  if (cur.length >= 5) ascii.push(cur);

  const utf16 = [];
  cur = '';
  for (let i = 0; i + 1 < bytes.length; i += 2) {
    const code = bytes[i] | (bytes[i + 1] << 8);
    if ((code >= 32 && code <= 0xD7FF) || code === 10 || code === 13 || code === 9) cur += String.fromCharCode(code);
    else {
      const clean = cur.replace(/[\u0000-\u001f]+/g, ' ').trim();
      if (clean.length >= 5) utf16.push(clean);
      cur = '';
    }
  }
  const clean = cur.replace(/[\u0000-\u001f]+/g, ' ').trim();
  if (clean.length >= 5) utf16.push(clean);

  const seen = new Set();
  const lines = [...utf16, ...ascii]
    .map(x => x.replace(/\s+/g, ' ').trim())
    .filter(x => x.length >= 5 && x.length <= 500)
    .filter(x => {
      const key = x.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 1200);

  const label = kind === 'word' ? 'Legacy Word DOC' : 'Legacy Excel XLS';
  return label + ' файл: ' + fileName + '\nПовноцінний binary parser не вбудований, виконано heuristic extraction printable strings. Для точного аналізу краще DOCX/XLSX/PDF/CSV.\n\n' + trimExtract(lines.join('\n'));
}

function trimExtract(text, maxChars = SECURITY.maxTextExtractChars) {
  const raw = String(text || '');
  if (raw.length <= maxChars) return raw;
  return raw.slice(0, maxChars) + `\n\n[Текст обрізано: показано перші ${maxChars} символів із ${raw.length}.]`;
}

function summarizeCsvText(text, fileName) {
  const lines = String(text || '').split(/\r?\n/).filter(Boolean);
  const sample = lines.slice(0, 60).join('\n');
  return `Файл CSV/TSV: ${fileName}\nРядків приблизно: ${lines.length}\n\nПерші рядки:\n${sample}`;
}

function summarizeBinaryStl(buffer, fileName) {
  const view = new DataView(buffer);
  if (buffer.byteLength < 84) return `STL файл ${fileName}: файл занадто малий або пошкоджений.`;
  const triCount = view.getUint32(80, true);
  const expected = 84 + triCount * 50;
  if (expected !== buffer.byteLength || triCount > SECURITY.maxStlTrianglesForSummary) {
    return `STL файл ${fileName}: binary STL, трикутників: ${triCount}. Bounding box не рахувався через розмір/невідповідність структури.`;
  }
  let minX = Infinity, minY = Infinity, minZ = Infinity;
  let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
  let offset = 84;
  for (let i = 0; i < triCount; i++) {
    offset += 12;
    for (let v = 0; v < 3; v++) {
      const x = view.getFloat32(offset, true); offset += 4;
      const y = view.getFloat32(offset, true); offset += 4;
      const z = view.getFloat32(offset, true); offset += 4;
      if (Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z)) {
        minX = Math.min(minX, x); maxX = Math.max(maxX, x);
        minY = Math.min(minY, y); maxY = Math.max(maxY, y);
        minZ = Math.min(minZ, z); maxZ = Math.max(maxZ, z);
      }
    }
    offset += 2;
  }
  const sizeX = maxX - minX, sizeY = maxY - minY, sizeZ = maxZ - minZ;
  return `STL файл: ${fileName}\nФормат: binary STL\nТрикутників: ${triCount}\nBounding box:\nX: ${minX.toFixed(3)} … ${maxX.toFixed(3)} (розмір ${sizeX.toFixed(3)})\nY: ${minY.toFixed(3)} … ${maxY.toFixed(3)} (розмір ${sizeY.toFixed(3)})\nZ: ${minZ.toFixed(3)} … ${maxZ.toFixed(3)} (розмір ${sizeZ.toFixed(3)})\n\nОдиниці STL не задані самим файлом; найчастіше це mm, але треба перевірити в CAD/slicer.`;
}

async function summarizeStl(file) {
  const buffer = await readFileAsArrayBuffer(file);
  const headerText = new TextDecoder('utf-8', { fatal: false }).decode(buffer.slice(0, Math.min(buffer.byteLength, 8000)));
  if (/^\s*solid\b/i.test(headerText) && /facet\s+normal/i.test(headerText)) {
    const fullText = await readFileAsText(file);
    const facets = (fullText.match(/facet\s+normal/gi) || []).length;
    return `STL файл: ${file.name}\nФормат: ASCII STL\nТрикутників приблизно: ${facets}\n\nПочаток файлу:\n${trimExtract(fullText, 30000)}`;
  }
  return summarizeBinaryStl(buffer, file.name);
}

function isAllowedAttachment(file) {
  const type = (file.type || '').toLowerCase();
  const ext = getFileExt(file.name);
  return SECURITY.allowedFileTypes.includes(type) || SECURITY.allowedFileExtensions.includes(ext);
}

async function prepareAttachment(file) {
  const kind = classifyAttachment(file);
  const base = { id: uid(), kind, name: file.name, mime: file.type || 'application/octet-stream', size: file.size };

  if (kind === 'image') {
    const prepared = await sanitizeImageFile(file);
    return { ...base, kind: 'image', mime: prepared.mime, size: prepared.size, data: prepared.data };
  }

  if (kind === 'pdf') {
    return { ...base, kind: 'pdf', mime: 'application/pdf', data: await blobToBase64(file) };
  }

  if (['text', 'json', 'xml'].includes(kind)) {
    const text = trimExtract(await readFileAsText(file));
    return { ...base, extractedText: text };
  }

  if (kind === 'csv') {
    const raw = await readFileAsText(file);
    return { ...base, extractedText: trimExtract(summarizeCsvText(raw, file.name)) };
  }

  if (kind === 'stl') {
    return { ...base, summary: await summarizeStl(file) };
  }

  if (kind === 'word') {
    const ext = getFileExt(file.name);
    try {
      if (ext === 'docx' || ext === 'docm') {
        return { ...base, extractedText: await extractDocxText(file) };
      }
      const buffer = await readFileAsArrayBuffer(file);
      return { ...base, extractedText: extractPrintableStringsFromBuffer(buffer, file.name, 'word') };
    } catch (e) {
      console.warn('Word extraction failed:', e);
      return { ...base, note: 'Word файл прийнято, але текст не вдалось витягнути: ' + e.message };
    }
  }

  if (kind === 'spreadsheet') {
    const ext = getFileExt(file.name);
    try {
      if (ext === 'xlsx' || ext === 'xlsm') {
        return { ...base, extractedText: await extractXlsxText(file) };
      }
      const buffer = await readFileAsArrayBuffer(file);
      return { ...base, extractedText: extractPrintableStringsFromBuffer(buffer, file.name, 'spreadsheet') };
    } catch (e) {
      console.warn('Spreadsheet extraction failed:', e);
      return { ...base, note: 'Excel файл прийнято, але текст/таблиці не вдалось витягнути: ' + e.message };
    }
  }

  return { ...base, note: 'Файл прийнято як вкладення, але його вміст не передається AI у frontend-only режимі.' };
}

async function handleFiles(files) {
  for (const file of files) {
    if (!isAllowedAttachment(file)) {
      flash(`${file.name}: тип файлу не дозволений`, true);
      continue;
    }
    if (file.size > SECURITY.maxFileBytes) {
      flash(`${file.name} > ${Math.round(SECURITY.maxFileBytes / 1024 / 1024)} МБ`, true);
      continue;
    }
    try {
      const prepared = await prepareAttachment(file);
      state.pendingAttachments.push(prepared);
      updateAttachmentsUI();
    } catch (e) {
      console.error('Attachment error:', e);
      flash(`${file.name}: не вдалось підготувати файл`, true);
    }
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
    const thumb = a.kind === 'image' && a.data
      ? `<img src="data:${a.mime};base64,${a.data}" alt="">`
      : `<div style="width:30px;height:30px;background:var(--bg-3);border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:14px;">${fileIcon(a.kind)}</div>`;
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
  if (!key) throw new Error(t('error.noKey', {ai: 'Claude'}));
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

// v5.1: Build input format for OpenAI Responses API (different from chat completions)
function openAIResponseInput(messages) {
  return messages.map(m => {
    const role = m.role === 'assistant' ? 'assistant' : 'user';
    if (typeof m.content === 'string') {
      return { role, content: m.content };
    }
    if (Array.isArray(m.content)) {
      const content = [];
      for (const part of m.content) {
        if (part.type === 'text' && part.text) {
          content.push({ type: 'input_text', text: part.text });
        } else if (part.type === 'image_url' && part.image_url?.url) {
          content.push({ type: 'input_image', image_url: part.image_url.url });
        } else if (part.type === 'input_file' && part.file_data) {
          content.push({ type: 'input_file', filename: part.filename || 'file.pdf', file_data: part.file_data });
        } else if (part.text) {
          content.push({ type: 'input_text', text: part.text });
        }
      }
      return { role, content: content.length ? content : [{ type: 'input_text', text: '' }] };
    }
    return { role, content: String(m.content || '') };
  });
}

// v5.1: Extract text from Responses API output
function extractOpenAIResponseText(data) {
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

// v5.1: Legacy chat completions path (for older non-GPT-5 models)
async function callOpenAIChatCompletions(messages, opts, model) {
  const key = state.keys.openai;
  const instructionRole = (model.startsWith('gpt-5') || model.startsWith('o')) ? 'developer' : 'system';
  const msgs = opts.system ? [{ role: instructionRole, content: opts.system }, ...messages] : messages;
  const body = { model, messages: msgs };
  if (model.startsWith('gpt-5') || model.startsWith('o')) {
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
  const msg = data.choices?.[0]?.message;
  let text = '';
  if (typeof msg?.content === 'string') text = msg.content;
  else if (Array.isArray(msg?.content)) text = msg.content.map(p => p.text || '').filter(Boolean).join('\n');
  if (!text && msg?.refusal) text = msg.refusal;
  if (!text) throw new Error(t('error.openaiEmpty'));
  return { text, model };
}

async function callOpenAI(messages, opts = {}) {
  const key = state.keys.openai;
  if (!key) throw new Error(t('error.noKey', {ai: 'OpenAI'}));
  let model = opts.model || 'gpt-5.4-mini';

  // v5.1: GPT-5+ and o-series go through Responses API for best results.
  // Older models (legacy gpt-4, gpt-3.5) still use chat completions.
  const useResponses = model.startsWith('gpt-5') || model.startsWith('o');
  if (!useResponses) {
    return callOpenAIChatCompletions(messages, opts, model);
  }

  const body = {
    model,
    input: openAIResponseInput(messages),
    max_output_tokens: 4096
  };
  if (opts.system) body.instructions = opts.system;

  const resp = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'authorization': `Bearer ${key}` },
    body: JSON.stringify(body)
  });

  if (!resp.ok) {
    const raw = await resp.text();
    // Fallback: if GPT-5.5 isn't yet enabled on user's account, downgrade to gpt-5.4
    if (resp.status === 404 && model === 'gpt-5.5') {
      console.warn('GPT-5.5 unavailable on this account, falling back to gpt-5.4');
      return callOpenAI(messages, { ...opts, model: 'gpt-5.4' });
    }
    throw new Error('OpenAI ' + sanitizeApiError(resp.status, raw));
  }

  const data = await resp.json();
  const text = extractOpenAIResponseText(data);
  if (!text) throw new Error(t('error.openaiEmpty'));
  return { text, model };
}

async function callGemini(messages, opts = {}) {
  const key = state.keys.gemini;
  if (!key) throw new Error(t('error.noKey', {ai: 'Gemini'}));
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

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-goog-api-key': key
    },
    body: JSON.stringify(body)
  });
  if (!resp.ok) throw new Error('Gemini ' + sanitizeApiError(resp.status, await resp.text()));
  const data = await resp.json();
  const text = data.candidates?.[0]?.content?.parts?.map(p => p.text).filter(Boolean).join('\n') || '';
  return { text, model };
}

async function callPerplexity(messages, opts = {}) {
  const key = state.keys.perplexity;
  if (!key) throw new Error(t('error.noKey', {ai: 'Perplexity'}));
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
  const digits = cost < 0.01 ? 4 : (cost < 1 ? 3 : 2);
  return '$' + new Intl.NumberFormat(locale(), { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(cost);
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
    high: { icon: '✅', label: t('confidence.high'), cls: 'confidence-high' },
    medium: { icon: '⚠️', label: t('confidence.medium'), cls: 'confidence-medium' },
    low: { icon: '❌', label: t('confidence.low'), cls: 'confidence-low' }
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
    const supportHtml = supportedBy ? `<div style="font-size:10px;color:var(--text-dim);margin-top:2px;">${t('confidence.supportedBy', {list: escapeHtml(supportedBy)})}</div>` : '';
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
    <div class="contribution-header">${t('confidence.contributionTitle')}</div>
    ${rows}
  </div>`;
}

// ==================== BUILD MESSAGE WITH ATTACHMENTS ====================
// ==================== MEMORY PROMPT ====================
// Builds the system prompt that carries the user's profile + saved facts to every AI call
function buildMemoryPrompt(chatContext, currentAI) {
  const parts = [getLanguageInstruction()];
  if (state.memory.profile && state.memory.profile.trim()) {
    parts.push('ПРО КОРИСТУВАЧА:\n' + state.memory.profile.trim());
  }
  if (state.memory.facts && state.memory.facts.length > 0) {
    const factsText = state.memory.facts.map((f, i) => `${i + 1}. ${f.text}`).join('\n');
    parts.push('ЗБЕРЕЖЕНІ ФАКТИ (пам\'ять користувача):\n' + factsText);
  }
  // v4.5: Czech practice context blocks
  if (state.memory.czechContextEnabled) {
    const blocks = [];
    for (const key in CZECH_CONTEXT_BLOCKS) {
      if (state.memory.czechContextEnabled[key]) {
        blocks.push(CZECH_CONTEXT_BLOCKS[key].text);
      }
    }
    if (blocks.length > 0) {
      parts.push('КОНТЕКСТ ЧЕСЬКОЇ ПРАКТИКИ:\n' + blocks.join('\n\n'));
    }
  }
  // v4.5: Template system addition (if this chat was started from a template)
  if (chatContext && chatContext.templateSystemAddition) {
    parts.push('СПЕЦІАЛІЗАЦІЯ ЧАТУ:\n' + chatContext.templateSystemAddition);
  }
  // v5.0: Per-AI persona from template (if any)
  if (chatContext && chatContext.templatePersonas && currentAI && chatContext.templatePersonas[currentAI]) {
    parts.push('ТВОЯ РОЛЬ У ЦІЙ РАДІ:\n' + chatContext.templatePersonas[currentAI]);
  }
  if (parts.length === 0) return '';
  return parts.join('\n\n') + '\n\nВикористовуй цю інформацію якщо вона доречна. Не згадуй її явно якщо про це не запитують.';
}

// v4.5: Build conversation history for Council mode so each AI sees the prior turns.
// Each AI sees its own past answers as 'assistant'; other AIs' answers and Council syntheses
// are passed as 'user' with a label to preserve context without confusing the AI about its own voice.
function buildCouncilHistory(c, currentAI, currentUserText) {
  if (!c || !c.messages) return [];
  const msgs = c.messages.filter(m => !m.loading && !m.error && m.content && typeof m.content === 'string');
  // Drop the very latest user message — it will be added separately as the current question
  const history = [];
  // Take last 12 messages to keep context manageable
  const recent = msgs.slice(-12);
  for (const m of recent) {
    if (m.role === 'user') {
      // Skip if this is the current question being asked now
      if (m.content === currentUserText) continue;
      history.push({ role: 'user', content: m.content });
    } else if (m.role === 'assistant') {
      if (m.source === currentAI) {
        // This AI's own past answer
        history.push({ role: 'assistant', content: m.content });
      } else if (m.source === 'council-synth') {
        // v5.1: Pass synthesis as user-context message to avoid voice confusion
        // (each AI shouldn't think Council's verdict is its own past answer)
        history.push({
          role: 'user',
          content: `[Контекст: попередній висновок Ради AI]\n${m.content}`
        });
      }
      // Other AIs' raw answers are NOT included to avoid voice confusion
    }
  }
  return history;
}

function buildMessagesForAI(aiName, history, userText, attachments) {
  // Different AIs format attachments differently
  const supportsPdf = aiName === 'claude' || aiName === 'gemini' || aiName === 'openai';
  const supportsImage = true;

  const userContent = [];
  userContent.push({ text: userText });

  if (attachments && attachments.length > 0) {
    for (const a of attachments) {
      if (a.kind === 'image' && supportsImage && a.data) {
        if (aiName === 'claude') {
          userContent.push({ type: 'image', source: { type: 'base64', media_type: a.mime, data: a.data } });
        } else if (aiName === 'openai') {
          userContent.push({ type: 'image_url', image_url: { url: `data:${a.mime};base64,${a.data}` } });
        } else if (aiName === 'gemini') {
          userContent.push({ type: 'image', source: { media_type: a.mime, data: a.data }});
        } else if (aiName === 'perplexity') {
          userContent.push({ type: 'image_url', image_url: { url: `data:${a.mime};base64,${a.data}` } });
        }
      } else if (a.kind === 'pdf' && supportsPdf && a.data) {
        if (aiName === 'claude') {
          userContent.push({ type: 'document', source: { type: 'base64', media_type: 'application/pdf', data: a.data }});
        } else if (aiName === 'gemini') {
          userContent.push({ type: 'document', source: { media_type: 'application/pdf', data: a.data }});
        } else if (aiName === 'openai') {
          userContent.push({ type: 'input_file', filename: a.name || 'document.pdf', file_data: `data:application/pdf;base64,${a.data}` });
        }
      } else if (a.extractedText) {
        userContent[0].text += `\n\n---\nВкладений файл: ${a.name}\nТип: ${a.kind}\n\n${a.extractedText}\n---`;
      } else if (a.summary) {
        userContent[0].text += `\n\n---\nВкладений файл: ${a.name}\nТип: ${a.kind}\n\n${a.summary}\n---`;
      } else if (a.note) {
        userContent[0].text += `\n\n[Вкладений файл "${a.name}" (${a.kind}): ${a.note}]`;
      } else if (a.kind === 'pdf') {
        userContent[0].text += `\n\n[Прикріплений PDF "${a.name}" — ${aiName} не підтримує PDF у цьому режимі, надішли до Claude або Gemini]`;
      } else {
        userContent[0].text += `\n\n[Вкладений файл "${a.name}" (${a.mime || a.kind}) — вміст не передано AI]`;
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

// ==================== PRE-SEND SAFETY ====================
function estimateChatRequestCost(c, userText = '', attachments = []) {
  if (!c || !Array.isArray(c.participants)) return 0;
  const selected = c.participants.filter(p => state.keys[p.ai]);
  if (selected.length === 0) return 0;
  const textTokens = Math.max(800, estimateTokens(userText) + 300);
  const attachmentTokens = (attachments || []).reduce((sum, a) => {
    if (a.kind === 'image') return sum + 1200;
    if (a.kind === 'pdf') return sum + Math.ceil((a.size || 0) / 1500);
    if (a.extractedText) return sum + estimateTokens(a.extractedText);
    if (a.summary) return sum + estimateTokens(a.summary);
    return sum + 200;
  }, 0);
  const inputTok = textTokens + attachmentTokens;
  const outputTok = 1200;
  let runs = 1;
  let synth = 0;
  if (selected.length > 1) {
    if (c.mode === 'debate') runs = c.debateRounds || 2;
    if (c.mode === 'synthesis' || c.mode === 'vote' || c.mode === 'debate') synth = 1;
  }
  if (c.research) runs += 3;
  let total = 0;
  selected.forEach(p => {
    const m = MODELS[p.ai]?.[p.level];
    if (!m) return;
    total += runs * (inputTok * m.inPrice + outputTok * m.outPrice) / 1_000_000;
  });
  if (synth > 0) {
    const synthAI = state.keys.claude ? 'claude' : selected[0].ai;
    const m = MODELS[synthAI]?.[3];
    if (m) total += (inputTok * 2 * m.inPrice + outputTok * m.outPrice) / 1_000_000;
  }
  return total;
}

function detectPotentialPII(text) {
  const s = String(text || '');
  const patterns = [
    /\b\d{2,6}\/?\d{3,4}\b/,
    /\b\d{8,12}\b/,
    /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i,
    /(?:\+?420|\+?421|\+?380)?[\s.-]*(?:\d[\s.-]*){9,}/,
    /\b\d{1,2}[.\/-]\d{1,2}[.\/-]\d{2,4}\b/,
    /\b(?:pacient|patient|rodné číslo|r\.č\.|pojištěn|pojišťovna|VZP|jméno|příjmení|adresa)\b/i
  ];
  return patterns.some(re => re.test(s));
}
function confirmBeforeSend(text, attachments, c) {
  const warnings = [];
  const filesText = (attachments || []).map(a => a.name || '').join(' ');
  const maybePII = detectPotentialPII(text + ' ' + filesText);
  const cost = estimateChatRequestCost(c, text, attachments);
  if (cost >= SECURITY.hardCostAboveUsd) {
    flash(`Запит заблоковано: оцінка ${formatCost(cost)} > ліміт ${formatCost(SECURITY.hardCostAboveUsd)}`, true);
    return false;
  }
  if (cost >= SECURITY.confirmCostAboveUsd) warnings.push(`💸 Орієнтовна ціна запиту: ${formatCost(cost)}.`);
  if (SECURITY.requireConfirmationForAttachments && attachments && attachments.length > 0) {
    warnings.push('📎 Є вкладення. Фото очищаються від EXIF/metadata, але PDF/Word/Excel/STL/назви файлів можуть містити ПІБ, rodné číslo, дату народження або інші персональні дані.');
  }
  if (SECURITY.requireConfirmationForPotentialPII && maybePII) {
    warnings.push('🛡️ Текст або назви файлів схожі на персональні/клінічні дані. Перед відправкою потрібно анонімізувати ПІБ, rodné číslo, номер страхівки, дату народження, телефон, email, адресу.');
  }
  if (warnings.length === 0) return true;
  return confirm(warnings.join('\n\n') + '\n\nПідтверджую, що дані анонімізовані, і хочу продовжити.');
}

async function wipeAllData() {
  localStorage.clear();
  if ('caches' in window) {
    const names = await caches.keys();
    await Promise.all(names.map(name => caches.delete(name)));
  }
  if ('serviceWorker' in navigator) {
    const regs = await navigator.serviceWorker.getRegistrations();
    await Promise.all(regs.map(reg => reg.unregister()));
  }
  location.reload();
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

  if (!confirmBeforeSend(text, state.pendingAttachments, c)) return;

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

  // v5.1: Auto-generate chat name after first successful exchange (only if still default)
  // Filter by isPrimary so Council mode (which has many hidden messages) also triggers correctly
  const hasDefault = /^(Чат з |Рада:)/i.test(c.name || '');
  const primaryAiMessages = (c.messages || []).filter(m =>
    m.role === 'assistant' && m.isPrimary && !m.loading && !m.error && m.content
  );
  if (hasDefault && primaryAiMessages.length === 1) {
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
  const memorySystem = buildMemoryPrompt(c, p.ai);
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
      const { text: reply, model: usedModel } = await CALLERS[p.ai](msgs, opts);
      finalText = reply;
      trackUsage(p.ai, usedModel || model.id, msgs, reply, c.id);
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
      error: true, content: t('error.noActiveAI'), isPrimary: true, time: Date.now()
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

  const results = await Promise.all(active.map(async p => {
    const model = MODELS[p.ai][p.level];
    // v4.5: Each AI gets its own history with prior turns
    const history = buildCouncilHistory(c, p.ai, text);
    const msgs = buildMessagesForAI(p.ai, history, text, attachments);
    // v5.0: Per-AI persona from template
    const memorySystem = buildMemoryPrompt(c, p.ai);
    const opts = {
      model: model.id,
      webSearch: c.webSearch && p.ai === 'claude',
      research: false,
      system: memorySystem || undefined
    };
    try {
      const { text: reply, model: usedModel } = await CALLERS[p.ai](msgs, opts);
      trackUsage(p.ai, usedModel || model.id, msgs, reply, c.id);
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
      loading: true, isPrimary: true, loadingLabel: modeName('synthesis') + '...',
      time: Date.now()
    });
    renderMessages();

    const synthPrompt = mode === 'synthesis' ? buildSynthesisPrompt(text, good) : buildVotePrompt(text, good);
    const synthesizerAI = state.keys.claude ? 'claude' : good[0].ai;
    const synthModel = MODELS[synthesizerAI][3];

    try {
      const synthMsgs = [{role:'user', content: synthPrompt}];
      const { text: reply, model: usedModel } = await CALLERS[synthesizerAI](synthMsgs, { model: synthModel.id });
      trackUsage(synthesizerAI, usedModel || synthModel.id, synthMsgs, reply, c.id);
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
        error: true, content: t('error.synthesisFailed', {error: err.message}), isPrimary: true, time: Date.now()
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
      content: t('error.synthesisSkippedSingle', {ai: AI_CONFIG[good[0].ai].fullName}),
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
        prompt = `Оригінальне питання:\n${text}\n\nТи раніше відповів:\n${allAnswers[p.ai][r-2]}\n\nІнші AI відповіли:\n\n${others}\n\nПроаналізуй їхні позиції, визнай де вони праві, збережи де ти правий. Give an updated, polished answer in the preferred response language.`;
      }

      // v4.5: In R1 pass conversation history; in R2+ the prompt already contains all prior round answers
      const history = r === 1 ? buildCouncilHistory(c, p.ai, text) : [];
      const msgs = buildMessagesForAI(p.ai, history, prompt, r === 1 ? attachments : []);
      // v5.0: Per-AI persona
      const memorySystem = buildMemoryPrompt(c, p.ai);
      const opts = { model: model.id, webSearch: c.webSearch && p.ai === 'claude', system: memorySystem || undefined };

      try {
        const { text: reply, model: usedModel } = await CALLERS[p.ai](msgs, opts);
        trackUsage(p.ai, usedModel || model.id, msgs, reply, c.id);
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
    loading: true, isPrimary: true, loadingLabel: t('chat.council') + '...',
    time: Date.now()
  });
  renderMessages();

  const finalAnswers = active.map(p => ({
    ai: p.ai,
    text: allAnswers[p.ai][allAnswers[p.ai].length - 1] || '(немає)',
    ok: !!allAnswers[p.ai][allAnswers[p.ai].length - 1],
    roundsAnswered: allAnswers[p.ai].filter(x => x).length
  })).filter(x => x.ok);

  if (finalAnswers.length === 0) {
    const idx = c.messages.findIndex(m => m.id === synthId);
    c.messages[idx] = {
      id: synthId, role: 'assistant', source: 'council-synth',
      error: true, content: 'Фінальний синтез неможливий: жоден AI не дав успішної відповіді в дебаті.',
      isPrimary: true, time: Date.now()
    };
    renderMessages();
    return;
  }

  // Check if any AI failed to complete all rounds
  const incompleteAI = active.filter(p => {
    const answers = allAnswers[p.ai] || [];
    return answers.filter(x => x).length < rounds;
  });
  const warningNote = incompleteAI.length > 0
    ? `\n\n⚠️ УВАГА: ${incompleteAI.length} з ${active.length} AI не завершили всі ${rounds} раунди (використано їхні останні успішні відповіді). Це може знизити якість синтезу.`
    : '';

  const aiIdList = finalAnswers.map(a => a.ai).join(', ');
  const synthPrompt = `${getLanguageInstruction()}

Після ${rounds} раундів дебату AI-моделей на питання "${text}", give a concise final conclusion in the preferred response language.${warningNote}

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
    const { text: reply, model: usedModel } = await CALLERS[synthesizerAI](synthMsgs, { model: synthModel.id });
    trackUsage(synthesizerAI, usedModel || synthModel.id, synthMsgs, reply, c.id);
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
    { label: 'Plan...', prompt: getLanguageInstruction() + '\nBefore answering: analyze the question and create a short research plan (3-5 points).' },
    { label: 'Research...', prompt: getLanguageInstruction() + '\nNow investigate each point in detail, use web search where needed, and find concrete facts and sources.' },
    { label: 'Synthesis...', prompt: getLanguageInstruction() + '\nBased on the research above, give a final structured answer with clear conclusions and practical recommendations.' }
  ];

  let context = messages;
  let lastReply = '';

  for (const it of iters) {
    const idx = c.messages.findIndex(m => m.id === loadingId);
    if (idx >= 0) c.messages[idx].loadingLabel = it.label;
    renderMessages();

    const iterMsgs = [...context];
    iterMsgs.push({ role: 'user', content: it.prompt });

    const { text: reply, model: usedModel } = await CALLERS[aiName](iterMsgs, opts);
    // v5.1: Track usage for each research iteration (was missing — caused undercount)
    trackUsage(aiName, usedModel || opts.model, iterMsgs, reply, c?.id);
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
  return `${getLanguageInstruction()}

Ти — голова ради AI. На питання користувача відповіли кілька AI-моделей. Проаналізуй їхні відповіді, знайди точки згоди та розбіжності, і сформулюй одне підсумкове рішення.

ПИТАННЯ:
${question}

ВІДПОВІДІ:

${formatted}

Answer in the preferred response language, structured as:
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
  return `${getLanguageInstruction()}

На питання відповіли кілька AI-моделей. Оціни якість кожної відповіді та обери переможця.

ПИТАННЯ:
${question}

ВІДПОВІДІ:

${formatted}

Use the preferred response language:
1. **Ранжування / Ranking** — від найкращої до найслабшої (1-2 речення оцінки кожної)
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
            ${t('settings.getKey')}
          </a>
          <a href="${cfg.billingUrl}" target="_blank" rel="noopener" class="api-link" style="--link-color: ${cfg.color};">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
            ${t('settings.billing')}
          </a>
        </div>
      </div>`;
  }).join('');

  // Load memory into UI
  document.getElementById('memoryProfile').value = state.memory.profile || '';
  document.getElementById('memoryFactsCount').textContent = (state.memory.facts || []).length;

  // v4.5: Render Czech context toggles
  const czechWrap = document.getElementById('czechBlocksContainer');
  if (czechWrap) {
    const enabled = state.memory.czechContextEnabled || {};
    czechWrap.innerHTML = Object.entries(CZECH_CONTEXT_BLOCKS).map(([key, block]) => `
      <div class="czech-block">
        <div class="czech-block-info">
          <div class="czech-block-name">${escapeHtml(czechBlockName(key, block))}</div>
          <div class="czech-block-desc">${escapeHtml(czechBlockDesc(key, block))}</div>
        </div>
        <div class="czech-toggle ${enabled[key] ? 'on' : ''}" data-czech-key="${key}"></div>
      </div>
    `).join('');
    czechWrap.querySelectorAll('.czech-toggle').forEach(tog => {
      tog.addEventListener('click', () => {
        const key = tog.dataset.czechKey;
        state.memory.czechContextEnabled[key] = !state.memory.czechContextEnabled[key];
        tog.classList.toggle('on', state.memory.czechContextEnabled[key]);
        saveMemory();
      });
    });
  }

  // v4.5: Cases count
  const casesCountEl = document.getElementById('casesCount');
  if (casesCountEl) casesCountEl.textContent = (state.cases || []).length;

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
  flash(t('flash.settingsSaved'));
}

// ==================== MEMORY FACTS ====================
function openMemoryFacts() {
  document.getElementById('newFactText').value = '';
  renderFactsList();
  openOverlay('memoryFactsOverlay');
}

// ==================== CASES (v4.5) ====================
function openCases() {
  document.getElementById('newCaseTitle').value = '';
  document.getElementById('newCaseTags').value = '';
  document.getElementById('newCaseDescription').value = '';
  renderCasesList();
  openOverlay('casesOverlay');
}

function renderCasesList() {
  const wrap = document.getElementById('casesList');
  if (!wrap) return;
  const cases = state.cases || [];
  if (cases.length === 0) {
    wrap.innerHTML = `<div class="fact-empty">${t('cases.empty')}</div>`;
    return;
  }
  wrap.innerHTML = cases.slice().reverse().map(cs => `
    <div class="fact-item" style="flex-direction: column; align-items: flex-start;">
      <div style="display: flex; width: 100%; align-items: flex-start; gap: 8px;">
        <div style="flex: 1;">
          <div class="fact-text" style="font-weight: 600;">${escapeHtml(cs.title || 'Без назви')}</div>
          ${cs.tags && cs.tags.length ? `<div style="font-size: 11px; color: var(--text-dim); margin-top: 3px;">${cs.tags.map(t => `#${escapeHtml(t)}`).join(' ')}</div>` : ''}
        </div>
        <button class="fact-delete" data-case-id="${cs.id}" title="${escapeHtml(t('memoryFacts.deleteTitle'))}">✕</button>
      </div>
      ${cs.description ? `<div class="fact-text" style="font-size: 12px; color: var(--text-dim); margin-top: 6px; white-space: pre-wrap;">${escapeHtml(cs.description.slice(0, 200))}${cs.description.length > 200 ? '...' : ''}</div>` : ''}
      <div style="font-size: 10px; color: var(--text-mute); margin-top: 4px; font-family: var(--mono);">${new Date(cs.createdAt).toLocaleDateString(locale())}</div>
    </div>
  `).join('');
  wrap.querySelectorAll('.fact-delete').forEach(btn => {
    btn.addEventListener('click', () => deleteCase(btn.dataset.caseId));
  });
}

function addCase() {
  const title = document.getElementById('newCaseTitle').value.trim();
  const tagsRaw = document.getElementById('newCaseTags').value.trim();
  const description = document.getElementById('newCaseDescription').value.trim();
  if (!title && !description) {
    flash(t('flash.addCaseRequired'), true);
    return;
  }
  // Basic PII check — warn if we detect obvious identifiers
  const piiPattern = /\b\d{6,}\b|\b[А-ЯЁІЇЄҐ][а-яёіїєґ']+\s+[А-ЯЁІЇЄҐ][а-яёіїєґ']+(?:ич|ович|евич|івна|овна|евна)\b/;
  if (piiPattern.test(description) || piiPattern.test(title)) {
    if (!confirm(t('confirm.piiCase'))) return;
  }
  const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [];
  const cs = {
    id: uid(),
    title: title || t('chat.noTitle'),
    tags,
    description,
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
  state.cases = state.cases || [];
  state.cases.push(cs);
  saveCases();
  document.getElementById('newCaseTitle').value = '';
  document.getElementById('newCaseTags').value = '';
  document.getElementById('newCaseDescription').value = '';
  renderCasesList();
  flash(t('flash.caseAdded'));
}

function deleteCase(id) {
  if (!confirm(t('confirm.deleteCase'))) return;
  state.cases = (state.cases || []).filter(c => c.id !== id);
  saveCases();
  renderCasesList();
}

// ==================== CHANGELOG (v5.0) ====================
function openChangelog() {
  const el = document.getElementById('changelogContent');
  if (!el) return;
  el.innerHTML = CHANGELOG.map((entry, idx) => {
    const isCurrent = entry.version === APP_VERSION;
    return `
      <div class="changelog-entry ${isCurrent ? 'current' : ''}">
        <div class="changelog-version-row">
          <span class="changelog-version">v${escapeHtml(entry.version)}</span>
          ${isCurrent ? `<span class="changelog-current-badge">${t('changelog.current')}</span>` : ''}
          <span class="changelog-date">${escapeHtml(entry.date)}</span>
        </div>
        <ul class="changelog-highlights">
          ${(entry.highlights || []).map(h => `<li>${escapeHtml(h)}</li>`).join('')}
        </ul>
      </div>
    `;
  }).join('');
  openOverlay('changelogOverlay');
}


function renderFactsList() {
  const wrap = document.getElementById('memoryFactsList');
  const facts = state.memory.facts || [];
  if (facts.length === 0) {
    wrap.innerHTML = `<div class="fact-empty">${t('memoryFacts.empty')}</div>`;
    return;
  }
  wrap.innerHTML = facts.map(f => `
    <div class="fact-item">
      <div class="fact-text">${escapeHtml(f.text)}</div>
      <button class="fact-delete" data-fact-id="${f.id}" title="${escapeHtml(t('memoryFacts.deleteTitle'))}">✕</button>
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
    flash(t('flash.addFactText'), true);
    return;
  }
  if (text.length > 500) {
    flash(t('flash.factTooLong'), true);
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
  flash(t('flash.factSaved'));
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
  flash(t('flash.memorySaved'));
}

function copyMessageText(text) {
  if (!text) return;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(
      () => flash(t('flash.copied')),
      () => flash(t('flash.copyFailed'), true)
    );
  } else {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); flash(t('flash.copied')); }
    catch { flash(t('flash.copyFailed'), true); }
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

  const mode = c.participants.length > 1 && c.mode ? modeName(c.mode) : t('chat.title');
  const cost = getSessionCost(chatId);
  const created = new Date(c.createdAt).toLocaleString(locale());

  let md = `# ${c.name || 'Без назви'}\n\n`;
  md += `**Учасники:** ${participants}\n`;
  md += `**Режим:** ${mode}\n`;
  md += `**Створено:** ${created}\n`;
  if (cost > 0) md += `**Вартість сесії:** ${formatCost(cost)}\n`;
  md += `\n---\n\n`;

  (c.messages || []).forEach(m => {
    if (m.loading) return;
    const time = m.time ? new Date(m.time).toLocaleString(locale()) : '';
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

  md += `\n*Експортовано з AI Council · ${new Date().toLocaleString(locale())}*\n`;

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
  flash(t('flash.exported'));
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
  const prompt = `${getLanguageInstruction()}

Згенеруй дуже коротку назву чату (3-5 слів, українською, без лапок, без емодзі, без крапки в кінці) на основі першого питання і відповіді:

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
      <div style="font-family:var(--mono);font-size:11px;color:${LEVEL_COLORS[p.level]};">${m.name} · ${levelName(p.level)}</div></div>
    </div>`;
  }).join('');

  const modeBlock = c.participants.length > 1 ? `
    <div class="info-block">
      <div class="info-label">${t('chatInfo.mode')}</div>
      <div class="info-value">${modeName(c.mode)}${c.mode === 'debate' ? ` · ${c.debateRounds}` : ''}</div>
    </div>` : '';

  const extras = (c.webSearch || c.research) ? `
    <div class="info-block">
      <div class="info-label">${t('chatInfo.extras')}</div>
      <div class="info-value">${c.webSearch ? '🌐 Веб-пошук · ' : ''}${c.research ? '🔬 Research' : ''}</div>
    </div>` : '';

  el.innerHTML = `
    <div class="info-block">
      <div class="info-label">${t('chatInfo.name')}</div>
      <div class="info-value">${escapeHtml(c.name)}</div>
    </div>
    <div class="info-block">
      <div class="info-label">${t('chatInfo.participants')}</div>
      ${participantsHtml}
    </div>
    ${modeBlock}
    ${extras}
    <div class="info-block">
      <div class="info-label">${t('chatInfo.created')}</div>
      <div class="info-value">${new Date(c.createdAt).toLocaleString(locale())}</div>
    </div>
    <div class="info-block">
      <div class="info-label">${t('chatInfo.messages')}</div>
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
  applyTranslations();
  renderLanguagePicker();

  // Set version in UI (settings footer + header pill + author line)
  const vFooter = document.getElementById('appVersion');
  if (vFooter) vFooter.textContent = `AI Council · v${APP_VERSION} · ${APP_VERSION_DATE}`;
  const vPill = document.getElementById('headerVersion');
  if (vPill) vPill.textContent = `v${APP_VERSION}`;
  const vAuthor = document.getElementById('headerAuthor');
  if (vAuthor) vAuthor.textContent = `by ${APP_AUTHOR}`;

  // List screen
  document.getElementById('newChatBtn').addEventListener('click', () => goScreen('new'));
  document.getElementById('settingsBtn').addEventListener('click', () => { openSettings(); renderLanguagePicker(); applyTranslations(); });

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
    if (confirm(t('confirm.clearHistory'))) {
      const c = state.chats[state.activeChatId];
      if (c) { c.messages = []; saveChats(); renderMessages(); }
      closeOverlay('chatMenuOverlay');
    }
  });
  document.getElementById('menuDeleteChat').addEventListener('click', () => {
    if (confirm(t('confirm.deleteChatFull'))) {
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
    if (confirm('Видалити ВСЕ: ключі, чати, історію, пам\'ять, кеш і Service Worker?')) {
      wipeAllData().catch(() => { localStorage.clear(); location.reload(); });
    }
  });

  // Memory facts
  document.getElementById('openMemoryFactsBtn').addEventListener('click', openMemoryFacts);
  document.getElementById('addFactBtn').addEventListener('click', addFact);

  // v4.5: Cases
  const openCasesBtn = document.getElementById('openCasesBtn');
  if (openCasesBtn) openCasesBtn.addEventListener('click', openCases);
  const addCaseBtn = document.getElementById('addCaseBtn');
  if (addCaseBtn) addCaseBtn.addEventListener('click', addCase);

  // v5.0: Changelog
  const openChangelogBtn = document.getElementById('openChangelogBtn');
  if (openChangelogBtn) openChangelogBtn.addEventListener('click', openChangelog);

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
