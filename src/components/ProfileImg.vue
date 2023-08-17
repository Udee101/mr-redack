<script setup>
defineProps({
  imgSrc: String,
  imgClass: String
})
</script>

<template>
  <img :src="imgSrc" :class="imgClass" alt="profile image">
</template>
