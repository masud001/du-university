<template>
	<div class="card__area">
		<video controls>
			<source
				src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
				type="video/mp4"
			/>

			Your browser does not support HTML video.
		</video>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'VideoCards',
	setup() {},
});
</script>

<style lang="scss" scoped>
video {
	height: 100%;
	width: 100%;
	object-fit: fill; // use "cover" to avoid distortion
}
.card__area {
	width: 100%;
	height: 320px;
	float: left;
	margin: 0 0 25px;
	padding: 0px 0px;
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
</style>
