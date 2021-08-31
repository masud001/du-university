<template>
	<div class="index_gray">
		<em class="bg">
			<span v-if="current == 0" class="student"></span>
			<span v-if="current == 1" class="teacher"></span>
		</em>
		<div>
			<div class="inner">
				<h3>Bildiklərinizi unudun, əsl əyləncə ilə burada tanış olacaqsınız!</h3>
				<p>
					Adrenalin və həzzə doyacağınız ilk ikimərtəbəli elektrokartinq FlashKart,
					ayağınızı yerdən üzəcək və sizi zirvələrə yüksəldəcək SkyPark, balacaların
					əylənərək öyrənəcəyi kiçik, rəngarəng dünya ilə Kinderland, dostlarla gülüş dolu
					anlar üçün ONTOP Bowling və sizi virtual dünyaya aparacaq 4DX texnologiyası ilə
					möhtəşəm CinemaPlus.
				</p>
				<div class="link">
					<a href="#">DAHA ƏTRAFLI</a>
				</div>

				<div class="tabs">
					<a
						v-for="(name, i) in buttons"
						:key="name"
						v-on:click="current = i"
						:class="{ active: i == current }"
						class="text-capitalize"
					>
						<strong>for {{ name }}</strong>
					</a>
				</div>
			</div>
			<div class="three_place">
				<div v-if="current == 0" class="show_me">
					<figure>
						<div class="image">
							<img src="../assets/chaixona-logo.svg" alt="" />
						</div>
						<figcaption>
							<strong>Sky Park</strong>
							<p>Beşinci mərtəbə • Əyləncə</p>
						</figcaption>
						<a href="#" class="full_link"></a>
					</figure>
					<figure>
						<div class="image">
							<img src="../assets/chaixona-logo.svg" alt="" />
						</div>
						<figcaption>
							<strong>Kinderland</strong>
							<p>Beşinci mərtəbə • Əyləncə</p>
						</figcaption>
						<a href="#" class="full_link"></a>
					</figure>
					<figure>
						<div class="image">
							<img src="../assets/chaixona-logo.svg" alt="" />
						</div>
						<figcaption>
							<strong>Happyland</strong>
							<p>Üçüncü mərtəbə • Əyləncə</p>
						</figcaption>
						<a href="#" class="full_link"></a>
					</figure>
				</div>
				<div v-if="current == 1" class="show_me">
					<figure>
						<div class="image">
							<img src="../assets/chaixona-logo.svg" alt="" />
						</div>
						<figcaption>
							<strong>main title</strong>
							<p>sun title</p>
						</figcaption>
						<a href="#" class="full_link"></a>
					</figure>
					<figure>
						<div class="image">
							<img src="../assets/chaixona-logo.svg" alt="" />
						</div>
						<figcaption>
							<strong>main title</strong>
							<p>sun title</p>
						</figcaption>
						<a href="#" class="full_link"></a>
					</figure>
					<figure>
						<div class="image">
							<img src="../assets/chaixona-logo.svg" alt="" />
						</div>
						<figcaption>
							<strong>main title</strong>
							<p>sun title</p>
						</figcaption>
						<a href="#" class="full_link"></a>
					</figure>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'StudentTeacher',
	data() {
		return {
			bgImage1: '../assets/du-students.jpg',
			bgImage2: '../assets/childs_image.png',
			current: 0,
			buttons: ['student', 'teacher'],
		};
	},
	methods: {},
	setup() {},
});
</script>

<style lang="scss" scoped>
.index_gray {
	padding: 100px 0 120px;
	background: #f1f1f1;
	position: relative;
}

.index_gray::before {
	content: '';
	display: block;
	width: 100%;
	height: 100px;
	background: url('../assets/white_bottom_mask.svg') no-repeat 50% 0%;
	background-size: 100%;
	position: absolute;
	left: 0;
	bottom: 0px;
	-webkit-transform: rotate(0deg);
	-ms-transform: rotate(0deg);
	transform: rotate(0deg);
	z-index: 1;
}
.index_gray em.bg span {
	content: '';
	width: 100%;
	height: calc(100% - 0px);
	background-repeat: no-repeat;
	background-position: 100% 100%;
	position: absolute;
	right: 0;
	top: 0;
}
.index_gray em.bg span.student {
	background-image: url('../assets/du-students.jpg');
}
.index_gray em.bg span.teacher {
	background-image: url('../assets/du-students.jpg');
}
.index_gray > div {
	width: 100%;
	max-width: 1170px;
	margin: 0 auto;
	padding: 0 20px;
	position: relative;
}
.index_gray .inner {
	max-width: 540px;
}
.index_gray .inner h3 {
	padding: 0 0 24px;
	font-size: 30px;
	line-height: 1.35;
	color: #303896;
}
.index_gray .inner p {
	max-width: 390px;
	padding: 0 0 45px;
	font-size: 14px;
	font-weight: 300;
	line-height: 1.71;
	color: rgba(48, 56, 150, 0.7);
}
.index_gray .inner .link {
	padding: 0 0 60px;
}
.index_gray .inner .link a {
	display: inline-block;
	padding: 0 70px 0 0;
	font-size: 15px;
	font-weight: bold;
	color: #303896;
	text-decoration: none;
	text-transform: uppercase;
	position: relative;
}
.index_gray .inner .link a:hover::before {
	right: -5px;
	opacity: 0.6;
}
.index_gray .inner .link a::before {
	content: '';
	display: block;
	width: 50px;
	height: 10px;
	background: url('../assets/blue_right_arrow.svg') no-repeat 50%;
	position: absolute;
	right: 0;
	top: 3px;
	background-size: contain;
	opacity: 0.4;
	-webkit-animation-duration: 0.15s;
	-webkit-transition: all 0.15s linear;
	-moz-animation-duration: 0.15s;
	-moz-transition: all 0.15s linear;
	animation-duration: 0.15s;
	-o-transition: all 0.15s linear;
	transition: all 0.15s linear;
}
.index_gray .tabs {
	font-size: 0;
}
.index_gray .tabs a {
	display: inline-block;
	height: 54px;
	padding: 0 25px;
	font-size: 17px;
	line-height: 54px;
	color: #303896;
	text-decoration: none;
	background: #fff;
	border-radius: 0 6px 6px 0;
	cursor: pointer;
}
.index_gray .tabs a:first-child {
	border-radius: 6px 0 0 6px;
}
.index_gray .tabs a.active {
	color: #fff;
	background: #303896;
}

.three_place {
	width: 648px;
	padding: 40px 0 0;
}
.three_place > div {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	-ms-flex-wrap: nowrap;
	flex-wrap: nowrap;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	-ms-flex-line-pack: stretch;
	align-content: stretch;
	-webkit-box-align: start;
	-ms-flex-align: start;
	align-items: flex-start;
}
.three_place > div.show_me {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
}
.three_place figure {
	display: inline-block;
	height: auto;
	margin: 0;
	position: relative;
}
.three_place figure:hover .image img {
	-webkit-transform: scale(1.05);
	-ms-transform: scale(1.05);
	transform: scale(1.05);
}
.three_place figure .image {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	-ms-flex-wrap: nowrap;
	flex-wrap: nowrap;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-ms-flex-line-pack: stretch;
	align-content: stretch;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	width: 196px;
	height: 196px;
	background: #fff;
	-webkit-box-shadow: inset 0 0 0 1px #e7e7e7;
	box-shadow: inset 0 0 0 1px #e7e7e7;
	border-radius: 20px;
}
.three_place figure .image img {
	max-width: calc(100% - 20px);
	max-height: calc(100% - 20px);
	-webkit-animation-duration: 0.15s;
	-webkit-transition: all 0.15s linear;
	-moz-animation-duration: 0.15s;
	-moz-transition: all 0.15s linear;
	animation-duration: 0.15s;
	-o-transition: all 0.15s linear;
	transition: all 0.15s linear;
}
.three_place figure figcaption {
	padding: 6px 0 0;
	text-align: left;
}
.three_place figure figcaption strong {
	display: block;
	padding: 0 0 8px;
	color: #4e4646;
	font-size: 18px;
}
.three_place figure figcaption p {
	font-size: 16px;
	font-weight: 300;
	color: rgba(78, 70, 70, 0.5);
}

@media (min-width: 240px) and (max-width: 479px) {
	.index_gray {
		padding: 20px 0 120px;
	}
	.index_gray::before {
		height: 40px;
	}
	.index_gray .bg {
		display: none;
	}
	.index_gray .inner h3 {
		font-size: 24px;
	}
	.three_place {
		width: 100%;
	}
	.three_place figure {
		width: calc(50vw - 24px);
	}
	.three_place figure:last-child {
		display: none;
	}
	.three_place figure .image {
		width: calc(50vw - 24px);
		height: calc(50vw - 24px);
	}
}
@media (min-width: 480px) and (max-width: 767px) {
	.index_gray {
		padding: 0 0 120px;
	}
	.index_gray .bg {
		display: none;
	}
	.three_place {
		width: 100%;
	}
	.three_place figure {
		width: calc(33.333vw - 24px);
	}
	.three_place figure .image {
		width: calc(33.333vw - 24px);
		height: calc(33.333vw - 24px);
	}
}
</style>
