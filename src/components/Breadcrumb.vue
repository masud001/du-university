<template>
	<div class="breadcrumb-area px-md-5 py-2 bg-color">
		<div class="container-fluid">
			<div class="row">
				<div class="col-12">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb mb-0">
							<li
								v-for="item in items"
								:key="item.id"
								class="breadcrumb-item text-uppercase fw-normal"
							>
								<a href="#">{{ item.name }}</a>
							</li>
							<!-- <li class="breadcrumb-item text-uppercase fw-normal active">
								<a href="#">programs</a>
							</li> -->
						</ol>
					</nav>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Breadcrumb',
	props: ['items'],
	setup() {},
});
</script>

<style lang="scss" scoped>
.bg-color {
	background-color: #b3b3b3;
	border-bottom: 10px solid #b9c2c7;
}
.breadcrumb-item a {
	text-decoration: none;
	color: #4d4d4d;
}
</style>
