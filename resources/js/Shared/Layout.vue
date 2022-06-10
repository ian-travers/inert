<template>
  <section class="p-6 bg-slate-200">
    <header class="flex items-center justify-between bg-slate-200">
      <h1>My App</h1>
      <Nav/>
    </header>
  </section>
  <section class="p-6">
    <div class="max-w-5xl mx-auto">
      <slot/>
    </div>
  </section>
</template>

<script setup>
import Nav from "./Nav";
</script>
