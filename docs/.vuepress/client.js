import { defineClientConfig } from '@vuepress/client';
import Element from 'element-plus';
import 'element-plus/dist/index.css';
import './public/style/index.css'
import homePage from './components/homePage/index.vue';

export default defineClientConfig({
	 enhance({ app, router, siteData }) {
		//全局可使用elementPlus
		app.use(Element);
		//自动导入组件
		const componentFile = import.meta.glob('./components/*/*.vue');
		Object.keys(componentFile).forEach((item) => {
			componentFile[item]().then((data) => {
				app.component(data.default.name, data.default);
			});
		});
	},
	setup() {},
	rootComponents: [],
});
