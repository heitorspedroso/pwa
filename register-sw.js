if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
    navigator.serviceWorker.register('files/service-worker.js', {
        scope: './'
    }).then(function(registration) {
        if (typeof registration.update == 'function') {
            registration.update();
        }
    }).catch(function(e) {
        console.error('Error during service worker registration:', e);
    });
}

window.addEventListener('online', () => {
    window.location.reload();
});