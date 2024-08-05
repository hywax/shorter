<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator color="rgb(var(--color-primary-500))" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>

<script setup lang="ts">
const { meta } = useAppConfig()
const i18nHead = useLocaleHead({
  addSeoAttributes: {},
  addDirAttribute: true,
  identifierAttribute: 'id',
})

useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs?.lang,
    dir: i18nHead.value.htmlAttrs?.dir,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
  titleTemplate: (title) => title ? `${title} - ${meta.name}` : meta.name,
})
</script>
