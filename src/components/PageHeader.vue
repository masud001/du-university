<template>
	<div class="page__header text-center py-4">
		<h1 class="fs-1 fw-bold text-uppercase text-white">{{ title }}</h1>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'PageHeader',
	props: ['title'],
	setup() {},
});
</script>

<style lang="scss" scoped>
.page__header {
	background-color: #4d4d4d;
	display: block;
	h1 {
		font-family: Arial, Helvetica, sans-serif;
	}
}
</style>
