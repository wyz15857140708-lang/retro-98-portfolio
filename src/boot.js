/**
 * Retro '98 Boot, Award BIOS CMOS Setup & Login System
 * Supports live memory testing count-up, interactive CMOS Setup screen,
 * DEL key shortcut, bilingual boot messages, and CRT power-on squish transition.
 */

import { audioEngine } from './audio.js';

export class BootManager {
  constructor(onBootComplete) {
    this.onBootComplete = onBootComplete;
    this.biosContainer = document.getElementById('bios-screen');
    this.cmosContainer = document.getElementById('cmos-setup-screen');
    this.loginContainer = document.getElementById('login-screen');
    this.crtFlashOverlay = document.getElementById('crt-flash');
    this.desktopContainer = document.getElementById('desktop');
    this.isBooted = false;
    this.inCmos = false;

    this.biosLines = [
      "Award Modular BIOS v4.51PG, An Energy Star Ally",
      "Copyright (C) 1984-98, Award Software, Inc.",
      "",
      "PENTIUM II-MMX CPU at 450MHz (王寅喆定制开发与研究工作站)",
      "Memory Testing: 131072K OK (系统内存自检 128MB 通过)",
      "",
      "Award Plug and Play BIOS Extension v1.0A",
      "Initialize Plug and Play Cards... PNP Init Completed",
      "",
      "Detecting Primary Master   ... QUANTUM FIREBALL CR 8.4A (LBA Mode)",
      "Detecting Primary Slave    ... None",
      "Detecting Secondary Master ... CR-588 48X CD-ROM (FL Studio Audio Ready)",
      "Detecting Secondary Slave  ... None",
      "",
      "PCI device listing...",
      "Bus No. Device No. Func No. Vendor ID Device ID Device Class",
      "0       7          1       8086      7111      IDE Controller",
      "1       0          0       121A      0005      3dfx Voodoo3 3000 3D AGP",
      "0       9          0       1102      0002      Creative Sound Blaster AWE64",
      "",
      "Starting Windows 98 Second Edition (简体中文版 4.10.2222 A)...",
      "",
      ">>> 按 [回车键 ENTER] 或点击屏幕进入 Windows 98 <<<"
    ];
  }

  init() {
    this.startBiosSequence();
    this.bindEvents();
    this.initCmosSetup();
  }

  startBiosSequence() {
    const textOutput = document.getElementById('bios-text');
    if (!textOutput) return;

    let lineIndex = 0;
    textOutput.innerHTML = '';

    const typeLine = () => {
      if (lineIndex < this.biosLines.length) {
        const line = this.biosLines[lineIndex];
        const p = document.createElement('div');
        p.className = 'font-vt323 text-base sm:text-lg leading-snug tracking-wide ' + 
          (lineIndex === this.biosLines.length - 1 ? 'text-yellow-300 animate-pulse font-bold mt-3 cursor-pointer' : 'text-gray-300');
        p.textContent = line;
        
        if (lineIndex === 4) {
          audioEngine.playBiosTick();
        }

        if (lineIndex === this.biosLines.length - 1) {
          p.addEventListener('click', (e) => {
            e.stopPropagation();
            this.showLoginScreen();
          });
        }

        textOutput.appendChild(p);
        lineIndex++;

        const delay = (lineIndex === 4 || lineIndex === 14) ? 140 : Math.floor(Math.random() * 25) + 20;
        setTimeout(typeLine, delay);
      }
    };

    typeLine();
  }

  openCmosSetup() {
    this.inCmos = true;
    if (this.biosContainer) this.biosContainer.classList.add('hidden');
    if (this.cmosContainer) {
      this.cmosContainer.classList.remove('hidden');
      this.cmosContainer.classList.add('flex');
    }
    audioEngine.playDing();
  }

  closeCmosSetup() {
    this.inCmos = false;
    if (this.cmosContainer) {
      this.cmosContainer.classList.add('hidden');
      this.cmosContainer.classList.remove('flex');
    }
    this.showLoginScreen();
  }

  initCmosSetup() {
    const exitItems = document.querySelectorAll('.cmos-exit-item');
    exitItems.forEach(item => {
      item.addEventListener('click', () => {
        this.closeCmosSetup();
      });
    });

    const cmosItems = document.querySelectorAll('.cmos-menu-item:not(.cmos-exit-item)');
    cmosItems.forEach(item => {
      item.addEventListener('click', () => {
        audioEngine.playClick();
        alert(`[ Award Modular BIOS v4.51PG ]\n\n${item.textContent.trim()}\n\n已处于最佳性能超频状态 (王寅喆定制参数已锁定)。`);
      });
    });
  }

  showLoginScreen() {
    if (this.biosContainer) {
      this.biosContainer.classList.add('hidden');
    }
    if (this.loginContainer) {
      this.loginContainer.classList.remove('hidden');
      this.loginContainer.classList.add('flex');
    }
    audioEngine.playChord();
  }

  completeLogin() {
    if (this.isBooted) return;
    this.isBooted = true;

    // Trigger CRT Flash effect
    if (this.crtFlashOverlay) {
      this.crtFlashOverlay.classList.remove('hidden');
      this.crtFlashOverlay.classList.add('crt-flash-anim');
    }

    // Play Windows 98 Startup Chime
    audioEngine.playStartupChime();

    setTimeout(() => {
      if (this.loginContainer) {
        this.loginContainer.classList.add('hidden');
      }
      if (this.desktopContainer) {
        this.desktopContainer.classList.remove('hidden');
      }
      if (this.onBootComplete) {
        this.onBootComplete();
      }
    }, 450);

    setTimeout(() => {
      if (this.crtFlashOverlay) {
        this.crtFlashOverlay.classList.add('hidden');
        this.crtFlashOverlay.classList.remove('crt-flash-anim');
      }
    }, 900);
  }

  bindEvents() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Delete') {
        if (!this.biosContainer.classList.contains('hidden')) {
          e.preventDefault();
          this.openCmosSetup();
        }
      } else if (e.key === 'Escape') {
        if (this.inCmos) {
          e.preventDefault();
          this.closeCmosSetup();
        }
      } else if (e.key === 'Enter') {
        if (this.inCmos) {
          this.closeCmosSetup();
        } else if (!this.biosContainer.classList.contains('hidden')) {
          this.showLoginScreen();
        } else if (!this.loginContainer.classList.contains('hidden')) {
          this.completeLogin();
        }
      }
    });

    const btnEnterCmos = document.getElementById('bios-btn-del');
    if (btnEnterCmos) {
      btnEnterCmos.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openCmosSetup();
      });
    }

    const confirmBtn = document.getElementById('login-confirm-btn');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => this.completeLogin());
    }

    const cancelBtn = document.getElementById('login-cancel-btn');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => this.completeLogin());
    }

    const biosScreen = document.getElementById('bios-screen');
    if (biosScreen) {
      biosScreen.addEventListener('click', (e) => {
        if (!e.target.closest('#bios-btn-del')) {
          this.showLoginScreen();
        }
      });
    }
  }
}
