const CACHE_NAME = "pwa-v1974";
var urlsToCache = [
    "/",
    "/nav.html",
    "/index.html",
    "/pages/home.html",
    "/pages/biodata.html",
    "/pages/gaya.html",
    "/pages/gallery.html",
    "/css/materialize.min.css",
    "/js/materialize.min.js",
    "/js/nav.js",
    "/css/style.css",
    "/manifest.json",
    "/logoWPA.png",
    "/pages/gambar/soeharto2.jpg",
    "/pages/gambar/soeharto3.jpg",
    "/Footer.html",
    "/pages/gambar/habibie2.jpg",
    "/pages/gambar/habibie3.jpg",
    "/pages/gambar/gusdur.jpg",
    "/pages/gambar/gusdur2.jpg",
    "/pages/gambar/gusdur3.jpg",
    "/pages/gambar/magawati.jpg",
    "/pages/gambar/megawati2.jpg",
    "/pages/gambar/megawati1.jpg",
    "/pages/gambar/sby1.jpg",
    "/pages/gambar/sby2.png",
    "/pages/gambar/jokowi.jpg",
    "/pages/gambar/jokowi2.jpg",
    "/pages/gambar/jokowi.png",
    "/pages/gambar/sby3.jpeg",
    "/pages/gambar/soek.jpg",
    "/pages/gambar/soekarno3.jpg",
    "/pages/gambar/soekarno3.jpeg",
    "/pages/gambar/soekarno6.jpg",
    "/pages/gambar/soekorno4.jpg",
    "/pages/gambar/soekarno5.jpg",
    "/pages/gambar/h1.jpeg",
    "/pages/gambar/h2.jpg",
    "/pages/gambar/h3.jpg",
    "/pages/gambar/h4.jpeg",
    "/pages/gambar/b1.jpg",
    "/pages/gambar/b2.jpg",
    "/pages/gambar/b3.jpg",
    "/pages/gambar/b4.jpeg",
    "/pages/gambar/a1.jpg",
    "/pages/gambar/a2.jpg",
    "/pages/gambar/a3.jpg",
    "/pages/gambar/a4.jpg",
    "/pages/gambar/m1.jpg",
    "/pages/gambar/m2.jpg",
    "/pages/gambar/m3.jpg",
    "/pages/gambar/m4.jpg",
    "/pages/gambar/y1.jpeg",
    "/pages/gambar/y2.jpg",
    "/pages/gambar/y3.jpeg",
    "/pages/gambar/y4.png",
    "/pages/gambar/j1.jpg",
    "/pages/gambar/j2.jpg",
    "/pages/gambar/j3.jpg",
    "/pages/gambar/j4.jpeg"

];
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        }));
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request, {
            cacName: CACHE_NAME
        }).then(function (response) {
            if (response) {
                console.log("ServiceWorker: Gunakan aset dari cache", response.url);
                return response;
            }

            console.log("ServiceWorker:Memuat aset dari server : ", event.request.url);
            return fetch(event.request);
        })
    );
});

self.addEventListener("activate", function (event) {
    event.waitUntil(caches.keys().then(function (cacheNames) {
        return Promise.all(cacheNames.map(function (cacheName) {
            if (cacheName != CACHE_NAME) {
                console.log("ServiceWorker: cache" + cacheName + "dihapus");
                return caches.delete(cacheName);
            }
        }));
    }));
});