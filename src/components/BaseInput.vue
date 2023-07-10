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
  <div>
    <input 
      class="border-none p-2 w-full placeholder:text-site-gold placeholder:uppercase md:h-12 lg:h-14"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>
