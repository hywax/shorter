<template>
  <header :class="headerClasses">
    <UContainer>
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <Logotype />
          <IconBigSeparator />
          <ProjectsSelector />
        </div>
        <div class="flex items-center space-x-6">
          <AccountWidget />
        </div>
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
interface Props {
  transparent?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  transparent: false,
})

const headerClasses = computed(() => [
  props.transparent ? 'bg-transparent' : 'bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800',
])
</script>
