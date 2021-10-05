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
				<div class="programs_content_wrapper p-2 p-md-5">
					<div class="row">
						<div class="col-12 col-md-6 mb-4">
							<div class="program_details">
								<h1>Master of Arts (MA) in Film and Media Production</h1>
								<div class="marks_n_credit d-flex flex-column">
									<span
										class="credit d-flex justify-content-between align-items-center"
									>
										<span class="title">total credit</span>
										<span class="number">2400</span>
									</span>
									<span
										class="marks d-flex justify-content-between align-items-center"
									>
										<span class="title">total marks</span>
										<span class="number">2500</span>
									</span>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-6 mb-4">
							<div class="program__image order-0">
								<img
									src="https://via.placeholder.com/500x300"
									class="img-fluid"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div class="row mb-4">
						<div class="col-12">
							<div class="program_text">
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
									autem tenetur, nam eligendi sunt qui, voluptate impedit, dolorem
									dignissimos libero commodi at id nihil provident delectus
									deserunt aliquam eveniet magni fuga! Eligendi, officia possimus!
									Tempore quaerat, architecto modi magnam doloremque cum, iure
									nemo iusto voluptatum expedita hic molestias doloribus debitis.
									Id libero officiis omnis voluptates magnam culpa magni fuga
									fugiat molestiae veniam corporis sed, praesentium ut iusto,
									necessitatibus aliquam doloribus impedit perferendis sequi.
									Possimus fuga tempora hic, quibusdam officia accusantium,
									placeat explicabo ab quo odit velit perspiciatis, repellendus
									pariatur! Facere cum eligendi sapiente excepturi a quam commodi
									distinctio quae nesciunt?
								</p>
							</div>
						</div>
					</div>

					<!-- program table  -->
					<div class="row">
						<div class="col-12 col-lg-6 mb-4">
							<div class="table__content">
								<TableComponent />
							</div>
						</div>
						<div class="col-12 col-lg-6 mb-4">
							<div class="table__content">
								<TableComponent />
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-12">
							<SemesterTableComponent />
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
import TableComponent from '@/components/TableComponent.vue';
import SemesterTableComponent from '@/components/SemesterTableComponent.vue';

export default defineComponent({
	name: 'ProgramSinglePage',
	components: {
		NavBar,
		Header,
		NavbarMenu,
		PageHeader,
		Breadcrumb,
		Footer,
		FooterNavigation,
		ProgramsCard,
		TableComponent,
		SemesterTableComponent,
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
.programs_content_wrapper {
	background-color: #f2f2f2;
}
.program_details {
	h1 {
		font-size: 35px;
		font-weight: bold;
		color: #c2272d;
		text-transform: capitalize;
		margin-bottom: 25px;
	}
}
.marks_n_credit {
	background-color: #fe0000;
	border: 2px solid #b3b3b3;
	width: 250px;
	border-radius: 15px;
	position: relative;
	&:after {
		content: '';
		background-color: #fff;
		width: 2px;
		height: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 60%;
	}
	span {
		font-size: 18px;
		color: #e6e7e9;
		font-weight: bold;
		text-transform: capitalize;
		padding: 5px 10px;
	}
}
.program__image {
	display: block;
	width: 100%;
	height: auto;
	img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
	}
}
.program_text {
	p {
		color: #000;
		font-size: 16px;
	}
}
</style>
