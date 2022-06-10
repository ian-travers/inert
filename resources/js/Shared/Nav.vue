<template>
  <nav class="mt-6">
    <ul>
      <li><Link class="text-blue-500 hover:underline" href="/">Home</Link></li>
      <li><Link class="text-blue-500 hover:underline" href="/users">Users</Link></li>
      <li><Link class="text-blue-500 hover:underline" href="/settings">Settings</Link></li>
      <li><Link class="text-blue-500 hover:underline" href="/logout" method="post" as="button">Logout</Link></li>
    </ul>
  </nav>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3'
</script>
