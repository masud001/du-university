<template>
	<div class="index_news">
		<div>
			<div class="inset">
				<h3>Be aware!</h3>
				<p>
					Stay informed of the latest updates, discounts and campaigns first.
				</p>
				<div class="link">
					<a href="">NEWS & UPDATES</a>
				</div>
			</div>
			<div class="two_news">
				<article>
					<div class="image">
						<img src="https://picsum.photos/id/1020/300/450" alt="" />
					</div>
					<h3>Dəniz Mall fəaliyyətini bərpa edir!</h3>
					<time>06 İyun, 2021</time>

					<a href="" class="full_link"></a>
				</article>
				<article>
					<div class="image">
						<img src="https://picsum.photos/id/1083/300/450" alt="" />
					</div>
					<h3>Yeni ləzzət çaları Zafferano tezliklə Dəniz Mall-da!</h3>
					<time>05 İyun, 2021</time>

					<a href="" class="full_link"></a>
				</article>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	setup() {},
});
</script>

<style lang="scss" scoped>
.index_news {
	background: #fff url('../assets/left_gray_star_bg.svg') no-repeat 0 -350px;
	padding: 100px 0;
	position: relative;
}
.index_news > div {
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
	max-width: 1170px;
	margin: 0 auto;
	padding: 0 20px;
}
.index_news .inset {
	width: calc(100% - 600px);
}
.index_news .inset h3 {
	padding: 0 0 40px;
	font-size: 30px;
	line-height: 1.35;
}
.index_news .inset p {
	max-width: 380px;
	padding: 0 0 50px;
	font-size: 14px;
	font-weight: 300;
	line-height: 1.71;
	color: rgba(0, 0, 0, 0.7);
}
.index_news .inset .link a {
	display: inline-block;
	padding: 0 130px 0 0;
	font-size: 15px;
	font-weight: bold;
	text-decoration: none;
	color: #000;
	text-transform: uppercase;
	background: url('../assets/gray_right_arrow.svg') no-repeat 100% 60%;
	-webkit-animation-duration: 0.15s;
	-webkit-transition: all 0.15s linear;
	-moz-animation-duration: 0.15s;
	-moz-transition: all 0.15s linear;
	animation-duration: 0.15s;
	-o-transition: all 0.15s linear;
	transition: all 0.15s linear;
}
.index_news .inset .link a:hover {
	padding: 0 135px 0 0;
}

.two_news {
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
	width: 560px;
}
.two_news article {
	width: 260px;
	position: relative;
}

.two_news .image {
	margin: 0 0 30px;
	overflow: hidden;
	font-size: 0;
	border-radius: 20px;
	-webkit-box-shadow: 0 30px 20px 0 rgba(0, 0, 0, 0.17);
	box-shadow: 0 30px 20px 0 rgba(0, 0, 0, 0.17);
}
.two_news .image img {
	display: block;
	width: 100%;
	-webkit-animation-duration: 0.15s;
	-webkit-transition: all 0.15s linear;
	-moz-animation-duration: 0.15s;
	-moz-transition: all 0.15s linear;
	animation-duration: 0.15s;
	-o-transition: all 0.15s linear;
	transition: all 0.15s linear;
}
.two_news h3 {
	font-size: 19px;
	line-height: 1.42;
	-webkit-animation-duration: 0.15s;
	-webkit-transition: all 0.15s linear;
	-moz-animation-duration: 0.15s;
	-moz-transition: all 0.15s linear;
	animation-duration: 0.15s;
	-o-transition: all 0.15s linear;
	transition: all 0.15s linear;
}
.two_news h3 a {
	color: #000;
	text-decoration: none;
}

@media (min-width: 240px) and (max-width: 479px) {
	/* Index news begin */
	.index_news {
		padding: 20px 0 50px;
		background: #fff;
	}
	.index_news > div {
		display: block;
	}
	.index_news .inset {
		width: 100%;
		padding: 0 0 20px;
	}
	.index_news .inset h3 {
		padding: 0 0 30px;
		font-size: 24px;
	}
	.index_news .inset p {
		max-width: 100%;
	}
	.two_news {
		width: 100%;
	}
	.two_news article {
		width: calc(50% - 15px);
		padding: 0 0 0px;
	}
	.two_news .image {
		margin: 0 0 15px;
	}
	.two_news .image img {
		width: 100%;
	}
	.two_news h3 {
		font-size: 16px;
	}
	/* Index news end */
}

@media (min-width: 480px) and (max-width: 767px) {
	/* Index news begin */
	.index_news > div {
		display: block;
	}
	.index_news .inset {
		width: 100%;
		padding: 0 0 20px;
	}
	.index_news .inset p {
		max-width: 100%;
	}
	.two_news {
		width: 100%;
	}
	.two_news article {
		width: calc(50% - 15px);
		padding: 0 0 0px;
	}
	.two_news .image {
		margin: 0 0 15px;
	}
	.two_news .image img {
		width: 100%;
	}
	/* Index news end */
}
@media (min-width: 768px) and (max-width: 1023px) {
	/* Index news begin */
	.index_news .inset {
		width: calc(100% - 440px);
	}
	.index_news .inset p {
		max-width: 100%;
	}
	.two_news {
		width: 400px;
	}
	.two_news article {
		width: calc(50% - 10px);
		padding: 0 0 30px;
	}
	.two_news .image {
		margin: 0 0 15px;
	}
	/* Index news end */
}
</style>
