<template>
  <header class="border-b bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
    <UContainer>
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <Logotype />

          <svg fill="none" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" width="14" height="14" class="hidden h-8 w-8 text-gray-200 sm:ml-3 sm:block">
            <path d="M16.88 3.549L7.12 20.451" />
          </svg>

          <ProjectSelector />
        </div>
        <div class="flex items-center space-x-6">
          <AccountDropdown />
        </div>
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
</script>
