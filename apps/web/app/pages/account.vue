<template>
  <UPageWithAsideNav :links>
    <NuxtPage />
  </UPageWithAsideNav>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})

const { meta, icons } = useAppConfig()

useHead({
  titleTemplate: (title) => title ? `${title} - ${$t('account.title')} - ${meta.name}` : meta.name,
})

const links = computed(() => [
  {
    label: $t('account.general.title'),
    icon: icons.account.settings,
    to: '/account',
    exact: true,
  },
  {
    label: $t('account.appearance.title'),
    icon: icons.account.appearance,
    to: '/account/appearance',
  },
  {
    label: $t('account.security'),
    icon: icons.account.security,
    to: '/account/security',
  },
])
</script>
