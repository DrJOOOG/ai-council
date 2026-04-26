// ================================================================
// AI Council v6.7.2-beta — Bugfix 1-19: UI state, Perplexity, OPG chart safety, Wake Lock
// ================================================================

const APP_VERSION = '6.7.2-beta';
const APP_VERSION_DATE = '2026-04-26';
const APP_AUTHOR = 'Dr. Parkhoma';

// Changelog — newest first
const CHANGELOG = [
  {
    version: '6.7.2-beta',
    date: '2026-04-26',
    highlights: [
      '🧩 Selectable cards/templates можна віджати повторним натисканням',
      '🟣 Header dot круглий, quick templates компактні + info',
      '🌙 Додано світлу/темну/системну тему в меню мови',
      '🔘 AI toggles, mode/routing cards і Perplexity selector синхронізовано',
      '🫧 Виправлено loading bubble, swipe snap-back, chat auto-scroll',
      '📄 OPG: В карту заблоковано для чернеток без фінального синтезу',
      '🔒 Wake Lock для довгих задач: OPG/Council/Debate/Research'
    ]
  },
  {
    version: '6.7.1-beta',
    date: '2026-04-26',
    highlights: [
      '🧯 Hotfix: Perplexity актуальні model IDs + fallback на Sonar при deprecated/invalid model',
      '📍 Chat scroll тепер веде до початку нової AI-відповіді, а не в її кінець',
      '🦷 OPG safety: якщо фінальний синтез Ради впав — показується явне попередження',
      '🎛️ Покращено зрозумілість Smart Routing / Clinical Roles / web-доступу AI',
      '⚙️ Settings: розділено Backup і Storage, OFF-toggle видно, прибрано версії з Dangerous zone'
    ]
  },
  {
    version: '6.7.0-beta',
    date: '2026-04-26',
    highlights: [
      '✅ Закрито поточний план: Settings Hub підменю, OPG table UI, клінічні ролі, В карту / Для асистента',
      '🦷 OPG: FDI-аудитор як обовʼязкова роль + doctor correction freeze у промптах',
      '📄 Smart actions: Chart note, Assistant handoff, Evidence/Perplexity shortcut',
      '⚙️ Settings Hub тепер працює як справжнє меню з підрозділами, а не один довгий лист',
      '🧩 Додано Clinical Roles UI з рекомендованими пресетами для шаблонів',
      '🛡️ Посилено markdown/HTML safety та клінічні попередження'
    ]
  },
  {
    version: '6.6.0-beta',
    date: '2026-04-26',
    highlights: [
      '🛡️ Controlled build: безпека + ціна + стабільність без паузи в розробці',
      '💸 Smart Model Routing v1: Economy / Balanced / Maximum presets',
      '🧠 Synthesizer override: окремий вибір AI і рівня для фінального синтезу',
      '🔁 Session Recovery v1: pending-запит зберігається перед довгим AI-запитом',
      '🧼 Додатковий safety-pass для Markdown renderer',
      '⚕️ Multi-provider PII warning для режиму Ради',
      '✨ Animated in-app splash + splash/manifest polish',
      '⚙️ Settings Hub redesign як підменю-картки'
    ]
  },
  {
    version: '6.5.2-beta',
    date: '2026-04-26',
    highlights: [
      '🌐 Перший запуск автоматично бере мову інтерфейсу з мови браузера/телефону',
      '🦷 Очищено header-logo: більший tooth-mark без зайвої білої плитки',
      '📋 Версія в header стала кнопкою — відкриває журнал версій'
    ]
  },
  {
    version: '6.5.1-beta',
    date: '2026-04-26',
    highlights: [
      '🛡️ Obsidian export: YAML-safe frontmatter + URLSearchParams для Advanced URI',
      '🔊 TTS stability: chunked speech queue з retained utterances для Android/Chrome',
      '💾 Backup/Obsidian PII warnings перед експортом',
      '📊 Storage monitor: localStorage estimate, projected save warning, origin storage estimate'
    ]
  },
  {
    version: '6.5.0-beta',
    date: '2026-04-26',
    highlights: [
      '🦷 Нове ProfiDentist AI-tooth лого та PWA icons',
      '🔊 Browser TTS: прослуховування відповідей голосом телефону',
      '🧾 TL;DR перейменовано на Підсумок / Shrnutí / Summary',
      '📦 Ліміт файлів збільшено до 25 MB з попередженням для великих файлів',
      '📓 Експорт повідомлень і чатів в Obsidian через Advanced URI',
      '💾 Початковий Backup / Restore без API-ключів'
    ]
  },
  {
    version: '6.1.0-beta',
    date: '2026-04-25',
    highlights: [
      '🎨 ProfiDentist-inspired UI refresh: фіолетовий/білий/бетонний стиль',
      '🧱 Додано concrete-like фон, світліші картки, сучасніші кнопки та менше неону',
      '🧠 Висновок Ради та AI-повідомлення стали читабельнішими як клінічні картки'
    ]
  },
  {
    version: '6.0.9-beta',
    date: '2026-04-25',
    highlights: [
      '🧭 Уточнено OPG default orientation за clockwise FDI-мапою',
      '🦷 FDI-мапа за замовчуванням: UL image 18→11, UR image 21→28, LR image 38→31, LL image 41→48',
      '👨‍⚕️ Якщо користувач/лікар задав іншу орієнтацію або виправив номер — це має пріоритет'
    ]
  },
  {
    version: '6.0.7-beta',
    date: '2026-04-25',
    highlights: [
      '🧭 OPG orientation guard: default FDI-мапа + R/L/клінічні корекції мають пріоритет',
      '🛡️ Safe-chart filter посилено: знахідки однієї AI не потрапляють у карту як факт',
      '👨‍⚕️ Корекції лікаря у чаті мають пріоритет над оцінками моделей',
      '🔬 Gemini працює як visual scout, не як фінальний автор опису'
    ]
  },
  {
    version: '6.0.6-beta',
    date: '2026-04-25',
    highlights: [
      '🦷☢️ Заміна OPG-іконки: зуб із знаком радіації замість ребер',
      '📝 OPG-опис тепер просить формат по FDI-зубах: [18] — знахідка / [15] — підозра до перевірки',
      '🛡️ Фінальний синтез Ради у OPG-режимі отримує сам знімок і застосовує consensus-filter',
      '🌐 Виправлено змішування мов: підсумки Ради мають відповідати вибраній мові інтерфейсу'
    ]
  },
  {
    version: '6.0.5-beta',
    date: '2026-04-25',
    highlights: [
      '🩻 Додано one-tap OPG workflow: кнопка OPG в чаті → вибір знімка → автоматичний опис без ручного prompt',
      '🤖 Автопромпт для рентген-опису активується у OPG-шаблоні, якщо відправити знімок без тексту'
    ]
  },
  {
    version: '6.0.4-beta',
    date: '2026-04-25',
    highlights: [
      '🩻 Додано шаблон “OPG / рентген-опис” для зубних знімків',
      '🦷 Prompt для опису по FDI-зубах: видимо / підозра / не оцінюється',
      '🛡️ Антигалюцинаційні правила: не вигадувати карієс/періодонтит, позначати що треба перевірити клінічно'
    ]
  },
  {
    version: '6.0.3-beta',
    date: '2026-04-25',
    highlights: [
      '🧯 Людські пояснення API-помилок замість сирого тексту',
      '🔎 Клік по помилці відкриває деталі: HTTP статус, код, тип, модель, raw response, documentation URL',
      '🧼 API-ключі санітизуються у деталях помилок'
    ]
  },
  {
    version: '6.0.2-beta',
    date: '2026-04-25',
    highlights: [
      '📎 Виправлено Android file picker: окремо Камера / Фото / Файли',
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
  radiology: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M8 3.5 C6 3.5 5 5 5 7 C5 9 5.5 10.5 6 12.5 L7 17 C7.3 18.5 8 19 9 19 C9.8 19 10.5 18.5 10.8 17 L11.5 14 C11.7 13 12.3 13 12.5 14 L13.2 17 C13.5 18.5 14.2 19 15 19 C16 19 16.7 18.5 17 17 L18 12.5 C18.5 10.5 19 9 19 7 C19 5 18 3.5 16 3.5 C14.5 3.5 13 4 12 4 C11 4 9.5 3.5 8 3.5 Z"/>
    <circle cx="12" cy="10.4" r="1.1" fill="currentColor" stroke="none"/>
    <path d="M12 7.3 A3.1 3.1 0 0 1 14.7 9.0 L13.1 9.7 A1.4 1.4 0 0 0 12 9.0 Z" fill="currentColor" stroke="none" opacity="0.95"/>
    <path d="M14.7 11.8 A3.1 3.1 0 0 1 12.1 13.5 L12.0 11.8 A1.4 1.4 0 0 0 13.1 11.1 Z" fill="currentColor" stroke="none" opacity="0.95"/>
    <path d="M9.3 11.8 A3.1 3.1 0 0 1 9.3 9.0 L10.9 9.7 A1.4 1.4 0 0 0 10.9 11.1 Z" fill="currentColor" stroke="none" opacity="0.95"/>
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
    { id: 'sonar',                 name: 'Sonar',               short: 'SONAR', inPrice: 1.00, outPrice: 1.00 },
    { id: 'sonar-pro',             name: 'Sonar Pro',           short: 'PRO',   inPrice: 3.00, outPrice: 15.00 },
    { id: 'sonar-reasoning-pro',   name: 'Sonar Reasoning Pro', short: 'R-PRO', inPrice: 2.00, outPrice: 8.00 },
    { id: 'sonar-deep-research',   name: 'Sonar Deep Research', short: 'DEEP',  inPrice: 2.00, outPrice: 8.00 }
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
  maxFileBytes: 25 * 1024 * 1024,
  largeFileWarningBytes: 15 * 1024 * 1024,
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

const ROUTING_PRESETS = {
  economy: { label: 'Економний', icon: '⚡', defaultLevel: 0, synthLevel: 1, costWarn: 0.05, desc: 'Дешевше для щоденних питань: короткі відповіді, записи в карту, підсумки.' },
  balanced: { label: 'Збалансований', icon: '⚖️', defaultLevel: 1, synthLevel: 1, costWarn: 0.10, desc: 'Стандартний режим для більшості клінічних задач: баланс ціни, швидкості та якості.' },
  maximum: { label: 'Максимальний', icon: '🧠', defaultLevel: 3, synthLevel: 3, costWarn: 0.35, desc: 'Найсильніші моделі для складних, ризикових або юридично важливих кейсів.' }
};

// ==================== CLINICAL ROLES ====================
const CLINICAL_ROLES = {
  implant_surgeon: { icon: '🔩', label: { uk: 'Хірург-імплантолог', cs: 'Implantolog-chirurg', en: 'Implant surgeon' }, prompt: 'Ти — досвідчений хірург-імплантолог. Мислиш через CBCT/анатомію/ризики/протезне планування. Не пропонуй агресивні втручання без показань і альтернатив.' },
  conservative_dentist: { icon: '🦷', label: { uk: 'Терапевт-консерватор', cs: 'Konzervativní stomatolog', en: 'Conservative dentist' }, prompt: 'Ти — консервативний стоматолог. Твоя роль — шукати найменш інвазивне, біологічно обґрунтоване рішення та вказувати, коли зуб варто зберігати.' },
  evidence_reviewer: { icon: '🔬', label: { uk: 'Огляд доказів', cs: 'Kontrola důkazů', en: 'Evidence reviewer' }, prompt: 'Ти — evidence reviewer. Відділяй доказові твердження від думок, проси перевіряти джерела, не вигадуй PubMed-цитати. Якщо джерело невідоме — скажи прямо.' },
  skeptic_auditor: { icon: '🛡️', label: { uk: 'Скептик / ризик-аудитор', cs: 'Skeptik / auditor rizik', en: 'Skeptic / risk auditor' }, prompt: 'Ти — скептик і ризик-аудитор. Шукай слабкі місця плану, помилки нумерації, приховані ризики, юридично небезпечні формулювання, надмірну впевненість.' },
  chart_synthesizer: { icon: '📄', label: { uk: 'Синтезатор для карти', cs: 'Zápis do dokumentace', en: 'Chart-note synthesizer' }, prompt: 'Ти — синтезатор запису в медичну документацію. Формулюй коротко, юридично обережно, без вигадок, без неперевірених діагнозів.' },
  fdi_auditor: { icon: '🧭', label: { uk: 'FDI-аудитор OPG', cs: 'FDI auditor OPG', en: 'FDI OPG auditor' }, prompt: 'Ти — FDI/орієнтаційний аудитор для OPG. Твоя головна задача — перевірити нумерацію зубів, сторону на знімку vs сторону пацієнта, позиції імплантів, ретеновані/відсутні зуби. Корекція лікаря має абсолютний пріоритет.' }
};
const ROLE_PRESETS = {
  general: ['conservative_dentist', 'skeptic_auditor', 'chart_synthesizer'],
  implants: ['implant_surgeon', 'conservative_dentist', 'skeptic_auditor', 'evidence_reviewer', 'chart_synthesizer'],
  endo: ['conservative_dentist', 'evidence_reviewer', 'skeptic_auditor', 'chart_synthesizer'],
  perio: ['conservative_dentist', 'evidence_reviewer', 'skeptic_auditor', 'chart_synthesizer'],
  urgent: ['conservative_dentist', 'skeptic_auditor', 'chart_synthesizer'],
  'diff-pain': ['conservative_dentist', 'skeptic_auditor', 'evidence_reviewer'],
  'opg-report': ['fdi_auditor', 'skeptic_auditor', 'chart_synthesizer']
};
function roleLabel(roleId) {
  const role = CLINICAL_ROLES[roleId];
  if (!role) return roleId;
  return role.label?.[getLang?.() || 'uk'] || role.label?.uk || roleId;
}


// ==================== STATE ====================
const STORAGE = {
  keys: 'aic3_keys',
  chats: 'aic3_chats',
  settings: 'aic3_settings',
  draft: 'aic3_new_draft',
  memory: 'aic3_memory',
  templates: 'aic4_templates',    // v4.0
  cases: 'aic4_cases',            // v4.0
  stats: 'aic4_stats',             // v4.0
  pending: 'aic5_pending_request'     // v6.6
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
  },
  {
    id: 'opg-report',
    icon: LOGOS.radiology,
    name: 'OPG / рентген-опис',
    description: 'Структурований опис OPG/зубного рентгену для карти пацієнта без вигадувань',
    systemAddition: `Користувач потребує радіологічний опис стоматологічного знімка (OPG / панорамний знімок / intraoral PA / bitewing) для медичної карти пацієнта. Працюй як асистент лікаря-стоматолога, не як самостійний діагност.

ЖОРСТКІ ПРАВИЛА БЕЗПЕКИ:
- Описуй тільки те, що реально видно на знімку.
- Не вигадуй карієс, періодонтит, тріщини, резорбції, переломи або стан каналів, якщо цього не видно.
- Якщо якість/проекція/накладання не дозволяють оцінити — прямо пиши: “не оцінюється на цьому знімку” або “потрібна клінічна перевірка / BW / PA / CBCT”.
- Для OPG не став остаточний діагноз карієсу на апроксимальних поверхнях без підтвердження bitewing/клініки; використовуй “підозра” тільки якщо ознака видима.
- Розділяй: “видимо”, “підозра”, “потребує перевірки”.
- Не пиши зайвих загальних фраз. Формат має бути придатний для копіювання в карту пацієнта.

ОБОВʼЯЗКОВА СТРУКТУРА ВІДПОВІДІ:
1. Тип знімка і якість: OPG/PA/BW, діагностична якість, обмеження.
2. Загальний огляд: відсутні зуби, ретиновані/імпактовані зуби, імпланти, коронки, ендо, великі реставрації, генералізована кісткова втрата.
3. Опис по зубах у FDI: 18 → 11, 21 → 28, 38 → 31, 41 → 48. Для кожного зуба коротко: статус / карієс-підозра / реставрація / ендо / periapical finding / periodontal bone level / інше / “без явних патологічних змін на цьому знімку”.
4. Патологічні або сумнівні ділянки окремим списком: зуб/ділянка → що видно → рівень впевненості → що перевірити.
5. Готовий короткий текст для карти пацієнта.
6. Список “перевірити лікарю”: клінічний огляд, перкусія, vitality test, periodontal probing, BW/PA/CBCT.`,
    suggestedAI: ['claude', 'openai', 'gemini'],
    suggestedLevel: 3,
    autoPromptType: 'radiology',
    personas: {
      claude: 'Ти — досвідчений стоматолог-рентгенолог і клінічний аудитор. Даєш структурований опис для медичної карти, обережно формулюєш висновки і чітко вказуєш обмеження OPG.',
      openai: 'Ти — критичний ревʼюер рентген-опису. Не допускай галюцинацій і помилок сторони/FDI. Якщо R/L або нумерація неочевидні — не фіксуй номер зуба як факт. Розділяй “точно видно”, “підозра”, “не можна оцінити”, “потребує перевірки лікарем”.',
      gemini: 'Ти — visual scout, не фінальний автор опису. Давай тільки короткі видимі підказки з confidence high/medium/low. Використовуй default OPG-орієнтацію, якщо користувач не вказав інше; не фіксуй FDI як факт при сумніві або конфлікті. Не пиши “норма” по кожному зубу, не вигадуй ендо/відсутні зуби/кальцифікати.',
      perplexity: 'Ти — evidence checker. Якщо тебе використовують у цьому шаблоні, не аналізуй зображення напряму, а нагадуй про обмеження OPG, показання до BW/PA/CBCT і стандарти документування.'
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
  pendingAutoSendMode: null,
  showFullLog: false,
  sendInProgress: false,
  settings: { language: null, appearance: 'system' },
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
  tts: { speaking: false, paused: false, msgId: null, chunkIndex: 0, chunkTotal: 0 },
  storageWarningShown: false,
  scrollTargetMsgId: null,
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
    state.settings = {
      language: ['uk','cs','en'].includes(appSettings.language) ? appSettings.language : detectDefaultLanguage(),
      appearance: ['light','dark','system'].includes(appSettings.appearance) ? appSettings.appearance : 'system',
      obsidian: {
        enabled: !!appSettings.obsidian?.enabled,
        vault: appSettings.obsidian?.vault || '',
        folder: appSettings.obsidian?.folder || 'AI Council'
      },
      tts: {
        enabled: appSettings.tts?.enabled !== false
      }
    };
    const mem = JSON.parse(localStorage.getItem(STORAGE.memory) || '{}');
    state.memory.profile = mem.profile || '';
    state.memory.facts = mem.facts || [];
    state.memory.czechContextEnabled = mem.czechContextEnabled || {};
    const templates = JSON.parse(localStorage.getItem(STORAGE.templates) || 'null');
    state.templates = templates || [...DEFAULT_TEMPLATES];
    // v6.0.4: merge newly shipped default templates into older localStorage without overwriting user templates
    for (const def of DEFAULT_TEMPLATES) {
      if (!state.templates.some(t => t.id === def.id)) state.templates.push(def);
    }
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
    warnIfProjectedStorageLarge(STORAGE.chats, data);
    localStorage.setItem(STORAGE.chats, data);
    updateStorageIndicator();
  } catch (e) {
    flash(t('flash.storageFull'), true);
  }
}

// ==================== UTILS ====================
const SUPPORTED_LANGS = ['uk', 'cs', 'en'];
const HTML_LANG = { uk: 'uk', cs: 'cs-CZ', en: 'en' };
const LOCALES = { uk: 'uk-UA', cs: 'cs-CZ', en: 'en-US' };

function detectDefaultLanguage() {
  const langs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'en'];
  for (const raw of langs) {
    const lang = String(raw || '').toLowerCase();
    if (lang.startsWith('uk')) return 'uk';
    if (lang.startsWith('cs') || lang.startsWith('cz')) return 'cs';
    if (lang.startsWith('en')) return 'en';
  }
  return 'en';
}

function getLang() {
  const lang = state.settings?.language || detectDefaultLanguage();
  return SUPPORTED_LANGS.includes(lang) ? lang : 'en';
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

function bytesToMB(bytes) {
  return bytes / (1024 * 1024);
}

function estimateLocalStorageBytes() {
  let total = 0;
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) || '';
      const value = localStorage.getItem(key) || '';
      total += (key.length + value.length) * 2;
    }
  } catch (e) {
    console.warn('localStorage estimate failed:', e);
  }
  return total;
}

function estimateLocalStorageBytesAfterSet(targetKey, targetValue) {
  let total = 0;
  const target = String(targetKey || '');
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) || '';
      if (key === target) continue;
      const value = localStorage.getItem(key) || '';
      total += (key.length + value.length) * 2;
    }
  } catch (e) {
    console.warn('projected localStorage estimate failed:', e);
  }
  total += (target.length + String(targetValue || '').length) * 2;
  return total;
}

function getLocalStorageHealth(bytes = estimateLocalStorageBytes()) {
  const mb = bytesToMB(bytes);
  let level = 'ok';
  if (mb >= 3.5) level = 'warning';
  if (mb >= 4.3) level = 'danger';
  return { bytes, mb, level };
}

async function getOriginStorageEstimate() {
  if (!navigator.storage || !navigator.storage.estimate) return null;
  try {
    const estimate = await navigator.storage.estimate();
    const usage = estimate.usage || 0;
    const quota = estimate.quota || 0;
    return {
      usage,
      quota,
      usageMB: bytesToMB(usage),
      quotaMB: bytesToMB(quota),
      percent: quota ? Math.round((usage / quota) * 100) : null
    };
  } catch (e) {
    console.warn('origin storage estimate failed:', e);
    return null;
  }
}

async function updateStorageIndicator() {
  const box = document.getElementById('storageStatusBox');
  if (!box) return;

  const local = getLocalStorageHealth();
  const origin = await getOriginStorageEstimate();
  const statusKey = local.level === 'danger' ? 'settings.storage.danger' : (local.level === 'warning' ? 'settings.storage.warning' : 'settings.storage.ok');

  let originText = t('settings.storage.originUnavailable');
  if (origin) {
    originText = `${origin.usageMB.toFixed(1)} MB / ${origin.quotaMB.toFixed(0)} MB${origin.percent !== null ? ` (${origin.percent}%)` : ''}`;
  }

  box.className = `storage-status-card ${local.level}`;
  box.innerHTML = `
    <div class="storage-status-row">
      <span>${escapeHtml(t('settings.storage.local'))}</span>
      <strong>${local.mb.toFixed(2)} MB / ~5 MB</strong>
    </div>
    <div class="storage-status-row">
      <span>${escapeHtml(t('settings.storage.origin'))}</span>
      <strong>${escapeHtml(originText)}</strong>
    </div>
    <div class="storage-status-note ${local.level}">${escapeHtml(t(statusKey))}</div>
  `;
}

function warnIfProjectedStorageLarge(targetKey, targetValue) {
  const projected = getLocalStorageHealth(estimateLocalStorageBytesAfterSet(targetKey, targetValue));
  if (projected.level === 'danger') {
    flash(t('flash.storageDanger', { mb: projected.mb.toFixed(2) }), true);
  } else if (projected.level === 'warning' && !state.storageWarningShown) {
    state.storageWarningShown = true;
    flash(t('flash.storageWarning', { mb: projected.mb.toFixed(2) }), true);
  }
  return projected;
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

function applyAppearance() {
  const mode = state.settings?.appearance || 'system';
  document.documentElement.dataset.theme = mode;
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.body.classList.toggle('theme-dark', mode === 'dark' || (mode === 'system' && prefersDark));
}

function renderAppearancePicker() {
  document.querySelectorAll('[data-theme-option]').forEach(btn => {
    const mode = btn.dataset.themeOption;
    btn.classList.toggle('active', (state.settings?.appearance || 'system') === mode);
    btn.onclick = () => {
      if (!['light','dark','system'].includes(mode)) return;
      state.settings.appearance = mode;
      saveSettingsState();
      applyAppearance();
      renderAppearancePicker();
      flash('Вигляд інтерфейсу змінено');
    };
  });
}

function renderLanguagePicker() {
  renderAppearancePicker();
  document.querySelectorAll('[data-lang-option]').forEach(btn => {
    const lang = btn.dataset.langOption;
    btn.classList.toggle('active', lang === getLang());
    btn.onclick = () => {
      if (!SUPPORTED_LANGS.includes(lang)) return;
      state.settings.language = lang;
      saveSettingsState();
      applyTranslations();
      applyAppearance();
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
function sanitizeRenderedHtml(html) {
  // Defense-in-depth: renderMd escapes source text first, then creates a small allowlisted HTML subset.
  // This pass removes any accidental dangerous nodes/attributes if future code changes add raw HTML.
  const template = document.createElement('template');
  template.innerHTML = String(html || '');
  const allowedTags = new Set(['P','BR','STRONG','EM','CODE','PRE','H1','H2','H3','UL','OL','LI','A','DIV','SPAN']);
  const allowedClasses = new Set(['finding-line','finding-red','finding-yellow','finding-neutral']);
  const walk = document.createTreeWalker(template.content, NodeFilter.SHOW_ELEMENT);
  const toRemove = [];
  while (walk.nextNode()) {
    const el = walk.currentNode;
    if (!allowedTags.has(el.tagName)) { toRemove.push(el); continue; }
    [...el.attributes].forEach(attr => {
      const name = attr.name.toLowerCase();
      const val = attr.value || '';
      if (name.startsWith('on') || name === 'style') el.removeAttribute(attr.name);
      else if (el.tagName === 'A' && name === 'href') {
        if (!/^https?:\/\//i.test(val)) el.removeAttribute(attr.name);
      } else if (el.tagName === 'A' && ['target','rel'].includes(name)) {
        // allowed
      } else if (name === 'class') {
        const safe = val.split(/\s+/).filter(c => allowedClasses.has(c)).join(' ');
        if (safe) el.setAttribute('class', safe); else el.removeAttribute('class');
      } else {
        el.removeAttribute(attr.name);
      }
    });
  }
  toRemove.forEach(el => el.replaceWith(document.createTextNode(el.textContent || '')));
  return template.innerHTML;
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
  s = s.replace(/^🔴\s*(.+)$/gm, '<div class="finding-line finding-red">🔴 $1</div>');
  s = s.replace(/^🟡\s*(.+)$/gm, '<div class="finding-line finding-yellow">🟡 $1</div>');
  s = s.replace(/^⚪\s*(.+)$/gm, '<div class="finding-line finding-neutral">⚪ $1</div>');
  // [text](url) markdown links — only https/http, only if url doesn't contain dangerous chars
  s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s<>"')]+)\)/g, (_, t, u) =>
    `<a href="${u}" target="_blank" rel="noopener noreferrer">${t}</a>`);
  // Raw autolinks (http(s)://...)
  s = s.replace(/(^|[\s(])(https?:\/\/[^\s<>"')]+)/g, (_, pre, u) =>
    `${pre}<a href="${u}" target="_blank" rel="noopener noreferrer">${u}</a>`);
  s = s.replace(/^\s*[-*]\s+(.+)$/gm, '<li>$1</li>');
  s = s.replace(/(<li>.*<\/li>\n?)+/g, m => `<ul>${m}</ul>`);
  s = s.split(/\n\n+/).map(p => {
    if (/^<(h\d|ul|ol|pre|li|div)/.test(p)) return p;
    return `<p>${p.replace(/\n/g,'<br>')}</p>`;
  }).join('\n');
  return sanitizeRenderedHtml(s);
}
function flash(text, err) {
  const el = document.createElement('div');
  el.className = 'flash' + (err ? ' err' : '');
  el.textContent = text;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2200);
}


// ==================== HUMAN-FRIENDLY ERROR DETAILS ====================
class ApiError extends Error {
  constructor(info) {
    super(info.summary || info.message || 'API error');
    this.name = 'ApiError';
    this.info = info;
  }
}

function sanitizeSecrets(text, maxLen = 1600) {
  return String(text || '')
    .replace(/sk-ant-[a-zA-Z0-9_-]+/g, '[KEY_HIDDEN]')
    .replace(/sk-[a-zA-Z0-9_-]{20,}/g, '[KEY_HIDDEN]')
    .replace(/AIza[a-zA-Z0-9_-]{20,}/g, '[KEY_HIDDEN]')
    .replace(/pplx-[a-zA-Z0-9_-]+/g, '[KEY_HIDDEN]')
    .slice(0, maxLen);
}

function parseApiPayload(rawText) {
  try { return JSON.parse(rawText); }
  catch { return null; }
}

function extractApiMessage(parsed, rawText) {
  if (!parsed) return sanitizeSecrets(rawText, 700);
  const err = parsed.error || parsed;
  if (typeof err === 'string') return sanitizeSecrets(err, 700);
  return sanitizeSecrets(err.message || parsed.message || JSON.stringify(parsed), 700);
}

function extractApiCode(parsed) {
  if (!parsed) return '';
  const err = parsed.error || parsed;
  return String(err.code || err.status || err.reason || '').slice(0, 120);
}

function extractApiType(parsed) {
  if (!parsed) return '';
  const err = parsed.error || parsed;
  return String(err.type || err.status || '').slice(0, 120);
}

function classifyApiError(provider, status, message, code, type) {
  const p = String(provider || '').toLowerCase();
  const txt = `${message || ''} ${code || ''} ${type || ''}`.toLowerCase();
  if (status === 401 || txt.includes('invalid api key') || txt.includes('api key not valid') || txt.includes('unauthorized')) return 'auth';
  if (status === 403 || txt.includes('permission') || txt.includes('forbidden')) return 'auth';
  if (status === 402 || txt.includes('billing') || txt.includes('payment') || txt.includes('credit')) return 'billing';
  if (status === 404 || txt.includes('model_not_found') || txt.includes('invalid_model') || txt.includes('deprecated') || txt.includes('no longer available') || txt.includes('not found') || txt.includes('does not exist')) return 'model';
  if (status === 429 && (txt.includes('quota') || txt.includes('exceeded') || p.includes('gemini'))) return 'quota';
  if (status === 429 || txt.includes('rate limit')) return 'rate';
  if (status === 503 || status === 529 || txt.includes('overload') || txt.includes('high demand') || txt.includes('temporarily unavailable')) return 'overloaded';
  if (status === 400 || txt.includes('bad request') || txt.includes('invalid_request')) return 'request';
  if ([500, 502, 504].includes(status)) return 'server';
  return 'unknown';
}

function apiDocsUrl(provider, status, category) {
  const p = String(provider || '').toLowerCase();
  if (p.includes('gemini') && (status === 429 || category === 'quota' || category === 'rate')) return 'https://ai.google.dev/gemini-api/docs/rate-limits';
  if (p.includes('gemini')) return 'https://ai.google.dev/gemini-api/docs/troubleshooting';
  if (p.includes('openai') && (status === 429 || category === 'quota' || category === 'rate')) return 'https://platform.openai.com/docs/guides/rate-limits';
  if (p.includes('openai')) return 'https://platform.openai.com/docs/guides/error-codes';
  if (p.includes('claude') || p.includes('anthropic')) return 'https://docs.anthropic.com/en/api/errors';
  if (p.includes('perplexity')) return 'https://docs.perplexity.ai/guides/errors';
  return '';
}

function makeApiError(provider, status, rawText, extra = {}) {
  const parsed = parseApiPayload(rawText);
  const message = extractApiMessage(parsed, rawText);
  const code = extractApiCode(parsed);
  const type = extractApiType(parsed);
  const category = classifyApiError(provider, status, message, code, type);
  const info = {
    provider,
    status,
    category,
    code,
    type,
    model: extra.model || '',
    retryable: ['rate', 'overloaded', 'server'].includes(category),
    summary: t(`apiError.${category}.summary`, { provider }),
    action: t(`apiError.${category}.action`, { provider }),
    message,
    raw: sanitizeSecrets(rawText, 1600),
    docsUrl: apiDocsUrl(provider, status, category),
    time: new Date().toISOString()
  };
  return new ApiError(info);
}

function normalizeErrorInfo(err, fallbackProvider = '') {
  if (err?.info) return err.info;
  const msg = err?.message || t('chat.unknownError');
  const isFetch = /failed to fetch|networkerror|load failed/i.test(String(msg));
  return {
    provider: fallbackProvider ? (AI_CONFIG[fallbackProvider]?.name || fallbackProvider) : '',
    status: '',
    category: isFetch ? 'network' : 'local',
    code: '',
    type: err?.name || '',
    model: err?.model || '',
    retryable: !!isFetch,
    summary: msg,
    action: isFetch ? t('apiError.network.action') : t('apiError.local.action'),
    message: isFetch ? msg + '. Запит не дійшов до API як HTTP-відповідь. Перевір інтернет, CORS/endpoint, Service Worker або блокування браузером.' : msg,
    raw: sanitizeSecrets(err?.stack || err?.message || '', 1200),
    docsUrl: fallbackProvider === 'claude' ? apiDocsUrl('Anthropic', 0, 'network') : '',
    time: new Date().toISOString()
  };
}

function renderErrorCard(info, msgId) {
  const retry = info.retryable ? `<span class="error-pill">${t('apiError.retryable')}</span>` : '';
  return `
    <button class="error-card" data-error-msg-id="${escapeHtml(msgId || '')}" type="button">
      <div class="error-card-main">✕ ${escapeHtml(info.summary || t('chat.unknownError'))}</div>
      ${info.action ? `<div class="error-card-action">${escapeHtml(info.action)}</div>` : ''}
      <div class="error-card-foot">
        ${info.status ? `<span class="error-pill">HTTP ${escapeHtml(info.status)}</span>` : ''}
        ${info.code ? `<span class="error-pill">${escapeHtml(info.code)}</span>` : ''}
        ${retry}
        <span class="error-details-hint">${escapeHtml(t('apiError.tapForDetails'))}</span>
      </div>
    </button>`;
}

function errorDetailsText(info) {
  return [
    `${t('apiError.summary')}: ${info.summary || ''}`,
    `${t('apiError.provider')}: ${info.provider || '-'}`,
    `${t('apiError.status')}: ${info.status || '-'}`,
    `${t('apiError.category')}: ${info.category || '-'}`,
    `${t('apiError.code')}: ${info.code || '-'}`,
    `${t('apiError.type')}: ${info.type || '-'}`,
    `${t('apiError.model')}: ${info.model || '-'}`,
    `${t('apiError.retryable')}: ${info.retryable ? t('apiError.yes') : t('apiError.no')}`,
    `${t('apiError.action')}: ${info.action || '-'}`,
    `${t('apiError.message')}: ${info.message || '-'}`,
    `${t('apiError.docs')}: ${info.docsUrl || '-'}`,
    `${t('apiError.time')}: ${info.time || '-'}`,
    '',
    `${t('apiError.raw')}:`,
    info.raw || '-'
  ].join('\n');
}

function openErrorDetails(msg) {
  const info = msg?.errorInfo || normalizeErrorInfo({ message: msg?.content || t('chat.unknownError') }, msg?.source);
  document.getElementById('apiErrorOverlay')?.remove();
  const overlay = document.createElement('div');
  overlay.id = 'apiErrorOverlay';
  overlay.className = 'overlay open';
  const docs = info.docsUrl
    ? `<a class="api-error-link" href="${escapeHtml(info.docsUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(info.docsUrl)}</a>`
    : `<span class="api-error-muted">—</span>`;
  overlay.innerHTML = `
    <div class="sheet api-error-sheet">
      <div class="sheet-header">
        <h2>${escapeHtml(t('apiError.detailsTitle'))}</h2>
        <button class="header-btn" data-api-error-close type="button" aria-label="${escapeHtml(t('common.close'))}">×</button>
      </div>
      <div class="api-error-summary">${escapeHtml(info.summary || '')}</div>
      ${info.action ? `<div class="api-error-action">${escapeHtml(info.action)}</div>` : ''}
      <div class="api-error-grid">
        <div><strong>${escapeHtml(t('apiError.provider'))}</strong><span>${escapeHtml(info.provider || '—')}</span></div>
        <div><strong>${escapeHtml(t('apiError.status'))}</strong><span>${escapeHtml(info.status || '—')}</span></div>
        <div><strong>${escapeHtml(t('apiError.category'))}</strong><span>${escapeHtml(info.category || '—')}</span></div>
        <div><strong>${escapeHtml(t('apiError.code'))}</strong><span>${escapeHtml(info.code || '—')}</span></div>
        <div><strong>${escapeHtml(t('apiError.type'))}</strong><span>${escapeHtml(info.type || '—')}</span></div>
        <div><strong>${escapeHtml(t('apiError.model'))}</strong><span>${escapeHtml(info.model || '—')}</span></div>
        <div><strong>${escapeHtml(t('apiError.retryable'))}</strong><span>${info.retryable ? escapeHtml(t('apiError.yes')) : escapeHtml(t('apiError.no'))}</span></div>
      </div>
      <div class="api-error-section">
        <div class="api-error-label">${escapeHtml(t('apiError.message'))}</div>
        <pre>${escapeHtml(info.message || '—')}</pre>
      </div>
      <div class="api-error-section">
        <div class="api-error-label">${escapeHtml(t('apiError.docs'))}</div>
        ${docs}
      </div>
      <div class="api-error-section">
        <div class="api-error-label">${escapeHtml(t('apiError.raw'))}</div>
        <pre>${escapeHtml(info.raw || '—')}</pre>
      </div>
      <button class="settings-btn primary" id="copyApiErrorDetails" type="button">${escapeHtml(t('apiError.copy'))}</button>
    </div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.closest('[data-api-error-close]')) overlay.remove();
  });
  overlay.querySelector('#copyApiErrorDetails')?.addEventListener('click', () => {
    const txt = errorDetailsText(info);
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(txt).then(() => flash(t('apiError.copied')));
    } else {
      const ta = document.createElement('textarea');
      ta.value = txt;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); flash(t('apiError.copied')); } catch {}
      ta.remove();
    }
  });
}

function applyMessageError(msg, err, fallbackProvider) {
  const info = normalizeErrorInfo(err, fallbackProvider);
  msg.error = true;
  msg.content = info.summary;
  msg.errorInfo = info;
  return msg;
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
      const openOne = el.querySelector('.chat-item-inner[data-swiped="1"], .chat-item-inner[style*="translateX"]');
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
      if (Math.abs(dy) > Math.abs(dx) * 1.2) {
        const inner = item.querySelector('.chat-item-inner');
        if (inner && inner.dataset.swiped !== '1') inner.style.transform = '';
        return;
      }
      // v4.5: Swipe detection — both directions, and works from swiped position
      if (!state.selectionMode && Math.abs(dx) > 28 && Math.abs(dx) > Math.abs(dy) * 1.8) {
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
          if (finalOffset < -110) {
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

  el.addEventListener('scroll', () => {
    el.querySelectorAll('.chat-item-inner[data-swiped="1"], .chat-item-inner[style*="translateX"]').forEach(inner => {
      inner.style.transform = '';
      delete inner.dataset.swiped;
    });
  }, { passive: true });

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
  checkPendingRequestOnStartup();
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
    templatePersonas: null,  // v5.0
    clinicalRoles: [...(ROLE_PRESETS.general || [])],
    templateId: null,
    autoPromptType: null,
    routingPreset: 'balanced',
    synthesizerAI: 'auto',
    synthesizerLevel: 1
  };

  document.getElementById('chatNameInput').value = '';
  renderTemplates();
  renderAICards();
  renderModePicker();
  renderRoutingPicker();
  renderClinicalRolesPicker();
  updateCouncilVisibility();
  updateCostEstimate();
  updateCreateButton();
}

// v4.5: Render template cards
function renderTemplates() {
  const wrap = document.getElementById('templatesGrid');
  if (!wrap) return;
  const templates = state.templates || DEFAULT_TEMPLATES;
  const templateInfo = {
    endo: 'Структурує біль, cold test, перкусію, ЕОД, PA/CBCT показання, дифдіагноз пульпіт/періодонтит/тріщина та план ендо.',
    implants: 'Допомагає оцінити імплантаційні ризики, кістку, м’які тканини, шаблон, протетику та checklist перед втручанням.',
    perio: 'Стадіювання, гігієна, SRP, пародонтальна підтримка, ризики, показання до хірургії та maintenance.',
    urgent: 'Швидко структурує біль/набряк/травму, red flags, невідкладний план, антибіотики лише за показаннями.',
    pain: 'Допомагає розвести ендо, паро, оклюзію, TMD, невралгію та атиповий біль через питання й перевірки.',
    'opg-report': 'OPG workflow: FDI-опис, відділення фактів від підозр, що можна в карту, що тільки перевірити.'
  };
  wrap.innerHTML = templates.map(t => `
    <button type="button" class="template-card ${state.newChatDraft?.templateId === t.id ? 'selected' : ''}" data-template-id="${t.id}">
      <span class="template-info-btn" data-template-info="${t.id}" aria-label="Info">ⓘ</span>
      <div class="template-icon">${t.icon}</div>
      <div class="template-name">${escapeHtml(templateText(t, 'name'))}</div>
      <div class="template-desc">${escapeHtml(templateText(t, 'description'))}</div>
    </button>
  `).join('');
  wrap.querySelectorAll('.template-card').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (e.target.closest('.template-info-btn')) return;
      toggleTemplate(btn.dataset.templateId);
    });
  });
  wrap.querySelectorAll('[data-template-info]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.templateInfo;
      const tpl = templates.find(x => x.id === id);
      alert((templateText(tpl, 'name') || id) + '\n\n' + (templateInfo[id] || templateText(tpl, 'description') || ''));
    });
  });
}

function clearSelectedTemplate() {
  const d = state.newChatDraft;
  if (!d) return;
  d.templateSystemAddition = null;
  d.templateName = null;
  d.templatePersonas = null;
  d.templateId = null;
  d.autoPromptType = null;
  d.clinicalRoles = [...(ROLE_PRESETS.general || [])];
  const input = document.getElementById('chatNameInput');
  if (input && input.dataset.auto === '1') input.value = '';
  renderTemplates();
  renderAICards();
  renderModePicker();
  renderRoutingPicker();
  renderClinicalRolesPicker();
  updateCouncilVisibility();
  updateCostEstimate();
  updateCreateButton();
}

function toggleTemplate(templateId) {
  if (state.newChatDraft?.templateId === templateId) {
    clearSelectedTemplate();
    flash('Шаблон вимкнено');
    return;
  }
  applyTemplate(templateId);
}

function applyTemplate(templateId) {
  const templates = state.templates || DEFAULT_TEMPLATES;
  const t = templates.find(x => x.id === templateId);
  if (!t) return;

  const d = state.newChatDraft;
  // Set name if still empty
  if (!document.getElementById('chatNameInput').value) {
    const nameInput = document.getElementById('chatNameInput');
    nameInput.value = templateText(t, 'name');
    nameInput.dataset.auto = '1';
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
  d.clinicalRoles = [...(ROLE_PRESETS[t.id] || ROLE_PRESETS.general || [])];
  d.templateId = t.id;
  d.autoPromptType = t.autoPromptType || (t.id === 'opg-report' ? 'radiology' : null);

  renderAICards();
  renderModePicker();
  renderClinicalRolesPicker();
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
    const webBadge = p.ai === 'perplexity'
      ? `<span class="web-badge on" title="Perplexity завжди відповідає з web-джерелами">🌐 завжди</span>`
      : (p.ai === 'claude'
          ? `<button type="button" class="web-badge ${state.newChatDraft.webSearch ? 'on' : ''}" data-web-toggle="claude" title="Claude web-search">🌐 ${state.newChatDraft.webSearch ? 'увімк' : 'вимк'}</button>`
          : `<span class="web-badge off" title="У цій версії web-search не підключений">🌐 —</span>`);
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
          ${webBadge}
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
      renderRoutingPicker();
      renderClinicalRolesPicker();
      updateCouncilVisibility();
      updateCostEstimate();
      updateCreateButton();
      autoName();
    });
  });

  wrap.querySelectorAll('[data-web-toggle]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!state.keys.claude) { flash(t('flash.addApiKey'), true); return; }
      state.newChatDraft.webSearch = !state.newChatDraft.webSearch;
      const legacy = document.getElementById('webSearchToggle');
      if (legacy) legacy.checked = state.newChatDraft.webSearch;
      renderAICards();
      updateCostEstimate();
    });
  });

  wrap.querySelectorAll('[data-level]').forEach(el => {
    el.addEventListener('input', (e) => {
      const idx = +el.dataset.level;
      state.newChatDraft.participants[idx].level = +e.target.value;
      renderAICards();
      renderRoutingPicker();
      renderClinicalRolesPicker();
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
      renderRoutingPicker();
      renderClinicalRolesPicker();
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

function applyRoutingPreset(presetKey, updateLevels = true) {
  const d = state.newChatDraft;
  const preset = ROUTING_PRESETS[presetKey] || ROUTING_PRESETS.balanced;
  d.routingPreset = presetKey;
  d.synthesizerLevel = preset.synthLevel;
  if (updateLevels && d.participants) {
    d.participants.forEach(p => { if (p.selected) p.level = preset.defaultLevel; });
  }
  renderAICards();
  renderRoutingPicker();
  renderClinicalRolesPicker();
  updateCostEstimate();
}

function renderRoutingPicker() {
  const wrap = document.getElementById('routingPicker');
  if (!wrap || !state.newChatDraft) return;
  const d = state.newChatDraft;
  const selected = d.participants.filter(p => p.selected);
  if (selected.length < 2) { wrap.innerHTML = ''; return; }
  const preset = d.routingPreset || 'balanced';
  const synthAI = d.synthesizerAI || 'auto';
  const synthLevel = d.synthesizerLevel ?? (ROUTING_PRESETS[preset]?.synthLevel || 1);
  const buttons = Object.entries(ROUTING_PRESETS).map(([key, cfg]) => `
    <button type="button" class="routing-card ${preset === key ? 'active' : ''}" data-routing-preset="${key}">
      <span class="routing-icon">${cfg.icon}</span>
      <span class="routing-title">${cfg.label}</span>
      <span class="routing-desc">${escapeHtml(cfg.desc)}</span>
    </button>
  `).join('');
  const aiOptions = ['auto', ...selected.map(p => p.ai)].map(ai => {
    const label = ai === 'auto' ? 'Автоматично' : AI_CONFIG[ai]?.name || ai;
    return `<option value="${ai}" ${synthAI === ai ? 'selected' : ''}>${escapeHtml(label)}</option>`;
  }).join('');
  const levelOptions = [0,1,2,3].map(lvl => {
    const label = levelName(lvl);
    return `<option value="${lvl}" ${Number(synthLevel) === lvl ? 'selected' : ''}>${escapeHtml(label)}</option>`;
  }).join('');
  wrap.innerHTML = `
    <div class="routing-help">💸 <strong>Режим витрат і якості ⓘ</strong><br>Економний — дешевше для щоденних питань. Збалансований — стандарт. Максимальний — для складних або ризикових кейсів.</div>
    <div class="routing-grid">${buttons}</div>
    <div class="routing-synth">
      <label>🧠 Фінальний висновок</label>
      <select id="synthesizerAISelect" class="settings-select">${aiOptions}</select>
      <select id="synthesizerLevelSelect" class="settings-select">${levelOptions}</select>
    </div>
    <div class="hint-text">“Фінальний висновок” — AI, який збирає відповіді Ради в один підсумок.</div>
  `;
  wrap.querySelectorAll('[data-routing-preset]').forEach(btn => {
    btn.addEventListener('click', () => applyRoutingPreset(btn.dataset.routingPreset, true));
  });
  wrap.querySelector('#synthesizerAISelect')?.addEventListener('change', e => {
    d.synthesizerAI = e.target.value;
    updateCostEstimate();
  });
  wrap.querySelector('#synthesizerLevelSelect')?.addEventListener('change', e => {
    d.synthesizerLevel = Number(e.target.value);
    updateCostEstimate();
  });
}

function renderClinicalRolesPicker() {
  const wrap = document.getElementById('clinicalRolesWrap');
  if (!wrap || !state.newChatDraft) return;
  const d = state.newChatDraft;
  const selected = d.participants.filter(p => p.selected);
  if (selected.length === 0) { wrap.innerHTML = ''; return; }
  const roles = d.clinicalRoles || [];
  const roleDescriptions = {
    implant_surgeon: 'Оцінює імплантаційні ризики, кістку, м’які тканини, протетику і шаблон.',
    conservative_dentist: 'Шукає менш інвазивні варіанти: реставрація, ендо, збереження зуба.',
    evidence_reviewer: 'Перевіряє, чи твердження спираються на протоколи або джерела.',
    skeptic_auditor: 'Шукає слабкі місця, галюцинації, ризики і юридично небезпечні формулювання.',
    chart_synthesizer: 'Перетворює довгу відповідь у короткий обережний текст для карти.',
    fdi_auditor: 'Перевіряє FDI, сторону знімка і підозри vs факти в OPG.'
  };
  const cards = Object.entries(CLINICAL_ROLES).map(([id, role]) => {
    const active = roles.includes(id);
    return '<button type="button" class="role-card ' + (active ? 'active' : '') + '" data-role-id="' + id + '"><span class="role-icon">' + role.icon + '</span><span class="role-text"><span class="role-title">' + escapeHtml(roleLabel(id)) + '</span><span class="role-desc">' + escapeHtml(roleDescriptions[id] || '') + '</span></span><span class="role-check">' + (active ? '✓' : '') + '</span></button>';
  }).join('');
  const hint = isRadiologyDraft(d) ? 'OPG режим: FDI-аудитор рекомендований і буде примусово доданий при створенні чату.' : 'Ролі — це різні кути мислення для AI. Вартість залежить насамперед від кількості AI/раундів.';
  wrap.innerHTML = '<div class="section-label spaced">🎭 Клінічні ролі</div><div class="roles-help">Ролі допомагають Раді дивитися на кейс з різних сторін: докази, ризики, консервативне лікування, запис у карту.</div><div class="roles-grid">' + cards + '</div><div class="hint-text">' + escapeHtml(hint) + '</div>';
  wrap.querySelectorAll('[data-role-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.roleId;
      const set = new Set(d.clinicalRoles || []);
      if (set.has(id)) set.delete(id); else set.add(id);
      d.clinicalRoles = [...set];
      renderClinicalRolesPicker();
    });
  });
}
function isRadiologyDraft(d) { return d?.autoPromptType === 'radiology' || d?.templateId === 'opg-report' || d?.templateName === 'OPG / рентген-опис'; }
function ensureMandatoryRolesForChat(chat) { const set = new Set(chat.clinicalRoles || []); if (isRadiologyChat(chat)) set.add('fdi_auditor'); chat.clinicalRoles = [...set]; }

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

function getSynthesizerConfig(cOrDraft, selected = []) {
  const source = cOrDraft || {};
  const first = selected[0]?.ai || source.participants?.[0]?.ai || 'claude';
  let ai = source.synthesizerAI || 'auto';
  if (ai === 'auto' || !state.keys[ai]) {
    if (state.keys.claude) ai = 'claude';
    else ai = first;
  }
  const preset = ROUTING_PRESETS[source.routingPreset || 'balanced'] || ROUTING_PRESETS.balanced;
  const level = Math.max(0, Math.min(3, Number(source.synthesizerLevel ?? preset.synthLevel ?? 1)));
  return { ai, level, model: MODELS[ai]?.[level] || MODELS[first]?.[level] || MODELS[first]?.[0] };
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

  // Synthesizer is configurable in Smart Routing (default: cheaper Balanced/Sonnet-level, not always maximum).
  if (synth > 0) {
    const synthCfg = getSynthesizerConfig(d, selected);
    const m = synthCfg.model;
    if (m) total += synth * (INPUT_TOK * 2 * m.inPrice + OUTPUT_TOK * m.outPrice) / 1_000_000;
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
    clinicalRoles: [...new Set([...(d.clinicalRoles || []), ...(isRadiologyDraft(d) ? ['fdi_auditor'] : [])])],
    templateId: d.templateId || null,
    autoPromptType: d.autoPromptType || null,
    routingPreset: d.routingPreset || 'balanced',
    synthesizerAI: d.synthesizerAI || 'auto',
    synthesizerLevel: d.synthesizerLevel ?? 1,
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
    const modeNameText = c.mode === 'synthesis' ? 'Σ' : (c.mode ? modeName(c.mode).toUpperCase() : t('label.council'));
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
      if (!msg || !msg.content || btn.disabled) return;
      if (action === 'copy') copyMessageText(msg.content);
      else if (action === 'memory') saveFactFromMessage(msg.content);
      else if (action === 'speak') speakMessage(msg);
      else if (action === 'obsidian') exportMessageToObsidian(msg);
      else if (action === 'chart-note') generateMessageDerivative(msg, 'chartNote');
      else if (action === 'handoff') generateMessageDerivative(msg, 'assistantHandoff');
      else if (action === 'evidence') openEvidenceSearch(msg);
    });
  });

  // Error detail cards
  wrap.querySelectorAll('.error-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      const msgId = card.dataset.errorMsgId;
      const msg = (state.chats[state.activeChatId]?.messages || []).find(m => m.id === msgId);
      if (msg) openErrorDetails(msg);
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
    if (!main) return;
    const targetId = state.scrollTargetMsgId;
    if (targetId) {
      const target = document.querySelector(`#messages [data-msg-id="${targetId}"]`);
      if (target) main.scrollTo({ top: Math.max(0, target.offsetTop - 10), behavior: 'smooth' });
      state.scrollTargetMsgId = null;
    }
  });
}

function parseFdiLines(text) {
  const order = ['18','17','16','15','14','13','12','11','21','22','23','24','25','26','27','28','38','37','36','35','34','33','32','31','41','42','43','44','45','46','47','48'];
  const map = new Map();
  const re = /(?:^|\n)\s*([🔴🟡⚪])?\s*\[\s*(18|17|16|15|14|13|12|11|21|22|23|24|25|26|27|28|38|37|36|35|34|33|32|31|41|42|43|44|45|46|47|48)\s*\]\s*[–—-]\s*([^\n]+)/g;
  let m;
  while ((m = re.exec(String(text || '')))) {
    const icon = m[1] || '';
    const tooth = m[2];
    const desc = m[3].trim();
    const sev = icon === '🔴' ? 'red' : icon === '🟡' ? 'yellow' : icon === '⚪' ? 'neutral' : (/підоз|suspekt|verify|ověřit|ризик|risk/i.test(desc) ? 'yellow' : 'neutral');
    if (!map.has(tooth)) map.set(tooth, { tooth, icon, desc, sev });
  }
  return order.filter(t => map.has(t)).map(t => map.get(t));
}

function renderFdiTable(text) {
  const rows = parseFdiLines(text);
  if (rows.length < 6) return '';
  const html = rows.map(r => '<tr class="fdi-' + r.sev + '"><td>[' + r.tooth + ']</td><td>' + (r.icon || '') + '</td><td>' + escapeHtml(r.desc) + '</td></tr>').join('');
  return '<details class="fdi-table-block" open><summary>🦷 FDI / Tooth-by-tooth table (' + rows.length + ')</summary><table class="fdi-table"><tbody>' + html + '</tbody></table></details>';
}
function renderDerivedBlocks(m) {
  let out = '';
  if (m.chartNote) out += '<div class="derived-block"><div class="derived-title">📄 ' + t('action.chartNote') + '</div>' + renderMd(m.chartNote) + '</div>';
  if (m.assistantHandoff) out += '<div class="derived-block"><div class="derived-title">👩‍⚕️ ' + t('action.handoff') + '</div>' + renderMd(m.assistantHandoff) + '</div>';
  return out;
}

function canUseChartNoteAction(msg) {
  const c = state.chats[state.activeChatId];
  if (!c || !isRadiologyChat(c)) return true;
  if (!msg || msg.error || msg.loading) return false;
  if (msg.source !== 'council-synth') return false;
  const txt = String(msg.content || '');
  if (/Фінальний синтез Ради не виконано|не є готовим OPG-висновком|synthesis failed/i.test(txt)) return false;
  return true;
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
    bodyContent = renderErrorCard(m.errorInfo || normalizeErrorInfo({ message: m.content || t('chat.unknownError') }, m.source), m.id);
  } else {
    bodyContent = renderMd(m.content || '');
    if (m.attachments && m.attachments.length > 0) {
      bodyContent += `<div class="msg-attachments">${m.attachments.map(a => renderAttachment(a)).join('')}</div>`;
    }
  }

  const fdiTableHtml = (!isUser && !m.loading && !m.error) ? renderFdiTable(m.content || '') : '';
  const derivedHtml = (!isUser && !m.loading && !m.error) ? renderDerivedBlocks(m) : '';

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
  const chartAllowed = canUseChartNoteAction(m);
  const chartButton = chartAllowed
    ? `<button class="msg-action-btn" data-action="chart-note" data-msg-id="${m.id}">${t('action.chartNote')}</button>`
    : `<button class="msg-action-btn disabled" disabled title="Для OPG чернеток запис у карту доступний тільки після фінального синтезу/перевірки">${t('action.chartNote')} 🔒</button>`;
  const actionsHtml = (!isUser && !m.loading && !m.error && m.content)
    ? `<div class="msg-actions">
         <button class="msg-action-btn" data-action="speak" data-msg-id="${m.id}">${t('action.listen')}</button>
         ${chartButton}
         <button class="msg-action-btn" data-action="handoff" data-msg-id="${m.id}">${t('action.handoff')}</button>
         <button class="msg-action-btn" data-action="evidence" data-msg-id="${m.id}">${t('action.evidence')}</button>
         <button class="msg-action-btn" data-action="obsidian" data-msg-id="${m.id}">${t('action.obsidian')}</button>
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
      ${fdiTableHtml}
      ${derivedHtml}
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
  let added = 0;
  for (const file of files) {
    if (!isAllowedAttachment(file)) {
      flash(t('error.fileTypeNotAllowed', { name: file.name }), true);
      continue;
    }
    if (file.size > SECURITY.maxFileBytes) {
      flash(t('error.fileTooLarge', { name: file.name, max: Math.round(SECURITY.maxFileBytes / 1024 / 1024) }), true);
      continue;
    }
    if (file.size > SECURITY.largeFileWarningBytes) {
      const mb = (file.size / 1024 / 1024).toFixed(1);
      if (!confirm(t('confirm.largeFile', { name: file.name, mb }))) continue;
    }
    try {
      const prepared = await prepareAttachment(file);
      state.pendingAttachments.push(prepared);
      added += 1;
      updateAttachmentsUI();
    } catch (e) {
      console.error('Attachment error:', e);
      flash(t('error.filePrepareFailed', { name: file.name }), true);
    }
  }

  if (added > 0 && state.pendingAutoSendMode === 'radiology') {
    state.pendingAutoSendMode = null;
    const c = state.chats[state.activeChatId];
    if (c) applyRadiologyDefaultsToChat(c, true);
    flash(t('radiology.autoPrompt.sending'));
    setTimeout(() => handleSend(), 250);
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
// Compatibility wrapper: detailed handling is implemented above with makeApiError().
function sanitizeApiError(status, rawText) {
  return `${status}: ${sanitizeSecrets(extractApiMessage(parseApiPayload(rawText), rawText), 220)}`;
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
  if (!resp.ok) throw makeApiError('Claude', resp.status, await resp.text(), { model });
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
  if (!resp.ok) throw makeApiError('OpenAI', resp.status, await resp.text(), { model });
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
    throw makeApiError('OpenAI', resp.status, raw, { model });
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
  if (!resp.ok) throw makeApiError('Gemini', resp.status, await resp.text(), { model });
  const data = await resp.json();
  const text = data.candidates?.[0]?.content?.parts?.map(p => p.text).filter(Boolean).join('\n') || '';
  return { text, model };
}

function stripPerplexityReasoning(text) {
  let out = String(text || '');
  out = out.replace(/<think>[\s\S]*?<\/think>/gi, '');
  const orphanStart = out.search(/<think>/i);
  if (orphanStart !== -1) out = out.slice(0, orphanStart);
  return out.trim();
}

async function callPerplexity(messages, opts = {}) {
  const key = state.keys.perplexity;
  if (!key) throw new Error(t('error.noKey', {ai: 'Perplexity'}));
  const requestedModel = opts.model || 'sonar-pro';
  const valid = new Set(['sonar', 'sonar-pro', 'sonar-reasoning-pro', 'sonar-deep-research']);
  const model = valid.has(requestedModel) ? requestedModel : 'sonar';
  const msgs = opts.system ? [{role:'system', content: opts.system}, ...messages] : messages;

  async function send(modelToUse) {
    const resp = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'authorization': `Bearer ${key}` },
      body: JSON.stringify({ model: modelToUse, messages: msgs, temperature: 0.2, max_tokens: 4096 })
    });
    const raw = await resp.text();
    if (!resp.ok) throw makeApiError('Perplexity', resp.status, raw, { model: modelToUse });
    let data; try { data = JSON.parse(raw); } catch { data = {}; }
    let text = data.choices?.[0]?.message?.content || '';
    text = stripPerplexityReasoning(text);
    return { text, model: modelToUse };
  }

  try {
    return await send(model);
  } catch (err) {
    const info = err?.info;
    const invalid = info && (info.category === 'model' || /invalid_model|deprecated|no longer available/i.test(`${info.message} ${info.raw}`));
    if (model !== 'sonar' && invalid) {
      const fallback = await send('sonar');
      fallback.text = `⚠️ Обрана модель Perplexity (${model}) недоступна або застаріла. Автоматично використано Sonar.

${fallback.text}`;
      return fallback;
    }
    throw err;
  }
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

function radiologySystemSafetyAddition() {
  if (getLang() === 'cs') {
    return "RADIOLOGICKÝ BEZPEČNOSTNÍ REŽIM:\n- Výchozí orientace OPG, pokud uživatel neuvede jinak: levý horní roh obrázku = 1. kvadrant (18→11), pravý horní = 2. kvadrant (21→28), pravý dolní = 3. kvadrant (38→31), levý dolní = 4. kvadrant (41→48).\n- Pokud je na snímku viditelný R/L marker a odporuje výchozí orientaci, prioritu má marker. Pokud uživatel/lékař opraví pozici, prioritu má jeho korekce.\n- U implantátů, retinovaných a chybějících zubů vždy uveď nejistotu, pokud je číslování nejasné nebo je konflikt mezi AI.\n- Nález jedné AI nikdy nepřepisuj do dokumentace jako fakt.\n- Gemini používej jen jako visual scout, nikoli jako zdroj definitivních zubních čísel.\n- FDI auditor je povinný: před zápisem do dokumentace znovu ověř stranu snímku, FDI mapu, implantáty, retinované a chybějící zuby.\n- Pokud lékař opravil nález, tato korekce je ground truth pro tento chat.";
  }
  if (getLang() === 'en') {
    return "RADIOLOGY SAFETY MODE:\n- Default OPG orientation unless the user states otherwise: image upper-left = quadrant 1 (18→11), image upper-right = quadrant 2 (21→28), image lower-right = quadrant 3 (38→31), image lower-left = quadrant 4 (41→48).\n- If a visible R/L marker contradicts the default orientation, the marker wins. If the user/clinician corrects a position, the correction wins.\n- For implants, impacted teeth, and missing teeth, explicitly state uncertainty whenever numbering is unclear or AI reports conflict.\n- A finding from only one AI must never be copied into the chart as fact.\n- Treat Gemini as visual scout only, not as a source of definitive tooth numbering.\n- FDI auditor is mandatory: before chart-ready output, re-check image side, FDI map, implants, impacted/missing teeth.\n- If the clinician corrected a finding, freeze that correction as ground truth for this chat.";
  }
  return "РАДІОЛОГІЧНИЙ РЕЖИМ БЕЗПЕКИ:\n- Орієнтація OPG за замовчуванням, якщо користувач не вказав інше: лівий верхній кут картинки = 1-й квадрант (18→11), правий верхній = 2-й квадрант (21→28), нижній правий = 3-й квадрант (38→31), нижній лівий = 4-й квадрант (41→48).\n- Якщо на знімку видно R/L-маркер і він суперечить default-мапі — пріоритет має маркер. Якщо користувач/лікар виправив позицію — пріоритет має його корекція.\n- Для імплантів, ретенованих і відсутніх зубів завжди вказуй невизначеність, якщо нумерація нечітка або AI між собою конфліктують.\n- Знахідку лише однієї AI ніколи не переносити в карту як факт.\n- Gemini використовувати тільки як visual scout, не як джерело остаточної нумерації зубів.\n- FDI-аудитор є обовʼязковим: перед фінальним записом перевір сторону, FDI-мапу і всі імпланти/ретеновані/відсутні зуби.\n- Якщо лікар виправив знахідку (наприклад “імплант 36”), ця корекція заморожується як ground truth у цьому чаті.";
}
function getAssignedClinicalRolePrompt(chatContext, currentAI) {
  if (!chatContext || !currentAI) return '';
  ensureMandatoryRolesForChat(chatContext);
  const roles = chatContext.clinicalRoles || [];
  if (!roles.length) return '';
  const participants = chatContext.participants || [];
  const idx = Math.max(0, participants.findIndex(p => p.ai === currentAI));
  let roleId = roles[idx % roles.length];
  if (isRadiologyChat(chatContext)) {
    if (currentAI === 'openai' || (!participants.some(p => p.ai === 'openai') && currentAI === participants[0]?.ai)) roleId = 'fdi_auditor';
    if (currentAI === 'gemini') roleId = 'skeptic_auditor';
  }
  const role = CLINICAL_ROLES[roleId];
  if (!role) return '';
  return role.icon + ' ' + roleLabel(roleId) + '\n' + role.prompt;
}
function extractDoctorCorrections(chatContext) {
  if (!chatContext || !Array.isArray(chatContext.messages)) return '';
  const correctionRe = /(неs+d{2}|замістьs+d{2}|імплантS*s+d{2}|implantS*s+d{2}|правильноs+d{2}|цеs+d{2}|корекц|виправ|помил|nots+d{2}|insteads+ofs+d{2})/i;
  const rows = chatContext.messages.filter(m => m.role === 'user' && typeof m.content === 'string' && correctionRe.test(m.content)).slice(-6).map(m => '- ' + m.content.trim().slice(0, 500));
  return rows.join('\n');
}

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
  // v4.5/v6.0.9: Template system addition. For radiology, use current-language safety block dynamically, not stale localStorage text.
  if (chatContext && isRadiologyChat(chatContext)) {
    parts.push(radiologySystemSafetyAddition());
  } else if (chatContext && chatContext.templateSystemAddition) {
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
    const synthCfg = getSynthesizerConfig(c, selected);
    const m = synthCfg.model;
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
function confirmCouncilProviderWarningOnce(c) {
  if (!c || !Array.isArray(c.participants) || c.participants.length < 2) return true;
  const key = 'aic_council_provider_warning_seen_v1';
  if (localStorage.getItem(key) === '1') return true;
  const providers = c.participants
    .filter(p => state.keys[p.ai])
    .map(p => AI_CONFIG[p.ai]?.fullName || p.ai)
    .join(', ');
  const message = `⚕️ Council mode надсилає ваш запит до кількох AI-провайдерів: ${providers}.\n\nНе вставляйте ПІБ, rodné číslo, номер страхування, адресу, телефон, email або інші ідентифікатори пацієнта. Для клінічних кейсів використовуйте анонімний опис.\n\nПродовжити?`;
  const ok = confirm(message);
  if (ok) localStorage.setItem(key, '1');
  return ok;
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


// ==================== RADIOLOGY AUTO WORKFLOW ====================
function findDefaultTemplate(id) {
  return (DEFAULT_TEMPLATES || []).find(t => t.id === id) || null;
}

function isRadiologyChat(c) {
  if (!c) return false;
  return c.autoPromptType === 'radiology' || c.templateId === 'opg-report' || /OPG|RTG|рентген|X-ray/i.test(c.templateName || '');
}

function applyRadiologyDefaultsToChat(c, silent = false) {
  if (!c) return;
  const tpl = findDefaultTemplate('opg-report');
  c.templateId = 'opg-report';
  c.autoPromptType = 'radiology';
  if (tpl) {
    c.templateName = templateText(tpl, 'name');
    c.templateSystemAddition = templateText(tpl, 'systemAddition');
    c.templatePersonas = tpl.personas
      ? Object.fromEntries(Object.keys(tpl.personas).map(ai => [ai, templatePersonaText(tpl, ai)]))
      : c.templatePersonas || null;
  }
  if (/^(Чат з |Рада:|Chat with |Council:|Chat s |Rada:)/i.test(c.name || '') || !c.name) {
    c.name = templateText(tpl, 'name') || 'OPG / рентген-опис';
  }
  saveChats();
  if (!silent) flash(t('radiology.quick.enabled'));
}

function buildRadiologyAutoPrompt(attachments = []) {
  const fileList = attachments.length
    ? attachments.map(a => `- ${a.name || t('chat.file')} (${a.kind || 'file'}, ${a.mime || 'unknown'})`).join('\n')
    : '- image / radiograph';

  const shared = getLang() === 'cs'
    ? `Přiložené soubory:\n${fileList}\n\nVÝCHOZÍ ORIENTACE OPG:\n- Pokud uživatel neuvede jinak, používej tuto mapu obrázku: levý horní roh = 1. kvadrant (18→11), pravý horní = 2. kvadrant (21→28), pravý dolní = 3. kvadrant (38→31), levý dolní = 4. kvadrant (41→48).\n- Pokud je na snímku viditelný R/L marker a odporuje této mapě, prioritu má marker. Pokud uživatel/lékař opraví pozici, prioritu má korekce.\n- U implantátů, retinovaných zubů a chybějících zubů buď extrémně opatrný: chyba o jeden zub nebo záměna strany je nepřijatelná pro dokumentaci.\n- Pokud si nejsi jistý konkrétním FDI číslem, napiš číslo jako pravděpodobné a dej ho do ověření.`
    : getLang() === 'en'
      ? `Attached files:\n${fileList}\n\nDEFAULT OPG ORIENTATION:\n- Unless the user states otherwise, use this image map: upper-left = quadrant 1 (18→11), upper-right = quadrant 2 (21→28), lower-right = quadrant 3 (38→31), lower-left = quadrant 4 (41→48).\n- If a visible R/L marker contradicts this map, the marker wins. If the user/clinician corrects a position, the correction wins.\n- For implants, impacted teeth, and missing teeth be extremely cautious: a one-tooth error or side reversal is unacceptable for charting.\n- If a specific FDI number is uncertain, mark it as probable and put it under verification.`
      : `Прикріплені файли:\n${fileList}\n\nОРІЄНТАЦІЯ OPG ЗА ЗАМОВЧУВАННЯМ:\n- Якщо користувач не вказав інше, використовуй таку мапу картинки: лівий верхній кут = 1-й квадрант (18→11), правий верхній = 2-й квадрант (21→28), нижній правий = 3-й квадрант (38→31), нижній лівий = 4-й квадрант (41→48).\n- Якщо на знімку видно R/L-маркер і він суперечить цій мапі — пріоритет має маркер. Якщо користувач/лікар виправив позицію — пріоритет має корекція.\n- Для імплантів, ретенованих зубів і відсутніх зубів будь максимально обережний: помилка на один зуб або дзеркальна сторона неприпустима для карти.\n- Якщо конкретний FDI-номер сумнівний, познач його як ймовірний і винеси в перевірку.`;

  if (getLang() === 'cs') {
    return `${getLanguageInstruction()}\n\nAutomatický režim OPG / RTG popisu. Popiš přiložený stomatologický RTG snímek pro zdravotnickou dokumentaci pacienta.\n\n${shared}\n\nNEJDŮLEŽITĚJŠÍ PRAVIDLA:\n- Nehalucinuj. Nevymýšlej diagnózy, kazy, periapikální léze, resorpce, endodontické ošetření ani kalcifikace, pokud je přímo nevidíš.\n- Nález, který je nejistý nebo vychází jen z dojmu, dej pouze do části „ověřit“, ne do textu dokumentace.\n- OPG je orientační snímek. Aproximální kazy, okraje výplní, jemné periapikální změny a přesnou periimplantární kost často nelze spolehlivě posoudit.\n- Nepiš u každého zubu „periapikální nález v normě“. Pokud není zjevná hrubá patologie, použij opatrnou formulaci „bez jednoznačné hrubé periapikální patologie na OPG“.\n- Gemini/visual scout nálezy nejsou samy o sobě dostatečné pro dokumentaci.\n\nPOVINNÝ FORMÁT:\n1. **Orientace a kvalita snímku** — potvrď použitou defaultní OPG mapu nebo uveď odchylku podle R/L markeru/uživatele.\n2. **Zub po zubu podle FDI**. Každý řádek začínej: [18] – ... až [48] – ...\n   Pokud je číslo nejisté, napiš: [??] / [oblast] – vyžaduje ověření lékařem.\n3. Priority:\n   🔴 suspektní/rizikové/ověřit před dokumentací.\n   🟡 omezeně hodnotitelné / rozsáhlá výplň nebo konstrukce.\n   ⚪ orientační popis bez jasné hrubé patologie.\n4. Na konec:\n   A. Bezpečný krátký text do dokumentace — pouze nízkorizikové formulace.\n   B. Pouze k ověření — NEPŘEPISOVAT jako fakt.\n   C. Co nepřepisovat do karty.\n   D. Doporučené doplňkové snímky: BW / PA / CBCT.`;
  }

  if (getLang() === 'en') {
    return `${getLanguageInstruction()}\n\nAutomatic OPG / dental X-ray reporting mode. Describe the attached dental radiograph for the patient chart.\n\n${shared}\n\nCORE RULES:\n- Do not hallucinate. Do not invent caries, periapical lesions, resorption, endodontic treatment, calcifications, missing teeth, or tooth positions unless directly visible.\n- Any uncertain finding goes only to “verify”, never to chart-ready text.\n- OPG is an overview image. Approximal caries, restoration margins, subtle periapical changes, and exact peri-implant bone levels often cannot be reliably assessed.\n- Do not write “periapical finding normal” tooth by tooth. Prefer cautious wording such as “no obvious gross periapical pathology on OPG”.\n- Gemini/visual scout findings are not sufficient by themselves for charting.\n\nMANDATORY FORMAT:\n1. **Orientation and image quality** — confirm the default OPG map used or state any override from R/L marker/user instruction.\n2. **Tooth-by-tooth FDI list**. Start each line: [18] – ... through [48] – ...\n   If numbering is uncertain, write: [??] / [region] – requires clinician verification.\n3. Priorities:\n   🔴 suspicious/risk/verify before charting.\n   🟡 limited assessment / large restoration or prosthesis.\n   ⚪ orientational description/no obvious gross pathology.\n4. End with:\n   A. Safe short chart note — low-risk wording only.\n   B. Verify only — DO NOT copy as fact.\n   C. Do not copy into chart.\n   D. Recommended additional imaging: BW / PA / CBCT.`;
  }

  return `${getLanguageInstruction()}\n\nАвтоматичний режим OPG / рентген-опису. Опиши прикріплений стоматологічний рентген-знімок для карти пацієнта.\n\n${shared}\n\nНАЙВАЖЛИВІШІ ПРАВИЛА:\n- Не галюцинуй. Не вигадуй карієс, періапікальні зміни, резорбції, ендодонтичне лікування, кальцифікати, відсутні зуби або позиції зубів, якщо це прямо не видно.\n- Усе сумнівне йде тільки в “уточнити”, не в текст карти.\n- OPG є оглядовим знімком. Апроксимальний карієс, краї пломб, дрібні періапікальні зміни і точний рівень кістки біля імплантів часто не оцінюються достовірно.\n- Не пиши по кожному зубу “періапікальна ділянка в нормі”. Краще: “без очевидної грубої апікальної патології на OPG”.\n- Знахідки Gemini/visual scout самі по собі не є достатніми для карти.\n\nОБОВʼЯЗКОВИЙ ФОРМАТ:\n1. **Орієнтація і якість знімка** — підтверди використану default-мапу OPG або вкажи відхилення за R/L-маркером/вказівкою користувача.\n2. **Опис зуб за зубом за FDI**. Кожен рядок починай: [18] – ... до [48] – ...\n   Якщо номер сумнівний, пиши: [??] / [ділянка] – потребує перевірки лікарем.\n3. Пріоритети:\n   🔴 підозра/ризик/перевірити перед внесенням у карту.\n   🟡 обмежено оцінюється / велика реставрація або конструкція.\n   ⚪ орієнтовний опис / без очевидної грубої патології.\n4. В кінці:\n   A. Безпечний короткий текст у карту — тільки низькоризикові формулювання.\n   B. Тільки перевірити — НЕ переносити як факт.\n   C. Що НЕ переносити в карту.\n   D. Які додаткові знімки потрібні: BW / PA / CBCT.`;
}

function stripPendingAttachments(attachments) {
  return (attachments || []).map(stripAttachmentForStorage);
}

function savePendingRequest(chat, text, attachments, userMsgId) {
  try {
    const pending = {
      id: uid(),
      chatId: chat.id,
      userMsgId,
      text: String(text || ''),
      attachments: stripPendingAttachments(attachments),
      mode: chat.mode || 'single',
      participants: chat.participants || [],
      startedAt: Date.now(),
      status: 'running'
    };
    localStorage.setItem(STORAGE.pending, JSON.stringify(pending));
  } catch (e) {
    console.warn('Failed to save pending request:', e);
  }
}

function clearPendingRequest() {
  try { localStorage.removeItem(STORAGE.pending); } catch {}
}

function checkPendingRequestOnStartup() {
  let pending = null;
  try { pending = JSON.parse(localStorage.getItem(STORAGE.pending) || 'null'); } catch {}
  if (!pending || !pending.chatId) return;
  const ageHours = (Date.now() - (pending.startedAt || 0)) / 36e5;
  if (ageHours > 48) { clearPendingRequest(); return; }
  setTimeout(() => {
    const c = state.chats[pending.chatId];
    const msg = 'Попередній AI-запит міг бути перерваний закриттям PWA/браузера. Відкрити чат і відновити текст у полі вводу?';
    if (!c || !confirm(msg)) { clearPendingRequest(); return; }
    openChat(pending.chatId);
    const input = document.getElementById('input');
    if (input && pending.text) {
      input.value = pending.text;
      adjustInput();
      flash('Запит відновлено в полі вводу. Перевір і надішли ще раз, якщо потрібно.');
    }
    clearPendingRequest();
  }, 900);
}

let activeWakeLock = null;
async function requestLongTaskWakeLock(chat) {
  const isLong = !!chat && (isRadiologyChat(chat) || (chat.participants || []).length > 1 || chat.research || chat.mode === 'debate');
  if (!isLong || !('wakeLock' in navigator)) return null;
  try {
    activeWakeLock = await navigator.wakeLock.request('screen');
    activeWakeLock.addEventListener?.('release', () => { activeWakeLock = null; });
    return activeWakeLock;
  } catch (e) {
    console.warn('Wake lock unavailable:', e);
    return null;
  }
}
async function releaseLongTaskWakeLock(lock) {
  try { if (lock && !lock.released) await lock.release(); } catch {}
  if (activeWakeLock === lock) activeWakeLock = null;
}

// ==================== SEND ====================
async function handleSend() {
  // Prevent double-send race condition
  if (state.sendInProgress) return;

  const input = document.getElementById('input');
  const originalText = input.value.trim();
  if (!originalText && state.pendingAttachments.length === 0) return;

  const c = state.chats[state.activeChatId];
  if (!c) return;

  const attachmentsPreview = [...state.pendingAttachments];
  let textForAI = originalText;
  let userVisibleText = originalText;

  if (!textForAI && attachmentsPreview.length > 0 && isRadiologyChat(c)) {
    textForAI = buildRadiologyAutoPrompt(attachmentsPreview);
    userVisibleText = t('radiology.autoPrompt.visible', { count: attachmentsPreview.length });
  }

  if (!confirmCouncilProviderWarningOnce(c)) return;
  if (!confirmBeforeSend(textForAI || userVisibleText, state.pendingAttachments, c)) return;

  const wakeLock = await requestLongTaskWakeLock(c);
  if (wakeLock) flash('Екран тимчасово утримується активним для довгого AI-запиту.');
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
    content: userVisibleText,
    attachments: attachments.length > 0 ? attachments : undefined,
    time: Date.now(),
    isPrimary: true
  };
  c.messages.push(userMsg);
  c.updatedAt = Date.now();
  saveChats();
  renderMessages();

  savePendingRequest(c, textForAI, attachments, userMsg.id);
  const isMulti = c.participants.length > 1;

  try {
    if (!isMulti) {
      await handleSingleAI(c, textForAI, attachments);
    } else {
      await handleCouncil(c, textForAI, attachments);
    }
  } catch (e) {
    console.error(e);
    flash(e.message || 'Помилка', true);
  } finally {
    await releaseLongTaskWakeLock(wakeLock);
    clearPendingRequest();
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
  state.scrollTargetMsgId = loadingId;
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
    c.messages[idx] = applyMessageError({
      id: loadingId, role: 'assistant', source: p.ai,
      isPrimary: true, time: Date.now()
    }, err, p.ai);
  }
  renderMessages();
}

async function handleCouncil(c, text, attachments) {
  const active = c.participants.filter(p => state.keys[p.ai]);
  if (active.length === 0) {
    c.messages.push(applyMessageError({
      id: uid(), role: 'assistant', source: 'council-synth',
      isPrimary: true, time: Date.now()
    }, new Error(t('error.noActiveAI')), 'council'));
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
  state.scrollTargetMsgId = Object.values(loadings)[0] || null;
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
      c.messages[idx] = applyMessageError({
        id: loadings[p.ai], role: 'assistant', source: p.ai,
        isPrimary: true, // errors are ALWAYS primary so user sees what went wrong
        modelShort: model.short, levelColor: LEVEL_COLORS[p.level],
        time: Date.now()
      }, err, p.ai);
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
      loading: true, isPrimary: true, loadingLabel: 'Σ...',
      time: Date.now()
    });
    state.scrollTargetMsgId = synthId;
    renderMessages();

    const synthPrompt = isRadiologyChat(c) && mode === 'synthesis' ? buildRadiologySynthesisPrompt(text, good) : (mode === 'synthesis' ? buildSynthesisPrompt(text, good) : buildVotePrompt(text, good));
    const synthCfg = getSynthesizerConfig(c, active);
    const synthesizerAI = synthCfg.ai;
    const synthModel = synthCfg.model || MODELS[synthesizerAI][0];

    try {
      const synthMsgs = isRadiologyChat(c) ? buildMessagesForAI(synthesizerAI, [], synthPrompt, attachments) : [{role:'user', content: synthPrompt}];
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
      // Synthesis failed. For radiology/OPG do NOT silently promote drafts as a safe final answer.
      const idx = c.messages.findIndex(m => m.id === synthId);
      c.messages[idx] = applyMessageError({
        id: synthId, role: 'assistant', source: 'council-synth',
        isPrimary: true, time: Date.now()
      }, err, synthesizerAI);
      if (isRadiologyChat(c)) {
        c.messages.push({
          id: uid(), role: 'assistant', source: 'council-synth', isPrimary: true, time: Date.now(),
          content: '⚠️ Фінальний синтез Ради не виконано. Відповіді окремих моделей залишаються лише чорновим логом і не є готовим OPG-висновком. Натисни меню → “Повний лог розмови”, щоб побачити хто що сказав. “В карту” використовуй тільки після лікарської перевірки FDI/сторони.'
        });
      } else {
        c.messages.forEach(m => {
          if (m.source && good.some(g => g.ai === m.source) && !m.error) {
            m.isPrimary = true;
          }
        });
      }
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
        c.messages[idx] = applyMessageError({
          id: loadings[p.ai], role: 'assistant', source: p.ai,
          round: r, time: Date.now()
        }, err, p.ai);
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
  state.scrollTargetMsgId = synthId;
  renderMessages();

  const finalAnswers = active.map(p => ({
    ai: p.ai,
    text: allAnswers[p.ai][allAnswers[p.ai].length - 1] || '(немає)',
    ok: !!allAnswers[p.ai][allAnswers[p.ai].length - 1],
    roundsAnswered: allAnswers[p.ai].filter(x => x).length
  })).filter(x => x.ok);

  if (finalAnswers.length === 0) {
    const idx = c.messages.findIndex(m => m.id === synthId);
    c.messages[idx] = applyMessageError({
      id: synthId, role: 'assistant', source: 'council-synth',
      isPrimary: true, time: Date.now()
    }, new Error(t('error.debateNoAnswers')), 'council');
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
${councilOutputLanguageRule()}

After ${rounds} debate round(s) on the question "${text}", give a concise final conclusion in the required output language.${warningNote}

Final positions:
${finalAnswers.map(a => `=== ${AI_CONFIG[a.ai].fullName} (раундів: ${a.roundsAnswered}/${rounds}) ===\n${a.text}`).join('\n\n')}

Structure in the required output language:
1. **Consensus**
2. **Key disagreements**
3. **Recommendation**${incompleteAI.length > 0 ? '\n4. **⚠️ Limitations** — mention that not all AI completed all rounds' : ''}

At the end, add a JSON meta-analysis block in backticks:
\`\`\`json
{
  "confidence": "high|medium|low",
  "confidence_reason": "short explanation",
  "contributions": [
    {"ai": "claude", "unique_insights": 2, "supported_by": ["gemini"]}
  ]
}
\`\`\`
Available ai-id: ${aiIdList}`;

  try {
    const synthCfg = getSynthesizerConfig(c, active);
    const synthesizerAI = synthCfg.ai;
    const synthModel = synthCfg.model || MODELS[synthesizerAI][0];
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
    c.messages[idx] = applyMessageError({
      id: synthId, role: 'assistant', source: 'council-synth',
      isPrimary: true, time: Date.now()
    }, err, synthesizerAI);
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
function councilOutputLanguageRule() {
  if (getLang() === 'cs') return 'OUTPUT LANGUAGE: Czech only. Do not add Ukrainian translation. JSON meta block may keep English keys.';
  if (getLang() === 'en') return 'OUTPUT LANGUAGE: English only. Do not add Ukrainian or Czech translation. JSON meta block may keep English keys.';
  return 'МОВА ВІДПОВІДІ: тільки українська. Не додавай переклад іншою мовою. JSON meta block може мати англійські ключі.';
}

function buildRadiologySynthesisPrompt(question, answers) {
  const formatted = answers.map(r => `=== ${AI_CONFIG[r.ai].fullName} ===\n${r.text}`).join('\n\n');
  const aiList = answers.map(r => r.ai).join(', ');
  if (getLang() === 'cs') {
    return `${getLanguageInstruction()}\n${councilOutputLanguageRule()}\n\nJsi finální radiologický auditor Rady AI. Máš k dispozici původní RTG/OPG snímek jako přílohu a také odpovědi jednotlivých AI. Tvůj úkol není sloučit všechny nálezy. Tvůj úkol je vytvořit bezpečný, klinicky použitelný popis.\n\nPŮVODNÍ ZADÁNÍ:\n${question}\n\nODPOVĚDI AI:\n${formatted}\n\nPOUŽIJ CONSENSUS-FILTER:\n- Do dokumentace jako fakt zařaď jen nález, který přímo vidíš na přiloženém snímku, nebo který konzistentně podporují alespoň 2 nezávislé AI a není mezi nimi zásadní rozpor.\n- Nález zmíněný jen jednou AI dej do „Pouze k ověření – nepřepisovat jako fakt“.\n- Pokud se AI liší v číslování zubu, poloze implantátu, retenci/impakci, endodontickém ošetření, kazu, periapikální lézi, resorpci nebo kalcifikaci — nevybírej vítěze. Označ konflikt a doporuč ověření lékařem / PA / BW / CBCT.\n- Nepiš „periapikální nález v normě“ po jednotlivých zubech.\n- ORIENTACE/FDI: Pokud uživatel neuvede jinak, použij defaultní OPG mapu: levý horní obrázku = Q1 18→11, pravý horní = Q2 21→28, pravý dolní = Q3 38→31, levý dolní = Q4 41→48. Pokud R/L marker nebo korekce lékaře odporuje defaultu, prioritu má marker/korekce.\n- KOREKCE LÉKAŘE: Pokud uživatel v této konverzaci opravil polohu zubu/implantátu, tato korekce má prioritu před všemi AI zprávami.\n- SAFE CHART TEXT nesmí obsahovat konfliktní zuby, jednostranné nálezy Gemini ani číslování, které není bezpečně ověřené.\n- U implantátu bez jisté orientace piš raději „implantát v laterálním úseku mandibuly, přesná FDI pozice vyžaduje ověření“ než špatné číslo.\n\nPOVINNÝ VÝSTUP:\n1. **Kvalita a limitace snímku**\n2. **Zub po zubu — FDI**\n   Každý řádek začni: [18] – ... až [48] – ...\n   Použij priority:\n   🔴 [15] – suspektní nález vyžadující ověření / riziková oblast.\n   🟡 [16] – omezeně hodnotitelné / rozsáhlá výplň nebo konstrukce.\n   ⚪ [14] – popis bez jasné hrubé patologie nebo stav pouze orientačně.\n3. **Bezpečný krátký text do dokumentace** — jen ověřené/bezpečné formulace.\n4. **Pouze k ověření – nepřepisovat jako fakt**\n5. **Doporučené doplnění** — BW / PA / CBCT / klinicky.\n\nNa úplném konci přidej JSON blok:\n\`\`\`json\n{\n  \"confidence\": \"high|medium|low\",\n  \"confidence_reason\": \"stručné vysvětlení\",\n  \"contributions\": [\n    {\"ai\": \"claude\", \"unique_insights\": 2, \"supported_by\": [\"openai\"]}\n  ]\n}\n\`\`\`\nDostupné ai-id: ${aiList}`;
  }
  if (getLang() === 'en') {
    return `${getLanguageInstruction()}\n${councilOutputLanguageRule()}\n\nYou are the final radiology auditor of the AI Council. You have the original OPG/X-ray attachment and the AI reports. Do not merge all findings. Produce a safe chart-ready report.\n\nORIGINAL TASK:\n${question}\n\nAI REPORTS:\n${formatted}\n\nUSE A CONSENSUS FILTER:\n- Put a finding into the chart-ready text only if you directly see it on the attached image, or at least 2 independent AI reports support it consistently with no major conflict.\n- Findings mentioned by only one AI go under “Verify only — do not copy as fact”.\n- If models disagree on tooth number, implant position, impaction, endodontic treatment, caries, periapical lesion, resorption, or calcification, do not choose a side. Mark conflict and recommend verification.\n- Never write “periapical finding normal” tooth by tooth.\n- ORIENTATION/FDI: Unless the user states otherwise, use the default OPG map: image upper-left = Q1 18→11, upper-right = Q2 21→28, lower-right = Q3 38→31, lower-left = Q4 41→48. If an R/L marker or clinician correction contradicts the default, the marker/correction wins.\n- CLINICIAN CORRECTIONS: If the user corrected a tooth/implant position in this conversation, that correction overrides all AI reports.\n- SAFE CHART TEXT must not contain conflicted teeth, single-model Gemini findings, or tooth numbering that is not safely verified.\n- For implants without certain orientation, prefer “implant in the posterior mandible; exact FDI position requires verification” over a wrong tooth number.\n\nMANDATORY OUTPUT:\n1. **Image quality and limitations**\n2. **Tooth-by-tooth FDI list** — [18] – ... through [48] – ...\n   Use markers: 🔴 suspicious/risk/verify, 🟡 limited assessment, ⚪ orientational/no obvious gross pathology.\n3. **Safe short chart note**\n4. **Verify only — do not copy as fact**\n5. **Recommended additional imaging** — BW / PA / CBCT / clinical.\n\nEnd with JSON meta block:\n\`\`\`json\n{\n  \"confidence\": \"high|medium|low\",\n  \"confidence_reason\": \"short reason\",\n  \"contributions\": [\n    {\"ai\": \"claude\", \"unique_insights\": 2, \"supported_by\": [\"openai\"]}\n  ]\n}\n\`\`\`\nAvailable ai-id: ${aiList}`;
  }
  return `${getLanguageInstruction()}\n${councilOutputLanguageRule()}\n\nТи — фінальний радіологічний аудитор Ради AI. Маєш оригінальний OPG/RTG-знімок як вкладення і відповіді моделей. Не обʼєднуй усі знахідки. Створи безпечний опис для карти.\n\nПИТАННЯ:\n${question}\n\nВІДПОВІДІ AI:\n${formatted}\n\nCONSENSUS-FILTER:\n- У текст для карти як факт включай лише те, що ти прямо бачиш на знімку, або що стабільно підтвердили мінімум 2 незалежні AI без конфлікту.\n- Знахідку лише однієї AI перенеси в “Тільки перевірити — не переносити як факт”.\n- Якщо є конфлікт у нумерації зуба, позиції імпланта, ретенції/імпакції, ендо, карієсі, періапікальній зміні, резорбції чи кальцифікаті — не вибирай сторону, а познач конфлікт.\n- Не пиши “періапікальна ділянка в нормі” по кожному зубу.\n- ОРІЄНТАЦІЯ/FDI: якщо користувач не вказав інше, використовуй default-мапу OPG: лівий верх картинки = Q1 18→11, правий верх = Q2 21→28, нижній правий = Q3 38→31, нижній лівий = Q4 41→48. Якщо R/L-маркер або корекція лікаря суперечить default — пріоритет має маркер/корекція.\n- КОРЕКЦІЇ ЛІКАРЯ: якщо користувач у цій розмові виправив позицію зуба/імпланта, ця корекція має пріоритет над усіма AI-відповідями.\n- БЕЗПЕЧНИЙ ТЕКСТ У КАРТУ не має містити конфліктні зуби, знахідки тільки Gemini або нумерацію, яка не верифікована безпечно.\n- Для імпланта без певної орієнтації краще писати “імплант у боковому відділі нижньої щелепи, точна FDI-позиція потребує перевірки”, ніж помилковий номер.\n\nОБОВʼЯЗКОВИЙ ВИХІД:\n1. **Якість і обмеження знімка**\n2. **Зуб за зубом — FDI**: [18] – ... до [48] – ...\n   Маркери: 🔴 підозра/ризик/перевірити, 🟡 обмежено оцінюється, ⚪ орієнтовно/без очевидної грубої патології.\n3. **Безпечний короткий текст у карту**\n4. **Тільки перевірити — не переносити як факт**\n5. **Рекомендовані додаткові знімки** — BW / PA / CBCT / клінічно.\n\nВ кінці JSON:\n\`\`\`json\n{\n  \"confidence\": \"high|medium|low\",\n  \"confidence_reason\": \"коротке пояснення\",\n  \"contributions\": [\n    {\"ai\": \"claude\", \"unique_insights\": 2, \"supported_by\": [\"openai\"]}\n  ]\n}\n\`\`\`\nДоступні ai-id: ${aiList}`;
}

function buildSynthesisPrompt(question, answers) {
  const formatted = answers.map(r => `=== ${AI_CONFIG[r.ai].fullName} ===\n${r.text}`).join('\n\n');
  const aiList = answers.map(r => r.ai).join(', ');
  if (getLang() === 'cs') {
    return `${getLanguageInstruction()}\n${councilOutputLanguageRule()}\n\nJsi předseda Rady AI. Několik AI modelů odpovědělo na otázku uživatele. Porovnej odpovědi, najdi shodu a rozpory a vytvoř jeden finální závěr.\n\nOTÁZKA:\n${question}\n\nODPOVĚDI:\n${formatted}\n\nStruktura odpovědi:\n1. **Konsenzus** — v čem se modely shodují\n2. **Rozpory** — kde se liší a proč je to důležité\n3. **Doporučení** — finální odpověď Rady\n\nNa úplném konci přidej JSON blok:\n\`\`\`json\n{\n  \"confidence\": \"high|medium|low\",\n  \"confidence_reason\": \"stručné vysvětlení\",\n  \"contributions\": [\n    {\"ai\": \"claude\", \"unique_insights\": 2, \"supported_by\": [\"gemini\"]}\n  ]\n}\n\`\`\`\nDostupné ai-id: ${aiList}`;
  }
  if (getLang() === 'en') {
    return `${getLanguageInstruction()}\n${councilOutputLanguageRule()}\n\nYou are the chair of the AI Council. Several AI models answered the user's question. Compare their answers, identify consensus and disagreements, and produce one final answer.\n\nQUESTION:\n${question}\n\nANSWERS:\n${formatted}\n\nStructure:\n1. **Consensus** — what the models agree on\n2. **Disagreements** — where they differ and why it matters\n3. **Recommendation** — final Council answer\n\nEnd with a JSON meta block:\n\`\`\`json\n{\n  \"confidence\": \"high|medium|low\",\n  \"confidence_reason\": \"short explanation\",\n  \"contributions\": [\n    {\"ai\": \"claude\", \"unique_insights\": 2, \"supported_by\": [\"gemini\"]}\n  ]\n}\n\`\`\`\nAvailable ai-id: ${aiList}`;
  }
  return `${getLanguageInstruction()}\n${councilOutputLanguageRule()}\n\nТи — голова Ради AI. На питання користувача відповіли кілька AI-моделей. Порівняй відповіді, знайди консенсус і розбіжності, сформулюй один фінальний висновок.\n\nПИТАННЯ:\n${question}\n\nВІДПОВІДІ:\n${formatted}\n\nСтруктура:\n1. **Консенсус** — в чому моделі згодні\n2. **Розбіжності** — де думки розходяться і чому це важливо\n3. **Рекомендація** — фінальна відповідь Ради\n\nВ кінці додай JSON-блок:\n\`\`\`json\n{\n  \"confidence\": \"high|medium|low\",\n  \"confidence_reason\": \"коротке пояснення\",\n  \"contributions\": [\n    {\"ai\": \"claude\", \"unique_insights\": 2, \"supported_by\": [\"gemini\"]}\n  ]\n}\n\`\`\`\nДоступні ai-id: ${aiList}`;
}


function buildVotePrompt(question, answers) {
  const formatted = answers.map(r => `=== ${AI_CONFIG[r.ai].fullName} ===\n${r.text}`).join('\n\n');
  if (getLang() === 'cs') {
    return `${getLanguageInstruction()}\n${councilOutputLanguageRule()}\n\nNěkolik AI modelů odpovědělo na otázku. Ohodnoť kvalitu odpovědí a vyber nejlepší.\n\nOTÁZKA:\n${question}\n\nODPOVĚDI:\n${formatted}\n\nStruktura:\n1. **Pořadí** — od nejlepší po nejslabší\n2. **Vítěz** — kdo odpověděl nejlépe a proč\n3. **Ideální odpověď** — složená z nejsilnějších částí.`;
  }
  if (getLang() === 'en') {
    return `${getLanguageInstruction()}\n${councilOutputLanguageRule()}\n\nSeveral AI models answered the question. Evaluate the quality and choose the best answer.\n\nQUESTION:\n${question}\n\nANSWERS:\n${formatted}\n\nStructure:\n1. **Ranking** — best to weakest\n2. **Winner** — who gave the best answer and why\n3. **Ideal answer** — based on the strongest elements.`;
  }
  return `${getLanguageInstruction()}\n${councilOutputLanguageRule()}\n\nНа питання відповіли кілька AI-моделей. Оціни якість кожної відповіді та обери найкращу.\n\nПИТАННЯ:\n${question}\n\nВІДПОВІДІ:\n${formatted}\n\nСтруктура:\n1. **Ранжування** — від найкращої до найслабшої\n2. **Переможець** — хто дав найкращу відповідь і чому\n3. **Ідеальна відповідь** — на основі найкращих елементів.`;
}

// ==================== SETTINGS ====================
function getSettingsSections() { return Array.from(document.querySelectorAll('#settingsOverlay .settings-section')); }
function showSettingsHub() {
  const hub = document.querySelector('#settingsOverlay .settings-hub');
  if (hub) hub.style.display = 'grid';
  getSettingsSections().forEach(sec => { sec.classList.remove('settings-active-panel'); sec.style.display = 'none'; });
}
function showSettingsPanel(sectionId) {
  if (sectionId === 'settingsChangelogSection') { openChangelog(); return; }
  const related = {
    settingsApiSection: ['settingsApiSection', 'apiKeysContainer'],
    settingsMemorySection: ['settingsMemorySection', 'settingsCzechSection', 'settingsCasesSection'],
    settingsObsidianSection: ['settingsObsidianSection'],
    settingsBackupSection: ['settingsBackupSection'],
    settingsStorageSection: ['settingsStorageSection'],
    settingsLanguageSection: ['settingsLanguageSection'],
    settingsDangerSection: ['settingsDangerSection']
  };
  const activeIds = new Set(related[sectionId] || [sectionId]);
  const hub = document.querySelector('#settingsOverlay .settings-hub');
  if (hub) hub.style.display = 'none';
  getSettingsSections().forEach(sec => {
    const active = activeIds.has(sec.id);
    sec.style.display = active ? 'block' : 'none';
    sec.classList.toggle('settings-active-panel', active);
  });
  const firstId = [...activeIds][0];
  const target = document.getElementById(firstId);
  if (target && !target.querySelector('.settings-back-btn')) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'settings-back-btn';
    btn.textContent = '← Settings';
    btn.addEventListener('click', showSettingsHub);
    target.prepend(btn);
  }
  const last = [...activeIds].map(id => document.getElementById(id)).filter(Boolean).pop();
  if (last && sectionId !== 'settingsDangerSection' && !last.querySelector('.settings-panel-save')) {
    const save = document.createElement('button');
    save.type = 'button';
    save.className = 'settings-btn primary settings-panel-save';
    save.textContent = t('settings.save');
    save.addEventListener('click', saveSettings);
    last.append(save);
  }
}

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

  const obsidianEnabled = document.getElementById('obsidianEnabled');
  const obsidianVault = document.getElementById('obsidianVault');
  const obsidianFolder = document.getElementById('obsidianFolder');
  if (obsidianEnabled) obsidianEnabled.checked = !!state.settings?.obsidian?.enabled;
  if (obsidianVault) obsidianVault.value = state.settings?.obsidian?.vault || '';
  if (obsidianFolder) obsidianFolder.value = state.settings?.obsidian?.folder || 'AI Council';
  updateStorageIndicator();

  showSettingsHub();
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
  const obsidianEnabled = document.getElementById('obsidianEnabled');
  const obsidianVault = document.getElementById('obsidianVault');
  const obsidianFolder = document.getElementById('obsidianFolder');
  state.settings.obsidian = {
    enabled: !!obsidianEnabled?.checked,
    vault: (obsidianVault?.value || '').trim(),
    folder: (obsidianFolder?.value || 'AI Council').trim() || 'AI Council'
  };
  saveSettingsState();
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


function pickCheapestAvailableAI() {
  if (state.keys.claude) return 'claude';
  if (state.keys.gemini) return 'gemini';
  if (state.keys.openai) return 'openai';
  if (state.keys.perplexity) return 'perplexity';
  return null;
}
function buildDerivativePrompt(kind, content) {
  if (kind === 'chartNote') {
    if (getLang() === 'cs') return getLanguageInstruction() + '\n\nPřeveď následující AI odpověď na bezpečný krátký zápis do zdravotnické dokumentace. Nepřidávej nové informace. Nepiš nejisté nálezy jako fakt. Odděl: 1) zápis do dokumentace, 2) ověřit klinicky, 3) nepřepisovat jako fakt.\n\nTEXT:\n' + content;
    if (getLang() === 'en') return getLanguageInstruction() + '\n\nConvert the following AI answer into a safe concise chart note. Do not add new information. Do not turn uncertain findings into facts. Separate: 1) chart note, 2) verify clinically, 3) do not copy as fact.\n\nTEXT:\n' + content;
    return getLanguageInstruction() + '\n\nПеретвори відповідь нижче на безпечний короткий запис у медичну карту. Не додавай нових фактів. Не перетворюй сумнівні знахідки на діагноз. Розділи: 1) запис у карту, 2) перевірити клінічно, 3) не переносити як факт.\n\nТЕКСТ:\n' + content;
  }
  if (getLang() === 'cs') return getLanguageInstruction() + '\n\nPřeveď následující AI odpověď na praktické pokyny pro asistenci/sestru před výkonem. Krátce: příprava ordinace, materiály, co říct pacientovi, otázky pro lékaře. Nepřidávej nové diagnózy.\n\nTEXT:\n' + content;
  if (getLang() === 'en') return getLanguageInstruction() + '\n\nConvert the following AI answer into practical assistant handoff instructions: operatory preparation, materials, patient explanation, questions for the doctor. Do not add new diagnoses.\n\nTEXT:\n' + content;
  return getLanguageInstruction() + '\n\nПеретвори відповідь нижче на практичні інструкції для асистентки/медсестри: підготовка кабінету, матеріали, що пояснити пацієнту, питання для лікаря. Не додавай нових діагнозів.\n\nТЕКСТ:\n' + content;
}
async function generateMessageDerivative(msg, kind) {
  if (!msg || !msg.content) return;
  if (msg[kind]) { renderMessages(); return; }
  const ai = pickCheapestAvailableAI();
  if (!ai) { flash(t('flash.addApiKey'), true); return; }
  const model = MODELS[ai][0];
  const btnLabel = kind === 'chartNote' ? t('action.chartNote') : t('action.handoff');
  flash(btnLabel + '…');
  try {
    const prompt = buildDerivativePrompt(kind, msg.content.slice(0, 12000));
    const msgs = [{ role: 'user', content: prompt }];
    const { text: reply, model: usedModel } = await CALLERS[ai](msgs, { model: model.id });
    msg[kind] = String(reply || '').trim();
    trackUsage(ai, usedModel || model.id, msgs, reply, state.activeChatId);
    saveChats();
    renderMessages();
  } catch (err) { flash((err && err.message) ? err.message : String(err), true); }
}
function openEvidenceSearch(msg) {
  if (!msg || !msg.content) return;
  const q = encodeURIComponent(String(msg.content).slice(0, 1200));
  window.open('https://www.perplexity.ai/search?q=' + q, '_blank', 'noopener,noreferrer');
}

// ==================== DAILY UX: TTS + Obsidian + Backup ====================
function stripForSpeech(text) {
  return String(text || '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#>*_`\[\]()]/g, ' ')
    .replace(/https?:\/\/\S+/g, ' link ')
    .replace(/\s+/g, ' ')
    .trim();
}

const TTS_PLAYER = {
  queue: [],
  index: 0,
  current: null,
  retainedUtterances: [],
  playing: false,
  paused: false,
  msgId: null,

  chunkText(text, maxLen = 260) {
    const clean = stripForSpeech(text);
    if (!clean) return [];
    const sentences = clean.match(/[^.!?。！？]+[.!?。！？]+|[^.!?。！？]+$/g) || [clean];
    const chunks = [];
    let buffer = '';
    for (const sentence of sentences) {
      const s = sentence.trim();
      if (!s) continue;
      const candidate = (buffer + ' ' + s).trim();
      if (candidate.length <= maxLen) {
        buffer = candidate;
      } else {
        if (buffer) chunks.push(buffer);
        if (s.length <= maxLen) {
          buffer = s;
        } else {
          for (let i = 0; i < s.length; i += maxLen) chunks.push(s.slice(i, i + maxLen));
          buffer = '';
        }
      }
    }
    if (buffer) chunks.push(buffer);
    return chunks;
  },

  speak(text, msgId = null) {
    if (!('speechSynthesis' in window)) {
      flash(t('flash.ttsUnsupported'), true);
      return;
    }
    this.stop(false);
    this.queue = this.chunkText(text);
    if (this.queue.length === 0) return;
    this.index = 0;
    this.playing = true;
    this.paused = false;
    this.msgId = msgId;
    state.tts = { speaking: true, paused: false, msgId, chunkIndex: 0, chunkTotal: this.queue.length };
    this.speakNext();
  },

  speakNext() {
    if (!this.playing || this.paused) return;
    if (this.index >= this.queue.length) {
      this.cleanup();
      return;
    }
    const utter = new SpeechSynthesisUtterance(this.queue[this.index]);
    utter.lang = locale();
    utter.rate = 1.0;
    utter.pitch = 1.0;
    utter.volume = 1.0;
    this.current = utter;
    this.retainedUtterances.push(utter); // keep reference so Android/Chrome GC does not kill onend/onerror
    state.tts = { speaking: true, paused: false, msgId: this.msgId, chunkIndex: this.index + 1, chunkTotal: this.queue.length };
    utter.onend = () => {
      this.retainedUtterances = this.retainedUtterances.filter(u => u !== utter);
      this.current = null;
      this.index += 1;
      setTimeout(() => this.speakNext(), 60);
    };
    utter.onerror = () => {
      this.retainedUtterances = this.retainedUtterances.filter(u => u !== utter);
      this.current = null;
      this.index += 1;
      if (this.index >= this.queue.length) flash(t('flash.ttsFailed'), true);
      setTimeout(() => this.speakNext(), 60);
    };
    window.speechSynthesis.speak(utter);
  },

  pause() {
    if (!this.playing) return;
    this.paused = true;
    state.tts = { ...state.tts, paused: true };
    window.speechSynthesis.pause();
  },

  resume() {
    if (!this.playing) return;
    this.paused = false;
    state.tts = { ...state.tts, paused: false };
    window.speechSynthesis.resume();
    if (!window.speechSynthesis.speaking && !this.current) this.speakNext();
  },

  stop(cancel = true) {
    this.playing = false;
    this.paused = false;
    this.queue = [];
    this.index = 0;
    this.current = null;
    this.retainedUtterances = [];
    this.msgId = null;
    if (cancel && window.speechSynthesis) window.speechSynthesis.cancel();
    state.tts = { speaking: false, paused: false, msgId: null, chunkIndex: 0, chunkTotal: 0 };
  },

  cleanup() {
    this.stop(false);
  }
};

function speakMessage(msg) {
  if (!msg || !msg.content) return;
  TTS_PLAYER.speak(msg.tldr || msg.content, msg.id);
}

function stopTts() {
  TTS_PLAYER.stop(true);
}

function yamlString(value) {
  return `"${String(value ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\r?\n/g, '\\n')
    .trim()}"`;
}

function yamlArray(values) {
  if (!Array.isArray(values)) return '[]';
  return `[${values.map(v => yamlString(v)).join(', ')}]`;
}

function safeObsidianFileName(name) {
  return String(name || 'AI Council note')
    .replace(/[\\/:*?"<>|#^\[\]]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 80) || 'AI Council note';
}

function buildFrontmatter({ title, type, language, tags = [], source = 'AI Council' }) {
  return [
    '---',
    `source: ${yamlString(source)}`,
    `type: ${yamlString(type || 'chat')}`,
    `title: ${yamlString(title || 'Untitled')}`,
    `language: ${yamlString(language || getLang())}`,
    `created: ${yamlString(new Date().toISOString())}`,
    `tags: ${yamlArray(tags)}`,
    '---',
    ''
  ].join('\n');
}

function buildMessageMarkdown(msg, chat) {
  const title = chat?.name || t('chat.noTitle');
  const source = msg.source === 'council-synth' ? t('chat.council') : (msg.role === 'user' ? t('chat.you') : (AI_CONFIG[msg.source]?.name || msg.source || 'AI'));
  const fm = buildFrontmatter({ title, type: 'message', language: getLang(), tags: ['ai-council', 'message'] });
  return `${fm}\n# ${title}\n\n## ${source}\n\n${msg.content || ''}\n`;
}

function buildChatMarkdown(c) {
  if (!c) return '';
  const participants = (c.participants || []).map(p => {
    const ai = AI_CONFIG[p.ai]?.name || p.ai;
    const m = MODELS[p.ai]?.[p.level];
    return `${ai} (${m?.name || 'unknown'})`;
  }).join(', ');
  const mode = c.participants?.length > 1 && c.mode ? modeName(c.mode) : 'Single chat';
  const fm = buildFrontmatter({ title: c.name || t('chat.noTitle'), type: 'chat', language: getLang(), tags: ['ai-council', 'chat'] });
  let md = `${fm}\n# ${c.name || t('chat.noTitle')}\n\n`;
  md += `**Participants:** ${participants}\n\n**Mode:** ${mode}\n\n---\n\n`;
  (c.messages || []).forEach(m => {
    if (m.loading) return;
    const time = m.time ? new Date(m.time).toLocaleString(locale()) : '';
    const author = m.role === 'user' ? t('chat.you') : (m.source === 'council-synth' ? t('chat.council') : (AI_CONFIG[m.source]?.name || m.source || 'AI'));
    md += `## ${author} · ${time}\n\n${m.error ? '❌ ' : ''}${m.content || ''}\n\n---\n\n`;
  });
  return md;
}

function confirmObsidianPiiOnce() {
  const key = 'aic_obsidian_pii_ack';
  if (localStorage.getItem(key) === '1') return true;
  const ok = confirm(t('confirm.obsidianPii'));
  if (ok) localStorage.setItem(key, '1');
  return ok;
}

function openObsidianMarkdown(markdown, title) {
  const cfg = state.settings?.obsidian || {};
  if (!cfg.enabled) {
    flash(t('flash.obsidianDisabled'), true);
    openSettings();
    return;
  }
  if (!cfg.vault) {
    flash(t('flash.obsidianVaultMissing'), true);
    openSettings();
    return;
  }
  if (!confirmObsidianPiiOnce()) return;
  const folder = String(cfg.folder || 'AI Council').replace(/^\/+|\/+$/g, '') || 'AI Council';
  const fileName = `${new Date().toISOString().slice(0,10)}-${safeObsidianFileName(title)}.md`;
  const filepath = `${folder}/${fileName}`;
  const params = new URLSearchParams({
    vault: String(cfg.vault || '').trim(),
    filepath,
    mode: 'new',
    data: markdown
  });
  window.location.href = `obsidian://advanced-uri?${params.toString()}`;
  flash(t('flash.obsidianOpened'));
}

function exportMessageToObsidian(msg) {
  const c = state.chats[state.activeChatId];
  openObsidianMarkdown(buildMessageMarkdown(msg, c), `${c?.name || 'message'}-${msg.source || msg.role}`);
}

function exportChatToObsidian(chatId) {
  const c = state.chats[chatId];
  if (!c) return;
  openObsidianMarkdown(buildChatMarkdown(c), c.name || 'chat');
}

function exportBackup() {
  if (!confirm(t('confirm.backupPii'))) return;
  const cleanChats = {};
  for (const id in state.chats) {
    const c = { ...state.chats[id] };
    c.messages = (c.messages || []).filter(m => !m.loading).map(stripMessageForStorage);
    cleanChats[id] = c;
  }
  const backup = {
    app: 'AI Council',
    version: APP_VERSION,
    exportedAt: new Date().toISOString(),
    note: 'API keys are intentionally not included. Backup may contain personal or medical data if chats/cases contain them. Attachment binary/base64 data is stripped.',
    data: {
      settings: state.settings,
      chats: { chats: cleanChats, order: state.chatOrder, archived: state.archivedChatIds },
      memory: state.memory,
      templates: state.templates,
      cases: state.cases,
      stats: state.stats
    }
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ai-council-backup-${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  flash(t('flash.backupExported'));
}

async function importBackupFile(file) {
  if (!file) return;
  const text = await file.text();
  const backup = JSON.parse(text);
  if (!backup || backup.app !== 'AI Council' || !backup.data) throw new Error('Invalid backup');
  if (!confirm(t('confirm.restoreBackup'))) return;
  localStorage.setItem(STORAGE.settings, JSON.stringify(backup.data.settings || {}));
  localStorage.setItem(STORAGE.chats, JSON.stringify(backup.data.chats || { chats: {}, order: [], archived: [] }));
  localStorage.setItem(STORAGE.memory, JSON.stringify(backup.data.memory || {}));
  localStorage.setItem(STORAGE.templates, JSON.stringify(backup.data.templates || []));
  localStorage.setItem(STORAGE.cases, JSON.stringify(backup.data.cases || []));
  localStorage.setItem(STORAGE.stats, JSON.stringify(backup.data.stats || {}));
  flash(t('flash.backupImported'));
  setTimeout(() => location.reload(), 700);
}

async function requestPersistentStorage() {
  if (!navigator.storage || !navigator.storage.persist) {
    flash(t('flash.persistUnsupported'), true);
    return;
  }
  const ok = await navigator.storage.persist();
  flash(ok ? t('flash.persistEnabled') : t('flash.persistDenied'), !ok);
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
  applyAppearance();
  applyTranslations();
  renderLanguagePicker();

  // Set version in UI (settings footer + header pill + author line)
  const vFooter = document.getElementById('appVersion');
  if (vFooter) vFooter.textContent = `AI Council · v${APP_VERSION} · ${APP_VERSION_DATE}`;
  const vPill = document.getElementById('headerVersion');
  if (vPill) {
    vPill.textContent = `v${APP_VERSION}`;
    vPill.setAttribute('role', 'button');
    vPill.setAttribute('tabindex', '0');
    vPill.setAttribute('title', t('settings.changelog'));
    vPill.addEventListener('click', openChangelog);
    vPill.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openChangelog();
      }
    });
  }
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
  const cameraInput = document.getElementById('cameraInput');
  const mediaInput = document.getElementById('mediaInput');
  const fileInput = document.getElementById('fileInput');

  document.getElementById('attachBtn').addEventListener('click', () => {
    openOverlay('attachOptionsOverlay');
  });

  document.getElementById('opgQuickBtn')?.addEventListener('click', () => {
    const c = state.chats[state.activeChatId];
    if (c) applyRadiologyDefaultsToChat(c);
    state.pendingAutoSendMode = 'radiology';
    openOverlay('attachOptionsOverlay');
  });

  document.getElementById('attachCameraOption')?.addEventListener('click', () => {
    closeOverlay('attachOptionsOverlay');
    cameraInput?.click();
  });

  document.getElementById('attachMediaOption')?.addEventListener('click', () => {
    closeOverlay('attachOptionsOverlay');
    mediaInput?.click();
  });

  document.getElementById('attachFilesOption')?.addEventListener('click', () => {
    closeOverlay('attachOptionsOverlay');
    fileInput?.click();
  });

  [cameraInput, mediaInput, fileInput].filter(Boolean).forEach(inputEl => {
    inputEl.addEventListener('change', (e) => {
      handleFiles(e.target.files);
      e.target.value = ''; // allow re-selecting same file
    });
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
  document.getElementById('menuObsidianChat')?.addEventListener('click', () => {
    exportChatToObsidian(state.activeChatId);
    closeOverlay('chatMenuOverlay');
  });

  // Settings save
  document.getElementById('saveSettingsBtn').addEventListener('click', saveSettings);
  document.getElementById('exportBackupBtn')?.addEventListener('click', exportBackup);
  document.getElementById('importBackupBtn')?.addEventListener('click', () => document.getElementById('backupImportInput')?.click());
  document.getElementById('backupImportInput')?.addEventListener('change', async (e) => {
    try { await importBackupFile(e.target.files?.[0]); }
    catch (err) { flash(t('flash.backupImportFailed', { error: err.message }), true); }
    e.target.value = '';
  });
  document.getElementById('persistStorageBtn')?.addEventListener('click', requestPersistentStorage);
  document.getElementById('wipeDataBtn').addEventListener('click', () => {
    if (confirm(t('confirm.wipeAll'))) {
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

  document.querySelectorAll('[data-settings-jump]').forEach(btn => {
    btn.addEventListener('click', () => showSettingsPanel(btn.dataset.settingsJump));
  });

  setTimeout(() => {
    const splash = document.getElementById('appSplash');
    if (splash) {
      splash.classList.add('hide');
      setTimeout(() => splash.remove(), 500);
    }
  }, 750);

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
