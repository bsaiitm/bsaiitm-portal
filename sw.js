// v1.0.0
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('the-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/styles/gridalf.css',
        '/styles/markdown.css',
        '/scripts/gridalf.js',
        '/scripts/main.js',
        '/scripts/remarkable.js',
        '/icons/fb.png',
        '/icons/icon.png',
        '/icons/insta.png',
        '/icons/menu50.png',
        '/fonts/gir.otf',
        '/fonts/hind.ttf'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
