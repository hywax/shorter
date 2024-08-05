<template>
  <div class="grid gap-5">
    <AccountChangePasswordForm />
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
