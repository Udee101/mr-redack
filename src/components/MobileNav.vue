<script setup>
import { navLinks } from '../data/index'

defineProps({
  pageName: String
})
const emits = defineEmits(['nav-close'])
const navClose = () => {
  emits('nav-close')
}
</script>

<template>
  <div class="flex relative place-content-center items-center h-full">
    <div 
      class="rotate-90 close-mob-nav"
      @click="navClose"
    >&gt;</div>
    
    <nav>
      <ul v-if="pageName === 'home'" class="space-y-10">
        <li
          v-for="navItem in navLinks" 
          :key="navItem.id"
          class="nav-btn"
          @click="navClose"
        >
          <a :href="navItem.href">{{ navItem.linkTitle }}</a>
        </li>
      </ul>
      <ul v-else>
        <li class="nav-btn">
          <a href="/#portfolio" class="flex items-center gap-2">
            <img src="../assets/images/carret.svg" alt="left carret">
            Back Home
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
