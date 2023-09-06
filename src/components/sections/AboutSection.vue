<script setup>
	import { ref } from "vue";
	import SectionText from "../SectionText.vue";
	import { 
		PARAGRAPH_1, 
		PARAGRAPH_2, 
		PARAGRAPH_3, 
		PARAGRAPH_4, 
		PARAGRAPH_5,
		IMAGEURL_1,
		IMAGEURL_2,
		IMAGEURL_3
	} from '../../data/about'
	import ProfileImg from "../ProfileImg.vue";

	const imageClass_1 = 'hidden mx-auto md:w-[70%] md:block lg:w-[80%]';
	const imageClass_2 = 'hidden w-[60%] absolute -right-5 -bottom-10 md:block lg:-bottom-20';
	const imageClass_3 = 'w-[65%] mx-auto -rotate-[10deg] md:hidden';

	const isFullText = ref(false);

</script>

<template>
	<section id="about" class="p-4 bg-site-gray overflow-hidden">
		<div class="relative max-w-site-w mx-auto py-14 min-h-screen">
			<p class=" absolute right-0 m-2 text-site-gold text-2xl font-titleFont md:text-4xl">About</p>
			<div class="min-h-[85vh] grid gap-y-20 lg:grid-cols-2">
				<div class="mt-32 mx-auto lg:mt-40 lg:order-1">
					<div
						class="inline-grid mx-auto relative"
					>
						<ProfileImg 
							v-motion
							:initial="{ opacity: 0, x: 30 }"
							:visibleOnce="{ 
								opacity: 1, 
								x: 0,
								transition: {
									duration: 500
								}							
							}"
							:delay="900"
							:imgSrc="IMAGEURL_1"
							:imgClass="imageClass_1"
						>
						</ProfileImg>

						<ProfileImg
							v-motion
							:initial="{ opacity: 0}"
							:visibleOnce="{ 
								opacity: 1, 
								transition: {
									duration: 800
								}							
							}"
							:delay="500"
							:imgSrc="IMAGEURL_3"
							:imgClass="imageClass_3"
							class="img-mob"
						>
						</ProfileImg>

						<ProfileImg 
							v-motion
							:initial="{ opacity: 0, y: 30 }"
							:visibleOnce="{ 
								opacity: 1, 
								y: 0,
								transition: {
									duration: 500
								}
							}"
							:delay="900"
							:imgSrc="IMAGEURL_2"
							:imgClass="imageClass_2"
						>
						</ProfileImg>
					</div>
				</div>

				<SectionText
					v-motion
					:initial="{ opacity: 0, y: 30 }"
					:visibleOnce="{ 
						opacity: 1, 
						y: 0,
						transition: {
							duration: 500
						}							
					}"
					:delay="500"
					text-class="self-center text-center text-white p-4 mx-auto md:text-left md:p-0"
				>
					<template #label>
						<p
							class="text-2xl pb-2 font-headerFont md:text-3xl md:pb-4 lg:text-5xl"
						>who is Isaac?</p>
					</template>

					<template #description>
						<p class="text-base md:pb-4">
							{{ PARAGRAPH_1 }}
						</p>
						<p :class="[isFullText ? 'block' : 'hidden', 'text-base']">
							{{ PARAGRAPH_2 }}
							<br />
							{{ PARAGRAPH_3 }}
							<br /><br />
							{{ PARAGRAPH_4 }}
							<br />
							{{ PARAGRAPH_5 }}
						</p>
						<button @click="isFullText = !isFullText" class="font-bold cursor-pointer text-site-gold duration-500 hover:text-site-gold-100">
							{{ isFullText ? "Read Less..." : "Read More..." }}
						</button>
					</template>
				</SectionText>
			</div>
		</div>
	</section>
</template>

<style>
.img-mob {
	transform: rotate(-10deg) !important;
}
</style>
