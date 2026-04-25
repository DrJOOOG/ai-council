# AI Council

**AI Council** is a personal multilingual PWA for AI-assisted clinical reasoning, built for a dental workflow. It lets one user consult several AI providers in parallel, compare their answers, run a structured “council” discussion, attach clinical files, and keep lightweight local memory/context.

Current version: **v6.0.1-beta**  
Author: **Dr. Parkhoma**

> Status: beta / personal tool. This project is not a certified medical device and should not be used as a substitute for professional clinical judgment.

---

## Highlights

- **4 AI providers**: Claude, OpenAI / ChatGPT, Gemini, Perplexity.
- **AI Council modes**: single AI, parallel answers, synthesis, debate, voting.
- **Multilingual interface**: Ukrainian, Czech, English.
- **AI-side localization**: AI answers, TL;DR, chat names, and syntheses follow the selected interface language unless the user clearly asks in another language.
- **Dental templates**: Endodontics, Implantology, Periodontology, Urgent case, Differential diagnosis of pain.
- **Per-AI personas**: each model can receive a different role inside a clinical template.
- **File attachments**: images, PDF, Word, Excel, text, CSV/TSV, JSON/XML, STL.
- **Local file extraction**: DOCX/DOCM text, XLSX/XLSM sheet previews, legacy DOC/XLS heuristic text extraction, STL summary.
- **Security mitigations**: SVG upload blocked, image metadata stripped, attachment base64 not stored in chat history, cost limits, PII warning.
- **PWA**: installable, cached static assets, offline shell.
- **Testing**: Playwright smoke/i18n tests and GitHub Actions workflows.

---

## What it does

AI Council is designed around a clinical/dental consultation flow:

1. Create a chat.
2. Select one or more AI participants.
3. Choose the reasoning level for each model.
4. Optionally pick a dental template.
5. Ask a question or attach files.
6. Receive either separate answers or a structured Council output.
7. Save useful facts to memory, export the chat, or continue the case.

The app is intentionally built as a **frontend-only static PWA**: `index.html`, `app.js`, `style.css`, `translations.js`, `sw.js`, and assets. There is no production build step and no backend.

---

## AI providers and model levels

Each AI has four selectable levels: fast / medium / smart / maximum. The levels are used for UI, cost estimation, and model selection.

### Claude

- `claude-haiku-4-5`
- `claude-sonnet-4-5`
- `claude-sonnet-4-6`
- `claude-opus-4-7`

### OpenAI / ChatGPT

- `gpt-5.4-nano`
- `gpt-5.4-mini`
- `gpt-5.4`
- `gpt-5.5`

OpenAI GPT-5+ models use the **Responses API**. The app also includes a fallback from `gpt-5.5` to `gpt-5.4` if the selected model is not available for the API account.

### Gemini

- `gemini-2.5-flash-lite`
- `gemini-2.5-flash`
- `gemini-2.5-pro`
- `gemini-3-pro-preview`

### Perplexity

- `sonar`
- `sonar-pro`
- `sonar-reasoning`
- `sonar-reasoning-pro`

Reasoning `<think>` blocks from Perplexity are filtered before rendering.

---

## Council modes

### Single AI

A normal one-on-one chat with a selected provider.

### Parallel

All selected AI models answer independently. Their responses are shown as primary outputs.

### Synthesis

All selected AI models answer first. Then a synthesizer creates one final Council answer summarizing:

- consensus;
- disagreements;
- final recommendation;
- confidence level;
- contribution summary.

### Debate

Selected AI models answer across multiple rounds. Later rounds can consider previous positions. A final Council synthesis is generated from the last successful answers.

### Vote

The app asks the synthesizer to rank the AI answers and choose the strongest response.

---

## Dental templates

The current built-in templates are:

- **Endodontics** — root canal treatment, pulpitis, modern endodontic protocols.
- **Implantology** — implant planning, system choice, surgical/prosthetic risks.
- **Periodontology** — staging/grading, treatment planning, supportive therapy.
- **Urgent case** — short practical answer for acute pain or trauma.
- **Differential diagnosis of pain** — odontogenic and non-odontogenic sources of pain.

Templates can define:

- suggested AI participants;
- suggested model level;
- system addition;
- provider-specific personas.

Example persona split:

- Claude: conservative clinician / endodontist / implantologist.
- Perplexity: evidence search and citation-oriented reviewer.
- Gemini: material or imaging/market analyst.
- OpenAI: critical reviewer / risk manager / skeptic.

---

## Czech dental context

The app includes optional Czech clinical context blocks:

- **SÚKL** — medication context and Czech trade names.
- **VZP** — insurance-code caution and source reminders.
- **Informed consent** — Czech structure for invasive procedures.

The removed “local practice” block is intentionally not included, to avoid injecting private clinic-specific context into every AI request.

---

## Multilingual UI

Supported UI languages:

- 🇺🇦 Ukrainian — `uk`
- 🇨🇿 Czech — `cs-CZ` in HTML, `cs` internally
- 🇬🇧 English — `en`

Localization is implemented through:

- `translations.js`
- `t(key, params)` helper
- `applyTranslations()` for static HTML
- `data-i18n`
- `data-i18n-placeholder`
- `data-i18n-aria-label`
- `data-i18n-title`

The selected language is stored in `localStorage` under app settings.

The AI receives a language instruction in the system/context prompt. The rule is:

> Reply in the selected UI language unless the user explicitly asks for another language or writes the request in another language.

---

## File support

The attachment system supports several clinical and technical file types.

| Type | Extensions | Handling |
|---|---|---|
| Images | `.jpg`, `.jpeg`, `.png`, `.webp` | Re-encoded through canvas to strip EXIF/metadata, then sent as image input where supported. |
| PDF | `.pdf` | Sent as document/file input to Claude, Gemini, and OpenAI. |
| Text | `.txt`, `.md`, `.markdown` | Extracted as text and inserted into the prompt. |
| Tables | `.csv`, `.tsv` | Extracted as text/table content. |
| JSON/XML | `.json`, `.xml` | Extracted as text. |
| Word | `.docx`, `.docm` | Local ZIP/XML extraction from document, headers, footers, footnotes, endnotes, comments. |
| Legacy Word | `.doc` | Heuristic binary text extraction. |
| Excel | `.xlsx`, `.xlsm` | Local sheet extraction into TSV previews using shared strings. |
| Legacy Excel | `.xls` | Heuristic binary text extraction. |
| STL | `.stl` | Local summary: ASCII/binary detection, triangle count, bounding box, approximate dimensions. |

Current limits:

- maximum file size: **15 MB**;
- extracted text is trimmed to prevent overly large prompts;
- SVG upload is blocked;
- unsupported or suspicious files are not executed.

---

## Memory and case base

The app stores lightweight local memory:

- user profile;
- saved facts;
- Czech context toggles;
- anonymized clinical cases.

Cases can include:

- title;
- tags;
- description;
- creation/update timestamps.

The case base is intended for anonymized clinical context only. Do not store patient names, birth numbers, insurance numbers, addresses, phone numbers, or identifiable documents.

---

## Chat features

- Search through chats.
- Archive/unarchive chats.
- Swipe actions on mobile.
- Batch selection and deletion.
- Full log toggle for Council conversations.
- Export chat as Markdown (`.md`) for notes or Obsidian.
- Session cost pill in the chat header.
- Estimated request cost before sending.
- Global usage/cost statistics.
- Auto-generated chat names through the cheapest available AI.
- TL;DR button for long AI responses.
- Save AI response into memory.
- Copy answer to clipboard.
- Confidence badge for Council syntheses.
- Contribution block showing unique insights per AI.

---

## Security and privacy model

This project is a **frontend-only personal PWA**. That means it has important security limitations.

### What the app does locally

- API keys are saved in browser `localStorage`.
- Chats, memory, settings, cases, and stats are saved in `localStorage`.
- Static assets are cached by the Service Worker.
- Images are re-encoded through canvas before sending, stripping EXIF/metadata.
- Attachment binary/base64 data is not persisted in chat history; only metadata is kept.
- Gemini uses the `x-goog-api-key` header instead of putting the key in the URL.
- A wipe action clears `localStorage`, `CacheStorage`, and unregisters Service Workers.

### What still requires caution

- Any selected AI provider receives the text and supported attachments you send.
- A multi-AI Council request can send the same case to multiple providers.
- API keys stored in browser storage are not safe against XSS, malicious browser extensions, compromised devices, or someone with local device access.
- This is not GDPR-ready for real identifiable patient data.

### Practical recommendation

Use the app only with anonymized cases unless a backend/proxy and stronger data governance are added.

For production or multi-user use, the next architectural step should be:

```text
Frontend → backend/proxy → AI providers
```

The backend should hold provider keys, enforce limits, log audit events, and centralize security controls.

---

## Cost controls

The app includes client-side cost protections:

- rough per-request estimate;
- session cost tracking;
- provider/model price table;
- warning above approximately **$0.10**;
- hard block above approximately **$1.00** per request;
- correct usage tracking when OpenAI falls back from `gpt-5.5` to `gpt-5.4`.

Token counting is approximate and based on local text estimation, not exact provider billing.

---

## PWA behavior

The app uses a Service Worker to cache static files:

- `index.html`
- `app.js`
- `translations.js`
- `style.css`
- `manifest.json`
- icons
- test-independent static assets

API calls to AI providers are not cached.

After each deployment, update the Service Worker cache name and clear the old installed app/cache during testing if the browser keeps an older version.

---

## Project structure

```text
.
├── index.html
├── app.js
├── translations.js
├── style.css
├── sw.js
├── manifest.json
├── icon.svg
├── icon-96.png
├── icon-192.png
├── icon-512.png
├── package.json
├── playwright.config.js
├── tests/
│   ├── smoke.spec.js
│   └── i18n.spec.js
└── .github/
    └── workflows/
        ├── test.yml
        └── codeql.yml
```

---

## Local development

This is a static frontend app. For normal use, it can be hosted on GitHub Pages or any static host.

For local testing with Playwright:

```bash
npm install
npx playwright install
npm test
```

Run only syntax tests:

```bash
npm run test:syntax
```

Run Playwright tests:

```bash
npm run test:e2e
```

Open Playwright UI:

```bash
npm run test:e2e:ui
```

Show the test report:

```bash
npm run test:report
```

---

## GitHub Actions

The repository includes workflows for:

- Playwright/smoke testing;
- CodeQL security scanning.

These are development-time checks. Passing tests does not make the app clinically validated or production-secure.

---

## Deployment

Recommended simple deployment:

1. Push files to GitHub.
2. Enable GitHub Pages for the repository.
3. Open the app through the GitHub Pages URL.
4. Add provider API keys in Settings.
5. Install as PWA on the device.

During beta testing, clear the PWA/cache after replacing files:

- Android Chrome: Site settings → Storage → Clear data;
- or uninstall/reinstall the PWA;
- or unregister the Service Worker from DevTools.

---

## API keys

The app can store keys for:

- Anthropic Claude;
- OpenAI;
- Google Gemini;
- Perplexity.

Keys are stored only in the local browser, but browser storage is not a high-security secret store. Use restricted/test keys and set provider-side spending limits.

---

## Important clinical disclaimer

AI Council is a reasoning and documentation support tool. It is not a diagnostic device, not a medical device, and not a replacement for a licensed clinician.

All outputs must be checked by a qualified professional. For medications, dosages, insurance codes, informed consent, radiological findings, and treatment plans, verify against current local regulations, official documentation, and clinical guidelines.

---

## Current limitations

- No backend/proxy.
- API keys are stored in browser `localStorage`.
- No user accounts or role-based access.
- No encrypted database.
- No true audit log.
- No server-side file parsing.
- Legacy `.doc` / `.xls` extraction is heuristic.
- Large or complex spreadsheets are only previewed/truncated.
- File parsing is client-side and browser-dependent.
- Not suitable for identifiable patient data without additional safeguards.

---

## Roadmap ideas

Possible next steps:

- Backend proxy for AI provider keys.
- IndexedDB storage for larger local data.
- Optional client-side encryption.
- Better anonymization workflow for clinical cases.
- Structured case schema.
- More robust DOC/XLS parsing through backend.
- Audit log of what was sent to which provider.
- Prompt/version management.
- More Playwright tests for files, Council mode, and PWA updates.
- Clinical mode with stricter safety templates.

---

## License

No license specified yet. Add a license before public reuse or external collaboration.
