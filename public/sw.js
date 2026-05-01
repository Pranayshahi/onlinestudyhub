const CACHE = 'osh-v1';
const PRECACHE = ['/', '/classes', '/teachers', '/dashboard'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(PRECACHE.map(u => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const { request } = e;
  if (request.method !== 'GET') return;
  if (request.url.includes('/api/')) return;
  if (request.url.includes('chrome-extension')) return;

  e.respondWith(
    fetch(request)
      .then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(request, clone)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(request))
  );
});

self.addEventListener('push', e => {
  if (!e.data) return;
  let data;
  try { data = e.data.json(); } catch { data = { title: 'OnlineStudyHub', body: e.data.text() }; }
  e.waitUntil(
    self.registration.showNotification(data.title || 'OnlineStudyHub', {
      body: data.body || '',
      icon: '/favicon-192.png',
      badge: '/favicon-32.png',
      tag: data.tag || 'osh-notification',
      data: { url: data.url || '/' },
      vibrate: [200, 100, 200],
    })
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = e.notification.data?.url || '/';
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      const win = list.find(c => c.url === url && 'focus' in c);
      return win ? win.focus() : clients.openWindow(url);
    })
  );
});
