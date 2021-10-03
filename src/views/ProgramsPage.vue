<template>
	<div class="programme__page">
		<NavBar />
		<Header />
		<NavbarMenu />
		<PageHeader :title="title" />
		<Breadcrumb :items="items" />

		<!-- page main body start -->
		<div class="page_main_body py-3 px-md-5">
			<div class="container-fluid">
				<ProgramsCard cardName="undergrad1"> </ProgramsCard>
				<ProgramsCard cardName="undergrad2"> </ProgramsCard>
			</div>
		</div>
		<!-- page main body end -->

		<!-- footer start  -->
		<Footer />
		<FooterNavigation />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';
import Header from '@/components/Header.vue';
import NavbarMenu from '@/components/NavbarMenu.vue';
import PageHeader from '@/components/PageHeader.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Footer from '@/components/Footer.vue';
import FooterNavigation from '@/components/FooterNavigation.vue';
import ProgramsCard from '@/components/ProgramsCard.vue';
export default defineComponent({
	name: 'ProgramsPage',
	components: {
		NavBar,
		Header,
		NavbarMenu,
		PageHeader,
		Breadcrumb,
		Footer,
		FooterNavigation,
		ProgramsCard,
	},
	data() {
		return {
			title: 'programs',
			items: [
				{ name: 'home', id: 1 },
				{ name: 'programs', id: 2 },
			],
		};
	},
});
</script>

<style scoped lang="scss">
.page_main_body {
	background-color: #d7e0e5;
	min-height: 500px;
}
</style>
