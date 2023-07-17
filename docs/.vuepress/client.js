import { defineClientConfig, usePageData } from '@vuepress/client';


import test from './layout/test.vue';
import Element from 'element-plus';
import 'element-plus/dist/index.css';
import './public/style/index.css';

const componentFile = import.meta.glob('./components/*/*.vue');
const componentList = Object.keys(componentFile).map((item) => {
	return componentFile[item]().then((data) => {
		return [data.default.name, data.default];
	});
});

export default defineClientConfig({
	async enhance({ app, router, siteData }) {
		//全局可使用elementPlus
		app.use(Element);
		//自动导入组件
		componentList.forEach((item) => {
			item.then((data) => {
				app.component(data[0], data[1]);
			});
		});
		//路由功能
		app.provide('router', router);
	},
	setup() {
		console.log(usePageData());
	},
	rootComponents: [],
});
