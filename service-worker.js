const CACHE_NAME = 'cachacaria-v1';
const OFFLINE_URL = 'offline.html';

this.addEventListener('install', event => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            await cache.add(new Request(OFFLINE_URL, { cache: "reload" }));
        })()
    );
    self.skipWaiting();
})

this.addEventListener('activate', event => {
    console.log("Activate service worker");
})


this.addEventListener('fetch', event => {
    if(event.request.mode === 'navigate'){
        event.respondWith(
            fetch(event.request.url)
                .catch(_ => {
                    return caches.match(OFFLINE_URL);
                })
        )
    }
})