<template>
  <UModal v-model="modalIsOpen">
    <UForm
      ref="form"
      :state="state"
      :schema="projectCreateSchema"
      @submit="onSubmit"
    >
      <UPageCard
        :title="$t('projects.create.title')"
        :description="$t('projects.create.description')"
      >
        <div class="space-y-4">
          <UFormGroup :label="$t('projects.create.form.name.label')" name="name" required>
            <UInput v-model="state.name" :placeholder="$t('projects.create.form.name.placeholder')" />
          </UFormGroup>
          <UFormGroup :label="$t('projects.create.form.description.label')" name="description">
            <UTextarea v-model="state.description" :placeholder="$t('projects.create.form.description.placeholder')" />
          </UFormGroup>
        </div>

        <template #footer-left>
          <UButton type="submit" :loading="status === 'pending'">
            {{ $t('projects.create.form.action.create') }}
          </UButton>
        </template>
      </UPageCard>
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
