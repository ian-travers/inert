<template>
  <h1 class="text-3xl font-bold">Users</h1>

  <Nav/>

  <div style="margin-top: 600px">
    <p class="text-lg">The current time is {{ time }}.</p>
    <Link class="text-blue-500 hover:underline" href="/users" preserve-scroll>Refresh</Link>
  </div>
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3"
import Nav from '../Shared/Nav'

defineProps({
  time: String,
})
</script>
