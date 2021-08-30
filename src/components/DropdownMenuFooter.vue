<template>
	<div class="dropdown__menu_section fade-enter-active">
		<div class="container-fluid">
			<div class="row">
				<div class="col-12 col-md-3 col-sm-6">
					<ul class="navbar__menu">
						<li><a href="#">Home </a></li>
						<li><a href="#">About us </a></li>
						<li><a href="#">our company </a></li>
						<li v-on:click.stop.prevent="toggle()">
							<a href="#"
								>our product <span><i class="fas fa-angle-down"></i></span>
							</a>
							<ul v-if="onOff" class="sub_dropdown-menu">
								<li>
									<a class="" href="#">Dropdown item text</a>
								</li>
								<li><a class="" href="#">Action</a></li>
								<li><a class="" href="#">Another action</a></li>
								<li><a class="" href="#">Something else here</a></li>
							</ul>
						</li>
						<li><a href="#">services </a></li>
						<li><a href="#">news </a></li>
						<li><a href="#">international </a></li>
					</ul>
				</div>
				<div class="col-12 col-md-3 col-sm-6">
					<ul class="navbar__menu">
						<li><a href="#">Home </a></li>
						<li><a href="#">About us </a></li>
						<li><a href="#">our company </a></li>
						<li><a href="#">our product </a></li>
						<li><a href="#">services </a></li>
						<li><a href="#">news </a></li>
						<li><a href="#">international </a></li>
					</ul>
				</div>
				<div class="col-12 col-md-3 col-sm-6">
					<ul class="navbar__menu">
						<li><a href="#">Home </a></li>
						<li><a href="#">About us </a></li>
						<li><a href="#">our company </a></li>
						<li><a href="#">our product </a></li>
						<li><a href="#">services </a></li>
						<li><a href="#">news </a></li>
						<li><a href="#">international </a></li>
					</ul>
				</div>
				<div class="col-12 col-md-3 col-sm-6">
					<ul class="navbar__menu">
						<li><a href="#">Home </a></li>
						<li><a href="#">About us </a></li>
						<li><a href="#">our company </a></li>
						<li><a href="#">our product </a></li>
						<li><a href="#">services </a></li>
						<li><a href="#">news </a></li>
						<li><a href="#">international </a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'DropdownMenuFooter',
	data() {
		return {
			onOff: false,
		};
	},
	methods: {
		toggle() {
			console.log('is clicked', this.onOff);
			return (this.onOff = !this.onOff);
		},
	},
	setup() {},
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.dropdown__menu_section {
	position: fixed;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.75);
	padding: 30px 0px;
	z-index: 99;
	bottom: 47px;
}
.navbar__menu {
	li {
		display: block;
		ul {
			margin: 0;
			padding: 0;
			li {
				a {
					padding: 5px;
					font-weight: bold;
				}
			}
		}
		a {
			display: block;
			color: #fff;
			text-transform: uppercase;
			font-size: 14px;
			text-decoration: none;
			padding: 10px 0px;
			span {
				margin-left: 15px;
			}
		}
	}
}
</style>
