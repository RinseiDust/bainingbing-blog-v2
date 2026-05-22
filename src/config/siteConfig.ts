import type { SiteConfig } from "@/types/config";
import { fontConfig } from "./fontConfig";

// 定义站点语言
const SITE_LANG = "zh_CN";

export const siteConfig: SiteConfig = {
	// 站点标题
	title: "白凝冰の小窝",

	// 站点副标题
	subtitle: "机械⚙️ / 机器人🤖 / 棒球⚾ / 二次元🎬",

	// 站点 URL
	site_url: "https://bainingbing.com",

	// 站点描述
	description:
		"白凝冰的个人博客，浙江大学机械工程本科生。记录机器人学习、棒球日常、二次元生活与金融量化学习笔记。",

	// 站点关键词
	keywords: [
		"白凝冰",
		"bainingbing",
		"博客",
		"技术博客",
		"机器人",
		"机械工程",
		"棒球",
		"ACGN",
		"量化",
		"ZJU",
	],

	// 主题色
	themeColor: {
		// 主题色的默认色相，范围从 0 到 360。例如：红色：0，青色：200，蓝绿色：250，粉色：345
		hue: 240,
		// 是否对访问者隐藏主题色选择器
		fixed: false,
		// 默认模式："light" 亮色，"dark" 暗色，"system" 跟随系统
		defaultMode: "system",
	},

	// 页面整体宽度（单位：rem）
	pageWidth: 100,

	// 网站Card样式配置
	card: {
		// 是否开启卡片边框和阴影
		border: true,
		// 是否让卡片风格跟随主题色相
		followTheme: false,
	},

	// Favicon 配置
	favicon: [
		{
			src: "/favicon/favicon.ico",
		},
	],

	// 导航栏配置
	navbar: {
		logo: {
			type: "image",
			value: "assets/images/firefly.png",
			alt: "❄️",
		},
		// 导航栏标题
		title: "白凝冰の小窝",
		// 全宽导航栏
		widthFull: false,
		// 导航菜单对齐方式
		menuAlign: "center",
		// 导航栏图标和标题是否跟随主题色
		followTheme: false,
		// 导航栏是否固定在顶部
		stickyNavbar: true,
	},

	// 站点开始日期
	siteStartDate: "2026-05-22",

	// 站点时区
	timezone: "Asia/Shanghai",

	// 提醒框（Admonitions）配置
	rehypeCallouts: {
		theme: "github",
	},

	// 文章页底部的"上次编辑时间"卡片开关
	showLastModified: true,

	// 文章过期阈值（天数）
	outdatedThreshold: 30,

	// 是否开启分享海报生成功能
	sharePoster: true,

	// OpenGraph图片功能
	generateOgImages: false,

	// bangumi配置
	bangumi: {
		userId: "1143164",
		categoryOrder: ["anime", "book", "music", "game"],
	},

	// 页面开关配置
	pages: {
		friends: true,
		sponsor: true,
		guestbook: true,
		bangumi: true,
		gallery: true,
		resources: true,
	},

	// 分类导航栏开关
	categoryBar: true,

	// 文章列表布局配置
	postListLayout: {
		defaultMode: "list",
		mobileDefaultMode: "list",
		showTags: true,
		descriptionLines: 2,
		allowSwitch: true,
		grid: {
			masonry: false,
			columnWidth: 320,
		},
	},

	// 分页配置
	pagination: {
		postsPerPage: 10,
	},

	// 统计分析
	analytics: {
		googleAnalyticsId: "",
		microsoftClarityId: "",
		umamiAnalytics: {
			websiteId: "",
			scriptUrl: "https://cloud.umami.is/script.js",
			trackOutboundLinks: true,
			collectWebVitals: false,
			relpays: {
				enabled: false,
				sampleRate: 0.15,
				maskLevel: "moderate",
				maxDuration: 300000,
				blockSelector: "",
			},
		},
		la51Analytics: {
			Id: "",
			sdkUrl: "",
			ck: "",
			autoTrack: false,
			hashMode: false,
			screenRecord: true,
		},
	},

	// 图像优化及响应式配置
	imageOptimization: {
		formats: "webp",
		quality: 85,
		noReferrerDomains: [],
	},

	// 字体配置
	font: fontConfig,

	// 站点语言
	lang: SITE_LANG,
};
