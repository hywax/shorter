<template>
  <AuthForgotForm />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: ['guest'],
})

useHead({
  title: () => $t('auth.forgot.title'),
})
</script>
