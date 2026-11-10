/* Service worker: o app abre mesmo sem internet.
   Estratégia "rede primeiro": quando há conexão, sempre busca a versão mais nova;
   sem conexão, usa a cópia salva. */
const CACHE = "kai-cpa20-v1";
const ARQUIVOS = [
  "./", "./index.html", "./manifest.webmanifest",
  "./assets/css/style.css", "./assets/js/app.js", "./assets/js/ferramentas.js",
  "./data/conteudo.js", "./data/cronograma.js", "./data/flashcards.js",
  "./data/questoes-b1.js", "./data/questoes-b2.js", "./data/questoes-b3.js", "./data/questoes-b4.js",
  "./assets/icons/icon-192.png", "./assets/icons/icon-512.png", "./assets/icons/apple-touch-icon.png", "./assets/icons/favicon-32.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res.ok && new URL(e.request.url).origin === location.origin) {
          const copia = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copia));
        }
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("./index.html")))
  );
});
