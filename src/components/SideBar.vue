<script setup>
</script>

<template>
  <div class="h-screen fixed left-0 w-72 sidenav text-white">
    <nav class="px-4 py-10">
      <div class="logo pr-14 py-1 mt-12 flex place-content-end">
        <router-link :to="{name: 'home'}">
          <img src="../assets/logo.svg" alt="redack's logo">
        </router-link>
      </div>
      <div class="mt-[17vh] flex flex-col place-items-center text-xl">
        <ul class="space-y-10">
          <li class="px-4 py-1">
            <a href="#">Home</a>
          </li>

          <li class="px-4 py-1">
            <router-link :to="{name: 'portfolio.category'}">Portfolio</router-link>
          </li>

          <li class="px-4 py-1">
            <a href="#">About</a>
          </li>

          <li class="px-4 py-1">
            <a href="#">Skills</a>
          </li>

          <li class="px-4 py-1">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
li{
  font-weight: 500;
}
.sidenav{
  background: url(../assets/sidebg.svg) no-repeat center; 
}
img{
  width: 120px;
}
</style>
