<template>
	<div class="container-fluid overflow-hidden">
		<div class="row">
			<div class="col-12">
				<div class="index_first">
					<div>
						<div class="next_index">
							<div class="image">
								<img src="https://picsum.photos/id/1081/500/450" alt="" />
							</div>
							<div class="inner">
								<h3>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Veniam, inventore?
								</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
									eum animi nemo iste incidunt? Nisi voluptas iusto facere
									assumenda debitis at nesciunt rerum blanditiis, amet doloribus
									tempora distinctio quod rem.
								</p>
								<div class="link">
									<a href="#">explore more</a>
								</div>
							</div>
						</div>
						<div class="index_brands_grid">
							<figure>
								<div class="image">
									<img src="../assets/chaixona-logo.svg" alt="" />
								</div>
								<figcaption>
									<strong>main title</strong>
									<p>Sub • title</p>
								</figcaption>
								<a href="" class="full_link"></a>
							</figure>
							<figure>
								<div class="image">
									<img src="../assets/chaixona-logo.svg" alt="" />
								</div>
								<figcaption>
									<strong>main title</strong>
									<p>Sub • title</p>
								</figcaption>
								<a href="3" class="full_link"></a>
							</figure>
							<figure>
								<div class="image">
									<img src="../assets/chaixona-logo.svg" alt="" />
								</div>
								<figcaption>
									<strong>main title</strong>
									<p>Sub • title</p>
								</figcaption>
								<a href="3" class="full_link"></a>
							</figure>
							<figure>
								<div class="image">
									<img src="../assets/chaixona-logo.svg" alt="" />
								</div>
								<figcaption>
									<strong>main title</strong>
									<p>Sub • title</p>
								</figcaption>
								<a href="#" class="full_link"></a>
							</figure>
							<figure>
								<div class="image">
									<img src="../assets/chaixona-logo.svg" alt="" />
								</div>
								<figcaption>
									<strong>main title</strong>
									<p>Sub • title</p>
								</figcaption>
								<a href="#" class="full_link"></a>
							</figure>
							<figure>
								<div class="image">
									<img src="../assets/chaixona-logo.svg" alt="" />
								</div>
								<figcaption>
									<strong>main title</strong>
									<p>Sub • title</p>
								</figcaption>
								<a href="#" class="full_link"></a>
							</figure>
							<figure>
								<div class="image">
									<img src="../assets/chaixona-logo.svg" alt="" />
								</div>
								<figcaption>
									<strong>main title</strong>
									<p>Sub • title</p>
								</figcaption>
								<a href="#" class="full_link"></a>
							</figure>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'IndexSection',
	setup() {},
});
</script>

<style lang="scss" scoped>
.index_first {
	background-color: #eae9ee !important;
	color: #000;
	position: relative;
}

.index_first::before {
	content: '';
	display: block;
	width: 100%;
	height: 60%;
	position: absolute;
	right: 0;
	bottom: 0;
	color: #000;
}
.index_first::after {
	content: '';
	display: block;
	width: 100%;
	height: 400px;
	background: url('../assets/gray_top_mask.svg') no-repeat 50% 100%;
	background-size: 100%;
	position: absolute;
	left: 0;
	bottom: -280px;
	-webkit-transform: rotate(180deg);
	-ms-transform: rotate(180deg);
	transform: rotate(180deg);
	right: 0;
}
.index_first > div {
	max-width: 1170px;
	margin: 0 auto;
	padding: 0 20px 126px;
}
.index_first > div::after {
	content: '';
	display: block;
	height: 0;
	clear: both;
}

.next_index {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
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
	position: relative;
	z-index: 1;
}
.next_index .image {
	width: 450px;
	padding: 95px 0 0;
}
.next_index .image img {
	border-radius: 20px;
	max-width: 100%;
}
.next_index .inner {
	width: calc(100% - 550px);
	padding: 0 50px 0 0;
}
.next_index h3 {
	padding: 0 0 24px;
	font-size: 30px;
	line-height: 1.35;
	font-family: 'Goudy' !important;
	font-weight: bold;
	color: #000;
}
.next_index p {
	padding: 0 150px 45px 0;
	font-size: 16px;
	font-weight: 300;
	line-height: 1.71;
	color: rgb(95, 91, 91);
	font-family: 'Goudy' !important;
}
.next_index .link a {
	display: inline-block;
	padding: 0 70px 0 0;
	font-size: 15px;
	font-weight: bold;
	font-family: 'Goudy' !important;
	color: #000;
	text-decoration: none;
	text-transform: uppercase;
	background: url('../assets/right_white_arrow.svg') no-repeat 100% 4px;
	-webkit-animation-duration: 0.15s;
	-webkit-transition: all 0.15s linear;
	-moz-animation-duration: 0.15s;
	-moz-transition: all 0.15s linear;
	animation-duration: 0.15s;
	-o-transition: all 0.15s linear;
	transition: all 0.15s linear;
}
.next_index .link a:hover {
	padding: 0 75px 0 0;
}

.index_brands_grid {
	width: 920px;
	float: right;
	margin: -100px -135px 0 0;
	text-align: center;
	font-size: 0;
	position: relative;
	z-index: 1;
}
.index_brands_grid figure {
	display: inline-block;
	height: 300px;
	width: 200px;
	margin: 0 15px;
	vertical-align: top;
	position: relative;
}
.index_brands_grid figure:hover .image img {
	-webkit-transform: scale(1.1);
	-ms-transform: scale(1.1);
	transform: scale(1.1);
}
.index_brands_grid figure .image {
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
	width: 200px;
	height: 200px;
	background: #fff;
	border-radius: 20px;
}
.index_brands_grid figure .image img {
	max-width: calc(100% - 20px);
	max-height: calc(100% - 20px);
	background: #fff;
	-webkit-box-shadow: 0 0 0 1px #fff;
	box-shadow: 0 0 0 1px #fff;
	-webkit-animation-duration: 0.15s;
	-webkit-transition: all 0.15s linear;
	-moz-animation-duration: 0.15s;
	-moz-transition: all 0.15s linear;
	animation-duration: 0.15s;
	-o-transition: all 0.15s linear;
	transition: all 0.15s linear;
}
.index_brands_grid figure figcaption {
	padding: 6px 0 0;
	text-align: left;
	font-family: 'Goudy' !important;
}
.index_brands_grid figure figcaption strong {
	display: block;
	padding: 0 0 8px;
	color: #000;
	font-size: 18px;
	font-family: 'Goudy' !important;
	text-transform: capitalize;
}
.index_brands_grid figure figcaption p {
	font-size: 16px;
	font-weight: 300;
	color: rgb(95, 91, 91);
	font-family: 'Goudy' !important;
	text-transform: capitalize;
}

@media (min-width: 240px) and (max-width: 479px) {
	.index_brands_grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-auto-rows: minmax(min-content, max-content);
		grid-gap: 30px 20px;
		margin: 0px 0px 0 -20px;
		width: 100vw;
		padding: 0 20px;
		float: none;
	}

	.index_brands_grid figure {
		width: auto;
		height: auto;
		margin: 0;
	}
	.index_brands_grid figure + figure + figure + figure + figure + figure + figure {
		display: none;
	}
	.index_brands_grid figure .image {
		width: 100%;
		width: calc(50vw - 30px);
		height: calc(50vw - 30px);
	}
	.index_brands_grid figure figcaption strong {
		font-size: 16px;
	}
	.index_brands_grid figure figcaption p {
		font-size: 14px;
	}
	.next_index {
		display: block;
		padding: 0 0 50px;
	}
	.next_index .image {
		display: none;
		width: 100%;
		padding: 0 0 20px;
	}
	.next_index .image img {
		width: 100%;
	}
	.next_index .inner {
		width: 100%;
		padding: 0 0 20px;
	}
	.next_index h3 {
		font-size: 24px;
	}
	.next_index p {
		padding: 0 0 40px;
	}

	.index_first {
		padding: 140px 0 0;
	}
	.index_first::before {
		height: calc(100% - 100vw);
	}
	.index_first::after {
		height: 40px;
		bottom: 0;
	}
	.index_first h2 {
		text-align: center;
		padding: 0 0 40px;
		font-size: 27px;
		line-height: 1.2;
	}
	.index_first span.bg > * {
		opacity: 0;
	}
	.index_links {
		max-width: 100%;
	}
	.index_links article {
		width: 100%;
		margin: 0 0 20px;
		float: none !important;
	}
}

@media (min-width: 480px) and (max-width: 767px) {
	.index_brands_grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-auto-rows: minmax(min-content, max-content);
		grid-gap: 30px 20px;
		margin: 0px 0px 0 -20px;
		width: 100vw;
		padding: 0 20px;
		float: none;
	}

	.index_brands_grid figure {
		width: auto;
		height: auto;
		margin: 0;
	}
	.index_brands_grid figure .image {
		width: 100%;
		width: calc(50vw - 30px);
		height: calc(50vw - 30px);
	}
	.next_index {
		display: block;
		padding: 0 0 50px;
	}
	.next_index .image {
		width: 100%;
		padding: 0 0 20px;
	}
	.next_index .image img {
		width: 100%;
	}
	.next_index .inner {
		width: 100%;
		padding: 0 0 20px;
	}
	.index_first::before {
		height: calc(100% - 100vw);
	}
	.index_first h2 {
		text-align: center;
		padding: 0 0 40px;
		font-size: 36px;
		line-height: 1.3;
	}
	.index_first span.bg > * {
		opacity: 0;
	}
	.index_links {
		max-width: 100%;
	}
	.index_info {
		padding: 0 0 80px;
	}
}

@media (min-width: 768px) and (max-width: 1023px) {
	.index_brands_grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-auto-rows: minmax(min-content, max-content);
		grid-gap: 30px 20px;
		margin: 0px 0px 0 0;
		width: 100%;
	}
	.index_brands_grid figure {
		width: auto;
		height: 40vw;
		margin: 0;
	}
	.index_brands_grid figure .image {
		width: calc(33.333vw - 27px);
		height: calc(33.333vw - 27px);
	}
	.next_index {
		padding: 0 0 50px;
	}
	.next_index .image {
		width: calc(50% - 15px);
		padding: 0;
	}
	.next_index .inner {
		width: calc(50% - 15px);
	}
}

@media (min-width: 1024px) and (max-width: 1200px) {
	.index_brands_grid {
		margin: -100px 0px 0 0;
		width: 690px;
	}
}
@media (min-width: 1201px) and (max-width: 1440px) {
	.index_brands_grid {
		margin: -100px -30px 0 0;
	}
}
</style>
