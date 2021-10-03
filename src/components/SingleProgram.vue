<template>
	<div class="card single-program-card shadow-sm">
		<div class="card-body">
			<div class="card-image">
				<img src="https://via.placeholder.com/100x100" alt="" class="img-fluid" />
			</div>
			<div class=" pb-3 pt-4 ">
				<h5 class="card-title text-capitalize">subject name</h5>
				<p class="card-subtitle mb-2 text-muted">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident possimus
					adipisci soluta doloremque excepturi esse.
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SingleProgram',
	setup() {},
});
</script>

<style lang="scss" scoped>
.single-program-card {
	border-radius: 25px;
	.card-image {
		max-height: 200px;
		height: 200px;
		img {
			border-radius: 25px;
			width: 100%;
			height: 100%;
		}
	}
}
</style>
