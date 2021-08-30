<template>
	<div class=" bg-white pb-5">
		<footer class="index_footer">
			<div class="footer_map">
				<h3>View all</h3>

				<p></p>

				<div class="link">
					<a href="">title there</a>
				</div>
			</div>

			<footer id="footer">
				<div>
					<div class="copyright">
						<p>© DU 2021</p>
					</div>

					<div class="social_links">
						<a href="" class="facebook" target="_blank">
							<i class="fab fa-facebook"></i>
						</a>
						<a href="" class="instagram" target="_blank">
							<i class="fab fa-instagram"></i>
						</a>
						<a href="" class="youtube" target="_blank">
							<i class="fab fa-youtube"></i>
						</a>
					</div>

					<div class="jis">
						<p>
							Site by
							<a href="" target="_blank">Codeworks Bangladesh</a>
						</p>
					</div>
				</div>
			</footer>
		</footer>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Footer',
	setup() {},
});
</script>

<style lang="scss" scoped>
.index_footer {
	padding: 0 0;
	background: #303896;
	border-radius: 60px 60px 0 0;
	position: relative;
	z-index: 1;
}
.social_links a {
	margin: 0px 10px;
}
.social_links a.facebook i {
	color: #fff;
	font-size: 30px;
}
.social_links a.instagram i {
	color: #fff;
	font-size: 30px;
}
.social_links a.youtube i {
	color: #fff;
	font-size: 30px;
}

.index_footer::before {
	content: '';
	display: block;
	width: 349px;
	height: 364px;
	background: url('../assets/left_bottom_star_bg.svg') no-repeat 0 0;
	position: absolute;
	left: 0;
	bottom: 0;
}
.index_footer::after {
	content: '';
	display: block;
	width: 283px;
	height: 364px;
	background: url('../assets/left_bottom_star_bg.svg') no-repeat 0 0;
	position: absolute;
	right: 0;

	top: 0;
	-webkit-transform: rotate(180deg);
	-ms-transform: rotate(180deg);
	transform: rotate(180deg);
}

.footer_map {
	max-width: 750px;
	padding: 70px 20px 96px;
	margin: 0 auto;
	text-align: center;
}
.footer_map h3 {
	padding: 35px 0 15px;
	font-size: 30.7px;
	line-height: 1.35;
	color: #fff;
	background: url('../assets/map_white_pin.svg') no-repeat 50% 0;
}
.footer_map p {
	padding: 0 0 35px;
	font-size: 14px;
	font-weight: 300;
	line-height: 1.71;
	color: rgba(255, 255, 255, 0.7);
}
.footer_map .link a {
	display: inline-block;
	height: 60px;
	padding: 0 55px;
	font-size: 15px;
	line-height: 60px;
	font-weight: bold;
	color: #fff;
	text-decoration: none;
	text-transform: uppercase;
	-webkit-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
	box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
	border-radius: 30px;
	-webkit-animation-duration: 0.15s;
	-webkit-transition: all 0.15s linear;
	-moz-animation-duration: 0.15s;
	-moz-transition: all 0.15s linear;
	animation-duration: 0.15s;
	-o-transition: all 0.15s linear;
	transition: all 0.15s linear;
}
.footer_map .link a:hover {
	-webkit-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.6);
	box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.6);
}

footer#footer {
	width: 100%;
	padding: 0 20px;
}
footer#footer > div {
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
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	max-width: 1330px;
	padding: 24px 0 24px;
	margin: 0 auto;
	border-top: 1px solid #d7d8eb;
	position: relative;
}

.copyright {
	font-size: 18px;
	font-weight: 300;
	color: rgba(255, 255, 255, 0.7) !important;
}
@media (min-width: 240px) and (max-width: 479px) {
	/* Footer begin */
	.index_footer {
		border-radius: 30px 30px 0px 0px;
	}
	.index_footer::before,
	.index_footer::after {
		opacity: 0;
	}
	footer#footer > div {
		display: block;
		text-align: center;
	}
	.footer_map {
		padding: 50px 20px 55px;
	}
	.footer_map h3 {
		font-size: 27px;
	}
	.copyright {
		padding: 0 0 20px;
	}
	.social_links {
		padding: 0 0 20px;
		position: static;
		-webkit-transform: translate(0, 0);
		-ms-transform: translate(0, 0);
		transform: translate(0, 0);
	}
	/* Footer end */
}
</style>
