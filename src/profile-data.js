/**
 * Tico - Retro '98 Portfolio Configuration
 * Dual-language support: Chinese (zh) & English (en)
 * Natural, authentic engineering specs & research notes for Project Properties Inspector dialog.
 */

export const profileData = {
  currentLang: 'zh', // Default language: Chinese

  zh: {
    personal: {
      name: "王寅喆 / Tico Wang",
      displayName: "王寅喆 (Tico)",
      title: "学生 / 网页 / 设计 / 研究",
      subtitle: "我平时会做网页、音乐相关的数字项目，也会做一些社会科学研究。",
      status: "● 正在开发新项目 / 开放合作",
      avatar: "./tico_avatar.jpg",
      bio: [
        "我平时会做网页、音乐相关的数字项目，也会做一些社会科学研究。",
        "比起只停留在设计稿，我更喜欢把想法真正做成别人可以操作和体验的东西。"
      ],
      registeredOwner: "王寅喆 (Tico)",
      systemEdition: "Windows 98 中文第二版 (4.10.2222 A)"
    },

    projects: [
      {
        id: "project-carti",
        number: "01",
        title: "Carti Website",
        status: "live",
        statusLabel: "已上线 (Live)",
        category: "实验性网页 // 音乐交互",
        shortSummary: "一个受到 Playboi Carti 音乐和视觉风格启发的实验性网站。",
        actionLabel: "访问网站 ➔",
        tags: ["音乐视觉", "网页设计", "原生 JavaScript", "排版实验"],
        version: "已上线 1.0",
        accentColor: "text-red-400",
        description: "一个受到 Playboi Carti 音乐和视觉风格启发的实验性网站。因为大部分音乐人网站排版都比较规整和保守，我想尝试用超大字体、破坏感图像、突兀的转场和音频交互，让网页界面本身更贴合 Carti 音乐给人的感觉。",
        techStack: "HTML / CSS / 原生 JavaScript / Web Audio API / GitHub Pages",
        detailsUrl: "https://wyz15857140708-lang.github.io/Carti-website/",
        linkLabel: "访问网站 ➔",
        linkStateNote: null,
        icon: "./icons/cd.svg",
        type: "dev",
        specs: {
          releaseDate: "2024",
          architecture: "HTML / CSS / JavaScript 制作的静态网站，使用 Web Audio API 加入交互音效。",
          keyFeatures: [
            "视觉主要参考 Carti 的哥特、极简和 Hip-Hop 美术风格，重新设计了字体排版与布局",
            "用原生 JavaScript 实现页面平滑滚动与动态微交互",
            "支持桌面端和手机浏览器正常浏览",
            "通过 GitHub Pages 进行静态托管与部署"
          ],
          metrics: "已部署上线 / 无第三方重型框架依赖"
        }
      },
      {
        id: "project-kahoot",
        number: "02",
        title: "Kahoot-Inspired 互动学习平台",
        status: "in-progress",
        statusLabel: "开发中 (In Progress)",
        category: "教育科技 // 网页工具",
        shortSummary: "针对课堂大班教学痛点设计的互动答题与即时反馈系统原型。",
        actionLabel: "查看项目 ➔",
        tags: ["教育科技", "产品设计", "交互原型", "课堂互动", "题目编辑"],
        version: "开发中 (Alpha)",
        accentColor: "text-purple-400",
        description: "一个受 Kahoot 启发的课堂互动答题与内容制作工具。在保留课堂快速答题游戏感的同时，重点尝试优化老师制作课件和题目的流程，探索类似 PPT 幻灯片的自由排版与模块化编辑方式。",
        techStack: "Web 开发 / 界面设计 / 交互原型 / WebSocket 方案",
        detailsUrl: null,
        linkLabel: null,
        linkStateNote: "🚧 原型开发中 / 暂无外链",
        icon: "./icons/book.svg",
        type: "dev",
        specs: {
          releaseDate: "2024-2025 (进行中)",
          architecture: "正在尝试用拖拽式编辑器制作课堂内容，并计划使用 WebSocket 处理实时答题通信。",
          keyFeatures: [
            "支持类似幻灯片 (PPT) 的自由画布与题目卡片混排设计",
            "规划多种互动题型：单选、多选、连线、即时投票",
            "重点优化老师创建题目和课堂内容的步骤",
            "实时显示学生答题结果和成绩分布"
          ],
          metrics: "核心功能原型阶段 / 目标支持多人同时在线答题"
        }
      },
      {
        id: "project-trap",
        number: "03",
        title: "The Architecture of Trap",
        status: "prototype",
        statusLabel: "交互原型 (Prototype)",
        category: "创意编程 // 音乐文化",
        shortSummary: "拆解 Trap 音乐中 808 鼓点、Hi-Hat 滚奏与三连音节奏结构的交互式网页。",
        actionLabel: "查看项目 ➔",
        tags: ["音乐文化", "网页互动", "Trap 视觉", "FL Studio"],
        version: "实验原型",
        accentColor: "text-yellow-400",
        description: "一个关于 Trap 音乐文化的互动网页项目。用网页交互、动画和声音，把 Trap 音乐中的典型元素（如 808 鼓点、Hi-Hat 滚奏、视觉风格）做成可以在浏览器里操作和试听的体验。",
        techStack: "HTML / CSS / JavaScript / Web Audio API",
        detailsUrl: null,
        linkLabel: null,
        linkStateNote: "🧪 实验原型 / 内部测试",
        icon: "./icons/soundcard.svg",
        type: "dev",
        specs: {
          releaseDate: "2024",
          architecture: "用 JavaScript、动画和音频交互，把 Trap 音乐中的一些元素做成可以操作的网页。",
          keyFeatures: [
            "拆解 Trap 音乐常见元素：808 重低音、三连音 Hi-Hat、采样切片与合成器音色",
            "提供一个可在浏览器里试听节奏的小型简易数字鼓机界面",
            "整理了一个介绍 Atlanta 和 Southern Trap 视觉风格变化的互动时间轴"
          ],
          metrics: "网页音频交互实验 / 基于 Web Audio API 实现"
        }
      },
      {
        id: "project-ksao",
        number: "04",
        title: "NBA 球员角色 KSAO 分析研究",
        status: "research",
        statusLabel: "学术研究 (Research)",
        category: "体育分析 // 组织心理学",
        shortSummary: "借鉴工业与组织心理学 KSAO 框架与比赛高阶数据，建立 NBA 球员角色胜任力模型。",
        actionLabel: "查看研究 ➔",
        tags: ["体育分析", "KSAO 框架", "工作分析", "实证研究"],
        version: "研究报告",
        accentColor: "text-orange-400",
        description: "将工业与组织心理学（I-O Psychology）中的工作分析（Job Analysis）与 KSAO 框架应用到 NBA 球员角色评估中。重点对比 3-and-D 侧翼与持球核心（Primary Creator）两种典型定位，尝试将比赛任务拆解为具体的技能与认知指标。",
        techStack: "工作分析 (Job Analysis) / KSAO 框架 / 篮球追踪数据 / 统计学",
        detailsUrl: null,
        linkLabel: null,
        linkStateNote: "📊 学术报告 / 论文归档",
        icon: "./icons/chart.svg",
        type: "research",
        specs: {
          releaseDate: "2024",
          architecture: "把 I-O Psychology 的 Job Analysis / KSAO 方法应用到 NBA 球员角色分析中。",
          keyFeatures: [
            "将场上战术执行拆解为知识 (K)、技能 (S)、能力 (A) 和其他特质 (O) 四个维度",
            "3-and-D 侧翼重点分析：底角三分命中率、closeout 反应、防守横移与掩护处理",
            "持球核心重点分析：弱侧观察、挡拆阅读、工作记忆以及高压环境下的决策"
          ],
          metrics: "包含 NBA 轮换球员常规赛公开追踪数据与角色模型"
        }
      },
      {
        id: "project-racing",
        number: "05",
        title: "开放世界赛车物理实验",
        status: "prototype",
        statusLabel: "物理实验原型 (Prototype)",
        category: "网页实验 // 3D 物理",
        shortSummary: "在浏览器中运行的 3D 驾驶与物理实验，练习 Three.js 与 Cannon-es 动力学。",
        actionLabel: "查看项目 ➔",
        tags: ["Three.js", "Cannon-es", "WebGL", "3D 物理", "交互实验"],
        version: "物理实验原型",
        accentColor: "text-cyan-400",
        description: "一个在浏览器中运行的 3D 驾驶与物理实验，主要用来练习 Three.js 场景搭建、Cannon-es 车辆刚体动力学以及浏览器环境下的键盘操控反馈。",
        techStack: "Three.js / Cannon-es / JavaScript / WebGL",
        detailsUrl: null,
        linkLabel: null,
        linkStateNote: "🏎️ 物理原型 / 本地构建",
        icon: "./icons/joystick.svg",
        type: "dev",
        specs: {
          releaseDate: "2024",
          architecture: "用 Three.js 做 3D 场景和车辆模型渲染，用 Cannon-es 处理车辆动力学与地面碰撞。",
          keyFeatures: [
            "使用 Raycast Vehicle 模拟车辆悬挂、轮胎摩擦与转向物理",
            "加入基础动态光照、阴影和地形碰撞网格",
            "支持键盘 WASD / 方向键驾驶与漂移控制"
          ],
          metrics: "浏览器原生 3D 原型 / 无需安装任何插件"
        }
      },
      {
        id: "project-wulian",
        number: "06",
        title: "五联西苑城市与社会观察调研",
        status: "research",
        statusLabel: "田野调研 (Research)",
        category: "城市研究 // 社会学田野",
        shortSummary: "围绕杭州五联西苑开展的城市与社区实地观察，记录公共空间日常使用情况与边界变化。",
        actionLabel: "查看研究 ➔",
        tags: ["城市空间", "实地观察", "社区调研", "空间记录", "纪实摄影"],
        version: "调研记录与报告",
        accentColor: "text-green-400",
        description: "围绕杭州五联西苑开展的城市与社区实地观察。通过走访、照片记录和空间梳理，观察城中村及周边过渡区域中居民、商户和流动人口对公共空间的日常使用情况与边界变化。",
        techStack: "实地走访 / 空间记录 / 现场照片 / 居民访谈 / 质性分析",
        detailsUrl: null,
        linkLabel: null,
        linkStateNote: "📸 质性田野 / 空间图档",
        icon: "./icons/camera.svg",
        type: "research",
        specs: {
          releaseDate: "2023-2024",
          architecture: "通过实地走访、照片记录和空间分析开展的质性田野观察。",
          keyFeatures: [
            "记录五联西苑周边住宅、商铺、公共过道和非正规商业摊位的使用情况",
            "观察记录小区入口、沿街店铺、停车区域和公共座椅在不同时间段分别被谁使用",
            "整理了 120+ 张现场照片和空间使用记录"
          ],
          metrics: "多次实地走访记录与空间观察笔记"
        }
      },
      {
        id: "project-lunch",
        number: "07",
        title: "学校午休制度实证调查研究",
        status: "research",
        statusLabel: "统计调查 (Research)",
        category: "教育调查 // 统计分析",
        shortSummary: "针对学校作息安排中是否应设置正式午休时间开展的问卷调查与统计分析。",
        actionLabel: "查看研究 ➔",
        tags: ["问卷调查", "统计学", "样本抽样", "Jamovi", "数据分析"],
        version: "调查统计报告",
        accentColor: "text-emerald-400",
        description: "针对学校作息安排中是否应设置正式午休时间开展的问卷调查与统计分析。从三所学校收集学生有效问卷，通过设置注意力测试题、筛除重复作答来控制数据偏差，并使用 Jamovi 进行统计整理。",
        techStack: "问卷设计 / 分层抽样 / 统计分析 / 偏差控制 / Jamovi",
        detailsUrl: null,
        linkLabel: null,
        linkStateNote: "📈 统计报告 / 数据模型",
        icon: "./icons/chart.svg",
        type: "research",
        specs: {
          releaseDate: "2024",
          architecture: "通过问卷调查与统计软件进行的数据整理与推断分析。",
          keyFeatures: [
            "在 3 所学校中发放问卷并按年级进行分层抽样",
            "通过加入注意力检测题 (Attention Check) 和剔除异常作答时间来控制问卷质量",
            "使用 Jamovi 进行描述性统计、独立样本 t 检验与线性分析"
          ],
          metrics: "收集 100+ 份有效学生问卷 / 完成统计检验分析"
        }
      }
    ],

    skillsCategories: [
      {
        icon: "./icons/computer.svg",
        title: "网页开发与编程",
        items: [
          "网页前端制作 (HTML / CSS / JavaScript)",
          "交互原型与 Demo 开发",
          "Web 动效与音频交互",
          "Three.js 网页 3D 场景与物理实验",
          "Git 版本管理与静态部署"
        ]
      },
      {
        icon: "./icons/paint.svg",
        title: "UI / UX 与界面设计",
        items: [
          "网页视觉排版与布局设计",
          "界面交互流程与原型制作",
          "设计细节打磨与动效调试",
          "复古风格与实验性视觉探索",
          "多端适配与响应式排版"
        ]
      },
      {
        icon: "./icons/book.svg",
        title: "产品构思与教育工具",
        items: [
          "教育工具与答题系统功能构思",
          "教师端制作流程与画布设计",
          "产品交互逻辑梳理",
          "用户使用体验与反馈迭代",
          "功能模块划分"
        ]
      },
      {
        icon: "./icons/chart.svg",
        title: "社会研究与数据分析",
        items: [
          "问卷设计与抽样控制",
          "Jamovi 统计软件数据分析",
          "实地田野调研与现场记录",
          "空间观察与质性分析",
          "学术文献梳理与报告撰写"
        ]
      },
      {
        icon: "./icons/cd.svg",
        title: "音乐与亚文化兴趣",
        items: [
          "Hip-Hop 与 Trap 音乐文化",
          "FL Studio 音乐制作与节奏编曲",
          "音乐主题网页视觉与交互制作",
          "声音与视觉联动实验",
          "数字媒介文化观察"
        ]
      }
    ],

    techTools: [
      {
        category: "编程与开发",
        tools: ["HTML5", "CSS3", "JavaScript (ES6+)", "Three.js", "Cannon-es", "Tailwind CSS", "Vite", "Git & GitHub"]
      },
      {
        category: "设计与原型",
        tools: ["UI 界面排版", "交互原型制作", "动效调试", "视觉风格探索", "响应式适配"]
      },
      {
        category: "研究与统计分析",
        tools: ["Jamovi 统计分析", "问卷设计", "分层抽样", "田野实地观察", "数据清洗", "空间记录"]
      },
      {
        category: "音乐与音频制作",
        tools: ["FL Studio 音乐编曲", "Web Audio API", "音频采样处理", "合成器音色"]
      }
    ],

    interests: [
      "网页设计与交互",
      "数字艺术与实验性项目",
      "Hip-Hop & Trap 文化",
      "音乐制作 (FL Studio)",
      "社会学 (Sociology)",
      "心理学 (Psychology)",
      "统计学 (Statistics)",
      "哲学 (Philosophy)",
      "篮球与体育分析 (Basketball & Sports Analytics)",
      "产品设计与教育科技"
    ],

    faqs: [
      {
        question: "你平时主要做些什么？",
        answer: "我平时主要做一些网页互动项目、实验性数字作品和产品原型。\n\n我喜欢把代码、设计、音乐和研究结合在一起，比起纯粹的设计稿，我更喜欢把想法写成真正可以在浏览器里运行和体验的东西。",
        isOpenDefault: true
      },
      {
        question: "你最感兴趣的方向是什么？",
        answer: "我目前最感兴趣的是实验性网页设计、音乐相关的数字视觉体验、教育科技工具以及社会科学实证研究。\n\n我也长期关注心理学、哲学、统计学和篮球数据分析。",
        isOpenDefault: false
      },
      {
        question: "你会考虑什么样的项目合作？",
        answer: "我非常乐意参与有趣的网页设计、交互原型、音乐视觉项目、教育科技工具或者跨学科的研究项目。\n\n如果有契合的想法，欢迎随时联系我！",
        isOpenDefault: false
      }
    ],

    socials: [
      {
        name: "电子邮箱 (Email)",
        icon: "./icons/mail.svg",
        handle: "tico.wangyinzhe@yungu.org",
        url: "mailto:tico.wangyinzhe@yungu.org",
        badge: "发送邮件",
        canCopy: true,
        copyText: "tico.wangyinzhe@yungu.org"
      },
      {
        name: "手机号码 (Phone)",
        icon: "./icons/phone.svg",
        handle: "15857140708",
        url: "tel:15857140708",
        badge: "一键呼叫",
        canCopy: true,
        copyText: "15857140708"
      },
      {
        name: "微信 (WeChat)",
        icon: "./icons/network.svg",
        handle: "ticowang666",
        url: "javascript:void(0)",
        badge: "点击复制",
        canCopy: true,
        copyText: "ticowang666"
      },
      {
        name: "GitHub 个人主页",
        icon: "./icons/network.svg",
        handle: "@wyz15857140708-lang",
        url: "https://github.com/wyz15857140708-lang",
        badge: "开源主页"
      },
      {
        name: "Carti Website (在线演示)",
        icon: "./icons/cd.svg",
        handle: "wyz15857140708-lang.github.io/Carti-website",
        url: "https://wyz15857140708-lang.github.io/Carti-website/",
        badge: "在线 DEMO"
      }
    ],

    specs: {
      systemName: "TICO-STATION 98",
      processor: "Intel Pentium II 450MHz",
      memory: "128.0 MB SDRAM",
      storage: "Quantum Fireball 8.4GB IDE",
      sound: "Creative Sound Blaster AWE64",
      graphics: "3dfx Voodoo3 3000 AGP 16MB"
    },

    ui: {
      bootTitle: "AWARD MODULAR BIOS v4.51PG",
      bootSubtitle: "TICO-STATION 98",
      bootPrompt: "Press ENTER to start Windows 98",
      loginTitle: "欢迎使用 Windows 98",
      loginSubtitle: "请输入用户名和密码以登录到 TICO-STATION。",
      loginUserLabel: "用户名(U):",
      loginPassLabel: "密码(P):",
      loginConfirmBtn: "确定",
      loginCancelBtn: "取消",
      loginHelpBtn: "帮助(H)",
      startBtn: "开始",
      desktopIconPortfolio: "Tico 的作品集",
      desktopIconComputer: "我的电脑",
      desktopIconMusic: "CD 播放机",
      desktopIconSocial: "连接",
      desktopIconRecycle: "回收站",
      desktopIconPaint: "画图程序",
      desktopIconMinesweeper: "扫雷游戏",
      desktopIconNotepad: "记事本 (简介)",
      windowPortfolioTitle: "C:\\Tico\\Portfolio\\index.html - Microsoft 网页浏览器 5.0",
      menuFile: "文件(F)",
      menuEdit: "编辑(E)",
      menuView: "查看(V)",
      menuGo: "转到(G)",
      menuHelp: "帮助(H)",
      addressLabel: "地址(A):",
      tabAllProjects: "全部项目 (7)",
      tabDevProjects: "网页与交互 (4)",
      tabResearchProjects: "学术与社会研究 (3)",
      sectionFeaturedTitle: "精选项目 (Featured Projects)",
      sectionAllTitle: "全部项目",
      sectionAboutTitle: "关于与联系",
      btnViewAll: "查看全部项目 (共 7 项) ➔",
      btnShowFeatured: "收起 / 只看精选 (4 项)",
      statusBarDone: "就绪",
      statusBarObjects: "已载入 7 个项目",
      statusBarZone: "本地 Internet 区域",
      mediaPlayerTitle: "Windows 98 CD 播放机",
      systemPropertiesTitle: "系统属性 - TICO-STATION 98",
      socialTitle: "连接 - 联系方式与网络链接",
      recycleBinTitle: "回收站",
      langSwitchLabel: "中 / EN",
      startMenuPortfolio: "Tico 的作品集",
      startMenuMusic: "CD 播放机",
      startMenuComputer: "我的电脑 (系统属性)",
      startMenuSocial: "连接",
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
      name: "Tico Wang",
      displayName: "TICO WANG",
      title: "Student / Web / Design / Research",
      subtitle: "I build web projects, music-driven experiments, and conduct social science research.",
      status: "● Currently building new projects / Open to collaborations",
      avatar: "./tico_avatar.jpg",
      bio: [
        "I build web projects, music-driven experiments, and conduct social science research.",
        "Rather than leaving ideas in design files, I like actually building things that people can interact with and experience."
      ],
      registeredOwner: "Tico",
      systemEdition: "Windows 98 Second Edition (4.10.2222 A)"
    },

    projects: [
      {
        id: "project-carti",
        number: "01",
        title: "Carti Website",
        status: "live",
        statusLabel: "LIVE 1.0",
        category: "EXPERIMENTAL WEB // MUSIC",
        shortSummary: "An experimental website inspired by Playboi Carti's music and visuals.",
        actionLabel: "Open Website ➔",
        tags: ["Music Visuals", "Web Design", "Vanilla JS", "Typography"],
        version: "LIVE 1.0",
        accentColor: "text-red-400",
        description: "An experimental website inspired by Playboi Carti’s music and visual identity. Most artist websites feel too clean and predictable, so I experimented with oversized type, distorted visuals, abrupt transitions, and sound to make the interface match the music's raw mood.",
        techStack: "HTML / CSS / Vanilla JavaScript / Web Audio API / GitHub Pages",
        detailsUrl: "https://wyz15857140708-lang.github.io/Carti-website/",
        linkLabel: "Open Website ➔",
        linkStateNote: null,
        icon: "./icons/cd.svg",
        type: "dev",
        specs: {
          releaseDate: "2024",
          architecture: "Static site built with HTML, CSS, and Vanilla JavaScript, with audio effects via Web Audio API.",
          keyFeatures: [
            "Visual direction inspired by Carti's gothic, minimal, and Hip-Hop style with custom type layouts",
            "Scroll animations and micro-interactions built with vanilla JavaScript",
            "Responsive layout for desktop and mobile screens",
            "Deployed directly via GitHub Pages"
          ],
          metrics: "Live prototype / Zero heavy framework dependencies"
        }
      },
      {
        id: "project-kahoot",
        number: "02",
        title: "Kahoot-Inspired Platform",
        status: "in-progress",
        statusLabel: "IN PROGRESS",
        category: "EDTECH // PRODUCT PROTOTYPE",
        shortSummary: "An interactive quiz and instant classroom feedback prototype designed to improve student engagement.",
        actionLabel: "View Project ➔",
        tags: ["EdTech", "Product Design", "Interaction Prototype", "Classroom Tool", "Quiz Editor"],
        version: "In Progress (Alpha)",
        accentColor: "text-purple-400",
        description: "An interactive classroom quiz and authoring tool inspired by Kahoot. Keeps the fast-paced live quiz format while exploring a slide-based (PPT-like) canvas to make question authoring more flexible for educators.",
        techStack: "Web Development / UI Design / Interaction Prototyping / WebSocket",
        detailsUrl: null,
        linkLabel: null,
        linkStateNote: "🚧 In Development / No Public Link",
        icon: "./icons/book.svg",
        type: "dev",
        specs: {
          releaseDate: "2024-2025 (In Progress)",
          architecture: "Canvas-based visual editor for quiz content, planning WebSocket integration for live student responses.",
          keyFeatures: [
            "Slide-style layout canvas mixing text, images, and question cards",
            "Support for multiple choice, matching, and quick live polling formats",
            "Streamlined step-by-step creation flow for teachers",
            "Live aggregation of student answers and score breakdown"
          ],
          metrics: "Functional prototype / Aiming for multi-user classroom sessions"
        }
      },
      {
        id: "project-trap",
        number: "03",
        title: "The Architecture of Trap",
        status: "prototype",
        statusLabel: "PROTOTYPE",
        category: "CREATIVE CODING // MUSIC",
        shortSummary: "An interactive web exploration deconstructing 808 bass, hi-hat rolls, and triplet rhythms in Trap music.",
        actionLabel: "View Project ➔",
        tags: ["Music Culture", "Interactive Web", "Trap Visuals", "FL Studio"],
        version: "Interactive Prototype",
        accentColor: "text-yellow-400",
        description: "An interactive web project exploring Trap music culture. Uses web interaction, typography, and sound to turn key elements of Trap music (808 bass, rolling hi-hats, visual aesthetics) into an explorable browser experience.",
        techStack: "HTML / CSS / JavaScript / Web Audio API",
        detailsUrl: null,
        linkLabel: null,
        linkStateNote: "🧪 Prototype / Internal Test",
        icon: "./icons/soundcard.svg",
        type: "dev",
        specs: {
          releaseDate: "2024",
          architecture: "Interactive webpage built with JavaScript, animations, and sound triggers via Web Audio API.",
          keyFeatures: [
            "Deconstructs Trap essentials: 808 sub-bass, triplet hi-hat rolls, vocal chops, and dark synths",
            "Simple interactive drum sequencer to trigger beats directly in the browser",
            "An interactive timeline outlining visual shifts in Atlanta and Southern Trap culture"
          ],
          metrics: "Audio-visual experiment / In-browser Web Audio synthesis"
        }
      },
      {
        id: "project-ksao",
        number: "04",
        title: "NBA KSAO Research",
        status: "research",
        statusLabel: "RESEARCH",
        category: "RESEARCH // SPORTS & I-O PSYCH",
        shortSummary: "Applying the I-O psychology KSAO framework with advanced basketball metrics to model NBA player competencies.",
        actionLabel: "View Research ➔",
        tags: ["Sports Analytics", "KSAO Framework", "Job Analysis", "Empirical Research"],
        version: "Research Report",
        accentColor: "text-orange-400",
        description: "Applies Job Analysis and the KSAO framework from Industrial-Organizational (I-O) Psychology to NBA player evaluation, contrasting 3-and-D wings with primary creators using tracking data.",
        techStack: "Job Analysis / KSAO Framework / NBA Tracking Data / Statistics",
        detailsUrl: null,
        linkLabel: null,
        linkStateNote: "📊 Research Report / Archived",
        icon: "./icons/chart.svg",
        type: "research",
        specs: {
          releaseDate: "2024",
          architecture: "Applying I-O Psychology Job Analysis & KSAO methodology to NBA player evaluation.",
          keyFeatures: [
            "Decomposes on-court performance into Knowledge, Skills, Abilities, and Other characteristics",
            "3-and-D wing focus: corner 3PT accuracy, closeout reaction speed, lateral defense",
            "Primary creator focus: weak-side scanning, pick-and-roll reads, working memory"
          ],
          metrics: "Based on regular season player tracking data and competency models"
        }
      },
      {
        id: "project-racing",
        number: "05",
        title: "Open-World Racing Experiment",
        status: "prototype",
        statusLabel: "PROTOTYPE",
        category: "WEB EXPERIMENT // 3D PHYSICS",
        shortSummary: "A browser-based 3D driving experiment exploring Three.js rendering and Cannon-es vehicle physics.",
        actionLabel: "View Project ➔",
        tags: ["Three.js", "Cannon-es", "WebGL", "3D Physics", "Interactive Demo"],
        version: "Physics Prototype",
        accentColor: "text-cyan-400",
        description: "A browser-based 3D driving experiment exploring Three.js rendering, rigid-body vehicle dynamics with Cannon-es, and keyboard-driven physics controls directly on the web.",
        techStack: "Three.js / Cannon-es / JavaScript / WebGL",
        detailsUrl: null,
        linkLabel: null,
        linkStateNote: "🏎️ Physics Prototype / Local Build",
        icon: "./icons/joystick.svg",
        type: "dev",
        specs: {
          releaseDate: "2024",
          architecture: "Three.js for 3D vehicle & scene rendering, Cannon-es for physics simulation.",
          keyFeatures: [
            "Raycast Vehicle suspension and tire friction physics",
            "Dynamic lighting, shadow mapping, and terrain collider mesh",
            "Keyboard controls (WASD / Arrows) for driving and drifting"
          ],
          metrics: "Runs in modern browsers / Zero extra plugins needed"
        }
      },
      {
        id: "project-wulian",
        number: "06",
        title: "Wulian Xiyuan Spatial Field Study",
        status: "research",
        statusLabel: "RESEARCH",
        category: "URBAN STUDIES // ETHNOGRAPHY",
        shortSummary: "A field observation study on public space usage and boundary dynamics in Wulian Xiyuan, Hangzhou.",
        actionLabel: "View Research ➔",
        tags: ["Urban Space", "Field Observation", "Community Study", "Spatial Mapping", "Photography"],
        version: "Field Report",
        accentColor: "text-green-400",
        description: "A qualitative field observation study in Wulian Xiyuan, an urban village in Hangzhou. Maps spatial appropriation, street commerce, and informal boundary shifts across daily time slots.",
        techStack: "Fieldwork / Spatial Mapping / Documentary Photography / Interviews / Qualitative Analysis",
        detailsUrl: null,
        linkLabel: null,
        linkStateNote: "📸 Qualitative Fieldwork / Spatial Archives",
        icon: "./icons/camera.svg",
        type: "research",
        specs: {
          releaseDate: "2023-2024",
          architecture: "Qualitative field observation conducted through on-site walking tours, spatial mapping, and photography.",
          keyFeatures: [
            "Documented residential alleyways, shopfronts, and informal street vendor spaces",
            "Analyzed time-based shifts in space occupancy across morning, afternoon, and evening",
            "Compiled 120+ field photographs and spatial notes"
          ],
          metrics: "Multiple on-site observation sessions and spatial field notes"
        }
      },
      {
        id: "project-lunch",
        number: "07",
        title: "School Lunch Break Policy Study",
        status: "research",
        statusLabel: "RESEARCH",
        category: "EDUCATION // STATISTICS",
        shortSummary: "An empirical survey and statistical analysis exploring the impact of school lunch break rest policies.",
        actionLabel: "View Research ➔",
        tags: ["Survey Design", "Statistics", "Stratified Sampling", "Jamovi", "Data Analysis"],
        version: "Empirical Report",
        accentColor: "text-emerald-400",
        description: "An empirical survey investigating student rest duration and afternoon focus across three high schools, using Jamovi to run independent samples t-tests and regression modeling.",
        techStack: "Survey Design / Stratified Sampling / Statistical Analysis / Jamovi",
        detailsUrl: null,
        linkLabel: null,
        linkStateNote: "📈 Statistical Report / Data Archive",
        icon: "./icons/chart.svg",
        type: "research",
        specs: {
          releaseDate: "2024",
          architecture: "Empirical study using survey sampling, data cleaning, and statistical inferential modeling.",
          keyFeatures: [
            "Administered surveys across 3 high schools with stratified grade sampling",
            "Embedded attention checks and response duration filters to ensure clean data",
            "Conducted descriptive stats, independent t-tests, and correlation analysis using Jamovi"
          ],
          metrics: "100+ valid survey responses analyzed"
        }
      }
    ],

    skillsCategories: [
      {
        icon: "./icons/computer.svg",
        title: "Web Development & Engineering",
        items: [
          "Frontend Web Development (HTML / CSS / JavaScript)",
          "Interactive Prototypes & Demos",
          "Audio & Motion Interactions",
          "Three.js 3D Physics Experiments",
          "Git Version Control & Static Hosting"
        ]
      },
      {
        icon: "./icons/paint.svg",
        title: "UI / UX & Digital Design",
        items: [
          "Web Layout & Editorial Typography",
          "Interaction Flow & Wireframing",
          "Design Details & Micro-Interactions",
          "Retro & Experimental Aesthetics",
          "Responsive Multi-Device Layouts"
        ]
      },
      {
        icon: "./icons/book.svg",
        title: "Product & Educational Tools",
        items: [
          "EdTech & Classroom Quiz System Concepts",
          "Teacher-Side Slide Canvas Authoring",
          "Interaction Logic & User Flows",
          "User Feedback & Rapid Iteration",
          "Feature Architecture"
        ]
      },
      {
        icon: "./icons/chart.svg",
        title: "Social Research & Analytics",
        items: [
          "Survey Design & Sampling Controls",
          "Jamovi Statistical Data Analysis",
          "On-Site Fieldwork & Observational Notes",
          "Spatial Mapping & Qualitative Analysis",
          "Literature Review & Report Writing"
        ]
      },
      {
        icon: "./icons/cd.svg",
        title: "Music & Cultural Exploration",
        items: [
          "Hip-Hop & Trap Music Culture",
          "FL Studio Beat Production",
          "Music-Themed Web Visuals & Audio Triggers",
          "Audio-Visual Integration",
          "Digital Subculture Observation"
        ]
      }
    ],

    techTools: [
      {
        category: "Programming & Web",
        tools: ["HTML5", "CSS3", "JavaScript (ES6+)", "Three.js", "Cannon-es", "Tailwind CSS", "Vite", "Git & GitHub"]
      },
      {
        category: "Design & Prototyping",
        tools: ["UI Layout", "Interaction Prototyping", "Motion Design", "Visual Styles", "Responsive Design"]
      },
      {
        category: "Research & Statistics",
        tools: ["Jamovi Statistics", "Survey Design", "Stratified Sampling", "Fieldwork", "Data Cleaning"]
      },
      {
        category: "Audio & Music",
        tools: ["FL Studio", "Web Audio API", "Sample Processing", "Synthesizers"]
      }
    ],

    interests: [
      "Web Design & Interaction",
      "Digital Art & Experimental Prototypes",
      "Hip-Hop & Trap Culture",
      "Music Production (FL Studio)",
      "Sociology",
      "Psychology",
      "Statistics",
      "Philosophy",
      "Basketball & Sports Analytics",
      "Product Design & EdTech"
    ],

    faqs: [
      {
        question: "What do you usually work on?",
        answer: "I work on interactive web experiments, digital tools, and product prototypes.\n\nI enjoy blending code, visual design, sound, and empirical research to build things people can genuinely interact with in a browser.",
        isOpenDefault: true
      },
      {
        question: "What areas are you most interested in?",
        answer: "Experimental web design, music-driven digital experiences, classroom interaction tools, and social science research.\n\nI also follow psychology, philosophy, statistics, and basketball analytics.",
        isOpenDefault: false
      },
      {
        question: "What collaborations are you open to?",
        answer: "I'm always excited to collaborate on creative web projects, interaction prototypes, music visuals, educational tools, or research projects.\n\nFeel free to reach out anytime!",
        isOpenDefault: false
      }
    ],

    socials: [
      {
        name: "Email",
        icon: "./icons/mail.svg",
        handle: "tico.wangyinzhe@yungu.org",
        url: "mailto:tico.wangyinzhe@yungu.org",
        badge: "Send Email",
        canCopy: true,
        copyText: "tico.wangyinzhe@yungu.org"
      },
      {
        name: "Phone",
        icon: "./icons/phone.svg",
        handle: "+86 158-5714-0708",
        url: "tel:15857140708",
        badge: "Call",
        canCopy: true,
        copyText: "15857140708"
      },
      {
        name: "WeChat",
        icon: "./icons/network.svg",
        handle: "ticowang666",
        url: "javascript:void(0)",
        badge: "Copy WeChat",
        canCopy: true,
        copyText: "ticowang666"
      },
      {
        name: "GitHub Profile",
        icon: "./icons/network.svg",
        handle: "@wyz15857140708-lang",
        url: "https://github.com/wyz15857140708-lang",
        badge: "GitHub"
      },
      {
        name: "Carti Website (Live Demo)",
        icon: "./icons/cd.svg",
        handle: "wyz15857140708-lang.github.io/Carti-website",
        url: "https://wyz15857140708-lang.github.io/Carti-website/",
        badge: "Live Demo"
      }
    ],

    specs: {
      systemName: "TICO-STATION 98",
      processor: "Intel Pentium II 450MHz",
      memory: "128.0 MB SDRAM",
      storage: "Quantum Fireball 8.4GB IDE",
      sound: "Creative Sound Blaster AWE64",
      graphics: "3dfx Voodoo3 3000 AGP 16MB"
    },

    ui: {
      bootTitle: "AWARD MODULAR BIOS v4.51PG",
      bootSubtitle: "TICO-STATION 98",
      bootPrompt: "Press ENTER to start Windows 98",
      loginTitle: "Welcome to Windows 98",
      loginSubtitle: "Type a user name and password to log on to TICO-STATION.",
      loginUserLabel: "User name(U):",
      loginPassLabel: "Password(P):",
      loginConfirmBtn: "OK",
      loginCancelBtn: "Cancel",
      loginHelpBtn: "Help(H)",
      startBtn: "Start",
      desktopIconPortfolio: "Tico's Portfolio",
      desktopIconComputer: "My Computer",
      desktopIconMusic: "CD Player",
      desktopIconSocial: "Links",
      desktopIconRecycle: "Recycle Bin",
      desktopIconPaint: "MS Paint",
      desktopIconMinesweeper: "Minesweeper",
      desktopIconNotepad: "Notepad (Bio)",
      windowPortfolioTitle: "C:\\Tico\\Portfolio\\index.html - Microsoft Internet Explorer 5.0",
      menuFile: "File(F)",
      menuEdit: "Edit(E)",
      menuView: "View(V)",
      menuGo: "Go(G)",
      menuHelp: "Help(H)",
      addressLabel: "Address(A):",
      tabAllProjects: "All Projects (7)",
      tabDevProjects: "Web & Interactive (4)",
      tabResearchProjects: "Research & Studies (3)",
      sectionFeaturedTitle: "Featured Projects",
      sectionAllTitle: "All Projects",
      sectionAboutTitle: "About & Contact",
      btnViewAll: "View All Projects (7) ➔",
      btnShowFeatured: "Show Featured Only (4)",
      statusBarDone: "Done",
      statusBarObjects: "7 projects loaded",
      statusBarZone: "Local intranet zone",
      mediaPlayerTitle: "Windows 98 CD Player",
      systemPropertiesTitle: "System Properties - TICO-STATION 98",
      socialTitle: "Links - Contact & Online Profiles",
      recycleBinTitle: "Recycle Bin",
      langSwitchLabel: "中 / EN",
      startMenuPortfolio: "Tico's Portfolio",
      startMenuMusic: "CD Player",
      startMenuComputer: "My Computer (Properties)",
      startMenuSocial: "Links & Contact",
      startMenuPaint: "MS Paint",
      startMenuNotepad: "Notepad",
      startMenuMinesweeper: "Minesweeper",
      startMenuDos: "MS-DOS Prompt",
      startMenuDisplay: "Display Properties",
      startMenuToggleCrt: "Toggle CRT Monitor Shader",
      startMenuRestart: "Restart System",
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
