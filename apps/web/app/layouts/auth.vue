<template>
  <div class="flex h-screen bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:gray-900">
    <div class="hidden lg:flex items-center justify-center flex-1 text-black">
      <div class="max-w-md text-center" />
    </div>

    <div class="w-full bg-background lg:w-1/2 flex flex-col">
      <header class="px-6 pt-6 flex justify-end">
        <LocaleSelector />
      </header>

      <main class="flex-1 flex items-center justify-center">
        <div class="w-full max-w-md p-6">
          <slot />
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>
