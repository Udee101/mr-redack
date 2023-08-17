<script setup>
import { computed } from 'vue';
import logoImg from '../../assets/images/logo.svg'

const getCurrentYear = computed(() => {
  return new Date().getFullYear()
})
</script>

<template>
  <div class="w-full p-4 flex flex-col place-items-center gap-2 bg-site-black absolute bottom-0">
    <img :src="logoImg" alt="" class="w-24">
    <p class="text-white text-sm font-bold uppercase">Copyright {{ getCurrentYear }}</p>
  </div>
</template>
