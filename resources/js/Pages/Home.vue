<template>
  <Head>
    <title>Home</title>
    <meta
      name="description"
      content="Home information"
      head-key="description"
    />
  </Head>

  <h1 class="text-3xl dark:text-sky-400">Home</h1>
  <div class="p-6 border border-2 border-cyan-400 h-12">

  </div>
  <div class="mt-6">
    <h2 class="text-xl dark:text-blue-400">Dialog (Modal)</h2>
    <button
      @click="openModal"
      type="button"
      class="bg-cyan-700 hover:bg-cyan-600 text-white transition rounded-lg px-3 py-1.5 mt-2"
    >
      Open Modal
    </button>
  </div>

  <div class="max-w-md min-h-max mx-auto bg-gray-50 border border-cyan-400">
    <div class="relative w-full">
      <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-24 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div class="relative m-8 space-y-4">
        <div class="bg-white rounded-lg flex items-center justify-between space-x-8 p-5">
          <div class="flex-1">
            <div class="h-4 w-48  bg-gray-300 rounded"></div>
          </div>
          <div>
            <div class="w-24 h-6 rounded-lg bg-purple-300"></div>
          </div>
        </div>

        <div class="bg-white rounded-lg flex items-center justify-between space-x-8 p-5">
          <div class="flex-1">
            <div class="h-4 w-52  bg-gray-300 rounded"></div>
          </div>
          <div>
            <div class="w-20 h-6 rounded-lg bg-yellow-300"></div>
          </div>
        </div>

        <div class="bg-white rounded-lg flex items-center justify-between space-x-8 p-5">
          <div class="flex-1">
            <div class="h-4 w-40  bg-gray-300 rounded"></div>
          </div>
          <div>
            <div class="w-32 h-6 rounded-lg bg-pink-300"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col justify-end border border-4 border-amber-300 mt-6 text-blue-400" style="height: 1000px">
    On the bottom
  </div>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-40"/>
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto animate-su">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            leave="animate-sd"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <button
                class="absolute right-3 top-2 rounded-md px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                @click="closeModal"
              >
                &#x2715
              </button>
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Payment successful
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent you
                  an email with all of the details of your order.
                </p>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Got it, thanks!
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { ref } from "vue";

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}

function openModal() {
  isOpen.value = true
}
</script>
