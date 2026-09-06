/**
 * Authentic Windows 98 Notepad (记事本) Engine
 * Features: Menu bar, word wrap toggle, F5 time/date stamp,
 * Save/Download as .txt, line/column status tracking.
 */

import { profileData } from '../profile-data.js';
import { audioEngine } from '../audio.js';

export class NotepadApp {
  constructor() {
    this.textarea = document.getElementById('notepad-textarea');
    this.statusLine = document.getElementById('notepad-status-line');
    this.statusCol = document.getElementById('notepad-status-col');
    this.wordWrap = true;
  }

  init() {
    if (!this.textarea) return;
    this.loadInitialContent();
    this.bindEvents();
  }

  loadInitialContent() {
    const data = profileData.getData();
    const p = data.personal;
    
    const lines = [
      `=============================================================`,
      `  ${p.name.toUpperCase()} - PORTFOLIO & RESUME`,
      `  ${p.title}`,
      `=============================================================`,
      ``,
      `[TAGLINE]`,
      `"${p.subtitle}"`,
      ``,
      `[STATUS]`,
      `${p.status}`,
      ``,
      `[ABOUT ME]`,
      ...(p.bio || []),
      ``,
      `[SELECTED PROJECTS]`,
      ...(data.projects || []).map((proj, i) => `${i + 1}. ${proj.title} (${proj.category})\n   - ${proj.description}\n   - Tech: ${proj.techStack}\n   - Link: ${proj.detailsUrl}\n`),
      `[CORE DOMAINS]`,
      ...(data.skillsCategories || []).map(cat => `* ${cat.title}:\n  ${cat.items.join(', ')}`),
      ``,
      `[CONTACT & LINKS]`,
      ...(data.socials || []).map(soc => `* ${soc.name}: ${soc.url} (${soc.handle})`),
      ``,
      `=============================================================`,
      `  Saved from Windows 98 Workstation - (C) 1998 Tico Wang`,
      `=============================================================`
    ];

    this.textarea.value = lines.join('\n');
    this.updateStatus();
  }

  bindEvents() {
    this.textarea.addEventListener('input', () => this.updateStatus());
    this.textarea.addEventListener('keyup', () => this.updateStatus());
    this.textarea.addEventListener('click', () => this.updateStatus());

    // F5 key for Date/Time stamp
    this.textarea.addEventListener('keydown', (e) => {
      if (e.key === 'F5') {
        e.preventDefault();
        this.insertDateTime();
      }
    });

    // Notepad Menu Actions
    const btnNew = document.getElementById('notepad-menu-new');
    const btnSave = document.getElementById('notepad-menu-save');
    const btnTime = document.getElementById('notepad-menu-time');
    const btnWrap = document.getElementById('notepad-menu-wrap');
    const btnSelectAll = document.getElementById('notepad-menu-selectall');

    if (btnNew) {
      btnNew.addEventListener('click', () => {
        if (confirm('Create new document?')) {
          this.textarea.value = '';
          this.updateStatus();
        }
      });
    }

    if (btnSave) {
      btnSave.addEventListener('click', () => {
        this.downloadTextFile();
      });
    }

    if (btnTime) {
      btnTime.addEventListener('click', () => {
        this.insertDateTime();
      });
    }

    if (btnWrap) {
      btnWrap.addEventListener('click', () => {
        this.wordWrap = !this.wordWrap;
        this.textarea.style.whiteSpace = this.wordWrap ? 'pre-wrap' : 'pre';
        this.textarea.style.overflowX = this.wordWrap ? 'hidden' : 'auto';
        audioEngine.playClick();
      });
    }

    if (btnSelectAll) {
      btnSelectAll.addEventListener('click', () => {
        this.textarea.focus();
        this.textarea.select();
      });
    }
  }

  insertDateTime() {
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} ${now.getFullYear()}-${(now.getMonth()+1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
    
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    const val = this.textarea.value;
    
    this.textarea.value = val.substring(0, start) + timeStr + val.substring(end);
    this.textarea.selectionStart = this.textarea.selectionEnd = start + timeStr.length;
    this.updateStatus();
    audioEngine.playClick();
  }

  downloadTextFile() {
    const text = this.textarea.value;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Tico_Wang_Profile_1998.txt';
    a.click();
    URL.revokeObjectURL(url);
    audioEngine.playDing();
  }

  updateStatus() {
    const text = this.textarea.value.substring(0, this.textarea.selectionStart);
    const lines = text.split('\n');
    const curLine = lines.length;
    const curCol = lines[lines.length - 1].length + 1;

    if (this.statusLine) this.statusLine.textContent = `Ln ${curLine}`;
    if (this.statusCol) this.statusCol.textContent = `Col ${curCol}`;
  }
}
