<script setup>
import Home from './views/Home.vue';
import SideBar from './components/SideBar.vue';
import TopBar from './components/TopBar.vue';

</script>

<template>
  <div class="layout flex min-h-screen">
    <header class="fixed block w-full lg:hidden">
      <TopBar />
    </header>
    <aside class="hidden h-screen w-72 lg:block">
      <SideBar />
    </aside>
    <main class="content flex-1 max-w-screen-lg mx-auto mt-20">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
</style>
