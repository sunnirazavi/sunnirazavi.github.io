const CACHE_NAME = 'naat-cache-v2';
// Only cache critical assets (HTML, CSS, JS, and optimized thumbnails)
// Avoid pre-caching full audio files and assets served from jsDelivr to limit issues.
const ASSETS = [
  '/',
  '/index.html',
  '/sw.js',
  // Critical images (thumbnails) with versioning
  'Thumbnail/Kya%20Hi%20Zoq%20Afza%20Shafaat.jpeg?v=1.0',
  'Thumbnail/Zameen%20O%20Zaman%20Tumhare%20Liye.jpeg?v=1.0',
  'Thumbnail/Sir%20Taba%20Qadam.jpeg?v=1.0',
  'Thumbnail/Chaman%20E%20Taiba%20Mein%20Sumbul.jpeg?v=1.0',
  'Thumbnail/Dekhni%20Hai%20Hashr%20Mein.jpeg?v=1.0',
  'Thumbnail/Sachi%20Baat%20Sikhatey%20Ye%20Hain.jpeg?v=1.0',
  'Thumbnail/Hajiyon%20Aao.jpeg?v=1.0',
  'Thumbnail/Lutf%20Unka%20Aam.jpeg?v=1.0',
  'Thumbnail/Bakhte%20Khufta%20Ne.jpeg?v=1.0',
  'Thumbnail/Bakhte%20Khufta%20Ne%20-%202.jpeg?v=1.0',
  'Thumbnail/Har%20Waqt%20Tasawwar.jpeg?v=1.0',
  'Thumbnail/Zameen%20O%20Zaman%20Tumhare%20Liye%20-%202.jpeg?v=1.0',
  'Thumbnail/Sir%20Taba%20Qadam%20-%202.jpeg?v=1.0',
  'Thumbnail/Bakhte%20Khufta%20Ne%20-%203.jpeg?v=1.0',
  // External libraries (CDN) will not be cached to avoid playback issues:
  // 'https://cdn.jsdelivr.net/npm/fuse.js@6.6.2',
  // 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .catch(err => console.error('Error caching assets:', err))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Bypass caching for jsDelivr assets
  if (event.request.url.includes('cdn.jsdelivr.net')) {
    return event.respondWith(fetch(event.request));
  }
  
  // Stale-while-revalidate strategy for all other assets
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        const fetchPromise = fetch(event.request).then(networkResponse => {
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone());
          });
          return networkResponse;
        }).catch(() => response);
        return response || fetchPromise;
      })
  );
});