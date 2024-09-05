self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('carro-pwa-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/app.js',
                '/ferrari.jpg',
                '/tesla.jpg',
                '/lamborghini.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
