<template>
	<div class="wrap">
		<h1>Fake Element Plus</h1>
		<p class="wrap-desc">这是一个仿造ElementPlus的vuepress文档</p>
		<img src="../../public/images/theme-index-blue.png" alt="">
		<div class="wrap-cardBox">
			<itemCard title="指南" desc="了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。"></itemCard>
			<itemCard title="组件" desc="使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。"></itemCard>
			<itemCard title="资源" desc="下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。"></itemCard>
		</div>
	</div>
</template>
<script setup>
defineOptions({
	name: 'homePage'
})
</script>
<style lang='scss'>
.wrap {
	display: flex;
	padding-top: 55px;
	flex-direction: column;
	align-items: center;

	h1 {
		font-weight: 600;
	}

	&-desc {
		margin-top: 0px !important;
	}
	&-cardBox{
		width: 100%;
		margin-top: 50px;
		display: flex;
		justify-content: space-around;
	}
}
</style>