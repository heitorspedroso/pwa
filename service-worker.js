let cacheVersion = 1
let cacheName = "web-workr-cache-"+cacheVersion
const pageToSave = "offline.html"

this.addEventListener('install', event => {
    console.log("Installing service worker");
})

this.addEventListener('activate', event => {
    console.log("Activate service worker");
})


this.addEventListener('fetch', event => {
    console.log("Fetching with service worker");
    if(event.request.mode === 'navigate'){
        console.log(event.request);
    }
})