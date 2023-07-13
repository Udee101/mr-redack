<script setup>
  defineProps({
    pc: Object,
    // imgSrc: String,
    // name: String,
    // categoryId: Number 
  })
</script>

<template>
  <div class="grid grid-flow-col place-items-center lg:self-center">
    <router-link 
      :to="{ name: 'categories.id', params: { id: pc.id } }"
      class="category-card"
    >
      <img :src="pc.imgSrc" alt="category image" class="w-[60%] lg:w-[75%] mx-auto" />
      <p>{{ pc.name }}</p>
    </router-link>
  </div>
</template>
