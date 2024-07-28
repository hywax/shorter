<template>
  <UCard>
    <div class="flex flex-col items-center justify-center p-8">
      <div v-if="icon || $slots.icon" class="text-surface-500 mb-6">
        <slot name="icon">
          <UIcon v-if="icon" :name="icon" class="h-10 w-10 text-primary" />
        </slot>
      </div>

      <div v-if="title || $slots.title" class="text-gray-900 dark:text-white text-base font-semibold truncate flex items-center gap-1.5">
        <slot name="title">
          {{ title }}
        </slot>
      </div>

      <div v-if="description || $slots.description" class="text-[15px] text-gray-500 dark:text-gray-400 mt-2">
        <slot name="description">
          {{ description }}
        </slot>
      </div>

      <div v-if="$slots.action" class="mt-6">
        <slot name="action" />
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
interface Props {
  icon?: string
  title?: string
  description?: string
}

defineProps<Props>()
</script>
