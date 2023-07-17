import { defineUserConfig, defaultTheme } from 'vuepress';
import { containerPlugin } from '@vuepress/plugin-container';
// import { createSidebarByDir } from './utils/tools';


export default defineUserConfig({
	lang: 'zh-CN',
	title: 'fakeElementPlus',
	description: '这是一个仿造ElementPlus的vuepress文档',
	theme: defaultTheme({
		navbar: [
			{ text: '指南', link: '/guide/design.md' },
			{ text: '组件', link: '/component/button.md' },
			{ text: '资源', link: '/resource/index.md' },
			{ text: 'Github', link: 'https://github.com/weeeeeeareeee/element-plus' },
		],
		sidebar: {
			'/guide/': [
				{
					text: '基础',
					children: [
						{ text: '设计', link: '/guide/design.md' },
						{ text: '导航', link: '/guide/nav.md' },
					],
				},
			],
		},
	}),
	plugins: [
		containerPlugin({
			type: 'demo',
			render: (tokens, idx, options, env, self) => {
				const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/);

				if (tokens[idx].nesting === 1) {
					//开合标签
					const sourceFilePath = tokens[idx + 2].children?.[0].content ?? '';
					console.log(sourceFilePath);
					return `<demo>${m[1]}`;
				} else {
					//闭合标签
					return '</demo>';
				}
			},
		}),
	],
});
