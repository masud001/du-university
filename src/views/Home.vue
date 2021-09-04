<template>
	<div class="home">
		<NavBar />
		<Header />

		<!-- navbar-2 menu start -->
		<navbar-menu />
		<!-- navbar-2 menu end -->

		<div class="card__section">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="row">
							<div class="col-6">
								<Cards />
							</div>
							<div class="col-6">
								<Cards />
							</div>
						</div>
						<div class="row">
							<div class="col-6">
								<Cards />
							</div>
							<div class="col-6">
								<Cards />
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="row">
							<div class="col-12">
								<VideoCards />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- index section start -->
		<IndexSection />
		<!-- index section  end-->

		<!-- student and teacher section start -->
		<StudentTeacher />
		<!-- student and teacher section end -->

		<NewsIndex />

		<!-- footer start  -->
		<Footer />

		<FooterNavigation />
	</div>
</template>

<script lang="ts">
import Cards from '@/components/Cards.vue';
import Footer from '@/components/Footer.vue';
import FooterNavigation from '@/components/FooterNavigation.vue';
import Header from '@/components/Header.vue';
import IndexSection from '@/components/IndexSection.vue';
import NavBar from '@/components/NavBar.vue';
import NavbarMenu from '@/components/NavbarMenu.vue';
import NewsIndex from '@/components/NewsIndex.vue';
import StudentTeacher from '@/components/StudentTeacher.vue';
import VideoCards from '@/components/VideoCards.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Home',
	components: {
		NavBar,
		Header,
		Cards,
		VideoCards,
		IndexSection,
		StudentTeacher,
		NewsIndex,
		Footer,
		FooterNavigation,
		NavbarMenu,
	},
});
</script>

<style lang="scss" scoped>
.card__section {
	margin-top: 135px;
	margin-bottom: 100px;
}
</style>
