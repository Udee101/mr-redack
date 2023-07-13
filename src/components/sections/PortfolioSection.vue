<script setup>
import CategoryCard from '../CategoryCard.vue';
import { projectCategories } from '../../data/index.js'
</script>

<template>
  <section id="portfolio" class="bg-site-gray p-4">
    <div class=" relative max-w-site-w mx-auto min-h-screen">
      <p class=" absolute right-0 mx-2 my-10 text-site-gold text-2xl font-titleFont md:text-4xl">Portfolio</p>
      <div class="grid grid-rows-4 min-h-[95vh] gap-y-20 py-14 md:grid-cols-2 md:grid-rows-2 md:gap-x-5 md:gap-y-16">
        <CategoryCard
          v-for="pc in projectCategories"
          :key="pc.id"
          :pc="pc"
        ></CategoryCard>
      </div>
    </div>
  </section>
</template>
