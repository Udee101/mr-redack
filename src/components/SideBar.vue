<script setup>
import { navLinks } from '../data/index.js'
</script>

<template>
  <div class="h-screen fixed left-0 w-72 sidenav text-white">
    <nav class="px-4 py-10">
      <div class="logo pr-14 py-1 mt-12 flex place-content-end">
        <router-link :to="{name: 'home'}">
          <img src="../assets/logo.svg" alt="redack's logo" class=" w-[120px]">
        </router-link>
      </div>
      <div class="mt-[17vh] flex flex-col place-items-center text-xl">
        <ul class="space-y-10">
          <li 
            v-for="navItem in navLinks" 
            :key="navItem.id"
            class="px-4 py-1 font-medium"
          >
            <a :href="navItem.href">{{ navItem.linkTitle }}</a>
          </li>

          <!-- <li class="px-4 py-1">
            <router-link :to="{name: 'portfolio.category'}">Portfolio</router-link>
          </li> -->
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.sidenav{
  background: linear-gradient(
    to bottom, 
    rgb(0, 0, 0), 
    rgb(27, 25, 25), 
    rgb(0, 0, 0),  
    rgb(15, 14, 14)
  );
}
</style>
