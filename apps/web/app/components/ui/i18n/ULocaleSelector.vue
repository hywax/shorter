<template>
  <ClientOnly>
    <UDropdown
      :items="items"
      :ui="{ item: { disabled: 'cursor-text select-text' } }"
      :popper="{ placement: 'bottom-end' }"
    >
      <UTooltip :text="$t('app.i18n.select')">
        <UIcon
          class="h-8 w-8 rounded-full ring-1 ring-gray-200 dark:ring-gray-700"
          :name="currentLocale.icon!"
        />
      </UTooltip>
    </UDropdown>

    <template #fallback>
      <USkeleton class="h-8 w-8" :ui="{ rounded: 'rounded-full' }" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const { localesDictionary, currentLocale } = useI18nUtils()
const { setLocale } = useI18n()

const items = computed(() => {
  return [Object.values(localesDictionary.value).map((locale) => ({
    ...locale,
    click: () => setLocale(locale.code),
  }))]
})
</script>
