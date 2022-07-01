<template>
  <div class="relative items-center w-96 border-transparent border-y-[10px] hover:border-cyan-600 dark:hover:border-cyan-900">
    <button
      type="button"
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
      class="w-full flex justify-end font-sans uppercase text-3xl font-medium italic tracking-wide text-sky-600 hover:text-stone-900 dark:text-sky-400 dark:hover:text-stone-200 focus:outline-none focus:text-stone-900 dark:focus:text-stone-200">
      <slot></slot>
    </button>
    <div v-if="hovered" class="absolute h-[56px] w-3 bg-neutral-500 -right-5 top-0 animate-blinking -my-2.5"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let hovered = ref(false)
</script>
