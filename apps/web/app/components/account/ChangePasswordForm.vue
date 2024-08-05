<template>
  <UForm
    ref="form"
    :state="state"
    :schema="accountChangePasswordSchema"
    @submit="onSubmit"
  >
    <UPageCard
      :title="$t('account.changePassword.title')"
      :description="$t('account.changePassword.description')"
    >
      <div class="space-y-4">
        <UFormGroup
          :label="$t('account.changePassword.form.currentPassword.label')"
          name="currentPassword"
          required
        >
          <UInput
            v-model="state.currentPassword"
            size="md"
            type="password"
            :placeholder="$t('account.changePassword.form.currentPassword.placeholder')"
          />
        </UFormGroup>
        <UFormGroup
          :label="$t('account.changePassword.form.newPassword.label')"
          name="newPassword"
          required
        >
          <UInput
            v-model="state.newPassword"
            size="md"
            type="password"
            :placeholder="$t('account.changePassword.form.newPassword.placeholder')"
          />
        </UFormGroup>
        <UFormGroup
          :label="$t('account.changePassword.form.confirmPassword.label')"
          name="confirmPassword"
          required
        >
          <UInput
            v-model="state.confirmPassword"
            size="md"
            type="password"
            :placeholder="$t('account.changePassword.form.confirmPassword.placeholder')"
          />
        </UFormGroup>
      </div>
      <template #footer-left>
        <UButton size="lg" type="submit" :loading="status === 'pending'">
          {{ $t('account.changePassword.form.action.change') }}
        </UButton>
      </template>
    </UPageCard>
  </UForm>
</template>

<script setup lang="ts">
import type { Form } from '#ui/types'
import { type AccountChangePasswordSchema, accountChangePasswordSchema } from '#schema'

const form = ref<Form<AccountChangePasswordSchema>>()
const state = reactive({
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
})

const toast = useToast()
const { status, execute: onSubmit } = useAPI('/api/account/change-password', {
  method: 'PUT',
  body: state,
  immediate: false,
  watch: false,
  onResponse: async ({ response }) => {
    if (response.ok) {
      toast.add({
        color: 'green',
        description: $t('account.changePassword.form.action.changed'),
      })
    }
  },
})
</script>
