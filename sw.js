const CACHE = 'ai-council-v6.10.1-beta-cleanicons';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './translations.js',
  './src/config/visuals.config.js',
  './style.css',
  './manifest.json',
  './icon.svg',
  './icon-clean-96.png?v=cleanicons',
  './icon-clean-192.png?v=cleanicons',
  './icon-clean-512.png?v=cleanicons',
  './maskable-icon-clean-512.png?v=cleanicons',
  './splash-logo.png',
  './header-logo.png',
  './splash-tooth-clean.png?v=cleanicons',
  './assets/visuals/caries/tooth_anatomy_section.svg',
  './assets/visuals/caries/early_enamel_caries.svg',
  './assets/visuals/caries/dentin_caries.svg',
  './assets/visuals/caries/caries_to_pulp_progression.svg',
  './assets/visuals/caries/untreated_caries_consequences.svg',
  './assets/visuals/pulp/pulpitis_inflamed_pulp.svg',
  './assets/visuals/pulp/caries_vs_pulpitis.svg',
  './assets/visuals/pulp/why_pulpitis_hurts.svg',
  './assets/visuals/pulp/tooth_nerve_simple.svg',
  './assets/visuals/endo/infected_root_canal.svg',
  './assets/visuals/endo/root_canal_treatment_overview.svg',
  './assets/visuals/endo/endo_steps.svg',
  './assets/visuals/endo/periapical_lesion.svg',
  './assets/visuals/endo/tooth_before_after_endo.svg',
  './assets/visuals/perio/healthy_gums_vs_gingivitis.svg',
  './assets/visuals/perio/gingivitis_vs_periodontitis.svg',
  './assets/visuals/perio/bone_loss_periodontitis.svg',
  './assets/visuals/perio/plaque_calculus_inflammation.svg',
  './assets/visuals/perio/mobile_teeth_periodontitis.svg',
  './assets/visuals/implants/dental_implant_components.svg',
  './assets/visuals/implants/implant_in_bone_section.svg',
  './assets/visuals/implants/implant_treatment_steps.svg',
  './assets/visuals/implants/osseointegration.svg',
  './assets/visuals/implants/implant_vs_bridge.svg',
  './assets/visuals/surgery/wisdom_tooth_extraction.svg',
  './assets/visuals/surgery/extraction_socket_healing.svg',
  './assets/visuals/prosthetics/dental_crown_on_tooth.svg',
  './assets/visuals/prosthetics/dental_bridge.svg',
  './assets/visuals/hygiene/plaque_accumulation_zones.svg',
  './assets/visuals/radiology/what_is_opg.svg'
];

// v5.1: Use Promise.allSettled — if one optional asset fails (icon missing),
// SW still installs successfully instead of breaking the whole PWA.
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then(async c => {
      await Promise.all(
        ASSETS.map(asset =>
          c.add(asset).catch(err => console.warn('Cache skip:', asset, err.message))
        )
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);
  // Never cache API calls
  if (url.hostname.includes('anthropic.com') ||
      url.hostname.includes('openai.com') ||
      url.hostname.includes('googleapis.com') ||
      url.hostname.includes('perplexity.ai')) {
    return;
  }
  if (url.origin !== self.location.origin) return;

  // Network-first for navigation so app updates are picked up faster.
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).catch(() => caches.match('./index.html')));
    return;
  }

  // Cache-first for static assets, but cache only valid same-origin 200 responses.
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(resp => {
      if (!resp || resp.status !== 200 || resp.type !== 'basic') return resp;
      const copy = resp.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return resp;
    }))
  );
});
