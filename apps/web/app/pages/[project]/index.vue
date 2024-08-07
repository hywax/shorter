<template>
  <UPageHeader :title="$t('projects.links.title')" />

  <UContainer>
    <MessagesNotImplemented />
  </UContainer>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth', 'available-project'],
})

useHead({
  title: () => $t('projects.links.title'),
})
</script>
