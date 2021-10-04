<template>
	<div class="badge__area">
		<button>{{ badgeName }}</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Badges',
	setup() {},
	props: ['badgeName'],
});
</script>

<style lang="scss" scoped>
.badge__area {
	display: inline-block;
	button {
		text-transform: uppercase;
		font-weight: bold;
		border: none;
		color: #fff;
		background-color: #fe0000;
		font-size: 25px;
		padding: 5px 25px;
		border-radius: 10px;
	}
}
</style>
