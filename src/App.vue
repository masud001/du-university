<template>
	<!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
	<router-view />
</template>

<style lang="scss">
@font-face {
	font-family: 'Goudy';
	src: local('Goudy'), url('./assets/fonts/Goudy Old Style Regular.ttf') format('truetype');
}
body {
	color: #000 !important;
	font-size: 14px !important;
	font-family: 'Goudy' !important;
	background-color: #eae9ee !important;
	background-size: cover;
	min-height: 100%;
	position: relative;
}
</style>
