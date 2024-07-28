<template>
  <NuxtLayout name="empty">
    <UPageError :error="error" class="min-h-screen" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()
</script>
