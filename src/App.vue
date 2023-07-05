<script setup>
import SideBar from './components/SideBar.vue';
import TopBar from './components/TopBar.vue';

</script>

<template>
  <div class="layout flex min-h-screen font-mainFont">
    <header class="fixed block w-full z-[1] lg:hidden">
      <TopBar></TopBar>
    </header>
    <aside class="hidden h-screen w-64 lg:block">
      <SideBar></SideBar>
    </aside>
    <main class="flex-1">
      <router-view></router-view>
    </main>
  </div>
</template>
