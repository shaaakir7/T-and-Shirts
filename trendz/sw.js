self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('shirt-store').then((cache) => cache.addAll([
      '/20/trendz/',
      '/20/trendz/index.html',
      '/20/trendz/index.js',
      '/20/trendz/style.css',
      '/20/trendz/images/hm1.webp',
      '/20/trendz/images/hm2.webp',
      '/20/trendz/images/hm4.webp',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});