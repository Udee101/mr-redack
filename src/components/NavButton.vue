<script setup>
  const props = defineProps({
    buttonClass: String,
    clickEvent: Function
  })
  const emits = defineEmits(['click-event'])
</script>

<template>
  <button :class="buttonClass" @click="clickEvent">
    <slot />
  </button>
</template>
