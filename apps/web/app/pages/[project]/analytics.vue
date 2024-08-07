<template>
  <UPageHeader :title="$t('projects.analytics.title')" />

  <UContainer>
    <MessagesNotImplemented />
  </UContainer>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth', 'available-project'],
})

useHead({
  title: () => $t('projects.analytics.title'),
})
</script>
