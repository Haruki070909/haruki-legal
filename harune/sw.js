// Harune Controlled Release Service Worker
// Does NOT force-reload users silently! Updates only activate when the user taps "Cập nhật ngay".
const APP_RELEASE_VERSION = "1.2.0";
const CACHE_NAME = `harune-release-${APP_RELEASE_VERSION}`;
const SHELL_ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/harune-logo.png",
  "./icons/apple-touch-icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => Promise.allSettled(SHELL_ASSETS.map((u) => cache.add(u))))
      .catch(() => {})
  );
  // IMPORTANT: Intentionally NO self.skipWaiting() here!
  // A newly published release waits calmly until the user clicks "Cập nhật ngay" in the app.
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter(
              (k) =>
                (k.startsWith("harune-release-") || k.startsWith("harune-pwa-")) &&
                k !== CACHE_NAME
            )
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Never intercept API calls, live release.json / server.json checks, audio range streams, or cross-origin media
  if (
    url.origin !== self.location.origin ||
    url.pathname.includes("/api/") ||
    url.pathname.endsWith("/release.json") ||
    url.pathname.endsWith("/server.json") ||
    req.headers.has("range")
  ) {
    return;
  }

  // Cache-First for pinned release shell & assets (keeps installed version rock-solid until user updates!)
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === "basic") {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, clone)).catch(() => {});
          }
          return res;
        })
        .catch(() => (req.mode === "navigate" ? caches.match("./index.html") : undefined));
    })
  );
});
