<script setup>
import { onMounted, ref } from 'vue';
import {projectData} from "../data/portfolio.js"
import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/sea-green';
import ProjectDetails from '../components/ProjectDetails.vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const isLoading = ref(false)
onMounted(() => {
  window.scrollTo(0, 0)
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})
</script>
  
<template>
  <section class="p-4 bg-site-gray">
    <div v-if="isLoading" class="text-white font-bold h-screen w-full flex items-center mx-auto"><p>LOADING.....</p></div>
    <div v-else class=" relative max-w-site-w mx-auto min-h-screen py-14">
      <p class=" hidden absolute right-0 mx-2 py-10 text-site-gold text-4xl font-titleFont md:block">{{ projectData[id-1].tag }}</p>
      <p class="text-center font-titleFont text-3xl text-site-gold pt-12  md:hidden">{{ projectData[id-1].tag }}</p>
      <div v-for="(data, index) in projectData[id-1].titles" :key="index" class="min-h-[70vh] flex flex-col">
        <div class="grid first:mt-6 md:first:mt-40 md:grid-cols-2 md:gap-x-6">
          <ProjectDetails
            :category-data="projectData[id-1]"
            :index="index"
            :title="data"
          ></ProjectDetails>
        </div>
      </div>
    </div>
  </section>
</template>
