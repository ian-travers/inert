<template>
  <section class="p-6 bg-slate-200">
    <header class="flex items-center justify-between bg-slate-200">
      <div class="flex items-baseline">
        <h1 class="text-xl">My App</h1>
        <p class="text-sm ml-2">Welcome back, {{ username }}</p>
      </div>
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
import Nav from "./Nav"
import { Inertia } from '@inertiajs/inertia'
import { computed } from "vue";

const username = computed(() => Inertia.page.props.auth.user.username)
</script>
