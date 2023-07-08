<script setup>
  defineProps({
    imgSrc: String,
    name: String,
    categoryId: Number 
  })
</script>

<template>
  <div class="relative grid grid-cols-1 place-items-center lg:grid-cols-3 lg:items-center lg:place-items-start">
    <img :src="imgSrc" alt="category image" class=" col-span-2" />
    <router-link 
      :to="{ name: 'categories.id', params: { id: categoryId } }"
      class="transition ease-in-out duration-300 max-w-[240px] text-2xl text-center font-semibold text-white absolute bottom-2 md:text-[1.7rem] lg:relative lg:text-left lg:-ml-16 hover:text-site-gold hover:scale-105"
    >
      {{ name }}
    </router-link>
  </div>
</template>
