<template>
	<div class='toc'>
		<ul class="toc-ul">
			<li v-for="item in header ">
				<a :href="item.link">{{ item.title }}</a>
			</li>
		</ul>
	</div>
</template>
<script setup>
defineOptions({
	name: 'sideToc'
})
import { usePageData } from '@vuepress/client';

const header = usePageData().value.headers
</script>
<style lang='scss'>
.toc {
	position: fixed;
	top: 100px;
	right: 48px;
	width: 150px;

	&-ul {
		list-style: none;

		li {
			display: flex;
			align-items: center;

			a {
				color: var(--text-color-lighter);

			}

		}

		li::before {
			content: ' ';
			width: 5px;
			height: 16px;
			margin-right: 5px;
			background-color: pink;
			border-radius: 5px;
			display: inline-block;
		}
	}
}</style>