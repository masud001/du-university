<template>
	<div class="navbar__top">
		<nav class="navbar navbar-light bg-color px-4">
			<div class="container-fluid">
				<a class="navbar-brand text-white text-uppercase" href="#">university of dhaka</a>
				<div class="d-flex">
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
}
.navbar__search_button {
	margin-right: 25px;
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

.dropdown__menu-enter-active,
.dropdown__menu-leave-active {
	transition: all 1s;
}
.dropdown__menu-enter,
.dropdown__menu-leave-to {
	opacity: 0;
	transform: translateY(30px);
}
</style>
