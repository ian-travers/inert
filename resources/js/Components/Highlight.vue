<template>
  <div>
    <header class="bg-gray-800 text-gray-50 flex justify-end border-b border-gray-700 text-sm px-2 py-1">
      <button class="hover:bg-gray-600 rounded px-2">
        {{ copied ? 'Copied!' : 'Copy' }}
      </button>
    </header>
    <pre><code ref="block">{{ code }}</code></pre>
  </div>
</template>

<script setup>
import { highlightElement } from "@/Services/SyntaxHighlighting";
import { defineProps, onMounted, ref } from "vue";

defineProps({
  code: String
})

let block = ref(null)

onMounted(() => highlightElement(block.value))
</script>

<style scoped>

</style>
