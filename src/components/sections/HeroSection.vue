<script setup>
	import ProfileImg from "../ProfileImg.vue";
	import SectionText from "../SectionText.vue";

	const heroImg =
		"https://res.cloudinary.com/dwclpat7w/image/upload/v1692246294/profile-img2_ujnmjm.svg";
</script>

<template>
	<section
		id="hero"
		class="p-4 min-h-screen bg-[url('https://res.cloudinary.com/dxiprgbcc/image/upload/v1697441836/bg_dhp3dy.svg')] bg-no-repeat bg-center"
	>
		<div class="max-w-site-w w-full mx-auto py-10">
			<div class="hero-sec-layout min-h-[85vh]">
				<div class="mt-10">
					<ProfileImg
						v-motion
						:initial="{ opacity: 0, y: 20 }"
						:enter="{ opacity: 1, y: 0 }"
						:delay="1000"
						:imgClass="'w-[80%] mx-auto md:w-[95%]'"
						:imgSrc="heroImg"
					></ProfileImg>
				</div>
				<SectionText
					text-class="text-white p-2 space-y-4 mt-4 md:space-y-6 lg:col-span-2 lg:pl-10"
				>
					<template #label>
						<p
							v-motion
							:initial="{ opacity: 0, y: 10 }"
							:enter="{ opacity: 1, y: 0 }"
							:delay="1200"
							class="text-site-gold text-2xl font-titleFont md:text-4xl lg:text-[2.75rem]"
						>
							Portfolio
						</p>
					</template>
					<template #name>
						<p
							v-motion
							:initial="{ opacity: 0, y: 10 }"
							:enter="{ opacity: 1, y: 0 }"
							:delay="1400"
							class="text-4xl font-headerFont pr-10 md:text-6xl md:pr-0 lg:text-7xl"
						>
							Isaac Akpoborie Ovie
						</p>
					</template>
					<template #description>
						<p
							v-motion
							:initial="{ opacity: 0, y: 10 }"
							:enter="{ opacity: 1, y: 0 }"
							:delay="1600"
							class="text-lg md:text-2xl tracking-wide"
						>
							<!-- Design Consultant - <span class="font-light">Redack</span> <br /> -->
							Art Director.
						</p>
					</template>
				</SectionText>
			</div>
		</div>
	</section>
</template>
