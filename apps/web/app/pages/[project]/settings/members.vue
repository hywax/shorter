<template>
  <UContainer>
    <MessagesNotImplemented />
  </UContainer>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth', 'available-project'],
})
</script>
