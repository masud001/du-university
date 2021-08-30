<template>
	<div>
		<nav class="navbar navbar-light bg-color px-4 py-3 fixed-bottom">
			<div class="container-fluid">
				<div class="d-flex justify-content-between w-100">
					<div class="d-flex">
						<div class="navbar__search_button me-3">
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
	background-color: #bbbac0;
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
.navbar__menu_toggle_button {
	i {
		cursor: pointer;
	}
}

.Footer__dropdown__menu-enter-active,
.Footer__dropdown__menu-leave-active {
	transition: all 1s;
}
.Footer__dropdown__menu-enter,
.Footer__dropdown__menu-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}
</style>
