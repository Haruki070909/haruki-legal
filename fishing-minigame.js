/* Haru Fishing RPG - 4-Lane 16-Bit Pixel Piano Rhythm Challenge Engine (v6 · Easy Groove + backing music) */
(function () {
  "use strict";

  const CW = 320;
  const CH = 248;
  const HIT_Y = 212;
  const LANE_COUNT = 4;
  const START_X = 16;
  const LANE_W = 72;

  const LANE_COLORS = ["#38bdf8", "#6fdbbf", "#ecc570", "#e879f9"];
  const KEY_LABELS = ["D", "F", "J", "K"];
  const NOTE_NAMES = ["DO", "RE", "MI", "SOL"];

  const SCALES = {
    folk: [261.63, 293.66, 329.63, 392.00],       // C4 D4 E4 G4
    hero: [220.00, 261.63, 329.63, 392.00],       // A3 C4 E4 G4
    dramatic: [293.66, 349.23, 440.00, 523.25],   // D4 F4 A4 C5
    boss: [329.63, 392.00, 493.88, 622.25],       // E4 G4 B4 D#5
    virtuoso: [277.18, 329.63, 415.30, 523.25]    // C#4 E4 G#4 C5
  };

  // v6 — "Easy Groove": slower BPM, wide hit windows, notes locked to the beat of a backing track.
  const RARITY_PROFILES = {
    common: {
      rank: 1, stars: 1, labelVi: "THÔNG THƯỜNG", labelEn: "COMMON",
      bpm: 70, notes: 6, scroll: 105, doubleProb: 0.0, holdProb: 0.0,
      perfectPx: 32, goodPx: 52, maxMiss: 6, scaleKey: "folk",
      songVi: "Khúc Dạo Biển", songEn: "Gentle Harbor"
    },
    uncommon: {
      rank: 2, stars: 2, labelVi: "KHÔNG PHỔ BIẾN", labelEn: "UNCOMMON",
      bpm: 72, notes: 7, scroll: 108, doubleProb: 0.0, holdProb: 0.08,
      perfectPx: 32, goodPx: 52, maxMiss: 6, scaleKey: "folk",
      songVi: "Sóng Nhẹ", songEn: "Sea Breeze"
    },
    rare: {
      rank: 3, stars: 3, labelVi: "HIẾM", labelEn: "RARE",
      bpm: 74, notes: 8, scroll: 110, doubleProb: 0.0, holdProb: 0.10,
      perfectPx: 31, goodPx: 50, maxMiss: 6, scaleKey: "hero",
      songVi: "Vũ Điệu San Hô", songEn: "Coral Waltz"
    },
    epic: {
      rank: 4, stars: 4, labelVi: "SỬ THI", labelEn: "EPIC",
      bpm: 76, notes: 9, scroll: 112, doubleProb: 0.0, holdProb: 0.10,
      perfectPx: 30, goodPx: 50, maxMiss: 6, scaleKey: "hero",
      songVi: "Khúc Biển Động", songEn: "Riptide Sonata"
    },
    legendary: {
      rank: 5, stars: 5, labelVi: "HUYỀN THOẠI", labelEn: "LEGENDARY",
      bpm: 76, notes: 10, scroll: 112, doubleProb: 0.0, holdProb: 0.10,
      perfectPx: 30, goodPx: 50, maxMiss: 6, scaleKey: "dramatic",
      songVi: "Giao Hưởng Vàng", songEn: "Golden Symphony"
    },
    mythic: {
      rank: 6, stars: 6, labelVi: "THẦN THOẠI", labelEn: "MYTHIC",
      bpm: 80, notes: 12, scroll: 116, doubleProb: 0.05, holdProb: 0.12,
      perfectPx: 30, goodPx: 49, maxMiss: 6, scaleKey: "dramatic",
      songVi: "Độc Tấu Thần Thoại", songEn: "Mythic Toccata"
    },
    ancient: {
      rank: 7, stars: 7, labelVi: "CỔ ĐẠI", labelEn: "ANCIENT",
      bpm: 86, notes: 14, scroll: 122, doubleProb: 0.08, holdProb: 0.12,
      perfectPx: 29, goodPx: 48, maxMiss: 5, scaleKey: "boss",
      songVi: "Hồi Chuông Cổ Đại", songEn: "Ancient Requiem"
    },
    transcendent: {
      rank: 8, stars: 8, labelVi: "SIÊU VIỆT", labelEn: "TRANSCENDENT",
      bpm: 90, notes: 16, scroll: 126, doubleProb: 0.10, holdProb: 0.12,
      perfectPx: 28, goodPx: 47, maxMiss: 5, scaleKey: "boss",
      songVi: "Siêu Việt Liên Hoàn", songEn: "Transcendent Etude"
    },
    eternity: {
      rank: 9, stars: 9, labelVi: "VĨNH HẰNG", labelEn: "ETERNITY",
      bpm: 96, notes: 18, scroll: 132, doubleProb: 0.12, holdProb: 0.12,
      perfectPx: 27, goodPx: 46, maxMiss: 5, scaleKey: "virtuoso",
      songVi: "Khúc Vĩnh Hằng", songEn: "Eternity Nocturne"
    },
    infinity: {
      rank: 10, stars: 10, labelVi: "VÔ CỰC", labelEn: "INFINITY",
      bpm: 100, notes: 20, scroll: 136, doubleProb: 0.14, holdProb: 0.12,
      perfectPx: 26, goodPx: 45, maxMiss: 5, scaleKey: "virtuoso",
      songVi: "Vô Cực Concerto", songEn: "Infinity Concerto"
    },
    genesis: {
      rank: 11, stars: 11, labelVi: "KHỞI NGUYÊN", labelEn: "GENESIS",
      bpm: 106, notes: 22, scroll: 142, doubleProb: 0.15, holdProb: 0.12,
      perfectPx: 25, goodPx: 44, maxMiss: 4, scaleKey: "virtuoso",
      songVi: "Khởi Nguyên Boss", songEn: "Genesis Fugue"
    },
    omega: {
      rank: 12, stars: 12, labelVi: "OMEGA", labelEn: "OMEGA",
      bpm: 112, notes: 24, scroll: 148, doubleProb: 0.16, holdProb: 0.12,
      perfectPx: 24, goodPx: 42, maxMiss: 4, scaleKey: "virtuoso",
      songVi: "OMEGA FINALE", songEn: "OMEGA FINALE"
    }
  };

  // Backing-track chord progressions (4 bars loop) per scale. Each chord = pad triad; bass = root / 2.
  const PROGRESSIONS = {
    folk: [[261.63, 329.63, 392.00], [196.00, 246.94, 293.66], [220.00, 261.63, 329.63], [174.61, 220.00, 261.63]],
    hero: [[220.00, 261.63, 329.63], [174.61, 220.00, 261.63], [261.63, 329.63, 392.00], [196.00, 246.94, 293.66]],
    dramatic: [[293.66, 349.23, 440.00], [233.08, 293.66, 349.23], [174.61, 220.00, 261.63], [261.63, 329.63, 392.00]],
    boss: [[164.81, 196.00, 246.94], [130.81, 164.81, 196.00], [146.83, 185.00, 220.00], [123.47, 155.56, 185.00]],
    virtuoso: [[138.59, 164.81, 207.65], [110.00, 138.59, 164.81], [164.81, 207.65, 246.94], [207.65, 261.63, 311.13]]
  };

  const LEAD_IN_BEATS = 4;

  function getProfile(rarityId) {
    const k = String(rarityId || "common").toLowerCase();
    return RARITY_PROFILES[k] || RARITY_PROFILES.common;
  }

  function computeDifficulty(preview, lang) {
    const pv = preview || {};
    const isVi = lang !== "en";
    const rarityId = String(pv.rarity_id || "common").toLowerCase();
    const base = getProfile(rarityId);
    const val = Number(pv.value || 0);
    const hasMutation = Boolean(pv.mutation_name);

    let speedMul = 1.0;
    let extraNotes = 0;
    const badges = [];

    if (hasMutation) {
      speedMul += 0.03;
      extraNotes += 1;
      badges.push(isVi ? "ĐỘT BIẾN +3%" : "MUTATED +3%");
    }
    if (val >= 500000) {
      speedMul += 0.04;
      extraNotes += 2;
      badges.push(isVi ? "CÁ CỰC PHẨM" : "PRIZE VALUE");
    } else if (val >= 100000) {
      speedMul += 0.02;
      extraNotes += 1;
      badges.push(isVi ? "CÁ XỊN" : "HIGH VALUE");
    }

    const cappedMul = Math.min(1.06, speedMul);
    return {
      rarityId,
      rank: base.rank,
      stars: base.stars,
      labelVi: base.labelVi,
      labelEn: base.labelEn,
      songVi: base.songVi,
      songEn: base.songEn,
      scaleKey: base.scaleKey,
      bpm: Math.min(120, Math.round(base.bpm * cappedMul)),
      notes: base.notes + extraNotes,
      scroll: Math.min(158, Math.round(base.scroll * cappedMul)),
      doubleProb: Math.min(0.18, base.doubleProb),
      holdProb: base.holdProb,
      perfectPx: base.perfectPx,
      goodPx: base.goodPx,
      maxMiss: base.maxMiss,
      badges
    };
  }

  const PianoAudio = {
    activeHolds: new Map(),

    getCtx() {
      if (window.SFX && !window.SFX.enabled) return null;
      try {
        let ctx = window.SFX && window.SFX.ctx;
        if (!ctx) {
          const AC = window.AudioContext || window.webkitAudioContext;
          if (!AC) return null;
          ctx = new AC();
          if (window.SFX) window.SFX.ctx = ctx;
        }
        if (ctx.state === "suspended") ctx.resume().catch(() => {});
        return ctx;
      } catch (_) {
        return null;
      }
    },

    playNote(freq, durSec, gainVal) {
      const ctx = this.getCtx();
      if (!ctx) return;
      try {
        const t0 = ctx.currentTime;
        const dur = Math.max(0.12, durSec || 0.34);
        const vol = gainVal || 0.09;

        const osc1 = ctx.createOscillator();
        const g1 = ctx.createGain();
        osc1.type = "triangle";
        osc1.frequency.setValueAtTime(freq, t0);
        g1.gain.setValueAtTime(0.001, t0);
        g1.gain.linearRampToValueAtTime(vol, t0 + 0.01);
        g1.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
        osc1.connect(g1);
        g1.connect(ctx.destination);
        osc1.start(t0);
        osc1.stop(t0 + dur + 0.03);

        const osc2 = ctx.createOscillator();
        const g2 = ctx.createGain();
        osc2.type = "sine";
        osc2.frequency.setValueAtTime(freq * 2, t0);
        g2.gain.setValueAtTime(0.001, t0);
        g2.gain.linearRampToValueAtTime(vol * 0.38, t0 + 0.008);
        g2.gain.exponentialRampToValueAtTime(0.001, t0 + dur * 0.68);
        osc2.connect(g2);
        g2.connect(ctx.destination);
        osc2.start(t0);
        osc2.stop(t0 + dur + 0.02);

        const osc3 = ctx.createOscillator();
        const g3 = ctx.createGain();
        osc3.type = "square";
        osc3.frequency.setValueAtTime(freq, t0);
        g3.gain.setValueAtTime(vol * 0.28, t0);
        g3.gain.exponentialRampToValueAtTime(0.001, t0 + 0.026);
        osc3.connect(g3);
        g3.connect(ctx.destination);
        osc3.start(t0);
        osc3.stop(t0 + 0.035);
      } catch (_) {}
    },

    playMutedTap(freq) {
      const ctx = this.getCtx();
      if (!ctx) return;
      try {
        const t0 = ctx.currentTime;
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime((freq || 240) * 0.65, t0);
        g.gain.setValueAtTime(0.024, t0);
        g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.065);
        osc.connect(g);
        g.connect(ctx.destination);
        osc.start(t0);
        osc.stop(t0 + 0.08);
      } catch (_) {}
    },

    startHold(keyId, freq) {
      this.stopHold(keyId);
      const ctx = this.getCtx();
      if (!ctx) return;
      try {
        const t0 = ctx.currentTime;
        const master = ctx.createGain();
        master.gain.setValueAtTime(0.001, t0);
        master.gain.linearRampToValueAtTime(0.085, t0 + 0.015);
        master.gain.linearRampToValueAtTime(0.055, t0 + 0.9);
        master.connect(ctx.destination);

        const o1 = ctx.createOscillator();
        o1.type = "triangle";
        o1.frequency.setValueAtTime(freq, t0);
        o1.connect(master);
        o1.start(t0);

        const o2 = ctx.createOscillator();
        const g2 = ctx.createGain();
        o2.type = "sine";
        o2.frequency.setValueAtTime(freq * 2, t0);
        g2.gain.setValueAtTime(0.32, t0);
        o2.connect(g2);
        g2.connect(master);
        o2.start(t0);

        this.activeHolds.set(keyId, { ctx, master, o1, o2 });
      } catch (_) {}
    },

    stopHold(keyId) {
      const v = this.activeHolds.get(keyId);
      if (!v) return;
      this.activeHolds.delete(keyId);
      try {
        const now = v.ctx.currentTime;
        v.master.gain.cancelScheduledValues(now);
        v.master.gain.setValueAtTime(Math.max(0.001, v.master.gain.value || 0.04), now);
        v.master.gain.exponentialRampToValueAtTime(0.0008, now + 0.05);
        v.o1.stop(now + 0.06);
        v.o2.stop(now + 0.06);
      } catch (_) {}
    },

    stopAllHolds() {
      for (const k of Array.from(this.activeHolds.keys())) {
        this.stopHold(k);
      }
    },

    playMiss() {
      const ctx = this.getCtx();
      if (!ctx) return;
      try {
        const t0 = ctx.currentTime;
        [115, 123].forEach(f => {
          const osc = ctx.createOscillator();
          const g = ctx.createGain();
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(f, t0);
          g.gain.setValueAtTime(0.04, t0);
          g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.12);
          osc.connect(g);
          g.connect(ctx.destination);
          osc.start(t0);
          osc.stop(t0 + 0.14);
        });
      } catch (_) {}
    },

    playChordWin() {
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((f, idx) => {
        setTimeout(() => this.playNote(f, 0.38, 0.08), idx * 55);
      });
    }
  };

  // Backing track synthesizer (drums + bass + pad) scheduled on the Web Audio clock.
  const BackingMusic = {
    noiseBuf: null,

    noise(ctx) {
      if (!this.noiseBuf || this.noiseBuf.sampleRate !== ctx.sampleRate) {
        const len = Math.floor(ctx.sampleRate * 0.3);
        const buf = ctx.createBuffer(1, len, ctx.sampleRate);
        const d = buf.getChannelData(0);
        for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
        this.noiseBuf = buf;
      }
      return this.noiseBuf;
    },

    kick(ctx, out, t) {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(150, t);
      o.frequency.exponentialRampToValueAtTime(45, t + 0.13);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(0.26, t + 0.005);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
      o.connect(g); g.connect(out);
      o.start(t); o.stop(t + 0.22);
    },

    snare(ctx, out, t) {
      const src = ctx.createBufferSource();
      src.buffer = this.noise(ctx);
      const hp = ctx.createBiquadFilter();
      hp.type = "highpass";
      hp.frequency.setValueAtTime(1300, t);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.075, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.14);
      src.connect(hp); hp.connect(g); g.connect(out);
      src.start(t); src.stop(t + 0.16);
      const o = ctx.createOscillator();
      const g2 = ctx.createGain();
      o.type = "triangle";
      o.frequency.setValueAtTime(190, t);
      g2.gain.setValueAtTime(0.05, t);
      g2.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
      o.connect(g2); g2.connect(out);
      o.start(t); o.stop(t + 0.1);
    },

    hat(ctx, out, t, vol) {
      const src = ctx.createBufferSource();
      src.buffer = this.noise(ctx);
      const hp = ctx.createBiquadFilter();
      hp.type = "highpass";
      hp.frequency.setValueAtTime(7200, t);
      const g = ctx.createGain();
      g.gain.setValueAtTime(vol || 0.03, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
      src.connect(hp); hp.connect(g); g.connect(out);
      src.start(t); src.stop(t + 0.05);
    },

    click(ctx, out, t, accent) {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "square";
      o.frequency.setValueAtTime(accent ? 1320 : 990, t);
      g.gain.setValueAtTime(accent ? 0.06 : 0.04, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
      o.connect(g); g.connect(out);
      o.start(t); o.stop(t + 0.06);
    },

    bass(ctx, out, t, freq, dur) {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "triangle";
      o.frequency.setValueAtTime(Math.max(55, freq), t);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(0.11, t + 0.012);
      g.gain.exponentialRampToValueAtTime(0.002, t + dur);
      o.connect(g); g.connect(out);
      o.start(t); o.stop(t + dur + 0.03);
    },

    pad(ctx, out, t, freqs, dur) {
      freqs.forEach((f) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "sine";
        o.frequency.setValueAtTime(f, t);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.linearRampToValueAtTime(0.022, t + 0.08);
        g.gain.setValueAtTime(0.022, t + Math.max(0.1, dur - 0.25));
        g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
        o.connect(g); g.connect(out);
        o.start(t); o.stop(t + dur + 0.03);
      });
    },

    scheduleBeat(m, beatIdx, t) {
      const ctx = m.ctx;
      const out = m.out;
      const bs = m.beatSec;
      const inBar = beatIdx % 4;
      const bar = Math.floor(beatIdx / 4);
      const chord = m.prog[bar % m.prog.length];
      try {
        if (beatIdx < LEAD_IN_BEATS) {
          // Count-in bar: clicks + kick so players lock onto the tempo before the first note.
          this.click(ctx, out, t, inBar === 0);
          if (inBar === 0 || inBar === 2) this.kick(ctx, out, t);
          this.hat(ctx, out, t + bs / 2, 0.02);
          if (inBar === 0) this.pad(ctx, out, t, chord, bs * 4);
          return;
        }
        if (inBar === 0 || inBar === 2) this.kick(ctx, out, t);
        else this.snare(ctx, out, t);
        this.hat(ctx, out, t, 0.028);
        this.hat(ctx, out, t + bs / 2, 0.018);
        if (inBar === 0) {
          this.pad(ctx, out, t, chord, bs * 4);
          this.bass(ctx, out, t, chord[0] / 2, bs * 0.9);
        } else if (inBar === 2) {
          this.bass(ctx, out, t, chord[2] / 2, bs * 0.9);
        } else {
          this.bass(ctx, out, t, chord[0] / 2, bs * 0.45);
        }
      } catch (_) {}
    }
  };

  function startBackingMusic() {
    if (!session) return;
    const ctx = PianoAudio.getCtx();
    if (!ctx) return;
    try {
      const out = ctx.createGain();
      out.gain.setValueAtTime(session.musicOn ? 0.9 : 0.0001, ctx.currentTime);
      out.connect(ctx.destination);
      const beatSec = 60 / session.diff.bpm;
      session.music = {
        ctx,
        out,
        beatSec,
        t0: ctx.currentTime + 0.08,
        nextBeat: 0,
        totalBeats: Math.ceil(session.chartDuration / beatSec) + 2,
        prog: PROGRESSIONS[session.diff.scaleKey] || PROGRESSIONS.folk,
        clockOk: ctx.state === "running"
      };
    } catch (_) {
      session.music = null;
    }
  }

  function scheduleBackingMusic() {
    const m = session && session.music;
    if (!m) return;
    const horizon = m.ctx.currentTime + 0.3;
    while (m.nextBeat <= m.totalBeats && m.t0 + m.nextBeat * m.beatSec < horizon) {
      const t = m.t0 + m.nextBeat * m.beatSec;
      if (t >= m.ctx.currentTime - 0.02) BackingMusic.scheduleBeat(m, m.nextBeat, t);
      m.nextBeat += 1;
    }
  }

  function stopBackingMusic() {
    const m = session && session.music;
    if (!m) return;
    session.music = null;
    try {
      const now = m.ctx.currentTime;
      m.out.gain.cancelScheduledValues(now);
      m.out.gain.setValueAtTime(Math.max(0.0001, m.out.gain.value || 0.5), now);
      m.out.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
      setTimeout(() => { try { m.out.disconnect(); } catch (_) {} }, 400);
    } catch (_) {}
  }

  function setMusicEnabled(on) {
    if (!session) return;
    session.musicOn = Boolean(on);
    try { localStorage.setItem("haru_mg_music", session.musicOn ? "1" : "0"); } catch (_) {}
    const m = session.music;
    if (m) {
      try {
        const now = m.ctx.currentTime;
        m.out.gain.cancelScheduledValues(now);
        m.out.gain.setValueAtTime(session.musicOn ? 0.9 : 0.0001, now);
      } catch (_) {}
    }
    const btn = document.getElementById("mg-music-btn");
    if (btn) {
      const isVi = session.lang !== "en";
      btn.textContent = session.musicOn ? (isVi ? "♪ NHẠC: BẬT" : "♪ MUSIC: ON") : (isVi ? "♪ NHẠC: TẮT" : "♪ MUSIC: OFF");
      btn.style.color = session.musicOn ? "var(--px-mint)" : "var(--px-coral, #f45b69)";
    }
  }

  function generateChart(diff) {
    const scale = SCALES[diff.scaleKey] || SCALES.folk;
    const beatSec = 60 / diff.bpm;
    const notes = [];
    let noteIdSeq = 1;
    let chordGroupSeq = 1;
    let prevLane = Math.floor(Math.random() * LANE_COUNT);
    let dir = Math.random() < 0.5 ? 1 : -1;
    let stepIdx = 0;
    let beat = LEAD_IN_BEATS;
    let lastEnd = 0;

    while (notes.length < diff.notes) {
      if (stepIdx > 0 && stepIdx % 4 === 0 && Math.random() < 0.35) dir = -dir;
      let lane = prevLane + dir;
      if (lane < 0 || lane >= LANE_COUNT) {
        dir = -dir;
        lane = Math.max(0, Math.min(LANE_COUNT - 1, prevLane + dir));
      }
      // Occasionally repeat the same key — easy and musical.
      if (stepIdx % 6 === 5) lane = prevLane;

      const hitTime = beat * beatSec;
      let lane2 = -1;
      if (diff.doubleProb > 0 && notes.length + 1 < diff.notes && stepIdx > 2 && Math.random() < diff.doubleProb) {
        // Chords always use one key per hand (left: D/F, right: J/K).
        lane2 = lane < 2 ? 2 + (lane % 2) : lane % 2;
      }

      let holdDur = 0;
      if (lane2 === -1 && diff.holdProb > 0 && notes.length < diff.notes - 1 && stepIdx > 1 && Math.random() < diff.holdProb) {
        holdDur = Math.max(0.45, Math.min(0.9, beatSec * 1.0));
      }

      const groupId = lane2 !== -1 ? chordGroupSeq++ : 0;
      notes.push({
        id: noteIdSeq++, lane, hitTime, holdDur, chordGroupId: groupId, freq: scale[lane],
        y: -40, tailY: -40, hit: false, holding: false, completed: false, missed: false
      });
      if (lane2 !== -1 && notes.length < diff.notes) {
        notes.push({
          id: noteIdSeq++, lane: lane2, hitTime, holdDur: 0, chordGroupId: groupId, freq: scale[lane2],
          y: -40, tailY: -40, hit: false, holding: false, completed: false, missed: false
        });
      }
      lastEnd = hitTime + holdDur;

      prevLane = lane;
      stepIdx += 1;
      // One note per beat; holds/chords get an extra beat of rest; a breather every 4 notes on lower tiers.
      let adv = 1;
      if (holdDur > 0 || lane2 !== -1) adv += 1;
      if (diff.rank <= 8 && stepIdx % 4 === 0) adv += 1;
      beat += adv;
    }

    return { notes, totalDuration: lastEnd + beatSec * 2 };
  }

  let session = null;

  function pxIconSafe(name, size) {
    return typeof window.pxIcon === "function" ? window.pxIcon(name, size || 16) : "";
  }

  function starStr(n) {
    const cap = Math.min(6, Math.max(1, n));
    return n > 6 ? `LV.${n}` : "*".repeat(cap);
  }

  function computeAccuracyAndGrade(st) {
    const judged = st.perfects + st.greats + st.goods + st.misses;
    if (!judged) return { accuracy: 100, grade: "S" };
    const pts = st.perfects * 1.0 + st.greats * 0.78 + st.goods * 0.55;
    const accuracy = Math.max(0, Math.min(100, Math.round((pts / judged) * 100)));
    let grade = "B";
    if (st.misses === 0 && accuracy >= 96) grade = "S+";
    else if (accuracy >= 90) grade = "S";
    else if (accuracy >= 80) grade = "A";
    else if (accuracy >= 65) grade = "B";
    else grade = "C";
    return { accuracy, grade };
  }

  function finishSong(won, reason) {
    if (!session || session.finished) return;
    session.finished = true;
    PianoAudio.stopAllHolds();
    stopBackingMusic();
    const { accuracy, grade } = computeAccuracyAndGrade(session);
    if (won) PianoAudio.playChordWin();
    else PianoAudio.playMiss();

    const payload = {
      won: Boolean(won),
      score: Math.round(session.score),
      accuracy,
      maxCombo: session.maxCombo,
      grade: won ? grade : "F",
      details: reason || (won ? "piano_clear" : "piano_failed")
    };
    const cb = session.onDone;
    stopSession();
    cb(payload);
  }

  function addParticles(lane, color, count) {
    if (!session) return;
    const cx = START_X + lane * LANE_W + LANE_W / 2;
    for (let i = 0; i < count; i++) {
      const ang = -Math.PI + Math.random() * Math.PI;
      const spd = 38 + Math.random() * 78;
      session.particles.push({
        x: cx + (Math.random() - 0.5) * 26,
        y: HIT_Y - 2,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd - 22,
        life: 0.34 + Math.random() * 0.16,
        maxLife: 0.5,
        sz: Math.random() < 0.45 ? 4 : 3,
        color
      });
    }
  }

  function setJudge(text, color) {
    if (!session) return;
    session.judgeText = text;
    session.judgeColor = color;
    session.judgeTimer = 0.52;
  }

  function updateDomKeyVisual(lane) {
    if (!session || !session.keyEls) return;
    const el = session.keyEls[lane];
    if (!el) return;
    const active = session.laneKeyDown[lane] || session.lanePointers[lane].size > 0;
    el.classList.toggle("pressed", active);
  }

  function beginCountdown() {
    if (!session || session.finished || session.stagePhase !== "briefing") return;
    session.stagePhase = "countdown";
    session.countdown = 3.0;
    session.lastCountBeat = 3;
    const ov = document.getElementById("mg-briefing-overlay");
    if (ov) ov.style.display = "none";
    PianoAudio.playNote(440.0, 0.22, 0.065);
    renderChallengeCanvas();
  }

  function triggerLaneHit(lane) {
    if (!session || session.finished) return;
    if (lane < 0 || lane >= LANE_COUNT) return;
    session.laneFlash[lane] = 0.22;

    if (session.stagePhase !== "playing") {
      const scale = SCALES[session.diff.scaleKey] || SCALES.folk;
      session.laneGood[lane] = 0.18;
      PianoAudio.playNote(scale[lane], 0.24, 0.07);
      return;
    }

    const diff = session.diff;
    const notes = session.notes;
    let best = null;
    let bestDist = 9999;

    for (let i = 0; i < notes.length; i++) {
      const n = notes[i];
      if (n.lane !== lane || n.hit || n.missed) continue;
      const d = Math.abs(n.y - HIT_Y);
      if (d < bestDist) {
        bestDist = d;
        best = n;
      }
    }

    const hitLimit = diff.goodPx + 14;
    if (best && bestDist <= hitLimit) {
      session.ghostTaps[lane] = 0;
      best.hit = true;
      session.combo += 1;
      if (session.combo > session.maxCombo) session.maxCombo = session.combo;

      let pts = 50;
      if (bestDist <= diff.perfectPx) {
        pts = 100;
        session.perfects += 1;
        setJudge("PERFECT!", "#ecc570");
        addParticles(lane, "#ecc570", 8);
        session.laneGood[lane] = 0.28;
      } else if (bestDist <= diff.goodPx) {
        pts = 75;
        session.greats += 1;
        setJudge("GREAT!", "#6fdbbf");
        addParticles(lane, LANE_COLORS[lane], 6);
        session.laneGood[lane] = 0.22;
      } else {
        pts = 55;
        session.goods += 1;
        setJudge("GOOD", "#7ec8d9");
        addParticles(lane, "#7ec8d9", 4);
        session.laneGood[lane] = 0.16;
      }

      const comboMul = 1 + Math.min(1.0, Math.floor(session.combo / 5) * 0.1);
      session.score += Math.round(pts * comboMul);

      if (best.holdDur > 0) {
        best.holding = true;
        session.activeHoldByLane[lane] = best;
        PianoAudio.startHold(`h_${lane}_${best.id}`, best.freq);
      } else {
        best.completed = true;
        session.clearedNotes += 1;
        PianoAudio.playNote(best.freq, 0.34, 0.09);
      }
      return;
    }

    // Empty tap: soft feedback only (v6 removed the anti-spam penalty to keep the game relaxed).
    const scale = SCALES[diff.scaleKey] || SCALES.folk;
    PianoAudio.playMutedTap(scale[lane]);
  }

  function releaseLaneHoldCheck(lane) {
    if (!session || session.finished) return;
    if (session.laneKeyDown[lane] || session.lanePointers[lane].size > 0) return;

    const hn = session.activeHoldByLane[lane];
    if (!hn || hn.missed || hn.completed) return;

    session.activeHoldByLane[lane] = null;
    hn.holding = false;
    PianoAudio.stopHold(`h_${lane}_${hn.id}`);

    const remain = (hn.hitTime + hn.holdDur) - session.elapsed;
    const grace = Math.max(0.28, hn.holdDur * 0.45);
    if (remain <= grace) {
      hn.completed = true;
      session.clearedNotes += 1;
      session.score += 80;
      session.combo += 1;
      if (session.combo > session.maxCombo) session.maxCombo = session.combo;
      session.laneGood[lane] = 0.24;
      setJudge("HOLD OK!", "#6fdbbf");
      addParticles(lane, "#6fdbbf", 6);
      PianoAudio.playNote(hn.freq * 1.5, 0.24, 0.065);
    } else {
      hn.missed = true;
      session.misses += 1;
      session.combo = 0;
      session.missFlash = 0.28;
      setJudge(session.lang !== "en" ? "THẢ SỚM!" : "EARLY UP!", "#f45b69");
      PianoAudio.playMiss();
      if (session.misses > session.diff.maxMiss) {
        finishSong(false, "piano_hold_dropped");
      }
    }
  }

  function stepSession(dt) {
    if (!session || session.finished) return;

    for (let l = 0; l < LANE_COUNT; l++) {
      if (session.laneFlash[l] > 0) session.laneFlash[l] = Math.max(0, session.laneFlash[l] - dt);
      if (session.laneGood[l] > 0) session.laneGood[l] = Math.max(0, session.laneGood[l] - dt);
    }

    if (session.stagePhase === "briefing") {
      return;
    }

    if (session.stagePhase === "countdown") {
      session.countdown -= dt;
      const beat = Math.max(1, Math.min(3, Math.ceil(session.countdown)));
      if (beat < session.lastCountBeat && session.countdown > 0) {
        session.lastCountBeat = beat;
        const chimeFreq = beat === 2 ? 523.25 : 659.25;
        PianoAudio.playNote(chimeFreq, 0.22, 0.065);
      }
      if (session.countdown <= 0) {
        session.stagePhase = "playing";
        session.elapsed = 0;
        startBackingMusic();
      }
      return;
    }

    // Keep notes locked to the music: drive time from the audio clock whenever it is running.
    const m = session.music;
    if (m && m.clockOk && m.ctx.state === "running") {
      const lat = Math.min(0.2, Math.max(0, m.ctx.outputLatency || m.ctx.baseLatency || 0));
      session.elapsed = m.ctx.currentTime - m.t0 - lat;
      scheduleBackingMusic();
    } else {
      session.elapsed += dt;
      if (m) scheduleBackingMusic();
    }
    if (session.missFlash > 0) session.missFlash = Math.max(0, session.missFlash - dt);
    if (session.judgeTimer > 0) session.judgeTimer = Math.max(0, session.judgeTimer - dt);

    for (let i = session.particles.length - 1; i >= 0; i--) {
      const p = session.particles[i];
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += 150 * dt;
      p.life -= dt;
      if (p.life <= 0) session.particles.splice(i, 1);
    }

    const diff = session.diff;
    const notes = session.notes;
    const missY = HIT_Y + diff.goodPx + 18;
    let unresolved = 0;

    for (let i = 0; i < notes.length; i++) {
      const n = notes[i];
      n.y = HIT_Y - (n.hitTime - session.elapsed) * diff.scroll;
      if (n.holdDur > 0) {
        n.tailY = HIT_Y - ((n.hitTime + n.holdDur) - session.elapsed) * diff.scroll;
      }

      if (n.completed || n.missed) continue;

      if (n.holding) {
        if (session.elapsed >= n.hitTime + n.holdDur) {
          n.holding = false;
          n.completed = true;
          session.activeHoldByLane[n.lane] = null;
          PianoAudio.stopHold(`h_${n.lane}_${n.id}`);
          session.clearedNotes += 1;
          session.score += 80;
          session.combo += 1;
          if (session.combo > session.maxCombo) session.maxCombo = session.combo;
          session.laneGood[n.lane] = 0.25;
          setJudge("HOLD OK!", "#ecc570");
          addParticles(n.lane, "#ecc570", 7);
          PianoAudio.playNote(n.freq * 1.5, 0.26, 0.065);
          continue;
        }
        unresolved += 1;
        continue;
      }

      if (!n.hit && n.y > missY) {
        n.missed = true;
        session.misses += 1;
        session.combo = 0;
        session.missFlash = 0.30;
        setJudge("MISS!", "#f45b69");
        PianoAudio.playMiss();
        if (session.misses > diff.maxMiss) {
          finishSong(false, "piano_missed");
          return;
        }
        continue;
      }

      unresolved += 1;
    }

    updateLightweightHud();

    if (unresolved === 0 && session.elapsed >= notes[notes.length - 1].hitTime + 0.18) {
      finishSong(true, "piano_clear");
    }
  }

  function updateLightweightHud() {
    if (!session) return;
    const hpRem = Math.max(0, (session.diff.maxMiss + 1) - session.misses);
    const hpTotal = session.diff.maxMiss + 1;
    const hpKey = `${hpRem}/${hpTotal}`;
    if (session.lastHud.hp !== hpKey && session.hudHpEl) {
      session.lastHud.hp = hpKey;
      session.hudHpEl.textContent = session.lang !== "en" ? `Mạng: ${hpKey}` : `Lives: ${hpKey}`;
      session.hudHpEl.style.color = hpRem <= 1 ? "#f45b69" : "#6fdbbf";
    }
    if (session.lastHud.combo !== session.combo && session.hudComboEl) {
      session.lastHud.combo = session.combo;
      session.hudComboEl.textContent = `COMBO ×${session.combo}`;
      session.hudComboEl.style.color = session.combo >= 10 ? "#ecc570" : "#7ec8d9";
    }
    const done = session.clearedNotes + session.misses;
    const progKey = `${done}/${session.notes.length}`;
    if (session.lastHud.prog !== progKey && session.hudProgEl) {
      session.lastHud.prog = progKey;
      session.hudProgEl.textContent = progKey;
    }
  }

  function renderChallengeCanvas() {
    if (!session || !session.ctx) return;
    const ctx = session.ctx;
    const diff = session.diff;
    const isVi = session.lang !== "en";
    ctx.imageSmoothingEnabled = false;

    // Background & outer frame
    ctx.fillStyle = "#060e1a";
    ctx.fillRect(0, 0, CW, CH);

    // Beat grid locked to the music (bright line = start of a bar)
    const beatSecR = 60 / diff.bpm;
    if (session.stagePhase === "playing") {
      const firstBeat = Math.floor(session.elapsed / beatSecR);
      for (let b = firstBeat; b < firstBeat + 12; b++) {
        const gy = Math.round(HIT_Y - (b * beatSecR - session.elapsed) * diff.scroll);
        if (gy < 8 || gy > HIT_Y) continue;
        ctx.fillStyle = b % 4 === 0 ? "#16304d" : "#0d1d32";
        ctx.fillRect(START_X, gy, LANE_W * LANE_COUNT, b % 4 === 0 ? 2 : 1);
      }
    }

    // 4 Vertical piano lanes
    for (let l = 0; l < LANE_COUNT; l++) {
      const lx = START_X + l * LANE_W;
      const isPressed = session.laneKeyDown[l] || session.lanePointers[l].size > 0;
      const lCol = LANE_COLORS[l];

      ctx.fillStyle = isPressed ? "#132944" : (l % 2 === 0 ? "#091525" : "#0b192d");
      ctx.fillRect(lx + 1, 8, LANE_W - 2, CH - 14);

      if (session.laneFlash[l] > 0 || isPressed) {
        ctx.fillStyle = session.laneGood[l] > 0 ? "rgba(111, 219, 191, 0.16)" : "rgba(255, 255, 255, 0.08)";
        ctx.fillRect(lx + 3, 12, LANE_W - 6, HIT_Y - 12);
      }

      ctx.fillStyle = "#193352";
      ctx.fillRect(lx, 8, 1, CH - 14);
      if (l === LANE_COUNT - 1) ctx.fillRect(lx + LANE_W - 1, 8, 1, CH - 14);

      // Receptor box on strike line
      ctx.fillStyle = isPressed ? lCol : "#10233a";
      ctx.fillRect(lx + 5, HIT_Y - 8, LANE_W - 10, 16);
      ctx.strokeStyle = isPressed ? "#ffffff" : lCol;
      ctx.lineWidth = 2;
      ctx.strokeRect(lx + 5, HIT_Y - 8, LANE_W - 10, 16);

      ctx.fillStyle = isPressed ? "#06101c" : lCol;
      ctx.font = "bold 10px monospace";
      ctx.textAlign = "center";
      ctx.fillText(KEY_LABELS[l], lx + LANE_W / 2, HIT_Y + 3);
    }

    // Golden horizontal strike line (pulses on every beat of the backing track)
    let beatPulse = 0;
    if (session.stagePhase === "playing" && session.elapsed > 0) {
      const ph = (session.elapsed / beatSecR) % 1;
      beatPulse = ph < 0.16 ? 1 - ph / 0.16 : 0;
    }
    ctx.fillStyle = beatPulse > 0 ? "#fff3c4" : "#ecc570";
    ctx.fillRect(START_X, HIT_Y - 1 - Math.round(beatPulse), LANE_W * LANE_COUNT, 2 + Math.round(beatPulse * 2));

    // Draw golden chord connector lines between simultaneous notes
    const visibleChords = new Map();
    for (let i = 0; i < session.notes.length; i++) {
      const n = session.notes[i];
      if (!n.chordGroupId || n.hit || n.missed) continue;
      if (n.y < -12 || n.y > CH + 12) continue;
      const arr = visibleChords.get(n.chordGroupId) || [];
      arr.push(n);
      visibleChords.set(n.chordGroupId, arr);
    }
    visibleChords.forEach((arr) => {
      if (arr.length < 2) return;
      const a = arr[0];
      const b = arr[1];
      const x1 = START_X + Math.min(a.lane, b.lane) * LANE_W + LANE_W / 2;
      const x2 = START_X + Math.max(a.lane, b.lane) * LANE_W + LANE_W / 2;
      const cy = Math.round(a.y);
      ctx.fillStyle = "#ecc570";
      ctx.fillRect(x1, cy - 2, x2 - x1, 4);
    });

    // Draw Hold Tails & Tile Bodies
    for (let i = 0; i < session.notes.length; i++) {
      const n = session.notes[i];
      if (n.completed || n.missed) continue;
      const lx = START_X + n.lane * LANE_W;
      const col = LANE_COLORS[n.lane];

      if (n.holdDur > 0) {
        const headY = n.holding ? HIT_Y : n.y;
        const topY = Math.max(6, Math.round(n.tailY));
        const botY = Math.min(CH - 6, Math.round(headY));
        if (botY > topY && botY >= 0 && topY <= CH) {
          ctx.fillStyle = n.holding ? "#ffffff" : col;
          ctx.globalAlpha = n.holding ? 0.55 : 0.36;
          ctx.fillRect(lx + 18, topY, LANE_W - 36, botY - topY);
          ctx.globalAlpha = 1;
          ctx.strokeStyle = n.holding ? "#ecc570" : col;
          ctx.lineWidth = 2;
          ctx.strokeRect(lx + 18, topY, LANE_W - 36, Math.max(4, botY - topY));
          // Hold cap bar
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(lx + 14, topY - 2, LANE_W - 28, 4);
        }
      }

      if (n.hit && !n.holding) continue;
      const drawY = n.holding ? HIT_Y : Math.round(n.y);
      if (drawY < -18 || drawY > CH + 18) continue;

      const tileX = lx + 6;
      const tileW = LANE_W - 12;
      const tileH = 18;
      const tileTop = drawY - 9;

      // Crisp 16-bit Piano Tile block
      ctx.fillStyle = "#040811";
      ctx.fillRect(tileX - 1, tileTop - 1, tileW + 2, tileH + 2);
      ctx.fillStyle = n.holding ? "#ecc570" : col;
      ctx.fillRect(tileX, tileTop, tileW, tileH);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(tileX + 3, tileTop + 2, tileW - 6, 4);
      if (n.chordGroupId) {
        ctx.fillStyle = "#ecc570";
        ctx.fillRect(tileX + tileW - 10, tileTop + 3, 6, 6);
      }
    }

    // Particles
    for (let i = 0; i < session.particles.length; i++) {
      const p = session.particles[i];
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, p.life / p.maxLife);
      ctx.fillRect(Math.round(p.x), Math.round(p.y), p.sz, p.sz);
    }
    ctx.globalAlpha = 1;

    // Opening countdown (3 -> 2 -> 1) or GO! flash
    if (session.stagePhase === "countdown") {
      const cntNum = Math.max(1, Math.min(3, Math.ceil(session.countdown)));
      ctx.fillStyle = "rgba(6, 14, 26, 0.88)";
      ctx.fillRect(54, 62, CW - 108, 92);
      ctx.strokeStyle = session.rarityColor;
      ctx.lineWidth = 2;
      ctx.strokeRect(54, 62, CW - 108, 92);
      ctx.textAlign = "center";
      ctx.fillStyle = "#ecc570";
      ctx.font = "bold 40px monospace";
      ctx.fillText(String(cntNum), CW / 2, 110);
      ctx.fillStyle = "#6fdbbf";
      ctx.font = "bold 11px monospace";
      ctx.fillText(isVi ? "CHUẨN BỊ NGÓN TAY!" : "HANDS READY!", CW / 2, 131);
      ctx.fillStyle = "#cbd5e1";
      ctx.font = "10px monospace";
      ctx.fillText(`${session.countdown.toFixed(1)}s · ${diff.bpm} BPM · ${diff.notes} ${isVi ? "NỐT" : "NOTES"}`, CW / 2, 146);
    } else if (session.stagePhase === "playing" && session.elapsed < 0.45) {
      ctx.textAlign = "center";
      ctx.fillStyle = "#6fdbbf";
      ctx.font = "bold 18px monospace";
      ctx.fillText(isVi ? "BẮT ĐẦU!" : "PLAY!", CW / 2, 110);
    } else if (session.stagePhase === "playing" && session.judgeTimer > 0 && session.judgeText) {
      ctx.textAlign = "center";
      ctx.fillStyle = "#040811";
      ctx.font = "bold 14px monospace";
      ctx.fillText(session.judgeText, CW / 2 + 1, 169);
      ctx.fillStyle = session.judgeColor || "#ffffff";
      ctx.fillText(session.judgeText, CW / 2, 168);
    }

    // Live score top bar inside canvas
    ctx.textAlign = "left";
    ctx.fillStyle = "#f1f5f9";
    ctx.font = "bold 10px monospace";
    ctx.fillText(`${Math.round(session.score)} PTS`, START_X + 4, 18);
    ctx.textAlign = "right";
    ctx.fillStyle = session.combo >= 8 ? "#ecc570" : "#7ec8d9";
    ctx.fillText(session.combo > 0 ? `×${session.combo}` : "", START_X + LANE_W * LANE_COUNT - 4, 18);
    ctx.textAlign = "left";

    // Miss edge flash + outer border
    if (session.missFlash > 0) {
      ctx.strokeStyle = "#f45b69";
      ctx.lineWidth = 4;
      ctx.strokeRect(2, 2, CW - 4, CH - 4);
    } else {
      ctx.strokeStyle = session.rarityColor;
      ctx.lineWidth = 2;
      ctx.strokeRect(1, 1, CW - 2, CH - 2);
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
    stepSession(dt);
    if (!session || session.finished) return;
    renderChallengeCanvas();
    session.rafId = requestAnimationFrame(loop);
  }

  function keyToLane(ev) {
    if (ev.code === "KeyD" || ev.code === "ArrowLeft") return 0;
    if (ev.code === "KeyF" || ev.code === "ArrowDown") return 1;
    if (ev.code === "KeyJ" || ev.code === "ArrowUp") return 2;
    if (ev.code === "KeyK" || ev.code === "ArrowRight") return 3;
    return -1;
  }

  function onKeyDown(ev) {
    if (!session || session.finished) return;
    if (session.stagePhase === "briefing" && (ev.code === "Space" || ev.code === "Enter")) {
      ev.preventDefault();
      if (!ev.repeat) beginCountdown();
      return;
    }
    const lane = keyToLane(ev);
    if (lane === -1) return;
    ev.preventDefault();
    if (ev.repeat) return;
    session.laneKeyDown[lane] = true;
    updateDomKeyVisual(lane);
    triggerLaneHit(lane);
  }

  function onKeyUp(ev) {
    if (!session) return;
    const lane = keyToLane(ev);
    if (lane === -1) return;
    session.laneKeyDown[lane] = false;
    updateDomKeyVisual(lane);
    releaseLaneHoldCheck(lane);
  }

  function onWindowPointerUp(ev) {
    if (!session) return;
    const lane = session.pointerToLane.get(ev.pointerId);
    if (lane === undefined) return;
    session.pointerToLane.delete(ev.pointerId);
    session.lanePointers[lane].delete(ev.pointerId);
    updateDomKeyVisual(lane);
    releaseLaneHoldCheck(lane);
  }

  function bindPointerDown(el, laneResolver) {
    if (!el) return;
    el.addEventListener("pointerdown", (ev) => {
      if (!session || session.finished) return;
      ev.preventDefault();
      const lane = laneResolver(ev);
      if (lane < 0 || lane >= LANE_COUNT) return;
      session.pointerToLane.set(ev.pointerId, lane);
      session.lanePointers[lane].add(ev.pointerId);
      updateDomKeyVisual(lane);
      triggerLaneHit(lane);
    });
  }

  function renderHudAndMount() {
    if (!session || !session.rootEl) return;
    const diff = session.diff;
    const isVi = session.lang !== "en";
    const songTitle = isVi ? diff.songVi : diff.songEn;
    const badgesHtml = diff.badges.map(b => `<span class="tab-badge" style="color:var(--px-gold);">${b}</span>`).join("");

    const keysHtml = [0, 1, 2, 3].map(l => `
      <button type="button" class="mg-piano-key lane-${l}" id="mg-pkey-${l}" aria-label="${NOTE_NAMES[l]} (${KEY_LABELS[l]})">
        <span style="font-size:11px;font-weight:700;color:${LANE_COLORS[l]};">${NOTE_NAMES[l]}</span>
        <span class="px-num" style="font-size:18px;color:#f1f5f9;">${KEY_LABELS[l]}</span>
      </button>`).join("");

    session.rootEl.innerHTML = `
      <div class="mg-shell" style="border-color:${session.rarityColor};">
        <div class="row-between" style="flex-wrap:wrap;gap:6px;">
          <div class="inline-ico" style="flex-wrap:wrap;gap:5px;">
            <span class="rarity-pill" style="color:${session.rarityColor};">${diff.labelEn}</span>
            <span class="tab-badge" style="color:var(--px-gold);">${starStr(diff.stars)}</span>
            <strong style="font-size:12.5px;color:#f1f5f9;">${songTitle}</strong>
            ${badgesHtml}
          </div>
          <span class="tab-badge" style="color:var(--px-cyan);">${diff.bpm} BPM</span>
        </div>
        <div class="mg-hud-strip">
          <span id="mg-hud-hp" style="font-weight:700;color:#6fdbbf;">${isVi ? `Mạng: ${diff.maxMiss + 1}/${diff.maxMiss + 1}` : `Lives: ${diff.maxMiss + 1}/${diff.maxMiss + 1}`}</span>
          <span id="mg-hud-combo" style="font-weight:700;color:#7ec8d9;">COMBO ×0</span>
          <span id="mg-hud-prog" style="font-weight:700;color:var(--px-gold);">0/${session.notes.length}</span>
          <button type="button" id="mg-music-btn" class="tab-badge" style="cursor:pointer;background:transparent;font:inherit;font-weight:700;color:${session.musicOn ? "var(--px-mint)" : "#f45b69"};">${session.musicOn ? (isVi ? "♪ NHẠC: BẬT" : "♪ MUSIC: ON") : (isVi ? "♪ NHẠC: TẮT" : "♪ MUSIC: OFF")}</button>
        </div>
        <div class="muted" style="font-size:11px;margin-top:5px;">
          ${isVi
            ? "Nghe nhạc nền: mỗi nốt rơi chạm vạch vàng đúng 1 nhịp trống. Bấm D - F - J - K hoặc chạm phím đàn (giữ nốt dài!)."
            : "Follow the beat: every note lands on the gold line on a drum beat. Press D - F - J - K or tap the keys (hold long notes!)."}
        </div>
        <div class="mg-canvas-box">
          <canvas id="mg-canvas" width="${CW}" height="${CH}"></canvas>
          <div id="mg-briefing-overlay" class="mg-briefing-overlay">
            <div class="row-between" style="gap:6px;">
              <strong style="color:var(--px-gold);font-size:12.5px;">${isVi ? "LUẬT CHƠI ĐÁNH ĐÀN" : "PIANO RULES"}</strong>
              <span class="tab-badge" style="color:var(--px-cyan);">${diff.bpm} BPM · ${session.notes.length} ${isVi ? "NỐT" : "NOTES"}</span>
            </div>
            <div class="mg-briefing-rules">
              <div class="mg-rule-row"><span class="mg-rule-dot" style="background:#38bdf8;"></span><span>${isVi ? "<strong>Nốt đơn:</strong> Bấm 4 phím dưới (hoặc <strong>D · F · J · K</strong>) khi nốt chạm <strong>vạch vàng</strong>." : "<strong>Single:</strong> Tap 4 keys below (or <strong>D · F · J · K</strong>) at the <strong>gold line</strong>."}</span></div>
              <div class="mg-rule-row"><span class="mg-rule-dot" style="background:#ecc570;"></span><span>${isVi ? "<strong>Hợp âm đôi:</strong> Nốt nối thanh vàng → chạm <strong>cùng lúc 2 phím</strong> (hỗ trợ đa điểm)." : "<strong>Chord:</strong> Gold-linked notes → tap <strong>2 keys together</strong>."}</span></div>
              <div class="mg-rule-row"><span class="mg-rule-dot" style="background:#6fdbbf;"></span><span>${isVi ? "<strong>Nốt giữ dài:</strong> Có đuôi sáng → <strong>nhấn giữ</strong> đến gần hết đuôi mới thả." : "<strong>Hold:</strong> Bright tail → <strong>hold</strong> until near the end."}</span></div>
              <div class="mg-rule-row"><span class="mg-rule-dot" style="background:#e879f9;"></span><span>${isVi ? "<strong>Có nhạc nền:</strong> 4 tiếng \"tích\" đếm nhịp trước, sau đó mỗi nốt rơi đúng <strong>1 nhịp trống</strong>. Vạch vàng nháy theo nhịp — cứ bấm theo nhạc!" : "<strong>Backing music:</strong> 4 count-in clicks, then each note lands <strong>on a drum beat</strong>. The gold line flashes on the beat."}</span></div>
              <div class="mg-rule-row"><span class="mg-rule-dot" style="background:#7ec8d9;"></span><span>${isVi ? `Khung chấm rộng, <strong>${diff.maxMiss + 1} mạng</strong>, bấm hụt vào khoảng trống <strong>không bị trừ mạng</strong>.` : `Wide timing window, <strong>${diff.maxMiss + 1} lives</strong>, empty taps are <strong>not penalized</strong>.`}</span></div>
            </div>
            <div style="font-size:10.5px;color:var(--px-mint);">${isVi ? "Bấm thử 4 phím đàn bên dưới để thử tiếng trước khi bắt đầu!" : "Tap any of the 4 keys below to warm up first!"}</div>
            <button type="button" class="btn btn-emerald" id="mg-start-btn" style="width:100%;padding:9px 10px;font-size:12.5px;">
              ${pxIconSafe("bolt", 15)} ${isVi ? "SẴN SÀNG · BẮT ĐẦU! (SPACE)" : "READY · START SONG! (SPACE)"}
            </button>
          </div>
        </div>
        <div class="mg-piano-deck">${keysHtml}</div>
      </div>`;

    session.canvas = document.getElementById("mg-canvas");
    session.ctx = session.canvas ? session.canvas.getContext("2d") : null;
    session.hudHpEl = document.getElementById("mg-hud-hp");
    session.hudComboEl = document.getElementById("mg-hud-combo");
    session.hudProgEl = document.getElementById("mg-hud-prog");
    session.keyEls = [0, 1, 2, 3].map(l => document.getElementById(`mg-pkey-${l}`));

    const startBtn = document.getElementById("mg-start-btn");
    const musicBtn = document.getElementById("mg-music-btn");
    if (musicBtn) {
      musicBtn.addEventListener("click", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        setMusicEnabled(!session.musicOn);
      });
    }
    if (startBtn) {
      startBtn.addEventListener("click", (ev) => {
        ev.preventDefault();
        beginCountdown();
      });
    }

    session.keyEls.forEach((el, l) => bindPointerDown(el, () => l));
    bindPointerDown(session.canvas, (ev) => {
      if (!session || session.stagePhase === "briefing") return -1;
      const rect = session.canvas.getBoundingClientRect();
      const relX = (ev.clientX - rect.left) / Math.max(1, rect.width);
      const cx = relX * CW;
      const l = Math.floor((cx - START_X) / LANE_W);
      return Math.max(0, Math.min(LANE_COUNT - 1, l));
    });

    renderChallengeCanvas();
  }

  function stopSession() {
    if (!session) return;
    if (session.rafId) cancelAnimationFrame(session.rafId);
    PianoAudio.stopAllHolds();
    stopBackingMusic();
    window.removeEventListener("keydown", onKeyDown);
    window.removeEventListener("keyup", onKeyUp);
    window.removeEventListener("pointerup", onWindowPointerUp);
    window.removeEventListener("pointercancel", onWindowPointerUp);
    session = null;
  }

  window.HaruMiniGame = {
    RARITY_PROFILES,
    getProfile,
    computeDifficulty,
    isActive() { return Boolean(session && !session.finished); },
    beginNow() { beginCountdown(); },
    stop() { stopSession(); },
    start(rootEl, opts) {
      stopSession();
      if (!rootEl) return;
      const preview = (opts && opts.catchPreview) || {};
      const lang = (opts && opts.lang) || "vi";
      const diff = computeDifficulty(preview, lang);
      const chart = generateChart(diff);

      session = {
        rootEl,
        lang,
        rarityId: diff.rarityId,
        rarityColor: preview.rarity_color || "#6fdbbf",
        diff,
        notes: chart.notes,
        chartDuration: chart.totalDuration,
        music: null,
        musicOn: (() => { try { return localStorage.getItem("haru_mg_music") !== "0"; } catch (_) { return true; } })(),
        stagePhase: "briefing",
        countdown: 0,
        lastCountBeat: 4,
        elapsed: 0,
        score: 0,
        combo: 0,
        maxCombo: 0,
        perfects: 0,
        greats: 0,
        goods: 0,
        misses: 0,
        clearedNotes: 0,
        missFlash: 0,
        judgeText: "",
        judgeColor: "#ffffff",
        judgeTimer: 0,
        particles: [],
        laneFlash: [0, 0, 0, 0],
        laneGood: [0, 0, 0, 0],
        laneKeyDown: [false, false, false, false],
        lanePointers: [new Set(), new Set(), new Set(), new Set()],
        pointerToLane: new Map(),
        activeHoldByLane: [null, null, null, null],
        ghostTaps: [0, 0, 0, 0],
        lastHud: { hp: "", combo: -1, prog: "" },
        finished: false,
        lastTs: 0,
        rafId: 0,
        canvas: null,
        ctx: null,
        keyEls: null,
        hudHpEl: null,
        hudComboEl: null,
        hudProgEl: null,
        onDone: (opts && opts.onComplete) || (() => {})
      };

      renderHudAndMount();
      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("keyup", onKeyUp);
      window.addEventListener("pointerup", onWindowPointerUp);
      window.addEventListener("pointercancel", onWindowPointerUp);
      session.rafId = requestAnimationFrame(loop);
    }
  };
})();
