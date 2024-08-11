<template>
  <UModal v-model="modalIsOpen">
    <div class="p-6">
      <MessagesNotImplemented />
    </div>
  </UModal>
</template>

<script setup lang="ts">
const props = defineProps<{
  shortcuts?: string[]
  empty?: boolean
}>()

const emit = defineEmits(['update:modelValue'])
const modalIsOpen = defineModel<boolean>()

function openModal() {
  emit('update:modelValue', true)
}

defineExpose({
  openModal,
  shortcuts: props.shortcuts,
})
</script>
