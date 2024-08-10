<template>
  <AuthResetForm />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: ['guest'],
})

useHead({
  title: () => $t('auth.reset.title'),
})
</script>
