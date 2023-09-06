<script setup>
defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div 
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :visibleOnce="{ 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 500
      }							
    }"
    :delay="500"
  >
    <input 
      class="border-none p-2 w-full placeholder:text-site-gold placeholder:uppercase md:h-12 lg:h-14"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>
