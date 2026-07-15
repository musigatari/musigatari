/* ============================================================
   SERVICE WORKER — Musigatari v2
   Cambia 'musigatari-v2' a 'musigatari-v3' cada vez que
   subas una actualización para que los celulares la descarguen.
   ============================================================ */
const CACHE = 'musigatari-v2';

const ARCHIVOS = [
  './',
  './Acordes_08.html',
  './manifest.json',
  './config/config.js',
  './config/icon.svg',
  './config/qr.svg',
  './config/explicacion.html',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => cached);
    })
  );
});
