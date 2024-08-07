<template>
  <NuxtPage />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'project',
  middleware: ['auth', 'available-project'],
})

const router = useRouter()
const { meta } = useAppConfig()
const { currentProject } = useProject()

useHead({
  titleTemplate: (title) => title ? `${title} - ${currentProject.value!.name} - ${meta.name}` : meta.name,
})

defineShortcuts({
  'l': () => router.push(`/${currentProject.value!.id}`),
  'a': () => router.push(`/${currentProject.value!.id}/analytics`),
  'e': () => router.push(`/${currentProject.value!.id}/events`),
  ',': () => router.push(`/${currentProject.value!.id}/settings`),
})
</script>
