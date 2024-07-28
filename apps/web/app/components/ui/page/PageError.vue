<template>
  <div class="flex flex-col items-center justify-center">
    <p class="text-base font-semibold text-primary">
      {{ error.statusCode }}
    </p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
      {{ err.title }}
    </h1>
    <p class="mt-6 text-base/7 text-gray-500 dark:text-gray-400 text-center">
      {{ err.message }}
    </p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <UButton
        size="lg"
        :label="$t('error.reload')"
        :icon="icons.error.reload"
        @click="reloadPage"
      />
      <UButton
        v-if="error.statusCode === 404"
        color="white"
        variant="ghost"
        size="lg"
        :label="$t('error.backHome')"
        :icon="icons.error.backHome"
        trailing
        @click="goHome"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const { icons } = useAppConfig()
const switchLocalePath = useSwitchLocalePath()

const err = computed(() => {
  if ([401, 401, 403, 404, 500].includes(props.error.statusCode)) {
    return {
      title: $t(`error.codes.${props.error.statusCode}.title`),
      message: $t(`error.codes.${props.error.statusCode}.message`),
    }
  }

  return {
    title: $t('error.title'),
    message: $t('error.message'),
  }
})

function reloadPage() {
  return reloadNuxtApp()
}

function goHome() {
  return clearError({
    redirect: switchLocalePath('/'),
  })
}
</script>
