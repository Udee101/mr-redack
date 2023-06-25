<script setup>

</script>

<template>
  <div class=" topbar flex place-content-between w-full place-items-center h-14 p-6 text-white">
    <div>
      <router-link :to="{name: 'home'}">
        <img class=" w-24" src="../assets/logo.svg" alt="redack's logo">
      </router-link>
    </div>
    <div>
      <img src="../assets/menu.svg" alt="menu button">
    </div>
  </div>
</template>

<style scoped>
.topbar{
  background: linear-gradient(
    to right, 
    rgb(0, 0, 0), 
    rgb(27, 25, 25), 
    rgb(0, 0, 0),  
    rgb(15, 14, 14)
  );
}
</style>
