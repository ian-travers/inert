<template>
  <div>
    <header v-if="supported" class="bg-gray-800 text-gray-50 flex justify-end border-b border-gray-700 text-sm px-2 py-1">
      <button class="hover:bg-gray-600 rounded px-2" @click="copy">
        {{ copied ? 'Copied!' : 'Copy' }}
      </button>
    </header>
    <pre><code ref="block">{{ code }}</code></pre>
  </div>
</template>

<script setup>
import { highlightElement } from "@/Services/SyntaxHighlighting";
import { defineProps, onMounted, ref, watch } from "vue";
import { useClipboard } from "@/Composables/useClipboard";

let props = defineProps({
  code: String
})

let block = ref(null)

let { copy, copied, supported } = useClipboard(props.code)

watch(copied, (value) => {
  if (value) {
    setTimeout(() => {
      copied.value = false
    }, 3000)
  }
})

onMounted(() => highlightElement(block.value))
</script>
