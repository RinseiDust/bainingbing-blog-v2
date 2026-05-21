import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	avatar: "assets/images/congyu.png",

	// 名字
	name: "白凝冰",

	// 个人签名
	bio: "浙大机械⚙️ · 机器人方向🤖 · 棒球爱好者⚾ · 二次元🎬",

	// 社交链接
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/RinseiDust",
			showName: false,
		},
		{
			name: "Bilibili",
			icon: "simple-icons:bilibili",
			url: "https://space.bilibili.com/1016018916",
			showName: false,
		},
		{
			name: "知乎",
			icon: "simple-icons:zhihu",
			url: "https://www.zhihu.com/people/0275531208b74e93c6bbc82fd99617c8",
			showName: false,
		},
		{
			name: "CSDN",
			icon: "simple-icons:csdn",
			url: "https://blog.csdn.net/2502_93457452",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:2926708798@qq.com",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
