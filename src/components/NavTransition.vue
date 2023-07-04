<template>
  <Transition
    enter-active-class="transition ease-out duration-300"
    leave-active-class="transition ease-in duration-300"
    enter-from-class="opacity-0 translate-y-20"
    leave-to-class="opacity-0 translate-y-20"
  >
    <slot></slot>
  </Transition>
</template>
