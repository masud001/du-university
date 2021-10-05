<template>
	<div class="table__wrapper">
		<div class=" d-flex justify-content-end mb-4">
			<Badges badgeName="curiculam" />
		</div>
		<table class="table table-bordered text-center">
			<thead>
				<tr>
					<th class="serial">
						S <br />
						L
					</th>
					<th>Name</th>
					<th>Year</th>
					<th>Download</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>01</td>
					<td>Sub Name</td>
					<td>2021</td>
					<td><a href="#">Download Link</a></td>
				</tr>
				<tr>
					<td>02</td>
					<td>Sub Name</td>
					<td>2021</td>
					<td><a href="#">Download Link</a></td>
				</tr>
				<tr>
					<td>03</td>
					<td>Sub Name</td>
					<td>2021</td>
					<td><a href="#">Download Link</a></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Badges from './common/Badges.vue';

export default defineComponent({
	components: { Badges },
	name: 'TableComponent',
});
</script>

<style scoped lang="scss">
.serial {
	background-color: red;
	color: #fff;
}
.table__wrapper {
	background-color: #e6e6e6;
	padding: 25px;
	border-radius: 15px;

	.table {
		background-color: #bdcbd4;
	}
}
</style>
