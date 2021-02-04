this.addEventListener('install', function(event) {
    console.log('install' , event)
    event.waitUntil(
        caches.open('v7').then(function(cache) {
            return cache.addAll([
                '/pwa/',
                '/pwa/index.html',
                '/pwa/page.html',
                '/pwa/sw.js',
                '/pwa/register.js',
                '/pwa/style.css',
            ]);
        })
    );
});

this.addEventListener('fetch', function(event) {
    console.log('fetch ' + event.request.url)
    event.respondWith(
        caches.match(event.request).then(function(resp) {
            return resp || fetch(event.request).then(function(response) {
                return caches.open('v7').then(function(cache) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});

this.addEventListener('activate', function(event) {
    var cacheWhitelist = ['v7'];
    console.log('activate',event)
    event.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (cacheWhitelist.indexOf(key) === -1) {
                    console.log('Delete cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
});

self.addEventListener('notificationclick', function(event) {
    console.log('On notification click: ', event);
    clients.openWindow('/');
});