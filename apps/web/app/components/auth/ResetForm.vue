<template>
  <div>
    <h1 class="text-3xl font-semibold mb-6 text-black dark:text-white text-center">
      {{ $t('auth.reset.title') }}
    </h1>
    <p class="text-sm mb-6 text-gray-500 dark:text-gray-400 text-center">
      {{ $t('auth.reset.description') }}
    </p>

    <UForm
      ref="form"
      class="space-y-4"
      :state="state"
      :schema="authResetSchema"
      @submit="onSubmit"
    >
      <UFormGroup :label="$t('auth.form.token.label')" name="token" required>
        <UInput v-model="state.token" type="text" size="md" :placeholder="$t('auth.form.token.placeholder')" />
      </UFormGroup>

      <UFormGroup :label="$t('auth.form.password.label')" name="password" required>
        <UInput v-model="state.password" type="password" size="md" :placeholder="$t('auth.form.password.placeholder')" />
      </UFormGroup>

      <UButton type="submit" size="md" :loading="status === 'pending'" block>
        {{ $t('auth.form.action.reset') }}
      </UButton>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import type { Form } from '#ui/types'
import { type AuthResetSchema, authResetSchema } from '#schema'

const route = useRoute()

const form = ref<Form<AuthResetSchema>>()
const state = reactive<AuthResetSchema>({
  token: (route.query?.token as string) || '',
  password: '',
})

const { fetch: refreshSession } = useUserSession()
const { status, execute: onSubmit } = useAPI('/api/auth/reset', {
  method: 'post',
  body: state,
  immediate: false,
  watch: false,
  onResponse: async ({ response }) => {
    if (response.ok) {
      await refreshSession()
      await navigateTo('/')
    }
  },
})

const { onChangeLocale } = useI18nUtils()
onChangeLocale(() => {
  form.value?.clear()
})
</script>
