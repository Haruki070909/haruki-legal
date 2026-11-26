/* Haru Fishing RPG - 6-Archetype / 12-Rarity Real-Time Skill Challenge Engine */
(function () {
  "use strict";

  const RARITY_PROFILES = {
    common: {
      rank: 1, stars: 1, labelVi: "THÔNG THƯỜNG", labelEn: "COMMON",
      phases: [{ type: "strike", hits: 1, zone: 0.24, speed: 1.15, time: 5.5, maxMiss: 1 }]
    },
    uncommon: {
      rank: 2, stars: 2, labelVi: "KHÔNG PHỔ BIẾN", labelEn: "UNCOMMON",
      phases: [{ type: "double_strike", hits: 2, zone: 0.19, zone2: 0.14, speed: 1.35, speed2: 1.65, time: 6.5, maxMiss: 1 }]
    },
    rare: {
      rank: 3, stars: 3, labelVi: "HIẾM", labelEn: "RARE",
      phases: [{ type: "track", barSize: 0.26, start: 0.30, fill: 0.28, drain: 0.18, fishSpd: 0.58, lunge: false, time: 18 }]
    },
    epic: {
      rank: 4, stars: 4, labelVi: "SỬ THI", labelEn: "EPIC",
      phases: [{ type: "track", barSize: 0.20, start: 0.26, fill: 0.24, drain: 0.24, fishSpd: 0.85, lunge: true, lungeCd: 2.2, time: 20 }]
    },
    legendary: {
      rank: 5, stars: 5, labelVi: "HUYỀN THOẠI", labelEn: "LEGENDARY",
      phases: [
        { type: "ring", hits: 3, zone: 0.15, speed: 1.45, maxMiss: 1, time: 11 },
        { type: "track", barSize: 0.17, start: 0.28, fill: 0.23, drain: 0.28, fishSpd: 1.05, lunge: true, lungeCd: 1.75, time: 20 }
      ]
    },
    mythic: {
      rank: 6, stars: 6, labelVi: "THẦN THOẠI", labelEn: "MYTHIC",
      phases: [
        { type: "rhythm", notes: 8, need: 6, speed: 1.25, interval: 0.62, maxFail: 2 },
        { type: "track", barSize: 0.15, start: 0.25, fill: 0.22, drain: 0.31, fishSpd: 1.20, lunge: true, lungeCd: 1.45, time: 20 }
      ]
    },
    ancient: {
      rank: 7, stars: 7, labelVi: "CỔ ĐẠI", labelEn: "ANCIENT",
      phases: [
        { type: "rhythm", notes: 10, need: 8, speed: 1.48, interval: 0.52, maxFail: 2 },
        { type: "track", barSize: 0.14, start: 0.24, fill: 0.21, drain: 0.34, fishSpd: 1.32, lunge: true, lungeCd: 1.25, time: 22 }
      ]
    },
    transcendent: {
      rank: 8, stars: 8, labelVi: "SIÊU VIỆT", labelEn: "TRANSCENDENT",
      phases: [
        { type: "ring", hits: 3, zone: 0.13, speed: 1.55, maxMiss: 1, time: 11 },
        { type: "rhythm", notes: 8, need: 6, speed: 1.55, interval: 0.48, maxFail: 2 },
        { type: "track", barSize: 0.135, start: 0.24, fill: 0.20, drain: 0.35, fishSpd: 1.38, lunge: true, polarity: true, lungeCd: 1.15, time: 22 }
      ]
    },
    eternity: {
      rank: 9, stars: 9, labelVi: "VĨNH HẰNG", labelEn: "ETERNITY",
      phases: [
        { type: "ring", hits: 4, zone: 0.12, speed: 1.68, maxMiss: 1, time: 12 },
        { type: "rhythm", notes: 10, need: 8, speed: 1.68, interval: 0.44, maxFail: 2 },
        { type: "track", barSize: 0.128, start: 0.24, fill: 0.20, drain: 0.37, fishSpd: 1.46, lunge: true, polarity: true, lungeCd: 1.05, time: 22 }
      ]
    },
    infinity: {
      rank: 10, stars: 10, labelVi: "VÔ CỰC", labelEn: "INFINITY",
      phases: [
        { type: "ring", hits: 4, zone: 0.11, speed: 1.82, maxMiss: 1, time: 12 },
        { type: "rhythm", notes: 11, need: 9, speed: 1.80, interval: 0.41, maxFail: 2 },
        { type: "track", barSize: 0.122, start: 0.24, fill: 0.20, drain: 0.39, fishSpd: 1.55, lunge: true, polarity: true, lungeCd: 0.98, time: 22 }
      ]
    },
    genesis: {
      rank: 11, stars: 11, labelVi: "KHỞI NGUYÊN", labelEn: "GENESIS",
      phases: [
        { type: "ring", hits: 5, zone: 0.10, speed: 1.95, maxMiss: 1, time: 13 },
        { type: "rhythm", notes: 12, need: 10, speed: 1.92, interval: 0.38, maxFail: 2 },
        { type: "track", barSize: 0.116, start: 0.23, fill: 0.20, drain: 0.40, fishSpd: 1.62, lunge: true, polarity: true, lungeCd: 0.92, time: 24 }
      ]
    },
    omega: {
      rank: 12, stars: 12, labelVi: "OMEGA", labelEn: "OMEGA",
      phases: [
        { type: "ring", hits: 5, zone: 0.09, speed: 2.10, maxMiss: 1, time: 13 },
        { type: "rhythm", notes: 14, need: 12, speed: 2.05, interval: 0.35, maxFail: 2 },
        { type: "track", barSize: 0.11, start: 0.22, fill: 0.20, drain: 0.42, fishSpd: 1.72, lunge: true, polarity: true, lungeCd: 0.85, time: 25 }
      ]
    }
  };

  function getProfile(rarityId) {
    const k = String(rarityId || "common").toLowerCase();
    return RARITY_PROFILES[k] || RARITY_PROFILES.common;
  }

  function starStr(n) {
    const cap = Math.min(6, Math.max(1, n));
    return n > 6 ? `LV.${n}` : "*".repeat(cap);
  }

  const CW = 300;
  const CH = 156;

  let session = null;

  function pxIconSafe(name, size) {
    return typeof window.pxIcon === "function" ? window.pxIcon(name, size || 16) : "";
  }

  function triggerSfx(name, arg) {
    const s = window.SFX;
    if (!s) return;
    try {
      if (typeof s[name] === "function") s[name](arg);
    } catch (_) {}
  }

  function makePhaseState(cfg) {
    if (cfg.type === "strike" || cfg.type === "double_strike") {
      return {
        pos: 0.12,
        dir: 1,
        zoneCenter: 0.56,
        zoneWidth: cfg.zone,
        speed: cfg.speed,
        hits: 0,
        misses: 0,
        timer: cfg.time,
        flash: 0,
        hitAnim: 0
      };
    }
    if (cfg.type === "ring") {
      return {
        radius: 1.0,
        target: 0.36,
        zone: cfg.zone,
        speed: cfg.speed,
        hits: 0,
        misses: 0,
        timer: cfg.time,
        flash: 0
      };
    }
    if (cfg.type === "rhythm") {
      const notes = [];
      for (let i = 0; i < cfg.notes; i++) {
        notes.push({
          lane: Math.floor(Math.random() * 3),
          spawnAt: 0.45 + i * cfg.interval,
          y: -14,
          hit: false,
          missed: false
        });
      }
      return {
        elapsed: 0,
        notes,
        hits: 0,
        missed: 0,
        laneFlash: [0, 0, 0],
        laneGood: [0, 0, 0]
      };
    }
    // track / turbulent / boss struggle
    return {
      barY: 0.42,
      barVel: 0,
      fishY: 0.5,
      fishTarget: 0.25,
      fishMoveTimer: 0.5,
      lungeWarn: 0,
      lungeDir: 0,
      lungeTimer: cfg.lungeCd || 2.0,
      progress: cfg.start || 0.28,
      timer: cfg.time || 20,
      holding: false,
      flash: 0
    };
  }

  function currentPhaseCfg() {
    return session.profile.phases[session.phaseIdx];
  }

  function advanceOrFinish(wonPhase, details) {
    if (!session || session.finished) return;
    if (!wonPhase) {
      session.finished = true;
      session.onDone({ won: false, score: session.score, details: details || "missed" });
      stopSession();
      return;
    }
    session.score += 100;
    if (session.phaseIdx + 1 < session.profile.phases.length) {
      session.phaseIdx += 1;
      session.phase = makePhaseState(currentPhaseCfg());
      session.phaseBanner = 1.1;
      triggerSfx("phaseClear");
      updateHudAndControls();
    } else {
      session.finished = true;
      session.onDone({ won: true, score: session.score, details: "cleared" });
      stopSession();
    }
  }

  function handleStrikeInput() {
    if (!session || session.finished) return;
    const cfg = currentPhaseCfg();
    const st = session.phase;

    if (cfg.type === "strike" || cfg.type === "double_strike") {
      const dist = Math.abs(st.pos - st.zoneCenter);
      if (dist <= st.zoneWidth * 0.54) {
        st.hits += 1;
        st.hitAnim = 0.28;
        triggerSfx("hit", st.hits);
        if (st.hits >= cfg.hits) {
          advanceOrFinish(true, "strike_clear");
        } else {
          st.zoneWidth = cfg.zone2 || cfg.zone * 0.78;
          st.speed = cfg.speed2 || cfg.speed * 1.2;
          st.zoneCenter = st.zoneCenter < 0.5 ? (0.58 + Math.random() * 0.26) : (0.16 + Math.random() * 0.26);
        }
      } else {
        st.misses += 1;
        st.flash = 0.25;
        triggerSfx("miss");
        if (st.misses > cfg.maxMiss) {
          advanceOrFinish(false, "bad_timing");
        }
      }
      return;
    }

    if (cfg.type === "ring") {
      const dist = Math.abs(st.radius - st.target);
      if (dist <= st.zone * 0.65) {
        st.hits += 1;
        st.radius = 1.0;
        st.flash = 0.22;
        triggerSfx("hit", st.hits);
        if (st.hits >= cfg.hits) {
          advanceOrFinish(true, "ring_clear");
        }
      } else {
        st.misses += 1;
        st.radius = 1.0;
        st.flash = -0.25;
        triggerSfx("miss");
        if (st.misses > cfg.maxMiss) {
          advanceOrFinish(false, "ring_miss");
        }
      }
    }
  }

  function handleRhythmLane(lane) {
    if (!session || session.finished) return;
    const cfg = currentPhaseCfg();
    if (cfg.type !== "rhythm") return;
    const st = session.phase;
    const hitY = CH - 24;
    st.laneFlash[lane] = 0.16;

    // Pick closest active note in this lane near hitY
    let best = null;
    let bestDist = 999;
    for (let i = 0; i < st.notes.length; i++) {
      const n = st.notes[i];
      if (n.hit || n.missed || n.lane !== lane || st.elapsed < n.spawnAt) continue;
      const d = Math.abs(n.y - hitY);
      if (d < bestDist) {
        bestDist = d;
        best = n;
      }
    }
    if (best && bestDist <= 22) {
      best.hit = true;
      st.hits += 1;
      st.laneGood[lane] = 0.22;
      session.score += 25;
      triggerSfx("hit", st.hits);
      if (st.hits >= cfg.need) {
        advanceOrFinish(true, "rhythm_clear");
      }
    } else {
      triggerSfx("tick");
    }
  }

  function stepChallenge(dt) {
    if (!session || session.finished) return;
    if (session.phaseBanner > 0) session.phaseBanner = Math.max(0, session.phaseBanner - dt);

    const cfg = currentPhaseCfg();
    const st = session.phase;

    if (cfg.type === "strike" || cfg.type === "double_strike") {
      if (st.flash > 0) st.flash = Math.max(0, st.flash - dt);
      if (st.hitAnim > 0) st.hitAnim = Math.max(0, st.hitAnim - dt);
      st.pos += st.dir * st.speed * dt;
      if (st.pos >= 1) { st.pos = 1; st.dir = -1; }
      if (st.pos <= 0) { st.pos = 0; st.dir = 1; }
      st.timer -= dt;
      if (st.timer <= 0) advanceOrFinish(false, "timeout");
      return;
    }

    if (cfg.type === "ring") {
      if (st.flash > 0) st.flash = Math.max(0, st.flash - dt);
      if (st.flash < 0) st.flash = Math.min(0, st.flash + dt);
      st.radius -= cfg.speed * 0.55 * dt;
      st.timer -= dt;
      if (st.radius <= 0.12) {
        st.misses += 1;
        st.radius = 1.0;
        st.flash = -0.25;
        triggerSfx("miss");
        if (st.misses > cfg.maxMiss) {
          advanceOrFinish(false, "ring_expired");
          return;
        }
      }
      if (st.timer <= 0) advanceOrFinish(false, "timeout");
      return;
    }

    if (cfg.type === "rhythm") {
      st.elapsed += dt;
      for (let l = 0; l < 3; l++) {
        if (st.laneFlash[l] > 0) st.laneFlash[l] = Math.max(0, st.laneFlash[l] - dt);
        if (st.laneGood[l] > 0) st.laneGood[l] = Math.max(0, st.laneGood[l] - dt);
      }
      const dropPxPerSec = 105 * cfg.speed;
      const missY = CH - 3;
      for (let i = 0; i < st.notes.length; i++) {
        const n = st.notes[i];
        if (n.hit || n.missed) continue;
        if (st.elapsed >= n.spawnAt) {
          n.y = -10 + (st.elapsed - n.spawnAt) * dropPxPerSec;
          if (n.y > missY) {
            n.missed = true;
            st.missed += 1;
            triggerSfx("miss");
          }
        }
      }
      if (st.hits >= cfg.need) {
        advanceOrFinish(true, "rhythm_clear");
        return;
      }
      const remaining = st.notes.length - st.hits - st.missed;
      if (st.hits + remaining < cfg.need) {
        advanceOrFinish(false, "rhythm_failed");
      }
      return;
    }

    // Track (Stardew-style vertical reel column)
    st.timer -= dt;
    if (st.timer <= 0) {
      advanceOrFinish(false, "timeout");
      return;
    }

    // Player bar physics (0 = top, 1 = bottom)
    const grav = 1.85;
    const lift = -3.95;
    const holding = st.holding || session.keyHold;
    st.barVel += (holding ? lift : grav) * dt;
    st.barVel *= Math.pow(0.84, dt * 60);
    st.barY += st.barVel * dt;
    const minBar = 0;
    const maxBar = 1 - cfg.barSize;
    if (st.barY < minBar) { st.barY = minBar; st.barVel = Math.max(0, -st.barVel * 0.25); }
    if (st.barY > maxBar) { st.barY = maxBar; st.barVel = Math.min(0, -st.barVel * 0.35); }

    // Fish AI movement & telegraphed lunges
    if (cfg.lunge) {
      st.lungeTimer -= dt;
      if (st.lungeTimer <= 0.42 && st.lungeTimer > 0 && st.lungeWarn <= 0) {
        st.lungeWarn = 0.42;
        st.lungeDir = st.fishY > 0.5 ? -1 : 1;
        triggerSfx("tick");
      }
      if (st.lungeTimer <= 0) {
        st.lungeWarn = 0;
        const jump = 0.32 + Math.random() * 0.38;
        st.fishTarget = Math.max(0.06, Math.min(0.94, st.fishY + st.lungeDir * jump));
        st.fishMoveTimer = 0.45;
        st.lungeTimer = cfg.lungeCd * (0.85 + Math.random() * 0.4);
      }
    }
    st.fishMoveTimer -= dt;
    if (st.fishMoveTimer <= 0) {
      st.fishTarget = 0.08 + Math.random() * 0.84;
      st.fishMoveTimer = 0.55 + Math.random() * 0.75;
    }
    const dashMul = st.lungeWarn > 0 ? 0.35 : (cfg.lunge ? 1.35 : 1.0);
    const diff = st.fishTarget - st.fishY;
    st.fishY += Math.sign(diff) * Math.min(Math.abs(diff), cfg.fishSpd * dashMul * dt);

    // Check overlap
    const fishHalf = 0.045;
    const barTop = st.barY;
    const barBot = st.barY + cfg.barSize;
    const inside = (st.fishY + fishHalf >= barTop) && (st.fishY - fishHalf <= barBot);
    if (inside) {
      st.progress += cfg.fill * dt;
      st.flash = 1;
    } else {
      st.progress -= cfg.drain * dt;
      st.flash = 0;
    }
    if (st.progress >= 1) {
      advanceOrFinish(true, "caught_in_bar");
    } else if (st.progress <= 0) {
      advanceOrFinish(false, "escaped_bar");
    }
  }

  function renderChallengeCanvas() {
    if (!session || !session.ctx) return;
    const ctx = session.ctx;
    ctx.imageSmoothingEnabled = false;

    // Frame background
    ctx.fillStyle = "#08121f";
    ctx.fillRect(0, 0, CW, CH);
    ctx.strokeStyle = session.rarityColor || "#6fdbbf";
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, CW - 2, CH - 2);

    const cfg = currentPhaseCfg();
    const st = session.phase;
    const accent = session.rarityColor || "#6fdbbf";
    const isVi = session.lang !== "en";

    if (cfg.type === "strike" || cfg.type === "double_strike") {
      // Title & hits counter
      ctx.fillStyle = "#cbd5e1";
      ctx.font = "bold 11px monospace";
      ctx.fillText(
        isVi ? `CANH ĐIỂM VÀNG (${st.hits}/${cfg.hits})` : `STRIKE SWEET ZONE (${st.hits}/${cfg.hits})`,
        16, 26
      );
      ctx.fillStyle = st.timer < 2 ? "#f45b69" : "#ecc570";
      ctx.fillText(`${Math.max(0, st.timer).toFixed(1)}s`, CW - 48, 26);

      // Bar track
      const bx = 18, by = 60, bw = CW - 36, bh = 34;
      ctx.fillStyle = "#040811";
      ctx.fillRect(bx - 2, by - 2, bw + 4, bh + 4);
      ctx.fillStyle = "#102236";
      ctx.fillRect(bx, by, bw, bh);

      // Sweet zone
      const zw = Math.round(st.zoneWidth * bw);
      const zx = Math.round(bx + st.zoneCenter * bw - zw / 2);
      ctx.fillStyle = st.hitAnim > 0 ? "#ffffff" : "#176b5b";
      ctx.fillRect(zx, by + 2, zw, bh - 4);
      ctx.fillStyle = "#6fdbbf";
      ctx.fillRect(zx, by + 2, zw, 4);
      ctx.fillRect(zx, by + bh - 6, zw, 4);

      // Moving needle
      const nx = Math.round(bx + st.pos * bw);
      ctx.fillStyle = st.flash > 0 ? "#f45b69" : "#ecc570";
      ctx.fillRect(nx - 3, by - 6, 6, bh + 12);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(nx - 1, by - 4, 2, bh + 8);

      ctx.fillStyle = "#84a0bd";
      ctx.font = "10px monospace";
      ctx.fillText(
        isVi ? `Trượt cho phép: ${cfg.maxMiss - st.misses}` : `Retries left: ${cfg.maxMiss - st.misses}`,
        18, 126
      );
    } else if (cfg.type === "ring") {
      const cx = 110, cy = 78;
      const maxR = 54;
      const tR = Math.round(st.target * maxR);
      const cR = Math.round(st.radius * maxR);
      const zPx = Math.max(4, Math.round(st.zone * maxR));

      // Target golden band
      ctx.strokeStyle = "#ecc570";
      ctx.lineWidth = zPx;
      ctx.strokeRect(cx - tR, cy - tR, tR * 2, tR * 2);

      // Shrinking ring
      ctx.strokeStyle = st.flash < 0 ? "#f45b69" : (st.flash > 0 ? "#ffffff" : "#6fdbbf");
      ctx.lineWidth = 3;
      ctx.strokeRect(cx - cR, cy - cR, cR * 2, cR * 2);

      // Right info panel
      ctx.fillStyle = "#f1f5f9";
      ctx.font = "bold 12px monospace";
      ctx.fillText(isVi ? `KHÓA TÂM (${st.hits}/${cfg.hits})` : `LOCK RING (${st.hits}/${cfg.hits})`, 184, 52);
      ctx.fillStyle = accent;
      ctx.fillText(`${Math.max(0, st.timer).toFixed(1)}s`, 184, 74);
      ctx.fillStyle = "#84a0bd";
      ctx.font = "10px monospace";
      ctx.fillText(isVi ? `Trượt còn: ${cfg.maxMiss - st.misses}` : `Lives: ${cfg.maxMiss - st.misses}`, 184, 98);
      ctx.fillText(isVi ? "Chạm khi vòng khớp" : "Tap inside gold box", 184, 116);
    } else if (cfg.type === "rhythm") {
      const laneW = 68;
      const gap = 14;
      const startX = Math.round((CW - (laneW * 3 + gap * 2)) / 2);
      const hitY = CH - 26;

      for (let l = 0; l < 3; l++) {
        const lx = startX + l * (laneW + gap);
        ctx.fillStyle = st.laneGood[l] > 0 ? "#16463b" : (st.laneFlash[l] > 0 ? "#1a3652" : "#0b192b");
        ctx.fillRect(lx, 24, laneW, CH - 32);
        ctx.strokeStyle = "#2c4e73";
        ctx.lineWidth = 1;
        ctx.strokeRect(lx, 24, laneW, CH - 32);

        // Hit receptor box
        ctx.fillStyle = st.laneFlash[l] > 0 ? "#ecc570" : "#1c3c5c";
        ctx.fillRect(lx + 4, hitY - 7, laneW - 8, 14);
        ctx.strokeStyle = "#ecc570";
        ctx.strokeRect(lx + 4, hitY - 7, laneW - 8, 14);
      }

      // Draw falling shockwave notes
      for (let i = 0; i < st.notes.length; i++) {
        const n = st.notes[i];
        if (n.hit || n.missed || st.elapsed < n.spawnAt) continue;
        const nx = startX + n.lane * (laneW + gap) + 10;
        ctx.fillStyle = accent;
        ctx.fillRect(nx, Math.round(n.y - 6), laneW - 20, 12);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(nx + 4, Math.round(n.y - 3), laneW - 28, 6);
      }

      // Header progress
      ctx.fillStyle = "#f1f5f9";
      ctx.font = "bold 11px monospace";
      ctx.fillText(isVi ? `ĐỠ SÓNG: ${st.hits}/${cfg.need}` : `PARRY: ${st.hits}/${cfg.need}`, startX, 16);
      ctx.fillStyle = "#ecc570";
      ctx.fillText(isVi ? `Bỏ lỡ: ${st.missed}` : `Miss: ${st.missed}`, startX + 165, 16);
    } else {
      // Stardew / Boss Tracking Column
      const colX = 32, colY = 14, colW = 34, colH = 128;
      ctx.fillStyle = "#040811";
      ctx.fillRect(colX - 2, colY - 2, colW + 4, colH + 4);
      ctx.fillStyle = "#0b1e33";
      ctx.fillRect(colX, colY, colW, colH);

      // Catch Bar
      const bH = Math.max(12, Math.round(cfg.barSize * colH));
      const bY = Math.round(colY + st.barY * colH);
      ctx.fillStyle = st.flash ? "#6fdbbf" : "#2ea88d";
      ctx.fillRect(colX + 3, bY, colW - 6, bH);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(colX + 5, bY + 2, colW - 10, 3);

      // Fish icon marker inside column
      const fY = Math.round(colY + st.fishY * colH);
      ctx.fillStyle = "#07111e";
      ctx.fillRect(colX + 7, fY - 6, 20, 12);
      ctx.fillStyle = st.lungeWarn > 0 ? "#f45b69" : "#ecc570";
      ctx.fillRect(colX + 9, fY - 4, 16, 8);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(colX + 12, fY - 2, 4, 4);

      // Progress gauge & info on right
      const rx = 86;
      ctx.fillStyle = "#f1f5f9";
      ctx.font = "bold 12px monospace";
      ctx.fillText(isVi ? "GIỮ CÁ TRONG THANH XANH" : "KEEP FISH IN GREEN BAR", rx, 34);

      ctx.fillStyle = "#040811";
      ctx.fillRect(rx, 48, 190, 20);
      const fillW = Math.round(Math.max(0, Math.min(1, st.progress)) * 184);
      ctx.fillStyle = st.progress > 0.65 ? "#6fdbbf" : (st.progress < 0.25 ? "#f45b69" : "#ecc570");
      ctx.fillRect(rx + 3, 51, fillW, 14);

      ctx.fillStyle = "#cbd5e1";
      ctx.font = "bold 11px monospace";
      ctx.fillText(`${Math.round(st.progress * 100)}% · ${Math.max(0, st.timer).toFixed(1)}s`, rx, 88);

      if (st.lungeWarn > 0) {
        ctx.fillStyle = "#f45b69";
        ctx.font = "bold 12px monospace";
        ctx.fillText(
          cfg.polarity
            ? (isVi ? "CẢNH BÁO: ĐẢO CỰC LAO MẠNH!" : "WARNING: POLARITY LUNGE!")
            : (isVi ? "CẢNH BÁO: CÁ SẮP LAO!" : "WARNING: LUNGE INCOMING!"),
          rx, 114
        );
      } else {
        ctx.fillStyle = "#84a0bd";
        ctx.font = "10px monospace";
        ctx.fillText(isVi ? "Nhấn giữ nút KÉO để đẩy thanh lên" : "Hold REEL button to lift bar", rx, 114);
      }
    }

    if (session.phaseBanner > 0) {
      ctx.fillStyle = "rgba(7, 17, 30, 0.84)";
      ctx.fillRect(36, 54, CW - 72, 42);
      ctx.strokeStyle = "#ecc570";
      ctx.strokeRect(36, 54, CW - 72, 42);
      ctx.fillStyle = "#ecc570";
      ctx.font = "bold 15px monospace";
      ctx.fillText(
        `PHASE ${session.phaseIdx + 1}/${session.profile.phases.length}`,
        CW / 2 - 42, 80
      );
    }
  }

  function loop(ts) {
    if (!session || session.finished) return;
    if (!session.canvas || !document.body.contains(session.canvas)) {
      stopSession();
      return;
    }
    if (!session.lastTs) session.lastTs = ts;
    const dt = Math.min(0.05, Math.max(0.001, (ts - session.lastTs) / 1000));
    session.lastTs = ts;
    stepChallenge(dt);
    if (!session || session.finished) return;
    renderChallengeCanvas();
    session.rafId = requestAnimationFrame(loop);
  }

  function updateHudAndControls() {
    if (!session || !session.rootEl) return;
    const cfg = currentPhaseCfg();
    const isVi = session.lang !== "en";
    const totalPh = session.profile.phases.length;
    const p = session.profile;

    const phaseLabel = isVi
      ? (totalPh > 1 ? `Hiệp ${session.phaseIdx + 1}/${totalPh}` : "Thử Thách")
      : (totalPh > 1 ? `Phase ${session.phaseIdx + 1}/${totalPh}` : "Challenge");

    const cueMap = {
      strike: isVi ? "Canh kim chạm vùng xanh rồi bấm ĐÁNH BẬT!" : "Tap STRIKE inside the green sweet spot!",
      double_strike: isVi ? "Đánh trúng 2 lần liên tiếp — mục tiêu sẽ thu nhỏ!" : "Hit 2 moving targets in a row!",
      ring: isVi ? "Chạm đúng lúc vòng thu nhỏ khớp khung vàng!" : "Tap when the shrinking ring enters the gold box!",
      rhythm: isVi ? "Chạm 3 làn (hoặc phím A / W / D) để đỡ sóng tấn công!" : "Parry 3 lanes (tap buttons or press A / W / D)!",
      track: cfg.lunge
        ? (isVi ? "Nhấn giữ nút KÉO DÂY để giữ cá khi cá lao bất ngờ!" : "Hold REEL UP to track lunging fish!")
        : (isVi ? "Nhấn giữ nút KÉO DÂY để giữ cá trong thanh xanh!" : "Hold REEL UP to keep fish in green bar!")
    };

    let controlsHtml = "";
    if (cfg.type === "rhythm") {
      controlsHtml = `
        <div class="mg-lanes-pads">
          <button type="button" class="btn btn-primary mg-lane-btn" id="mg-lane-0">${pxIconSafe("target", 16)} TRÁI (A)</button>
          <button type="button" class="btn btn-emerald mg-lane-btn" id="mg-lane-1">${pxIconSafe("bolt", 16)} GIỮA (W)</button>
          <button type="button" class="btn btn-gold mg-lane-btn" id="mg-lane-2">${pxIconSafe("sword", 16)} PHẢI (D)</button>
        </div>`;
    } else if (cfg.type === "track") {
      controlsHtml = `
        <button type="button" class="btn btn-emerald mg-pad" id="mg-hold-pad">
          ${pxIconSafe("rod", 18)} ${isVi ? "GIỮ ĐỂ KÉO LÊN (SPACE / CHẠM GIỮ)" : "HOLD TO REEL UP (SPACE / TOUCH)"}
        </button>`;
    } else {
      controlsHtml = `
        <button type="button" class="btn btn-gold mg-pad" id="mg-strike-pad">
          ${pxIconSafe("bolt", 18)} ${isVi ? "ĐÁNH BẬT NGAY! (SPACE / CHẠM)" : "STRIKE NOW! (SPACE / TAP)"}
        </button>`;
    }

    session.rootEl.innerHTML = `
      <div class="mg-shell" style="border-color:${session.rarityColor};">
        <div class="row-between" style="flex-wrap:wrap;gap:6px;">
          <div class="inline-ico">
            <span class="rarity-pill" style="color:${session.rarityColor};">${p.labelEn}</span>
            <span class="tab-badge" style="color:var(--px-gold);">${starStr(p.stars)}</span>
          </div>
          <span class="tab-badge">${phaseLabel}</span>
        </div>
        <div class="muted" style="font-size:11.5px;margin-top:4px;">${cueMap[cfg.type]}</div>
        <div class="mg-canvas-box">
          <canvas id="mg-canvas" width="${CW}" height="${CH}"></canvas>
        </div>
        ${controlsHtml}
      </div>`;

    session.canvas = document.getElementById("mg-canvas");
    session.ctx = session.canvas ? session.canvas.getContext("2d") : null;

    if (cfg.type === "rhythm") {
      [0, 1, 2].forEach(l => {
        const b = document.getElementById(`mg-lane-${l}`);
        if (b) {
          b.addEventListener("pointerdown", (ev) => {
            ev.preventDefault();
            handleRhythmLane(l);
          });
        }
      });
    } else if (cfg.type === "track") {
      const holdPad = document.getElementById("mg-hold-pad");
      const setHold = (v) => { if (session && session.phase) session.phase.holding = v; };
      if (holdPad) {
        holdPad.addEventListener("pointerdown", (ev) => { ev.preventDefault(); setHold(true); });
        holdPad.addEventListener("pointerup", () => setHold(false));
        holdPad.addEventListener("pointercancel", () => setHold(false));
        holdPad.addEventListener("pointerleave", () => setHold(false));
      }
      if (session.canvas) {
        session.canvas.addEventListener("pointerdown", (ev) => { ev.preventDefault(); setHold(true); });
        session.canvas.addEventListener("pointerup", () => setHold(false));
        session.canvas.addEventListener("pointercancel", () => setHold(false));
      }
    } else {
      const sp = document.getElementById("mg-strike-pad");
      if (sp) sp.addEventListener("pointerdown", (ev) => { ev.preventDefault(); handleStrikeInput(); });
      if (session.canvas) session.canvas.addEventListener("pointerdown", (ev) => { ev.preventDefault(); handleStrikeInput(); });
    }
    renderChallengeCanvas();
  }

  function onKeyDown(ev) {
    if (!session || session.finished) return;
    const cfg = currentPhaseCfg();
    if (cfg.type === "rhythm") {
      if (ev.code === "KeyA" || ev.code === "ArrowLeft") { ev.preventDefault(); handleRhythmLane(0); }
      else if (ev.code === "KeyW" || ev.code === "ArrowUp" || ev.code === "Space") { ev.preventDefault(); handleRhythmLane(1); }
      else if (ev.code === "KeyD" || ev.code === "ArrowRight") { ev.preventDefault(); handleRhythmLane(2); }
      return;
    }
    if (ev.code === "Space" || ev.code === "ArrowUp" || ev.code === "KeyW") {
      ev.preventDefault();
      if (cfg.type === "track") {
        session.keyHold = true;
      } else if (!ev.repeat) {
        handleStrikeInput();
      }
    }
  }

  function onKeyUp(ev) {
    if (!session) return;
    if (ev.code === "Space" || ev.code === "ArrowUp" || ev.code === "KeyW") {
      session.keyHold = false;
    }
  }

  function stopSession() {
    if (!session) return;
    if (session.rafId) cancelAnimationFrame(session.rafId);
    window.removeEventListener("keydown", onKeyDown);
    window.removeEventListener("keyup", onKeyUp);
    session = null;
  }

  window.HaruMiniGame = {
    RARITY_PROFILES,
    getProfile,
    isActive() { return Boolean(session && !session.finished); },
    stop() { stopSession(); },
    start(rootEl, opts) {
      stopSession();
      if (!rootEl) return;
      const preview = (opts && opts.catchPreview) || {};
      const rarityId = String(preview.rarity_id || "common").toLowerCase();
      const profile = getProfile(rarityId);

      session = {
        rootEl,
        lang: (opts && opts.lang) || "vi",
        rarityId,
        rarityColor: preview.rarity_color || "#6fdbbf",
        profile,
        phaseIdx: 0,
        phase: makePhaseState(profile.phases[0]),
        phaseBanner: profile.phases.length > 1 ? 0.9 : 0,
        score: 0,
        finished: false,
        keyHold: false,
        lastTs: 0,
        rafId: 0,
        canvas: null,
        ctx: null,
        onDone: (opts && opts.onComplete) || (() => {})
      };

      updateHudAndControls();
      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("keyup", onKeyUp);
      session.rafId = requestAnimationFrame(loop);
    }
  };
})();
