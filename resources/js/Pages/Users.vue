<template>
  <Head>
    <title>Users</title>
    <meta
      name="description"
      content="Users information"
      head-key="description"
    />
  </Head>

  <h1 class="text-3xl">Users</h1>
  <div class="mt-4">
    <ul>
      <li v-for="user in users" :key="user.id" v-text="user.name"></li>
    </ul>
  </div>
</template>

<script setup>
defineProps({ users: Array })
</script>
