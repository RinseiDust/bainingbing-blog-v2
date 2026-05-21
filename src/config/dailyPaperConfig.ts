export interface DailyPaper {
  title: string;
  authors: string;
  source: string;
  year: number;
  url: string;
  tags: string[];
}

export const dailyPapers: DailyPaper[] = [
  {
    title: "Learning Quadrupedal Locomotion on Challenging Terrain",
    authors: "Rudin, N., Hoeller, D., Reist, P., Hutter, M.",
    source: "Science Robotics",
    year: 2022,
    url: "https://doi.org/10.1126/scirobotics.abk2822",
    tags: ["机器人", "强化学习"],
  },
  {
    title: "ChatGPT for Robotics: Design Principles and Model Abilities",
    authors: "Vemprala, S., Bonatti, R., Bucker, A., Kapoor, A.",
    source: "Microsoft Autonomous Systems and Robotics Research",
    year: 2023,
    url: "https://arxiv.org/abs/2306.17582",
    tags: ["机器人", "AI"],
  },
  {
    title: "RT-2: Vision-Language-Action Models",
    authors: "Brohan, A., et al.",
    source: "Google DeepMind",
    year: 2023,
    url: "https://arxiv.org/abs/2307.15818",
    tags: ["机器人", "AI", "VLA"],
  },
  {
    title: "RoboCat: A Self-Improving Generalist Agent for Robotic Manipulation",
    authors: "Bousmalis, K., et al.",
    source: "Google DeepMind",
    year: 2023,
    url: "https://arxiv.org/abs/2306.11706",
    tags: ["机器人", "操控"],
  },
  {
    title: "ALOHA: A Low-Cost Open-Source Bimanual Teleoperation System",
    authors: "Zhao, T., Kumar, V., Levine, S., Finn, C.",
    source: "Stanford University",
    year: 2023,
    url: "https://arxiv.org/abs/2305.06261",
    tags: ["机器人", "操控"],
  },
  {
    title: "Adaptive Control of Robot Manipulators: A Unified Approach",
    authors: "Slotine, J.J.E., Li, W.",
    source: "International Journal of Robotics Research",
    year: 1987,
    url: "https://doi.org/10.1177/027836498700600303",
    tags: ["机器人", "控制理论"],
  },
  {
    title: "Can Machines Learn Finance? A Survey on Machine Learning in Quantitative Finance",
    authors: "Dixon, M., Halperin, I., Bilokon, P.",
    source: "Journal of Financial Data Science",
    year: 2020,
    url: "https://doi.org/10.1080/14697688.2020.1814053",
    tags: ["量化金融", "机器学习"],
  },
  {
    title: "Deep Reinforcement Learning in Quantitative Algorithmic Trading: A Review",
    authors: "Hambly, B., Xu, R., Yang, H.",
    source: "arXiv preprint",
    year: 2023,
    url: "https://arxiv.org/abs/2108.10130",
    tags: ["量化金融", "强化学习"],
  },
];
