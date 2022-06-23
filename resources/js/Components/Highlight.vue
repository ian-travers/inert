<template>
  <div>
    <header class="bg-gray-800 text-gray-50 flex justify-end border-b border-gray-700 text-sm px-2 py-1">
      <button class="hover:bg-gray-600 rounded px-2" @click="copyToClipboard">
        {{ copied ? 'Copied!' : 'Copy' }}
      </button>
    </header>
    <pre><code ref="block">{{ code }}</code></pre>
  </div>
</template>

<script setup>
import { highlightElement } from "@/Services/SyntaxHighlighting";
import { defineProps, onMounted, ref } from "vue";

let props = defineProps({
  code: String
})

let block = ref(null)

let copyToClipboard = () => {
  if (navigator && navigator.clipboard) {
    navigator.clipboard.writeText(props.code)
    alert('Copied!')

    return
  }

  alert('Apologies, your browser does not support the Clipboard API')
}

onMounted(() => highlightElement(block.value))
</script>

<style scoped>

</style>
