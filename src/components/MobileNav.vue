<script setup>
import { navLinks } from '../data/index'

const emits = defineEmits(['nav-close'])
</script>

<template>
  <div class="flex relative place-content-center items-center h-full">
    <div 
      @click="$emit('navClose')" 
      class=" cursor-pointer absolute top-0 right-0 m-4 p-3 border border-gray-200 rounded-lg text-white font-bold text-xl"
    >X</div>
    <nav>
      <ul class="space-y-10">
        <li
          @click="$emit('navClose')"
          v-for="navItem in navLinks" 
          :key="navItem.id" 
          class="nav-links text-white font-medium text-xl uppercase"
        >
          <a :href="navItem.href">{{ navItem.linkTitle }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
</style>
