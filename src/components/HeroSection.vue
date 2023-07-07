<script setup>
import HeroCard from './HeroCard.vue';
import HeroText from './HeroText.vue'
</script>

<template>
  <section id="hero" class="p-4 min-h-screen">
    <div class=" max-w-site-w w-full mx-auto py-10 md:translate-y-32">
      <div class="hero-sec-layout">
        <HeroCard card-class="w-[300px] h-[420px] bg-site-gold mx-auto p-1 mt-20 md:m-0 md:w-[320px] md:h-[480px] lg:w-[95%]"
        >
          <div class=" w-full h-[90%] bg-orange-950 mx-auto"></div>
        </HeroCard>
        
        <HeroText>
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
        </HeroText>
      </div>
    </div>
  </section>
</template>

<style scoped>
#hero{
  background: url(../assets/images/bg.svg) no-repeat center;
}
</style>
