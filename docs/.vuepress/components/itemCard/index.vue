<template>
	<el-card shadow="never" class="card">
		<img :src="imgPath" alt="">
		<slot name="title"></slot>
		<slot></slot>
		<div class="card-footer">
			<el-button type="primary" link size="large" class="btn">查看详情</el-button>
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
		border-top: 1px solid var(--el-border-color);
		padding-top: 20px;

		.btn {
			width: 100%;
			height: 100%;
			margin: 0 auto;

			&:hover {
				background-color: var(--el-color-primary);
			}
		}
	}
}
</style>