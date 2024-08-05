<template>
  <ClientOnly v-if="!colorMode.forced">
    <USelectMenu
      v-bind="$attrs"
      v-model="preference"
      :options="options"
      :leading-icon="preference?.icon"
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

const { icons } = useAppConfig()
const colorMode = useColorMode()

const options = computed(() => [
  {
    label: $t('app.colorMode.system'),
    value: 'system',
    icon: icons.colorMode.system,
  },
  {
    label: $t('app.colorMode.light'),
    value: 'light',
    icon: icons.colorMode.light,
  },
  {
    label: $t('app.colorMode.dark'),
    value: 'dark',
    icon: icons.colorMode.dark,
  },
])

const preference = computed({
  get() {
    return options.value.find((option) => option.value === colorMode.preference) || options.value[0]
  },
  set(option) {
    colorMode.preference = option!.value
  },
})
</script>
