<template>
  <AccountAppearanceForm />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})

useHead({
  title: () => $t('account.appearance.title'),
})
</script>
