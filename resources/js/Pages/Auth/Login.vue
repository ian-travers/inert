<template>
  <Head title="Login"/>
  <main class="grid place-items-center min-h-screen">
    <section class="bg-white border rounded-xl p-8">
      <h1 class="text-3xl">Login</h1>
      <form @submit.prevent="submit" class="mt-4">
        <div class="mb-6">
          <label
            for="email"
            class="block uppercase font-bold text-xs text-gray-500 mb-2"
          >
            Email
          </label>
          <input
            v-model="form.email"
            class="border rounded-md px-2 py-1 w-full"
            type="email"
            name="email"
            id="email"
            required
          >
          <div
            v-if="form.errors.email"
            v-text="form.errors.email"
            class="text-red-500 text-xs mt-1"
          ></div>
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
            class="border rounded-md px-2 py-1 w-full"
            type="password"
            name="password"
            id="password"
            required
          >
          <div
            v-if="form.errors.password"
            v-text="form.errors.password"
            class="text-red-500 text-xs mt-1"
          ></div>
        </div>

        <div class="mb-4">
          <button
            class="bg-blue-400 hover:bg-blue-500 text-white rounded px-4 py-2"
            type="submit"
            :disabled="form.processing"
          >
            Login
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  layout: null
}
</script>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";

let layout = null

let form = useForm({
  email: '',
  password: ''
})

let submit = () => {
  form.post('/login')
}
</script>
