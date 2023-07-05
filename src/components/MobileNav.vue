<script setup>
import { navLinks } from '../data/index'
import NavButton from './NavButton.vue';


const emits = defineEmits(['nav-close'])
const navClose = () => {
  emits('nav-close')
}
</script>

<template>
  <div class="flex relative place-content-center items-center h-full">
    <NavButton
      button-class="close-mob-nav"
      :click-event="navClose"
    >
      <p class="rotate-90">&gt;</p>
    </NavButton>
    
    <nav>
      <ul class="space-y-10">
        <li
          v-for="navItem in navLinks" 
          :key="navItem.id" 
        >
          <NavButton 
            button-class="nav-btn"
            :click-event="navClose"
          >
            <a :href="navItem.href">{{ navItem.linkTitle }}</a>
          </NavButton>
        </li>
      </ul>
    </nav>
  </div>
</template>
