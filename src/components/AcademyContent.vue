<template>
	<div class="academy__content_area bg-color p-2 p-md-4">
		<div
			class="image_area "
			:class="imgPos == 'img-fluid' ? 'img-fluid' : 'pe-sm-4 pe-2 float-start'"
		>
			<img :src="imgUrl" class="rounded-3 img-fluid" alt="" />
		</div>
		<div class="academy__text_content py-3 pb-md-5">
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eveniet,
				mollitia labore rem quas iste numquam autem neque, error aspernatur consequatur,
				veniam libero est sint porro nobis blanditiis voluptate cum.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eveniet,
				mollitia labore rem quas iste numquam autem neque, error aspernatur consequatur,
				veniam libero est sint porro nobis blanditiis voluptate cum.Lorem ipsum, dolor sit
				amet consectetur adipisicing elit. Voluptatibus eveniet, mollitia labore rem quas
				iste numquam autem neque, error aspernatur consequatur, veniam libero est sint porro
				nobis blanditiis voluptate cum.Lorem ipsum, dolor sit amet consectetur adipisicing
				elit. Voluptatibus eveniet, mollitia labore rem quas iste numquam autem neque, error
				aspernatur consequatur, veniam libero est sint porro nobis blanditiis voluptate cum.
			</p>

			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eveniet,
				mollitia labore rem quas iste numquam autem neque, error aspernatur consequatur,
				veniam libero est sint porro nobis blanditiis voluptate cum.Lorem ipsum, dolor sit
				amet consectetur adipisicing elit. Voluptatibus eveniet, mollitia labore rem quas
				iste numquam autem neque, error aspernatur consequatur, veniam libero est sint porro
				nobis blanditiis voluptate cum.Lorem ipsum, dolor sit amet consectetur adipisicing
				elit. Voluptatibus eveniet, mollitia labore rem quas iste numquam autem neque, error
				aspernatur consequatur, veniam libero est sint porro nobis blanditiis voluptate
				cum.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eveniet,
				mollitia labore rem quas iste numquam autem neque, error aspernatur consequatur,
				veniam libero est sint porro nobis blanditiis voluptate cum.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eveniet,
				mollitia labore rem quas iste numquam autem neque, error aspernatur consequatur,
				veniam libero est sint porro nobis blanditiis voluptate cum.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eveniet,
				mollitia labore rem quas iste numquam autem neque, error aspernatur consequatur,
				veniam libero est sint porro nobis blanditiis voluptate cum.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eveniet,
				mollitia labore rem quas iste numquam autem neque, error aspernatur consequatur,
				veniam libero est sint porro nobis blanditiis voluptate cum.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eveniet,
				mollitia labore rem quas iste numquam autem neque, error aspernatur consequatur,
				veniam libero est sint porro nobis blanditiis voluptate cum.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eveniet,
				mollitia labore rem quas iste numquam autem neque, error aspernatur consequatur,
				veniam libero est sint porro nobis blanditiis voluptate cum.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eveniet,
				mollitia labore rem quas iste numquam autem neque, error aspernatur consequatur,
				veniam libero est sint porro nobis blanditiis voluptate cum.
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'AcademyContent',
	setup() {},
	props: ['imgUrl', 'imgPos'],
});
</script>

<style lang="scss" scoped>
.academy__content_area {
	min-height: 550px;
}
.academy__text_content {
	text-align: justify;
	p {
		margin-bottom: 0;
		font-size: 14px;
	}
}
.bg-color {
	background-color: #bdcbd4;
}
.image_area {
	height: 400px;
	img {
		height: 100%;
		width: 100%;
	}
}
</style>
