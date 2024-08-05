<template>
  <AuthRegisterForm />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: ['guest'],
})

useHead({
  title: () => $t('auth.register.title'),
})
</script>
