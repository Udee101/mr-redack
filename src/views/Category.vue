<script setup>
	import { computed, onMounted, ref } from "vue";
	import { projectData } from "../data/portfolio.js";
	import "@splidejs/vue-splide/css";
	import "@splidejs/vue-splide/css/sea-green";
	import ProjectDetails from "../components/ProjectDetails.vue";

	const props = defineProps({
		id: {
			type: String,
			required: true,
		},
	});

  const project = computed(() => {
    return projectData[parseInt(props.id) - 1]
  })

	const isLoading = ref(false);
	onMounted(() => {
		window.scrollTo(0, 0);
		isLoading.value = true;
		setTimeout(() => {
			isLoading.value = false;
		}, 2000);
	});
</script>

<template>
  <div
    v-if="isLoading"
    class="text-white font-bold min-h-screen w-full grid place-content-center mx-auto bg-site-gray"
  >
    <div>LOADING.....</div>
  </div>
  <section v-else class="p-4 bg-site-gray">
    <div class="relative max-w-site-w mx-auto min-h-screen py-14">
      <p
        class="hidden absolute right-0 mx-2 py-10 text-site-gold text-4xl font-titleFont md:block"
      >
        {{ project.tag }}
      </p>
      <p
        class="text-center font-titleFont text-3xl text-site-gold pt-12 md:hidden"
      >
        {{ project.tag }}
      </p>
      <div
        v-for="(titleData, index) in project.titles"
        :key="index"
        class="min-h-[70vh] flex flex-col"
      >
        <div class="grid first:mt-6 md:first:mt-40 md:grid-cols-2 md:gap-x-6">
          <ProjectDetails
            :category-data="project"
            :index="index"
            :title="titleData"
          ></ProjectDetails>
        </div>
      </div>
    </div>
  </section>
</template>
