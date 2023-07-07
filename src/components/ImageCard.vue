<script setup>
const props = defineProps({
  cardClass: String,
})
</script>

<template>
  <div :class="cardClass">
    <slot />
  </div>
</template>
