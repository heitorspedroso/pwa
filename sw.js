this.addEventListener('install', function(event) {
    console.log('install' , event)
    event.waitUntil(
        caches.open('v2').then(function(cache) {
            return cache.addAll([
                '/pwa/',
                '/pwa/index.html',
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
                return caches.open('v2').then(function(cache) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});

this.addEventListener('activate', function(event) {
    var cacheWhitelist = ['v2'];
    console.log('activate',event)
    event.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (cacheWhitelist.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
});