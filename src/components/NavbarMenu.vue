<template>
	<div class="navbar_menu_wrapper">
		<div class="container-fluid px-5" @mouseover="showByIndex = i">
			<div class="row">
				<div class="col-md-12">
					<div class="navbar_menu">
						<ul class="navbar_menu_items">
							<li
								class=" position-relative "
								@mouseover="listOne = true"
								@mouseleave="listOne = false"
							>
								<a href="#">Home </a>
								<!-- mega menu  -->
								<transition name="dropdown__menu">
									<div
										class="mega_dropdown__menu container position-absolute bg-black p-3"
										v-if="listOne"
										@click="listOne = false"
									>
										<div class="" v-show="showByIndex === i">
											<MegaMenu />
										</div>
									</div>
								</transition>
							</li>

							<li
								class="position-relative "
								@mouseover="listTwo = true"
								@mouseleave="listTwo = false"
							>
								<a href="#">Academic </a>
								<transition name="dropdown__menu">
									<div
										class="mega_dropdown__menu container position-absolute bg-black p-3"
										v-if="listTwo"
										@click="listTwo = false"
									>
										<div class="" v-show="showByIndex === i">
											<MegaMenu />
										</div>
									</div>
								</transition>
							</li>
							<li
								class="position-relative "
								@mouseover="listThree = true"
								@mouseleave="listThree = false"
							>
								<a href="#">Research and Publication </a>
								<transition name="dropdown__menu">
									<div
										class="mega_dropdown__menu container position-absolute bg-black p-3"
										v-if="listThree"
										@click="listThree = false"
									>
										<div class="" v-show="showByIndex === i">
											<MegaMenu />
										</div>
									</div>
								</transition>
							</li>
							<li><a href="#">Academic </a></li>
							<li><a href="#">Academic </a></li>
							<li><a href="#">Academic </a></li>
							<li><a href="#">Academic </a></li>
							<li><a href="#">Academic </a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MegaMenu from './MegaMenu.vue';

export default defineComponent({
	components: { MegaMenu },
	name: 'NavbarMenu',
	setup() {},
	data() {
		return {
			onOff: false,
			isShow: false,
			listOne: false,
			listTwo: false,
			listThree: false,
			listFour: false,
		};
	},
	methods: {
		toggle() {
			console.log('is clicked', this.onOff);
			return (this.onOff = !this.onOff);
		},
	},
});
</script>

<style lang="scss" scoped>
.mega_dropdown__menu {
	width: 1080px;
	background: -moz-linear-gradient(top, #000 0, #333 50%, #474747 100%);
	background: -webkit-gradient(
		linear,
		left top,
		left bottom,
		color-stop(0, #000),
		color-stop(75%, #333),
		color-stop(100%, #474747)
	);
	background: -webkit-linear-gradient(top, #000 0, #333 75%, #474747 100%);
	background: -o-linear-gradient(top, #000 0, #333 75%, #474747 100%);
	background: -ms-linear-gradient(top, #000 0, #333 75%, #474747 100%);
	background: linear-gradient(to bottom, #000 0, #333 75%, #474747 100%);
	box-shadow: 2px 2px 3px 1px #101010;
}

.dropdown__menu-enter-from {
	opacity: 0;
}
.dropdown__menu-enter-to {
	opacity: 1;
}
.dropdown__menu-enter-active {
	transition: all 0.5s ease-in;
}
.dropdown__menu-leave-from {
	opacity: 1;
}
.dropdown__menu-leave-to {
	opacity: 0;
}
.dropdown__menu-leave-active {
	transition: all 0.5s ease-in;
}

.navbar_menu_wrapper {
	background: url('../assets/red-nav-bg3.png') repeat-x;
	height: 32px;
	position: relative;
	width: 100%;
	z-index: 5;
	margin-top: 0px;
}
.navbar_menu ul {
	margin: 0;
	padding: 0;
	list-style: none;
}
.navbar_menu ul li {
	display: inline;
	position: relative;
}
.navbar_menu ul li a {
	display: inline-block;
	text-transform: uppercase;
	font-size: 12px;
	padding: 7px 10px;
	text-decoration: none;
	color: #fff;
	font-family: Arial, Helvetica, sans-serif;
	&:hover {
		background-color: #000;
		color: #fff;
		transition: all 0.3s ease-in;
	}
}

@media screen and (max-width: 1350px) {
	.navbar_menu_wrapper {
		opacity: 0;
		display: none;
		background-image: unset;
	}
}
</style>
