<template>
  <UDropdown
    :items="items"
    :ui="{ item: { disabled: 'cursor-text select-text' } }"
    :popper="{ placement: 'bottom-end' }"
  >
    <UTooltip :text="$t('i18n.select')">
      <UIcon
        class="h-8 w-8 rounded-full ring-1 ring-gray-200 dark:ring-gray-700"
        :name="currentLocale.icon!"
      />
    </UTooltip>
  </UDropdown>
</template>

<script setup lang="ts">
const { localesMap, currentLocale } = useI18nDictionary()
const items = computed(() => [Object.values(localesMap.value)])
</script>
