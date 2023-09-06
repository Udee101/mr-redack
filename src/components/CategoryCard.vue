<script setup>
	defineProps({
		pc: Object,
	});
</script>

<template>
	<div
		v-motion
		:initial="{ opacity: 0, scale: 0.5 }"
		:visibleOnce="{ 
      opacity: 1, 
      scale: 1, 
      transition: {
        duration: 800,
      } 
    }"
		:delay="500"
		class="grid grid-flow-col place-items-center lg:self-center"
	>
    <router-link 
      :to="{ name: 'categories.id', params: { id: pc.id } }"
      class="category-card"
    >
      <img :src="pc.imgSrc" alt="category image" class="w-[60%] lg:w-[75%] mx-auto" />
      <p>{{ pc.name }}</p>
    </router-link>
  </div>
</template>
