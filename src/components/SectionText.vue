<script setup>
const props = defineProps({
  textClass: String
})
</script>

<template>
  <div :class="textClass">
    <slot name="label"/>
    <slot name="name"/>
    <slot name="description"/>
  </div>
</template>
