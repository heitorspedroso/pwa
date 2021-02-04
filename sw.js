var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/pwa/css/style.css',
];

self.addEventListener('install', function(event) {
    console.log('install' , event)
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});
//
// this.addEventListener('install', function(event) {
//     console.log('install' , event)
//     event.waitUntil(
//         caches.open('v1').then(function(cache) {
//             return cache.addAll([
//                 'index.html',
//                 'page.html',
//                 'sw.js',
//                 'register.js',
//                 'style.css',
//             ]);
//         })
//     );
// });

// this.addEventListener('fetch', function(event) {
//     console.log('fetch ' + event.request.url)
//     event.respondWith(
//         caches.match(event.request).then(function(resp) {
//             return resp || fetch(event.request).then(function(response) {
//                 return caches.open('v1').then(function(cache) {
//                     cache.put(event.request, response.clone());
//                     return response;
//                 });
//             });
//         })
//     );
// });
//
// this.addEventListener('activate', function(event) {
//     var cacheWhitelist = ['v1'];
//     console.log('activate',event)
//     event.waitUntil(
//         caches.keys().then(function(keyList) {
//             return Promise.all(keyList.map(function(key) {
//                 if (cacheWhitelist.indexOf(key) === -1) {
//                     console.log('Delete cache', key);
//                     return caches.delete(key);
//                 }
//             }));
//         })
//     );
// });