<template>
  <Head>
    <title>Create User</title>
  </Head>

  <h1 class="text-2xl">Create New User</h1>

  <form @submit.prevent="submit" class="max-w-lg mx-auto mt-4">
    <div class="mb-6">
      <label
        for="name"
        class="block uppercase font-bold text-xs text-gray-500 mb-2"
      >
        Name
      </label>
      <input
        v-model="form.name"
        class="border border-gray-400 rounded-md px-2 py-1 w-full"
        type="text"
        name="name"
        id="name"
        required
      >
    </div>

    <div class="mb-6">
      <label
        for="email"
        class="block uppercase font-bold text-xs text-gray-500 mb-2"
      >
        Email
      </label>
      <input
        v-model="form.email"
        class="border border-gray-400 rounded-md px-2 py-1 w-full"
        type="email"
        name="email"
        id="email"
        required
      >
    </div>

    <div class="mb-6">
      <label
        for="password"
        class="block uppercase font-bold text-xs text-gray-500 mb-2"
      >
        Password
      </label>
      <input
        v-model="form.password"
        class="border border-gray-400 rounded-md px-2 py-1 w-full"
        type="password"
        name="password"
        id="password"
        required
      >
    </div>

    <div class="mb-4">
      <button
        class="bg-blue-400 hover:bg-blue-500 text-white rounded px-4 py-2"
        type="submit"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import { Inertia } from "@inertiajs/inertia";

let form = reactive({
  name: '',
  email: '',
  password: ''
})

let submit = () => {
  Inertia.post('/users', form);
};
</script>
