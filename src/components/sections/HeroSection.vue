<script setup>
import ImageCard from '../ImageCard.vue'
import SectionText from '../SectionText.vue'
</script>

<template>
  <section id="hero" class="p-4 min-h-screen bg-hero-bg bg-no-repeat bg-center">
    <div class=" max-w-site-w w-full mx-auto py-10">
      <div class="hero-sec-layout min-h-[85vh]">
        <ImageCard card-class=" w-[300px] h-[420px] bg-site-gold mx-auto p-1 mt-20 md:m-0 md:w-[320px] md:h-[450px] lg:w-[95%]"
        >
          <div class=" w-full h-[90%] bg-orange-950 mx-auto"></div>
        </ImageCard>
        
        <SectionText text-class="text-white p-2 space-y-4 mt-4 md:space-y-6 lg:col-span-2 lg:pl-10">
          <template #label>
            <p class="text-site-gold text-2xl font-titleFont md:text-4xl lg:text-[2.75rem]">Portfolio</p>
          </template>
          <template #name>
            <p class=" text-4xl font-headerFont pr-10 md:text-6xl md:pr-0 lg:text-7xl">Isaac Akpoborie Ovie</p>
          </template>
          <template #description>
            <p class="md:text-xl">
              Design Consultant - <span class=" font-light">Redack</span>
              <br> Art Director - <span class="font-light">Shefa-Ink Consulting</span> 
            </p>
          </template>
        </SectionText>
      </div>
    </div>
  </section>
</template>
