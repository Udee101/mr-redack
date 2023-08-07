<script setup>
const props = defineProps({
  categoryData: Object,
  title: String,
  index: Number
})
</script>

<template>
  <div class="order-1 md:-order-1 mt-20 mb-10 self-center text-white grid gap-y-4 md:my-0">
    <h2 class="font-headerFont text-2xl text-center md:text-left max-w-md md:text-4xl" v-html="title"></h2>
    <p class="text-center mx-auto md:text-left max-w-md md:m-0">
      {{ categoryData.descriptions[index] }}
    </p>
  </div>
  
  <div class="w-full max-w-lg h-full flex md:justify-self-end mt-8 md:m-0">
    <Splide :options="{ rewind: true, gap: '1rem' }" >
      <SplideSlide v-for="(imgSrc, i) in categoryData.images[index]" :key="i">
        <img :src="imgSrc" alt="image of portfolio projects">
      </SplideSlide>
    </Splide>
      <!-- <div class="project-imgs max-w-full flex flex-row overflow-x-auto gap-x-3 h-full justify-items-center">
        <img v-for="(imgSrc, i) in categoryData.images[index]" :key="i" :src="imgSrc" alt="" class="w-72 md:w-3/4">
      </div> -->
  </div>
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

/* .project-imgs::-webkit-scrollbar {
  height: 0.5rem;

} */

/* Track */
/* .project-imgs::-webkit-scrollbar-track {
  background: #9c9c9c7c; 
} */
 
/* Handle */
/* .project-imgs::-webkit-scrollbar-thumb {
  background: #BE8C07;
  border-radius: 2rem;
} */

/* Handle on hover */
/* .project-imgs::-webkit-scrollbar-thumb:hover {
  background: #E8b11e; 
} */
</style>