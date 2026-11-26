/* Haru Fishing RPG - 4-Lane 16-Bit Pixel Piano Rhythm Challenge Engine (v2) */
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

  const RARITY_PROFILES = {
    common: {
      rank: 1, stars: 1, labelVi: "THÔNG THƯỜNG", labelEn: "COMMON",
      bpm: 96, notes: 7, scroll: 130, doubleProb: 0.0, holdProb: 0.0,
      perfectPx: 26, goodPx: 42, maxMiss: 3, scaleKey: "folk",
      songVi: "Khúc Dạo Biển", songEn: "Gentle Harbor"
    },
    uncommon: {
      rank: 2, stars: 2, labelVi: "KHÔNG PHỔ BIẾN", labelEn: "UNCOMMON",
      bpm: 108, notes: 10, scroll: 148, doubleProb: 0.0, holdProb: 0.15,
      perfectPx: 24, goodPx: 39, maxMiss: 3, scaleKey: "folk",
      songVi: "Sóng Nhẹ", songEn: "Sea Breeze"
    },
    rare: {
      rank: 3, stars: 3, labelVi: "HIẾM", labelEn: "RARE",
      bpm: 122, notes: 14, scroll: 168, doubleProb: 0.12, holdProb: 0.20,
      perfectPx: 22, goodPx: 36, maxMiss: 3, scaleKey: "hero",
      songVi: "Vũ Điệu San Hô", songEn: "Coral Waltz"
    },
    epic: {
      rank: 4, stars: 4, labelVi: "SỬ THI", labelEn: "EPIC",
      bpm: 136, notes: 18, scroll: 188, doubleProb: 0.20, holdProb: 0.22,
      perfectPx: 20, goodPx: 33, maxMiss: 3, scaleKey: "hero",
      songVi: "Khúc Biển Động", songEn: "Riptide Sonata"
    },
    legendary: {
      rank: 5, stars: 5, labelVi: "HUYỀN THOẠI", labelEn: "LEGENDARY",
      bpm: 150, notes: 22, scroll: 208, doubleProb: 0.26, holdProb: 0.24,
      perfectPx: 19, goodPx: 30, maxMiss: 3, scaleKey: "dramatic",
      songVi: "Giao Hưởng Vàng", songEn: "Golden Symphony"
    },
    mythic: {
      rank: 6, stars: 6, labelVi: "THẦN THOẠI", labelEn: "MYTHIC",
      bpm: 164, notes: 26, scroll: 226, doubleProb: 0.32, holdProb: 0.24,
      perfectPx: 17, goodPx: 28, maxMiss: 3, scaleKey: "dramatic",
      songVi: "Độc Tấu Thần Thoại", songEn: "Mythic Toccata"
    },
    ancient: {
      rank: 7, stars: 7, labelVi: "CỔ ĐẠI", labelEn: "ANCIENT",
      bpm: 176, notes: 30, scroll: 242, doubleProb: 0.36, holdProb: 0.24,
      perfectPx: 16, goodPx: 26, maxMiss: 3, scaleKey: "boss",
      songVi: "Hồi Chuông Cổ Đại", songEn: "Ancient Requiem"
    },
    transcendent: {
      rank: 8, stars: 8, labelVi: "SIÊU VIỆT", labelEn: "TRANSCENDENT",
      bpm: 188, notes: 34, scroll: 258, doubleProb: 0.40, holdProb: 0.24,
      perfectPx: 15, goodPx: 24, maxMiss: 2, scaleKey: "boss",
      songVi: "Siêu Việt Liên Hoàn", songEn: "Transcendent Etude"
    },
    eternity: {
      rank: 9, stars: 9, labelVi: "VĨNH HẰNG", labelEn: "ETERNITY",
      bpm: 200, notes: 38, scroll: 272, doubleProb: 0.44, holdProb: 0.24,
      perfectPx: 14, goodPx: 22, maxMiss: 2, scaleKey: "virtuoso",
      songVi: "Khúc Vĩnh Hằng", songEn: "Eternity Nocturne"
    },
    infinity: {
      rank: 10, stars: 10, labelVi: "VÔ CỰC", labelEn: "INFINITY",
      bpm: 212, notes: 42, scroll: 286, doubleProb: 0.48, holdProb: 0.24,
      perfectPx: 13, goodPx: 21, maxMiss: 2, scaleKey: "virtuoso",
      songVi: "Vô Cực Concerto", songEn: "Infinity Concerto"
    },
    genesis: {
      rank: 11, stars: 11, labelVi: "KHỞI NGUYÊN", labelEn: "GENESIS",
      bpm: 224, notes: 46, scroll: 300, doubleProb: 0.52, holdProb: 0.22,
      perfectPx: 12, goodPx: 20, maxMiss: 2, scaleKey: "virtuoso",
      songVi: "Khởi Nguyên Boss", songEn: "Genesis Fugue"
    },
    omega: {
      rank: 12, stars: 12, labelVi: "OMEGA", labelEn: "OMEGA",
      bpm: 238, notes: 52, scroll: 316, doubleProb: 0.56, holdProb: 0.22,
      perfectPx: 11, goodPx: 19, maxMiss: 2, scaleKey: "virtuoso",
      songVi: "OMEGA FINALE", songEn: "OMEGA FINALE"
    }
  };

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
    let extraDouble = 0;
    let tightenPx = 0;
    const badges = [];

    if (hasMutation) {
      speedMul += 0.12;
      extraNotes += 3;
      extraDouble += 0.08;
      tightenPx += 1;
      badges.push(isVi ? "ĐỘT BIẾN +12%" : "MUTATED +12%");
    }
    if (val >= 500000) {
      speedMul += 0.12;
      extraNotes += 4;
      tightenPx += 1;
      badges.push(isVi ? "CÁ CỰC PHẨM" : "PRIZE VALUE");
    } else if (val >= 100000) {
      speedMul += 0.08;
      extraNotes += 2;
      badges.push(isVi ? "CÁ XỊN" : "HIGH VALUE");
    } else if (val >= 25000) {
      speedMul += 0.04;
      extraNotes += 1;
    }

    return {
      rarityId,
      rank: base.rank,
      stars: base.stars,
      labelVi: base.labelVi,
      labelEn: base.labelEn,
      songVi: base.songVi,
      songEn: base.songEn,
      scaleKey: base.scaleKey,
      bpm: Math.round(base.bpm * speedMul),
      notes: base.notes + extraNotes,
      scroll: Math.round(base.scroll * speedMul),
      doubleProb: Math.min(0.72, base.doubleProb + extraDouble),
      holdProb: base.holdProb,
      perfectPx: Math.max(10, base.perfectPx - tightenPx),
      goodPx: Math.max(17, base.goodPx - tightenPx),
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

  function generateChart(diff) {
    const scale = SCALES[diff.scaleKey] || SCALES.folk;
    const beatSec = 60 / diff.bpm;
    const baseStepSec = diff.rank >= 8
      ? Math.max(0.22, beatSec * 0.92)
      : (diff.rank >= 4 ? Math.max(0.26, beatSec * 0.95) : beatSec);

    const laneBusyUntil = [0, 0, 0, 0];
    const notes = [];
    let curTime = 1.85;
    let chordGroupSeq = 1;
    let noteIdSeq = 1;
    let prevLane = Math.floor(Math.random() * LANE_COUNT);
    let dir = Math.random() < 0.5 ? 1 : -1;
    let stepIdx = 0;

    while (notes.length < diff.notes) {
      if (stepIdx > 0 && stepIdx % 4 === 0 && Math.random() < 0.35) {
        dir = -dir;
      }
      let candLane = prevLane + dir;
      if (candLane < 0 || candLane >= LANE_COUNT) {
        dir = -dir;
        candLane = Math.max(0, Math.min(LANE_COUNT - 1, prevLane + dir));
      }
      if (stepIdx % 5 === 3) {
        candLane = (prevLane + 2) % LANE_COUNT;
      }

      if (curTime < laneBusyUntil[candLane] + 0.16) {
        let free = -1;
        for (let k = 0; k < LANE_COUNT; k++) {
          const check = (candLane + k) % LANE_COUNT;
          if (curTime >= laneBusyUntil[check] + 0.16) {
            free = check;
            break;
          }
        }
        if (free === -1) {
          curTime = Math.min(...laneBusyUntil) + 0.17;
          continue;
        }
        candLane = free;
      }

      const canDouble = diff.doubleProb > 0 && notes.length + 1 < diff.notes;
      let lane2 = -1;
      if (canDouble && Math.random() < diff.doubleProb) {
        const pref2 = candLane < 2 ? 2 + (candLane % 2) : candLane % 2;
        if (pref2 !== candLane && curTime >= laneBusyUntil[pref2] + 0.16) {
          lane2 = pref2;
        } else {
          for (let k = 0; k < LANE_COUNT; k++) {
            if (k !== candLane && curTime >= laneBusyUntil[k] + 0.16) {
              lane2 = k;
              break;
            }
          }
        }
      }

      let holdDur = 0;
      if (lane2 === -1 && diff.holdProb > 0 && notes.length < diff.notes - 1 && Math.random() < diff.holdProb) {
        holdDur = Math.max(0.35, Math.min(0.75, beatSec * (diff.rank >= 7 ? 1.35 : 1.65)));
      }

      const accentHi = stepIdx % 4 === 2 && diff.rank >= 5 ? 2 : 1;
      const groupId = lane2 !== -1 ? chordGroupSeq++ : 0;

      const n1Id = noteIdSeq++;
      notes.push({
        id: n1Id,
        lane: candLane,
        hitTime: curTime,
        holdDur,
        chordGroupId: groupId,
        freq: scale[candLane] * accentHi,
        y: -40,
        tailY: -40,
        hit: false,
        holding: false,
        completed: false,
        missed: false
      });
      laneBusyUntil[candLane] = curTime + holdDur + 0.16;

      if (lane2 !== -1 && notes.length < diff.notes) {
        const n2Id = noteIdSeq++;
        notes.push({
          id: n2Id,
          lane: lane2,
          hitTime: curTime,
          holdDur: 0,
          chordGroupId: groupId,
          freq: scale[lane2] * accentHi,
          y: -40,
          tailY: -40,
          hit: false,
          holding: false,
          completed: false,
          missed: false
        });
        laneBusyUntil[lane2] = curTime + 0.16;
      }

      prevLane = candLane;
      stepIdx += 1;
      const quickFlourish = diff.rank >= 5 && holdDur === 0 && lane2 === -1 && baseStepSec >= 0.34 && Math.random() < 0.25;
      const delta = holdDur > 0 ? Math.max(baseStepSec, holdDur * 0.88 + 0.14) : (quickFlourish ? baseStepSec * 0.62 : baseStepSec);
      curTime += delta;
    }

    return { notes, totalDuration: curTime + 1.0 };
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

  function triggerLaneHit(lane) {
    if (!session || session.finished) return;
    if (lane < 0 || lane >= LANE_COUNT) return;
    session.laneFlash[lane] = 0.22;

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

    // Empty tap feedback + boss anti-spam protection on Mythic+
    const scale = SCALES[diff.scaleKey] || SCALES.folk;
    PianoAudio.playMutedTap(scale[lane]);
    if (diff.rank >= 6) {
      const nearNote = best && bestDist <= 95;
      if (!nearNote) {
        session.ghostTaps[lane] += 1;
        if (session.ghostTaps[lane] >= 2) {
          session.ghostTaps[lane] = 0;
          session.misses += 1;
          session.combo = 0;
          session.missFlash = 0.28;
          setJudge("SPAM!", "#f45b69");
          PianoAudio.playMiss();
          if (session.misses > diff.maxMiss) {
            finishSong(false, "piano_spam_fail");
          }
        }
      }
    }
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
    const grace = Math.max(0.14, hn.holdDur * 0.22);
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
    session.elapsed += dt;
    if (session.missFlash > 0) session.missFlash = Math.max(0, session.missFlash - dt);
    if (session.judgeTimer > 0) session.judgeTimer = Math.max(0, session.judgeTimer - dt);

    for (let l = 0; l < LANE_COUNT; l++) {
      if (session.laneFlash[l] > 0) session.laneFlash[l] = Math.max(0, session.laneFlash[l] - dt);
      if (session.laneGood[l] > 0) session.laneGood[l] = Math.max(0, session.laneGood[l] - dt);
    }

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

    // Subtle 16px beat grid
    ctx.fillStyle = "#0a1728";
    const gridOffset = Math.round((session.elapsed * diff.scroll) % 28);
    for (let gy = gridOffset; gy < HIT_Y; gy += 28) {
      ctx.fillRect(START_X, gy, LANE_W * LANE_COUNT, 1);
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

    // Golden horizontal strike line
    ctx.fillStyle = "#ecc570";
    ctx.fillRect(START_X, HIT_Y - 1, LANE_W * LANE_COUNT, 2);

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

      const tileX = lx + 7;
      const tileW = LANE_W - 14;
      const tileH = 14;
      const tileTop = drawY - 7;

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

    // Opening READY / PLAY banner (first 1.2s, first note arrives cleanly at 1.85s)
    if (session.elapsed < 1.20) {
      ctx.fillStyle = "rgba(6, 14, 26, 0.86)";
      ctx.fillRect(46, 84, CW - 92, 46);
      ctx.strokeStyle = session.rarityColor;
      ctx.lineWidth = 2;
      ctx.strokeRect(46, 84, CW - 92, 46);
      ctx.textAlign = "center";
      ctx.fillStyle = "#ecc570";
      ctx.font = "bold 14px monospace";
      ctx.fillText(
        session.elapsed < 0.75
          ? (isVi ? "CHUẨN BỊ ĐÁNH ĐÀN!" : "GET READY!")
          : (isVi ? "BẮT ĐẦU!" : "PLAY NOW!"),
        CW / 2, 105
      );
      ctx.fillStyle = "#cbd5e1";
      ctx.font = "10px monospace";
      ctx.fillText(`${diff.bpm} BPM · ${diff.notes} ${isVi ? "NỐT" : "NOTES"}`, CW / 2, 122);
    } else if (session.judgeTimer > 0 && session.judgeText) {
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
        </div>
        <div class="muted" style="font-size:11px;margin-top:5px;">
          ${isVi
            ? "Chạm 4 phím đàn hoặc bấm D - F - J - K đúng lúc nốt rơi chạm vạch vàng (giữ nốt dài!)."
            : "Tap 4 piano keys or press D - F - J - K on the gold line (hold long notes!)."}
        </div>
        <div class="mg-canvas-box">
          <canvas id="mg-canvas" width="${CW}" height="${CH}"></canvas>
        </div>
        <div class="mg-piano-deck">${keysHtml}</div>
      </div>`;

    session.canvas = document.getElementById("mg-canvas");
    session.ctx = session.canvas ? session.canvas.getContext("2d") : null;
    session.hudHpEl = document.getElementById("mg-hud-hp");
    session.hudComboEl = document.getElementById("mg-hud-combo");
    session.hudProgEl = document.getElementById("mg-hud-prog");
    session.keyEls = [0, 1, 2, 3].map(l => document.getElementById(`mg-pkey-${l}`));

    session.keyEls.forEach((el, l) => bindPointerDown(el, () => l));
    bindPointerDown(session.canvas, (ev) => {
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
