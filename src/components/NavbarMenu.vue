<template>
	<div class="navbar_menu_wrapper">
		<div class="container-fluid px-5">
			<div class="row">
				<div class="col-md-12">
					<div class="navbar_menu">
						<ul class="navbar_menu_items">
							<li><a v-on:click="toggle()" href="#">Home </a></li>
							<li><a v-on:click="toggle()" href="#">About</a></li>
							<li><a v-on:click="toggle()" href="#">Academic </a></li>
							<li><a v-on:click="toggle()" href="#">Research and Publication </a></li>
							<li><a href="#">Activities/Miscellaneous</a></li>
							<li><a href="#">Scholarship/Financial Aids</a></li>
							<li><a href="#">Resources </a></li>
							<li><a href="#">Gallery/Archive </a></li>
							<li><a href="#">Achievement</a></li>
							<li><a href="#">Alumni</a></li>
							<li><a href="#">Links</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
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
	name: 'NavbarMenu',
	setup() {},
	data() {
		return {
			onOff: false,
			isShow: false,
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
	margin-top: 8px;
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
