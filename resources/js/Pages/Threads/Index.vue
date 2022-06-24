<template>
  <Head title="Threads"/>

  <div class="">
    <article v-for="thread in threads" :key="thread.id" class="mb-8">
      <header>
        <h1 class="font-bold text-xl">{{ thread.title }}</h1>
        <p class="text-xl">{{ thread.author.name }}</p>
      </header>

      <div class="mt-3">{{ thread.body }}</div>
    </article>
  </div>
</template>

<script setup>
defineProps({
  threads: Array
})
</script>
