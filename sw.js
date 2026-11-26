const CACHE_NAME = "haru-ecosystem-v19";
const CORE_SHELL_ASSETS = [
  "./",
  "./index.html",
  "./harubot.html",
  "./fishing.html",
  "./fishing-pixel-icons.js?v=2",
  "./fishing-stage-engine.js?v=2",
  "./fishing-minigame.js?v=6",
  "./harumod.html",
  "./dashboard.html",
  "./shared.css",
  "./index-D1Nckd2P.js",
  "./index-Vs_wrV2D.css",
  "./manifest.webmanifest",
  "./fishing-manifest.webmanifest",
  "./pwa-app.js?v=6",
  "./haru-avatar.webp",
  "./harumod-avatar.png",
  "./icons/haru-app-icon-192.png",
  "./icons/haru-app-icon-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/fishing-app-icon-180.png",
  "./icons/fishing-app-icon-192.png",
  "./icons/fishing-app-icon-512.png",
  "./icons/fishing-app-icon-maskable-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) =>
        Promise.allSettled(
          CORE_SHELL_ASSETS.map((assetUrl) =>
            cache.add(new Request(assetUrl, { cache: "reload" })).catch(() => {})
          )
        )
      )
      .catch(() => {})
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
      .then(() => self.clients.matchAll({ type: "window", includeUncontrolled: true }))
      .then((clients) =>
        Promise.allSettled(
          clients.map((client) => {
            if (client.url && client.url.includes("fishing.html") && typeof client.navigate === "function") {
              return client.navigate(client.url).catch(() => {});
            }
            return Promise.resolve();
          })
        )
      )
  );
});

function updateCacheInBackground(request) {
  return fetch(request)
    .then((res) => {
      if (res && res.ok && res.type === "basic") {
        const copy = res.clone();
        const cacheKeyUrl = new URL(request.url);
        cacheKeyUrl.search = "";
        return caches
          .open(CACHE_NAME)
          .then((cache) => cache.put(cacheKeyUrl.toString(), copy))
          .then(() => res)
          .catch(() => res);
      }
      return res;
    })
    .catch(() => null);
}

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
    const hasOAuthParams =
      reqUrl.searchParams.has("code") ||
      reqUrl.searchParams.has("state") ||
      reqUrl.searchParams.has("error");

    // OAuth callbacks always hit network first
    if (hasOAuthParams) {
      event.respondWith(
        fetch(req)
          .then((res) => {
            if (res && res.ok && res.type === "basic") {
              const copy = res.clone();
              caches.open(CACHE_NAME).then((c) => c.put(reqUrl.origin + reqUrl.pathname, copy)).catch(() => {});
            }
            return res;
          })
          .catch(() => caches.match(req, { ignoreSearch: true }).then((c) => c || caches.match("./index.html")))
      );
      return;
    }

    // Network-first for HTML pages so installed PWAs always receive fresh updates
    event.respondWith(
      fetch(req.url, { cache: "no-cache" })
        .then((res) => {
          if (res && res.ok && res.type === "basic") {
            const copy = res.clone();
            const cacheKeyUrl = new URL(req.url);
            cacheKeyUrl.search = "";
            caches.open(CACHE_NAME).then((c) => c.put(cacheKeyUrl.toString(), copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => caches.match(req, { ignoreSearch: true }).then((c) => c || caches.match("./index.html")))
    );
    return;
  }

  // Network-first for JS scripts (respecting query version tags) so updates load immediately
  if (reqUrl.pathname.endsWith(".js")) {
    event.respondWith(
      fetch(req.url, { cache: "no-cache" })
        .then((res) => {
          if (res && res.ok && res.type === "basic") {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Stale-while-revalidate for static assets (CSS, icons, avatars, manifest)
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((cached) => {
      const bgFetch = fetch(req)
        .then((res) => {
          if (res && res.ok && res.type === "basic") {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => cached);
      if (cached) {
        event.waitUntil(bgFetch);
        return cached;
      }
      return bgFetch;
    })
  );
});
