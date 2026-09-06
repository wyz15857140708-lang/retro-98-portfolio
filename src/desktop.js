/**
 * Retro '98 Desktop & Component Interactivity - Ultimate Edition
 * Features:
 * - MS Paint, Minesweeper, Notepad, MS-DOS, CD Player
 * - Tabbed dialogs (Display Properties, System Properties, Project Details Inspector)
 * - 3D Flying Windows & Starfield full-screen screensavers
 * - Multi-level cascading start menus
 * - Recycle Bin restore & empty with crumple audio
 * - Full bilingual dual-language real-time synchronization
 */

import { audioEngine } from './audio.js';
import { profileData } from './profile-data.js';
import { MinesweeperGame } from './apps/minesweeper.js';
import { NotepadApp } from './apps/notepad.js';
import { DosPromptApp } from './apps/dos-prompt.js';
import { PaintApp } from './apps/paint.js';

export class DesktopController {
  constructor(windowManager) {
    this.wm = windowManager;
    this.guestbookKey = 'win98_tico_guestbook_entries';
    this.crtEnabled = true;
    this.currentProjectFilter = 'all';

    // Sub-apps
    this.minesweeper = null;
    this.notepad = null;
    this.dosPrompt = null;
    this.paintApp = null;

    // Screensaver State
    this.screensaverActive = false;
    this.screensaverType = 'flying98';
    this.screensaverAnimId = null;
    this.screensaverCanvas = null;
    this.screensaverCtx = null;
  }

  init() {
    // 1. Initialize Sub-Applications
    this.minesweeper = new MinesweeperGame();
    this.minesweeper.init();

    this.notepad = new NotepadApp();
    this.notepad.init();

    this.dosPrompt = new DosPromptApp();
    this.dosPrompt.init();

    this.paintApp = new PaintApp();
    this.paintApp.init();

    // 2. Desktop Core
    this.renderDynamicProfileContent();
    this.initClock();
    this.initDesktopIcons();
    this.initStartMenu();
    this.initSystemTray();
    this.initFAQAccordion();
    this.initGuestbook();
    this.initMediaPlayerUI();
    this.initWindowMenuBars();
    this.initDesktopSelectionMarquee();
    this.initProjectFilters();
    this.initLanguageSwitcher();
    this.initContextMenus();
    this.initDisplayPropertiesApp();
    this.initRunDialog();
    this.initExplorerToolbar();
    this.initTabControls();
    this.initScreensaver();
    this.initProjectInspector();
    this.initRecycleBin();
  }

  // Generic Win98 Tab Control Switcher
  initTabControls() {
    document.addEventListener('click', (e) => {
      const tab = e.target.closest('.win98-tab');
      if (!tab) return;

      const tabStrip = tab.closest('.win98-tab-strip');
      const container = tabStrip ? tabStrip.parentElement : null;
      if (!container) return;

      const targetId = tab.getAttribute('data-tab');
      if (!targetId) return;

      // Update tabs
      tabStrip.querySelectorAll('.win98-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update panels
      container.querySelectorAll('.win98-tab-panel').forEach(p => {
        if (p.id === targetId) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });

      audioEngine.playClick();
    });
  }

  // Populate dynamic profile content from profile-data.js based on current language
  renderDynamicProfileContent() {
    const data = profileData.getData();
    const p = data.personal;
    const ui = data.ui;

    // 1. Personal Header & Bio
    const nameEl = document.getElementById('profile-name');
    const titleEl = document.getElementById('profile-title');
    const taglineEl = document.getElementById('profile-tagline');
    const statusEl = document.getElementById('profile-status');
    const bioContainer = document.getElementById('profile-bio-container');
    const avatarEl = document.getElementById('profile-avatar');
    const loginUserEl = document.getElementById('login-username');
    const loginAvatarEl = document.getElementById('login-avatar');
    const regOwnerEl = document.getElementById('sys-registered-owner');
    if (nameEl) nameEl.textContent = p.name;
    if (titleEl) titleEl.textContent = p.title;
    if (taglineEl) taglineEl.textContent = `“${p.subtitle}”`;
    if (statusEl) statusEl.textContent = p.status;
    if (avatarEl && p.avatar) avatarEl.src = p.avatar;
    if (loginUserEl) loginUserEl.value = p.name;
    if (loginAvatarEl && p.avatar) loginAvatarEl.src = p.avatar;
    if (regOwnerEl) regOwnerEl.textContent = p.registeredOwner || p.name;

    if (bioContainer && Array.isArray(p.bio)) {
      bioContainer.innerHTML = '';
      p.bio.forEach(para => {
        const pEl = document.createElement('p');
        pEl.className = 'text-xs text-gray-800 leading-relaxed font-inter';
        pEl.textContent = para;
        bioContainer.appendChild(pEl);
      });
    }

    // 2. Render UI Texts (Titles, Buttons, Labels)
    this.updateStaticUITexts(ui);

    // 3. Render Projects
    this.renderProjects();

    // 4. Render Skills & Expertise Categories
    const skillsContainer = document.getElementById('skills-grid');
    if (skillsContainer && data.skillsCategories) {
      skillsContainer.innerHTML = '';
      data.skillsCategories.forEach(cat => {
        const tile = document.createElement('div');
        tile.className = 'win98-sunken p-3 bg-white space-y-2 flex flex-col justify-between';
        
        let itemsHtml = cat.items.map(item => 
          `<li class="text-[11px] text-gray-700 flex items-start gap-1.5"><span class="text-[#000080] font-bold">›</span><span>${escapeHtml(item)}</span></li>`
        ).join('');

        tile.innerHTML = `
          <div>
            <div class="flex items-center gap-2 border-b border-gray-200 pb-1.5 mb-2">
              <img src="${cat.icon || '/icons/settings.svg'}" class="w-5 h-5 pixel-render shrink-0" alt="" />
              <h4 class="font-bold text-xs text-[#000080] uppercase tracking-wide">${escapeHtml(cat.title)}</h4>
            </div>
            <ul class="space-y-1 pl-1 font-inter">
              ${itemsHtml}
            </ul>
          </div>
        `;
        skillsContainer.appendChild(tile);
      });
    }

    // 5. Render Technologies & Tools Matrix
    const toolsContainer = document.getElementById('tools-matrix');
    if (toolsContainer && data.techTools) {
      toolsContainer.innerHTML = '';
      data.techTools.forEach(grp => {
        const card = document.createElement('div');
        card.className = 'win98-sunken p-2.5 bg-gray-50 space-y-1.5';
        
        const tagsHtml = grp.tools.map(tool => 
          `<span class="win98-raised px-1.5 py-0.5 bg-white text-gray-800 text-[10px] font-mono font-bold">${escapeHtml(tool)}</span>`
        ).join(' ');

        card.innerHTML = `
          <div class="font-bold text-[11px] text-[#000080]">${escapeHtml(grp.category)}</div>
          <div class="flex flex-wrap gap-1.5 pt-1">
            ${tagsHtml}
          </div>
        `;
        toolsContainer.appendChild(card);
      });
    }

    // 6. Render Personal Interests Tags
    const interestsContainer = document.getElementById('interests-tags');
    if (interestsContainer && data.interests) {
      interestsContainer.innerHTML = '';
      data.interests.forEach(interest => {
        const tag = document.createElement('span');
        tag.className = 'win98-raised px-2 py-0.5 bg-gray-100 text-gray-800 text-xs font-mono select-none hover:bg-yellow-100 flex items-center gap-1';
        tag.innerHTML = `<img src="/icons/star.svg" class="w-3 h-3 pixel-render inline" alt="" /> <span>${escapeHtml(interest)}</span>`;
        interestsContainer.appendChild(tag);
      });
    }

    // 7. Render FAQs
    const faqContainer = document.getElementById('faq-container');
    if (faqContainer && data.faqs) {
      faqContainer.innerHTML = '';
      data.faqs.forEach((faq) => {
        const item = document.createElement('div');
        const isOpen = faq.isOpenDefault;
        item.className = `faq-item ${isOpen ? 'win98-sunken' : 'win98-raised'} bg-gray-100 p-2.5 select-none`;
        
        const formattedAnswer = escapeHtml(faq.answer).replace(/\n\n/g, '<br/><br/>');

        item.innerHTML = `
          <div class="faq-header flex justify-between items-center cursor-pointer font-bold text-xs text-gray-900 hover:text-[#000080]">
            <span class="flex items-center gap-1.5"><img src="/icons/question.svg" class="w-3.5 h-3.5 pixel-render inline shrink-0" alt="" /> <span>${escapeHtml(faq.question)}</span></span>
            <span class="faq-toggle-icon win98-raised w-5 h-5 flex items-center justify-center font-mono text-sm leading-none bg-gray-200">${isOpen ? '-' : '+'}</span>
          </div>
          <div class="faq-content ${isOpen ? '' : 'hidden'} pt-2.5 mt-2.5 border-t border-gray-300 text-xs text-gray-700 leading-relaxed font-inter">
            ${formattedAnswer}
          </div>
        `;
        faqContainer.appendChild(item);
      });
    }

    // 8. Render Social & Directory Links
    const socialsContainer = document.getElementById('socials-list');
    if (socialsContainer && data.socials) {
      socialsContainer.innerHTML = '';
      data.socials.forEach(soc => {
        const link = document.createElement('a');
        link.href = soc.url;
        link.target = soc.url.startsWith('http') ? '_blank' : '_self';
        link.rel = 'noopener noreferrer';
        link.className = 'flex items-center justify-between p-2 hover:bg-blue-100 win98-raised text-black no-underline block cursor-pointer select-none';
        link.innerHTML = `
          <span class="flex items-center gap-2 font-bold text-xs">
            <img src="${soc.icon || './icons/network.svg'}" class="w-4 h-4 pixel-render shrink-0" alt="" /> 
            <span>${escapeHtml(soc.name)}</span>
          </span>
          <div class="flex items-center gap-2">
            <span class="text-[11px] text-[#000080] font-mono font-bold">${escapeHtml(soc.handle || '')}</span>
            <span class="win98-sunken px-1.5 py-0.5 bg-yellow-100 text-yellow-900 text-[9px] font-bold">${escapeHtml(soc.badge || 'LINK')}</span>
          </div>
        `;

        if (soc.canCopy && soc.copyText) {
          link.addEventListener('click', (e) => {
            if (!soc.url.startsWith('http') && !soc.url.startsWith('mailto:') && !soc.url.startsWith('tel:')) {
              e.preventDefault();
            }
            navigator.clipboard.writeText(soc.copyText).then(() => {
              audioEngine.playDing();
              const originalBadge = soc.badge;
              const badgeEl = link.querySelector('.win98-sunken');
              if (badgeEl) {
                badgeEl.textContent = profileData.currentLang === 'zh' ? '已复制 ✔' : 'COPIED ✔';
                badgeEl.className = 'win98-sunken px-1.5 py-0.5 bg-green-100 text-green-900 text-[9px] font-bold';
                setTimeout(() => {
                  badgeEl.textContent = originalBadge;
                  badgeEl.className = 'win98-sunken px-1.5 py-0.5 bg-yellow-100 text-yellow-900 text-[9px] font-bold';
                }, 1800);
              }
            }).catch(() => {});
          });
        }

        socialsContainer.appendChild(link);
      });
    }

    // 9. Render System Hardware Specs
    const specs = data.specs;
    const sysSpecsList = document.getElementById('sys-specs-list');
    if (sysSpecsList && specs) {
      sysSpecsList.innerHTML = `
        <li>• 计算机名: ${escapeHtml(specs.systemName || 'TICO-STATION 98')}</li>
        <li>• 处理器 (CPU): ${escapeHtml(specs.processor)}</li>
        <li>• 内存 (RAM): ${escapeHtml(specs.memory)}</li>
        <li>• 硬盘存储 (HDD): ${escapeHtml(specs.storage)}</li>
        <li>• 显卡 (GPU): ${escapeHtml(specs.graphics)}</li>
        <li>• 声卡 (Sound): ${escapeHtml(specs.sound)}</li>
      `;
    }
  }

  updateStaticUITexts(ui) {
    if (!ui) return;

    setText('icon-title-portfolio', ui.desktopIconPortfolio);
    setText('icon-title-computer', ui.desktopIconComputer);
    setText('icon-title-music', ui.desktopIconMusic);
    setText('icon-title-social', ui.desktopIconSocial);
    setText('icon-title-recycle', ui.desktopIconRecycle);
    setText('icon-title-paint', ui.desktopIconPaint || (profileData.currentLang === 'zh' ? '画图程序' : 'MS Paint'));
    setText('icon-title-minesweeper', profileData.currentLang === 'zh' ? '扫雷游戏' : 'Minesweeper');
    setText('icon-title-notepad', profileData.currentLang === 'zh' ? '记事本 (简历)' : 'Notepad');

    setText('title-section-work', ui.sectionWorkTitle);
    setText('title-section-skills', ui.sectionSkillsTitle);
    setText('title-section-interests', ui.sectionInterestsTitle);
    setText('title-section-faq', ui.sectionFaqTitle);
    setText('title-section-guestbook', ui.sectionGuestbookTitle);

    setText('filter-btn-all', ui.tabAllProjects);
    setText('filter-btn-dev', ui.tabDevProjects);
    setText('filter-btn-research', ui.tabResearchProjects);

    setText('guestbook-prompt-title', ui.guestbookPrompt);
    setText('guestbook-name-label', ui.guestbookNameLabel);
    setText('guestbook-msg-label', ui.guestbookMsgLabel);
    setText('guestbook-submit-btn', ui.guestbookSubmitBtn);
    setText('guestbook-recent-title', ui.guestbookRecent);

    const nameInput = document.getElementById('guestbook-name');
    const msgInput = document.getElementById('guestbook-msg');
    if (nameInput) nameInput.placeholder = ui.guestbookNamePlaceholder || '';
    if (msgInput) msgInput.placeholder = ui.guestbookMsgPlaceholder || '';

    setText('menu-btn-file', ui.menuFile);
    setText('menu-btn-edit', ui.menuEdit);
    setText('menu-btn-view', ui.menuView);
    setText('menu-btn-go', ui.menuGo);
    setText('menu-btn-help', ui.menuHelp);

    setText('start-text', ui.startBtn);
    setText('start-item-portfolio', ui.startMenuPortfolio);
    setText('start-item-music', ui.startMenuMusic);
    setText('start-item-computer', ui.startMenuComputer);
    setText('start-item-social', ui.startMenuSocial);
    setText('start-item-crt', ui.startMenuToggleCrt);
    setText('start-item-restart', ui.startMenuRestart);
    setText('start-item-shutdown', ui.startMenuShutdown);

    setText('tray-lang-text', profileData.currentLang === 'zh' ? '中' : 'EN');
  }

  renderProjects() {
    const data = profileData.getData();
    const projectsContainer = document.getElementById('projects-grid');
    if (!projectsContainer || !data.projects) return;

    projectsContainer.innerHTML = '';

    const filtered = data.projects.filter(p => {
      if (this.currentProjectFilter === 'dev') return p.type === 'dev';
      if (this.currentProjectFilter === 'research') return p.type === 'research';
      return true;
    });

    const countEl = document.getElementById('projects-count');
    if (countEl) {
      countEl.textContent = profileData.currentLang === 'zh' ? `共 ${filtered.length} 项成果` : `${filtered.length} Items Displayed`;
    }

    const getStatusBadgeHtml = (status, label) => {
      const s = status || 'prototype';
      let bgClass = 'bg-blue-800 text-white';
      let dot = '◆';
      if (s === 'live') {
        bgClass = 'bg-emerald-700 text-white';
        dot = '●';
      } else if (s === 'in-progress') {
        bgClass = 'bg-purple-700 text-white';
        dot = '▲';
      } else if (s === 'research') {
        bgClass = 'bg-amber-800 text-white';
        dot = '■';
      } else if (s === 'archived') {
        bgClass = 'bg-gray-700 text-white';
        dot = '▼';
      }
      return `<span class="win98-raised px-1.5 py-0.5 text-[9px] font-mono font-bold tracking-wide ${bgClass} shrink-0">${dot} ${escapeHtml(label || s.toUpperCase())}</span>`;
    };

    filtered.forEach(proj => {
      const card = document.createElement('article');
      card.className = 'win98-sunken p-3 bg-white space-y-2.5 flex flex-col justify-between cursor-pointer hover:bg-blue-50/40';
      
      const tagsHtml = proj.tags ? proj.tags.map(t => `<span class="win98-raised px-1 py-0.2 bg-gray-100 text-gray-700 text-[9px] font-mono font-semibold">${escapeHtml(t)}</span>`).join(' ') : '';
      const isExternalLink = proj.detailsUrl && proj.detailsUrl.startsWith('http');

      card.innerHTML = `
        <div class="space-y-2">
          <div class="win98-sunken bg-gray-950 h-28 flex flex-col justify-between p-2 overflow-hidden relative border border-gray-800">
            <div class="flex justify-between items-center text-[10px] font-mono text-gray-400 gap-1">
              <span class="text-yellow-400 font-bold font-vt323 text-sm tracking-wider truncate">[ ${escapeHtml(proj.category)} ]</span>
              ${getStatusBadgeHtml(proj.status, proj.statusLabel)}
            </div>
            
            <div class="font-handjet text-2xl ${proj.accentColor || 'text-cyan-400'} font-bold tracking-widest text-center px-1 truncate">
              ${escapeHtml(proj.title.toUpperCase())}
            </div>

            <div class="flex justify-between items-center text-[9px] font-mono text-gray-500">
              <span>PRJ_${proj.number || '00'}</span>
              <span>256_COLOR</span>
            </div>
          </div>

          <div class="space-y-1">
            <div class="flex items-center justify-between gap-1">
              <h3 class="font-bold text-sm text-[#000080] flex items-center gap-1.5">
                <img src="${proj.icon || './icons/document.svg'}" class="w-4 h-4 pixel-render shrink-0" alt="" /> 
                <span>${escapeHtml(proj.title)}</span>
              </h3>
              <span class="win98-sunken px-1 text-[9px] font-mono ${proj.type === 'research' ? 'bg-amber-100 text-amber-900' : 'bg-cyan-100 text-cyan-900'} font-bold shrink-0">
                ${proj.type === 'research' ? (profileData.currentLang === 'zh' ? '学术研究' : 'RESEARCH') : (profileData.currentLang === 'zh' ? '交互开发' : 'INTERACTIVE')}
              </span>
            </div>
            <div class="flex flex-wrap gap-1">
              ${tagsHtml}
            </div>
          </div>

          <p class="text-xs text-gray-700 leading-relaxed font-inter">
            ${escapeHtml(proj.description)}
          </p>
        </div>

        <div class="pt-2 border-t border-gray-200 flex items-center justify-between gap-2">
          <button class="btn-proj-details win98-raised px-2.5 py-1 text-xs font-bold hover:bg-gray-200 active:win98-pressed text-[#000080] flex items-center gap-1 shrink-0 cursor-pointer" data-id="${proj.id}">
            <img src="./icons/properties.svg" class="w-3.5 h-3.5 pixel-render inline" alt="" /> <span>${profileData.currentLang === 'zh' ? '查看属性' : 'Properties'}</span>
          </button>
          
          ${isExternalLink 
            ? `<a href="${proj.detailsUrl}" target="_blank" rel="noopener noreferrer" class="win98-raised px-2.5 py-1 text-xs font-bold hover:bg-gray-200 active:win98-pressed no-underline text-[#000080] flex items-center gap-1 shrink-0 font-sans">
                <span>${escapeHtml(proj.linkLabel || (profileData.currentLang === 'zh' ? '访问在线网站 ➔' : 'Open Live Site ➔'))}</span>
              </a>`
            : `<span class="win98-sunken px-2 py-0.5 text-[10px] text-gray-500 bg-gray-100 font-mono select-none">
                ${escapeHtml(proj.linkStateNote || (profileData.currentLang === 'zh' ? '🔒 私有项目 / 暂无外链' : '🔒 Private Project'))}
              </span>`
          }
        </div>
      `;

      // Click card or properties button opens project inspector
      card.addEventListener('dblclick', () => this.openProjectInspector(proj.id));
      const propBtn = card.querySelector('.btn-proj-details');
      if (propBtn) {
        propBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.openProjectInspector(proj.id);
        });
      }

      projectsContainer.appendChild(card);
    });
  }

  // Project Inspector Dialog (对象属性)
  initProjectInspector() {
    // Esc key closes inspector
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const modal = document.getElementById('modal-project-details');
        if (modal && !modal.classList.contains('hidden')) {
          modal.classList.add('hidden');
        }
      }
    });
  }

  openProjectInspector(projectId) {
    const data = profileData.getData();
    const proj = (data.projects || []).find(p => p.id === projectId);
    if (!proj) return;

    const modal = document.getElementById('modal-project-details');
    if (!modal) return;

    const titleEl = document.getElementById('proj-modal-title');
    const nameEl = document.getElementById('proj-modal-name');
    const iconEl = document.getElementById('proj-modal-icon');
    const catEl = document.getElementById('proj-modal-category');
    const descEl = document.getElementById('proj-modal-desc');
    const techEl = document.getElementById('proj-modal-tech');
    const archEl = document.getElementById('proj-modal-arch');
    const featuresEl = document.getElementById('proj-modal-features');
    const metricsEl = document.getElementById('proj-modal-metrics');
    const releaseEl = document.getElementById('proj-modal-release');
    const linkEl = document.getElementById('proj-modal-link');

    if (titleEl) titleEl.textContent = `${proj.title} - 对象属性`;
    if (nameEl) nameEl.textContent = proj.title;
    if (iconEl) iconEl.innerHTML = `<img src="${proj.icon || './icons/document.svg'}" class="w-8 h-8 pixel-render" alt="" />`;
    if (catEl) catEl.innerHTML = `${escapeHtml(proj.category)} &nbsp;|&nbsp; <span class="font-bold text-[#000080]">${escapeHtml(proj.statusLabel || proj.version || '1.0')}</span>`;
    if (descEl) descEl.textContent = proj.description;
    if (techEl) techEl.textContent = proj.techStack;

    const specs = proj.specs || {};
    if (archEl) archEl.textContent = specs.architecture || '标准 Web 标准技术栈实现，采用模块化组件思想。';
    
    if (featuresEl) {
      featuresEl.innerHTML = '';
      const list = specs.keyFeatures || [proj.description];
      list.forEach(f => {
        const li = document.createElement('li');
        li.textContent = f;
        featuresEl.appendChild(li);
      });
    }

    if (metricsEl) metricsEl.textContent = specs.metrics || '高响应度 / 兼容 Windows 98 标准浏览器';
    if (releaseEl) releaseEl.textContent = specs.releaseDate || '1998 / 2024';

    if (linkEl) {
      const isExternalLink = proj.detailsUrl && proj.detailsUrl.startsWith('http');
      let noLinkBadge = document.getElementById('proj-modal-no-link');
      if (isExternalLink) {
        linkEl.style.display = 'inline-flex';
        linkEl.href = proj.detailsUrl;
        linkEl.innerHTML = `<img src="./icons/rocket.svg" class="w-3.5 h-3.5 pixel-render inline mr-1" alt="" /> <span>${escapeHtml(proj.linkLabel || (profileData.currentLang === 'zh' ? '访问在线网站 ➔' : 'Open Live Site ➔'))}</span>`;
        if (noLinkBadge) noLinkBadge.style.display = 'none';
      } else {
        linkEl.style.display = 'none';
        if (!noLinkBadge) {
          noLinkBadge = document.createElement('span');
          noLinkBadge.id = 'proj-modal-no-link';
          noLinkBadge.className = 'win98-sunken px-2.5 py-1 text-[11px] text-gray-600 bg-gray-100 font-mono';
          linkEl.parentNode.insertBefore(noLinkBadge, linkEl);
        }
        noLinkBadge.style.display = 'inline-block';
        noLinkBadge.textContent = proj.linkStateNote || (profileData.currentLang === 'zh' ? '🔒 私有项目 / 暂无公开外链' : '🔒 Private Project / Unavailable');
      }
    }

    // Reset tabs to first
    modal.querySelectorAll('.win98-tab').forEach((t, idx) => {
      if (idx === 0) t.classList.add('active');
      else t.classList.remove('active');
    });
    modal.querySelectorAll('.win98-tab-panel').forEach((p, idx) => {
      if (idx === 0) p.classList.add('active');
      else p.classList.remove('active');
    });

    modal.classList.remove('hidden');
    audioEngine.playDing();
  }

  // Recycle Bin App Actions
  initRecycleBin() {
    const btnEmpty = document.getElementById('btn-empty-recycle');
    const btnRestore = document.getElementById('btn-restore-recycle');
    const itemsList = document.getElementById('recycle-items-list');
    const countEl = document.getElementById('recycle-item-count');

    if (btnEmpty) {
      btnEmpty.addEventListener('click', () => {
        if (itemsList) {
          itemsList.innerHTML = '<div class="text-gray-500 italic p-3 text-center">回收站为空。</div>';
        }
        if (countEl) countEl.textContent = profileData.currentLang === 'zh' ? '0 个废弃项目' : '0 items';
        audioEngine.playRecycle();
      });
    }

    if (btnRestore) {
      btnRestore.addEventListener('click', () => {
        if (itemsList) {
          itemsList.innerHTML = `
            <div class="recycle-file-row flex justify-between items-center p-1 hover:bg-blue-100 border-b border-gray-100">
              <span class="flex items-center"><img src="/icons/document.svg" class="w-3.5 h-3.5 pixel-render inline-block mr-1.5" alt="" />无聊且缺乏灵感的模板.zip</span>
              <span class="text-gray-400 text-[10px]">1.2 MB</span>
            </div>
            <div class="recycle-file-row flex justify-between items-center p-1 hover:bg-blue-100 border-b border-gray-100">
              <span class="flex items-center"><img src="/icons/document.svg" class="w-3.5 h-3.5 pixel-render inline-block mr-1.5" alt="" />fl_studio_未完成的trap编曲.flp</span>
              <span class="text-gray-400 text-[10px]">3.4 MB</span>
            </div>
            <div class="recycle-file-row flex justify-between items-center p-1 hover:bg-blue-100">
              <span class="flex items-center"><img src="/icons/document.svg" class="w-3.5 h-3.5 pixel-render inline-block mr-1.5" alt="" />未经过偏差控制的废弃问卷数据.csv</span>
              <span class="text-gray-400 text-[10px]">540 KB</span>
            </div>
          `;
        }
        if (countEl) countEl.textContent = profileData.currentLang === 'zh' ? '3 个废弃项目' : '3 items';
        audioEngine.playClick();
      });
    }
  }

  // Screensaver Engine
  initScreensaver() {
    this.screensaverCanvas = document.getElementById('screensaver-canvas');
    if (!this.screensaverCanvas) return;
    this.screensaverCtx = this.screensaverCanvas.getContext('2d');

    const previewBtn = document.getElementById('btn-screensaver-preview');
    const typeSelect = document.getElementById('screensaver-type-select');

    if (typeSelect) {
      typeSelect.addEventListener('change', (e) => {
        this.screensaverType = e.target.value;
      });
    }

    if (previewBtn) {
      previewBtn.addEventListener('click', () => {
        this.startScreensaver();
      });
    }

    // Dismiss screensaver on any movement or key
    const dismissHandler = () => {
      if (this.screensaverActive) {
        this.stopScreensaver();
      }
    };

    window.addEventListener('mousemove', dismissHandler);
    window.addEventListener('mousedown', dismissHandler);
    window.addEventListener('keydown', dismissHandler);
  }

  startScreensaver() {
    if (!this.screensaverCanvas) return;
    this.screensaverActive = true;
    this.screensaverCanvas.classList.remove('hidden');
    this.screensaverCanvas.width = window.innerWidth;
    this.screensaverCanvas.height = window.innerHeight;

    if (this.screensaverType === 'starfield') {
      this.runStarfieldSaver();
    } else {
      this.runFlyingWindowsSaver();
    }
  }

  stopScreensaver() {
    this.screensaverActive = false;
    if (this.screensaverAnimId) {
      cancelAnimationFrame(this.screensaverAnimId);
      this.screensaverAnimId = null;
    }
    if (this.screensaverCanvas) {
      this.screensaverCanvas.classList.add('hidden');
    }
  }

  runStarfieldSaver() {
    const numStars = 400;
    const stars = [];
    const w = this.screensaverCanvas.width;
    const h = this.screensaverCanvas.height;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: (Math.random() - 0.5) * w,
        y: (Math.random() - 0.5) * h,
        z: Math.random() * w
      });
    }

    const render = () => {
      if (!this.screensaverActive) return;

      this.screensaverCtx.fillStyle = '#000000';
      this.screensaverCtx.fillRect(0, 0, w, h);

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        star.z -= 6;
        if (star.z <= 0) {
          star.z = w;
          star.x = (Math.random() - 0.5) * w;
          star.y = (Math.random() - 0.5) * h;
        }

        const k = 250 / star.z;
        const px = star.x * k + w / 2;
        const py = star.y * k + h / 2;

        if (px >= 0 && px < w && py >= 0 && py < h) {
          const size = Math.max(1, (1 - star.z / w) * 3.5);
          const shade = Math.floor((1 - star.z / w) * 255);
          this.screensaverCtx.fillStyle = `rgb(${shade},${shade},${shade})`;
          this.screensaverCtx.fillRect(px, py, size, size);
        }
      }

      this.screensaverAnimId = requestAnimationFrame(render);
    };

    render();
  }

  runFlyingWindowsSaver() {
    const logos = [];
    const numLogos = 14;
    const w = this.screensaverCanvas.width;
    const h = this.screensaverCanvas.height;

    for (let i = 0; i < numLogos; i++) {
      logos.push({
        x: Math.random() * (w - 120),
        y: Math.random() * (h - 80),
        vx: (Math.random() - 0.5) * 4 || 2,
        vy: (Math.random() - 0.5) * 4 || 2,
        size: Math.floor(Math.random() * 24) + 24,
        hue: Math.floor(Math.random() * 360)
      });
    }

    const render = () => {
      if (!this.screensaverActive) return;

      this.screensaverCtx.fillStyle = '#000000';
      this.screensaverCtx.fillRect(0, 0, w, h);

      logos.forEach(logo => {
        logo.x += logo.vx;
        logo.y += logo.vy;

        if (logo.x <= 0 || logo.x + logo.size * 3 >= w) logo.vx *= -1;
        if (logo.y <= 0 || logo.y + logo.size * 1.5 >= h) logo.vy *= -1;

        // Draw 3D Windows 98 Box
        this.screensaverCtx.fillStyle = '#C0C0C0';
        this.screensaverCtx.fillRect(logo.x, logo.y, logo.size * 3, logo.size * 1.4);

        // Windows 4-color mini tiles
        const s = logo.size * 0.3;
        this.screensaverCtx.fillStyle = '#FF0000';
        this.screensaverCtx.fillRect(logo.x + 8, logo.y + 6, s, s);
        this.screensaverCtx.fillStyle = '#00FF00';
        this.screensaverCtx.fillRect(logo.x + 8 + s + 2, logo.y + 6, s, s);
        this.screensaverCtx.fillStyle = '#0000FF';
        this.screensaverCtx.fillRect(logo.x + 8, logo.y + 6 + s + 2, s, s);
        this.screensaverCtx.fillStyle = '#FFFF00';
        this.screensaverCtx.fillRect(logo.x + 8 + s + 2, logo.y + 6 + s + 2, s, s);

        // Text
        this.screensaverCtx.fillStyle = '#000080';
        this.screensaverCtx.font = `bold ${Math.floor(logo.size * 0.45)}px "Inter", sans-serif`;
        this.screensaverCtx.fillText('王寅喆 98', logo.x + logo.size * 0.9, logo.y + logo.size * 0.85);
      });

      this.screensaverAnimId = requestAnimationFrame(render);
    };

    render();
  }

  // Right-Click Context Menus
  initContextMenus() {
    const desktopArea = document.getElementById('desktop-area');
    const taskbar = document.getElementById('taskbar');
    const desktopContextMenu = document.getElementById('desktop-context-menu');
    const taskbarContextMenu = document.getElementById('taskbar-context-menu');

    // Desktop Context Menu
    if (desktopArea && desktopContextMenu) {
      desktopArea.addEventListener('contextmenu', (e) => {
        if (e.target === desktopArea || e.target.id === 'desktop-wallpaper') {
          e.preventDefault();
          this.closeAllContextMenus();

          desktopContextMenu.style.left = `${Math.min(e.clientX, window.innerWidth - 180)}px`;
          desktopContextMenu.style.top = `${Math.min(e.clientY, window.innerHeight - 200)}px`;
          desktopContextMenu.classList.remove('hidden');
          audioEngine.playClick();
        }
      });
    }

    // Taskbar Context Menu
    if (taskbar && taskbarContextMenu) {
      taskbar.addEventListener('contextmenu', (e) => {
        if (!e.target.closest('#start-button')) {
          e.preventDefault();
          this.closeAllContextMenus();

          taskbarContextMenu.style.left = `${Math.min(e.clientX, window.innerWidth - 180)}px`;
          taskbarContextMenu.style.bottom = '54px';
          taskbarContextMenu.style.top = 'auto';
          taskbarContextMenu.classList.remove('hidden');
          audioEngine.playClick();
        }
      });
    }

    // Close context menus on any left click
    document.addEventListener('click', () => {
      this.closeAllContextMenus();
    });

    // Desktop context items
    const btnCtxRefresh = document.getElementById('ctx-refresh');
    const btnCtxProperties = document.getElementById('ctx-properties');
    const btnCtxCascade = document.getElementById('ctx-cascade');
    const btnCtxMinimizeAll = document.getElementById('ctx-minimize-all');

    if (btnCtxRefresh) {
      btnCtxRefresh.addEventListener('click', () => {
        this.renderDynamicProfileContent();
        audioEngine.playClick();
      });
    }

    if (btnCtxProperties) {
      btnCtxProperties.addEventListener('click', () => {
        this.wm.openWindow('window-display');
      });
    }

    if (btnCtxCascade) {
      btnCtxCascade.addEventListener('click', () => {
        this.wm.cascadeWindows();
      });
    }

    if (btnCtxMinimizeAll) {
      btnCtxMinimizeAll.addEventListener('click', () => {
        this.wm.minimizeAllWindows();
      });
    }
  }

  closeAllContextMenus() {
    const menus = document.querySelectorAll('.win98-context-menu');
    menus.forEach(m => m.classList.add('hidden'));
  }

  // Display Properties (Control Panel) App
  initDisplayPropertiesApp() {
    const wallpaperRadios = document.querySelectorAll('input[name="display-wallpaper-opt"]');
    const crtIntensitySlider = document.getElementById('display-crt-intensity');
    const btnApply = document.getElementById('btn-display-apply');
    const btnOk = document.getElementById('btn-display-ok');
    const desktopArea = document.getElementById('desktop-area');
    const chkCrtRoll = document.getElementById('chk-crt-roll');

    const wallpapers = {
      default: "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/36f62ccf-95f7-452d-9fab-8de842236a62_1600w.png')",
      teal: "none",
      clouds: "url('https://framerusercontent.com/images/CY9nFVcElQuS0aRbAPoUP4Q5xU.jpeg')",
      matrix: "radial-gradient(circle, #001a00 0%, #000000 100%)"
    };

    if (btnApply || btnOk) {
      const applySettings = () => {
        let selectedWp = 'default';
        wallpaperRadios.forEach(r => {
          if (r.checked) selectedWp = r.value;
        });

        if (desktopArea) {
          desktopArea.style.backgroundImage = wallpapers[selectedWp] || wallpapers.default;
          if (selectedWp === 'teal') {
            desktopArea.style.backgroundColor = '#008080';
          }
        }

        if (crtIntensitySlider) {
          const val = parseFloat(crtIntensitySlider.value) / 100;
          const scanlines = document.querySelector('.crt-scanlines');
          if (scanlines) scanlines.style.opacity = (val * 0.45).toString();
        }

        if (chkCrtRoll) {
          const roll = document.querySelector('.crt-roll');
          if (roll) roll.style.display = chkCrtRoll.checked ? 'block' : 'none';
        }

        audioEngine.playDing();
      };

      if (btnApply) btnApply.addEventListener('click', applySettings);
      if (btnOk) {
        btnOk.addEventListener('click', () => {
          applySettings();
          this.wm.closeWindow('window-display');
        });
      }
    }
  }

  // Run Dialog (运行...)
  initRunDialog() {
    const runBtn = document.getElementById('start-item-run');
    const runModal = document.getElementById('run-modal');
    const runInput = document.getElementById('run-input');
    const btnRunOk = document.getElementById('btn-run-ok');
    const btnRunCancel = document.getElementById('btn-run-cancel');

    if (runBtn && runModal) {
      runBtn.addEventListener('click', () => {
        this.closeStartMenu();
        runModal.classList.remove('hidden');
        if (runInput) runInput.focus();
        audioEngine.playClick();
      });
    }

    if (btnRunOk) {
      btnRunOk.addEventListener('click', () => {
        const val = (runInput ? runInput.value.trim().toLowerCase() : '');
        runModal.classList.add('hidden');
        audioEngine.playClick();

        if (val.includes('paint') || val.includes('pbrush') || val.includes('画图')) {
          this.wm.openWindow('window-paint');
        } else if (val.includes('mine') || val.includes('game') || val.includes('扫雷')) {
          this.wm.openWindow('window-minesweeper');
        } else if (val.includes('note') || val.includes('txt') || val.includes('记事本')) {
          this.wm.openWindow('window-notepad');
        } else if (val.includes('cmd') || val.includes('dos') || val.includes('command')) {
          this.wm.openWindow('window-dos');
        } else if (val.includes('display') || val.includes('desk') || val.includes('显示')) {
          this.wm.openWindow('window-display');
        } else if (val.includes('music') || val.includes('cd')) {
          this.wm.openWindow('window-music');
        } else {
          this.wm.openWindow('window-portfolio');
        }
      });
    }

    if (btnRunCancel && runModal) {
      btnRunCancel.addEventListener('click', () => {
        runModal.classList.add('hidden');
      });
    }
  }

  // Explorer Toolbar (Back, Forward, Stop, Refresh, Home, Print)
  initExplorerToolbar() {
    const btnBack = document.getElementById('tb-back');
    const btnForward = document.getElementById('tb-forward');
    const btnRefresh = document.getElementById('tb-refresh');
    const btnHome = document.getElementById('tb-home');
    const btnPrint = document.getElementById('tb-print');

    if (btnBack) {
      btnBack.addEventListener('click', () => {
        audioEngine.playClick();
        document.getElementById('section-work').scrollIntoView();
      });
    }
    if (btnForward) {
      btnForward.addEventListener('click', () => {
        audioEngine.playClick();
        document.getElementById('section-skills').scrollIntoView();
      });
    }
    if (btnRefresh) {
      btnRefresh.addEventListener('click', () => {
        this.renderDynamicProfileContent();
        audioEngine.playClick();
      });
    }
    if (btnHome) {
      btnHome.addEventListener('click', () => {
        audioEngine.playClick();
        const mainContent = document.getElementById('window-portfolio').querySelector('.win98-scrollbar');
        if (mainContent) mainContent.scrollTop = 0;
      });
    }
    if (btnPrint) {
      btnPrint.addEventListener('click', () => {
        window.print();
      });
    }
  }

  // Language Switcher (中 / EN Toggle)
  initLanguageSwitcher() {
    const langBtn = document.getElementById('tray-lang-btn');
    const menuLangZh = document.getElementById('menu-lang-zh');
    const menuLangEn = document.getElementById('menu-lang-en');

    const toggleLanguage = () => {
      const newLang = profileData.currentLang === 'zh' ? 'en' : 'zh';
      this.switchLanguage(newLang);
    };

    if (langBtn) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLanguage();
      });
    }

    if (menuLangZh) {
      menuLangZh.addEventListener('click', () => this.switchLanguage('zh'));
    }
    if (menuLangEn) {
      menuLangEn.addEventListener('click', () => this.switchLanguage('en'));
    }
  }

  switchLanguage(lang) {
    if (profileData.setLang(lang)) {
      audioEngine.playClick();
      this.renderDynamicProfileContent();
      this.notepad.loadInitialContent();
      this.wm.renderTaskbar();
    }
  }

  // Project Category Filters
  initProjectFilters() {
    const filterBtns = document.querySelectorAll('.project-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('win98-pressed', 'bg-[#000080]', 'text-white');
          b.classList.add('win98-raised', 'text-black');
        });

        btn.classList.remove('win98-raised', 'text-black');
        btn.classList.add('win98-pressed', 'bg-[#000080]', 'text-white');

        this.currentProjectFilter = btn.getAttribute('data-filter') || 'all';
        this.renderProjects();
      });
    });
  }

  // Real-Time Clock
  initClock() {
    const clockEl = document.getElementById('taskbar-clock');
    const updateTime = () => {
      if (!clockEl) return;
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      clockEl.textContent = `${hours}:${minutes} ${ampm}`;
    };

    updateTime();
    setInterval(updateTime, 1000);
  }

  // Desktop Icons
  initDesktopIcons() {
    const icons = document.querySelectorAll('.desktop-icon');
    const desktopArea = document.getElementById('desktop-area');

    icons.forEach(icon => {
      const windowId = icon.getAttribute('data-opens');

      icon.addEventListener('click', (e) => {
        e.stopPropagation();
        icons.forEach(i => i.classList.remove('selected'));
        icon.classList.add('selected');
      });

      icon.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        if (windowId) {
          this.wm.openWindow(windowId);
        }
      });

      let lastTap = 0;
      icon.addEventListener('touchend', (e) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        if (tapLength < 400 && tapLength > 0) {
          e.preventDefault();
          if (windowId) {
            this.wm.openWindow(windowId);
          }
        }
        lastTap = currentTime;
      });
    });

    if (desktopArea) {
      desktopArea.addEventListener('click', (e) => {
        if (!e.target.closest('.desktop-icon') && !e.target.closest('.win98-window') && !e.target.closest('#start-menu')) {
          icons.forEach(i => i.classList.remove('selected'));
          this.closeStartMenu();
          this.closeVolumePopup();
        }
      });
    }

    const quickLaunchIcons = document.querySelectorAll('.quick-launch-icon');
    quickLaunchIcons.forEach(btn => {
      btn.addEventListener('click', () => {
        const winId = btn.getAttribute('data-opens');
        if (winId) {
          this.wm.openWindow(winId);
        }
      });
    });
  }

  // Start Menu
  initStartMenu() {
    const startBtn = document.getElementById('start-button');
    const startMenu = document.getElementById('start-menu');

    if (!startBtn || !startMenu) return;

    startBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !startMenu.classList.contains('hidden');
      if (isOpen) {
        this.closeStartMenu();
      } else {
        this.openStartMenu();
      }
    });

    const menuItems = startMenu.querySelectorAll('.start-menu-item');
    menuItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = item.getAttribute('data-action');
        const winId = item.getAttribute('data-opens');

        if (winId) {
          this.wm.openWindow(winId);
          this.closeStartMenu();
        } else if (action === 'shutdown') {
          this.closeStartMenu();
          this.triggerShutdown();
        } else if (action === 'toggle-crt') {
          this.toggleCRT();
          this.closeStartMenu();
        } else if (action === 'restart') {
          location.reload();
        }
      });
    });
  }

  openStartMenu() {
    const startBtn = document.getElementById('start-button');
    const startMenu = document.getElementById('start-menu');
    if (startBtn && startMenu) {
      startMenu.classList.remove('hidden');
      startBtn.classList.remove('win98-raised');
      startBtn.classList.add('win98-pressed');
    }
  }

  closeStartMenu() {
    const startBtn = document.getElementById('start-button');
    const startMenu = document.getElementById('start-menu');
    if (startBtn && startMenu) {
      startMenu.classList.add('hidden');
      startBtn.classList.add('win98-raised');
      startBtn.classList.remove('win98-pressed');
    }
  }

  triggerShutdown() {
    const confirmModal = document.getElementById('shutdown-modal');
    if (confirmModal) {
      confirmModal.classList.remove('hidden');
      confirmModal.style.zIndex = (this.wm.topZIndex + 10).toString();
      audioEngine.playDing();
    }
  }

  // System Tray & Volume Popup
  initSystemTray() {
    const volIcon = document.getElementById('tray-volume-icon');
    const volPopup = document.getElementById('volume-popup');
    const volSlider = document.getElementById('master-volume-slider');
    const crtToggleIcon = document.getElementById('tray-crt-icon');

    if (volIcon && volPopup) {
      volIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        volPopup.classList.toggle('hidden');
      });
    }

    if (volSlider) {
      volSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value) / 100;
        audioEngine.setVolume(val);
      });
    }

    if (crtToggleIcon) {
      crtToggleIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleCRT();
      });
    }

    const btnShutdownOk = document.getElementById('btn-shutdown-ok');
    const btnShutdownCancel = document.getElementById('btn-shutdown-cancel');
    const shutdownModal = document.getElementById('shutdown-modal');

    if (btnShutdownOk) {
      btnShutdownOk.addEventListener('click', () => {
        if (shutdownModal) shutdownModal.classList.add('hidden');
        document.getElementById('desktop').classList.add('hidden');
        document.getElementById('bios-screen').classList.remove('hidden');
        location.reload();
      });
    }

    if (btnShutdownCancel && shutdownModal) {
      btnShutdownCancel.addEventListener('click', () => {
        shutdownModal.classList.add('hidden');
      });
    }
  }

  closeVolumePopup() {
    const volPopup = document.getElementById('volume-popup');
    if (volPopup) volPopup.classList.add('hidden');
  }

  toggleCRT() {
    const jitter = document.querySelector('.crt-jitter');
    const scanlines = document.querySelector('.crt-scanlines');
    const roll = document.querySelector('.crt-roll');

    this.crtEnabled = !this.crtEnabled;
    const disp = this.crtEnabled ? 'block' : 'none';

    if (jitter) jitter.style.display = disp;
    if (scanlines) scanlines.style.display = disp;
    if (roll) roll.style.display = disp;
  }

  // FAQ Accordion
  initFAQAccordion() {
    const faqContainer = document.getElementById('faq-container');
    if (!faqContainer) return;

    faqContainer.addEventListener('click', (e) => {
      const header = e.target.closest('.faq-header');
      if (!header) return;

      const item = header.closest('.faq-item');
      if (!item) return;

      const content = item.querySelector('.faq-content');
      const icon = item.querySelector('.faq-toggle-icon');

      if (content) {
        const isOpen = !content.classList.contains('hidden');
        if (isOpen) {
          content.classList.add('hidden');
          if (icon) icon.textContent = '+';
          item.classList.remove('win98-sunken');
          item.classList.add('win98-raised');
        } else {
          content.classList.remove('hidden');
          if (icon) icon.textContent = '-';
          item.classList.remove('win98-raised');
          item.classList.add('win98-sunken');
        }
      }
    });
  }

  // Interactive Guestbook
  initGuestbook() {
    const form = document.getElementById('guestbook-form');
    const list = document.getElementById('guestbook-list');

    const defaultEntriesZh = [
      { name: "音乐极客99", message: "Carti 网站的动效与排版太帅了！沉浸感拉满。", time: "1998-08-14 11:42 AM" },
      { name: "EdTech_架构师", message: "非常期待 Kahoot 互动课堂编辑器的开发成果！", time: "1998-09-02 04:19 PM" },
      { name: "社科研究同行", message: "将 KSAO 框架用于 NBA 球员角色分析的研究视角很独到！", time: "1998-10-21 08:30 PM" }
    ];

    const getEntries = () => {
      const saved = localStorage.getItem(this.guestbookKey);
      if (saved) {
        try { return JSON.parse(saved); } catch (e) { return defaultEntriesZh; }
      }
      return defaultEntriesZh;
    };

    const renderEntries = () => {
      if (!list) return;
      const entries = getEntries();
      list.innerHTML = '';
      entries.forEach(entry => {
        const item = document.createElement('div');
        item.className = 'win98-sunken p-2.5 bg-white text-xs space-y-1';
        item.innerHTML = `
          <div class="flex justify-between items-center border-b border-gray-300 pb-1 font-bold text-[#000080]">
            <span class="flex items-center gap-1.5"><img src="/icons/document.svg" class="w-3.5 h-3.5 pixel-render inline shrink-0" alt="" /> <span>${escapeHtml(entry.name)}</span></span>
            <span class="text-gray-500 text-[10px] font-mono">${escapeHtml(entry.time)}</span>
          </div>
          <p class="text-gray-800 leading-relaxed font-inter">${escapeHtml(entry.message)}</p>
        `;
        list.appendChild(item);
      });
    };

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('guestbook-name');
        const msgInput = document.getElementById('guestbook-msg');

        if (!nameInput || !msgInput) return;
        const name = nameInput.value.trim() || (profileData.currentLang === 'zh' ? '匿名访客' : 'Anonymous Explorer');
        const msg = msgInput.value.trim();

        if (msg) {
          const entries = getEntries();
          const now = new Date();
          const timeStr = `1998-${(now.getMonth()+1).toString().padStart(2,'0')}-${now.getDate().toString().padStart(2,'0')} ${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}`;
          entries.unshift({ name, message: msg, time: timeStr });
          localStorage.setItem(this.guestbookKey, JSON.stringify(entries));
          msgInput.value = '';
          renderEntries();
          audioEngine.playDing();
        }
      });
    }

    renderEntries();
  }

  // Media Player UI
  initMediaPlayerUI() {
    const playBtn = document.getElementById('player-play-btn');
    const prevBtn = document.getElementById('player-prev-btn');
    const nextBtn = document.getElementById('player-next-btn');
    const stopBtn = document.getElementById('player-stop-btn');
    const playlistContainer = document.getElementById('player-playlist-items');
    const volSlider = document.getElementById('player-volume');

    if (playBtn) playBtn.addEventListener('click', () => audioEngine.toggleMusic());
    if (prevBtn) prevBtn.addEventListener('click', () => audioEngine.prevTrack());
    if (nextBtn) nextBtn.addEventListener('click', () => audioEngine.nextTrack());
    if (stopBtn) {
      stopBtn.addEventListener('click', () => {
        audioEngine.stopMusic();
      });
    }

    if (volSlider) {
      volSlider.addEventListener('input', (e) => {
        audioEngine.setVolume(parseFloat(e.target.value) / 100);
      });
    }

    if (playlistContainer) {
      playlistContainer.innerHTML = '';
      audioEngine.playlist.forEach((track, idx) => {
        const item = document.createElement('div');
        item.className = `playlist-item px-2 py-1 text-xs cursor-pointer select-none truncate flex items-center justify-between hover:bg-blue-100 ${
          idx === 0 ? 'bg-[#000080] text-white' : 'text-black'
        }`;
        item.innerHTML = `
          <span class="truncate font-mono flex items-center gap-1.5"><img src="/icons/cd.svg" class="w-3.5 h-3.5 pixel-render inline shrink-0" alt="" /> <span>${track.title}</span></span>
          <span class="text-[10px] opacity-75 font-mono ml-2">${audioEngine.formatTime(track.duration)}</span>
        `;
        item.addEventListener('click', () => {
          audioEngine.selectTrack(idx);
          if (!audioEngine.isPlaying) {
            audioEngine.playMusic();
          }
        });
        playlistContainer.appendChild(item);
      });
    }

    audioEngine.updatePlayerUI();
  }

  // Window Menu Bars
  initWindowMenuBars() {
    const menuButtons = document.querySelectorAll('.menu-bar-btn');
    menuButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dropdown = btn.parentElement.querySelector('.menu-dropdown');
        if (dropdown) {
          const isShown = !dropdown.classList.contains('hidden');
          document.querySelectorAll('.menu-dropdown').forEach(d => d.classList.add('hidden'));
          if (!isShown) {
            dropdown.classList.remove('hidden');
          }
        }
      });
    });

    document.addEventListener('click', () => {
      document.querySelectorAll('.menu-dropdown').forEach(d => d.classList.add('hidden'));
    });
  }

  // Desktop Drag Selection Box
  initDesktopSelectionMarquee() {
    const desktopArea = document.getElementById('desktop-area');
    if (!desktopArea) return;

    let startX = 0, startY = 0;
    let isSelecting = false;
    let marquee = null;

    desktopArea.addEventListener('mousedown', (e) => {
      if (e.target !== desktopArea && e.target.id !== 'desktop-wallpaper') return;

      isSelecting = true;
      startX = e.clientX;
      startY = e.clientY;

      marquee = document.createElement('div');
      marquee.className = 'selection-marquee';
      marquee.style.left = `${startX}px`;
      marquee.style.top = `${startY}px`;
      marquee.style.width = '0px';
      marquee.style.height = '0px';
      desktopArea.appendChild(marquee);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isSelecting || !marquee) return;

      const currentX = e.clientX;
      const currentY = e.clientY;

      const left = Math.min(startX, currentX);
      const top = Math.min(startY, currentY);
      const width = Math.abs(currentX - startX);
      const height = Math.abs(currentY - startY);

      marquee.style.left = `${left}px`;
      marquee.style.top = `${top}px`;
      marquee.style.width = `${width}px`;
      marquee.style.height = `${height}px`;

      const marqueeRect = { left, top, right: left + width, bottom: top + height };
      const icons = document.querySelectorAll('.desktop-icon');
      icons.forEach(icon => {
        const r = icon.getBoundingClientRect();
        const intersects = !(r.right < marqueeRect.left || 
                             r.left > marqueeRect.right || 
                             r.bottom < marqueeRect.top || 
                             r.top > marqueeRect.bottom);
        if (intersects) {
          icon.classList.add('selected');
        } else {
          icon.classList.remove('selected');
        }
      });
    });

    window.addEventListener('mouseup', () => {
      if (isSelecting) {
        isSelecting = false;
        if (marquee) {
          marquee.remove();
          marquee = null;
        }
      }
    });
  }
}

function setText(id, text) {
  if (!text) return;
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
