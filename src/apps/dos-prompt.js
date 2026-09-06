/**
 * Authentic MS-DOS Prompt (MS-DOS 7.10) Console Emulator
 */

import { audioEngine } from '../audio.js';
import { profileData } from '../profile-data.js';

export class DosPromptApp {
  constructor() {
    this.container = document.getElementById('dos-output');
    this.input = document.getElementById('dos-input');
    this.promptPath = 'C:\\TICO>';
    this.history = [];
    this.historyIdx = -1;
  }

  init() {
    if (!this.input || !this.container) return;

    this.printHeader();
    this.bindEvents();
  }

  printHeader() {
    this.container.innerHTML = `
      <div class="text-gray-300">Microsoft(R) Windows 98</div>
      <div class="text-gray-300">(C)Copyright Microsoft Corp 1981-1998.</div>
      <div class="text-yellow-400 mt-1">TicoOS Command Interpreter v7.10 - Type 'HELP' for available commands.</div>
      <div class="mt-2"></div>
    `;
  }

  bindEvents() {
    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = this.input.value.trim();
        if (cmd) {
          this.history.push(cmd);
          this.historyIdx = this.history.length;
        }
        this.executeCommand(cmd);
        this.input.value = '';
      } else if (e.key === 'ArrowUp') {
        if (this.historyIdx > 0) {
          this.historyIdx--;
          this.input.value = this.history[this.historyIdx];
        }
      } else if (e.key === 'ArrowDown') {
        if (this.historyIdx < this.history.length - 1) {
          this.historyIdx++;
          this.input.value = this.history[this.historyIdx];
        } else {
          this.historyIdx = this.history.length;
          this.input.value = '';
        }
      }
    });

    // Focus input on console click
    const consoleBox = document.getElementById('window-dos');
    if (consoleBox) {
      consoleBox.addEventListener('click', () => {
        this.input.focus();
      });
    }
  }

  executeCommand(rawCmd) {
    const p = document.createElement('div');
    p.className = 'text-gray-200 mt-1';
    p.textContent = `${this.promptPath} ${rawCmd}`;
    this.container.appendChild(p);

    const parts = rawCmd.trim().split(' ');
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ').trim().toLowerCase();

    audioEngine.playClick();

    switch (cmd) {
      case '':
        break;

      case 'help':
        this.printLines([
          "Available MS-DOS Commands:",
          "  DIR        - List files in current directory",
          "  TYPE <file>- Display contents of a text file",
          "  VER        - Display Windows / MS-DOS version",
          "  CLS        - Clear the terminal screen",
          "  PROJECTS   - List all 7 portfolio projects & links",
          "  CONTACT    - View email, phone, WeChat and socials",
          "  MATRIX     - Run Matrix digital rain animation",
          "  DATE       - Display current system date",
          "  TIME       - Display current system time",
          "  ECHO <msg> - Display a message",
          "  EXIT       - Close MS-DOS prompt"
        ]);
        break;

      case 'ver':
        this.printLines(["Windows 98 Second Edition [Version 4.10.2222 A] (Tico Edition)"]);
        break;

      case 'cls':
        this.container.innerHTML = '';
        break;

      case 'dir':
        this.printLines([
          " Volume in drive C is TICO_SYSTEM",
          " Volume Serial Number is 1998-TICO",
          " Directory of " + this.promptPath,
          "",
          "CARTI    HTM         4,820  09-06-98  12:00p Carti-Website",
          "KAHOOT   EXE        18,400  09-06-98   2:14p Kahoot-Learning-Platform",
          "TRAP     JS          6,120  09-06-98   4:30p Architecture-of-Trap",
          "RACING   3D         42,880  09-06-98   5:12p Open-World-Racing-3D",
          "KSAO     DOC        12,300  09-06-98   6:20p NBA-Player-KSAO-Study",
          "WULIAN   DOC        15,200  09-06-98   7:10p Wulian-Xiyuan-Field-Report",
          "LUNCH    DAT         9,800  09-06-98   8:45p School-Lunch-Break-Study",
          "RESUME   TXT         8,940  09-06-98   9:00p Tico-Wang-Profile",
          "       8 file(s)        118,460 bytes",
          "       2 dir(s)   4,214,800,000 bytes free"
        ]);
        break;

      case 'type':
        if (!arg) {
          this.printLines(["Required parameter missing. Syntax: TYPE <filename>"]);
        } else if (arg.includes('resume') || arg.includes('tico')) {
          const data = profileData.getData();
          this.printLines([
            `--- ${data.personal.name} ---`,
            `Title: ${data.personal.title}`,
            `Tagline: ${data.personal.subtitle}`,
            `Bio: ${data.personal.bio[0]}`,
            `GitHub: https://github.com/wyz15857140708-lang`
          ]);
        } else if (arg.includes('carti')) {
          this.printLines([
            "CARTI WEBSITE // Live Demo:",
            "URL: https://wyz15857140708-lang.github.io/Carti-website/",
            "Tech: HTML / CSS / JS / GitHub Pages"
          ]);
        } else {
          this.printLines([`File not found: ${arg}`]);
        }
        break;

      case 'projects':
        const data = profileData.getData();
        this.printLines([
          "=== SELECTED PROJECTS & RESEARCH (RANKED BY IMPACT) ===",
          ...(data.projects || []).map(p => `[${p.number}] [${p.statusLabel || p.status.toUpperCase()}] ${p.title} (${p.category}) -> ${p.detailsUrl ? p.detailsUrl : (p.linkStateNote || 'Private / In Dev')}`)
        ]);
        break;

      case 'contact':
      case 'links':
        const socData = profileData.getData();
        this.printLines([
          "=== CONTACT & NETWORK DIRECTORY ===",
          ...(socData.socials || []).map(s => `* ${s.name.padEnd(24, ' ')} : ${s.handle} (${s.badge})`)
        ]);
        break;

      case 'date':
        this.printLines([`Current date is: ${new Date().toDateString()}`]);
        break;

      case 'time':
        this.printLines([`Current time is: ${new Date().toTimeString()}`]);
        break;

      case 'echo':
        this.printLines([arg || '']);
        break;

      case 'matrix':
        this.printLines([
          "Initializing digital neural flow...",
          "01010100 01001001 01000011 01001111 00100000 00110001 00111001 00111001 00111000",
          "Wake up, Neo... The Matrix has you.",
          "Follow the white rabbit."
        ]);
        break;

      case 'exit':
        const dosWin = document.getElementById('window-dos');
        if (dosWin) {
          dosWin.querySelector('.btn-close').click();
        }
        break;

      default:
        this.printLines([`Bad command or file name: '${cmd}'`]);
        break;
    }

    // Scroll to bottom
    const scrollContainer = document.getElementById('dos-scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }

  printLines(lines) {
    lines.forEach(line => {
      const div = document.createElement('div');
      div.className = 'text-gray-300 font-vt323 text-base leading-tight';
      div.textContent = line;
      this.container.appendChild(div);
    });
  }
}
