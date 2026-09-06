/**
 * Retro '98 Audio Engine
 * Provides global click SFX pool, synthesized Windows 98 startup chime,
 * error/chord sounds, and interactive media player audio engine.
 */

class RetroAudioEngine {
  constructor() {
    this.ctx = null;
    this.clickPoolSize = 4;
    this.clickPoolIndex = 0;
    this.isMuted = false;
    this.volume = 0.7;

    // Music Player State
    this.currentTrackIndex = 0;
    this.isPlaying = false;
    this.playlist = [
      {
        title: "01. Windows 98 Vapor Dreams.mid",
        artist: "RetroSynth 98",
        duration: 145,
        type: "synth",
        tempo: 110,
        notes: [
          [261.63, 0.4], [329.63, 0.4], [392.00, 0.4], [523.25, 0.8],
          [440.00, 0.4], [349.23, 0.4], [293.66, 0.4], [392.00, 0.8],
          [329.63, 0.4], [261.63, 0.4], [220.00, 0.4], [293.66, 0.8],
          [261.63, 0.4], [329.63, 0.4], [392.00, 0.4], [523.25, 1.2]
        ]
      },
      {
        title: "02. Cyber Nostalgia 1998.opus",
        artist: "Aura Sound Lab",
        duration: 180,
        type: "synth",
        tempo: 125,
        notes: [
          [220.00, 0.3], [261.63, 0.3], [329.63, 0.3], [440.00, 0.6],
          [392.00, 0.3], [329.63, 0.3], [261.63, 0.3], [349.23, 0.6],
          [329.63, 0.3], [261.63, 0.3], [196.00, 0.3], [261.63, 0.6],
          [293.66, 0.3], [349.23, 0.3], [440.00, 0.3], [523.25, 0.9]
        ]
      },
      {
        title: "03. Dial-Up Memories.wav",
        artist: "Win98 FM",
        duration: 160,
        type: "synth",
        tempo: 95,
        notes: [
          [329.63, 0.5], [392.00, 0.5], [493.88, 0.5], [587.33, 1.0],
          [523.25, 0.5], [440.00, 0.5], [392.00, 0.5], [493.88, 1.0],
          [440.00, 0.5], [349.23, 0.5], [293.66, 0.5], [392.00, 1.0],
          [329.63, 0.5], [392.00, 0.5], [493.88, 0.5], [659.25, 1.5]
        ]
      },
      {
        title: "04. Sunset Over Redmond.mp3",
        artist: "DirectSound 3D",
        duration: 210,
        type: "synth",
        tempo: 105,
        notes: [
          [174.61, 0.4], [220.00, 0.4], [261.63, 0.4], [349.23, 0.8],
          [196.00, 0.4], [246.94, 0.4], [293.66, 0.4], [392.00, 0.8],
          [220.00, 0.4], [261.63, 0.4], [329.63, 0.4], [440.00, 0.8],
          [261.63, 0.4], [329.63, 0.4], [392.00, 0.4], [523.25, 1.2]
        ]
      }
    ];

    this.musicTimer = null;
    this.playbackTime = 0;
    this.synthLoopTimeout = null;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Authentic 8-bit / Win98 Click Sound
  playClick() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      const now = this.ctx.currentTime;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.025);

      gain.gain.setValueAtTime(0.2 * this.volume, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.03);
    } catch (e) {
      console.warn("Audio click failed:", e);
    }
  }

  // Windows 98 Startup Chime (Polyphonic synth chord)
  playStartupChime() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      
      // Iconic F# / Bmaj9 lush chord progression
      // Chime notes: F#3, C#4, F#4, A#4, C#5, D#5, F5, F#5
      const notes = [
        { freq: 185.00, delay: 0.0, dur: 4.2, vol: 0.35, type: 'sawtooth' },
        { freq: 277.18, delay: 0.1, dur: 4.0, vol: 0.3, type: 'sine' },
        { freq: 369.99, delay: 0.2, dur: 3.8, vol: 0.3, type: 'triangle' },
        { freq: 466.16, delay: 0.3, dur: 3.6, vol: 0.25, type: 'sine' },
        { freq: 554.37, delay: 0.45, dur: 3.4, vol: 0.25, type: 'triangle' },
        { freq: 622.25, delay: 0.6, dur: 3.2, vol: 0.2, type: 'sine' },
        { freq: 739.99, delay: 0.8, dur: 3.0, vol: 0.25, type: 'sine' },
        { freq: 932.33, delay: 1.0, dur: 3.5, vol: 0.2, type: 'triangle' },
        { freq: 1108.73, delay: 1.2, dur: 3.8, vol: 0.15, type: 'sine' }
      ];

      notes.forEach(n => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = n.type;
        osc.frequency.setValueAtTime(n.freq, now + n.delay);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(2400, now + n.delay);
        filter.frequency.exponentialRampToValueAtTime(800, now + n.delay + n.dur);

        const startTime = now + n.delay;
        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.linearRampToValueAtTime(n.vol * this.volume, startTime + 0.15);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + n.dur);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + n.dur + 0.1);
      });
    } catch (e) {
      console.warn("Startup chime failed:", e);
    }
  }

  // Windows Error / Asterisk Sound
  playChord() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.04);
        gain.gain.setValueAtTime(0.2 * this.volume, now + i * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.04);
        osc.stop(now + 0.45);
      });
    } catch (e) {}
  }

  // Windows Question / Ding Sound
  playDing() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.35);
      gain.gain.setValueAtTime(0.25 * this.volume, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.4);
    } catch (e) {}
  }

  // Windows Tada Fanfare (for game win / celebration)
  playTada() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const fanfare = [
        { f: 523.25, t: 0.0, d: 0.12 }, // C5
        { f: 659.25, t: 0.12, d: 0.12 }, // E5
        { f: 783.99, t: 0.24, d: 0.12 }, // G5
        { f: 1046.5, t: 0.36, d: 0.6 }   // C6
      ];
      fanfare.forEach(note => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.f, now + note.t);
        gain.gain.setValueAtTime(0.3 * this.volume, now + note.t);
        gain.gain.exponentialRampToValueAtTime(0.001, now + note.t + note.d);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + note.t);
        osc.stop(now + note.t + note.d + 0.05);
      });
    } catch (e) {}
  }

  // Recycle Bin Paper Crumple Sound
  playRecycle() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.35;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4));
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1200, now);
      filter.Q.setValueAtTime(3, now);
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.4 * this.volume, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
    } catch (e) {}
  }

  // Mine Explosion Sound
  playExplosion() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.6;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(350, now);
      filter.frequency.exponentialRampToValueAtTime(40, now + 0.5);
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.5 * this.volume, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
    } catch (e) {}
  }

  // BIOS Memory Count Tick
  playBiosTick() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(2400, now);
      gain.gain.setValueAtTime(0.08 * this.volume, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.015);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.02);
    } catch (e) {}
  }

  // Music Player Synthesizer Sequencer
  playMusic() {
    this.initContext();
    this.isPlaying = true;
    this.startSynthTrack();
    this.startTimer();
    this.updatePlayerUI();
  }

  pauseMusic() {
    this.isPlaying = false;
    if (this.synthLoopTimeout) {
      clearTimeout(this.synthLoopTimeout);
      this.synthLoopTimeout = null;
    }
    if (this.musicTimer) {
      clearInterval(this.musicTimer);
      this.musicTimer = null;
    }
    this.updatePlayerUI();
  }

  toggleMusic() {
    if (this.isPlaying) {
      this.pauseMusic();
    } else {
      this.playMusic();
    }
  }

  nextTrack() {
    this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
    this.playbackTime = 0;
    if (this.isPlaying) {
      this.pauseMusic();
      this.playMusic();
    } else {
      this.updatePlayerUI();
    }
  }

  prevTrack() {
    this.currentTrackIndex = (this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length;
    this.playbackTime = 0;
    if (this.isPlaying) {
      this.pauseMusic();
      this.playMusic();
    } else {
      this.updatePlayerUI();
    }
  }

  selectTrack(index) {
    if (index >= 0 && index < this.playlist.length) {
      this.currentTrackIndex = index;
      this.playbackTime = 0;
      if (this.isPlaying) {
        this.pauseMusic();
        this.playMusic();
      } else {
        this.updatePlayerUI();
      }
    }
  }

  startSynthTrack() {
    if (!this.isPlaying || !this.ctx) return;
    const track = this.playlist[this.currentTrackIndex];
    const notes = track.notes;
    let step = 0;

    const playStep = () => {
      if (!this.isPlaying) return;
      const [freq, dur] = notes[step % notes.length];
      const now = this.ctx.currentTime;

      // Melody Voice
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = (step % 2 === 0) ? 'square' : 'sawtooth';
      osc.frequency.setValueAtTime(freq, now);

      // Sub Bass
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = 'triangle';
      subOsc.frequency.setValueAtTime(freq / 2, now);

      const noteVol = 0.12 * this.volume;
      gain.gain.setValueAtTime(noteVol, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + dur * 0.9);

      subGain.gain.setValueAtTime(noteVol * 0.7, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + dur * 0.9);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      subOsc.connect(subGain);
      subGain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + dur);
      subOsc.start(now);
      subOsc.stop(now + dur);

      step++;
      const nextDelay = dur * 1000 * 0.85;
      this.synthLoopTimeout = setTimeout(playStep, nextDelay);
    };

    playStep();
  }

  startTimer() {
    if (this.musicTimer) clearInterval(this.musicTimer);
    this.musicTimer = setInterval(() => {
      if (this.isPlaying) {
        this.playbackTime++;
        const currentTrack = this.playlist[this.currentTrackIndex];
        if (this.playbackTime >= currentTrack.duration) {
          this.nextTrack();
        } else {
          this.updatePlayerProgress();
        }
      }
    }, 1000);
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  updatePlayerUI() {
    const track = this.playlist[this.currentTrackIndex];
    const titleEl = document.getElementById('player-track-title');
    const artistEl = document.getElementById('player-artist');
    const playBtn = document.getElementById('player-play-btn');
    const listContainer = document.getElementById('player-playlist-items');

    if (titleEl) titleEl.textContent = track.title;
    if (artistEl) artistEl.textContent = track.artist;
    if (playBtn) {
      playBtn.innerHTML = this.isPlaying ? '❚❚' : '▶';
    }

    if (listContainer) {
      const items = listContainer.querySelectorAll('.playlist-item');
      items.forEach((item, idx) => {
        if (idx === this.currentTrackIndex) {
          item.classList.add('bg-[#000080]', 'text-white');
          item.classList.remove('text-black');
        } else {
          item.classList.remove('bg-[#000080]', 'text-white');
          item.classList.add('text-black');
        }
      });
    }

    this.updatePlayerProgress();
  }

  updatePlayerProgress() {
    const track = this.playlist[this.currentTrackIndex];
    const timeEl = document.getElementById('player-time-display');
    const progressBar = document.getElementById('player-progress-bar');
    const equalizerBars = document.querySelectorAll('.eq-bar');

    if (timeEl) {
      timeEl.textContent = `${this.formatTime(this.playbackTime)} / ${this.formatTime(track.duration)}`;
    }

    if (progressBar) {
      const pct = (this.playbackTime / track.duration) * 100;
      progressBar.style.width = `${pct}%`;
    }

    // Animate equalizer bars when playing
    if (equalizerBars.length > 0) {
      equalizerBars.forEach(bar => {
        if (this.isPlaying) {
          const h = Math.floor(Math.random() * 85) + 15;
          bar.style.height = `${h}%`;
        } else {
          bar.style.height = '15%';
        }
      });
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
  }
}

export const audioEngine = new RetroAudioEngine();

// Attach global click sound listener
export function attachGlobalSFX() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('button, a, .desktop-icon, .clickable, input[type="button"], input[type="submit"], .title-btn, .menu-item, .taskbar-item');
    if (target) {
      audioEngine.playClick();
    }
  }, true);
}
