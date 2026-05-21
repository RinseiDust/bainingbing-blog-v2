export interface ResourceLink {
  name: string;
  description: string;
  url: string;
  icon: string;
  category: string;
}

export interface ResourceCategory {
  name: string;
  icon: string;
}

export const resourceCategories: ResourceCategory[] = [
  { name: "AI 工具", icon: "material-symbols:smart-toy-outline" },
  { name: "机器人", icon: "material-symbols:settings-outline" },
  { name: "学术资源", icon: "material-symbols:school-outline" },
  { name: "量化金融", icon: "material-symbols:account-balance-outline" },
  { name: "代码托管", icon: "fa7-brands:github" },
  { name: "社交媒体", icon: "material-symbols:share-outline" },
  { name: "设计资源", icon: "material-symbols:palette-outline" },
];

export const resourceLinks: ResourceLink[] = [
  // AI 工具
  {
    name: "ChatGPT",
    description: "OpenAI 的对话式 AI 助手",
    url: "https://chat.openai.com",
    icon: "simple-icons:openai",
    category: "AI 工具",
  },
  {
    name: "Claude",
    description: "Anthropic 的 AI 助手，擅长代码与长文",
    url: "https://claude.ai",
    icon: "material-symbols:psychology-outline",
    category: "AI 工具",
  },
  {
    name: "DeepSeek",
    description: "国产大语言模型，代码能力优秀",
    url: "https://chat.deepseek.com",
    icon: "material-symbols:auto-awesome",
    category: "AI 工具",
  },
  {
    name: "Google Gemini",
    description: "Google 的多模态大模型",
    url: "https://gemini.google.com",
    icon: "simple-icons:googlegemini",
    category: "AI 工具",
  },

  // 机器人
  {
    name: "ROS 官方文档",
    description: "机器人操作系统官方文档与教程",
    url: "https://docs.ros.org",
    icon: "material-symbols:settings-outline",
    category: "机器人",
  },
  {
    name: "MuJoCo",
    description: "Google DeepMind 开源的物理仿真引擎",
    url: "https://mujoco.org",
    icon: "material-symbols:science-outline",
    category: "机器人",
  },
  {
    name: "Isaac Sim",
    description: "NVIDIA 的机器人仿真平台",
    url: "https://developer.nvidia.com/isaac-sim",
    icon: "simple-icons:nvidia",
    category: "机器人",
  },
  {
    name: "arXiv Robotics",
    description: "机器人学领域最新论文预印本",
    url: "https://arxiv.org/list/cs.RO/recent",
    icon: "material-symbols:description-outline",
    category: "机器人",
  },

  // 学术资源
  {
    name: "Google Scholar",
    description: "学术文献搜索引擎",
    url: "https://scholar.google.com",
    icon: "simple-icons:googlescholar",
    category: "学术资源",
  },
  {
    name: "Web of Science",
    description: "SCI/SSCI 论文检索平台",
    url: "https://www.webofscience.com",
    icon: "material-symbols:search",
    category: "学术资源",
  },
  {
    name: "arXiv",
    description: "预印本论文库，覆盖物理、CS、数学",
    url: "https://arxiv.org",
    icon: "material-symbols:archive-outline",
    category: "学术资源",
  },
  {
    name: "IEEE Xplore",
    description: "IEEE 电子工程与计算机科学论文库",
    url: "https://ieeexplore.ieee.org",
    icon: "material-symbols:engineering-outline",
    category: "学术资源",
  },
  {
    name: "Connected Papers",
    description: "论文引用关系可视化工具",
    url: "https://www.connectedpapers.com",
    icon: "material-symbols:account-tree-outline",
    category: "学术资源",
  },

  // 量化金融
  {
    name: "JoinQuant 聚宽",
    description: "国内在线量化交易平台",
    url: "https://www.joinquant.com",
    icon: "material-symbols:show-chart",
    category: "量化金融",
  },
  {
    name: "Tushare",
    description: "免费开源的金融数据接口",
    url: "https://tushare.pro",
    icon: "material-symbols:database-outline",
    category: "量化金融",
  },
  {
    name: "QuantConnect",
    description: "国际化的量化策略研究与回测平台",
    url: "https://www.quantconnect.com",
    icon: "material-symbols:query-stats",
    category: "量化金融",
  },
  {
    name: "Wind 万得",
    description: "国内权威金融数据终端",
    url: "https://www.wind.com.cn",
    icon: "material-symbols:monitoring",
    category: "量化金融",
  },

  // 代码托管
  {
    name: "GitHub",
    description: "全球最大的代码托管平台",
    url: "https://github.com",
    icon: "fa7-brands:github",
    category: "代码托管",
  },
  {
    name: "GitHub (个人主页)",
    description: "白凝冰的 GitHub 主页",
    url: "https://github.com/RinseiDust",
    icon: "fa7-brands:github",
    category: "代码托管",
  },
  {
    name: "CSDN",
    description: "国内最大的 IT 技术社区",
    url: "https://www.csdn.net",
    icon: "simple-icons:csdn",
    category: "代码托管",
  },

  // 社交媒体
  {
    name: "Bilibili",
    description: "国内最大的弹幕视频网站",
    url: "https://www.bilibili.com",
    icon: "simple-icons:bilibili",
    category: "社交媒体",
  },
  {
    name: "知乎",
    description: "高质量的中文问答社区",
    url: "https://www.zhihu.com",
    icon: "simple-icons:zhihu",
    category: "社交媒体",
  },

  // 设计资源
  {
    name: "Dribbble",
    description: "全球设计作品展示平台",
    url: "https://dribbble.com",
    icon: "fa7-brands:dribbble",
    category: "设计资源",
  },
  {
    name: "Pinterest",
    description: "图片灵感收集平台",
    url: "https://www.pinterest.com",
    icon: "fa7-brands:pinterest",
    category: "设计资源",
  },
];
