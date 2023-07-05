<script setup>
import { categoryData } from '../data/index';


const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
</script>
  
<template>
  <section class="p-4 translate-y-28">
    <div>{{ categoryData[id-1] }}</div>
  </section>
</template>

<style scoped>
</style>
