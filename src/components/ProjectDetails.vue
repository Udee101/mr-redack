<script setup>
	import "@splidejs/vue-splide/css";
	import "@splidejs/vue-splide/css/sea-green";
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

	defineProps({
		categoryData: Object,
		title: String,
		index: Number,
	});

	const urlBtnClass =
		"duration-300 bg-site-gold focus:ring-2 focus:ring-white py-2 rounded-3xl px-6 text-white text-sm hover:bg-site-gold-100";

	const slideUpX1 = ref()
	useMotion(slideUpX1, {
		initial : { opacity: 0, y: 20 },
		visibleOnce: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 500,
				delay: 500
			}
		}
	})

	const slideUpX2 = ref()
	useMotion(slideUpX2, {
		initial : { opacity: 0, y: 20 },
		visibleOnce: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 500,
				delay: 700
			}
		}
	})
</script>

<template>
	<div
		class="order-1 md:-order-1 mt-20 mb-10 self-center text-white grid gap-y-4 md:my-0"
	>
		<h2
			ref="slideUpX1"
			class="font-headerFont text-2xl text-center md:text-left max-w-md md:text-4xl"
			v-html="title"
		></h2>
		<p ref="slideUpX2" class="text-center mx-auto md:text-left max-w-md md:m-0">
			{{ categoryData.descriptions[index] }}
		</p>
		<div v-if="categoryData.url" class="text-center mt-5 md:text-left">
			<a :href="categoryData.url[index]" target="_blank" :class="urlBtnClass">View</a>
		</div>
	</div>

	<div class="w-full max-w-lg h-full flex md:justify-self-end mt-8 md:m-0">
		<Splide :options="{ 
			rewind: true,
			rewindSpeed: 1200,
			interval: 2500,
			gap: '1rem',
			autoplay: true,
			pauseOnHover: true,
			speed: 400,
			easing: 'ease'
		}">
			<SplideSlide v-for="(imgSrc, i) in categoryData.images[index]" :key="i">
				<img :src="imgSrc" alt="image of portfolio projects" />
			</SplideSlide>
		</Splide>
	</div>
</template>

<style>
	.splide {
		padding: 3rem 1rem;
	}
	.splide__arrow {
		display: none;
	}
	.splide__arrow--prev {
		left: -0.5rem;
	}
	.splide__arrow--next {
		right: -0.5rem;
	}
	.splide__arrow svg {
		fill: #be8c07;
		width: 2rem;
	}
	.splide__arrow svg:hover {
		fill: #ccac53 !important;
	}
	.splide__pagination {
		z-index: 0;
	}
	.splide__pagination__page.is-active {
		background-color: #be8c07;
	}
	.splide__pagination__page:hover {
		background-color: #ccac53 !important;
	}

	@media screen and (min-width: 768px) {
		.splide {
			padding: 3rem;
		}
		.splide__arrow {
			display: flex;
		}
		.splide__pagination {
			display: none;
		}
	}
</style>
