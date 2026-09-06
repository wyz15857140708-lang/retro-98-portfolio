/**
 * Retro '98 Portfolio - Main Entry Point
 */

import './style.css';
import { attachGlobalSFX, audioEngine } from './audio.js';
import { BootManager } from './boot.js';
import { WindowManager } from './window-manager.js';
import { DesktopController } from './desktop.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Global Click Sound Effects
  attachGlobalSFX();

  // Initialize Window Manager
  const windowManager = new WindowManager();
  windowManager.init();

  // Initialize Desktop Controller (Start menu, icons, clock, system tray)
  const desktopController = new DesktopController(windowManager);
  desktopController.init();

  // Initialize Boot & Login Sequence
  const bootManager = new BootManager(() => {
    console.log("Windows 98 Desktop Environment Initialized.");
    // Focus main portfolio window on boot
    windowManager.openWindow('window-portfolio');
  });
  bootManager.init();

  // Expose global controller for debugging/interactive triggers if needed
  window.Retro98 = {
    audio: audioEngine,
    windowManager,
    desktopController,
    bootManager
  };
});
