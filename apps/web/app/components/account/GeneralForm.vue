<template>
  <UForm
    ref="form"
    :state="state"
    :schema="accountGeneralSchema"
    @submit="onSubmit"
  >
    <UPageCard
      :title="$t('account.general.title')"
      :description="$t('account.general.description')"
    >
      <div class="space-y-4">
        <UFormGroup
          :label="$t('account.general.form.name.label')"
          name="name"
          required
        >
          <UInput
            v-model="state.name"
            :placeholder="$t('account.general.form.name.placeholder')"
          />
        </UFormGroup>
        <UFormGroup
          :label="$t('account.general.form.email.label')"
          name="email"
          required
        >
          <UInput
            v-model="state.email"
            :placeholder="$t('account.general.form.email.placeholder')"
          />
        </UFormGroup>
      </div>
      <template #footer-left>
        <UButton type="submit" :loading="status === 'pending'">
          {{ $t('account.general.form.action.update') }}
        </UButton>
      </template>
    </UPageCard>
  </UForm>
</template>

<script setup lang="ts">
import type { Form } from '#ui/types'
import { type AccountGeneralSchema, accountGeneralSchema } from '#schema'

const { user, fetch: refreshSession } = useUserSession()

const form = ref<Form<AccountGeneralSchema>>()
const state = reactive<AccountGeneralSchema>({
  name: '',
  email: '',
})

function setStateFromSession() {
  state.name = user.value!.name || ''
  state.email = user.value!.email || ''
}

setStateFromSession()

const toast = useToast()
const { status, execute: onSubmit } = useAPI('/api/account', {
  method: 'put',
  body: state,
  immediate: false,
  watch: false,
  onResponse: async ({ response }) => {
    if (response.ok) {
      toast.add({
        color: 'green',
        description: $t('account.general.form.action.updated'),
      })

      await refreshSession()
      setStateFromSession()
    }
  },
})
</script>
