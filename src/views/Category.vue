<script setup>
import { onMounted, ref } from 'vue';
// import { categoryData } from '../data/index';
import categoryData from "../data/portfolio.json"
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
  isLoading.value = true
  window.scrollTo(0, 0)
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})
</script>
  
<template>
  <section class="p-4 bg-site-gray">
    <div v-if="isLoading" class="text-white font-bold h-screen w-full flex items-center mx-auto"><p>LOADING.....</p></div>
    <div v-else class=" relative max-w-site-w mx-auto min-h-screen py-14">
      <p class=" hidden absolute right-0 mx-2 py-10 text-site-gold text-4xl font-titleFont md:block">{{ categoryData[id-1].tag }}</p>
      <p class="text-center font-titleFont text-3xl text-site-gold pt-12  md:hidden">{{ categoryData[id-1].tag }}</p>
      <div v-for="(data, index) in categoryData[id-1].titles" :key="index" class="min-h-[85vh] flex items-center">
        <div class="grid md:grid-cols-2 md:gap-x-6">
          <ProjectDetails
            :category-data="categoryData[id-1]"
            :index="index"
            :title="data"
          ></ProjectDetails>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.splide{
  padding: 3rem 1rem;
}
.splide__arrow {
  display: none;
}
.splide__arrow--prev {
  left: -0.5rem;
}
.splide__arrow--next {
  right: -0.5rem;
}
.splide__arrow svg{
  fill: #BE8C07;
  width: 2rem;
}
.splide__arrow svg:hover{
  fill: #ccac53 !important;
}
.splide__pagination__page.is-active{
  background-color: #BE8C07;
}
.splide__pagination__page:hover{
  background-color: #ccac53 !important;
}

@media screen and (min-width: 768px) {
  .splide{
    padding: 3rem;
  }
  .splide__arrow {
    display: flex;
  }
  .splide__pagination{
    display: none;
  }
}
</style>
