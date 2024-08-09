<template>
  <UPageHeader :title="$t('projects.title')">
    <template #action>
      <UButton
        :icon="icons.add"
        :label="$t('projects.create.action')"
        @click="isProjectCreateModalOpen = true"
      />
    </template>
  </UPageHeader>
  <UContainer>
    <ProjectsList
      v-if="projects?.length"
      :projects="projects"
    />
    <UPageEmpty
      v-else
      :icon="icons.projects.project"
      :title="$t('projects.greeting.title')"
      :description="$t('projects.greeting.description')"
    />
  </UContainer>
</template>

<script setup lang="ts">
import type { ProjectItem } from '#core/services/project'

definePageMeta({
  middleware: ['auth'],
})

const { icons } = useAppConfig()
const { isProjectCreateModalOpen } = useApp()
const { data: projects } = await useAPI<ProjectItem[]>('/api/projects')
</script>
