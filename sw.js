const CACHE_NAME = "haru-ecosystem-v1";
const CORE_SHELL_ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./pwa-app.js",
  "./haru-avatar.webp",
  "./harumod-avatar.png",
  "./icons/haru-app-icon-192.png",
  "./icons/haru-app-icon-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_SHELL_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k.startsWith("haru-ecosystem-") && k !== CACHE_NAME)
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (!req || req.method !== "GET") return;

  let reqUrl;
  try {
    reqUrl = new URL(req.url);
  } catch (_) {
    return;
  }

  // Strictly only handle same-origin HTTP(S) requests; leave Discord/API/Gateway untouched
  if (reqUrl.origin !== self.location.origin) return;
  if (reqUrl.protocol !== "http:" && reqUrl.protocol !== "https:") return;

  const isHtmlNav =
    req.mode === "navigate" ||
    reqUrl.pathname.endsWith("/") ||
    reqUrl.pathname.endsWith(".html");

  if (isHtmlNav) {
    // Network-first for fresh HTML & OAuth callbacks, cache fallback offline
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.ok && res.type === "basic") {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() =>
          caches.match(req).then((cached) => cached || caches.match("./index.html"))
        )
    );
    return;
  }

  // Stale-while-revalidate for static assets (CSS, JS, icons, avatars, manifest)
  event.respondWith(
    caches.match(req).then((cached) => {
      const netFetch = fetch(req)
        .then((res) => {
          if (res && res.ok && res.type === "basic") {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => cached);
      return cached || netFetch;
    })
  );
});
