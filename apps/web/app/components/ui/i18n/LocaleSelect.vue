<template>
  <ClientOnly>
    <USelectMenu
      v-bind="$attrs"
      v-model="locale"
      :options="options"
      :leading-icon="currentLocale.icon"
    />

    <template #fallback>
      <USkeleton class="h-8 w-full" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const { localesDictionary, currentLocale } = useI18nUtils()
const { setLocale } = useI18n()

const options = computed(() => Object.values(localesDictionary.value))

const locale = computed({
  get() {
    return currentLocale.value || options.value[0]
  },
  set(option) {
    setLocale(option.code)
  },
})
</script>
