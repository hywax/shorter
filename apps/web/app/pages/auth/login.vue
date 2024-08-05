<template>
  <AuthLoginForm />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: ['guest'],
})

useHead({
  title: () => $t('auth.login.title'),
})
</script>
