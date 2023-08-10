<script setup>
import {mySkills} from '../../data/skills.js';
import SkillCard from '../SkillCard.vue';
</script>

<template>
  <section id="skills" class="p-4 bg-site-gray">
    <div class="relative max-w-site-w md:min-h-[50vh] lg:min-h-screen mx-auto">
      <p class="text-site-gold font-titleFont text-5xl text-center mt-16 mb-8 md:hidden">
        My skills
      </p>
      <p class="hidden absolute right-0 mx-2 my-10 text-site-gold text-2xl font-titleFont md:block md:text-4xl">My skills</p>
      <div class="grid grid-cols-3 gap-y-4 items-start py-10 md:py-32 md:gap-16 lg:min-h-screen">
        <SkillCard 
          v-for="skill in mySkills"
          :key="skill.id"
          :skill="skill"
        >          
        </SkillCard>
      </div>
    </div>
  </section>
</template>
