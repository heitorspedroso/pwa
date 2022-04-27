let cacheVersion = 1
let cacheName = "web-workr-cache-"+cacheVersion
const pageToSave = "offline.html"

this.addEventListener('install', event => {
    console.log("Installing service worker");
    event.waitUntil(caches.open(cacheName)
        .then((openCache) => {
            return openCache.add(pageToSave)
        })
        .catch(err => console.log(err)))
})

this.addEventListener('activate', event => {
    console.log("Activate service worker");
})


this.addEventListener('fetch', event => {
    console.log("Fetching with service worker");
    if(event.request.mode === 'navigate'){
        console.log(event.request);
        event.respondWith(
            fetch(event.request.url)
                .catch(_ => {
                    console.log("Catch request url");
                })
        )
    }
})