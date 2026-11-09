console.log("Le fichier sw.js est chargé");

const CACHE = 'v1';
const FILES = ["./", "./index.html", "./src/master.css", "./Images/cat_and_none.png", "./manifest.json"];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e=> {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
