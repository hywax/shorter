<template>
  <UContainer>
    <div class="grid lg:grid-cols-5 gap-8 py-8 relative">
      <div>
        <div class="flex flex-wrap gap-1 lg:sticky lg:grid top-6">
          <UButton
            v-for="(link, key) in links"
            :key="key"
            variant="ghost"
            color="gray"
            size="lg"
            class="hover:bg-gray-100 dark:hover:bg-gray-800"
            active-class="bg-gray-100 dark:bg-gray-800"
            :to="link.to"
            :exact="link.exact"
            :label="link.label"
            :icon="link.icon"
          />
        </div>
      </div>

      <div class="lg:col-span-4">
        <NuxtPage />
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
interface PageLink {
  label: string
  icon: string
  to: string
  exact?: boolean
}

defineProps<{
  links: PageLink[]
}>()
</script>
