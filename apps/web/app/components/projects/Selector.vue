<template>
  <UPopover>
    <button class="flex items-center gap-3 py-1.5 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-75">
      <UAvatar :alt="currentView.label" :src="currentView.avatar" />
      <span class="inline-block max-w-[100px] truncate text-sm font-medium sm:max-w-[200px]">
        {{ currentView.label }}
      </span>
      <UIcon :name="icons.projects.selector.dropdown" class="text-gray-400 dark:text-gray-700" />
    </button>

    <template #panel>
      <div class="w-60 p-2">
        <div class="flex items-center justify-between mb-2">
          <p class="text-xs text-gray-500">
            {{ $t('projects.title') }}
          </p>

          <ULink to="/" class="rounded-md border border-gray-200 dark:border-gray-800 px-2 py-1 text-xs transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
            {{ $t('projects.selector.viewAll') }}
          </ULink>
        </div>

        <ULink
          v-for="project in projects"
          :key="project.name"
          :to="`/${project.id}`"
          :disabled="project.id === currentProject?.id"
          class="relative flex w-full items-center space-x-2 rounded-md px-2 py-1.5 hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-800 font-medium transition-all duration-75"
        >
          <UAvatar :alt="project.name" :src="getAvatarUrl(project.name)" />

          <div class="block truncate text-sm sm:max-w-[140px] font-medium">
            {{ project.name }}
          </div>
          <div v-if="project.id === currentProject?.id" class="absolute inset-y-0 right-0 flex items-center pr-3 text-black">
            <UIcon name="i-heroicons:check" class="h-5 w-5" />
          </div>
        </ULink>

        <button
          class="relative flex w-full items-center space-x-2 rounded-md px-2 py-1.5 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-75"
          @click="isProjectCreateModalOpen = true"
        >
          <UIcon :name="icons.projects.selector.add" class="h-8 w-8 text-gray-400" />

          <span class="block truncate text-sm sm:max-w-[140px] font-medium">
            {{ $t('projects.selector.add') }}
          </span>
        </button>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
const { icons } = useAppConfig()
const { user } = useUserSession()
const { projects, currentProject } = useProject()
const { isProjectCreateModalOpen } = useApp()

const currentView = computed(() => {
  if (currentProject.value) {
    return {
      label: currentProject.value.name,
      avatar: getAvatarUrl(currentProject.value.name),
    }
  }

  return {
    label: user.value!.name,
    avatar: getAvatarUrl(user.value!.name),
  }
})
</script>
