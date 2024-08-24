<template>
  <div class="grid gap-5">
    <AccountGeneralForm />
    <AccountDeleteForm v-if="$settings?.features.accountAllowDelete" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})

useHead({
  title: () => $t('account.general.title'),
})

const { $settings } = useNuxtApp()
</script>
