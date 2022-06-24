<template>
  <Head title="Threads"/>

  <div class="">
    <article v-for="thread in threads.data" :key="thread.id" class="mb-8">
      <header>
        <h1 class="font-bold text-xl">{{ thread.title }}</h1>
        <p>{{ thread.author.name }} <span class="text-xs">Created at {{ thread.created_at}}</span></p>
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
