<template>
  <UPageHeader :title="$t('projects.title')" />

  <UContainer>
    <!-- <PageEmpty
      icon="i-heroicons:cube-transparent-20-solid"
      :title="$t('projects.greeting.title')"
      :description="$t('projects.greeting.description')"
    >
      <template #action>
        <UButton
          icon="i-heroicons:plus"
          :label="$t('projects.create.action')"
        />
      </template>
    </PageEmpty> -->
  </UContainer>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})
</script>
