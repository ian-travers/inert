<template>
  <Head>
    <title>Settings</title>
    <meta
      name="description"
      content="Settings overview"
      head-key="description"
    />
  </Head>

  <h1 class="text-3xl">Settings</h1>

  <div style="margin-top: 700px">
    <p class="text-lg">The current time is {{ time }}.</p>
    <Link class="text-blue-500 hover:underline" href="/settings" preserve-scroll>Refresh</Link>
  </div>
</template>

<script setup>
defineProps({
  time: String,
})
</script>
