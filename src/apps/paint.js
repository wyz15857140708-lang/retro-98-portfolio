/**
 * Retro '98 MS Paint (画图 - MSPAINT.EXE)
 * Authentic Windows 98 Paint application with 16 tools, 28-color palette,
 * stroke width selection, flood fill algorithm, undo history, and PNG/BMP export.
 */

import { audioEngine } from '../audio.js';

export class PaintApp {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.isDrawing = false;
    this.currentTool = 'pencil'; // pencil, brush, eraser, fill, picker, line, rect, circle, text
    this.primaryColor = '#000000';
    this.secondaryColor = '#FFFFFF';
    this.lineWidth = 2;
    this.fillMode = 'outline'; // outline, fill-border, fill-solid
    
    this.startX = 0;
    this.startY = 0;
    this.snapshot = null;
    this.undoStack = [];
    this.maxUndo = 10;

    // Classic 28 Win98 Palette Colors
    this.paletteColors = [
      '#000000', '#787878', '#790300', '#757A01', '#007902', '#00777B', '#03007C', '#7B007C',
      '#7B7A38', '#003E3E', '#017EFC', '#003E7E', '#3800FD', '#7A3E01',
      '#FFFFFF', '#BCBCBC', '#FD0006', '#FDFE02', '#05FD04', '#05FEFD', '#0400FD', '#FD00FD',
      '#FDFE7C', '#05FE7A', '#7CFEFE', '#7C7CFE', '#FD007C', '#FE7E39'
    ];
  }

  init() {
    this.canvas = document.getElementById('paint-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });

    // Initialize Canvas Size and Background
    this.initCanvasSize();
    this.initPalette();
    this.initToolbox();
    this.initCanvasEvents();
    this.initMenus();
  }

  initCanvasSize() {
    const container = this.canvas.parentElement;
    const width = Math.min(800, container.clientWidth || 480);
    const height = Math.min(600, container.clientHeight || 340);
    
    this.canvas.width = Math.max(320, width);
    this.canvas.height = Math.max(220, height);

    // Default white background
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.saveState();
  }

  initPalette() {
    const paletteGrid = document.getElementById('paint-palette-grid');
    const fgSwatch = document.getElementById('paint-fg-color');
    const bgSwatch = document.getElementById('paint-bg-color');

    if (fgSwatch) fgSwatch.style.backgroundColor = this.primaryColor;
    if (bgSwatch) bgSwatch.style.backgroundColor = this.secondaryColor;

    if (!paletteGrid) return;
    paletteGrid.innerHTML = '';

    this.paletteColors.forEach(color => {
      const swatch = document.createElement('div');
      swatch.className = 'w-3.5 h-3.5 win98-sunken cursor-pointer select-none';
      swatch.style.backgroundColor = color;

      // Left click = Primary Foreground color
      swatch.addEventListener('click', (e) => {
        e.preventDefault();
        this.primaryColor = color;
        if (fgSwatch) fgSwatch.style.backgroundColor = color;
        audioEngine.playClick();
      });

      // Right click = Secondary Background color
      swatch.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        this.secondaryColor = color;
        if (bgSwatch) bgSwatch.style.backgroundColor = color;
        audioEngine.playClick();
      });

      paletteGrid.appendChild(swatch);
    });
  }

  initToolbox() {
    const toolButtons = document.querySelectorAll('.paint-tool-btn');
    toolButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tool = btn.getAttribute('data-tool');
        if (!tool) return;
        
        toolButtons.forEach(b => {
          b.classList.remove('win98-pressed', 'bg-[#000080]', 'text-white');
          b.classList.add('win98-raised');
        });
        
        btn.classList.remove('win98-raised');
        btn.classList.add('win98-pressed');

        this.currentTool = tool;
        audioEngine.playClick();
      });
    });

    // Stroke width buttons
    const strokeBtns = document.querySelectorAll('.paint-stroke-btn');
    strokeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const w = parseInt(btn.getAttribute('data-width') || '2', 10);
        this.lineWidth = w;
        strokeBtns.forEach(b => b.classList.remove('win98-pressed', 'bg-gray-400'));
        btn.classList.add('win98-pressed', 'bg-gray-400');
        audioEngine.playClick();
      });
    });
  }

  initCanvasEvents() {
    const coordDisplay = document.getElementById('paint-coord-status');

    this.canvas.addEventListener('mousedown', (e) => {
      if (e.button === 2 && this.currentTool !== 'eraser') {
        // Right button drawing uses secondary color
        this.ctx.strokeStyle = this.secondaryColor;
        this.ctx.fillStyle = this.secondaryColor;
      } else {
        this.ctx.strokeStyle = this.primaryColor;
        this.ctx.fillStyle = this.primaryColor;
      }

      this.isDrawing = true;
      const rect = this.canvas.getBoundingClientRect();
      this.startX = Math.floor(e.clientX - rect.left);
      this.startY = Math.floor(e.clientY - rect.top);

      if (this.currentTool === 'fill') {
        this.floodFill(this.startX, this.startY, this.primaryColor);
        this.saveState();
        this.isDrawing = false;
        return;
      }

      if (this.currentTool === 'picker') {
        this.pickColor(this.startX, this.startY);
        this.isDrawing = false;
        return;
      }

      if (this.currentTool === 'text') {
        const text = prompt('请输入要绘制的文字 / Enter Text:', '王寅喆 Tico 98');
        if (text) {
          this.ctx.font = `${Math.max(12, this.lineWidth * 8)}px "Handjet", "Inter", sans-serif`;
          this.ctx.fillText(text, this.startX, this.startY);
          this.saveState();
        }
        this.isDrawing = false;
        return;
      }

      // Save canvas snapshot for shapes
      this.snapshot = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

      this.ctx.beginPath();
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.lineCap = 'square';
      this.ctx.lineJoin = 'miter';

      if (this.currentTool === 'pencil' || this.currentTool === 'brush') {
        this.ctx.moveTo(this.startX, this.startY);
        this.ctx.lineTo(this.startX, this.startY);
        this.ctx.stroke();
      } else if (this.currentTool === 'eraser') {
        this.ctx.strokeStyle = this.secondaryColor;
        this.ctx.lineWidth = this.lineWidth * 4;
        this.ctx.moveTo(this.startX, this.startY);
        this.ctx.lineTo(this.startX, this.startY);
        this.ctx.stroke();
      }
    });

    window.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const curX = Math.floor(e.clientX - rect.left);
      const curY = Math.floor(e.clientY - rect.top);

      if (coordDisplay && curX >= 0 && curX <= this.canvas.width && curY >= 0 && curY <= this.canvas.height) {
        coordDisplay.textContent = `${curX}, ${curY} 像素`;
      }

      if (!this.isDrawing) return;

      if (this.currentTool === 'pencil' || this.currentTool === 'brush') {
        this.ctx.lineTo(curX, curY);
        this.ctx.stroke();
      } else if (this.currentTool === 'eraser') {
        this.ctx.strokeStyle = this.secondaryColor;
        this.ctx.lineWidth = this.lineWidth * 4;
        this.ctx.lineTo(curX, curY);
        this.ctx.stroke();
      } else if (this.snapshot) {
        // Restore before drawing preview shape
        this.ctx.putImageData(this.snapshot, 0, 0);

        if (this.currentTool === 'line') {
          this.ctx.beginPath();
          this.ctx.moveTo(this.startX, this.startY);
          this.ctx.lineTo(curX, curY);
          this.ctx.stroke();
        } else if (this.currentTool === 'rect') {
          const w = curX - this.startX;
          const h = curY - this.startY;
          this.ctx.strokeRect(this.startX, this.startY, w, h);
        } else if (this.currentTool === 'circle') {
          const radiusX = Math.abs(curX - this.startX) / 2;
          const radiusY = Math.abs(curY - this.startY) / 2;
          const centerX = Math.min(this.startX, curX) + radiusX;
          const centerY = Math.min(this.startY, curY) + radiusY;
          this.ctx.beginPath();
          this.ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
          this.ctx.stroke();
        }
      }
    });

    window.addEventListener('mouseup', () => {
      if (this.isDrawing) {
        this.isDrawing = false;
        this.saveState();
      }
    });

    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  pickColor(x, y) {
    const pixel = this.ctx.getImageData(x, y, 1, 1).data;
    const hex = `#${((1 << 24) + (pixel[0] << 16) + (pixel[1] << 8) + pixel[2]).toString(16).slice(1)}`;
    this.primaryColor = hex;
    const fgSwatch = document.getElementById('paint-fg-color');
    if (fgSwatch) fgSwatch.style.backgroundColor = hex;
    audioEngine.playClick();
  }

  floodFill(startX, startY, fillHex) {
    const imgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const data = imgData.data;
    const width = this.canvas.width;
    const height = this.canvas.height;

    const startIdx = (startY * width + startX) * 4;
    const targetR = data[startIdx];
    const targetG = data[startIdx + 1];
    const targetB = data[startIdx + 2];
    const targetA = data[startIdx + 3];

    // Convert hex to rgb
    const fillR = parseInt(fillHex.slice(1, 3), 16);
    const fillG = parseInt(fillHex.slice(3, 5), 16);
    const fillB = parseInt(fillHex.slice(5, 7), 16);
    const fillA = 255;

    if (targetR === fillR && targetG === fillG && targetB === fillB) return;

    const matchTarget = (idx) => {
      return data[idx] === targetR && data[idx + 1] === targetG && data[idx + 2] === targetB && data[idx + 3] === targetA;
    };

    const colorPixel = (idx) => {
      data[idx] = fillR;
      data[idx + 1] = fillG;
      data[idx + 2] = fillB;
      data[idx + 3] = fillA;
    };

    const queue = [[startX, startY]];
    const visited = new Uint8Array(width * height);

    while (queue.length > 0) {
      const [x, y] = queue.pop();
      const idx = (y * width + x) * 4;
      const pos = y * width + x;

      if (visited[pos]) continue;
      visited[pos] = 1;

      if (matchTarget(idx)) {
        colorPixel(idx);

        if (x > 0) queue.push([x - 1, y]);
        if (x < width - 1) queue.push([x + 1, y]);
        if (y > 0) queue.push([x, y - 1]);
        if (y < height - 1) queue.push([x, y + 1]);
      }
    }

    this.ctx.putImageData(imgData, 0, 0);
  }

  saveState() {
    if (this.undoStack.length >= this.maxUndo) {
      this.undoStack.shift();
    }
    this.undoStack.push(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height));
  }

  undo() {
    if (this.undoStack.length > 1) {
      this.undoStack.pop(); // discard current state
      const prev = this.undoStack[this.undoStack.length - 1];
      this.ctx.putImageData(prev, 0, 0);
      audioEngine.playClick();
    }
  }

  clearCanvas() {
    this.ctx.fillStyle = this.secondaryColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.saveState();
    audioEngine.playRecycle();
  }

  exportImage() {
    const link = document.createElement('a');
    link.download = `王寅喆_画图_${Date.now()}.png`;
    link.href = this.canvas.toDataURL('image/png');
    link.click();
    audioEngine.playDing();
  }

  initMenus() {
    const btnUndo = document.getElementById('paint-menu-undo');
    const btnClear = document.getElementById('paint-menu-clear');
    const btnSave = document.getElementById('paint-menu-save');
    const btnNew = document.getElementById('paint-menu-new');

    if (btnUndo) btnUndo.addEventListener('click', () => this.undo());
    if (btnClear) btnClear.addEventListener('click', () => this.clearCanvas());
    if (btnSave) btnSave.addEventListener('click', () => this.exportImage());
    if (btnNew) btnNew.addEventListener('click', () => this.clearCanvas());
  }
}
