<template>
  <div class="min-h-[49px] flex-shrink-0 flex items-center border-b border-gray-200 dark:border-gray-800 px-4 py-2 gap-x-4">
    <div class="flex items-center justify-between flex-1 gap-x-1.5">
      <slot>
        <div class="flex items-stretch gap-1.5">
          <slot name="left" />
        </div>

        <div class="flex items-stretch gap-1.5">
          <slot name="right" />
        </div>
      </slot>
    </div>
  </div>
</template>
