/**
 * Yinzhe “Tico” Wang - Retro '98 Portfolio Configuration
 * Dual-language support: Chinese (zh) & English (en)
 * Includes full project specifications for Project Properties Inspector dialog.
 */

export const profileData = {
  currentLang: 'zh', // Default language: Chinese

  zh: {
    personal: {
      name: "王寅喆 / Yinzhe “Tico” Wang",
      displayName: "王寅喆 (TICO WANG)",
      title: "创意开发者 / 数字设计者 / 学生研究者",
      subtitle: "用代码、设计、音乐与研究，把感兴趣的想法变成可以真正体验的数字作品。",
      status: "● 正在开发新项目 / 开放合作",
      avatar: "./tico_avatar.jpg",
      bio: [
        "我是王寅喆，也可以叫我 Tico。",
        "我是一名学生、创意开发者和数字设计者，主要关注技术、网页设计、音乐文化、产品体验和社会研究之间的交叉。",
        "我喜欢把一个想法真正做出来，而不只是停留在概念层面。我的项目包括实验性音乐网站、互动网页、教育科技平台、浏览器 3D 游戏以及社会科学研究。",
        "在网页项目中，我尤其关注视觉、交互、排版、动画与音乐氛围之间的关系。我希望网站不只是一个展示信息的容器，而是作品本身的一部分。",
        "除了设计和开发，我也对社会学、心理学、统计学、哲学以及体育分析感兴趣，并尝试把研究方法应用到不同领域。"
      ],
      registeredOwner: "王寅喆 (Yinzhe “Tico” Wang)",
      systemEdition: "Windows 98 中文第二版 (王寅喆定制版 - 4.10.2222 A)"
    },

    projects: [
      {
        id: "project-carti",
        number: "01",
        title: "Carti Website",
        category: "实验性网页 // 音乐交互",
        tags: ["音乐文化", "沉浸交互", "实验性网页", "视觉排版"],
        version: "已上线 1.0",
        accentColor: "text-red-400",
        description: "一个受到 Playboi Carti 音乐和视觉风格启发的实验性网站。项目通过图片、字体、动画、布局和交互，将传统的音乐人网站重新设计成一个更沉浸、更具视觉表达力的数字空间。",
        techStack: "HTML5 / CSS3 / JavaScript (ES6+) / GitHub Pages",
        detailsUrl: "https://wyz15857140708-lang.github.io/Carti-website/",
        linkLabel: "访问在线网站 ➔",
        icon: "./icons/cd.svg",
        type: "dev",
        specs: {
          releaseDate: "1998-08-20 / 2024",
          architecture: "客户端静态单页应用 (SPA)，结合低延迟 CSS 动画与 Web Audio API 音效流。",
          keyFeatures: [
            "暗黑哥特与先锋 Hip-Hop 视效，高度定制排版与栅格系统",
            "原生 JavaScript 驱动的高性能平滑滚动与动态微交互",
            "响应式设计，完美适配移动端与桌面端各类视口分辨率",
            "GitHub Pages 零延迟全球 CDN 部署与自动化集成"
          ],
          metrics: "首屏加载 < 800ms / 零第三方重型依赖 / 100% 原生体验"
        }
      },
      {
        id: "project-kahoot",
        number: "02",
        title: "Kahoot-Inspired 互动学习平台",
        category: "教育科技 // Web 应用",
        tags: ["教育科技", "产品设计", "UI/UX", "答题系统", "可视化编辑"],
        version: "开发中 (Alpha)",
        accentColor: "text-purple-400",
        description: "一个受到 Kahoot 启发的互动知识问答与课堂学习平台。项目在保留实时答题和课堂游戏体验的基础上，重新设计教师端的内容制作流程，让老师可以更加自由地创建题目、课程内容和互动活动。目前重点研究 PPT 式制作逻辑、模块化内容编辑和可视化制作系统。",
        techStack: "Web 开发 / 产品设计 / UI/UX / 课堂互动系统 / 模块化架构",
        detailsUrl: "https://github.com/wyz15857140708-lang",
        linkLabel: "查看开发仓库 ➔",
        icon: "./icons/book.svg",
        type: "dev",
        specs: {
          releaseDate: "2024-2025 (进行中)",
          architecture: "模块化拖拽式课件编辑引擎 + WebSocket 实时双向课堂答题通信机制。",
          keyFeatures: [
            "幻灯片式 (PPT-Like) 自由画布排版与题目卡片混排",
            "多种互动题型：单选、多选、连线、拼图与即时投票",
            "教师端极简制作工作流，大幅降低备课门槛",
            "实时学生答题数据聚合与可视化成绩分布图表"
          ],
          metrics: "支持 50+ 学生同时在线低延迟实时抢答与计分"
        }
      },
      {
        id: "project-trap",
        number: "03",
        title: "The Architecture of Trap",
        category: "创意编程 // 音乐文化",
        tags: ["创意编程", "互动网页", "Trap 文化", "FL Studio 编曲"],
        version: "实验原型",
        accentColor: "text-yellow-400",
        description: "一个以 Trap 音乐文化为主题的互动网页项目。项目通过字体、布局、动画和网页交互，将音乐文化转化成一种浏览器中的视觉体验，而不是传统文章或资料页面。",
        techStack: "HTML / CSS / JavaScript / Web Audio API / SVG 滤镜",
        detailsUrl: "https://github.com/wyz15857140708-lang",
        linkLabel: "实验项目详情 ➔",
        icon: "./icons/soundcard.svg",
        type: "dev",
        specs: {
          releaseDate: "1998-05-12 / 2024",
          architecture: "音频可视化节点驱动的 DOM 渲染管线，结合 808 鼓点节奏的重度交互。",
          keyFeatures: [
            "拆解 Trap 音乐核心元素：808 重低音、三连音 Hi-Hat、Roll 采样与氛围合成器",
            "交互式数字鼓机 (Drum Machine) 浏览器试听与节奏打击",
            "亚特兰大与南部 Trap 音乐视觉演变脉络互动时间轴"
          ],
          metrics: "音频采样率 44.1kHz / 实时 Web Audio 节拍同步"
        }
      },
      {
        id: "project-racing",
        number: "04",
        title: "开放世界赛车物理实验",
        category: "网页游戏 // 3D 物理",
        tags: ["Three.js", "Cannon-es", "WebGL", "3D 物理", "实时渲染"],
        version: "3D 物理引擎 v1.2",
        accentColor: "text-cyan-400",
        description: "一个运行在浏览器中的开放世界赛车实验项目，用于探索实时 3D 渲染、车辆物理系统和网页环境中的游戏交互。",
        techStack: "Three.js / Cannon-es / JavaScript / WebGL / Raycast 车辆动力学",
        detailsUrl: "https://github.com/wyz15857140708-lang",
        linkLabel: "查看物理实验 ➔",
        icon: "./icons/joystick.svg",
        type: "dev",
        specs: {
          releaseDate: "2024",
          architecture: "基于 Cannon-es 刚体物理引擎与 Three.js PBR 材质着色管线的 WebGL 游戏环境。",
          keyFeatures: [
            "四轮独立悬挂弹簧阻尼与轮胎地面摩擦力 Raycast 物理模拟",
            "动态光影与无缝地形碰撞网格生成",
            "支持键盘 / 游戏手柄 (Gamepad API) 线性油门与漂移操控"
          ],
          metrics: "标准 1080p 分辨率下稳定保持 60 FPS 流畅渲染"
        }
      },
      {
        id: "project-ksao",
        number: "05",
        title: "NBA 球员角色 KSAO 分析研究",
        category: "体育分析 // 组织心理学",
        tags: ["体育数据分析", "KSAO 框架", "工作分析", "实证研究"],
        version: "学术论文报告",
        accentColor: "text-orange-400",
        description: "一个将工业与组织心理学中的 Job Analysis 和 KSAO 框架应用到 NBA 球员角色分析中的研究项目。重点分析 3-and-D Wing 与 Primary Creator 两种角色，将比赛任务拆解为投篮效率、防守反应、掩护处理、视觉搜索、工作记忆等可测量指标。",
        techStack: "Job Analysis / KSAO 框架 / 体育数据分析 / 绩效指标 / 统计学",
        detailsUrl: "#",
        linkLabel: "查看研究报告 ➔",
        icon: "./icons/chart.svg",
        type: "research",
        specs: {
          releaseDate: "2024",
          architecture: "跨学科结合组织行为学工作分析 (Work Analysis) 与 NBA 高阶追踪数据 (Tracking Data)。",
          keyFeatures: [
            "将篮球场上的战术执行拆解为具体的知识 (K)、技能 (S)、能力 (A) 和其他特质 (O)",
            "3-and-D 侧翼：底角三分命中率期望、横移防守时延、关门防守 (Close-out) 反应时",
            "持球大核心 (Primary Creator)：P&R 挡拆阅读、弱侧视觉搜索广度、高压决策抗干扰度"
          ],
          metrics: "涵盖 NBA 2022-2024 赛季核心轮换球员数据样本"
        }
      },
      {
        id: "project-wulian",
        number: "06",
        title: "五联西苑城市与社会观察调研",
        category: "城市研究 // 社会学田野",
        tags: ["城市空间", "社会学", "实地观察", "田野调研", "纪实摄影"],
        version: "田野报告与文献",
        accentColor: "text-green-400",
        description: "一个围绕杭州五联西苑展开的城市与社会观察项目，通过实地观察、空间记录和影像资料研究城市空间中的居民行为、社区关系与空间变化。",
        techStack: "实地观察 / 纪实摄影 / 空间分析 / 访谈法 / 社会学研究",
        detailsUrl: "#",
        linkLabel: "浏览调研记录 ➔",
        icon: "./icons/camera.svg",
        type: "research",
        specs: {
          releaseDate: "2023-2024",
          architecture: "结合空间社会学 (Spatial Sociology) 与视觉人类学 (Visual Anthropology) 的混合质性研究。",
          keyFeatures: [
            "城中村与现代商业综合体过渡带的空间权力与边界记录",
            "流动人口日常生活轨迹与微型非正规经济生态分析",
            "超过 120 张高质量纪实胶片与空间结构图解档案"
          ],
          metrics: "历时 6 个月、累计 20+ 次实地深度走访与空间测量"
        }
      },
      {
        id: "project-lunch",
        number: "07",
        title: "学校午休制度实证调查研究",
        category: "教育研究 // 统计与抽样",
        tags: ["统计学", "问卷设计", "偏差控制", "Jamovi", "量化分析"],
        version: "量化统计专著",
        accentColor: "text-emerald-400",
        description: "一个研究学校课程表中是否应该设置正式午休时间的研究项目。收集至少 100 份来自三所不同学校的有效样本，并通过分层采样、匿名调查、重复回答筛查、Attention Check 和非回应控制减少偏差，使用 Jamovi 进行数据分析。",
        techStack: "问卷设计 / 分层抽样 / 统计学 (Statistics) / 偏差控制 / Jamovi 建模",
        detailsUrl: "#",
        linkLabel: "查看量化模型 ➔",
        icon: "./icons/chart.svg",
        type: "research",
        specs: {
          releaseDate: "2024",
          architecture: "严格遵循心理学量表设计标准的量化实证研究与推断统计模型。",
          keyFeatures: [
            "跨 3 所学校的严格分层比例抽样 (Stratified Sampling)",
            "多重质量过滤：注意力测试题 (Attention Check) + IP 查重 + 作答时延阈值",
            "使用 Jamovi 进行描述统计、独立样本 t 检验与多元线性回归分析"
          ],
          metrics: "N = 100+ 真实有效样本 / 信度 Cronbach's α > 0.85"
        }
      }
    ],

    skillsCategories: [
      {
        icon: "./icons/computer.svg",
        title: "创意开发 (Creative Development)",
        items: [
          "实验性网页开发 (Experimental Websites)",
          "互动网站与数字体验 (Interactive Experiences)",
          "创意编程 (Creative Coding)",
          "浏览器交互原型构建 (Browser Prototypes)",
          "数字体验全流程设计 (Digital Experience Design)"
        ]
      },
      {
        icon: "./icons/paint.svg",
        title: "UI / UX 与数字设计",
        items: [
          "网页视觉设计与设计系统 (Web Design Systems)",
          "交互设计与界面架构 (UI & Interaction Design)",
          "视觉层级与信息系统 (Visual Hierarchy)",
          "快速原型设计与验证 (Rapid Prototyping)",
          "动效与微交互设计 (Motion & Micro-interactions)"
        ]
      },
      {
        icon: "./icons/book.svg",
        title: "产品设计与教育科技",
        items: [
          "教育科技产品策划 (EdTech Products)",
          "互动学习与答题工具 (Interactive Learning Tools)",
          "功能架构与流程设计 (Feature Design)",
          "教师端编辑与制作系统 (Teacher Creation Systems)",
          "用户体验全链路设计 (Full UX Pipeline)"
        ]
      },
      {
        icon: "./icons/chart.svg",
        title: "社会研究与数据分析",
        items: [
          "社会科学实证研究 (Social Science Research)",
          "问卷设计与分层抽样 (Survey & Sampling Design)",
          "统计分析与建模 (Jamovi / Statistics)",
          "实地田野调研与空间记录 (Field Observation)",
          "偏差控制与数据清洗 (Bias Control)"
        ]
      },
      {
        icon: "./icons/cd.svg",
        title: "音乐与数字文化",
        items: [
          "Hip-Hop / Trap 青年文化研究",
          "音乐主题视觉与交互设计",
          "实验性数字媒体制作",
          "音乐人专属交互网站",
          "FL Studio 编曲与音乐制作"
        ]
      }
    ],

    techTools: [
      {
        category: "Web 开发技术栈",
        tools: ["HTML5", "CSS3", "JavaScript (ES6+)", "Three.js", "WebGL", "Cannon-es 物理引擎", "Tailwind CSS", "GitHub Pages"]
      },
      {
        category: "设计与交互原型",
        tools: ["UI 界面设计", "UX 体验设计", "交互设计", "创意编程 (Creative Coding)", "视觉设计", "快速原型制作"]
      },
      {
        category: "研究与统计分析",
        tools: ["统计学 (Statistics)", "问卷设计 (Survey Design)", "分层抽样 (Sampling)", "Jamovi 统计软件", "数据分析", "实地田野研究"]
      },
      {
        category: "创意生产与开发工具",
        tools: ["FL Studio 音乐编曲", "Git & GitHub", "Web Audio API", "Vite", "Markdown"]
      }
    ],

    interests: [
      "创意科技 (Creative Technology)",
      "实验性网页设计",
      "数字艺术 (Digital Art)",
      "Hip-Hop & Trap 文化",
      "音乐制作 (FL Studio)",
      "社会学 (Sociology)",
      "心理学 (Psychology)",
      "哲学 (Philosophy)",
      "统计学 (Statistics)",
      "体育数据分析 (Sports Analytics)",
      "篮球 (Basketball)",
      "产品设计 (Product Design)",
      "教育科技 (EdTech)"
    ],

    faqs: [
      {
        question: "你主要做什么？",
        answer: "我主要制作互动网站、实验性数字作品和产品原型。\n\n我的项目通常位于代码、视觉设计、音乐文化和研究之间。我尤其喜欢那些无法简单归类为“网站”或“设计稿”的项目，希望通过交互和视觉让用户真正体验一个想法。",
        isOpenDefault: true
      },
      {
        question: "你最感兴趣的领域是什么？",
        answer: "我目前最感兴趣的是 Creative Technology、实验性网页设计、Hip-Hop 与数字文化、教育科技以及社会研究。\n\n我也对心理学、哲学、统计学、篮球和体育分析保持长期兴趣。",
        isOpenDefault: false
      },
      {
        question: "你会做什么类型的合作？",
        answer: "我愿意参与实验性网站、Creative Coding、数字艺术、音乐视觉项目、互动产品、教育科技、研究项目以及其他具有明确创意方向的合作。\n\n如果一个项目同时涉及设计、代码、文化或研究，它通常会非常符合我的兴趣。",
        isOpenDefault: false
      }
    ],

    socials: [
      {
        name: "GitHub 个人主页",
        icon: "./icons/network.svg",
        handle: "@wyz15857140708-lang",
        url: "https://github.com/wyz15857140708-lang",
        badge: "开源活跃"
      },
      {
        name: "Carti Website (在线演示)",
        icon: "./icons/cd.svg",
        handle: "wyz15857140708-lang.github.io/Carti-website",
        url: "https://wyz15857140708-lang.github.io/Carti-website/",
        badge: "在线 DEMO"
      },
      {
        name: "个人主页网站",
        icon: "./icons/globe.svg",
        handle: "即将上线 (Coming Soon)",
        url: "#",
        badge: "敬请期待"
      },
      {
        name: "电子邮箱与合作",
        icon: "./icons/mail.svg",
        handle: "可通过 GitHub 取得联系",
        url: "https://github.com/wyz15857140708-lang",
        badge: "开放合作"
      },
      {
        name: "FL Studio 音乐工作室",
        icon: "./icons/soundcard.svg",
        handle: "Trap & Hip-Hop 音乐制作",
        url: "#",
        badge: "编曲音轨"
      }
    ],

    specs: {
      systemName: "王寅喆工作站 98 (TICO-STATION 98)",
      processor: "Intel Pentium II 450MHz (创意开发与学术研究版)",
      memory: "128.0 MB SDRAM (高带宽低延迟内存)",
      storage: "Quantum Fireball 8.4GB IDE (项目代码 / 调研数据 / 音乐工程)",
      sound: "Creative Sound Blaster AWE64 Gold (FL Studio 编曲硬加速)",
      graphics: "3dfx Voodoo3 3000 AGP 16MB (Three.js & WebGL 实时渲染)"
    },

    ui: {
      bootTitle: "AWARD MODULAR BIOS v4.51PG",
      bootSubtitle: "王寅喆定制工作站 // 创意开发与学术研究系统",
      bootPrompt: ">>> 按 [回车键 ENTER] 或点击此处登录 Windows 98 <<<",
      loginTitle: "欢迎使用 Windows 98",
      loginSubtitle: "登录到 王寅喆 (Tico Wang) 的个人电脑工作站",
      loginRole: "创意开发 • 数字设计 • 学术研究",
      loginUserLabel: "用户名(U):",
      loginPassLabel: "密码(P):",
      loginConfirmBtn: "确定",
      loginCancelBtn: "取消",
      loginHelpBtn: "帮助(H)",
      startBtn: "开始",
      desktopIconPortfolio: "王寅喆的作品集",
      desktopIconComputer: "我的电脑",
      desktopIconMusic: "CD 播放机",
      desktopIconSocial: "GitHub 与连接",
      desktopIconRecycle: "回收站",
      desktopIconPaint: "画图程序",
      desktopIconMinesweeper: "扫雷游戏",
      desktopIconNotepad: "记事本 (简历)",
      windowPortfolioTitle: "C:\\王寅喆\\作品集\\index.html - Microsoft 网页浏览器 5.0",
      menuFile: "文件(F)",
      menuEdit: "编辑(E)",
      menuView: "查看(V)",
      menuGo: "转到(G)",
      menuHelp: "帮助(H)",
      addressLabel: "地址(A):",
      tabAllProjects: "全部项目 (7)",
      tabDevProjects: "创意开发与 Web (4)",
      tabResearchProjects: "学术与社会研究 (3)",
      sectionWorkTitle: "精选项目经历目录 (C:\\王寅喆\\项目库\\*)",
      sectionSkillsTitle: "技能与专业领域模块 (5 大核心领域)",
      sectionInterestsTitle: "跨学科兴趣与探索",
      sectionFaqTitle: "常见问题解答 (FAQ.TXT)",
      sectionGuestbookTitle: "访客留言簿 (GUESTBK.DB)",
      guestbookPrompt: "给王寅喆 (Tico) 留言：",
      guestbookNameLabel: "您的姓名 / 昵称：",
      guestbookMsgLabel: "留言内容：",
      guestbookNamePlaceholder: "例如: 极客99 / 访客",
      guestbookMsgPlaceholder: "写下您的留言、反馈或合作意向...",
      guestbookSubmitBtn: "发送留言",
      guestbookRecent: "最新留言记录：",
      statusBarDone: "就绪",
      statusBarObjects: "已载入 7 个项目",
      statusBarZone: "本地 Internet 区域",
      mediaPlayerTitle: "Windows 98 CD 播放机 - DirectAudio",
      systemPropertiesTitle: "系统属性 - 王寅喆专用机",
      socialTitle: "网络连接 - GitHub 与联系方式",
      recycleBinTitle: "回收站",
      langSwitchLabel: "中 / EN",
      startMenuPortfolio: "王寅喆的作品集",
      startMenuMusic: "CD 播放机",
      startMenuComputer: "我的电脑 (系统属性)",
      startMenuSocial: "GitHub 与网络连接",
      startMenuPaint: "画图 (Paint)",
      startMenuNotepad: "记事本 (Notepad)",
      startMenuMinesweeper: "经典扫雷 (Minesweeper)",
      startMenuDos: "MS-DOS 提示符",
      startMenuDisplay: "显示属性 (控制面板)",
      startMenuToggleCrt: "切换 CRT 显像管效果",
      startMenuRestart: "重启工作站",
      startMenuShutdown: "关闭计算机..."
    }
  },

  en: {
    personal: {
      name: "Yinzhe “Tico” Wang",
      displayName: "TICO WANG",
      title: "CREATIVE DEVELOPER // DIGITAL DESIGNER // STUDENT RESEARCHER",
      subtitle: "Turning ideas I care about into digital experiences through code, design, music, and research.",
      status: "● Currently building new projects / Open to collaborations",
      avatar: "./tico_avatar.jpg",
      bio: [
        "I’m Yinzhe Wang, or Tico. I’m a student, creative developer, and digital designer interested in the intersection of technology, web design, music culture, product experiences, and social research.",
        "I enjoy turning ideas into things people can actually interact with rather than leaving them as concepts. My projects range from experimental music websites and interactive web experiences to education technology platforms, browser-based 3D games, and social science research.",
        "In web projects, I’m especially interested in the relationship between visuals, interaction, typography, motion, and music. I want a website to feel like part of the work itself rather than simply a container for information.",
        "Outside of design and development, I’m also interested in sociology, psychology, statistics, philosophy, and sports analytics, and I often explore how research methods can be applied across different fields."
      ],
      registeredOwner: "Yinzhe “Tico” Wang",
      systemEdition: "Windows 98 Second Edition (Tico Edition - 4.10.2222 A)"
    },

    projects: [
      {
        id: "project-carti",
        number: "01",
        title: "Carti Website",
        category: "EXPERIMENTAL WEB // MUSIC",
        tags: ["Music", "Interactive Experience", "Experimental Web", "Typography"],
        version: "LIVE 1.0",
        accentColor: "text-red-400",
        description: "An experimental website inspired by Playboi Carti’s music and visual identity. Explores how imagery, typography, motion, layout, and interaction transform a traditional artist site into an immersive, expressive digital environment.",
        techStack: "HTML5 / CSS3 / JavaScript (ES6+) / GitHub Pages",
        detailsUrl: "https://wyz15857140708-lang.github.io/Carti-website/",
        linkLabel: "Open Live Site ➔",
        icon: "./icons/cd.svg",
        type: "dev",
        specs: {
          releaseDate: "1998-08-20 / 2024",
          architecture: "Single Page Application (SPA) with low-latency CSS animations and Web Audio API SFX stream.",
          keyFeatures: [
            "Avant-garde gothic and Hip-Hop aesthetics with custom typography grid",
            "Vanilla JavaScript smooth scrolling with dynamic micro-interactions",
            "Responsive layout supporting multiple viewport form factors",
            "Zero-latency global CDN deployment via GitHub Pages"
          ],
          metrics: "First Paint < 800ms / 0 Heavy Dependencies / 100% Vanilla Performance"
        }
      },
      {
        id: "project-kahoot",
        number: "02",
        title: "Kahoot-Inspired Learning Platform",
        category: "EDTECH // WEB APP",
        tags: ["EdTech", "Product Design", "UI/UX", "Quiz System", "Visual Editing"],
        version: "WIP (Alpha)",
        accentColor: "text-purple-400",
        description: "An interactive classroom learning and quiz platform inspired by Kahoot. Keeps the fast-paced live quiz experience while redesigning the teacher-side workflow for presentation-style editing and modular visual authoring.",
        techStack: "Web Dev / Product Design / UI/UX / Classroom Interaction / Modular Architecture",
        detailsUrl: "https://github.com/wyz15857140708-lang",
        linkLabel: "View Repository ➔",
        icon: "./icons/book.svg",
        type: "dev",
        specs: {
          releaseDate: "2024-2025 (In Progress)",
          architecture: "Modular drag-and-drop authoring canvas + WebSocket real-time dual-way live quiz protocol.",
          keyFeatures: [
            "Slide-based (PPT-like) canvas layout with mixed question cards",
            "Interactive question types: Multiple choice, matching, puzzle, polls",
            "Streamlined workflow reducing lesson preparation overhead",
            "Real-time student response aggregation and grade distribution charts"
          ],
          metrics: "Supports 50+ concurrent student sessions with low-latency scoring"
        }
      },
      {
        id: "project-trap",
        number: "03",
        title: "The Architecture of Trap",
        category: "CREATIVE CODING // MUSIC",
        tags: ["Creative Coding", "Interactive Web", "Music Culture", "FL Studio"],
        version: "EXP Prototype",
        accentColor: "text-yellow-400",
        description: "An interactive web project exploring trap music and its visual culture. Uses typography, layout, motion, and interaction to turn music culture into an expressive browser-based visual experience.",
        techStack: "HTML / CSS / JavaScript / Web Audio API / SVG Filters",
        detailsUrl: "https://github.com/wyz15857140708-lang",
        linkLabel: "View Experiment ➔",
        icon: "./icons/soundcard.svg",
        type: "dev",
        specs: {
          releaseDate: "1998-05-12 / 2024",
          architecture: "Audio-visual node pipeline driving real-time DOM styling synchronized with 808 beats.",
          keyFeatures: [
            "Deconstructing Trap pillars: Sub-bass 808, rolling hi-hats, vocal chops, and ambient synths",
            "Interactive digital drum machine for in-browser sequencing",
            "Visual archive of Southern Trap culture evolution"
          ],
          metrics: "44.1kHz audio sampling / Sub-millisecond Web Audio sync"
        }
      },
      {
        id: "project-racing",
        number: "04",
        title: "Open-World Racing Experiment",
        category: "WEB GAME // 3D PHYSICS",
        tags: ["Three.js", "Cannon-es", "WebGL", "3D Physics", "Real-Time 3D"],
        version: "Physics v1.2",
        accentColor: "text-cyan-400",
        description: "A browser-based open-world driving experiment exploring real-time 3D graphics, vehicle physics, collision simulation, and interactive environments on the web.",
        techStack: "Three.js / Cannon-es / JavaScript / WebGL / Raycast Dynamics",
        detailsUrl: "https://github.com/wyz15857140708-lang",
        linkLabel: "View 3D Demo ➔",
        icon: "./icons/joystick.svg",
        type: "dev",
        specs: {
          releaseDate: "2024",
          architecture: "Cannon-es rigid body physics combined with Three.js PBR shader rendering pipeline.",
          keyFeatures: [
            "4-wheel independent spring damping and tire friction simulation",
            "Dynamic lighting and procedural terrain mesh collision",
            "Gamepad API support with analog throttle and drift steering"
          ],
          metrics: "Rock-solid 60 FPS under full 1080p WebGL canvas"
        }
      },
      {
        id: "project-ksao",
        number: "05",
        title: "NBA Player Role KSAO Analysis",
        category: "SPORTS ANALYTICS // I-O PSYCHOLOGY",
        tags: ["Sports Analytics", "KSAO Framework", "Job Analysis", "Empirical Research"],
        version: "Research Paper",
        accentColor: "text-orange-400",
        description: "Applying Job Analysis and KSAO framework to NBA roles (3-and-D Wing & Primary Creator). Basketball tasks translated into measurable metrics: shooting, defensive reactions, screen navigation, visual search, and working memory.",
        techStack: "Job Analysis / KSAO Framework / Sports Analytics / Metrics / Statistics",
        detailsUrl: "#",
        linkLabel: "Read Paper ➔",
        icon: "./icons/chart.svg",
        type: "research",
        specs: {
          releaseDate: "2024",
          architecture: "Interdisciplinary framework bridging Industrial-Organizational Psychology and NBA tracking data.",
          keyFeatures: [
            "Deconstructing tactical execution into Knowledge, Skills, Abilities, and Other traits",
            "3-and-D Wing: Corner-3 shot efficiency, defensive slide latency, close-out reaction time",
            "Primary Creator: Pick-and-roll read complexity, peripheral visual search, high-pressure decision accuracy"
          ],
          metrics: "Covers 2022-2024 NBA full regular season player tracking data"
        }
      },
      {
        id: "project-wulian",
        number: "06",
        title: "Wulian Xiyuan Field Study",
        category: "URBAN RESEARCH // SOCIOLOGY",
        tags: ["Urban Research", "Sociology", "Field Study", "Photography"],
        version: "Field Report",
        accentColor: "text-green-400",
        description: "An urban and social research project based in Wulian Xiyuan, Hangzhou. Uses field observation, spatial documentation, and visual records to examine everyday behavior, community relationships, and changes in urban space.",
        techStack: "Field Observation / Documentary Photography / Spatial Analysis / Sociology",
        detailsUrl: "#",
        linkLabel: "View Archive ➔",
        icon: "./icons/camera.svg",
        type: "research",
        specs: {
          releaseDate: "2023-2024",
          architecture: "Mixed qualitative methodology integrating Spatial Sociology and Visual Anthropology.",
          keyFeatures: [
            "Documentation of spatial power and boundary transitions in urban villages",
            "Tracking daily migratory paths and informal micro-economic ecosystems",
            "120+ archival documentary photographs and architectural diagrams"
          ],
          metrics: "6-month longitudinal study with 20+ on-site fieldwork visits"
        }
      },
      {
        id: "project-lunch",
        number: "07",
        title: "School Lunch Break Research",
        category: "EDUCATION RESEARCH // STATISTICS",
        tags: ["Statistics", "Survey Design", "Bias Control", "Jamovi", "Quantitative"],
        version: "Statistical Paper",
        accentColor: "text-emerald-400",
        description: "Investigating whether schools should include a formal lunch-break period. Collected 100+ valid student responses across three schools with stratified sampling, duplicate screening, attention checks, and Jamovi statistical analysis.",
        techStack: "Survey Design / Stratified Sampling / Statistics / Bias Control / Jamovi",
        detailsUrl: "#",
        linkLabel: "View Data Model ➔",
        icon: "./icons/chart.svg",
        type: "research",
        specs: {
          releaseDate: "2024",
          architecture: "Rigorous empirical quantitative design adhering to psychometric standards and statistical inference.",
          keyFeatures: [
            "Proportional stratified sampling across 3 independent schools",
            "Quality gates: Attention check questions, IP deduplication, latency thresholds",
            "Descriptive statistics, independent t-tests, and multiple linear regression in Jamovi"
          ],
          metrics: "N = 100+ verified responses / Cronbach's α > 0.85 reliability"
        }
      }
    ],

    skillsCategories: [
      {
        icon: "./icons/computer.svg",
        title: "Creative Development",
        items: [
          "Experimental Websites",
          "Interactive Web Experiences",
          "Creative Coding",
          "Browser-Based Prototypes",
          "Digital Experience Design"
        ]
      },
      {
        icon: "./icons/paint.svg",
        title: "UI / UX & Digital Design",
        items: [
          "Web Design & Systems",
          "Interaction & Interface Design",
          "Visual Systems & Hierarchy",
          "Rapid Prototyping",
          "Motion & Micro-interactions"
        ]
      },
      {
        icon: "./icons/book.svg",
        title: "Product Design & EdTech",
        items: [
          "Education Technology",
          "Interactive Learning Tools",
          "Feature & Flow Design",
          "Teacher Creation Systems",
          "User Experience Design"
        ]
      },
      {
        icon: "./icons/chart.svg",
        title: "Research & Data Analysis",
        items: [
          "Social Science Research",
          "Survey & Sampling Design",
          "Statistical Analysis (Jamovi)",
          "Field & Urban Research",
          "Bias Control & Metrics"
        ]
      },
      {
        icon: "./icons/cd.svg",
        title: "Music & Digital Culture",
        items: [
          "Hip-Hop / Trap Culture",
          "Music-Focused Visual Design",
          "Experimental Digital Media",
          "Artist Web Experiences",
          "Music Production with FL Studio"
        ]
      }
    ],

    techTools: [
      {
        category: "Web Development",
        tools: ["HTML5", "CSS3", "JavaScript (ES6+)", "Three.js", "WebGL", "Cannon-es", "Tailwind CSS", "GitHub Pages"]
      },
      {
        category: "Design & Prototyping",
        tools: ["UI/UX Design", "Interaction Design", "Creative Coding", "Visual Design", "Rapid Prototyping"]
      },
      {
        category: "Research & Statistics",
        tools: ["Statistics", "Survey Design", "Sampling Methods", "Jamovi", "Data Analysis", "Field Research"]
      },
      {
        category: "Creative Production",
        tools: ["FL Studio", "Git & GitHub", "Web Audio API", "Vite", "Markdown"]
      }
    ],

    interests: [
      "Creative Technology",
      "Experimental Web Design",
      "Digital Art",
      "Hip-Hop & Trap Culture",
      "Music Production",
      "Sociology",
      "Psychology",
      "Philosophy",
      "Statistics",
      "Sports Analytics",
      "Basketball",
      "Product Design",
      "Education Technology"
    ],

    faqs: [
      {
        question: "What do you make?",
        answer: "I mainly build interactive websites, experimental digital experiences, and product prototypes.\n\nMy projects often sit somewhere between coding, visual design, music culture, and research. I’m especially interested in projects that are difficult to define simply as a “website” or a “design,” where interaction and visuals become part of how the idea is experienced.",
        isOpenDefault: true
      },
      {
        question: "What are you interested in?",
        answer: "I’m currently most interested in creative technology, experimental web design, hip-hop and digital culture, education technology, and social research.\n\nI also have long-term interests in psychology, philosophy, statistics, basketball, and sports analytics.",
        isOpenDefault: false
      },
      {
        question: "What kind of collaborations are you open to?",
        answer: "I’m open to experimental websites, creative coding, digital art, music-related visual projects, interactive products, education technology, research projects, and other collaborations with a clear creative direction.\n\nProjects that combine design, code, culture, or research are especially aligned with my interests.",
        isOpenDefault: false
      }
    ],

    socials: [
      {
        name: "GitHub Profile",
        icon: "./icons/network.svg",
        handle: "@wyz15857140708-lang",
        url: "https://github.com/wyz15857140708-lang",
        badge: "ACTIVE"
      },
      {
        name: "Carti Website (Live Demo)",
        icon: "./icons/cd.svg",
        handle: "wyz15857140708-lang.github.io/Carti-website",
        url: "https://wyz15857140708-lang.github.io/Carti-website/",
        badge: "LIVE DEMO"
      },
      {
        name: "Personal Website",
        icon: "./icons/globe.svg",
        handle: "Coming Soon",
        url: "#",
        badge: "SOON"
      },
      {
        name: "Email & Inquiries",
        icon: "./icons/mail.svg",
        handle: "Available via GitHub",
        url: "https://github.com/wyz15857140708-lang",
        badge: "OPEN"
      },
      {
        name: "FL Studio / Music Lab",
        icon: "./icons/soundcard.svg",
        handle: "Trap & Hip-Hop Production",
        url: "#",
        badge: "AUDIO"
      }
    ],

    specs: {
      systemName: "TICO-STATION 98",
      processor: "Intel Pentium II 450MHz (Creative Dev & Research Edition)",
      memory: "128.0 MB SDRAM (PC100)",
      storage: "Quantum Fireball CR 8.4GB IDE (Projects / Research / Samples)",
      sound: "Creative Sound Blaster AWE64 Gold (FL Studio Synth Ready)",
      graphics: "3dfx Voodoo3 3000 AGP 16MB (Three.js & WebGL Accelerated)"
    },

    ui: {
      bootTitle: "AWARD MODULAR BIOS v4.51PG",
      bootSubtitle: "TICO-STATION 98 // Creative Dev & Research Workstation",
      bootPrompt: ">>> PRESS [ENTER] OR CLICK HERE TO LOG ON <<<",
      loginTitle: "Welcome to Windows 98",
      loginSubtitle: "Log on to Yinzhe “Tico” Wang's Desktop Workstation",
      loginRole: "Creative Dev • Digital Design • Research",
      loginUserLabel: "User name:",
      loginPassLabel: "Password:",
      loginConfirmBtn: "Confirm",
      loginCancelBtn: "Cancel",
      loginHelpBtn: "Help",
      startBtn: "Start",
      desktopIconPortfolio: "Tico's Portfolio",
      desktopIconComputer: "My Computer",
      desktopIconMusic: "CD Player",
      desktopIconSocial: "GitHub & Links",
      desktopIconRecycle: "Recycle Bin",
      desktopIconPaint: "MS Paint",
      desktopIconMinesweeper: "Minesweeper",
      desktopIconNotepad: "Notepad (Resume)",
      windowPortfolioTitle: "C:\\Tico\\Portfolio\\index.html - Microsoft Internet Explorer 5.0",
      menuFile: "File",
      menuEdit: "Edit",
      menuView: "View",
      menuGo: "Go",
      menuHelp: "Help",
      addressLabel: "Address:",
      tabAllProjects: "All Projects (7)",
      tabDevProjects: "Creative Dev & Web (4)",
      tabResearchProjects: "Research Projects (3)",
      sectionWorkTitle: "DIRECTORY OF SELECTED PROJECTS (C:\\Tico\\Projects\\*)",
      sectionSkillsTitle: "SKILLS & EXPERTISE MODULES",
      sectionInterestsTitle: "INTERESTS & MULTIDISCIPLINARY PASSIONS",
      sectionFaqTitle: "FREQUENTLY ASKED QUESTIONS (FAQ.TXT)",
      sectionGuestbookTitle: "TICO'S GUESTBOOK (GUESTBK.DB)",
      guestbookPrompt: "Leave a message for Tico:",
      guestbookNameLabel: "Your Name / Handle:",
      guestbookMsgLabel: "Message:",
      guestbookNamePlaceholder: "e.g. Visitor99",
      guestbookMsgPlaceholder: "Write your message, feedback, or inquiry...",
      guestbookSubmitBtn: "Post Message",
      guestbookRecent: "Recent Signatures:",
      statusBarDone: "Done",
      statusBarObjects: "7 projects loaded",
      statusBarZone: "Local intranet",
      mediaPlayerTitle: "Windows 98 Media Player - DirectAudio",
      systemPropertiesTitle: "System Properties - Tico Edition",
      socialTitle: "Network Connections - GitHub & Links",
      recycleBinTitle: "Recycle Bin",
      langSwitchLabel: "中 / EN",
      startMenuPortfolio: "Tico's Portfolio",
      startMenuMusic: "CD Media Player",
      startMenuComputer: "System Properties",
      startMenuSocial: "GitHub & Network Links",
      startMenuPaint: "Paint (MS Paint)",
      startMenuNotepad: "Notepad (Resume)",
      startMenuMinesweeper: "Minesweeper",
      startMenuDos: "MS-DOS Prompt",
      startMenuDisplay: "Display Properties",
      startMenuToggleCrt: "Toggle CRT Mode",
      startMenuRestart: "Reboot Workstation",
      startMenuShutdown: "Shut Down..."
    }
  },

  // Helper to get active language dataset
  getData() {
    return this[this.currentLang] || this.zh;
  },

  setLang(lang) {
    if (lang === 'zh' || lang === 'en') {
      this.currentLang = lang;
      return true;
    }
    return false;
  }
};
