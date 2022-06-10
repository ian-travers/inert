<template>
  <h1 class="text-3xl">Users</h1>

  <div style="margin-top: 700px">
    <p class="text-lg">The current time is {{ time }}.</p>
    <Link class="text-blue-500 hover:underline" href="/users" preserve-scroll>Refresh</Link>
  </div>
</template>

<script>
import Layout from "../Shared/Layout"

export default {
  layout: Layout
}
</script>

<script setup>
defineProps({
  time: String,
})
</script>
