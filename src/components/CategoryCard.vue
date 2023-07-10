<script setup>
  defineProps({
    imgSrc: String,
    name: String,
    categoryId: Number 
  })
</script>

<template>
  <div class="grid grid-flow-col place-items-center lg:self-center">
    <router-link 
      :to="{ name: 'categories.id', params: { id: categoryId } }"
      class="category-card"
    >
      <img :src="imgSrc" alt="category image" class="w-[60%] lg:w-[75%] mx-auto" />
      <p>{{ name }}</p>
    </router-link>
  </div>
</template>
