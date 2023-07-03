<script setup>
import { ref } from 'vue';
import MobileNav from '../components/MobileNav.vue'

const navOpen = ref(false)
</script>

<template>
  <div class=" topbar flex place-content-between w-full place-items-center h-14 p-6 text-white">
    <div>
      <router-link :to="{name: 'home'}">
        <img class=" w-28" src="../assets/logo.svg" alt="redack's logo">
      </router-link>
    </div>
    <div @click="navOpen = !navOpen" class=" cursor-pointer">
      <img src="../assets/menu.svg" alt="menu button">
    </div>
  </div>

  <Transition
    enter-active-class="transition ease-out duration-300"
    leave-active-class="transition ease-in duration-300"
    enter-from-class="opacity-0 translate-y-20"
    leave-to-class="opacity-0 translate-y-20"
  >
    <div v-if="navOpen" class="navbar fixed bottom-0 w-full h-[410px] bg-[#0D0B0B] z-10">
      <mobile-nav @nav-close="navOpen = false"></mobile-nav>
    </div>
  </Transition>
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
