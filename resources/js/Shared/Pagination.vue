<template>
    <Component
      v-for="link in links"
      :is="link.url ? 'Link' : 'span'"
      :href="link.url"
      v-html="link.label"
      class="px-1"
      :class="{ 'text-slate-400': ! link.url, 'font-bold underline' : link.active }"
    />
</template>

<script setup>
defineProps({ links: Array })
</script>
