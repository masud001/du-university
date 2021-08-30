<template>
	<div class="card__area">
		<a href="#" class="text-decoration-none">
			<h5 class="text-capitalize text-decoration-none">title one</h5>
			<div class="card__icon">
				<i class="far fa-file-alt"></i>
			</div>
		</a>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Cards',
	setup() {},
});
</script>

<style lang="scss" scoped>
.card__area {
	width: 100%;
	height: 145px;
	float: left;
	margin: 0 0 25px;
	padding: 15px 24px;
	background: #babac0;
	border-radius: 10px;
	-webkit-box-shadow: 0 10px 10px 0 rgb(0 0 0 / 20%);
	box-shadow: 0 10px 10px 0 rgb(0 0 0 / 20%);
	overflow: hidden;
	position: relative;
	-webkit-animation-duration: 0.15s;
	-webkit-transition: all 0.15s linear;
	-moz-animation-duration: 0.15s;
	-moz-transition: all 0.15s linear;
	animation-duration: 0.15s;
	-o-transition: all 0.15s linear;
	transition: all 0.15s linear;
	text-decoration: none;
}
.card__area h5 {
	font-size: 14px;
	line-height: 1.4;
	color: #000;
	margin-bottom: 0;
	text-decoration: none;
	font-weight: 700;
}
.card__icon {
	i {
		color: #fff;
		font-size: 45px;
		position: absolute;
		right: 20px;
		bottom: 20px;
	}
}
</style>
