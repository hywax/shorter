<template>
  <div>
    Security not implemented
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})

useHead({
  title: () => $t('account.security'),
})
</script>
