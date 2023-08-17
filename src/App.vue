<script setup>
import { computed } from 'vue';
import SideBar from './components/SideBar.vue';
import TopBar from './components/TopBar.vue';
import { useRouter } from 'vue-router';
import FooterSection from './components/sections/FooterSection.vue';

const routeName = computed(() => {
  return useRouter().currentRoute.value.name;
})

</script>

<template>
  <div class="layout flex min-h-screen font-mainFont">
    <header class="fixed block w-full z-[1] lg:hidden">
      <TopBar :currentRouteName="routeName"></TopBar>
    </header>
    <aside class="hidden h-screen w-64 lg:block">
      <SideBar :currentRouteName="routeName"></SideBar>
    </aside>
    <div class="flex-1 relative">
      <main>
        <router-view></router-view>
      </main>
      <footer>
        <FooterSection></FooterSection>
      </footer>
    </div>
  </div>
</template>
