<template>
	<div class="table__wrapper">
		<div class="d-flex justify-content-between align-items-center w-100">
			<div class="text-center bg__color h-100  me-4">
				<h5 class=" text-center text-uppercase fw-bold ">1st year</h5>
				<Badges badgeName="curriculum" />
			</div>
			<div class="table-responsive w-100">
				<table class="table w-100  table-bordered text-center">
					<thead>
						<tr>
							<th class="serial text-uppercase">
								semester
							</th>
							<th class="text-uppercase">code</th>
							<th class="text-uppercase">title</th>
							<th class="text-uppercase">credit</th>
							<th class="text-uppercase">marks</th>
							<th class="text-uppercase">description</th>
							<th class="text-uppercase">readings</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="serial">01 semester</td>
							<td>code-001</td>
							<td>course title</td>
							<td>credit hour</td>
							<td>2400</td>
							<td
								type=""
								class=""
								data-bs-toggle="modal"
								data-bs-target="#exampleModal"
							>
								Open
							</td>
							<td
								type=""
								class=""
								data-bs-toggle="modal"
								data-bs-target="#exampleModal"
							>
								Open
							</td>
						</tr>
						<tr>
							<td class="serial">01 semester</td>
							<td>code-001</td>
							<td>course title</td>
							<td>credit hour</td>
							<td>2400</td>
							<td
								type=""
								class=""
								data-bs-toggle="modal"
								data-bs-target="#exampleModal"
							>
								Open
							</td>
							<td
								type=""
								class=""
								data-bs-toggle="modal"
								data-bs-target="#exampleModal"
							>
								Open
							</td>
						</tr>
						<tr>
							<td class="serial">01 semester</td>
							<td>code-001</td>
							<td>course title</td>
							<td>credit hour</td>
							<td>2400</td>
							<td
								type=""
								class=""
								data-bs-toggle="modal"
								data-bs-target="#exampleModal"
							>
								Open
							</td>
							<td
								type=""
								class=""
								data-bs-toggle="modal"
								data-bs-target="#exampleModal"
							>
								Open
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Modal -->
		<div
			class="modal fade"
			id="exampleModal"
			tabindex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div class="modal-body">
						...
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
							Close
						</button>
						<button type="button" class="btn btn-primary">Save changes</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Badges from './common/Badges.vue';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default defineComponent({
	components: { Badges },
	name: 'SemesterTableComponent',
});
</script>

<style scoped lang="scss">
.bg__color {
}
.serial {
	background-color: #ed1b24;
	color: #fff;
}
.table__wrapper {
	background-color: #cccccc;
	padding: 25px;
	border-radius: 15px;

	.table {
		background-color: #bdcbd4;
		thead {
			tr {
				margin-bottom: 10px;
			}
		}
		tbody {
			tr {
				margin-bottom: 10px;
			}
		}
	}
}
</style>
