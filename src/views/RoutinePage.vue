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
				<div class="row">
					<div class="col-12">
						<div class="result__wrapper p-2 p-md-4">
							<ul class="nav nav-pills nav-fill">
								<li class="nav-item">
									<a class="nav-link" aria-current="page" href="#">program</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">program</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">program</a>
								</li>
								<li class="nav-item active">
									<a class="nav-link ">show</a>
								</li>
							</ul>
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
	name: 'RoutinePage',
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
			title: 'Routine',
			items: [
				{ name: 'home', id: 1 },
				{ name: 'academy', id: 2 },
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

.result__wrapper {
	min-height: 500px;
	background-color: #bdcbd4;
	ul {
		li {
			margin: 0px 15px;
			border: 20px solid red;
			border-radius: 4px;
			&.active {
				border-radius: 7px;
				a {
					background-color: red;
					color: #fff;
					border-radius: 0;
					cursor: pointer;
				}
			}
			a {
				text-transform: uppercase;
				font-size: 14px;
				font-weight: bold;
				background-color: #bdcbd4;
				color: #000;
			}
		}
	}
}
</style>
