<template>
  <UContainer>
    <div class="flex items-center justify-between py-6">
      <div>
        <h1 v-if="title || $slots.title" class="text-2xl font-semibold leading-relaxed tracking-tight">
          <slot name="title">
            {{ title }}
          </slot>
        </h1>
        <p v-if="description || $slots.description" class="mb-4 mt-4 max-w-4xl text-base leading-7 text-slate-700">
          <slot name="description">
            {{ description }}
          </slot>
        </p>
      </div>
      <div v-if="$slots.action" class="flex items-center gap-2">
        <slot name="action" />
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  description?: string
}

defineProps<Props>()
</script>
