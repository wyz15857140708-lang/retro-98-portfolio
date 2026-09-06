# 💾 Windows 98 Interactive Portfolio — Tico

<p align="center">
  <img src="https://img.shields.io/badge/Windows_98-Authentic_Emulation-008080?style=for-the-badge&logo=windows95&logoColor=white" alt="Windows 98" />
  <img src="https://img.shields.io/badge/Live_Demo-GitHub_Pages-2ea44f?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages" />
  <img src="https://img.shields.io/badge/Language-English_%7C_中文-blue?style=for-the-badge" alt="Bilingual" />
  <img src="https://img.shields.io/badge/Built_With-Vite_%7C_Tailwind_CSS_%7C_Vanilla_JS-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Tech Stack" />
</p>

<p align="center">
  <b>An authentic, pixel-perfect Windows 98 desktop environment & personal portfolio built from scratch with Vanilla JavaScript, Tailwind CSS, and Vite.</b>
  <br />
  <br />
  <a href="https://wyz15857140708-lang.github.io/retro-98-portfolio/"><strong>🌐 Visit Live Website »</strong></a>
  ·
  <a href="https://github.com/wyz15857140708-lang/retro-98-portfolio/issues">Report Bug</a>
  ·
  <a href="https://github.com/wyz15857140708-lang/retro-98-portfolio/issues">Request Feature</a>
</p>

---

## 🌟 Highlights & Overview

This project transforms a traditional developer/designer portfolio into an immersive, fully interactive **Windows 98 operating system simulation** running directly in the browser. 

Every design detail has been crafted to match the authentic 1998 Windows computing experience — from classic 3D beveled borders and CRT phosphor scanlines to interactive retro applications like **Minesweeper**, **MS Paint**, **Notepad**, and **MS-DOS Terminal**.

---

## ✨ Features

### 🖥️ Authentic OS Emulation & Window Management
- **BIOS Boot & Login Sequence**: Simulated BIOS POST memory check, boot sounds, and Windows 98 network login screen.
- **Full Windowing System**: Dragging, z-index elevation, focus states, minimizing to taskbar, maximizing, and resizing.
- **Taskbar & Start Menu**: Live system clock, active window switcher, Start Menu cascading folders, and Windows Shutdown dialog.
- **CRT Monitor Effects**: Optional scanline overlays, screen curvature, phosphor roll, screen flicker, and jitter toggles.
- **Web Audio FX**: Synthesized Windows startup chime, error dialog chords, button clicks, and hardware beeps.
- **100% Vector Retro Icons**: Pixel-perfect SVG recreations of classic Windows 98 system icons.

### 🌐 Bilingual (English / 简体中文)
- Instant one-click toggle between English and Chinese (`EN` / `中`).
- Complete data binding across all windows, portfolio descriptions, dialogs, and terminal commands.

### 📦 Built-in Applications & Interactive Tools

| Application | Description |
| :--- | :--- |
| **📁 Personal Profile (My Computer)** | Comprehensive biography, professional titles, academic research interests, and status. |
| **💾 Projects Showcase & Inspector** | Interactive showcase of projects (Carti Website, Kahoot Platform, 3D Games, Social Studies) with right-click **Properties Inspector**. |
| **💻 MS-DOS Prompt** | Fully functional interactive CLI supporting commands (`help`, `bio`, `projects`, `skills`, `contact`, `matrix`, `ver`, `reboot`, etc.). |
| **💣 Minesweeper (扫雷)** | Classic 9x9 playable Minesweeper with timer, mine counter, and expressive reset button. |
| **🎨 MS Paint** | Functional drawing board with brush size selector, color palette, eraser, clear canvas, and PNG export. |
| **📝 Notepad** | Lightweight text editor with word wrapping, sample documents, and note-taking. |
| **🧮 Calculator** | Classic standard 16-key desktop calculator. |
| **🎵 CD / Media Player** | Retro media player with track playback, spectrum visualizer, and volume control. |
| **⚙️ Display Properties & Control Panel** | Change desktop wallpaper, toggle CRT shaders, adjust themes, and preview screensavers. |
| **🗑️ Recycle Bin** | Interactive trash bin with restore and delete features. |

---

## 🛠️ Technology Stack

- **Core Logic**: Vanilla JavaScript (Modern ES6+ Modules, zero heavy runtime frameworks)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Retro 98 Design System (3D bevels, pixel borders, retro palettes)
- **Audio Engine**: Web Audio API (real-time sound generation)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **Deployment**: GitHub Actions CI/CD $\rightarrow$ GitHub Pages

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn / pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/wyz15857140708-lang/retro-98-portfolio.git
   cd retro-98-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the retro OS.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready static bundle will be generated in `./dist`.

---

## 📂 Project Structure

```text
retro-98-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions automated deployment workflow
├── public/
│   ├── icons/                  # Windows 98 SVG retro icons
│   └── tico_avatar.jpg         # Profile avatar asset
├── src/
│   ├── profile-data.js         # Central bilingual portfolio configuration
│   └── ...
├── index.html                  # Main OS structure, window templates & logic
├── vite.config.js              # Vite configuration (relative base path)
├── tailwind.config.js          # Retro theme tokens & color definitions
├── package.json
└── README.md
```

---

## ⌨️ MS-DOS Terminal Commands

Launch the **MS-DOS Prompt** icon from the desktop or Start Menu to use built-in CLI commands:

- `help` - Display list of available commands
- `bio` - Print Tico's biography
- `projects` - List all featured works & repositories
- `skills` - Display development & design stack
- `contact` - Show email, social links & GitHub
- `matrix` - Enter retro green matrix terminal mode
- `ver` - Display Windows 98 system version info
- `cls` / `clear` - Clear console output
- `reboot` - Restart Windows 98 OS

---

## 👤 Author

**Tico (王寅喆)**  
*Creative Developer / Digital Designer / Student Researcher*

- 🌐 **Portfolio**: [https://wyz15857140708-lang.github.io/retro-98-portfolio/](https://wyz15857140708-lang.github.io/retro-98-portfolio/)
- 🐙 **GitHub**: [@wyz15857140708-lang](https://github.com/wyz15857140708-lang)
- 🎵 **Carti Website**: [https://wyz15857140708-lang.github.io/Carti-website/](https://wyz15857140708-lang.github.io/Carti-website/)

---

## 📄 License

This project is created for personal portfolio demonstration and creative design purposes.  
Windows 98 UI elements and iconography are inspired by Microsoft Windows 98 aesthetics.
