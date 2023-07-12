<template>
	<div class="wrap">
		<h1>Fake Element Plus</h1>
		<p class="wrap-desc">这是一个仿造ElementPlus的vuepress文档</p>
		<img src="../../public/images/theme-index-blue.png" alt="">
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
	h1{
		font-weight: 600;
	}
	&-desc {
		margin-top: 0px !important;
	}
}
</style>