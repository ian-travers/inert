<template>
  <Head title="View User"/>
  <h1 class="text-3xl mt-4">{{ user.data.name }}</h1>
  <p class="mt-2">{{ user.data.email }}</p>
  <p>Registered: {{ user.data.created_at }}</p>
  <div class="mt-4">
    <Link href="/users" class="text-blue-500 text-sm hover:underline">Back</Link>
  </div>
</template>

<script setup>
defineProps({user: Object})
</script>
