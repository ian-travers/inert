<template>
  <button
    class="flex items-center text-stone-100 min-w-fit disabled:opacity-70 disabled:cursor-not-allowed"
    :class="buttonClasses"
    :disabled="processing"
  >
    <svg
      v-show="processing"
      class="animate-spin -ml-1 text-stone-100"
      :class="spinnerClasses"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <slot></slot>
  </button>
</template>

<script setup>
import { onMounted, ref } from "vue";

let props = defineProps({
  size: { type: String, default: 'default' },
  type: { type: String, default: 'primary' },
})

let processing = ref(false)

const buttonClasses = ref('')
const spinnerClasses = ref('')

onMounted(() => {
  switch (props.size) {
    case 'large': {
      buttonClasses.value += ' text-lg rounded-lg px-4 py-2'
      spinnerClasses.value += ' h-5 w-5 mr-3'
      break
    }
    case 'default': {
      buttonClasses.value += ' text-normal rounded-md px-2.5 py-1.5'
      spinnerClasses.value += ' h-4 w-4 mr-2'
      break
    }
    case 'small': {
      buttonClasses.value += ' text-sm rounded px-2 py-1'
      spinnerClasses.value += ' h-3 w-3 mr-1'
      break
    }
  }

  switch (props.type) {
    case 'primary': {
      buttonClasses.value += ' bg-cyan-700 hover:bg-cyan-600 transition'
      break
    }
    case 'warning': {
      buttonClasses.value += ' bg-yellow-600 hover:bg-yellow-700 transition'
      break
    }
    case 'danger': {
      buttonClasses.value += ' bg-red-600 hover:bg-red-700 transition'
      break
    }
  }
})

defineExpose({ processing })
</script>
