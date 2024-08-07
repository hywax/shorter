<template>
  <UPageHeader :title="$t('projects.events.title')" />

  <UContainer>
    <MessagesNotImplemented />
  </UContainer>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth', 'available-project'],
})

useHead({
  title: () => $t('projects.events.title'),
})
</script>
