<script setup>
import { ref } from 'vue';
import MobileNav from '../components/MobileNav.vue'
import NavTransition from './NavTransition.vue';

const navOpen = ref(false)
</script>

<template>
  <div class=" topbar flex place-content-between w-full place-items-center h-16 p-6 text-white">
    <div>
      <router-link :to="{name: 'home'}">
        <img class=" w-28" src="../assets/images/logo.svg" alt="redack's logo">
      </router-link>
    </div>
    <div @click="navOpen = !navOpen" class=" cursor-pointer">
      <img src="../assets/images/menu.svg" alt="menu button">
    </div>
  </div>

  <nav-transition>
    <div v-if="navOpen" class="navbar fixed bottom-0 w-full h-[410px] bg-[#0D0B0B] z-[1]">
      <mobile-nav @nav-close="navOpen = false"></mobile-nav>
    </div>
  </nav-transition>

</template>

<style scoped>
.topbar{
  background: linear-gradient(
    to right, 
    rgb(0, 0, 0), 
    rgb(27, 25, 25), 
    rgb(0, 0, 0),  
    rgb(15, 14, 14)
  );
}
</style>
