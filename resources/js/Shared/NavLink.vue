<template>
  <Link
    class="text-black hover:underline dark:text-white"
    :class="{'font-bold underline': active}"
  >
    <slot/>
  </Link>
</template>

<script setup>
defineProps({
  active: Boolean
})
</script>
