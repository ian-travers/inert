<template>
  <button
    @click="openModal"
    type="button"
    class="bg-cyan-700 hover:bg-cyan-600 text-white transition rounded-lg px-3 py-1.5 mt-2"
  >
    Open Modal Component
  </button>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10" :class="{'dark': isDark}">
      <TransitionChild
        as="template"
        enter="duration-1000 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-1000 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/50" aria-hidden="true"/>
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-hidden">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-1000 ease-out"
            enter-from="translate-y-full"
            enter-to="translate-y-0"
            leave="duration-1000 ease-in"
            leave-from="translate-y-0"
            leave-to="translate-y-full"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl p-6 bg-white dark:bg-game-brand text-left align-middle shadow-xl transition-all"
            >
              <header class="flex justify-between items-center">
                <DialogTitle as="h3" class="text-xl font-semibold leading-6 text-stone-900 dark:text-stone-200">
                  {{ title }}
                </DialogTitle>
                <button type="button" @click="closeModal" class="rounded-md text-stone-900 dark:text-stone-200 px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-600 focus-visible:ring-offset-2">&#10005</button>
              </header>

              <div class="mt-2 text-stone-900 dark:text-stone-200 max-h-96 overflow-y-auto">
                <slot></slot>
              </div>

              <div class="mt-4">
                <div class="flex justify-between items-center">
                  <button
                    type="button"
                    class="rounded-md border border-transparent bg-stone-500 px-4 py-2 text-sm font-medium text-white hover:bg-stone-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-600 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    :class="{'bg-sky-500 hover:bg-sky-600 focus-visible:ring-sky-600': type==='primary'}"
                    @click="closeModal"
                  >
                    {{ action }}
                  </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { inject, ref } from "vue"
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

defineProps({
  title: String,
  type: String,
  action: String
})

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}

function openModal() {
  isOpen.value = true
}

const isDark = inject('isDark', false)

</script>
