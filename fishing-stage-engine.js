/* Haru Fishing RPG v2 - Panoramic 384x210 16-Bit Ocean Stage, Pier, Angler & Tiered VFX */
(function () {
  "use strict";

  const W = 384;
  const H = 210;
  const WATER_Y = 114;
  const BOBBER_X = 236;

  const BIOMES = {
    starter: {
      skyTop: "#071427",
      skyBot: "#123659",
      horizon: "#1f547a",
      waterTop: "#14486f",
      waterMid: "#0c314f",
      waterDeep: "#061b2f",
      seabed: "#183044",
      crest: "#6fdbbf",
      shimmer: "#7ec8d9",
      accent: "#ecc570",
      lantern: "#ffd166",
      hat: "#c9964c",
      coat: "#226f8f",
      ambientType: "firefly_gold"
    },
    swamp: {
      skyTop: "#071614",
      skyBot: "#133128",
      horizon: "#1b4535",
      waterTop: "#16483b",
      waterMid: "#0d3229",
      waterDeep: "#061b16",
      seabed: "#132920",
      crest: "#6fdbbf",
      shimmer: "#a7f3d0",
      accent: "#86efac",
      lantern: "#86efac",
      hat: "#4b7f52",
      coat: "#245746",
      ambientType: "swamp_gas"
    },
    ice: {
      skyTop: "#07162d",
      skyBot: "#163e69",
      horizon: "#2b6591",
      waterTop: "#195884",
      waterMid: "#0e385a",
      waterDeep: "#071d33",
      seabed: "#1d4261",
      crest: "#b8f2ff",
      shimmer: "#ffffff",
      accent: "#7ec8d9",
      lantern: "#b8f2ff",
      hat: "#548cb8",
      coat: "#1f5f8f",
      ambientType: "ice_sparkle"
    },
    volcanic: {
      skyTop: "#17080f",
      skyBot: "#381218",
      horizon: "#541c21",
      waterTop: "#381421",
      waterMid: "#220c15",
      waterDeep: "#12060c",
      seabed: "#260f14",
      crest: "#f45b69",
      shimmer: "#ecc570",
      accent: "#fb923c",
      lantern: "#fb923c",
      hat: "#7a2e2e",
      coat: "#9a3412",
      ambientType: "ember"
    },
    abyss: {
      skyTop: "#03050f",
      skyBot: "#09132c",
      horizon: "#112247",
      waterTop: "#081b3d",
      waterMid: "#051028",
      waterDeep: "#020714",
      seabed: "#0c1530",
      crest: "#7ec8d9",
      shimmer: "#c6a4e2",
      accent: "#6fdbbf",
      lantern: "#6fdbbf",
      hat: "#334155",
      coat: "#1d3557",
      ambientType: "bio_orb"
    },
    astral: {
      skyTop: "#08051a",
      skyBot: "#201347",
      horizon: "#35206b",
      waterTop: "#1f1552",
      waterMid: "#130c36",
      waterDeep: "#08041d",
      seabed: "#1d144a",
      crest: "#c6a4e2",
      shimmer: "#fff4b8",
      accent: "#6fdbbf",
      lantern: "#c6a4e2",
      hat: "#6b46c1",
      coat: "#3b237a",
      ambientType: "stardust"
    }
  };

  function resolveBiomeKey(islandId, islandName) {
    const s = ((islandId || "") + " " + (islandName || "")).toLowerCase();
    if (s.includes("swamp") || s.includes("l\u1ea7y") || s.includes("ng\u1eadp") || s.includes("mangrove")) return "swamp";
    if (s.includes("ice") || s.includes("frost") || s.includes("b\u0103ng") || s.includes("tuy\u1ebft") || s.includes("arctic") || s.includes("glacier")) return "ice";
    if (s.includes("volcan") || s.includes("lava") || s.includes("n\u00fai l\u1eeda") || s.includes("obsidian") || s.includes("magma") || s.includes("dung nham")) return "volcanic";
    if (s.includes("abyss") || s.includes("v\u1ef1c") || s.includes("deep") || s.includes("trench") || s.includes("shadow") || s.includes("h\u1eafc")) return "abyss";
    if (s.includes("astral") || s.includes("cosmic") || s.includes("tinh v\u00e2n") || s.includes("v\u0169 tr\u1ee5") || s.includes("nebula") || s.includes("omega") || s.includes("celestial")) return "astral";
    return "starter";
  }

  function resolveWeatherKey(w) {
    if (!w) return "calm";
    const s = ((w.id || w.weather_id || "") + " " + (w.name || "") + " " + (w.emoji || "")).toLowerCase();
    if (s.includes("blood") || s.includes("m\u00e1u") || s.includes("\u{1F315}") || s.includes("\u{1FA78}") || s.includes("\u{1F311}")) return "blood";
    if (s.includes("storm") || s.includes("thunder") || s.includes("b\u00e3o") || s.includes("s\u00e9t") || s.includes("\u26C8") || s.includes("\u26A1")) return "storm";
    if (s.includes("rain") || s.includes("m\u01b0a") || s.includes("\u{1F327}") || s.includes("\u{1F326}")) return "rain";
    if (s.includes("aurora") || s.includes("c\u1ef1c quang") || s.includes("\u{1F30C}")) return "aurora";
    if (s.includes("meteor") || s.includes("sao b\u0103ng") || s.includes("\u2604") || s.includes("\u{1F320}")) return "meteor";
    if (s.includes("fog") || s.includes("mist") || s.includes("s\u01b0\u01a1ng") || s.includes("\u{1F32B}")) return "fog";
    if (s.includes("snow") || s.includes("b\u0103ng") || s.includes("tuy\u1ebft") || s.includes("\u2744")) return "snow";
    if (s.includes("wind") || s.includes("gi\u00f3") || s.includes("\u{1F4A8}")) return "wind";
    if (s.includes("sun") || s.includes("n\u1eafng") || s.includes("\u2600")) return "sun";
    return "calm";
  }

  const state = {
    canvas: null,
    ctx: null,
    flashEl: null,
    wrapEl: null,
    rafId: 0,
    lastTs: 0,
    time: 0,
    biome: "starter",
    weather: "calm",
    mode: "idle", // idle | casting | hooked | challenge | reveal | escaped
    modeTimer: 0,
    hookColor: "#7ec8d9",
    hookRank: 1,
    burstTimer: 0,
    burstDuration: 1.8,
    burstRank: 1,
    burstColor: "#6fdbbf",
    burstValue: 0,
    burstRays: false,
    burstLightning: false,
    burstPrismatic: false,
    flashAlpha: 0,
    flashColor: "#ffffff",
    leapFish: null,
    stars: [],
    clouds: [],
    fishBg: [],
    bubbles: [],
    weeds: [],
    ambient: [],
    weatherParts: [],
    burstParts: [],
    rings: [],
    popups: [],
    lightning: null
  };

  function seedEntities() {
    state.stars = [];
    for (let i = 0; i < 54; i++) {
      state.stars.push({
        x: Math.floor((i * 73 + 19) % W),
        y: Math.floor((i * 31 + 6) % (WATER_Y - 14)),
        phase: i * 0.65,
        size: i % 11 === 0 ? 2 : 1
      });
    }
    state.clouds = [
      { x: 64, y: 22, w: 34, sp: 3.2 },
      { x: 184, y: 15, w: 46, sp: 2.2 },
      { x: 292, y: 28, w: 30, sp: 4.1 }
    ];
    state.fishBg = [];
    const cols = ["#1d5a7a", "#266e8f", "#2f85a6", "#3996b8", "#184661", "#48a6c4"];
    for (let i = 0; i < 7; i++) {
      state.fishBg.push({
        x: 60 + (i * 53) % (W - 70),
        y: WATER_Y + 18 + (i * 11) % (H - WATER_Y - 34),
        vx: (i % 2 === 0 ? 1 : -1) * (9 + (i % 3) * 5),
        size: i % 3 === 0 ? 2 : 1,
        rareShadow: i === 6,
        color: cols[i % cols.length]
      });
    }
    state.bubbles = [];
    for (let i = 0; i < 12; i++) {
      state.bubbles.push({
        x: 84 + (i * 27) % (W - 96),
        y: WATER_Y + 14 + (i * 13) % (H - WATER_Y - 20),
        vy: 10 + (i % 4) * 4,
        phase: i * 0.8
      });
    }
    state.weeds = [];
    for (let i = 0; i < 9; i++) {
      state.weeds.push({
        x: 82 + i * 33 + (i % 2) * 8,
        h: 16 + (i % 4) * 7,
        phase: i * 0.9
      });
    }
    state.ambient = [];
    for (let i = 0; i < 24; i++) {
      state.ambient.push({
        x: (i * 47 + 11) % W,
        y: 12 + (i * 23) % (H - 22),
        vy: -5 - (i % 4) * 3,
        vx: ((i % 3) - 1) * 4,
        phase: i * 1.15
      });
    }
    state.weatherParts = [];
    for (let i = 0; i < 48; i++) {
      state.weatherParts.push({
        x: Math.random() * W,
        y: Math.random() * WATER_Y,
        len: 4 + (i % 4) * 2,
        sp: 82 + (i % 5) * 18
      });
    }
  }
  seedEntities();

  function pxRect(ctx, x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
  }

  function formatCompact(n) {
    const v = Math.round(Number(n || 0));
    if (v >= 1000000) return (v / 1000000).toFixed(1) + "M";
    return v.toLocaleString("en-US");
  }

  function drawSkyAndBackdrop(ctx, b, t) {
    const bands = 6;
    const bh = Math.ceil(WATER_Y / bands);
    for (let i = 0; i < bands; i++) {
      const ratio = i / (bands - 1);
      ctx.fillStyle = ratio < 0.35 ? b.skyTop : (ratio < 0.78 ? b.skyBot : b.horizon);
      ctx.fillRect(0, i * bh, W, bh + 1);
    }

    // Stars
    const starAlpha = state.biome === "astral" ? 0.96 : (state.biome === "volcanic" ? 0.32 : 0.78);
    for (let i = 0; i < state.stars.length; i++) {
      const s = state.stars[i];
      const tw = (Math.sin(t * 2.3 + s.phase) + 1) * 0.5;
      if (tw < 0.25) continue;
      ctx.globalAlpha = starAlpha * (0.4 + tw * 0.6);
      ctx.fillStyle = state.biome === "astral" && i % 3 === 0 ? "#c6a4e2" : (i % 5 === 0 ? "#ecc570" : "#e2f1ff");
      ctx.fillRect(s.x, s.y, s.size, s.size);
    }
    ctx.globalAlpha = 1;

    // Celestial Body
    if (state.weather === "blood") {
      pxRect(ctx, 294, 14, 30, 30, "#a92536");
      pxRect(ctx, 298, 11, 22, 36, "#a92536");
      pxRect(ctx, 296, 16, 26, 26, "#f45b69");
      pxRect(ctx, 301, 20, 7, 6, "#ff9aa2");
      pxRect(ctx, 311, 29, 6, 5, "#a92536");
    } else if (state.weather === "sun") {
      pxRect(ctx, 304, 15, 22, 22, "#ecc570");
      pxRect(ctx, 308, 19, 14, 14, "#fff4b8");
    } else if (state.biome === "astral") {
      pxRect(ctx, 290, 18, 26, 26, "#7e4bb8");
      pxRect(ctx, 294, 22, 18, 18, "#c6a4e2");
      pxRect(ctx, 297, 24, 8, 5, "#e2c7f7");
      pxRect(ctx, 276, 31, 54, 3, "#ecc570");
    } else {
      pxRect(ctx, 308, 15, 16, 16, b.shimmer);
      pxRect(ctx, 313, 15, 11, 11, b.skyBot);
    }

    // Soft pixel clouds
    if (state.biome !== "abyss" && state.weather !== "storm") {
      ctx.fillStyle = state.biome === "volcanic" ? "rgba(244, 91, 105, 0.14)" : "rgba(184, 242, 255, 0.10)";
      for (let i = 0; i < state.clouds.length; i++) {
        const c = state.clouds[i];
        pxRect(ctx, c.x, c.y, c.w, 4, ctx.fillStyle);
        pxRect(ctx, c.x + 5, c.y - 3, c.w - 10, 3, ctx.fillStyle);
      }
    }

    // Distant horizon landmarks (right/mid-right framing)
    if (state.biome === "starter") {
      pxRect(ctx, 280, WATER_Y - 9, 62, 9, "#0b243b");
      pxRect(ctx, 294, WATER_Y - 15, 36, 6, "#113654");
      pxRect(ctx, 308, WATER_Y - 31, 3, 16, "#5c381a");
      pxRect(ctx, 299, WATER_Y - 35, 21, 5, "#2ea88d");
      pxRect(ctx, 302, WATER_Y - 32, 15, 3, "#6fdbbf");
      // Lighthouse on far point
      pxRect(ctx, 348, WATER_Y - 29, 8, 29, "#1c3c5a");
      pxRect(ctx, 349, WATER_Y - 22, 6, 4, "#e2e8f0");
      pxRect(ctx, 347, WATER_Y - 33, 10, 4, "#f45b69");
      if (Math.sin(t * 3.5) > 0) {
        pxRect(ctx, 350, WATER_Y - 31, 4, 2, "#fff4b8");
      }
    } else if (state.biome === "swamp") {
      pxRect(ctx, 260, WATER_Y - 28, 86, 28, "#0a1f1a");
      pxRect(ctx, 272, WATER_Y - 38, 48, 12, "#153d30");
      pxRect(ctx, 326, WATER_Y - 34, 40, 14, "#123428");
      pxRect(ctx, 288, WATER_Y - 26, 2, 18, "#2ea88d");
      pxRect(ctx, 336, WATER_Y - 20, 2, 14, "#6fdbbf");
    } else if (state.biome === "ice") {
      pxRect(ctx, 130, WATER_Y - 18, 46, 18, "#173d5e");
      pxRect(ctx, 142, WATER_Y - 27, 22, 9, "#7ec8d9");
      pxRect(ctx, 280, WATER_Y - 30, 56, 30, "#1d4b73");
      pxRect(ctx, 292, WATER_Y - 42, 32, 12, "#7ec8d9");
      pxRect(ctx, 300, WATER_Y - 48, 16, 6, "#e0f7ff");
    } else if (state.biome === "volcanic") {
      pxRect(ctx, 130, WATER_Y - 16, 86, 16, "#1f090f");
      pxRect(ctx, 144, WATER_Y - 32, 58, 16, "#260b13");
      pxRect(ctx, 158, WATER_Y - 48, 30, 16, "#2e0e17");
      pxRect(ctx, 164, WATER_Y - 50, 18, 5, "#f45b69");
      pxRect(ctx, 169, WATER_Y - 48, 8, 3, "#ecc570");
      pxRect(ctx, 172, WATER_Y - 45, 3, 30, "#f45b69");
      pxRect(ctx, 173, WATER_Y - 35, 2, 22, "#fb923c");
      pxRect(ctx, 318, WATER_Y - 24, 34, 24, "#1b080d");
    } else if (state.biome === "abyss") {
      pxRect(ctx, 292, WATER_Y - 36, 22, 36, "#061024");
      pxRect(ctx, 300, WATER_Y - 46, 8, 10, "#0b1a36");
      pxRect(ctx, 303, WATER_Y - 40, 2, 2, "#6fdbbf");
      pxRect(ctx, 336, WATER_Y - 26, 28, 26, "#061024");
      pxRect(ctx, 346, WATER_Y - 22, 2, 2, "#c6a4e2");
    } else if (state.biome === "astral") {
      pxRect(ctx, 142, WATER_Y - 29, 32, 6, "#2c1f6e");
      pxRect(ctx, 149, WATER_Y - 23, 18, 5, "#1b1247");
      pxRect(ctx, 152, WATER_Y - 42, 4, 13, "#c6a4e2");
      pxRect(ctx, 159, WATER_Y - 37, 4, 8, "#6fdbbf");
      pxRect(ctx, 322, WATER_Y - 24, 38, 6, "#2c1f6e");
      pxRect(ctx, 336, WATER_Y - 36, 5, 12, "#ecc570");
    }
  }

  function drawWeatherSky(ctx, t) {
    const w = state.weather;
    if (w === "aurora") {
      for (let x = 0; x < W; x += 4) {
        const yOff = Math.round(Math.sin(x * 0.035 + t * 1.8) * 8);
        const hBar = 16 + Math.round(Math.cos(x * 0.06 - t * 1.4) * 6);
        ctx.fillStyle = x % 12 === 0 ? "rgba(198,164,226,0.32)" : "rgba(111,219,191,0.34)";
        ctx.fillRect(x, 12 + yOff, 3, hBar);
      }
    } else if (w === "rain" || w === "storm") {
      ctx.fillStyle = w === "storm" ? "#b8f2ff" : "#7ec8d9";
      for (let i = 0; i < state.weatherParts.length; i++) {
        const p = state.weatherParts[i];
        const rx = Math.round(p.x);
        const ry = Math.round(p.y);
        ctx.fillRect(rx, ry, 1, p.len);
        ctx.fillRect(rx - 1, ry + 2, 1, Math.max(1, p.len - 2));
      }
      if (w === "storm" && state.lightning && state.lightning.life > 0) {
        ctx.fillStyle = "#fff4b8";
        let lx = state.lightning.x;
        for (let ly = 4; ly < WATER_Y; ly += 8) {
          const stp = ((ly * 13) % 10) - 5;
          ctx.fillRect(lx, ly, 2, 8);
          lx += stp;
        }
      }
    } else if (w === "snow") {
      ctx.fillStyle = "#e0f7ff";
      for (let i = 0; i < state.weatherParts.length; i++) {
        const p = state.weatherParts[i];
        const sz = i % 4 === 0 ? 2 : 1;
        ctx.fillRect(Math.round(p.x), Math.round(p.y), sz, sz);
      }
    } else if (w === "fog") {
      for (let row = 0; row < 4; row++) {
        const fx = ((t * (10 + row * 4) + row * 95) % (W + 140)) - 140;
        ctx.fillStyle = "rgba(203, 213, 225, 0.14)";
        ctx.fillRect(Math.round(fx), WATER_Y - 22 + row * 7, 150, 5);
      }
    } else if (w === "meteor") {
      for (let m = 0; m < 3; m++) {
        const cycle = (t * 0.75 + m * 1.1) % 2.4;
        if (cycle < 1.1) {
          const mx = W - cycle * 300 - m * 35;
          const my = 6 + cycle * 74 + m * 12;
          pxRect(ctx, mx, my, 4, 4, "#fff4b8");
          pxRect(ctx, mx + 4, my - 3, 5, 2, "#ecc570");
          pxRect(ctx, mx + 9, my - 5, 7, 1, "#f45b69");
        }
      }
    } else if (w === "wind") {
      ctx.fillStyle = "rgba(184, 242, 255, 0.36)";
      for (let i = 0; i < 7; i++) {
        const wx = ((t * 150 + i * 68) % (W + 60)) - 40;
        const wy = 20 + i * 12;
        ctx.fillRect(Math.round(wx), wy, 28, 1);
      }
    }
  }

  function drawPierAndAngler(ctx, b, t) {
    const deckY = WATER_Y - 9;

    // 1. Left-shore Biome Pier / Ledge (x = 0..76)
    if (state.biome === "ice") {
      pxRect(ctx, 0, deckY, 76, 8, "#7ec8d9");
      pxRect(ctx, 0, deckY + 8, 70, 12, "#285e85");
      pxRect(ctx, 18, deckY + 20, 6, 12, "#7ec8d9");
      pxRect(ctx, 50, deckY + 20, 8, 16, "#7ec8d9");
      pxRect(ctx, 0, deckY - 1, 74, 2, "#e0f7ff");
    } else if (state.biome === "volcanic") {
      pxRect(ctx, 0, deckY, 76, 12, "#2c1118");
      pxRect(ctx, 0, deckY + 12, 68, 22, "#1c090e");
      pxRect(ctx, 14, deckY + 6, 22, 2, "#f45b69");
      pxRect(ctx, 48, deckY + 14, 14, 2, "#fb923c");
    } else if (state.biome === "abyss") {
      pxRect(ctx, 0, deckY, 76, 6, "#1e293b");
      pxRect(ctx, 0, deckY + 3, 74, 1, "#6fdbbf");
      pxRect(ctx, 14, deckY + 6, 5, H - deckY, "#0f172a");
      pxRect(ctx, 60, deckY + 6, 5, H - deckY, "#0f172a");
    } else if (state.biome === "astral") {
      const hover = Math.round(Math.sin(t * 2.2) * 1.5);
      pxRect(ctx, 0, deckY + hover, 76, 7, "#3b237a");
      pxRect(ctx, 4, deckY + 7 + hover, 64, 5, "#23144d");
      pxRect(ctx, 8, deckY + hover, 64, 2, "#c6a4e2");
    } else {
      // Wooden Pier (starter & swamp with moss)
      pxRect(ctx, 0, deckY, 76, 5, "#6b4423");
      pxRect(ctx, 0, deckY + 5, 76, 2, "#3f2612");
      for (let px = 4; px < 74; px += 10) {
        pxRect(ctx, px, deckY, 1, 5, "#4d2f16");
      }
      pxRect(ctx, 14, deckY + 7, 5, H - deckY, "#3f2612");
      pxRect(ctx, 60, deckY + 7, 5, H - deckY, "#3f2612");
      if (state.biome === "swamp") {
        pxRect(ctx, 6, deckY, 14, 2, "#4ade80");
        pxRect(ctx, 56, deckY + 7, 4, 8, "#22c55e");
      }
    }

    // 2. Pier Lantern Post & Flicker Halo (x = 14)
    const lx = 14;
    const ly = deckY - 26;
    pxRect(ctx, lx, ly, 3, 26, "#1f2937");
    pxRect(ctx, lx + 2, ly, 9, 2, "#334155");
    pxRect(ctx, lx + 8, ly + 2, 5, 7, "#0f172a");
    const glowR = Math.sin(t * 9) > 0 ? 1 : 0;
    pxRect(ctx, lx + 9, ly + 4, 3, 4, b.lantern);
    ctx.fillStyle = b.lantern;
    ctx.globalAlpha = 0.14 + glowR * 0.05;
    ctx.fillRect(lx + 1, ly - 4, 19, 19);
    ctx.globalAlpha = 1;

    // 3. Pixel Angler on Pier Edge (x = 46..56, standing at deckY)
    let bobY = Math.round(Math.sin(t * 2.4) * 0.6);
    let leanX = 0;
    if (state.mode === "casting" && state.modeTimer < 0.14) leanX = -3;
    else if (state.mode === "casting") leanX = 2;
    else if (state.mode === "hooked" || state.mode === "challenge") {
      leanX = -2 + (Math.floor(t * 16) % 2);
      bobY = Math.floor(t * 12) % 2;
    } else if (state.mode === "reveal" && state.burstTimer > 0) {
      bobY = -2;
    }
    const ax = 46 + leanX;
    const ay = deckY - 19 + bobY;

    // Boots & Pants
    pxRect(ctx, ax + 1, ay + 15, 3, 4, "#1e293b");
    pxRect(ctx, ax + 6, ay + 15, 3, 4, "#1e293b");
    pxRect(ctx, ax + 1, ay + 11, 8, 4, "#334155");
    // Coat / Torso
    pxRect(ctx, ax + 1, ay + 6, 8, 6, b.coat);
    // Face & Skin
    pxRect(ctx, ax + 2, ay + 2, 6, 4, "#fed7aa");
    pxRect(ctx, ax + 6, ay + 3, 1, 1, "#0f172a");
    // Hat
    pxRect(ctx, ax - 1, ay + 1, 11, 2, b.hat);
    pxRect(ctx, ax + 1, ay - 2, 7, 3, b.hat);
    pxRect(ctx, ax + 1, ay, 7, 1, b.accent);
    // Outstretched hand holding rod
    const hx = ax + 9;
    const hy = ay + 8;
    pxRect(ctx, hx - 1, hy - 1, 3, 3, "#fed7aa");

    // 4. Articulated Pixel Fishing Rod
    let tipX = 104;
    let tipY = 58 + Math.round(Math.sin(t * 2.1) * 1.5);
    let bendY = 0;
    if (state.mode === "casting") {
      if (state.modeTimer < 0.14) {
        tipX = 20;
        tipY = 66;
      } else {
        const p = Math.min(1, (state.modeTimer - 0.14) / 0.36);
        tipX = Math.round(28 + p * 84);
        tipY = Math.round(62 - Math.sin(p * Math.PI) * 12);
      }
    } else if (state.mode === "hooked" || state.mode === "challenge") {
      tipX = 112 + Math.round(Math.sin(t * 22) * 3);
      tipY = 78 + Math.round(Math.cos(t * 18) * 3);
      bendY = 10;
    } else if (state.mode === "reveal" && state.burstTimer > 0) {
      tipX = 96;
      tipY = 44;
    }

    const rodSteps = 26;
    for (let s = 0; s <= rodSteps; s++) {
      const u = s / rodSteps;
      const arc = Math.sin(u * Math.PI) * (bendY - (state.mode === "hooked" ? 0 : 4));
      const rx = Math.round(hx + (tipX - hx) * u);
      const ry = Math.round(hy + (tipY - hy) * u + arc * u);
      ctx.fillStyle = s < 5 ? "#d97706" : (s > 22 ? "#ecc570" : "#94a3b8");
      ctx.fillRect(rx, ry, s < 5 ? 2 : 1, s < 5 ? 2 : 1);
    }

    return { tipX, tipY };
  }

  function drawWaterAndFish(ctx, b, t) {
    // Water depth strata
    pxRect(ctx, 0, WATER_Y, W, 24, b.waterTop);
    pxRect(ctx, 0, WATER_Y + 24, W, 32, b.waterMid);
    pxRect(ctx, 0, WATER_Y + 56, W, H - WATER_Y - 56, b.waterDeep);

    // Subtle underwater god-rays
    ctx.fillStyle = b.shimmer;
    for (let r = 0; r < 3; r++) {
      ctx.globalAlpha = 0.045;
      const rx0 = 110 + r * 85 + Math.round(Math.sin(t * 0.7 + r) * 6);
      for (let y = WATER_Y + 2; y < H - 10; y += 3) {
        ctx.fillRect(rx0 + Math.floor((y - WATER_Y) * 0.25), y, 16 + Math.floor((y - WATER_Y) * 0.15), 2);
      }
    }
    ctx.globalAlpha = 1;

    // Moon / Sun / Lantern surface reflections
    if (state.weather === "blood" || state.weather === "sun") {
      const col = state.weather === "blood" ? "rgba(244, 91, 105, 0.35)" : "rgba(255, 244, 184, 0.35)";
      for (let y = WATER_Y + 4; y < H - 16; y += 6) {
        const wob = Math.round(Math.sin(t * 4 + y) * 3);
        const rw = Math.max(4, 24 - Math.floor((y - WATER_Y) * 0.25));
        pxRect(ctx, 312 - rw / 2 + wob, y, rw, 2, col);
      }
    }
    // Lantern reflection below pier
    for (let y = WATER_Y + 4; y < WATER_Y + 38; y += 5) {
      const rw = Math.max(2, 10 - Math.floor((y - WATER_Y) * 0.2));
      ctx.fillStyle = b.lantern;
      ctx.globalAlpha = 0.26;
      ctx.fillRect(22 - rw / 2 + Math.round(Math.sin(t * 5 + y) * 2), y, rw, 2);
    }
    ctx.globalAlpha = 1;

    // Seabed + Swaying Seaweed / Corals / Vents
    pxRect(ctx, 0, H - 10, W, 10, b.seabed);
    for (let i = 0; i < state.weeds.length; i++) {
      const wd = state.weeds[i];
      for (let seg = 0; seg < wd.h; seg += 3) {
        const sway = Math.round(Math.sin(t * 2.2 + wd.phase + seg * 0.18) * (seg * 0.12));
        const col = state.biome === "volcanic"
          ? (seg > wd.h - 4 ? "#f45b69" : "#3a161c")
          : (state.biome === "astral"
            ? (seg % 6 === 0 ? "#c6a4e2" : "#3b237a")
            : (seg > wd.h - 4 ? b.crest : "#155e4c"));
        pxRect(ctx, wd.x + sway, H - 10 - seg - 3, 3, 3, col);
      }
    }

    // Underwater bubbles
    ctx.fillStyle = "#b8f2ff";
    for (let i = 0; i < state.bubbles.length; i++) {
      const bb = state.bubbles[i];
      ctx.globalAlpha = 0.45;
      ctx.fillRect(Math.round(bb.x + Math.sin(t * 3 + bb.phase) * 2), Math.round(bb.y), i % 3 === 0 ? 2 : 1, i % 3 === 0 ? 2 : 1);
    }
    ctx.globalAlpha = 1;

    // Animated shoreline wave crests
    const waveSpeed = state.weather === "storm" || state.weather === "wind" ? 5.6 : (state.mode === "hooked" || state.mode === "challenge" ? 4.8 : 2.1);
    for (let x = 0; x < W; x += 6) {
      const amp = state.weather === "storm" ? 2.5 : 1.5;
      const dy = Math.round(Math.sin(x * 0.07 + t * waveSpeed) * amp);
      pxRect(ctx, x, WATER_Y + dy, 6, 2, b.crest);
      if ((Math.floor(x / 6 + t * 2)) % 5 === 0) {
        pxRect(ctx, x + 1, WATER_Y + 9 + dy, 4, 1, b.shimmer);
      }
    }

    // Hooked underwater rarity aura
    if (state.mode === "hooked" || state.mode === "challenge") {
      const pulse = 0.18 + 0.14 * Math.sin(t * 9);
      ctx.fillStyle = state.hookColor || "#6fdbbf";
      ctx.globalAlpha = pulse;
      ctx.fillRect(BOBBER_X - 42, WATER_Y + 6, 84, 46);
      ctx.fillRect(BOBBER_X - 24, WATER_Y + 14, 48, 28);
      ctx.globalAlpha = 1;
    }

    // Swimming Pixel Fish Silhouettes (multi-depth)
    const tailFlip = Math.floor(t * 6) % 2;
    for (let i = 0; i < state.fishBg.length; i++) {
      const f = state.fishBg[i];
      const fx = Math.round(f.x);
      const fy = Math.round(f.y + Math.sin(t * 2 + i) * 1.4);
      const dir = f.vx >= 0 ? 1 : -1;
      const sc = f.size;
      ctx.fillStyle = f.rareShadow ? "#4b2c6e" : f.color;
      ctx.fillRect(fx - 3 * sc, fy, 6 * sc, 3 * sc);
      ctx.fillRect(fx - 1 * sc, fy - sc, 3 * sc, sc);
      const tx = dir > 0 ? fx - 5 * sc : fx + 3 * sc;
      ctx.fillRect(tx, fy + (tailFlip ? 0 : sc), 2 * sc, 2 * sc);
      if (state.biome === "abyss" || f.rareShadow) {
        ctx.fillStyle = f.rareShadow ? "#ecc570" : "#6fdbbf";
        ctx.fillRect(dir > 0 ? fx + 2 * sc : fx - 3 * sc, fy, 1, 1);
      }
    }

    // Ambient Biome Particles
    for (let i = 0; i < state.ambient.length; i++) {
      const a = state.ambient[i];
      const ax = Math.round(a.x + Math.sin(t * 2 + a.phase) * 3);
      const ay = Math.round(a.y);
      if (b.ambientType === "ember") {
        pxRect(ctx, ax, ay, 2, 2, i % 2 === 0 ? "#fb923c" : "#ecc570");
      } else if (b.ambientType === "swamp_gas" || b.ambientType === "firefly_gold") {
        if (Math.sin(t * 3 + a.phase) > -0.2) {
          pxRect(ctx, ax, ay, 2, 2, b.ambientType === "swamp_gas" ? "#6fdbbf" : "#fff4b8");
        }
      } else {
        const sz = i % 3 === 0 ? 2 : 1;
        pxRect(ctx, ax, ay, sz, sz, i % 2 === 0 ? b.crest : b.shimmer);
      }
    }
  }

  function drawLineAndBobber(ctx, rod, t) {
    let bx = BOBBER_X;
    let by = WATER_Y + Math.round(Math.sin(t * 3.1) * 1.6) - 2;
    let drawBobber = true;

    if (state.mode === "casting") {
      if (state.modeTimer < 0.14) {
        bx = rod.tipX;
        by = rod.tipY + 4;
      } else {
        const p = Math.min(1, (state.modeTimer - 0.14) / 0.36);
        bx = Math.round(rod.tipX + p * (BOBBER_X - rod.tipX));
        by = Math.round(rod.tipY - Math.sin(p * Math.PI) * 18 + p * (WATER_Y - rod.tipY));
      }
    } else if (state.mode === "hooked" || state.mode === "challenge") {
      bx = BOBBER_X + Math.round(Math.sin(t * 24) * 8);
      by = WATER_Y + Math.round(Math.abs(Math.cos(t * 16)) * 5);
    } else if (state.mode === "reveal" && state.burstTimer > 0) {
      by = WATER_Y - 10;
    } else if (state.mode === "escaped") {
      drawBobber = false;
      // Recoiling snapped red-white line back toward rod tip
      const p = Math.min(1, state.modeTimer / 0.65);
      const ex = Math.round(BOBBER_X - p * 95);
      const ey = Math.round(WATER_Y - Math.sin(p * Math.PI) * 28 - p * 10);
      ctx.fillStyle = "#f45b69";
      for (let s = 0; s <= 18; s++) {
        const u = s / 18;
        const px = Math.round(rod.tipX + (ex - rod.tipX) * u);
        const py = Math.round(rod.tipY + (ey - rod.tipY) * u + Math.sin(u * Math.PI * 3 + t * 18) * (4 * (1 - p)));
        ctx.fillRect(px, py, 1, 1);
      }
    }

    if (drawBobber) {
      // Fishing line from rod tip to bobber
      const x0 = rod.tipX, y0 = rod.tipY;
      const x1 = bx, y1 = by - 5;
      const steps = 32;
      ctx.fillStyle = (state.mode === "hooked" || state.mode === "challenge") ? "#fff4b8" : "#cbd5e1";
      for (let s = 0; s <= steps; s++) {
        const u = s / steps;
        const slack = (state.mode === "hooked" || state.mode === "challenge") ? 0 : Math.sin(u * Math.PI) * 12;
        const px = Math.round(x0 + (x1 - x0) * u);
        const py = Math.round(y0 + (y1 - y0) * u + slack);
        ctx.fillRect(px, py, 1, 1);
      }

      // Submerged leader line + bait hook below bobber
      if (state.mode === "idle" || state.mode === "hooked" || state.mode === "challenge") {
        const hookDepth = state.mode === "idle" ? 28 + Math.round(Math.sin(t * 2) * 2) : 22 + Math.round(Math.sin(t * 14) * 5);
        const hx = bx + (state.mode === "hooked" || state.mode === "challenge" ? Math.round(Math.cos(t * 18) * 5) : 0);
        const hy = Math.max(WATER_Y + 6, by + hookDepth);
        ctx.fillStyle = "rgba(184, 242, 255, 0.45)";
        ctx.fillRect(bx, by + 4, 1, Math.max(2, hy - by - 4));
        pxRect(ctx, hx - 1, hy, 3, 2, "#ecc570");
        pxRect(ctx, hx - 2, hy - 1, 1, 2, "#e2e8f0");
        if (state.mode === "hooked" || state.mode === "challenge") {
          // Fighting hooked fish tugging at bait
          pxRect(ctx, hx + 2, hy - 2, 10, 5, state.hookColor || "#6fdbbf");
          pxRect(ctx, hx + 11, hy - 3, 3, 7, state.hookColor || "#6fdbbf");
        }
      }

      // Crisp Pixel Bobber
      pxRect(ctx, bx - 4, by - 5, 8, 9, "#07111e");
      pxRect(ctx, bx - 3, by - 4, 6, 4, "#f45b69");
      pxRect(ctx, bx - 3, by, 6, 3, "#ffffff");
      pxRect(ctx, bx - 1, by - 7, 2, 2, "#ecc570");

      // Pixel "!" Bite Alert above bobber
      if (state.mode === "hooked" || state.mode === "challenge") {
        const jumpY = by - 21 - Math.round(Math.abs(Math.sin(t * 10)) * 3);
        pxRect(ctx, bx - 4, jumpY, 8, 11, "#ecc570");
        pxRect(ctx, bx - 3, jumpY + 1, 6, 9, "#7f1d1d");
        pxRect(ctx, bx - 1, jumpY + 2, 2, 4, "#fff4b8");
        pxRect(ctx, bx - 1, jumpY + 7, 2, 2, "#fff4b8");

        const spW = 7 + Math.floor((t * 22) % 14);
        pxRect(ctx, bx - spW, WATER_Y + 1, spW * 2, 1, "#ffffff");
        if (Math.floor(t * 16) % 2 === 0) {
          pxRect(ctx, bx - 9, by - 10, 2, 2, "#b8f2ff");
          pxRect(ctx, bx + 8, by - 11, 2, 2, "#b8f2ff");
        }
      }
    }
  }

  function drawBurstAndPopups(ctx, t) {
    // 1. Leaping Pixel Fish on Reveal
    if (state.leapFish && state.leapFish.life > 0) {
      const lf = state.leapFish;
      const p = 1 - Math.max(0, Math.min(1, lf.life / lf.maxLife));
      const arcY = Math.sin(p * Math.PI) * lf.height;
      const lx = Math.round(lf.startX - p * 46);
      const ly = Math.round(WATER_Y - 4 - arcY);
      const sc = lf.rank >= 6 ? 2 : 1;
      pxRect(ctx, lx - 6 * sc, ly - 3 * sc, 11 * sc, 6 * sc, lf.color);
      pxRect(ctx, lx - 3 * sc, ly - 5 * sc, 5 * sc, 2 * sc, lf.color);
      pxRect(ctx, lx + 5 * sc, ly - 4 * sc, 3 * sc, 8 * sc, lf.color);
      pxRect(ctx, lx - 4 * sc, ly - 1 * sc, 2 * sc, 2 * sc, "#ffffff");
      pxRect(ctx, lx - 3 * sc, ly - 1 * sc, 1 * sc, 1 * sc, "#07111e");
    }

    const progress = state.burstDuration > 0 ? Math.max(0, Math.min(1, state.burstTimer / state.burstDuration)) : 0;

    // 2. Rotating Pixel Sunburst Rays
    if (state.burstRays && state.burstTimer > 0) {
      const cx = BOBBER_X;
      const cy = WATER_Y - 34;
      ctx.save();
      ctx.globalAlpha = progress * 0.36;
      for (let a = 0; a < 8; a++) {
        const ang = t * 1.7 + (a * Math.PI) / 4;
        ctx.fillStyle = state.burstPrismatic
          ? ["#f45b69", "#ecc570", "#6fdbbf", "#7ec8d9", "#c6a4e2"][(a + Math.floor(t * 8)) % 5]
          : state.burstColor;
        for (let r = 8; r < 118; r += 4) {
          const rx = cx + Math.cos(ang) * r;
          const ry = cy + Math.sin(ang) * r * 0.72;
          const sz = Math.max(2, Math.floor(r * 0.13));
          ctx.fillRect(Math.round(rx - sz / 2), Math.round(ry - sz / 2), sz, sz);
        }
      }
      ctx.restore();
    }

    // 3. Sky Reveal Lightning
    if (state.burstLightning && state.burstTimer > state.burstDuration - 0.55) {
      let lx = BOBBER_X - 2;
      ctx.fillStyle = state.burstPrismatic ? "#fff4b8" : state.burstColor;
      for (let ly = 0; ly < WATER_Y + 8; ly += 7) {
        ctx.fillRect(lx, ly, 4, 7);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(lx + 1, ly, 2, 7);
        ctx.fillStyle = state.burstPrismatic ? "#c6a4e2" : state.burstColor;
        lx += ((ly % 14 === 0) ? -4 : 4);
      }
    }

    // 4. Shockwave Rings
    for (let i = 0; i < state.rings.length; i++) {
      const rg = state.rings[i];
      ctx.strokeStyle = rg.color;
      ctx.globalAlpha = Math.max(0, rg.life);
      ctx.lineWidth = 2;
      const rw = Math.round(rg.r * 2);
      const rh = Math.round(rg.r * 1.05);
      ctx.strokeRect(Math.round(rg.x - rg.r), Math.round(rg.y - rh / 2), rw, rh);
    }
    ctx.globalAlpha = 1;

    // 5. Burst Particles
    for (let i = 0; i < state.burstParts.length; i++) {
      const pt = state.burstParts[i];
      ctx.fillStyle = pt.color;
      ctx.globalAlpha = Math.max(0, Math.min(1, pt.life * 1.3));
      ctx.fillRect(Math.round(pt.x), Math.round(pt.y), pt.size, pt.size);
    }
    ctx.globalAlpha = 1;

    // 6. Floating Pixel Value / Outcome Popups
    if (state.popups.length) {
      ctx.save();
      ctx.font = "bold 12px 'VT323', monospace";
      ctx.textAlign = "center";
      for (let i = 0; i < state.popups.length; i++) {
        const pp = state.popups[i];
        ctx.globalAlpha = Math.max(0, Math.min(1, pp.life * 1.4));
        const px = Math.round(pp.x);
        const py = Math.round(pp.y);
        ctx.fillStyle = "#040811";
        ctx.fillText(pp.text, px + 1, py + 1);
        ctx.fillStyle = pp.color;
        ctx.fillText(pp.text, px, py);
      }
      ctx.restore();
    }
  }

  function step(dt) {
    state.time += dt;
    state.modeTimer += dt;
    if (state.burstTimer > 0) state.burstTimer = Math.max(0, state.burstTimer - dt);

    if (state.leapFish) {
      state.leapFish.life -= dt;
      if (state.leapFish.life <= 0) state.leapFish = null;
    }

    for (let i = 0; i < state.clouds.length; i++) {
      const c = state.clouds[i];
      c.x += c.sp * dt;
      if (c.x > W + 12) c.x = -c.w - 12;
    }

    for (let i = 0; i < state.fishBg.length; i++) {
      const f = state.fishBg[i];
      f.x += f.vx * dt;
      if (f.vx > 0 && f.x > W + 18) f.x = 58;
      if (f.vx < 0 && f.x < 56) f.x = W + 18;
    }

    for (let i = 0; i < state.bubbles.length; i++) {
      const bb = state.bubbles[i];
      bb.y -= bb.vy * dt;
      if (bb.y < WATER_Y + 4) {
        bb.y = H - 12;
        bb.x = 76 + ((bb.x + 41) % (W - 86));
      }
    }

    for (let i = 0; i < state.ambient.length; i++) {
      const a = state.ambient[i];
      a.y += a.vy * dt;
      a.x += a.vx * dt;
      if (a.y < 8) {
        a.y = H - 12;
        a.x = (a.x + 59) % W;
      }
      if (a.x < 0) a.x += W;
      if (a.x > W) a.x -= W;
    }

    const w = state.weather;
    if (w === "rain" || w === "storm" || w === "snow") {
      const spMul = w === "storm" ? 1.9 : (w === "snow" ? 0.3 : 1.0);
      const vxMul = w === "storm" ? -46 : (w === "snow" ? -9 : -18);
      for (let i = 0; i < state.weatherParts.length; i++) {
        const p = state.weatherParts[i];
        p.y += p.sp * spMul * dt;
        p.x += vxMul * dt;
        if (p.y > WATER_Y + 4) {
          p.y = -4;
          p.x = Math.random() * (W + 30);
        }
        if (p.x < -8) p.x += W + 16;
      }
      if (w === "storm") {
        if (!state.lightning || state.lightning.life <= 0) {
          if (Math.random() < dt * 0.45) {
            state.lightning = { x: 80 + Math.floor(Math.random() * (W - 110)), life: 0.14 };
          }
        } else {
          state.lightning.life -= dt;
        }
      }
    }

    for (let i = state.rings.length - 1; i >= 0; i--) {
      const rg = state.rings[i];
      rg.r += rg.speed * dt;
      rg.life -= dt * 1.35;
      if (rg.life <= 0) state.rings.splice(i, 1);
    }

    for (let i = state.burstParts.length - 1; i >= 0; i--) {
      const pt = state.burstParts[i];
      pt.vy += pt.gravity * dt;
      pt.x += pt.vx * dt;
      pt.y += pt.vy * dt;
      pt.life -= dt;
      if (pt.life <= 0) state.burstParts.splice(i, 1);
    }

    for (let i = state.popups.length - 1; i >= 0; i--) {
      const pp = state.popups[i];
      pp.y -= 24 * dt;
      pp.life -= dt;
      if (pp.life <= 0) state.popups.splice(i, 1);
    }

    if (state.flashEl) {
      if (state.flashAlpha > 0.01) {
        state.flashAlpha = Math.max(0, state.flashAlpha - dt * 2.2);
        state.flashEl.style.background = state.flashColor;
        state.flashEl.style.opacity = String(state.flashAlpha.toFixed(2));
      } else {
        state.flashEl.style.opacity = "0";
      }
    }
  }

  function renderFrame() {
    if (!state.canvas || !state.ctx) return;
    const ctx = state.ctx;
    const b = BIOMES[state.biome] || BIOMES.starter;
    ctx.imageSmoothingEnabled = false;
    drawSkyAndBackdrop(ctx, b, state.time);
    drawWeatherSky(ctx, state.time);
    drawWaterAndFish(ctx, b, state.time);
    const rod = drawPierAndAngler(ctx, b, state.time);
    drawLineAndBobber(ctx, rod, state.time);
    drawBurstAndPopups(ctx, state.time);
  }

  function loop(ts) {
    if (!state.canvas || !document.body.contains(state.canvas)) {
      state.rafId = 0;
      return;
    }
    if (!state.lastTs) state.lastTs = ts;
    const dt = Math.min(0.05, Math.max(0.001, (ts - state.lastTs) / 1000));
    state.lastTs = ts;
    step(dt);
    renderFrame();
    state.rafId = requestAnimationFrame(loop);
  }

  function addRing(x, y, color, speed) {
    state.rings.push({ x, y, color, speed: speed || 65, r: 4, life: 1.0 });
  }

  function addPopup(x, y, text, color, life) {
    if (!text) return;
    state.popups.push({ x, y, text, color: color || "#fff4b8", life: life || 1.6 });
  }

  function spawnParticles(count, colors, cx, cy, speed, grav, minLife, maxLife, maxSize) {
    for (let i = 0; i < count; i++) {
      const ang = -Math.PI + Math.random() * Math.PI * 2;
      const spd = (0.35 + Math.random() * 0.85) * speed;
      state.burstParts.push({
        x: cx,
        y: cy,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd - 26,
        gravity: grav,
        color: colors[i % colors.length],
        size: 1 + (i % (maxSize || 3)),
        life: minLife + Math.random() * (maxLife - minLife)
      });
    }
  }

  window.HaruOceanStage = {
    mount(canvasId, flashId, wrapId, cfg) {
      const cv = document.getElementById(canvasId || "px-ocean-canvas");
      if (!cv) {
        this.unmount();
        return;
      }
      if (state.canvas !== cv) {
        state.canvas = cv;
        state.ctx = cv.getContext("2d");
        state.lastTs = 0;
      }
      state.flashEl = document.getElementById(flashId || "px-stage-flash");
      state.wrapEl = document.getElementById(wrapId || "px-stage-wrap");
      if (cfg) this.setStageState(cfg);
      if (!state.rafId) {
        state.rafId = requestAnimationFrame(loop);
      }
    },

    unmount() {
      if (state.rafId) {
        cancelAnimationFrame(state.rafId);
        state.rafId = 0;
      }
      state.canvas = null;
      state.ctx = null;
    },

    setStageState(cfg) {
      if (!cfg) return;
      if (cfg.islandId || cfg.islandName) {
        state.biome = resolveBiomeKey(cfg.islandId, cfg.islandName);
      }
      if ("weather" in cfg) {
        state.weather = resolveWeatherKey(cfg.weather);
      }
      if (cfg.mode && cfg.mode !== state.mode) {
        state.mode = cfg.mode;
        state.modeTimer = 0;
        if (cfg.mode === "casting") {
          addRing(BOBBER_X, WATER_Y + 2, "#7ec8d9", 48);
          spawnParticles(10, ["#b8f2ff", "#ffffff"], BOBBER_X, WATER_Y, 40, 140, 0.35, 0.65, 2);
        }
      }
      if (cfg.rarityColor) state.hookColor = cfg.rarityColor;
      if (cfg.rarityRank) state.hookRank = cfg.rarityRank;
      renderFrame();
    },

    setMode(mode, extra) {
      this.setStageState(Object.assign({ mode }, extra || {}));
    },

    triggerEscape(label) {
      state.mode = "escaped";
      state.modeTimer = 0;
      state.burstTimer = 0.9;
      state.burstDuration = 0.9;
      state.burstRays = false;
      state.burstLightning = false;
      state.burstPrismatic = false;
      state.leapFish = null;
      addRing(BOBBER_X, WATER_Y, "#f45b69", 54);
      spawnParticles(18, ["#94a3b8", "#cbd5e1", "#f45b69"], BOBBER_X, WATER_Y - 6, 75, 110, 0.5, 0.95, 3);
      addPopup(BOBBER_X, WATER_Y - 18, label || "TU\u1ed8T D\u00c2Y!", "#fda4af", 1.7);
      state.flashColor = "#f45b69";
      state.flashAlpha = 0.24;
      const target = state.wrapEl || (state.canvas && state.canvas.parentElement);
      if (target) {
        target.classList.remove("stage-shake-sm", "stage-shake-lg");
        void target.offsetWidth;
        target.classList.add("stage-shake-sm");
      }
      renderFrame();
    },

    triggerCatchBurst(rarityId, rarityRank, rarityColor, value, hasMutation, fishLabel) {
      const rank = Number(rarityRank || 1);
      const val = Number(value || 0);
      const baseCol = rarityColor || "#7ec8d9";

      state.mode = "reveal";
      state.modeTimer = 0;
      state.burstRank = rank;
      state.burstColor = baseCol;
      state.burstValue = val;
      state.burstDuration = rank >= 8 ? 3.2 : (rank >= 5 ? 2.4 : 1.5);
      state.burstTimer = state.burstDuration;
      state.burstRays = rank >= 5 || val >= 50000;
      state.burstLightning = rank >= 6;
      state.burstPrismatic = rank >= 8 || Boolean(hasMutation && rank >= 5);

      state.leapFish = {
        startX: BOBBER_X,
        color: baseCol,
        rank,
        height: 28 + Math.min(34, rank * 3),
        life: 0.72,
        maxLife: 0.72
      };

      if (rank <= 2) {
        addRing(BOBBER_X, WATER_Y, baseCol, 46);
        spawnParticles(18, [baseCol, "#b8f2ff", "#ffffff"], BOBBER_X, WATER_Y - 4, 70, 130, 0.5, 0.9, 2);
      } else if (rank === 3) {
        addRing(BOBBER_X, WATER_Y, "#38bdf8", 72);
        spawnParticles(28, ["#38bdf8", "#b8f2ff", "#6fdbbf", "#ffffff"], BOBBER_X, WATER_Y - 8, 95, 115, 0.7, 1.25, 2);
      } else if (rank === 4) {
        addRing(BOBBER_X, WATER_Y - 18, "#c6a4e2", 86);
        addRing(BOBBER_X, WATER_Y, "#a855f7", 62);
        spawnParticles(36, ["#c6a4e2", "#a855f7", "#fff4b8", "#7ec8d9"], BOBBER_X, WATER_Y - 22, 110, 95, 0.85, 1.5, 3);
        state.flashColor = "#c6a4e2";
        state.flashAlpha = 0.25;
      } else if (rank === 5) {
        addRing(BOBBER_X, WATER_Y - 26, "#ecc570", 98);
        addRing(BOBBER_X, WATER_Y - 26, "#fff4b8", 68);
        spawnParticles(52, ["#fff4b8", "#ecc570", "#6fdbbf", "#ffffff"], BOBBER_X, WATER_Y - 28, 128, 85, 1.0, 1.9, 3);
        state.flashColor = "#fff4b8";
        state.flashAlpha = 0.36;
      } else if (rank <= 7) {
        addRing(BOBBER_X, WATER_Y - 30, "#f45b69", 112);
        addRing(BOBBER_X, WATER_Y - 30, "#ecc570", 80);
        spawnParticles(68, ["#f45b69", "#ecc570", "#ff9aa2", "#ffffff"], BOBBER_X, WATER_Y - 32, 148, 75, 1.2, 2.2, 3);
        state.flashColor = "#f45b69";
        state.flashAlpha = 0.48;
      } else {
        addRing(BOBBER_X, WATER_Y - 32, "#fff4b8", 132);
        addRing(BOBBER_X, WATER_Y - 32, "#c6a4e2", 96);
        addRing(BOBBER_X, WATER_Y - 32, "#6fdbbf", 70);
        spawnParticles(92, ["#fff4b8", "#6fdbbf", "#f45b69", "#c6a4e2", "#7ec8d9", "#ffffff"], BOBBER_X, WATER_Y - 32, 168, 65, 1.4, 2.6, 3);
        state.flashColor = "#ffffff";
        state.flashAlpha = 0.62;
      }

      if (val > 0) {
        addPopup(BOBBER_X, WATER_Y - 20, "+" + formatCompact(val) + " RC", val >= 50000 ? "#ecc570" : "#6fdbbf", 1.75);
      }
      if (fishLabel || rank >= 4) {
        addPopup(BOBBER_X, WATER_Y - 36, (fishLabel || String(rarityId || "RARE").toUpperCase() + "!"), baseCol, 1.9);
      }

      if (val >= 50000) {
        spawnParticles(24, ["#fff4b8", "#ecc570", "#b88424"], BOBBER_X, WATER_Y - 12, 110, 165, 0.9, 1.6, 3);
      }

      const target = state.wrapEl || (state.canvas && state.canvas.parentElement);
      if (target && rank >= 4) {
        const cls = rank >= 6 ? "stage-shake-lg" : "stage-shake-sm";
        target.classList.remove("stage-shake-sm", "stage-shake-lg");
        void target.offsetWidth;
        target.classList.add(cls);
      }
      renderFrame();
    }
  };
})();
