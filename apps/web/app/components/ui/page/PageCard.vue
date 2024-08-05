<template>
  <UCard>
    <div v-if="title || description" class="flex flex-col space-y-2 mb-6">
      <h2 v-if="title" class="text-xl font-medium">
        {{ title }}
      </h2>
      <p v-if="description" class="text-sm text-gray-500">
        {{ description }}
      </p>
    </div>

    <slot />

    <template v-if="$slots['footer-left'] || $slots['footer-right']" #footer>
      <div class="flex items-center justify-between">
        <div>
          <slot name="footer-left" />
        </div>
        <div>
          <slot name="footer-right" />
        </div>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  description?: string
}

defineProps<Props>()
</script>
