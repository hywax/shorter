<template>
  <div>
    General not implemented
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})

useHead({
  title: () => $t('account.general'),
})
</script>
