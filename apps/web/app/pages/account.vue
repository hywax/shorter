<template>
  <UContainer>
    <div class="grid lg:grid-cols-5 gap-8 py-8 relative">
      <div class="">
        <div class="flex flex-wrap gap-1 lg:sticky lg:grid top-6">
          <UButton
            v-for="(link, key) in links"
            :key="key"
            variant="ghost"
            color="gray"
            size="lg"
            active-class="bg-gray-100 dark:bg-gray-800"
            :to="link.to"
            :exact="link.exact"
            :label="link.label"
            :icon="link.icon"
          />
        </div>
      </div>

      <div class="grid gap-5 lg:col-span-4">
        <NuxtPage />
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})

const { meta } = useAppConfig()

useHead({
  titleTemplate: (title) => title ? `${title} - ${$t('account.title')} - ${meta.name}` : meta.name,
})

const { icons } = useAppConfig()

const links = [
  {
    label: $t('account.general'),
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
]
</script>
