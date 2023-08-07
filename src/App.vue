<script setup>
import { computed } from 'vue';
import SideBar from './components/SideBar.vue';
import TopBar from './components/TopBar.vue';
import { useRouter } from 'vue-router';

const routeName = computed(() => {
  return useRouter().currentRoute.value.name;
})

</script>

<template>
  <div class="layout flex min-h-screen font-mainFont">
    <header class="fixed block w-full z-[1] lg:hidden">
    <!-- {{ routName }} -->
      <TopBar :currentRouteName="routeName"></TopBar>
    </header>
    <aside class="hidden h-screen w-64 lg:block">
      <SideBar :currentRouteName="routeName"></SideBar>
    </aside>
    <main class="flex-1">
      <router-view></router-view>
    </main>
  </div>
</template>
