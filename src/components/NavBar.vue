<template>
	<div class="navbar__top">
		<nav class="navbar navbar-light bg-color px-5">
			<div class="container-fluid">
				<a class="navbar-brand text-white text-uppercase" href="#">university of dhaka</a>
				<div class="d-flex">
					<ul class="navbar__top_menu">
						<li
							@mouseover="listOne = true"
							@mouseleave="listOne = false"
							class="position-relative "
						>
							<a href="#">links</a>
							<transition name="dropdown__menu">
								<div
									class="position-absolute navbar__top_menu_dropdown p-3"
									v-if="listOne"
									@click="listOne = false"
								>
									<ul v-show="showByIndex === i">
										<li><a href="#">Home </a></li>
										<li><a href="#">About</a></li>
										<li><a href="#">Academic </a></li>
										<li><a href="#">Research and Publication </a></li>
									</ul>
								</div>
							</transition>
						</li>
						<li
							@mouseover="listTwo = true"
							@mouseleave="listTwo = false"
							class="position-relative "
						>
							<a href="#">notice</a>

							<transition name="dropdown__menu">
								<div
									class="position-absolute navbar__top_menu_dropdown p-3"
									v-if="listTwo"
									@click="listTwo = false"
								>
									<ul v-show="showByIndex === i">
										<li><a href="#">Home </a></li>
										<li><a href="#">About</a></li>
										<li><a href="#">Academic </a></li>
										<li><a href="#">Research and Publication </a></li>
									</ul>
								</div>
							</transition>
						</li>
						<li><a href="#">academy</a></li>
						<li><a href="#">about</a></li>
						<li><a href="#">team</a></li>
					</ul>
					<div class="navbar__search_input">
						<input v-if="isShow" type="text" placeholder="Search..." />
					</div>
					<div class="navbar__search_button">
						<i
							v-on:click="searchToggle()"
							:class="{ active: isShow }"
							class="fas fa-search"
						></i>
					</div>

					<!-- currently commented for requirement  -->
					<div v-on:click="toggle()" class="navbar__menu_toggle_button">
						<i class="fas fa-list-ul text-white"></i>
					</div>
				</div>
			</div>
		</nav>
		<transition name="dropdown__menu" mode="out-in">
			<div key="1" class="" v-if="onOff">
				<DropdownMenu />
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DropdownMenu from './DropdownMenu.vue';

export default defineComponent({
	components: { DropdownMenu },
	name: 'NavBar',
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
		searchToggle() {
			return (this.isShow = !this.isShow);
		},
	},
});
</script>

<style scoped lang="scss">
.navbar__top {
	position: relative;
}
.navbar__top_menu {
	margin: 0 25px 0 0;
	padding: 0;
	list-style: none;
	li {
		display: inline;

		a {
			display: inline-block;
			padding: 2px 10px;
			color: #fff;
			text-transform: capitalize;
			font-size: 12px;
			text-decoration: none;
			font-family: Arial, Helvetica, sans-serif;
			&:hover {
				color: red;
			}
		}
	}
}
.navbar__top_menu_dropdown {
	z-index: 99;
	width: 300px;
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
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		li {
			display: block;
			a {
				display: block;
				color: #fff;
				text-transform: capitalize;
				font-size: 12px;
				font-family: Arial, Helvetica, sans-serif;
				text-decoration: none;
				padding: 5px 3px;
				&:hover {
					color: red;
				}
			}
		}
	}
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
.bg-color {
	background: #333333;
}
.navbar-brand {
	font-size: 14px;
	font-family: 'Goudy' !important;
	letter-spacing: 3px;
}

.navbar__menu_toggle_button {
	cursor: pointer;
	display: none;
	i {
		font-size: 20px;
	}
}
.navbar__menu_toggle_button i:hover {
	color: red !important;
	transition: all 0.4s;
}
.navbar__search_button i:hover {
	color: red !important;
	transition: all 0.4s;
}
.navbar__search_button {
	margin-right: 0px;
	i {
		position: relative;
		z-index: 12;
		color: #fff !important;
		right: 5px;
		cursor: pointer;
	}
	i.active {
		color: #000 !important;
	}
}
.navbar__search_input {
	position: relative;
	input {
		&:focus {
			border: 0;
			outline: 0;
		}
		width: 200px;
		border: none;
		border-radius: 15px;
		padding: 5px 25px 5px 10px;
		position: absolute;
		right: 100%;
		transform: translate(8%, -50%);
		top: 50%;
	}
}

// Dropdown Menu Animation

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

@media screen and (max-width: 920px) {
	.navbar__top_menu {
		display: none;
	}
}

@media screen and (max-width: 1350px) {
	.navbar__search_button {
		margin-right: 25px;
	}
}
@media screen and (max-width: 1080px) {
	.navbar__search_button {
		margin-right: 25px;
	}
	.navbar__menu_toggle_button {
		display: block;
	}
}
</style>
