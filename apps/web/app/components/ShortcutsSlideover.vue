<template>
  <USlideover v-model="modalIsOpen">
    <div class="font-semibold select-text p-4">
      {{ $t('app.shortcuts.title') }}
    </div>

    <div class="flex flex-col gap-6 px-4 pt-4 pb-16 overflow-y-auto">
      <div v-for="section in sections" :key="section.title">
        <p class="mb-2 text-sm font-medium">
          {{ section.title }}
        </p>

        <div
          v-for="shortcut in section.shortcuts"
          :key="shortcut.label"
          class="flex justify-between mb-2 last:mb-0"
        >
          <div class="flex items-center text-sm text-gray-500">
            {{ shortcut.label }}
          </div>
          <div class="flex items-center justify-end flex-shrink-0 gap-0.5">
            <UKbd v-for="key in shortcut.keys" :key="key">
              {{ key }}
            </UKbd>
          </div>
        </div>
      </div>
    </div>
  </USlideover>
</template>

<script setup lang="ts">
const modalIsOpen = defineModel()
const sections = computed(() => [
  {
    title: $t('app.shortcuts.general.title'),
    shortcuts: [
      {
        label: $t('app.shortcuts.general.shortcuts'),
        keys: ['?'],
      },
      {
        label: $t('app.shortcuts.general.createProject'),
        keys: ['P'],
      },
    ],
  },
  {
    title: $t('app.shortcuts.projects.title'),
    shortcuts: [
      {
        label: $t('app.shortcuts.projects.createLink'),
        keys: ['C'],
      },
      {
        label: $t('app.shortcuts.projects.link'),
        keys: ['L'],
      },
      {
        label: $t('app.shortcuts.projects.analytics'),
        keys: ['A'],
      },
      {
        label: $t('app.shortcuts.projects.events'),
        keys: ['E'],
      },
      {
        label: $t('app.shortcuts.projects.settings'),
        keys: [','],
      },
    ],
  },
])
</script>
