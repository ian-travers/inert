<template>
  <Layout>
    <h1 class="text-3xl">Users</h1>

    <div style="margin-top: 700px">
      <p class="text-lg">The current time is {{ time }}.</p>
      <Link class="text-blue-500 hover:underline" href="/users" preserve-scroll>Refresh</Link>
    </div>
  </Layout>
</template>

<script setup>
import Layout from "../Shared/Layout";

defineProps({
  time: String,
})
</script>
