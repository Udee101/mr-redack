<script setup>
import { computed } from 'vue';

const props = defineProps({
  categoryData: Object,
  title: String,
  index: Number
})

const switchGridOrder = computed(() => {
  return props.index % 2 === 0 ? 'md:-order-1 justify-start': 'md:order-1 justify-end'
})
const switchTextAlignment = computed(() => {
  return props.index % 2 === 0 ? 'md:text-left max-w-md' : 'md:text-left max-w-md'
})
</script>

<template>
  <div :class="`${switchGridOrder} order-1 my-5 self-center text-white grid gap-y-4`">
    <h2 :class="`font-headerFont text-2xl text-center ${switchTextAlignment} md:text-4xl`" v-html="title"></h2>
    <p :class="`text-center mx-auto ${switchTextAlignment} md:m-0`">
      {{ categoryData.descriptions[index] }}
    </p>
  </div>
  
  <div class="w-full max-w-2xl mt-8 mx-auto md:m-0 md:justify-self-end">
    <Splide :options="{ rewind: true, gap: '1rem' }" >
      <SplideSlide v-for="(imgSrc, i) in categoryData.images[index]" :key="i">
        <img :src="imgSrc" alt="image of portfolio projects">
      </SplideSlide>
    </Splide>
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
</style>