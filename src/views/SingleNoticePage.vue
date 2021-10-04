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
				<div class="row pt-md-5 pb-md-2 pt-3 pb-2">
					<div class="col-12">
						<Badges :badgeName="badgeName" />
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						<div class="notice__wrapper p-2 p-md-4">
							<h1>notice title will be here</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut
								quas obcaecati quo iure sapiente, rem dolorum eos repellat ullam
								quia qui? Deleniti similique at minus voluptatibus ut suscipit
								nihil, autem quisquam officia aperiam sunt quam voluptatum expedita
								accusantium minima, quo dolorem praesentium assumenda eos mollitia
								ipsam voluptas aliquid dignissimos libero! Quae voluptatibus
								veritatis distinctio porro. Alias quisquam sunt, ullam tenetur sit
								aut totam, repellat quae ipsam molestias soluta obcaecati velit
								saepe voluptas, repudiandae nesciunt nostrum molestiae illo minima
								dicta aperiam. Deleniti in, ullam consectetur, alias quasi cumque
								quam natus possimus eligendi ex tempore molestiae voluptatum totam
								rem officia! Deserunt?
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut
								quas obcaecati quo iure sapiente, rem dolorum eos repellat ullam
								quia qui? Deleniti similique at minus voluptatibus ut suscipit
								nihil, autem quisquam officia aperiam sunt quam voluptatum expedita
								accusantium minima, quo dolorem praesentium assumenda eos mollitia
								ipsam voluptas aliquid dignissimos libero! Quae voluptatibus
								veritatis distinctio porro. Alias quisquam sunt, ullam tenetur sit
								aut totam, repellat quae ipsam molestias soluta obcaecati velit
								saepe voluptas, repudiandae nesciunt nostrum molestiae illo minima
								dicta aperiam. Deleniti in, ullam consectetur, alias quasi cumque
								quam natus possimus eligendi
							</p>
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
import Badges from '@/components/common/Badges.vue';
export default defineComponent({
	name: 'SingleNoticePage',
	components: {
		NavBar,
		Header,
		NavbarMenu,
		PageHeader,
		Breadcrumb,
		Footer,
		FooterNavigation,
		ProgramsCard,
		Badges,
	},
	data() {
		return {
			title: 'this is single notice title',
			items: [
				{ name: 'home', id: 1 },
				{ name: 'programs', id: 2 },
			],
			badgeName: 'date : 01-01-2021',
		};
	},
});
</script>

<style scoped lang="scss">
.page_main_body {
	background-color: #d7e0e5;
	min-height: 500px;
}

.notice__wrapper {
	min-height: 500px;
	background-color: #bdcbd4;
	h1 {
		color: red;
		text-decoration: underline;
		text-align: center;
		text-transform: uppercase;
		font-size: 35px;
		font-weight: bold;
		margin-bottom: 15px;
	}
	p {
		text-align: justify;
		font-size: 14px;
		color: #000;
	}
}
</style>
