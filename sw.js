this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            console.log('install');
            return cache.addAll([
                '/pwa/',
                '/pwa/index.html',
                '/pwa/sw.js',
                '/pwa/register.js',
            ]);
        })
    );
});

this.addEventListener('fetch', function(event) {
    console.log('[SW] fetch ' + event.request.url)
    event.respondWith(
        caches.match(event.request).then(function(resp) {
            return resp || fetch(event.request).then(function(response) {
                return caches.open('v1').then(function(cache) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});