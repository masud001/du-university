<template>
	<div class="row py-5">
		<div class="col-12">
			<div class="programs_card_wrapper">
				<!-- card header  -->
				<div
					class=" py-4 card-header bg-transparent  d-flex justify-content-between align-items-center"
				>
					<Badges :badgeName="badgeName" />
				</div>
				<!-- cadr body  -->
				<div class=" card-body py-5 ">
					<div class="row">
						<div class="col-12 col-sm-6 col-lg-4 mb-4">
							<SingleProgram />
						</div>
						<div class="col-12 col-sm-6 col-lg-4 mb-4">
							<SingleProgram />
						</div>
						<div class="col-12 col-sm-6 col-lg-4 mb-4">
							<SingleProgram />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Badges from './common/Badges.vue';
import SingleProgram from './SingleProgram.vue';

export default defineComponent({
	components: { SingleProgram, Badges },
	name: 'ProgramsCard',
	setup() {},
	props: ['badgeName'],
});
</script>

<style lang="scss" scoped>
.programs_card_wrapper {
	background-color: #cccccc;
	min-height: 300px;
	.card-header {
		border-bottom: 1px solid #d6d6d6;
	}
	.programs-title {
		color: #fff;
		background-color: #fe0000;
		font-size: 30px;
		padding: 5px 25px;
		border-radius: 10px;
	}
	.clicks-dots {
		i {
			font-size: 35px;
			color: #fff;
			cursor: pointer;
		}
	}
}
</style>
