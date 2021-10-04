<template>
	<div class="programme__page">
		<NavBar />
		<Header />
		<NavbarMenu />
		<PageHeader :title="title" />
		<Breadcrumb :items="items" />

		<!-- page main body start -->
		<div class="page_main_body pb-3 pt-5 px-md-5">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-2 d-none d-lg-block">
						<SidebarMenu />
					</div>
					<div class="col-12 col-lg-10">
						<AcademyContent :imgPos="imgPos" :imgUrl="imgUrl" />
					</div>
				</div>
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
import SidebarMenu from '@/components/SidebarMenu.vue';
import AcademyContent from '@/components/AcademyContent.vue';
export default defineComponent({
	name: 'OverviewPage',
	components: {
		NavBar,
		Header,
		NavbarMenu,
		PageHeader,
		Breadcrumb,
		Footer,
		FooterNavigation,
		ProgramsCard,
		SidebarMenu,
		AcademyContent,
	},
	data() {
		return {
			title: 'overview and history',
			items: [
				{ name: 'home', id: 1 },
				{ name: 'overview', id: 2 },
			],

			imgUrl: 'https://via.placeholder.com/1200x400',
			imgPos: 'img-fluid',
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
