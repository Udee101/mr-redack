<script setup>
import CategoryCard from './CategoryCard.vue';
import { projectCategories } from '../data/index.js'
</script>

<template>
  <section id="portfolio" class=" bg-site-gray py-10 relative">
    <p class=" absolute right-0 m-4 text-site-gold text-2xl font-titleFont md:text-4xl">Portfolio</p>
    <div class="px-4 max-w-site-w mx-auto">
      <div class="grid grid-col-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 md:gap-5">
        <CategoryCard
          v-for="pc in projectCategories"
          :key="pc.id"
          :categoryId="pc.id"
          :imgSrc="pc.imgSrc"
          :name="pc.name"
        ></CategoryCard>
      </div>
    </div>
  </section>
</template>
