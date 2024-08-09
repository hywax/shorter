<template>
  <div class="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
    <div
      v-for="project in projects"
      :key="project.id"
    >
      <ProjectsCard :project="project" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectItem } from '#core/services/project'

defineProps<{
  projects: ProjectItem[]
}>()
</script>
