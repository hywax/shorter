<template>
  <div>
    <h1 class="text-3xl font-semibold mb-6 text-black dark:text-white text-center">
      {{ $t('auth.forgot.title') }}
    </h1>
    <p class="text-sm mb-6 text-gray-500 dark:text-gray-400 text-center">
      {{ $t('auth.forgot.description') }}
    </p>

    <UForm
      ref="form"
      class="space-y-4"
      :state="state"
      :schema="authForgotSchema"
      @submit="onSubmit"
    >
      <UFormGroup :label="$t('auth.form.email.label')" name="email" required>
        <UInput v-model="state.email" type="email" size="md" :placeholder="$t('auth.form.email.placeholder')" />
      </UFormGroup>

      <UButton type="submit" size="md" :loading="status === 'pending'" block>
        {{ $t('auth.form.action.forgot') }}
      </UButton>
    </UForm>

    <div class="mt-4 text-sm text-gray-600 dark:text-gray-500 text-center">
      <I18nT keypath="auth.links.login" scope="global">
        <template #link>
          <ULink to="/auth/login" class="text-primary hover:underline">
            {{ $t('auth.login.title') }}
          </ULink>
        </template>
      </I18nT>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Form } from '#ui/types'
import { type AuthForgotSchema, authForgotSchema } from '#schema'

const form = ref<Form<AuthForgotSchema>>()
const state = reactive<AuthForgotSchema>({
  email: '',
})

const { status, execute: onSubmit } = useAPI('/api/auth/forgot', {
  method: 'post',
  body: state,
  immediate: false,
  watch: false,
  onResponse: async ({ response }) => {
    if (response.ok) {
      await navigateTo('/auth/reset')
    }
  },
})

const { onChangeLocale } = useI18nUtils()
onChangeLocale(() => {
  form.value?.clear()
})
</script>
