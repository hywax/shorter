<template>
  <div class="grid gap-5">
    <AccountGeneralForm />
    <AccountDeleteForm />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})

useHead({
  title: () => $t('account.general.title'),
})
</script>
