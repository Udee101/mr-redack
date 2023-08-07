<script setup>
import navLinks from '../data/navLinks.json'
import NavLink from './NavLink.vue';

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
        <NavLink
          v-for="navItem in navLinks" 
          :key="navItem.id"
          :navItem="navItem"
          @nav-close="navClose"
        >
        </NavLink>
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
