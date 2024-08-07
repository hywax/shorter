<template>
  <UPageCard
    :title="$t('account.delete.title')"
    :description="$t('account.delete.description')"
    color="red"
  >
    <UModal v-model="modalIsOpen">
      <div class="p-6">
        <div class="flex flex-col space-y-2 mb-6">
          <h2 class="text-xl font-medium">
            {{ $t('account.delete.title') }}
          </h2>
          <p class="text-sm text-gray-500">
            {{ $t('account.delete.confirm') }}
          </p>
        </div>

        <UForm
          ref="form"
          :state="state"
          :schema="accountDeleteSchema"
          @submit="onSubmit"
        >
          <div class="space-y-4">
            <UFormGroup
              :label="$t('account.delete.form.password.label')"
              name="password"
              required
            >
              <UInput
                v-model="state.password"
                type="password"
                :placeholder="$t('account.delete.form.password.placeholder')"
              />
            </UFormGroup>
            <UFormGroup>
              <UButton type="submit" color="red" :loading="status === 'pending'">
                {{ $t('account.delete.form.action.delete') }}
              </UButton>
            </UFormGroup>
          </div>
        </UForm>
      </div>
    </UModal>

    <template #footer-left>
      <UButton color="red" @click="modalIsOpen = true">
        {{ $t('account.delete.form.action.delete') }}
      </UButton>
    </template>
  </UPageCard>
</template>

<script setup lang="ts">
import type { Form } from '#ui/types'
import { type AccountDeleteSchema, accountDeleteSchema } from '#schema'

const { clear } = useUserSession()

const modalIsOpen = ref(false)
const form = ref<Form<AccountDeleteSchema>>()
const state = reactive<AccountDeleteSchema>({
  password: '',
})

const toast = useToast()
const { status, execute: onSubmit } = useAPI('/api/account', {
  method: 'delete',
  body: state,
  immediate: false,
  watch: false,
  onResponse: async ({ response }) => {
    if (response.ok) {
      modalIsOpen.value = false

      toast.add({
        color: 'green',
        description: $t('account.delete.form.action.deleted'),
      })

      await clear()
      await navigateTo('/auth/login')
    }
  },
})
</script>
