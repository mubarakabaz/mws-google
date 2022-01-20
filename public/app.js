window.addEventListener('load', e => {
  registerSW();
})

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (error) {
      alert('Service worker register failed');
    }
  } else {
    console.log('No service worker');
  }
}
