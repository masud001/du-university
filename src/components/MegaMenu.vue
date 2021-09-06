<template>
	<div class="row">
		<h6 class=" text-capitalize menu__heading"><em>Areas of Study</em></h6>

		<div class="col-12 col-md-3 col-sm-6">
			<ul class="navbar__menu">
				<li><a href="#">Home </a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Academic </a></li>
				<li><a href="#">Research and Publication </a></li>
			</ul>
		</div>
		<div class="col-12 col-md-3 col-sm-6">
			<ul class="navbar__menu">
				<li><a href="#">Activities/Miscellaneous</a></li>
				<li><a href="#">Scholarship/Financial Aids</a></li>
				<li><a href="#">Resources </a></li>
				<li><a href="#">Gallery/Archive </a></li>
			</ul>
		</div>
		<div class="col-12 col-md-3 col-sm-6">
			<ul class="navbar__menu">
				<li><a href="#">Home </a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Academic </a></li>
				<li><a href="#">Research and Publication </a></li>
			</ul>
		</div>
		<div class="col-12 col-md-3 col-sm-6">
			<ul class="navbar__menu">
				<li><a href="#">Home </a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Academic </a></li>
				<li><a href="#">Research and Publication </a></li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'MegaMenu',
	setup() {},
});
</script>

<style lang="scss" scoped>
.menu__heading {
	color: red;
}
.navbar__menu {
	margin: 0px;
	padding: 0px;
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
</style>
