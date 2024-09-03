<template>
  <UModal v-model="modalIsOpen">
    <UForm
      ref="form"
      class="p-6 space-y-4"
      :state="state"
      :schema="projectCreateSchema"
      @submit="onSubmit"
    >
      <UFormGroup :label="$t('projects.create.form.name.label')" name="name" required>
        <UInput v-model="state.name" :placeholder="$t('projects.create.form.name.placeholder')" />
      </UFormGroup>
      <UFormGroup :label="$t('projects.create.form.description.label')" name="description">
        <UInput v-model="state.description" :placeholder="$t('projects.create.form.description.placeholder')" />
      </UFormGroup>

      <UButton type="submit" :loading="status === 'pending'">
        ...
      </UButton>
    </UForm>
  </UModal>
</template>

<script setup lang="ts">
import type { Form } from '#ui/types'
import { type ProjectCreateSchema, projectCreateSchema } from '#schema'

const props = defineProps<{
  shortcuts?: string[]
  empty?: boolean
}>()

const emit = defineEmits(['update:modelValue'])
const modalIsOpen = defineModel<boolean>()

function openModal() {
  emit('update:modelValue', true)
}

const form = ref<Form<ProjectCreateSchema>>()
const state = reactive<ProjectCreateSchema>({
  name: '',
  description: '',
})

function resetState() {
  state.name = ''
  state.description = ''
}

const { fetch: refreshSession } = useUserSession()
const { status, execute: onSubmit } = useAPI('/api/projects', {
  method: 'post',
  body: state,
  immediate: false,
  watch: false,
  onResponse: async ({ response }) => {
    if (response.ok) {
      await refreshSession()
      await navigateTo(`/${response._data.id}`)

      emit('update:modelValue', false)
      resetState()
    }
  },
})

defineExpose({
  openModal,
  shortcuts: props.shortcuts,
})
</script>
