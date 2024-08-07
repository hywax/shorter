<template>
  <div class="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900/75">
    <div class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <Header transparent />

      <UContainer>
        <UHorizontalNavigation :links="links" />
      </UContainer>
    </div>

    <main class="flex-1 relative">
      <NuxtErrorBoundary>
        <template #error="{ error }">
          <UPageError :error="error" class="min-h-[calc(100vh-129px)]" />
        </template>

        <slot />
      </NuxtErrorBoundary>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const { currentRoute } = useRouter()
const { project: projectId } = currentRoute.value.params as { project: string }

const links = computed(() => {
  return [
    {
      label: $t('projects.links.title'),
      to: `/${projectId}`,
      exact: true,
    },
    {
      label: $t('projects.analytics.title'),
      to: `/${projectId}/analytics`,
    },
    {
      label: $t('projects.events.title'),
      to: `/${projectId}/events`,
    },
    {
      label: $t('projects.settings.title'),
      to: `/${projectId}/settings`,
    },
  ]
})
</script>
