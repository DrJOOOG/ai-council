# AI Council

**AI Council** is a privacy-first PWA for multi-model AI consultation, clinical reasoning, dental workflows, and structured case analysis.

The app can run several AI providers side by side, let them answer independently, synthesize a final “Council” conclusion, or run debate-style rounds between models.

Current focus: **clinical dental workflows**, especially OPG / dental X-ray description, safe chart notes, AI role presets, Obsidian export, and local-first data handling.

---

## Current Version

**v6.7.0-beta**

This beta focuses on:

- clinical workflow improvements;
- safer OPG / FDI reporting;
- Smart Model Routing;
- Settings Hub redesign;
- Browser TTS;
- Obsidian export;
- backup / restore;
- privacy-first BYOK usage;
- ProfiDentist visual identity.

---

## Key Features

### Multi-AI Council

AI Council supports several AI providers:

- Claude / Anthropic
- OpenAI / ChatGPT
- Google Gemini
- Perplexity

Supported modes:

- Single AI chat
- Parallel answers
- Council synthesis
- Debate mode
- Vote / ranking mode
- Research-style workflow

---

## Smart Model Routing

The app supports routing presets to reduce cost and improve predictability:

- **Economy** — cheaper models for everyday use
- **Balanced** — compromise between cost and quality
- **Maximum** — strongest available models for important or complex cases

The final synthesizer can be configured separately, so expensive models do not have to be used for every step.

---

## Dental / Clinical Workflow

AI Council includes clinical templates and role-based workflows for dentistry.

Examples:

- Endodontics
- Implantology
- Periodontology
- Urgent dental cases
- Differential diagnosis of pain
- OPG / dental X-ray reporting

---

## OPG / RTG Description Workflow

The OPG workflow is designed to reduce hallucinations and make AI-generated radiology notes safer.

It supports:

- tooth-by-tooth FDI reporting;
- OPG table extraction from `[18]`, `[17]`, `[16]` style lines;
- mandatory FDI / orientation auditor concept;
- doctor correction priority;
- “safe chart note” separation;
- warnings about what must not be written as fact.

Default OPG orientation rule:

```text
Image upper-left: 18 → 11
Image upper-right: 21 → 28
Image lower-right: 31 → 38
Image lower-left: 41 → 48
```

Important distinction:

```text
Image side ≠ patient anatomical side
```

Doctor corrections override AI output inside the same thread.

Example:

```text
User correction: “Implant is 36.”
AI must treat this as ground truth and must not keep arguing for 45/46.
```

---

## Clinical Action Buttons

AI responses can include practical follow-up actions:

- **Summary** / **Shrnutí** / **Підсумок**
- **Chart note** / **В карту**
- **Assistant handoff** / **Для асистента**
- **Listen** / Browser TTS
- **Copy**
- **Save to memory**
- **Export to Obsidian**
- **Evidence / open research**

---

## Browser TTS

AI Council includes browser-based text-to-speech:

- reads AI responses aloud;
- prefers the short summary if available;
- avoids OpenAI TTS by default;
- no additional API cost;
- no additional text transfer to external TTS providers.

OpenAI TTS may be added later as an optional premium mode.

---

## Obsidian Export

AI Council can export selected messages or chats to Obsidian through Advanced URI.

Supported export targets:

- current message;
- Council summary;
- OPG report;
- whole chat.

Recommended Obsidian setup:

```text
Community plugins → Advanced URI
```

Suggested vault structure:

```text
AI Council/
  Chats/
  OPG/
  Summaries/
  Cases/
```

Exports are Markdown-based and include safe frontmatter formatting.

---

## Backup / Restore

AI Council supports local backup and restore.

Backup includes:

- chats;
- memory;
- cases;
- settings;
- statistics.

Backup does **not** include API keys by default.

Important:

```text
Backups may contain clinical or personal data.
Treat backup files as confidential.
```

---

## Privacy Model

AI Council is designed as a **BYOK / local-first** app.

BYOK means:

```text
Bring Your Own Key
```

API keys are entered by the user and used directly from the browser.

The app does not require a custom backend.

### Important Privacy Warning

When using Council mode, the same prompt may be sent to several AI providers.

Before sending patient-related content, remove:

- patient name;
- birth number / rodné číslo;
- insurance number;
- exact address;
- phone number;
- email;
- any directly identifying data.

For clinical use, prefer anonymized case descriptions.

---

## Security Notes

Current security design includes:

- local-first architecture;
- API keys stored locally;
- no server-side database;
- Obsidian URI encoding;
- YAML/frontmatter escaping;
- file name escaping;
- backup warning;
- PII warnings;
- markdown rendering safety pass.

Planned security improvements:

- stricter Markdown sanitizer / DOMPurify-level protection;
- encrypted API keys at rest;
- encrypted backup;
- stronger multi-provider PII controls.

---

## Storage

Current beta still uses browser storage for app state.

The app includes:

- localStorage size monitoring;
- warning near storage limits;
- backup recommendation;
- stripped binary/base64 file data from saved chats.

Planned next major storage milestone:

```text
IndexedDB migration
```

This will allow larger chat history, better recovery, and future sync/export features.

---

## File Uploads

Supported file categories depend on provider capabilities.

Common supported workflows:

- images;
- OPG screenshots;
- PNG / JPG / WEBP;
- PDF;
- DOCX / Word;
- XLSX / Excel;
- STL metadata / upload handling.

Current file limit:

```text
25 MB
```

Large files may be slower and may not be accepted by every AI provider.

---

## Install as PWA

AI Council is a Progressive Web App.

It can be installed from a browser on:

- Android
- desktop Chrome / Edge
- partially on iOS Safari

Recommended deployment:

```text
GitHub Pages
HTTPS enabled
```

After updating the app, the PWA cache may need to be refreshed.

If the old version remains visible:

```text
1. Clear browser cache
2. Reopen the app
3. Or uninstall/reinstall the PWA
```

---

## GitHub Pages Deployment

Upload the project files to your GitHub repository root:

```text
index.html
app.js
style.css
translations.js
manifest.json
sw.js
package.json
playwright.config.js
icons / png assets
```

Optional but recommended:

```text
tests/
```

Do **not** upload:

```text
node_modules/
.env
API keys
patient files
real OPG images
backup files with clinical data
```

---

## Testing

The project includes Playwright test scaffolding.

Recommended local test commands:

```bash
npm install
npx playwright install
npm test
```

Current test areas:

- smoke test;
- i18n / localization checks.

Planned test expansion:

- storage;
- Council mode;
- debate mode;
- file parsing;
- session recovery;
- cost calculator;
- OPG workflow.

---

## Roadmap

### v6.5.x / v6.7.x — Safety + UX Polish

- Settings Hub
- Splash polish
- animated in-app splash
- browser TTS
- Obsidian export
- backup / restore
- 25 MB upload limit
- PII warnings
- Smart Model Routing
- cost estimate
- OPG workflow polish
- chart-note and assistant handoff actions

### v7.0 — Storage Foundation

- IndexedDB migration
- localStorage importer
- schema versioning
- stable backup format
- session recovery v2
- larger case and chat history

### v7.2 — Cost Control

- better Smart Routing
- Economy / Balanced / Maximum presets
- synthesizer override
- pre-send budget warnings
- daily/session cost limits

### v7.5 — Clinical Intelligence

- full Clinical Roles UI
- mandatory FDI auditor for OPG
- side-by-side view on tablet/desktop
- doctor correction freeze
- branching / forking prototype
- improved chart-note generation

### v8.0 — Architecture + Sync

- ES Modules / Vite
- split app.js into modules
- encrypted backup
- BYOS sync research:
  - Synology WebDAV
  - Obsidian vault
  - Google Drive
- conflict resolution
- optional Preact/Alpine evaluation

---

## Design

AI Council uses a ProfiDentist-inspired visual style:

- purple accents;
- white clinical UI;
- light concrete background feel;
- premium dental branding;
- geometric AI-tooth logo.

Logo concept:

```text
geometric purple tooth mesh + central AI mark
```

---

## Disclaimer

AI Council is an experimental clinical AI assistant.

It is **not** a medical device.

AI outputs must be reviewed by a qualified clinician before being used in diagnosis, documentation, treatment planning, or patient communication.

For radiology / OPG interpretation:

```text
AI output is assistive only.
Final responsibility remains with the clinician.
```

---

## Author

Created by **Dr. Parkhoma**  
ProfiDentist / AI Council project

---

## License

Private / internal development unless otherwise specified.

If this repository is made public, add a proper license before distribution.
