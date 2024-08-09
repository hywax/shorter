<template>
  <NuxtLink :to="`/${project.id}`" class="group">
    <UCard class="group-hover:shadow-md">
      <div class="flex gap-4">
        <UAvatar
          size="lg"
          :src="getAvatarUrl(project.name)"
          :alt="project.name"
        />

        <div>
          <h3 class="text-lg font-semibold line-clamp-1">
            {{ project.name }}
          </h3>
          <p class="text-sm text-gray-500 line-clamp-1">
            {{ project.description }}
          </p>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center justify-between">
          <UAvatarGroup :max="4">
            <UAvatar
              v-for="user in project.users"
              :key="user.id"
              :src="getAvatarUrl(user.name)"
            />
          </UAvatarGroup>

          <div class="flex items-center gap-3 text-gray-500">
            <div class="flex items-center gap-1.5">
              <UIcon :name="icons.projects.clicks" />
              <span class="text-sm">0</span>
            </div>

            <div class="flex items-center gap-1.5">
              <UIcon :name="icons.projects.links" />
              <span class="text-sm">0</span>
            </div>
          </div>
        </div>
      </template>
    </UCard>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { ProjectItem } from '#core/services/project'

defineProps<{
  project: ProjectItem
}>()

const { icons } = useAppConfig()
</script>
