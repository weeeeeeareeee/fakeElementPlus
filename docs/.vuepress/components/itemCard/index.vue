<template>
	<el-card shadow="never" class="card">
		<img src="../../public/images/element-plus-logo.svg" alt="" class="card-img">
		<div class="card-title">
			{{ title }}
		</div>
		<p class="card-desc">
			{{ desc }}
		</p>
		<div class="card-footer">
			<el-button type="primary" link size="large" class="btn" @click="to()">查看详情</el-button>
		</div>
	</el-card>
</template>
<script setup>
import { inject } from 'vue';

defineOptions({
	name: 'itemCard'
})
const props = defineProps({
	imgPath: String, //图片路径
	title: String, //标题
	desc: String //描述/简介描述 （可选） （不填写时，默认为空）
})
const router = inject('router')
const to = () => {
	console.log(router);
	router.push('/component/button.html')
}

</script>
<style lang='scss'>
.card {
	width: 230px;
	height: 330px;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	transition: all 0.3s ease-in-out;
	bottom: 0;

	&:hover {
		bottom: 6px;
		box-shadow: 2px 6px 6px #edeff57a;
	}


	&-footer {
		width: 100%;
		border-top: 1px solid var(--el-border-color);
		font-size: 16px;
		position: absolute;
		bottom: 0;

		&:hover {
			background-color: var(--el-color-primary);
		}

		.btn {
			width: 100%;
			height: 100%;
			margin: 0 auto;
			padding: 20px 0;

			&:hover {
				color: #fff;
			}
		}
	}

	&-img {
		width: 130px;
		margin: 48px 0;
	}

	&-title {
		color: var(--el-text-color-primary);
		font-weight: 400;
		display: block;
	}

	&-desc {
		margin: 16px 0;
		padding: 0 25px;
		font-size: 14px;
		color: #99a9bf;
		text-align: center;
	}

	.el-card__body {
		width: 100%;
		height: 100%;
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

}
</style>