<script setup>
	import { ref } from "vue";
	import ImageCard from "../ImageCard.vue";
	import SectionText from "../SectionText.vue";

	const isFullText = ref(false);
</script>

<template>
	<section id="about" class="p-4 bg-site-gray overflow-hidden">
		<div class="relative max-w-site-w mx-auto py-14 min-h-screen">
			<p class=" absolute right-0 m-2 text-site-gold text-2xl font-titleFont md:text-4xl">About</p>
			<div class="min-h-[85vh] grid grid-cols-1 gap-y-20 items-center lg:grid-cols-2">
				<div class="relative mx-auto max-w-lg md:w-full md:flex md:place-items-center mt-20 md:min-h-[400px] lg:order-1 lg:m-0 lg:-ml-4">
					<ImageCard
						card-class="-rotate-[10deg] w-[250px] h-[280px] bg-site-gold p-1 md:w-[280px] h-[380px] md:absolute md:top-0 md:left-28 lg:relative lg:w-[350px] lg:h-[400px]"
					>
						<div class="w-full h-[90%] bg-orange-950 mx-auto"></div>
					</ImageCard>

					<ImageCard
						card-class="hidden rotate-[17deg] w-[180px] h-[260px] bg-site-gold p-1 mt-20 md:block md:absolute md:top-28 md:right-12 lg:relative lg:right-5 lg:w-[250px]"
					>
						<div class="w-full h-[90%] bg-orange-950 mx-auto"></div>
					</ImageCard>
				</div>

				<SectionText text-class="text-center text-white p-4 mx-auto md:text-left md:p-0">
					<template #label>
						<p class="text-2xl pb-2 font-headerFont md:text-3xl md:pb-4 lg:text-5xl">who is Isaac?</p>
					</template>

					<template #description>
						<p class="text-base md:pb-4">
							Isaac Akpoborie is a highly motivated designer and brand
							consultant driven by a passion for perfection. He possesses
							exceptional mental strength and resilience, which he applies to
							tackle briefs and provide innovative design solutions. In addition
							to his love for graphic design, Isaac is also an avid photographer
							and video editor.
						</p>
						<p :class="[isFullText ? 'block' : 'hidden', 'text-base']">
							Isaac has a wealth of experience in creating and deploying design
							processes for SMEs across the globe. He began his professional
							career as a freelance Brand Identity Designer in 2018 and later
							worked as a Junior Designer at Shefa-Ink Marketing Agency in Ajao
							Estate in 2020.
							<br />
							At Shefa-Ink, Isaac honed his design skills while working on
							various projects for renowned brands such as Makari De Suisse,
							Adopt, Dr. Teals, Perfect Trust, Somma, CeraVe, La Roche-Posay,
							and L'Oréal. His scope of service included Social Media Designs,
							OOH Advertising Designs, Activation Podium Designs & Execution,
							Editorial Designs, Photography Direction, UI/UX, and Video
							Editing. In early 2023, Isaac was promoted to the position of Art
							Director at Shefa-Ink Marketing, where he supervised all of these
							brands' designs.
							<br /><br />
							In addition to his professional work, Isaac is also the Founder
							and Product Design Head at Redack. He has successfully completed
							over 5,000 marketing materials, brand guidelines, and illustrative
							projects for various brands across different industries, including
							cosmetics and retail, tech, pharmaceutical, agricultural, legal,
							and advertising. He has also worked with manufacturing industries
							to execute activation materials and podiums.
							<br />
							Isaac's passion for design and his commitment to excellence make
							him a valuable asset to any brand seeking to enhance its visual
							identity and marketing materials. His extensive experience and
							expertise in design make him a reliable partner for businesses of
							all sizes and industries.
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
