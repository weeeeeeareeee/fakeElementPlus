<template>
	<el-card shadow="never" class="card">
		<img :src="imgPath" alt="">
		<slot name="title"></slot>
		<slot></slot>
		<div class="card-footer">
			<a href="">查看详情</a>
		</div>
	</el-card>
</template>
<script setup>
defineOptions({
	name: 'itemCard'
})
const props = defineProps({
	imgPath: String, // 
})
</script>
<style lang='scss'>
.card {
	width: 220px;
	display: flex;
	flex-direction: column;
	align-items: center;

	.el-card__body {
		width: 100%;
	}

	&-footer {
		width: 100%;
		border-top: 1px solid #000;
		padding-top: 20px;
	}
}
</style>