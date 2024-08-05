<template>
  <header class="border-b bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
    <UContainer>
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <Logotype />
          <IconBigSeparator />
          <ProjectSelector />
        </div>
        <div class="flex items-center space-x-6">
          <AccountWidget />
        </div>
      </div>
    </UContainer>
  </header>
</template>
