<script setup>
import SideBar from './components/SideBar.vue';
import TopBar from './components/TopBar.vue';

</script>

<template>
  <div class="layout flex min-h-screen">
    <header class="fixed block w-full z-[1] lg:hidden">
      <top-bar></top-bar>
    </header>
    <aside class="hidden h-screen w-64 lg:block">
      <side-bar></side-bar>
    </aside>
    <main class="flex-1">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
</style>
