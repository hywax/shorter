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
  </div>
</template>

<script setup lang="ts">
import type { Form } from '#ui/types'
import { type AuthForgotSchema, authForgotSchema } from '#schema'

definePageMeta({
  layout: 'auth',
  middleware: ['guest'],
})

useHead({
  title: () => $t('auth.forgot.title'),
})

const form = ref<Form<AuthForgotSchema>>()
const state = reactive({
  email: 'test@ta.ru',
})

const { status, execute: onSubmit } = useAPI('/api/auth/forgot', {
  method: 'POST',
  body: state,
  immediate: false,
  watch: false,
})

const { onChangeLocale } = useI18nUtils()
onChangeLocale(() => {
  form.value?.clear()
})
</script>
