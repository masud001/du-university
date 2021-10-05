<template>
	<div class="stuff_card__wrapper">
		<div class="stuff_card_area  d-flex ">
			<div class="stuff__image me-3">
				<img src="https://i.pravatar.cc/300" alt="stuff" class="img-fluid" />
				<span class="stuff_link">
					<a href=""><i class="fas fa-link"></i></a>
				</span>
			</div>
			<div class="stuff_about">
				<h1 class="stuff_name">Mr. jone deo</h1>
				<p class="stuff_description">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam nisi voluptas
					quia.
				</p>
				<div class="stuff_know__more__btn d-flex justify-content-around">
					<button>button</button>
					<button>learn more</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'StuffCard',
	setup() {},
});
</script>

<style lang="scss" scoped>
.stuff_card__wrapper {
	background-color: #fff;
	padding: 25px;
	border-radius: 35px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
.stuff_card_area {
}
.stuff__image {
	border-radius: 35px;
	position: relative;
	width: calc(100% - 0px);
	height: 150px;
	img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
		border-radius: 35px;
		box-shadow: rgba(225, 0, 0, 0.2) 0px 13px 27px -5px, rgba(51, 19, 19, 0.2) 0px 8px 16px -8px;
	}
	.stuff_link {
		i {
			background-color: #fe394d;
			color: #fff;
			width: 35px;
			height: 35px;
			border-radius: 50%;
			text-align: center;
			line-height: 35px;
			position: absolute;
			right: 0;
			bottom: 0;
			box-shadow: rgba(225, 0, 0, 0.2) 0px 13px 27px -5px,
				rgba(225, 0, 0, 0.2) 0px 8px 16px -8px;
		}
	}
}
.stuff_about {
	position: relative;

	.stuff_know__more__btn {
		position: absolute;
		width: 100%;
		bottom: -40px;
		button {
			padding: 7px 18px;
			text-transform: capitalize;
			font-size: 15px;
			font-weight: bold;
			border: none;
			border-radius: 20px;
			color: #000;
			box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
			&:hover {
				background-color: #fe394d;
				color: #fff;
			}
		}
	}
}
.stuff_name {
	font-size: 25px;
	text-transform: capitalize;
	font-weight: bold;
	color: #000;
}
.stuff_description {
	font-size: 16px;
	font-weight: normal;
	color: #9fa0a2;
}

/* Extra small devices (phones, 600px and down) */

@media only screen and (min-width: 320px) {
	.stuff_card__wrapper {
		padding: 10px;
	}
	.stuff_about {
		.stuff_know__more__btn {
			bottom: -22px;
			button {
				padding: 6px 13px;
				font-size: 11px;
				border-radius: 20px;
			}
		}
	}
}

@media only screen and (min-width: 576px) {
	.stuff__image {
		height: 180px;
	}
	.stuff_about {
		.stuff_know__more__btn {
			bottom: -29px;
			button {
				padding: 10px 18px;
				font-size: 14px;
			}
		}
	}
}
@media only screen and (min-width: 768px) {
	.stuff__image {
		height: 200px;
	}
	.stuff_about {
		.stuff_know__more__btn {
			bottom: -29px;
			button {
				padding: 10px 18px;
				font-size: 14px;
			}
		}
	}
}
@media only screen and (min-width: 992px) {
	.stuff_card__wrapper {
		padding: 25px;
	}
	.stuff_about {
		.stuff_know__more__btn {
			bottom: -40px;
			button {
				padding: 10px 12px;
				font-size: 14px;
			}
		}
	}
	.stuff__image {
		height: 150px;
	}
}
@media only screen and (min-width: 1086px) {
	.stuff_about {
		.stuff_know__more__btn {
			bottom: -40px;
			button {
				padding: 10px 15px;
				font-size: 14px;
			}
		}
	}
}
</style>
