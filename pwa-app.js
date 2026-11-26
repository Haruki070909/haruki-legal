(() => {
  if (window.__haruPwaInitialized) return;
  window.__haruPwaInitialized = true;

  let deferredInstallPrompt = null;
  let navProgressTimer = null;
  const prefetchedUrls = new Set();

  const isStandalone = () =>
    Boolean(
      (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) ||
        window.navigator.standalone === true
    );

  if (isStandalone()) {
    document.documentElement.classList.add("haru-pwa-standalone");
  }

  if (
    "serviceWorker" in navigator &&
    (location.protocol === "https:" || location.hostname === "127.0.0.1" || location.hostname === "localhost")
  ) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./sw.js", { scope: "./", updateViaCache: "none" })
        .then((reg) => {
          if (reg && typeof reg.update === "function") {
            reg.update().catch(() => {});
          }
        })
        .catch(() => {});
    });
  }

  function getActiveUiLang() {
    const pLang = localStorage.getItem("haruki_portal_lang");
    const dLang = localStorage.getItem("haruki_dash_lang");
    const docLang = (document.documentElement.lang || "").toLowerCase();
    const raw = (pLang || dLang || docLang || "vi").toLowerCase();
    return raw.startsWith("en") ? "en" : "vi";
  }

  function detectPlatform() {
    const ua = navigator.userAgent || "";
    const isIOS =
      /iPhone|iPad|iPod/i.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isAndroid = /Android/i.test(ua);
    return { isIOS, isAndroid };
  }

  function getCurrentRouteKey() {
    const p = (location.pathname || "").toLowerCase();
    if (p.includes("dashboard")) return "dashboard";
    if (p.includes("harubot") || p.includes("fishing")) return "harubot";
    if (p.includes("harumod")) return "harumod";
    return "home";
  }

  function prefetchUrl(href) {
    if (!href) return;
    let resolved;
    try {
      resolved = new URL(href, location.href).toString();
    } catch (_) {
      return;
    }
    if (prefetchedUrls.has(resolved)) return;
    prefetchedUrls.add(resolved);
    fetch(resolved, { credentials: "same-origin" }).catch(() => {
      prefetchedUrls.delete(resolved);
    });
  }

  function injectPwaStyles() {
    if (document.getElementById("haru-pwa-styles")) return;
    const style = document.createElement("style");
    style.id = "haru-pwa-styles";
    style.textContent = `
      @keyframes haruFastPageFade {
        from { opacity: 0.92; }
        to { opacity: 1; }
      }
      main, .hero-portal, #config-suite {
        animation: haruFastPageFade 0.11s ease-out;
      }

      /* Standalone Safe-Area Top Header Clearance */
      .haru-pwa-standalone .navbar,
      .haru-pwa-standalone .dash-topbar {
        padding-top: env(safe-area-inset-top, 0px) !important;
        padding-bottom: 0 !important;
        height: calc(60px + env(safe-area-inset-top, 0px)) !important;
        min-height: calc(60px + env(safe-area-inset-top, 0px)) !important;
        background: #070913 !important;
        box-sizing: border-box !important;
      }
      .haru-pwa-standalone .portal-mobile-drawer {
        top: calc(60px + env(safe-area-inset-top, 0px)) !important;
        background: #0b0f19 !important;
      }

      .haru-install-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: #111827;
        border: 1.5px solid #38bdf8;
        color: #e0f2fe;
        padding: 10px 18px;
        border-radius: 12px;
        font-size: 0.92rem;
        font-weight: 700;
        cursor: pointer;
        transition: background 0.16s ease, border-color 0.16s ease, transform 0.12s ease;
        text-decoration: none;
        line-height: 1.2;
      }
      .haru-install-btn:hover {
        background: #17253d;
        border-color: #7dd3fc;
        color: #ffffff;
        transform: translateY(-1px);
      }
      .haru-install-btn svg {
        width: 18px;
        height: 18px;
        fill: none;
        stroke: currentColor;
        stroke-width: 2.1;
        stroke-linecap: round;
        stroke-linejoin: round;
        flex-shrink: 0;
      }
      .haru-pwa-standalone [data-haru-install-app] {
        display: none !important;
      }

      /* Top Loading Shimmer Bar */
      #haru-nav-progress {
        position: fixed;
        top: 0;
        left: 0;
        height: 2.5px;
        width: 0%;
        background: #38bdf8;
        box-shadow: 0 0 8px rgba(56, 189, 248, 0.55);
        z-index: 10040;
        opacity: 0;
        pointer-events: none;
        transition: width 0.25s ease, opacity 0.15s ease;
      }
      #haru-nav-progress.active {
        opacity: 1;
        width: 78%;
      }

      /* Install App Modal */
      #haru-pwa-install-modal {
        position: fixed;
        inset: 0;
        background: rgba(3, 6, 14, 0.84);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        z-index: 10050;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 18px;
        box-sizing: border-box;
      }
      #haru-pwa-install-modal.open {
        display: flex;
      }
      .haru-pwa-card {
        width: 100%;
        max-width: 430px;
        background: #111622;
        border: 1.5px solid #2e3951;
        border-radius: 16px;
        padding: 22px;
        box-shadow: 0 24px 64px rgba(0, 0, 0, 0.88);
        color: #f8fafc;
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      .haru-pwa-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 16px;
      }
      .haru-pwa-identity {
        display: flex;
        align-items: center;
        gap: 14px;
        min-width: 0;
      }
      .haru-pwa-icon {
        width: 60px;
        height: 60px;
        border-radius: 15px;
        border: 1.5px solid #38bdf8;
        object-fit: cover;
        flex-shrink: 0;
        background: #070b18;
      }
      .haru-pwa-title {
        margin: 0;
        font-size: 1.08rem;
        font-weight: 800;
        color: #ffffff;
        line-height: 1.25;
      }
      .haru-pwa-origin {
        margin-top: 3px;
        font-size: 0.78rem;
        color: #94a3b8;
        font-weight: 600;
      }
      .haru-pwa-close {
        background: #171e2e;
        border: 1px solid #334155;
        color: #cbd5e1;
        width: 32px;
        height: 32px;
        border-radius: 9px;
        font-size: 1.2rem;
        line-height: 1;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .haru-pwa-close:hover {
        background: #1e293b;
        color: #ffffff;
      }
      .haru-pwa-lead {
        margin: 0 0 14px 0;
        font-size: 0.87rem;
        line-height: 1.55;
        color: #cbd5e1;
      }
      .haru-pwa-steps {
        display: flex;
        flex-direction: column;
        gap: 9px;
        margin: 0 0 18px 0;
        padding: 0;
        list-style: none;
      }
      .haru-pwa-step {
        display: flex;
        align-items: center;
        gap: 10px;
        background: #0c101b;
        border: 1.5px solid #242d40;
        border-radius: 11px;
        padding: 10px 12px;
        font-size: 0.84rem;
        line-height: 1.45;
        color: #e2e8f0;
      }
      .haru-pwa-step-num {
        width: 24px;
        height: 24px;
        border-radius: 7px;
        background: rgba(56, 189, 248, 0.14);
        border: 1px solid rgba(56, 189, 248, 0.4);
        color: #7dd3fc;
        font-size: 0.78rem;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .haru-pwa-footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
        padding-top: 12px;
        border-top: 1.5px solid #222b3e;
      }
      .haru-pwa-btn-ok {
        background: #38bdf8;
        border: 1.5px solid #0284c7;
        color: #062133;
        font-weight: 800;
        font-size: 0.86rem;
        padding: 9px 18px;
        border-radius: 9px;
        cursor: pointer;
      }
      .haru-pwa-btn-ok:hover {
        background: #7dd3fc;
      }

      /* Mobile 120FPS Optimization & Universal Safe-Area Header Clearance */
      @media (max-width: 900px) {
        html, body {
          overflow-x: clip !important;
        }
        html {
          -webkit-tap-highlight-color: transparent;
        }
        body {
          padding-top: calc(60px + env(safe-area-inset-top, 0px)) !important;
        }
        a, button {
          touch-action: manipulation;
        }
        html body *,
        html body *::before,
        html body *::after,
        html body .bot-card,
        html body .panel-card,
        html body .config-card,
        html body .server-card,
        html body .dash-section-card,
        html body .glass,
        html body .glass-card {
          -webkit-backdrop-filter: none !important;
          backdrop-filter: none !important;
        }
        #cyber-canvas,
        .glow,
        .bg-orb,
        .ambient-orb,
        .hero-glow {
          display: none !important;
        }
        #haru-pwa-install-modal,
        .dyno-modal-overlay {
          background: rgba(3, 6, 14, 0.90) !important;
        }
        main > section,
        .bot-card,
        .panel-card {
          content-visibility: auto;
          contain-intrinsic-size: auto 420px;
        }
        html body .navbar,
        html body .dash-topbar {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          z-index: 1000 !important;
          -webkit-backdrop-filter: none !important;
          backdrop-filter: none !important;
          padding-top: env(safe-area-inset-top, 0px) !important;
          padding-bottom: 0 !important;
          height: calc(60px + env(safe-area-inset-top, 0px)) !important;
          min-height: calc(60px + env(safe-area-inset-top, 0px)) !important;
          background: #070913 !important;
          box-sizing: border-box !important;
        }
        html body .navbar .navbar-content {
          height: 60px !important;
          align-items: center !important;
        }
        html body .portal-mobile-drawer {
          top: calc(60px + env(safe-area-inset-top, 0px)) !important;
          background: #0b0f19 !important;
        }
      }

      /* Mobile App Bottom Dock */
      #haru-app-dock {
        display: none;
      }
      @media (max-width: 768px) {
        body {
          padding-bottom: calc(76px + env(safe-area-inset-bottom, 0px)) !important;
        }
        #sticky-save-bar,
        .save-bar,
        .sticky-save-bar {
          bottom: calc(76px + env(safe-area-inset-bottom, 0px)) !important;
        }
        #haru-app-dock {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 4px;
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 950;
          background: #0b0f19;
          transform: translate3d(0, 0, 0);
          will-change: transform;
          border-top: 1.5px solid #263147;
          padding: 6px 8px calc(6px + env(safe-area-inset-bottom, 0px)) 8px;
          box-sizing: border-box;
        }
        .haru-dock-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          padding: 6px 4px;
          border-radius: 10px;
          text-decoration: none;
          color: #94a3b8;
          font-size: 0.69rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
          user-select: none;
          transition: background 0.16s ease, border-color 0.16s ease, color 0.16s ease, transform 0.14s ease;
          border: 1px solid transparent;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        .haru-dock-item:active {
          transform: scale(0.93);
        }
        .haru-dock-item svg {
          width: 19px;
          height: 19px;
          fill: none;
          stroke: currentColor;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .haru-dock-item.active {
          background: rgba(56, 189, 248, 0.14);
          border-color: rgba(56, 189, 248, 0.38);
          color: #38bdf8;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function ensureNavProgressBar() {
    let bar = document.getElementById("haru-nav-progress");
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "haru-nav-progress";
      bar.setAttribute("aria-hidden", "true");
      document.body.appendChild(bar);
    }
    return bar;
  }

  function startNavProgressDelayed() {
    clearTimeout(navProgressTimer);
    navProgressTimer = setTimeout(() => {
      const bar = ensureNavProgressBar();
      bar.classList.remove("active");
      void bar.offsetWidth;
      bar.classList.add("active");
    }, 60);
  }

  function resetNavProgressAndDock() {
    clearTimeout(navProgressTimer);
    const bar = document.getElementById("haru-nav-progress");
    if (bar) bar.classList.remove("active");

    const curKey = getCurrentRouteKey();
    document.querySelectorAll("#haru-app-dock .haru-dock-item").forEach((el) => {
      el.classList.toggle("active", el.getAttribute("data-dock-key") === curKey);
    });
  }

  function ensureInstallModal() {
    let overlay = document.getElementById("haru-pwa-install-modal");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "haru-pwa-install-modal";
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeInstallModal();
      });
      overlay.innerHTML = `
        <div class="haru-pwa-card" role="dialog" aria-modal="true" aria-labelledby="haru-pwa-modal-title">
          <div class="haru-pwa-head">
            <div class="haru-pwa-identity">
              <img src="./icons/haru-app-icon-192.png" alt="Haru Ecosystem" class="haru-pwa-icon">
              <div>
                <h3 id="haru-pwa-modal-title" class="haru-pwa-title">Haru Ecosystem</h3>
                <div class="haru-pwa-origin">haruki070909.github.io &bull; App Mode</div>
              </div>
            </div>
            <button type="button" id="haru-pwa-close-x" class="haru-pwa-close" aria-label="Close">&times;</button>
          </div>
          <p id="haru-pwa-lead" class="haru-pwa-lead"></p>
          <ol id="haru-pwa-steps" class="haru-pwa-steps"></ol>
          <div class="haru-pwa-footer">
            <button type="button" id="haru-pwa-ok-btn" class="haru-pwa-btn-ok"></button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);
      document.getElementById("haru-pwa-close-x").addEventListener("click", closeInstallModal);
      document.getElementById("haru-pwa-ok-btn").addEventListener("click", closeInstallModal);
    }

    const lang = getActiveUiLang();
    const { isIOS, isAndroid } = detectPlatform();
    const leadEl = document.getElementById("haru-pwa-lead");
    const stepsEl = document.getElementById("haru-pwa-steps");
    const okBtn = document.getElementById("haru-pwa-ok-btn");

    let steps = [];
    if (lang === "vi") {
      if (isIOS) {
        leadEl.textContent = "Cài Haru Ecosystem ra màn hình chính iPhone/iPad để mở toàn màn hình như ứng dụng gốc:";
        steps = [
          "Nhấn biểu tượng <strong>Chia sẻ (Share)</strong> ở thanh công cụ Safari.",
          "Cuộn xuống và chọn <strong>Thêm vào Màn hình chính (Add to Home Screen)</strong>.",
          "Giữ tên <strong>Haru Ecosystem</strong> và nhấn <strong>Thêm (Add)</strong>."
        ];
      } else if (isAndroid) {
        leadEl.textContent = "Cài Haru Ecosystem thành ứng dụng trên Android để truy cập HaruBot & HaruMod Dashboard nhanh 1 chạm:";
        steps = [
          "Nhấn menu <strong>&#8942;</strong> ở góc trên bên phải Chrome / trình duyệt.",
          "Chọn <strong>Cài đặt ứng dụng (Install app)</strong> hoặc <strong>Thêm vào màn hình chính</strong>.",
          "Nhấn <strong>Cài đặt</strong> để đưa icon Haru ra màn hình chính."
        ];
      } else {
        leadEl.textContent = "Cài Haru Ecosystem thành ứng dụng độc lập (Windows / macOS) chạy cửa sổ riêng cực gọn:";
        steps = [
          "Bấm biểu tượng <strong>Cài đặt App</strong> trên thanh địa chỉ Chrome/Edge hoặc mở menu <strong>&#8942; / &#8943;</strong>.",
          "Chọn <strong>Cài đặt Haru Ecosystem (Install Haru Ecosystem)</strong>.",
          "App sẽ có icon Haru riêng trên Desktop / Taskbar và mở không cần thanh trình duyệt."
        ];
      }
      okBtn.textContent = "Đã hiểu";
    } else {
      if (isIOS) {
        leadEl.textContent = "Add Haru Ecosystem to your iPhone/iPad Home Screen for a full-screen native app experience:";
        steps = [
          "Tap the <strong>Share</strong> button in the Safari toolbar.",
          "Scroll down and choose <strong>Add to Home Screen</strong>.",
          "Confirm <strong>Haru Ecosystem</strong> and tap <strong>Add</strong>."
        ];
      } else if (isAndroid) {
        leadEl.textContent = "Install Haru Ecosystem on Android for instant 1-tap access to HaruBot & HaruMod Dashboard:";
        steps = [
          "Tap the <strong>&#8942;</strong> menu button in the top-right corner of Chrome.",
          "Select <strong>Install app</strong> or <strong>Add to Home screen</strong>.",
          "Confirm <strong>Install</strong> to place Haru's icon on your launcher."
        ];
      } else {
        leadEl.textContent = "Install Haru Ecosystem as a standalone desktop app window on Chrome or Edge:";
        steps = [
          "Click the <strong>Install app</strong> icon in the address bar or open browser menu <strong>&#8942; / &#8943;</strong>.",
          "Choose <strong>Install Haru Ecosystem</strong>.",
          "Launch directly from your Desktop or Taskbar cleanly without browser tabs."
        ];
      }
      okBtn.textContent = "Got it";
    }

    stepsEl.innerHTML = steps
      .map(
        (html, idx) =>
          `<li class="haru-pwa-step"><span class="haru-pwa-step-num">${idx + 1}</span><span>${html}</span></li>`
      )
      .join("");

    return overlay;
  }

  function openInstallModal() {
    const overlay = ensureInstallModal();
    overlay.classList.add("open");
  }

  function closeInstallModal() {
    const overlay = document.getElementById("haru-pwa-install-modal");
    if (overlay) overlay.classList.remove("open");
  }

  window.haruInstallApp = async function () {
    if (deferredInstallPrompt) {
      try {
        deferredInstallPrompt.prompt();
        await deferredInstallPrompt.userChoice;
      } catch (_) {}
      deferredInstallPrompt = null;
      return;
    }
    openInstallModal();
  };

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    document.querySelectorAll("[data-haru-install-app]").forEach((btn) => {
      btn.style.display = "inline-flex";
    });
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    closeInstallModal();
    document.documentElement.classList.add("haru-pwa-standalone");
  });

  function renderMobileAppDock() {
    if (document.getElementById("haru-app-dock")) return;
    const currentKey = getCurrentRouteKey();

    const items = [
      {
        key: "home",
        href: "./index.html",
        label: "Home",
        svg: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'
      },
      {
        key: "harubot",
        href: "./harubot.html",
        label: "HaruBot",
        svg: '<rect x="2" y="6" width="20" height="12" rx="6"/><circle cx="8" cy="12" r="1.6"/><circle cx="16" cy="12" r="1.6"/>'
      },
      {
        key: "harumod",
        href: "./harumod.html",
        label: "HaruMod",
        svg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'
      },
      {
        key: "dashboard",
        href: "./dashboard.html",
        label: "Dashboard",
        svg: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>'
      }
    ];

    const nav = document.createElement("nav");
    nav.id = "haru-app-dock";
    nav.setAttribute("aria-label", "Haru Ecosystem App Navigation");
    nav.innerHTML = items
      .map(
        (it) =>
          `<a href="${it.href}" class="haru-dock-item${it.key === currentKey ? " active" : ""}" data-dock-key="${it.key}"><svg viewBox="0 0 24 24">${it.svg}</svg><span>${it.label}</span></a>`
      )
      .join("");

    nav.querySelectorAll("a.haru-dock-item").forEach((a) => {
      const targetKey = a.getAttribute("data-dock-key");
      const targetHref = a.getAttribute("href");

      const warmTarget = () => {
        if (targetKey !== getCurrentRouteKey()) {
          prefetchUrl(targetHref);
        }
      };
      a.addEventListener("pointerdown", warmTarget, { passive: true });
      a.addEventListener("touchstart", warmTarget, { passive: true });

      a.addEventListener("click", (e) => {
        if (targetKey === getCurrentRouteKey()) {
          e.preventDefault();
          return;
        }
        const cfgSuite = document.getElementById("config-suite");
        const inConfig = cfgSuite && cfgSuite.classList.contains("active");
        if (
          inConfig &&
          typeof hasUnsavedChanges !== "undefined" &&
          hasUnsavedChanges &&
          typeof openUnsavedChangesGuard === "function"
        ) {
          e.preventDefault();
          const targetLabel = a.querySelector("span")?.textContent || "Page";
          openUnsavedChangesGuard({
            fromLabel: typeof getConfigTabDisplayTitle === "function" ? getConfigTabDisplayTitle(activeConfigTab) : "Dashboard",
            toLabel: targetLabel,
            onProceed: () => {
              hasUnsavedChanges = false;
              startNavProgressDelayed();
              location.href = targetHref;
            }
          });
          return;
        }

        // Instant optimistic active state so mobile tap feels immediate with 0ms lag
        nav.querySelectorAll(".haru-dock-item").forEach((btn) => {
          btn.classList.toggle("active", btn === a);
        });
        startNavProgressDelayed();
      });
    });

    document.body.appendChild(nav);

    // Pre-warm sibling pages silently on idle
    const warmSiblings = () => {
      const cur = getCurrentRouteKey();
      items.forEach((it) => {
        if (it.key !== cur) prefetchUrl(it.href);
      });
    };
    if (typeof requestIdleCallback === "function") {
      requestIdleCallback(warmSiblings, { timeout: 2500 });
    } else {
      setTimeout(warmSiblings, 1200);
    }
  }

  function disableHeavyMobileCanvas() {
    if (window.innerWidth <= 900) {
      const c = document.getElementById("cyber-canvas");
      if (c) {
        c.width = 0;
        c.height = 0;
      }
    }
  }

  function init() {
    injectPwaStyles();
    disableHeavyMobileCanvas();
    ensureNavProgressBar();
    renderMobileAppDock();
    window.addEventListener("pageshow", resetNavProgressAndDock);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeInstallModal();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
