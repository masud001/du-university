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
						<div class="all_staff__wrapper p-3 p-md-4">
							<div class="row justify-content-between">
								<div class="col-12 col-lg-6 py-4">
									<StuffCard />
								</div>
								<div class="col-12 col-lg-6 py-4">
									<StuffCard />
								</div>
								<div class="col-12 col-lg-6 py-4">
									<StuffCard />
								</div>
								<div class="col-12 col-lg-6 py-4">
									<StuffCard />
								</div>
							</div>
						</div>
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
import StuffCard from '@/components/StuffCard.vue';
export default defineComponent({
	name: 'AllStuffPage',
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
		StuffCard,
	},
	data() {
		return {
			title: 'staff',
			items: [
				{ name: 'home', id: 1 },
				{ name: 'academic', id: 2 },
			],
			imgPos: 'float-start',
			imgUrl: 'https://via.placeholder.com/400',
		};
	},
});
</script>

<style scoped lang="scss">
.page_main_body {
	background-color: #d7e0e5;
	min-height: 500px;
}
.all_staff__wrapper {
	background-color: #e6e6ee;
}
</style>
