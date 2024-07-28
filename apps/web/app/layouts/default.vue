<template>
  <div class="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900/75">
    <Header />

    <main class="flex-1 relative">
      <NuxtErrorBoundary>
        <template #error="{ error }">
          <UPageError :error="error" class="min-h-full" />
        </template>

        <slot />
      </NuxtErrorBoundary>
    </main>

    <Footer />
  </div>
</template>
