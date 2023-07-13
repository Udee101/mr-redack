<script setup>
defineProps({
  skill: {
    type: Object 
  }
})
</script>

<template>
  <div class="space-y-4 text-center grid place-items-center p-2">
    <div class=" w-16 h-16 rounded-full bg-white border-[6px] border-site-gold flex place-items-center md:w-32 md:h-32 lg:w-48 lg:h-48">
      <p class="w-full font-light text-site-gold md:text-3xl lg:text-5xl">{{ skill.proficiency }}</p>
    </div>
    <p class="text-white max-w-[220px] text-sm uppercase md:text-base lg:text-lg">{{ skill.title }}</p>
  </div>
</template>
