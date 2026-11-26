/* Haru Fishing RPG - 16-Bit Pixel Biome, Weather & Catch Fireworks Canvas Stage */
(function () {
  "use strict";

  const W = 320;
  const H = 140;
  const WATER_Y = 82;

  const BIOMES = {
    starter: {
      skyTop: "#08162b",
      skyBot: "#123456",
      horizon: "#1d4e73",
      waterTop: "#134268",
      waterMid: "#0d2e4c",
      waterDeep: "#071a2e",
      crest: "#6fdbbf",
      shimmer: "#7ec8d9",
      accent: "#ecc570",
      ambientType: "firefly_gold"
    },
    swamp: {
      skyTop: "#081716",
      skyBot: "#143028",
      horizon: "#1c4234",
      waterTop: "#16463b",
      waterMid: "#0e3129",
      waterDeep: "#071b17",
      crest: "#6fdbbf",
      shimmer: "#a7f3d0",
      accent: "#86efac",
      ambientType: "swamp_gas"
    },
    ice: {
      skyTop: "#081830",
      skyBot: "#173d66",
      horizon: "#2b638f",
      waterTop: "#1a5680",
      waterMid: "#0f3758",
      waterDeep: "#071d33",
      crest: "#b8f2ff",
      shimmer: "#ffffff",
      accent: "#7ec8d9",
      ambientType: "ice_sparkle"
    },
    volcanic: {
      skyTop: "#170910",
      skyBot: "#361218",
      horizon: "#4f1b20",
      waterTop: "#361420",
      waterMid: "#220c15",
      waterDeep: "#12060c",
      crest: "#f45b69",
      shimmer: "#ecc570",
      accent: "#fb923c",
      ambientType: "ember"
    },
    abyss: {
      skyTop: "#040611",
      skyBot: "#0a132c",
      horizon: "#122147",
      waterTop: "#091b3d",
      waterMid: "#051028",
      waterDeep: "#020714",
      crest: "#7ec8d9",
      shimmer: "#c6a4e2",
      accent: "#6fdbbf",
      ambientType: "bio_orb"
    },
    astral: {
      skyTop: "#09061c",
      skyBot: "#201347",
      horizon: "#34206b",
      waterTop: "#1f1552",
      waterMid: "#130c36",
      waterDeep: "#09051f",
      crest: "#c6a4e2",
      shimmer: "#fff4b8",
      accent: "#6fdbbf",
      ambientType: "stardust"
    }
  };

  function resolveBiomeKey(islandId, islandName) {
    const s = ((islandId || "") + " " + (islandName || "")).toLowerCase();
    if (s.includes("swamp") || s.includes("lầy") || s.includes("ngập") || s.includes("mangrove")) return "swamp";
    if (s.includes("ice") || s.includes("frost") || s.includes("băng") || s.includes("tuyết") || s.includes("arctic") || s.includes("glacier")) return "ice";
    if (s.includes("volcan") || s.includes("lava") || s.includes("núi lửa") || s.includes("obsidian") || s.includes("magma") || s.includes("dung nham")) return "volcanic";
    if (s.includes("abyss") || s.includes("vực") || s.includes("deep") || s.includes("trench") || s.includes("shadow") || s.includes("hắc")) return "abyss";
    if (s.includes("astral") || s.includes("cosmic") || s.includes("tinh vân") || s.includes("vũ trụ") || s.includes("nebula") || s.includes("omega") || s.includes("celestial")) return "astral";
    return "starter";
  }

  function resolveWeatherKey(w) {
    if (!w) return "calm";
    const s = ((w.id || w.weather_id || "") + " " + (w.name || "") + " " + (w.emoji || "")).toLowerCase();
    if (s.includes("blood") || s.includes("máu") || s.includes("\u{1F315}") || s.includes("\u{1FA78}") || s.includes("\u{1F311}")) return "blood";
    if (s.includes("storm") || s.includes("thunder") || s.includes("bão") || s.includes("sét") || s.includes("\u26C8") || s.includes("\u26A1")) return "storm";
    if (s.includes("rain") || s.includes("mưa") || s.includes("\u{1F327}") || s.includes("\u{1F326}")) return "rain";
    if (s.includes("aurora") || s.includes("cực quang") || s.includes("\u{1F30C}")) return "aurora";
    if (s.includes("meteor") || s.includes("sao băng") || s.includes("\u2604") || s.includes("\u{1F320}")) return "meteor";
    if (s.includes("fog") || s.includes("mist") || s.includes("sương") || s.includes("\u{1F32B}")) return "fog";
    if (s.includes("snow") || s.includes("băng") || s.includes("tuyết") || s.includes("\u2744")) return "snow";
    if (s.includes("wind") || s.includes("gió") || s.includes("\u{1F4A8}")) return "wind";
    if (s.includes("sun") || s.includes("nắng") || s.includes("\u2600")) return "sun";
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
    mode: "idle", // idle | casting | hooked | challenge | reveal
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
    stars: [],
    fishBg: [],
    ambient: [],
    weatherParts: [],
    burstParts: [],
    rings: [],
    lightning: null
  };

  function seedEntities() {
    state.stars = [];
    for (let i = 0; i < 42; i++) {
      state.stars.push({
        x: Math.floor((i * 73 + 17) % W),
        y: Math.floor((i * 29 + 5) % (WATER_Y - 10)),
        phase: i * 0.7,
        size: i % 9 === 0 ? 2 : 1
      });
    }
    state.fishBg = [];
    const cols = ["#1d5a7a", "#266e8f", "#2f85a6", "#3996b8", "#184661"];
    for (let i = 0; i < 5; i++) {
      state.fishBg.push({
        x: (i * 67) % W,
        y: WATER_Y + 12 + (i * 9) % (H - WATER_Y - 18),
        vx: (i % 2 === 0 ? 1 : -1) * (8 + (i % 3) * 5),
        size: i % 3 === 0 ? 2 : 1,
        color: cols[i % cols.length]
      });
    }
    state.ambient = [];
    for (let i = 0; i < 18; i++) {
      state.ambient.push({
        x: (i * 43 + 11) % W,
        y: 14 + (i * 19) % (H - 22),
        vy: -5 - (i % 4) * 3,
        vx: ((i % 3) - 1) * 4,
        phase: i * 1.1
      });
    }
    state.weatherParts = [];
    for (let i = 0; i < 36; i++) {
      state.weatherParts.push({
        x: Math.random() * W,
        y: Math.random() * WATER_Y,
        len: 4 + (i % 4) * 2,
        sp: 75 + (i % 5) * 18
      });
    }
  }
  seedEntities();

  function pxRect(ctx, x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
  }

  function drawSkyAndBackdrop(ctx, b, t) {
    // 5-band stepped pixel gradient sky
    const bands = 5;
    const bh = Math.ceil(WATER_Y / bands);
    for (let i = 0; i < bands; i++) {
      const ratio = i / (bands - 1);
      ctx.fillStyle = ratio < 0.4 ? b.skyTop : (ratio < 0.8 ? b.skyBot : b.horizon);
      ctx.fillRect(0, i * bh, W, bh + 1);
    }

    // Stars (stronger in abyss/astral/starter/swamp)
    const starAlpha = state.biome === "astral" ? 0.95 : (state.biome === "volcanic" ? 0.35 : 0.72);
    for (let i = 0; i < state.stars.length; i++) {
      const s = state.stars[i];
      const tw = (Math.sin(t * 2.4 + s.phase) + 1) * 0.5;
      if (tw < 0.28) continue;
      ctx.globalAlpha = starAlpha * (0.4 + tw * 0.6);
      ctx.fillStyle = state.biome === "astral" && i % 3 === 0 ? "#c6a4e2" : (i % 5 === 0 ? "#ecc570" : "#e2f1ff");
      ctx.fillRect(s.x, s.y, s.size, s.size);
    }
    ctx.globalAlpha = 1;

    // Celestial & weather backdrop object
    if (state.weather === "blood") {
      // Crimson Blood Moon
      pxRect(ctx, 240, 12, 26, 26, "#a92536");
      pxRect(ctx, 243, 10, 20, 30, "#a92536");
      pxRect(ctx, 242, 14, 22, 22, "#f45b69");
      pxRect(ctx, 246, 17, 6, 5, "#ff9aa2");
      pxRect(ctx, 255, 25, 5, 5, "#a92536");
    } else if (state.weather === "sun") {
      pxRect(ctx, 248, 12, 18, 18, "#ecc570");
      pxRect(ctx, 251, 15, 12, 12, "#fff4b8");
    } else if (state.biome === "astral") {
      // Pixel ringed nebula planet
      pxRect(ctx, 236, 16, 22, 22, "#7e4bb8");
      pxRect(ctx, 239, 19, 16, 16, "#c6a4e2");
      pxRect(ctx, 242, 21, 7, 5, "#e2c7f7");
      pxRect(ctx, 226, 27, 42, 3, "#ecc570");
    } else {
      // Pixel crescent moon
      pxRect(ctx, 252, 12, 14, 14, b.shimmer);
      pxRect(ctx, 256, 12, 10, 10, b.skyBot);
    }

    // Biome Horizon Silhouettes
    if (state.biome === "starter") {
      // Distant coral islets + small palm tree on left
      pxRect(ctx, 18, WATER_Y - 8, 44, 8, "#0b2238");
      pxRect(ctx, 28, WATER_Y - 13, 24, 5, "#11334d");
      pxRect(ctx, 36, WATER_Y - 27, 3, 15, "#5c381a");
      pxRect(ctx, 28, WATER_Y - 30, 19, 4, "#2ea88d");
      pxRect(ctx, 30, WATER_Y - 28, 15, 3, "#6fdbbf");
      // Pier silhouette right
      pxRect(ctx, 276, WATER_Y - 7, 44, 3, "#3d2616");
      pxRect(ctx, 284, WATER_Y - 7, 3, 9, "#26170c");
      pxRect(ctx, 304, WATER_Y - 7, 3, 9, "#26170c");
    } else if (state.biome === "swamp") {
      // Twisted mangrove roots & hanging vines
      pxRect(ctx, 10, WATER_Y - 34, 6, 34, "#0b1f1a");
      pxRect(ctx, 4, WATER_Y - 40, 24, 9, "#153d30");
      pxRect(ctx, 22, WATER_Y - 31, 2, 16, "#2ea88d");
      pxRect(ctx, 6, WATER_Y - 12, 4, 12, "#0b1f1a");
      pxRect(ctx, 16, WATER_Y - 10, 4, 10, "#0b1f1a");
      pxRect(ctx, 266, WATER_Y - 26, 54, 26, "#0b1f1a");
      pxRect(ctx, 274, WATER_Y - 32, 36, 8, "#153d30");
    } else if (state.biome === "ice") {
      // Jagged icebergs
      pxRect(ctx, 16, WATER_Y - 24, 28, 24, "#23527a");
      pxRect(ctx, 22, WATER_Y - 34, 16, 10, "#7ec8d9");
      pxRect(ctx, 26, WATER_Y - 40, 8, 6, "#e0f7ff");
      pxRect(ctx, 120, WATER_Y - 16, 36, 16, "#1b4466");
      pxRect(ctx, 130, WATER_Y - 22, 16, 6, "#b8f2ff");
      pxRect(ctx, 274, WATER_Y - 20, 32, 20, "#23527a");
      pxRect(ctx, 282, WATER_Y - 28, 14, 8, "#b8f2ff");
    } else if (state.biome === "volcanic") {
      // Volcano silhouette + glowing magma core
      pxRect(ctx, 88, WATER_Y - 14, 68, 14, "#1e090f");
      pxRect(ctx, 98, WATER_Y - 28, 48, 14, "#240b12");
      pxRect(ctx, 108, WATER_Y - 42, 28, 14, "#2b0d15");
      pxRect(ctx, 114, WATER_Y - 44, 16, 5, "#f45b69");
      pxRect(ctx, 118, WATER_Y - 42, 8, 3, "#ecc570");
      pxRect(ctx, 121, WATER_Y - 38, 3, 24, "#f45b69");
      pxRect(ctx, 122, WATER_Y - 28, 2, 18, "#fb923c");
    } else if (state.biome === "abyss") {
      // Deep obsidian sea stacks
      pxRect(ctx, 8, WATER_Y - 30, 18, 30, "#071124");
      pxRect(ctx, 14, WATER_Y - 40, 8, 10, "#0b1a36");
      pxRect(ctx, 286, WATER_Y - 28, 22, 28, "#071124");
      pxRect(ctx, 290, WATER_Y - 36, 10, 8, "#0b1a36");
      pxRect(ctx, 17, WATER_Y - 34, 2, 2, "#6fdbbf");
    } else if (state.biome === "astral") {
      // Floating crystal island & aurora horizon glow
      pxRect(ctx, 42, WATER_Y - 26, 28, 6, "#2c1f6e");
      pxRect(ctx, 48, WATER_Y - 20, 16, 5, "#1b1247");
      pxRect(ctx, 50, WATER_Y - 38, 4, 12, "#c6a4e2");
      pxRect(ctx, 56, WATER_Y - 34, 4, 8, "#6fdbbf");
    }
  }

  function drawWeatherSky(ctx, t) {
    const w = state.weather;
    if (w === "aurora") {
      for (let x = 0; x < W; x += 4) {
        const yOff = Math.round(Math.sin(x * 0.04 + t * 1.8) * 7);
        const hBar = 14 + Math.round(Math.cos(x * 0.07 - t * 1.4) * 5);
        ctx.fillStyle = x % 12 === 0 ? "rgba(198,164,226,0.28)" : "rgba(111,219,191,0.3)";
        ctx.fillRect(x, 12 + yOff, 3, hBar);
      }
    } else if (w === "rain" || w === "storm") {
      ctx.fillStyle = w === "storm" ? "#b8f2ff" : "#7ec8d9";
      for (let i = 0; i < state.weatherParts.length; i++) {
        const p = state.weatherParts[i];
        const rx = Math.round(p.x);
        const ry = Math.round(p.y);
        ctx.fillRect(rx, ry, 1, p.len);
        ctx.fillRect(rx - 1, ry + 2, 1, p.len - 2);
      }
      if (w === "storm" && state.lightning && state.lightning.life > 0) {
        ctx.fillStyle = "#fff4b8";
        let lx = state.lightning.x;
        for (let ly = 4; ly < WATER_Y; ly += 8) {
          const step = ((ly * 13) % 10) - 5;
          ctx.fillRect(lx, ly, 2, 8);
          lx += step;
        }
      }
    } else if (w === "snow") {
      ctx.fillStyle = "#e0f7ff";
      for (let i = 0; i < state.weatherParts.length; i++) {
        const p = state.weatherParts[i];
        ctx.fillRect(Math.round(p.x), Math.round(p.y), i % 4 === 0 ? 2 : 1, i % 4 === 0 ? 2 : 1);
      }
    } else if (w === "fog") {
      for (let row = 0; row < 3; row++) {
        const fx = ((t * (10 + row * 4) + row * 90) % (W + 120)) - 120;
        ctx.fillStyle = "rgba(203, 213, 225, 0.14)";
        ctx.fillRect(Math.round(fx), WATER_Y - 18 + row * 7, 130, 5);
      }
    } else if (w === "meteor") {
      for (let m = 0; m < 2; m++) {
        const cycle = (t * 0.7 + m * 1.3) % 2.4;
        if (cycle < 1.1) {
          const mx = W - cycle * 260;
          const my = 6 + cycle * 65 + m * 14;
          pxRect(ctx, mx, my, 4, 4, "#fff4b8");
          pxRect(ctx, mx + 4, my - 3, 5, 2, "#ecc570");
          pxRect(ctx, mx + 9, my - 5, 6, 1, "#f45b69");
        }
      }
    } else if (w === "wind") {
      ctx.fillStyle = "rgba(184, 242, 255, 0.36)";
      for (let i = 0; i < 6; i++) {
        const wx = ((t * 140 + i * 70) % (W + 60)) - 40;
        const wy = 18 + i * 11;
        ctx.fillRect(Math.round(wx), wy, 24, 1);
      }
    }
  }

  function drawWaterAndFish(ctx, b, t) {
    // Base stepped depth water
    pxRect(ctx, 0, WATER_Y, W, 16, b.waterTop);
    pxRect(ctx, 0, WATER_Y + 16, W, 20, b.waterMid);
    pxRect(ctx, 0, WATER_Y + 36, W, H - WATER_Y - 36, b.waterDeep);

    // Blood moon / sun water shimmer reflection
    if (state.weather === "blood" || state.weather === "sun") {
      const col = state.weather === "blood" ? "rgba(244, 91, 105, 0.35)" : "rgba(255, 244, 184, 0.35)";
      for (let y = WATER_Y + 3; y < H - 4; y += 5) {
        const wob = Math.round(Math.sin(t * 4 + y) * 3);
        const rw = Math.max(4, 22 - Math.floor((y - WATER_Y) * 0.35));
        pxRect(ctx, 250 - rw / 2 + wob, y, rw, 2, col);
      }
    }

    // Animated stepped wave crests along shoreline
    const waveSpeed = state.weather === "storm" || state.weather === "wind" ? 5.5 : (state.mode === "hooked" || state.mode === "challenge" ? 4.8 : 2.1);
    for (let x = 0; x < W; x += 6) {
      const amp = state.weather === "storm" ? 2.5 : 1.5;
      const dy = Math.round(Math.sin(x * 0.08 + t * waveSpeed) * amp);
      pxRect(ctx, x, WATER_Y + dy, 6, 2, b.crest);
      if ((Math.floor(x / 6 + t * 2)) % 5 === 0) {
        pxRect(ctx, x + 1, WATER_Y + 8 + dy, 4, 1, b.shimmer);
      }
    }

    // Underwater hooked rarity aura glow when fighting fish
    if (state.mode === "hooked" || state.mode === "challenge") {
      const pulse = 0.16 + 0.14 * Math.sin(t * 9);
      ctx.fillStyle = state.hookColor || "#6fdbbf";
      ctx.globalAlpha = pulse;
      ctx.fillRect(126, WATER_Y + 4, 68, 34);
      ctx.fillRect(140, WATER_Y + 10, 40, 22);
      ctx.globalAlpha = 1;
    }

    // Pixel fish silhouettes swimming below surface
    const tailFlip = Math.floor(t * 6) % 2;
    for (let i = 0; i < state.fishBg.length; i++) {
      const f = state.fishBg[i];
      const fx = Math.round(f.x);
      const fy = Math.round(f.y + Math.sin(t * 2 + i) * 1.2);
      const dir = f.vx >= 0 ? 1 : -1;
      const sc = f.size;
      ctx.fillStyle = f.color;
      ctx.fillRect(fx - 3 * sc, fy, 6 * sc, 3 * sc);
      ctx.fillRect(fx - 1 * sc, fy - sc, 3 * sc, sc);
      // Tail
      const tx = dir > 0 ? fx - 5 * sc : fx + 3 * sc;
      ctx.fillRect(tx, fy + (tailFlip ? 0 : sc), 2 * sc, 2 * sc);
      if (state.biome === "abyss") {
        ctx.fillStyle = "#6fdbbf";
        ctx.fillRect(dir > 0 ? fx + 2 * sc : fx - 3 * sc, fy, 1, 1);
      }
    }

    // Ambient biome particles (fireflies / bubbles / embers / bio orbs)
    for (let i = 0; i < state.ambient.length; i++) {
      const a = state.ambient[i];
      const ax = Math.round(a.x + Math.sin(t * 2 + a.phase) * 3);
      const ay = Math.round(a.y);
      if (b.ambientType === "ember") {
        ctx.fillStyle = i % 2 === 0 ? "#fb923c" : "#ecc570";
        ctx.fillRect(ax, ay, 2, 2);
      } else if (b.ambientType === "swamp_gas" || b.ambientType === "firefly_gold") {
        if (Math.sin(t * 3 + a.phase) > -0.2) {
          ctx.fillStyle = b.ambientType === "swamp_gas" ? "#6fdbbf" : "#fff4b8";
          ctx.fillRect(ax, ay, 2, 2);
        }
      } else if (b.ambientType === "bio_orb" || b.ambientType === "stardust") {
        ctx.fillStyle = i % 2 === 0 ? b.crest : b.shimmer;
        ctx.fillRect(ax, ay, i % 3 === 0 ? 2 : 1, i % 3 === 0 ? 2 : 1);
      }
    }
  }

  function drawLineAndBobber(ctx, t) {
    let bx = 160;
    let by = WATER_Y + Math.round(Math.sin(t * 3.2) * 1.5) - 2;
    if (state.mode === "casting") {
      const p = Math.min(1, state.modeTimer / 0.45);
      bx = Math.round(270 - p * 110);
      by = Math.round(14 + Math.sin(p * Math.PI) * -10 + p * (WATER_Y - 14));
    } else if (state.mode === "hooked" || state.mode === "challenge") {
      bx = 160 + Math.round(Math.sin(t * 22) * 7);
      by = WATER_Y + Math.round(Math.abs(Math.cos(t * 15)) * 4);
    } else if (state.mode === "reveal" && state.burstTimer > 0) {
      by = WATER_Y - 8;
    }

    // Crisp pixel line from top-right rod tip (292, 6) to bobber
    const x0 = 292, y0 = 6;
    const x1 = bx, y1 = by - 4;
    const steps = 28;
    ctx.fillStyle = state.mode === "hooked" || state.mode === "challenge" ? "#fff4b8" : "#cbd5e1";
    for (let s = 0; s <= steps; s++) {
      const u = s / steps;
      const slack = state.mode === "hooked" || state.mode === "challenge" ? 0 : Math.sin(u * Math.PI) * 9;
      const px = Math.round(x0 + (x1 - x0) * u);
      const py = Math.round(y0 + (y1 - y0) * u + slack);
      ctx.fillRect(px, py, 1, 1);
    }

    // Draw Pixel Bobber (crimson & white with black outline)
    pxRect(ctx, bx - 4, by - 5, 8, 9, "#07111e");
    pxRect(ctx, bx - 3, by - 4, 6, 4, "#f45b69");
    pxRect(ctx, bx - 3, by, 6, 3, "#ffffff");
    pxRect(ctx, bx - 1, by - 7, 2, 2, "#ecc570");

    // Splash ripples around bobber when hooked or casting
    if (state.mode === "hooked" || state.mode === "challenge") {
      const spW = 6 + Math.floor((t * 20) % 12);
      pxRect(ctx, bx - spW, WATER_Y + 1, spW * 2, 1, "#ffffff");
      if (Math.floor(t * 16) % 2 === 0) {
        pxRect(ctx, bx - 8, by - 9, 2, 2, "#b8f2ff");
        pxRect(ctx, bx + 7, by - 10, 2, 2, "#b8f2ff");
      }
    }
  }

  function drawBurstEffects(ctx, t) {
    if (state.burstTimer <= 0 && !state.burstParts.length && !state.rings.length) return;

    const progress = state.burstDuration > 0 ? Math.max(0, Math.min(1, state.burstTimer / state.burstDuration)) : 0;

    // Rotating Pixel Sunburst Beams for Legendary+
    if (state.burstRays && state.burstTimer > 0) {
      const cx = 160;
      const cy = 62;
      ctx.save();
      ctx.globalAlpha = progress * 0.34;
      for (let a = 0; a < 8; a++) {
        const ang = t * 1.6 + (a * Math.PI) / 4;
        ctx.fillStyle = state.burstPrismatic
          ? ["#f45b69", "#ecc570", "#6fdbbf", "#7ec8d9", "#c6a4e2"][(a + Math.floor(t * 8)) % 5]
          : state.burstColor;
        for (let r = 8; r < 96; r += 4) {
          const rx = cx + Math.cos(ang) * r;
          const ry = cy + Math.sin(ang) * r * 0.7;
          const sz = Math.max(2, Math.floor(r * 0.14));
          ctx.fillRect(Math.round(rx - sz / 2), Math.round(ry - sz / 2), sz, sz);
        }
      }
      ctx.restore();
    }

    // Crimson/Prismatic Reveal Lightning Bolt
    if (state.burstLightning && state.burstTimer > state.burstDuration - 0.55) {
      let lx = 158;
      ctx.fillStyle = state.burstPrismatic ? "#fff4b8" : state.burstColor;
      for (let ly = 0; ly < WATER_Y + 6; ly += 6) {
        ctx.fillRect(lx, ly, 4, 6);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(lx + 1, ly, 2, 6);
        ctx.fillStyle = state.burstPrismatic ? "#c6a4e2" : state.burstColor;
        lx += ((ly % 12 === 0) ? -4 : 4);
      }
    }

    // Expanding Pixel Shockwave Rings
    for (let i = 0; i < state.rings.length; i++) {
      const rg = state.rings[i];
      ctx.strokeStyle = rg.color;
      ctx.globalAlpha = Math.max(0, rg.life);
      ctx.lineWidth = 2;
      const rw = Math.round(rg.r * 2);
      const rh = Math.round(rg.r * 1.1);
      ctx.strokeRect(Math.round(rg.x - rg.r), Math.round(rg.y - rh / 2), rw, rh);
    }
    ctx.globalAlpha = 1;

    // Pixel Particles
    for (let i = 0; i < state.burstParts.length; i++) {
      const pt = state.burstParts[i];
      ctx.fillStyle = pt.color;
      ctx.globalAlpha = Math.max(0, Math.min(1, pt.life * 1.3));
      ctx.fillRect(Math.round(pt.x), Math.round(pt.y), pt.size, pt.size);
    }
    ctx.globalAlpha = 1;
  }

  function step(dt) {
    state.time += dt;
    state.modeTimer += dt;
    if (state.burstTimer > 0) state.burstTimer = Math.max(0, state.burstTimer - dt);

    // Move background fish
    for (let i = 0; i < state.fishBg.length; i++) {
      const f = state.fishBg[i];
      f.x += f.vx * dt;
      if (f.vx > 0 && f.x > W + 16) f.x = -16;
      if (f.vx < 0 && f.x < -16) f.x = W + 16;
    }

    // Move biome ambient particles
    for (let i = 0; i < state.ambient.length; i++) {
      const a = state.ambient[i];
      a.y += a.vy * dt;
      a.x += a.vx * dt;
      if (a.y < 6) {
        a.y = H - 8;
        a.x = (a.x + 53) % W;
      }
      if (a.x < 0) a.x += W;
      if (a.x > W) a.x -= W;
    }

    // Move weather drops/snow
    const w = state.weather;
    if (w === "rain" || w === "storm" || w === "snow") {
      const spMul = w === "storm" ? 1.9 : (w === "snow" ? 0.3 : 1.0);
      const vxMul = w === "storm" ? -42 : (w === "snow" ? -8 : -16);
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
            state.lightning = { x: 40 + Math.floor(Math.random() * (W - 80)), life: 0.14 };
          }
        } else {
          state.lightning.life -= dt;
        }
      }
    }

    // Update shockwave rings
    for (let i = state.rings.length - 1; i >= 0; i--) {
      const rg = state.rings[i];
      rg.r += rg.speed * dt;
      rg.life -= dt * 1.4;
      if (rg.life <= 0) state.rings.splice(i, 1);
    }

    // Update burst particles
    for (let i = state.burstParts.length - 1; i >= 0; i--) {
      const pt = state.burstParts[i];
      pt.vy += pt.gravity * dt;
      pt.x += pt.vx * dt;
      pt.y += pt.vy * dt;
      pt.life -= dt;
      if (pt.life <= 0) state.burstParts.splice(i, 1);
    }

    // Update DOM flash overlay
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
    drawLineAndBobber(ctx, state.time);
    drawBurstEffects(ctx, state.time);
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

  function spawnParticles(count, colors, cx, cy, speed, grav, minLife, maxLife, maxSize) {
    for (let i = 0; i < count; i++) {
      const ang = -Math.PI + Math.random() * Math.PI * 2;
      const spd = (0.35 + Math.random() * 0.85) * speed;
      state.burstParts.push({
        x: cx,
        y: cy,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd - 24,
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
          addRing(160, WATER_Y + 2, "#7ec8d9", 45);
        }
      }
      if (cfg.rarityColor) state.hookColor = cfg.rarityColor;
      if (cfg.rarityRank) state.hookRank = cfg.rarityRank;
      renderFrame();
    },

    setMode(mode, extra) {
      this.setStageState(Object.assign({ mode }, extra || {}));
    },

    triggerCatchBurst(rarityId, rarityRank, rarityColor, value, hasMutation) {
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

      if (rank <= 2) {
        addRing(160, WATER_Y, baseCol, 46);
        spawnParticles(16, [baseCol, "#b8f2ff", "#ffffff"], 160, WATER_Y - 4, 65, 130, 0.5, 0.9, 2);
      } else if (rank === 3) {
        addRing(160, WATER_Y, "#38bdf8", 68);
        spawnParticles(24, ["#38bdf8", "#b8f2ff", "#6fdbbf", "#ffffff"], 160, WATER_Y - 8, 90, 115, 0.7, 1.2, 2);
      } else if (rank === 4) {
        addRing(160, 68, "#c6a4e2", 82);
        addRing(160, WATER_Y, "#a855f7", 60);
        spawnParticles(32, ["#c6a4e2", "#a855f7", "#fff4b8", "#7ec8d9"], 160, 68, 105, 95, 0.8, 1.5, 3);
        state.flashColor = "#c6a4e2";
        state.flashAlpha = 0.25;
      } else if (rank === 5) {
        addRing(160, 62, "#ecc570", 95);
        addRing(160, 62, "#fff4b8", 65);
        spawnParticles(48, ["#fff4b8", "#ecc570", "#6fdbbf", "#ffffff"], 160, 62, 125, 85, 1.0, 1.9, 3);
        state.flashColor = "#fff4b8";
        state.flashAlpha = 0.35;
      } else if (rank <= 7) {
        addRing(160, 60, "#f45b69", 110);
        addRing(160, 60, "#ecc570", 78);
        spawnParticles(64, ["#f45b69", "#ecc570", "#ff9aa2", "#ffffff"], 160, 60, 145, 75, 1.2, 2.2, 3);
        state.flashColor = "#f45b69";
        state.flashAlpha = 0.48;
      } else {
        addRing(160, 60, "#fff4b8", 130);
        addRing(160, 60, "#c6a4e2", 95);
        addRing(160, 60, "#6fdbbf", 68);
        spawnParticles(86, ["#fff4b8", "#6fdbbf", "#f45b69", "#c6a4e2", "#7ec8d9", "#ffffff"], 160, 60, 165, 65, 1.4, 2.6, 3);
        state.flashColor = "#ffffff";
        state.flashAlpha = 0.62;
      }

      // Extra golden RuCoin fountain when high market value
      if (val >= 50000) {
        spawnParticles(22, ["#fff4b8", "#ecc570", "#b88424"], 160, WATER_Y - 12, 105, 165, 0.9, 1.6, 3);
      }

      // Stage container micro-shake
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
