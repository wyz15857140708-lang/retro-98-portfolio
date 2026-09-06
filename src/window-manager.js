/**
 * Retro '98 Window Manager - Authentic Taskbar & Window Lifecycle Edition
 * Features:
 * - Windows that are closed (clicked 'X') are removed from the taskbar.
 * - Windows that are minimized ('_') remain in the taskbar in raised state and can be restored on click.
 * - Only currently open windows appear on the taskbar.
 * - 8-direction window resizing, reactive dragging, active/inactive titlebars, maximize/restore.
 */

import { win98Icons } from './icons.js';

export class WindowManager {
  constructor() {
    this.windows = new Map();
    this.topZIndex = 20;
    this.activeWindowId = null;
    this.isDragging = false;
    this.dragTarget = null;
    this.dragOffset = { x: 0, y: 0 };
    
    // Resizing State
    this.isResizing = false;
    this.resizeTarget = null;
    this.resizeDirection = null;
    this.resizeStart = { x: 0, y: 0, w: 0, h: 0, l: 0, t: 0 };

    this.taskbarContainer = document.getElementById('taskbar-windows');
  }

  init() {
    const windowEls = document.querySelectorAll('.win98-window');
    windowEls.forEach((winEl) => {
      const id = winEl.id;
      const title = winEl.getAttribute('data-title') || 'Window';
      let icon = winEl.getAttribute('data-icon') || '';
      
      // Map icon keys to authentic Win98 SVGs if available
      if (id === 'window-paint') icon = win98Icons.paint;
      else if (id === 'window-notepad') icon = win98Icons.notepad;
      else if (id === 'window-minesweeper') icon = win98Icons.minesweeper;
      else if (id === 'window-dos') icon = win98Icons.dos;
      else if (id === 'window-display') icon = win98Icons.display;
      else if (id === 'window-social') icon = win98Icons.network;
      else if (!icon || icon.includes('framerusercontent') === false) {
        if (id.includes('portfolio')) icon = win98Icons.folder;
        else if (id.includes('computer')) icon = 'https://framerusercontent.com/images/uLE52N3JZ7WafwPB01oWNu4QRk.png';
        else if (id.includes('music')) icon = 'https://framerusercontent.com/images/C2rNcoyAF0EcMLLTKXoNk7Ooaf4.png';
        else if (id.includes('recycle')) icon = 'https://framerusercontent.com/images/aUiO9TgRYS71ppQpJSwLrc9Z9M.png';
      }

      const isHidden = winEl.classList.contains('hidden');
      const isInitiallyOpen = !isHidden;

      this.windows.set(id, {
        element: winEl,
        title: title,
        icon: icon,
        isOpen: isInitiallyOpen,
        isMinimized: false,
        isMaximized: false,
        prevRect: {
          left: winEl.style.left || '10%',
          top: winEl.style.top || '10%',
          width: winEl.style.width || '650px',
          height: winEl.style.height || 'auto'
        }
      });

      this.setupWindowEvents(id, winEl);
      this.setupWindowResizeHandles(winEl);
    });

    this.setupGlobalDragAndResizeEvents();

    // Portfolio window is open and focused by default
    if (this.windows.has('window-portfolio')) {
      const pWin = this.windows.get('window-portfolio');
      pWin.isOpen = true;
      pWin.isMinimized = false;
      pWin.element.classList.remove('hidden');
      this.focusWindow('window-portfolio');
    }

    this.renderTaskbar();
  }

  setupWindowResizeHandles(winEl) {
    if (winEl.querySelector('.resize-handle') || winEl.dataset.noResize === 'true') return;

    const directions = ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'];
    directions.forEach(dir => {
      const handle = document.createElement('div');
      handle.className = `resize-handle resize-${dir}`;
      handle.dataset.direction = dir;

      handle.addEventListener('mousedown', (e) => {
        const id = winEl.id;
        const winData = this.windows.get(id);
        if (winData && winData.isMaximized) return;

        this.isResizing = true;
        this.resizeTarget = winEl;
        this.resizeDirection = dir;
        this.focusWindow(id);

        const rect = winEl.getBoundingClientRect();
        this.resizeStart = {
          x: e.clientX,
          y: e.clientY,
          w: rect.width,
          h: rect.height,
          l: rect.left,
          t: rect.top
        };

        e.preventDefault();
        e.stopPropagation();
      });

      winEl.appendChild(handle);
    });
  }

  setupWindowEvents(id, winEl) {
    const titleBar = winEl.querySelector('.title-bar');
    const closeBtn = winEl.querySelector('.btn-close');
    const maxBtn = winEl.querySelector('.btn-maximize');
    const minBtn = winEl.querySelector('.btn-minimize');

    winEl.addEventListener('mousedown', () => {
      this.focusWindow(id);
    });

    if (titleBar) {
      titleBar.addEventListener('mousedown', (e) => {
        if (e.target.closest('.title-btn')) return;

        const winData = this.windows.get(id);
        if (winData && winData.isMaximized) return;

        this.isDragging = true;
        this.dragTarget = winEl;
        this.focusWindow(id);

        const rect = winEl.getBoundingClientRect();
        this.dragOffset.x = e.clientX - rect.left;
        this.dragOffset.y = e.clientY - rect.top;

        e.preventDefault();
      });

      titleBar.addEventListener('dblclick', (e) => {
        if (!e.target.closest('.title-btn') && winEl.dataset.noResize !== 'true') {
          this.toggleMaximize(id);
        }
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.closeWindow(id);
      });
    }

    if (maxBtn) {
      maxBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleMaximize(id);
      });
    }

    if (minBtn) {
      minBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.minimizeWindow(id);
      });
    }
  }

  setupGlobalDragAndResizeEvents() {
    window.addEventListener('mousemove', (e) => {
      // 1. Dragging
      if (this.isDragging && this.dragTarget) {
        const desktopArea = document.getElementById('desktop-area');
        const maxRight = (desktopArea ? desktopArea.clientWidth : window.innerWidth) - 50;
        const maxBottom = (desktopArea ? desktopArea.clientHeight : window.innerHeight - 54) - 30;

        let newLeft = e.clientX - this.dragOffset.x;
        let newTop = e.clientY - this.dragOffset.y;

        newLeft = Math.max(-100, Math.min(newLeft, maxRight));
        newTop = Math.max(0, Math.min(newTop, maxBottom));

        this.dragTarget.style.left = `${newLeft}px`;
        this.dragTarget.style.top = `${newTop}px`;
        this.dragTarget.style.transform = 'none';
        this.dragTarget.style.right = 'auto';
        this.dragTarget.style.bottom = 'auto';
        return;
      }

      // 2. Resizing
      if (this.isResizing && this.resizeTarget) {
        const dir = this.resizeDirection;
        const dx = e.clientX - this.resizeStart.x;
        const dy = e.clientY - this.resizeStart.y;
        const minW = 280;
        const minH = 160;

        let newW = this.resizeStart.w;
        let newH = this.resizeStart.h;
        let newL = this.resizeStart.l;
        let newT = this.resizeStart.t;

        if (dir.includes('e')) newW = Math.max(minW, this.resizeStart.w + dx);
        if (dir.includes('s')) newH = Math.max(minH, this.resizeStart.h + dy);
        
        if (dir.includes('w')) {
          const potentialW = this.resizeStart.w - dx;
          if (potentialW >= minW) {
            newW = potentialW;
            newL = this.resizeStart.l + dx;
          }
        }
        
        if (dir.includes('n')) {
          const potentialH = this.resizeStart.h - dy;
          if (potentialH >= minH) {
            newH = potentialH;
            newT = this.resizeStart.t + dy;
          }
        }

        this.resizeTarget.style.width = `${newW}px`;
        this.resizeTarget.style.height = `${newH}px`;
        this.resizeTarget.style.left = `${newL}px`;
        this.resizeTarget.style.top = `${newT}px`;
        this.resizeTarget.style.transform = 'none';
      }
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
      this.dragTarget = null;
      this.isResizing = false;
      this.resizeTarget = null;
      this.resizeDirection = null;
    });
  }

  focusWindow(id) {
    const winData = this.windows.get(id);
    if (!winData) return;

    this.topZIndex++;
    winData.element.style.zIndex = this.topZIndex;
    this.activeWindowId = id;

    this.windows.forEach((data, wId) => {
      const tb = data.element.querySelector('.title-bar');
      if (tb) {
        if (wId === id) {
          tb.classList.remove('win98-titlebar-inactive');
          tb.classList.add('win98-titlebar-active');
        } else {
          tb.classList.remove('win98-titlebar-active');
          tb.classList.add('win98-titlebar-inactive');
        }
      }
    });

    this.renderTaskbar();
  }

  openWindow(id) {
    const winData = this.windows.get(id);
    if (!winData) return;

    winData.isOpen = true;
    winData.isMinimized = false;
    winData.element.classList.remove('hidden');
    this.focusWindow(id);
    this.renderTaskbar();
  }

  closeWindow(id) {
    const winData = this.windows.get(id);
    if (!winData) return;

    winData.isOpen = false;
    winData.isMinimized = false;
    winData.element.classList.add('hidden');

    if (this.activeWindowId === id) {
      this.activeWindowId = null;
      let nextFocusId = null;
      let highestZ = -1;
      this.windows.forEach((data, wId) => {
        if (data.isOpen && !data.isMinimized && !data.element.classList.contains('hidden')) {
          const z = parseInt(data.element.style.zIndex || 0, 10);
          if (z > highestZ) {
            highestZ = z;
            nextFocusId = wId;
          }
        }
      });
      if (nextFocusId) {
        this.focusWindow(nextFocusId);
      }
    }

    this.renderTaskbar();
  }

  minimizeWindow(id) {
    const winData = this.windows.get(id);
    if (!winData) return;

    winData.isOpen = true; // remains on taskbar
    winData.isMinimized = true;
    winData.element.classList.add('hidden');

    if (this.activeWindowId === id) {
      this.activeWindowId = null;
      let nextFocusId = null;
      let highestZ = -1;
      this.windows.forEach((data, wId) => {
        if (data.isOpen && !data.isMinimized && !data.element.classList.contains('hidden')) {
          const z = parseInt(data.element.style.zIndex || 0, 10);
          if (z > highestZ) {
            highestZ = z;
            nextFocusId = wId;
          }
        }
      });
      if (nextFocusId) {
        this.focusWindow(nextFocusId);
      }
    }

    this.renderTaskbar();
  }

  minimizeAllWindows() {
    this.windows.forEach((winData, id) => {
      if (winData.isOpen) {
        this.minimizeWindow(id);
      }
    });
  }

  cascadeWindows() {
    let offset = 20;
    this.windows.forEach((winData, id) => {
      if (winData.isOpen && !winData.isMinimized) {
        winData.element.style.left = `${offset}px`;
        winData.element.style.top = `${offset}px`;
        winData.element.style.transform = 'none';
        offset += 30;
        this.focusWindow(id);
      }
    });
  }

  toggleMaximize(id) {
    const winData = this.windows.get(id);
    if (!winData) return;

    const el = winData.element;
    const maxBtn = el.querySelector('.btn-maximize');

    if (winData.isMaximized) {
      el.style.left = winData.prevRect.left;
      el.style.top = winData.prevRect.top;
      el.style.width = winData.prevRect.width;
      el.style.height = winData.prevRect.height;
      el.style.position = 'absolute';
      el.style.transform = 'none';
      winData.isMaximized = false;
      if (maxBtn) maxBtn.innerHTML = '□';
    } else {
      winData.prevRect = {
        left: el.style.left || '10%',
        top: el.style.top || '10%',
        width: el.style.width || '650px',
        height: el.style.height || 'auto'
      };

      el.style.left = '0px';
      el.style.top = '0px';
      el.style.width = '100vw';
      el.style.height = 'calc(100vh - 54px)';
      el.style.position = 'fixed';
      el.style.transform = 'none';
      winData.isMaximized = true;
      if (maxBtn) maxBtn.innerHTML = '❐';
    }

    this.focusWindow(id);
  }

  renderTaskbar() {
    const taskbarContainer = document.getElementById('taskbar-windows');
    if (!taskbarContainer) return;

    taskbarContainer.innerHTML = '';

    // ONLY render windows that are currently OPEN
    this.windows.forEach((winData, id) => {
      if (!winData.isOpen) return; // Skip closed windows!

      const isVisible = !winData.element.classList.contains('hidden') && !winData.isMinimized;
      const isActive = this.activeWindowId === id && isVisible;

      const tab = document.createElement('button');
      tab.className = `taskbar-item h-9 px-3 flex items-center gap-2 text-xs font-win98 font-bold border select-none transition-none cursor-pointer max-w-[180px] truncate ${
        isActive 
          ? 'win98-sunken bg-[#dedede] text-black font-extrabold' 
          : 'win98-raised text-black hover:bg-gray-200'
      }`;
      
      const iconImg = document.createElement('img');
      iconImg.src = winData.icon;
      iconImg.className = 'w-4 h-4 pixel-render shrink-0';
      iconImg.alt = '';
      
      const titleSpan = document.createElement('span');
      titleSpan.className = 'truncate pointer-events-none';
      titleSpan.textContent = winData.element.getAttribute('data-title') || winData.title;

      tab.appendChild(iconImg);
      tab.appendChild(titleSpan);

      tab.addEventListener('click', () => {
        if (isVisible && isActive) {
          this.minimizeWindow(id);
        } else if (winData.isMinimized || !isVisible) {
          this.openWindow(id);
        } else {
          this.focusWindow(id);
        }
      });

      taskbarContainer.appendChild(tab);
    });
  }
}
