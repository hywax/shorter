<template>
  <UPageWithAsideNav :links>
    <NuxtPage />
  </UPageWithAsideNav>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth', 'available-project'],
})

useHead({
  title: () => $t('projects.settings.title'),
})

const { icons } = useAppConfig()
const { currentRoute } = useRouter()
const links = computed(() => {
  const { project } = currentRoute.value.params as { project: string }

  return [
    {
      label: $t('projects.settings.general.title'),
      icon: icons.projects.settings,
      to: `/${project}/settings`,
      exact: true,
    },
    {
      label: $t('projects.settings.members.title'),
      icon: icons.projects.members,
      to: `/${project}/settings/members`,
    },
    {
      label: $t('projects.settings.tags.title'),
      icon: icons.projects.tags,
      to: `/${project}/settings/tags`,
    },
  ]
})
</script>
