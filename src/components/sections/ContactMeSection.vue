<script setup>
import SectionText from '../SectionText.vue';
import ContactForm from '../ContactForm.vue';
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';

  const slideUpX1 = ref()
  useMotion(slideUpX1, {
    initial: { opacity: 0, y: 20 },
    visibleOnce: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 500,
        delay: 500
      }							
    }
  })

  const slideUpX2 = ref()
  useMotion(slideUpX2, {
    initial: { opacity: 0, y: 20 },
    visibleOnce: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 500,
        delay: 700
      }							
    }
  })

  const slideUpX3 = ref()
  useMotion(slideUpX3, {
    initial: { opacity: 0, y: 20 },
    visibleOnce: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 500,
        delay: 900
      }							
    }
  })

  const slideUpIcon = ref()
  useMotion(slideUpIcon, {
    initial: { opacity: 0, y: 20 },
    visibleOnce: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 500,
        delay: 1000
      }							
    }
  })

  const slideLeft = ref()
  useMotion(slideLeft, {
    initial: { opacity: 0, x: 10 },
    visibleOnce: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 500,
        delay: 500
      }							
    }
  })

  const slideRight = ref()
  useMotion(slideRight, {
    initial: { opacity: 0, x: -10 },
    visibleOnce: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 500,
        delay: 500
      }							
    }
  })
</script>

<template>
  <section id="contact" class="relative p-4 bg-site-gray overflow-hidden">
    <div class=" relative max-w-site-w mx-auto min-h-screen">
      <p class=" hidden absolute right-0 mx-2 my-14 text-site-gold text-2xl font-titleFont md:block md:text-4xl">Contact</p>
      <div class="pt-14 pb-20 grid gap-y-5 min-h-[85vh] md:grid-cols-2 md:gap-x-5 md:items-end">
        <div class=" relative md:order-1">
          <SectionText text-class="text-white p-2 md:p-0">
            <template #label>
              <div class="font-headerFont text-[3.25rem] pb-4 -space-y-3 md:text-8xl md:space-y-2 lg:space-y-4 xl:text-[7.5rem]">
                <p ref="slideUpX1">I Relish</p>
                <p ref="slideUpX2">Flawless</p>
                <p ref="slideUpX3">Designs<span class="text-site-gold">.</span></p>
              </div>
            </template>
          </SectionText>

          <!-- Social icons for tablet & desktop-->
          <div class="hidden space-x-2 md:flex lg:space-x-4">
            <a ref="slideRight" href="https://instagram.com/redack.ng?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" class="duration-500 hover:opacity-70 hover:-translate-y-1">
              <img src="../../assets/images/ig.svg" alt="insagram icon" class="md:h-6 lg:h-9" />
            </a>
            <a ref="slideLeft" href="https://www.linkedin.com/in/akpoborie-isaac-3328a4194" target="_blank" class="duration-500 hover:opacity-70 hover:-translate-y-1">
              <img src="../../assets/images/linkedin.svg" alt="linkedIn icon" class="md:h-6 lg:h-9" />
            </a>
          </div>

          <!-- Ring image for mobile -->
          <div class=" absolute -right-5 top-0 md:hidden">
            <img src="../../assets/images/ring2.svg" alt="golden ring image" class="w-20 h-40">
          </div>
        </div>

        <div class="text-center text-site-gold font-titleFont text-[2rem] mb-4 md:hidden">Contact</div>

        <div class="mt-2 lg:w-[90%]">
          <ContactForm></ContactForm>
        </div>

        <!-- Social icons for mobile -->
        <div ref="slideUpIcon" class="flex space-x-1 mb-10 md:hidden">
          <a href="https://instagram.com/redack.ng?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank">
            <img src="../../assets/images/ig.svg" alt="insagram icon" />
          </a>
          <a href="https://www.linkedin.com/in/akpoborie-isaac-3328a4194" target="_blank">
            <img src="../../assets/images/linkedin.svg" alt="linkedIn icon" />
          </a>
        </div>
      </div>

      <!-- Ring image for tablet & desktop -->
    </div>
    <div class="hidden absolute right-0 bottom-0 pb-10 md:block">
      <img src="../../assets/images/ring1.svg" alt="golden ring image" class="hidden md:block md:w-40 xl:w-44">
    </div>
  </section>
</template>
