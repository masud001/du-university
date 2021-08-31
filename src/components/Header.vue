<template>
	<div class="header__area bg-color text-white px-5">
		<div class="container-fluid d-flex  align-items-center justify-content-between">
			<div class="header__du_left">
				<a href="#">
					<img class="du__logo" :src="Logo" alt="" />
				</a>
			</div>
			<div class="header__faculty_info_right d-flex flex-column align-items-end">
				<a href="#">
					<img class="department__logo" :src="filmLogo" alt="" />
				</a>
				<h5 class="mt-3 mb-2 text-uppercase position-relative">department of</h5>
				<h3 class="text-uppercase">television, film and photography</h3>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Header',
	setup() {
		return {
			Logo: require('../assets/logo/du-white.png'),
			filmLogo: require('../assets/logo/filmlogo.png'),
		};
	},
});
</script>

<style lang="scss" scoped>
.bg-color {
	background-color: #800000;
	border-top: 1px solid #ff1919;
	border-bottom: 1px solid #ff1919;
}
.header__du_left {
	.du__logo {
		width: 100px;
		position: relative;
		left: -15px;
	}
}
.header__faculty_info_right {
	h5 {
		letter-spacing: 5px;
		font-size: 15px;
		font-family: 'Goudy' !important;
		margin-bottom: 0;
		right: -4px;
	}
	h3 {
		font-size: 18px;
		font-family: 'Goudy';
		margin-bottom: 0;
	}
	.department__logo {
		width: 50px;
	}
}
@media (min-width: 240px) and (max-width: 510px) {
	.header__du_left {
		.du__logo {
			width: 80px;
			position: relative;
			left: -15px;
		}
	}
	.header__faculty_info_right {
		h5 {
			letter-spacing: 5px;
			font-size: 9px;
			font-family: 'Goudy' !important;
			margin-bottom: 0;
		}
		h3 {
			font-size: 9px;
			font-weight: bold;
			font-family: 'Goudy';
			margin-bottom: 0;
			letter-spacing: 1px;
		}
		.department__logo {
			width: 50px;
		}
	}
}
</style>
