<script setup>
import { navLinks } from '../data/index.js'
</script>

<template>
  <div class="h-screen fixed left-0 w-64 sidenav text-white">
    <nav class="px-4 py-10">
      <div class="logo pr-10 py-1 mt-4 flex place-content-end">
        <router-link :to="{name: 'home'}">
          <img src="../assets/images/logo.svg" alt="redack's logo" class=" w-[120px]">
        </router-link>
      </div>
      <div class="mt-[17vh] flex flex-col place-items-center text-lg">
        <ul class="space-y-10">
          <li 
            v-for="navItem in navLinks" 
            :key="navItem.id"
            class="px-4 py-1 font-medium"
          >
            <button class="uppercase transition ease-in-out duration-300 hover:text-[#BE8C07] hover:scale-105">
              <a :href="navItem.href">{{ navItem.linkTitle }}</a>
            </button>
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
