if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/service-worker.js');
}

// let deferredPrompt;

// const installApp = document.getElementById('install-app');

// installApp.style.display = 'none';

// window.addEventListener('beforeinstallprompt', (e) => {
//     installApp.style.display = 'block';
//     deferredPrompt = e;
// });

// installApp.addEventListener('click', async () => {
//     if (deferredPrompt !== null && deferredPrompt !== undefined) {
//         deferredPrompt.prompt();
//         const { outcome } = await deferredPrompt.userChoice;
//         if (outcome === 'accepted') {
//             deferredPrompt = null;
//         }
//     }
// });