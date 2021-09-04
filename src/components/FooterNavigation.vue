<template>
	<div>
		<nav class="navbar navbar-light bg-color px-4 py-3 fixed-bottom">
			<div class="container-fluid">
				<div class="d-flex justify-content-between w-100">
					<div class="d-flex">
						<div class="navbar__home_button me-3">
							<i class="fas fa-home  text-white"></i>
						</div>
						<div class="navbar__search_button position-relative">
							<i
								v-on:click="searchToggle()"
								:class="{ active: isShow }"
								class="fas fa-search  text-white"
							></i>
							<input
								v-if="isShow"
								class="navbar__search_input"
								type="text"
								placeholder="Search..."
							/>
						</div>
					</div>
					<div v-on:click="toggle()" class="navbar__menu_toggle_button">
						<i class="fas fa-list-ul text-white"></i>
					</div>
				</div>
			</div>
		</nav>

		<transition name="Footer__dropdown__menu">
			<div key="1" class="" v-if="menuOff">
				<DropdownMenuFooter />
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DropdownMenuFooter from './DropdownMenuFooter.vue';

export default defineComponent({
	components: { DropdownMenuFooter },
	name: 'FooterNavigation',
	data() {
		return {
			menuOff: false,
			isShow: false,
		};
	},
	methods: {
		toggle() {
			console.log('is clicked', this.menuOff);
			return (this.menuOff = !this.menuOff);
		},
		searchToggle() {
			return (this.isShow = !this.isShow);
		},
	},
	setup() {},
});
</script>

<style lang="scss" scoped>
.bg-color {
	background-color: #333333;
}
.navbar__search_button i:hover {
	color: red !important;
	transition: all 0.4s;
}
.navbar__search_button {
	i {
		cursor: pointer;
	}
	i.active {
		color: #000 !important;
		position: relative;
		z-index: 12;
		top: 3px;
	}
}
.navbar__home_button i:hover {
	color: red !important;
	transition: all 0.4s;
}
.navbar__home_button {
	i {
		cursor: pointer;
		font-size: 20;
	}
}

input.navbar__search_input:focus {
	border: 0;
	outline: 0;
}
input.navbar__search_input {
	width: 200px;
	border: none;
	border-radius: 15px;
	padding: 5px 10px 5px 25px;
	position: absolute;
	transform: translate(-10%, -50%);
	top: 50%;
}
.navbar__menu_toggle_button i:hover {
	color: red !important;
	transition: all 0.4s;
}
.navbar__menu_toggle_button {
	i {
		cursor: pointer;
		font-size: 20px;
	}
}

// Dropdown Menu Animation

.Footer__dropdown__menu-enter-from {
	opacity: 0;
}
.Footer__dropdown__menu-enter-to {
	opacity: 1;
}
.Footer__dropdown__menu-enter-active {
	transition: all 0.5s ease-in;
}
.Footer__dropdown__menu-leave-from {
	opacity: 1;
}
.Footer__dropdown__menu-leave-to {
	opacity: 0;
}
.Footer__dropdown__menu-leave-active {
	transition: all 0.5s ease-in;
}
</style>
