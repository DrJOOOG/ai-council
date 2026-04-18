const CACHE = 'ai-council-v1';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './icon.svg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
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
  const url = new URL(e.request.url);
  // Never cache API calls
  if (url.hostname.includes('anthropic.com') ||
      url.hostname.includes('openai.com') ||
      url.hostname.includes('googleapis.com') ||
      url.hostname.includes('perplexity.ai')) {
    return;
  }
  // Cache-first for our own assets
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(e.request).then(hit => hit || fetch(e.request).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return resp;
      }).catch(() => caches.match('./index.html')))
    );
  }
});
