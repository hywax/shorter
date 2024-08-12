<template>
  <div class="roadmap-item">
    <i v-if="status === 'done'" class="i-carbon:checkmark-filled" />
    <i v-else-if="status === 'in-progress'" class="i-carbon:circle-dash in-progress" />
    <i v-else class="i-carbon:time" />
    <p>
      <strong>{{ title }}</strong> - {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  status: 'done' | 'in-progress' | 'planned'
  link?: string
}>()
</script>

<style scoped>
.roadmap-item {
  position: relative;
  padding-left: 1.75rem;

  i {
    position: absolute;
    left: 0;
    top: 0.25rem;
    margin-right: 0.5rem;
    color: var(--vp-c-brand-1);
  }

  p {
    margin: 0;
  }

  .in-progress {
    animation: spin 1s linear infinite;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
