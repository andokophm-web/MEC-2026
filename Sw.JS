// Service worker minimal - hanya untuk memenuhi syarat PWA "installable"
// Tidak melakukan caching agresif agar data selalu dari sumber terbaru (Google Apps Script)

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Biarkan semua request langsung ke jaringan (tidak di-cache)
  event.respondWith(fetch(event.request).catch(() => new Response('Offline - periksa koneksi internet Anda.')));
});
