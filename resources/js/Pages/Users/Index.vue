<template>
  <Head>
    <title>Users</title>
    <meta
      name="description"
      content="Users information"
      head-key="description"
    />
  </Head>

  <div class="flex justify-between">
    <div class="flex items-baseline">
      <h1 class="text-2xl">Users</h1>
      <Link v-if="can.createUser" href="/users/create" class="text-blue-500 text-sm hover:underline ml-2">New User</Link>
    </div>
    <input v-model="search" type="text" placeholder="Search..." class="border rounded-lg px-2">
  </div>
  <div class="mt-4">
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-slate-300">
              <tbody class="divide-y divide-slate-200 bg-white">
              <tr v-for="user in users.data" :key="user.id">
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">
                  {{ user.name }}
                </td>
                <td v-if="user.can.edit" class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <Link :href="`/users/${user.id}/edit`" class="text-indigo-600 hover:text-indigo-900">
                    Edit
                    <span class="sr-only">, {{ user.name }}</span>
                  </Link>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- paginator -->
  <div class="mt-6">
    <Pagination :links="users.links"/>
  </div>
</template>

<script setup>
import Pagination from "../../Shared/Pagination";
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import debounce from "lodash/debounce";

let props = defineProps({
  users: Object,
  filters: Object,
  can: Object
})

let search = ref(props.filters.search)

watch(search, debounce(value => {
  Inertia.get('/users', { search: value }, { preserveState: true, replace: true })
}, 300))

</script>
