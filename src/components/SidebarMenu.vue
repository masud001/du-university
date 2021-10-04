<template>
	<div class="sidebar__menu p-3 bg-color d-flex flex-column">
		<div class="sidebar__wrapper d-flex flex-wrap">
			<div class="sidebar__item">
				<a href="#">
					<i class="far fa-comment-dots"></i>
				</a>
			</div>
			<div class="sidebar__item">
				<a href="#">
					<i class="far fa-comment-dots"></i>
				</a>
			</div>
			<div class="sidebar__item">
				<a href="#">
					<i class="far fa-comment-dots"></i>
				</a>
			</div>
			<div class="sidebar__item">
				<a href="#">
					<i class="far fa-comment-dots"></i>
				</a>
			</div>
			<div class="sidebar__item">
				<a href="#">
					<i class="far fa-comment-dots"></i>
				</a>
			</div>
			<div class="sidebar__item">
				<a href="#">
					<i class="far fa-comment-dots"></i>
				</a>
			</div>
			<div class="sidebar__item">
				<a href="#">
					<i class="far fa-comment-dots"></i>
				</a>
			</div>
		</div>
		<div class="request_btn_area mt-auto mb-md-5 align-self-center ">
			<a href="#">
				<button class="request-btn fw-bold text-uppercase">
					request <br />
					information
				</button>
			</a>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SidebarMenu',
	setup() {},
});
</script>

<style lang="scss" scoped>
.bg-color {
	background-color: red;
	border-radius: 10px;
	min-height: 500px;
}
.sidebar__item {
	width: 60px;
	height: 60px;
	text-align: center;
	font-size: 34px;
	border: 2px solid #c2272f;
	border-radius: 50%;
	margin: 8px;
	background-color: #ec0000;

	a {
		i {
			color: #fff;
			transition: 0.3s;
		}
		&:hover {
			i {
				color: #282423;
			}
		}
	}
}

.request-btn {
	background-color: #ed1b24;
	border: 0;
	border-radius: 10px;
	color: #fff;
	padding: 5px 15px;
	transition: 0.3s;
	&:hover {
		opacity: 0.7;
	}
}
</style>
