<script setup>
import { ref } from 'vue';
import MobileNav from '../components/MobileNav.vue'

defineProps({
  currentRouteName: String
})
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
      <img src="../assets/images/menu.svg" alt="mobile menu button">
    </div>
  </div>

  <Transition
    enter-active-class="duration-500"
    leave-active-class="duration-500"
    enter-from-class="opacity-0 translate-y-52"
    leave-to-class="opacity-0 translate-y-52"
  >
    <div v-if="navOpen" class="navbar fixed bottom-0 w-full min-h-[100px] bg-site-black z-[1] py-16">
      <MobileNav @nav-close="navOpen = false" :pageName="currentRouteName"></MobileNav>
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
