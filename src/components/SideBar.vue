<script setup>
import {navLinks} from '../data/navLinks.js'
import NavLink from './NavLink.vue';

defineProps({
  currentRouteName: String
})
</script>

<template>
  <div class="h-screen fixed left-0 w-64 sidenav text-white">
    <nav class="px-4 py-10">
      <div class="logo pr-12 py-1 flex justify-end mt-4">
        <router-link :to="{name: 'home'}">
          <img src="../assets/images/logo.svg" alt="redack's logo" class=" w-[120px]">
        </router-link>
      </div>
      <div class="min-h-[75vh] flex flex-col justify-center items-center text-lg">
        <ul v-if="currentRouteName === 'home'" class="space-y-12">
          <NavLink 
            v-for="navItem in navLinks" 
            :key="navItem.id"
            :navItem="navItem"
          >
          </NavLink>
        </ul>
        <ul v-else>
          <li class="nav-btn">
            <a href="/#portfolio" class="flex items-center gap-2">
              <img src="../assets/images/carret.svg" alt="left carret">
            </a>
          </li>
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
