<template>
  <div>
    <h1 class="text-3xl font-semibold mb-6 text-black dark:text-white text-center">
      {{ $t('auth.register.title') }}
    </h1>
    <p class="text-sm mb-6 text-gray-500 dark:text-gray-400 text-center">
      {{ $t('auth.register.description') }}
    </p>

    <!--
    <div class="mt-4 flex flex-col lg:flex-row items-center justify-between">
      <div class="w-full lg:w-1/2 mb-2 lg:mb-0">
        <UButton icon="i-logos:google-icon" color="gray" variant="solid" label="Sign Up with Google" size="md" />
      </div>
      <div class="w-full lg:w-1/2 ml-0 lg:ml-2">
        <UButton icon="i-logos:github-icon" color="gray" variant="solid" label="Sign Up with Google" size="md" />
      </div>
    </div>
    <div class="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
      <p>or with email</p>
    </div>
    -->

    <UForm class="space-y-4" :state="state" :schema="registerSchema" @submit="onSubmit">
      <UFormGroup :label="$t('auth.form.name')" name="name" required>
        <UInput v-model="state.name" size="md" />
      </UFormGroup>

      <UFormGroup :label="$t('auth.form.email')" name="email" required>
        <UInput v-model="state.email" type="email" size="md" />
      </UFormGroup>

      <UFormGroup :label="$t('auth.form.password')" name="password" required>
        <UInput v-model="state.password" type="password" size="md" />
      </UFormGroup>

      <div class="flex justify-end">
        <ULink :to="localePath('/auth/forgot')" class="text-sm text-gray-700 dark:text-gray-200 hover:underline">
          {{ $t('auth.links.forgot') }}
        </ULink>
      </div>

      <UButton type="submit" size="md" block>
        {{ $t('auth.form.action.register') }}
      </UButton>
    </UForm>

    <div class="mt-4 text-sm text-gray-600 dark:text-gray-500 text-center">
      <I18nT keypath="auth.links.login" scope="global">
        <template #link>
          <ULink :to="localePath('/auth/login')" class="text-primary hover:underline">
            {{ $t('auth.login.title') }}
          </ULink>
        </template>
      </I18nT>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types'
import { type RegisterSchema, registerSchema } from '#schema'

definePageMeta({
  layout: 'auth',
})

useHead({
  title: $t('auth.register.title'),
})

const localePath = useLocalePath()

const state = reactive({
  name: '',
  email: '',
  password: '',
})

function onSubmit(_event: FormSubmitEvent<RegisterSchema>) {

}
</script>
