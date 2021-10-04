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
						<div class="staff__wrapper p-3 p-md-4">
							<div class="row justify-content-between">
								<div class="col-md-5">
									<div class="image__area">
										<img
											src="https://via.placeholder.com/400"
											class="ing-fluid"
											alt=""
										/>
									</div>
									<div class="social__contacts text-center mt-3 mb-3">
										<a href="#">
											<img src="../assets/fb.png" alt="" class="img-fluid" />
										</a>
										<a href="#">
											<img
												src="../assets/instagram.png"
												alt=""
												class="img-fluid"
											/>
										</a>
										<a href="#">
											<img
												src="../assets/twitter.png"
												alt=""
												class="img-fluid"
											/>
										</a>
									</div>
								</div>
								<div class="col-md-6">
									<div class="content__area">
										<h1>Mr. jone deo</h1>
										<h3>department head</h3>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Voluptas aliquid incidunt officiis, officia obcaecati
											eos amet fugit aspernatur, excepturi ipsa dolorem
											dolores quo voluptatibus voluptatem esse, nam sed
											aperiam eveniet.
										</p>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Voluptas aliquid incidunt officiis, officia obcaecati
											eos amet fugit aspernatur, excepturi ipsa dolorem
											dolores quo voluptatibus voluptatem esse, nam sed
											aperiam eveniet.
										</p>
									</div>
								</div>
							</div>

							<!-- navigation bar  -->
							<div class="row pt-3 pt-md-5 pb-3">
								<div class="col-12 text-center">
									<div class="navigation__bar_area">
										<a href="#"><i class="icofont-clock-time"></i></a>
										<a href="#"><i class="icofont-camera-alt"></i></a>
										<a href="#"><i class="icofont-files-stack"></i></a>
										<a href="#"><i class="icofont-user-alt-7"></i></a>
										<a href="#"><i class="icofont-clock-time"></i></a>
										<a href="#"><i class="icofont-camera-alt"></i></a>
										<a href="#"><i class="icofont-files-stack"></i></a>
										<a href="#"><i class="icofont-user-alt-7"></i></a>
									</div>
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
export default defineComponent({
	name: 'StaffPage',
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
.staff__wrapper {
	background-color: #bdcbd4;
}
.content__area {
	h1 {
		font-size: 30px;
		text-transform: uppercase;
		font-weight: bold;
		color: red;
		text-align: center;
	}
	h3 {
		font-size: 18px;
		text-transform: uppercase;
		font-weight: bold;
		margin-bottom: 15px;
		text-align: center;
	}
	p {
		text-align: justify;
		color: #000;
		font-size: 14px;
	}
}
.image__area {
	img {
		border-radius: 10px;
	}
}
.social__contacts {
	background-color: #999999;
	border-radius: 15px;
	padding: 10px 25px;
	width: 100%;
	a {
		width: 45px;
		height: 45px;
		margin: 0px 10px;
		display: inline-block;
		img {
			width: 100%;
			height: 100%;
		}
	}
}
.navigation__bar_area {
	background-color: #fff;
	padding: 15px 25px;
	a {
		display: inline-block;
		i {
			font-size: 30px;
			color: #a8b2cb;
			margin: 10px 25px;
			display: block;
			&:hover {
				color: #5728f2;
			}
		}
	}
}
</style>
