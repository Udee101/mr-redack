<script setup>
  defineProps({
    navItem: Object
  })
  defineEmits(['nav-close'])
</script>

<template>
  <li
    class="nav-btn"
    @click="navClose"
  >
    <a :href="navItem.href">{{ navItem.linkTitle }}</a>
  </li>
</template>
