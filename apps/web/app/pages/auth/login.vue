<template>
  <div>
    <h1 class="text-3xl font-semibold mb-6 text-black dark:text-white text-center">
      {{ $t('auth.login.title') }}
    </h1>
    <p class="text-sm mb-6 text-gray-500 dark:text-gray-400 text-center">
      {{ $t('auth.login.description') }}
    </p>

    <UForm class="space-y-4" :state="state" :schema="loginSchema" @submit="onSubmit">
      <UFormGroup :label="$t('auth.form.email')" name="email" required>
        <UInput v-model="state.email" type="email" size="md" />
      </UFormGroup>

      <UFormGroup :label="$t('auth.form.password')" name="password" required>
        <UInput v-model="state.password" type="password" size="md" />
      </UFormGroup>

      <div class="flex justify-between items-center">
        <UCheckbox v-model="state.remember" name="remember" :label="$t('auth.form.remember')" />
        <ULink :to="localePath('/auth/forgot')" class="text-sm text-gray-700 dark:text-gray-200 hover:underline">
          {{ $t('auth.links.forgot') }}
        </ULink>
      </div>

      <UButton type="submit" size="md" block>
        {{ $t('auth.form.action.login') }}
      </UButton>
    </UForm>

    <div class="mt-4 text-sm text-gray-600 dark:text-gray-500 text-center">
      <I18nT keypath="auth.links.register" scope="global">
        <template #link>
          <ULink :to="localePath('/auth/register')" class="text-primary hover:underline">
            {{ $t('auth.register.title') }}
          </ULink>
        </template>
      </I18nT>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types'
import { type LoginSchema, loginSchema } from '#schema'

definePageMeta({
  layout: 'auth',
})

useHead({
  title: $t('auth.login.title'),
})

const localePath = useLocalePath()

const state = reactive({
  email: '',
  password: '',
  remember: true,
})

function onSubmit(_event: FormSubmitEvent<LoginSchema>) {

}
</script>
