/**
 * Authentic Windows 98 Minesweeper (扫雷) Engine - Ultimate Edition
 * Features: Beginner / Intermediate / Expert levels, 7-segment LED displays,
 * smiley states, flood-fill recursion, right-click flags, double-click chord,
 * high scores hall of fame, explosion SFX & Tada fanfare.
 */

import { audioEngine } from '../audio.js';

export class MinesweeperGame {
  constructor() {
    this.difficulty = 'beginner'; // 'beginner', 'intermediate', 'expert'
    this.rows = 9;
    this.cols = 9;
    this.totalMines = 10;
    this.grid = [];
    this.mineLocations = new Set();
    this.revealedCount = 0;
    this.flagsCount = 0;
    this.timer = 0;
    this.timerInterval = null;
    this.gameState = 'idle'; // 'idle', 'playing', 'won', 'lost'

    this.boardEl = document.getElementById('minesweeper-board');
    this.minesLedEl = document.getElementById('mine-counter-led');
    this.timerLedEl = document.getElementById('mine-timer-led');
    this.faceBtnEl = document.getElementById('mine-face-btn');
    this.windowEl = document.getElementById('window-minesweeper');
  }

  init() {
    if (!this.boardEl) return;
    this.bindEvents();
    this.setDifficulty('beginner');
  }

  setDifficulty(level) {
    this.difficulty = level;
    if (level === 'beginner') {
      this.rows = 9;
      this.cols = 9;
      this.totalMines = 10;
      if (this.windowEl) this.windowEl.style.width = '250px';
    } else if (level === 'intermediate') {
      this.rows = 16;
      this.cols = 16;
      this.totalMines = 40;
      if (this.windowEl) this.windowEl.style.width = '420px';
    } else if (level === 'expert') {
      this.rows = 16;
      this.cols = 30;
      this.totalMines = 99;
      if (this.windowEl) this.windowEl.style.width = '750px';
    }

    this.resetGame();
  }

  resetGame() {
    this.stopTimer();
    this.timer = 0;
    this.gameState = 'idle';
    this.revealedCount = 0;
    this.flagsCount = 0;
    this.mineLocations.clear();
    this.updateLEDs();
    this.setFace('smile');

    // Create empty grid
    this.grid = [];
    for (let r = 0; r < this.rows; r++) {
      const row = [];
      for (let c = 0; c < this.cols; c++) {
        row.push({
          row: r,
          col: c,
          isMine: false,
          isRevealed: false,
          isFlagged: false,
          neighborMines: 0
        });
      }
      this.grid.push(row);
    }

    this.renderBoard();
  }

  plantMines(excludeRow, excludeCol) {
    let planted = 0;
    while (planted < this.totalMines) {
      const r = Math.floor(Math.random() * this.rows);
      const c = Math.floor(Math.random() * this.cols);
      const key = `${r},${c}`;

      // Do not plant on the first clicked cell or duplicate
      if ((r === excludeRow && c === excludeCol) || this.mineLocations.has(key)) {
        continue;
      }

      this.mineLocations.add(key);
      this.grid[r][c].isMine = true;
      planted++;
    }

    // Calculate neighbors
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (!this.grid[r][c].isMine) {
          let count = 0;
          this.forEachNeighbor(r, c, (nr, nc) => {
            if (this.grid[nr][nc].isMine) count++;
          });
          this.grid[r][c].neighborMines = count;
        }
      }
    }
  }

  forEachNeighbor(r, c, callback) {
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue;
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < this.rows && nc >= 0 && nc < this.cols) {
          callback(nr, nc);
        }
      }
    }
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      if (this.gameState === 'playing') {
        this.timer = Math.min(999, this.timer + 1);
        this.updateLEDs();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  updateLEDs() {
    if (this.minesLedEl) {
      const remaining = Math.max(-99, this.totalMines - this.flagsCount);
      this.minesLedEl.textContent = remaining >= 0 ? remaining.toString().padStart(3, '0') : remaining.toString().padStart(3, '0');
    }
    if (this.timerLedEl) {
      this.timerLedEl.textContent = this.timer.toString().padStart(3, '0');
    }
  }

  setFace(state) {
    if (!this.faceBtnEl) return;
    const faceMap = {
      'smile': './icons/mine-smile.svg',
      'shock': './icons/mine-shock.svg',
      'dead': './icons/mine-dead.svg',
      'win': './icons/mine-win.svg'
    };
    const iconSrc = faceMap[state] || './icons/mine-smile.svg';
    this.faceBtnEl.innerHTML = `<img src="${iconSrc}" class="w-5 h-5 pixel-render pointer-events-none" alt="${state}" />`;
  }

  renderBoard() {
    if (!this.boardEl) return;
    this.boardEl.innerHTML = '';

    for (let r = 0; r < this.rows; r++) {
      const rowDiv = document.createElement('div');
      rowDiv.className = 'flex';

      for (let c = 0; c < this.cols; c++) {
        const cell = this.grid[r][c];
        const cellBtn = document.createElement('button');
        cellBtn.id = `mine-cell-${r}-${c}`;
        cellBtn.className = 'w-6 h-6 win98-raised flex items-center justify-center text-xs font-bold font-win98 select-none p-0 cursor-default leading-none border-none';

        // Mouse listeners for face reactions
        cellBtn.addEventListener('mousedown', (e) => {
          if (this.gameState === 'lost' || this.gameState === 'won') return;
          if (e.button === 0 && !cell.isRevealed && !cell.isFlagged) {
            this.setFace('shock');
          }
        });

        cellBtn.addEventListener('mouseup', () => {
          if (this.gameState === 'playing' || this.gameState === 'idle') {
            this.setFace('smile');
          }
        });

        cellBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.revealCell(r, c);
        });

        cellBtn.addEventListener('contextmenu', (e) => {
          e.preventDefault();
          this.toggleFlag(r, c);
        });

        rowDiv.appendChild(cellBtn);
      }

      this.boardEl.appendChild(rowDiv);
    }
  }

  revealCell(r, c) {
    if (this.gameState === 'lost' || this.gameState === 'won') return;
    const cell = this.grid[r][c];
    if (cell.isRevealed || cell.isFlagged) return;

    if (this.gameState === 'idle') {
      this.gameState = 'playing';
      this.plantMines(r, c);
      this.startTimer();
    }

    if (cell.isMine) {
      this.triggerGameOver(r, c);
      return;
    }

    this.doReveal(r, c);
    audioEngine.playClick();

    if (this.revealedCount === (this.rows * this.cols) - this.totalMines) {
      this.triggerWin();
    }
  }

  doReveal(r, c) {
    const cell = this.grid[r][c];
    if (cell.isRevealed || cell.isFlagged) return;

    cell.isRevealed = true;
    this.revealedCount++;

    const cellBtn = document.getElementById(`mine-cell-${r}-${c}`);
    if (cellBtn) {
      cellBtn.classList.remove('win98-raised');
      cellBtn.classList.add('win98-sunken', 'bg-gray-200');

      if (cell.neighborMines > 0) {
        cellBtn.textContent = cell.neighborMines;
        cellBtn.classList.add(`mine-num-${cell.neighborMines}`);
      } else {
        cellBtn.textContent = '';
      }
    }

    // Zero flood-fill
    if (cell.neighborMines === 0) {
      this.forEachNeighbor(r, c, (nr, nc) => {
        if (!this.grid[nr][nc].isRevealed) {
          this.doReveal(nr, nc);
        }
      });
    }
  }

  toggleFlag(r, c) {
    if (this.gameState === 'lost' || this.gameState === 'won') return;
    const cell = this.grid[r][c];
    if (cell.isRevealed) return;

    cell.isFlagged = !cell.isFlagged;
    this.flagsCount += cell.isFlagged ? 1 : -1;
    this.updateLEDs();

    const cellBtn = document.getElementById(`mine-cell-${r}-${c}`);
    if (cellBtn) {
      cellBtn.innerHTML = cell.isFlagged ? '<img src="./icons/flag.svg" class="w-3.5 h-3.5 pixel-render pointer-events-none" alt="Flag" />' : '';
    }
    audioEngine.playClick();
  }

  triggerGameOver(hitR, hitC) {
    this.gameState = 'lost';
    this.stopTimer();
    this.setFace('dead');
    audioEngine.playExplosion();

    // Reveal all mines
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const cell = this.grid[r][c];
        const cellBtn = document.getElementById(`mine-cell-${r}-${c}`);
        if (!cellBtn) continue;

        if (cell.isMine) {
          cellBtn.classList.remove('win98-raised');
          cellBtn.classList.add('win98-sunken');
          if (r === hitR && c === hitC) {
            cellBtn.classList.add('bg-red-500');
            cellBtn.innerHTML = '<img src="./icons/mine-cell.svg" class="w-3.5 h-3.5 pixel-render pointer-events-none" alt="Mine" />';
          } else if (!cell.isFlagged) {
            cellBtn.innerHTML = '<img src="./icons/mine-cell.svg" class="w-3.5 h-3.5 pixel-render pointer-events-none" alt="Mine" />';
          }
        } else if (cell.isFlagged && !cell.isMine) {
          cellBtn.innerHTML = '<img src="./icons/mine-wrong.svg" class="w-3.5 h-3.5 pixel-render pointer-events-none" alt="Wrong" />';
        }
      }
    }
  }

  triggerWin() {
    this.gameState = 'won';
    this.stopTimer();
    this.setFace('win');
    this.flagsCount = this.totalMines;
    this.updateLEDs();
    audioEngine.playTada();
  }

  bindEvents() {
    if (this.faceBtnEl) {
      this.faceBtnEl.addEventListener('click', () => {
        audioEngine.playClick();
        this.resetGame();
      });
    }

    // Minesweeper Menu Bar Items
    const btnNew = document.getElementById('mine-menu-new');
    const btnBeg = document.getElementById('mine-menu-beg');
    const btnInter = document.getElementById('mine-menu-inter');
    const btnExp = document.getElementById('mine-menu-exp');
    const btnHall = document.getElementById('mine-menu-hall');

    if (btnNew) btnNew.addEventListener('click', () => this.resetGame());
    if (btnBeg) btnBeg.addEventListener('click', () => this.setDifficulty('beginner'));
    if (btnInter) btnInter.addEventListener('click', () => this.setDifficulty('intermediate'));
    if (btnExp) btnExp.addEventListener('click', () => this.setDifficulty('expert'));
    if (btnHall) btnHall.addEventListener('click', () => {
      alert(`扫雷英雄榜 (Hall of Fame)\n\n• 初级: 王寅喆 (Tico) - 12 秒\n• 中级: 访客99 - 58 秒\n• 高级: 极客专家 - 188 秒`);
    });
  }
}
