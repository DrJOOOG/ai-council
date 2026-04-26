const CACHE = 'ai-council-v6.7.2-beta';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './translations.js',
  './style.css',
  './manifest.json',
  './icon.svg',
  './icon-96.png',
  './icon-192.png',
  './icon-512.png',
  './maskable-icon-512.png',
  './splash-logo.png',
  './header-logo.png',
  './splash-tooth.png'
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
