<template>
  <div>
    <h1 class="text-3xl font-semibold mb-6 text-black dark:text-white text-center">
      {{ $t('auth.forgot.title') }}
    </h1>
    <p class="text-sm mb-6 text-gray-500 dark:text-gray-400 text-center">
      {{ $t('auth.forgot.description') }}
    </p>

    <UForm class="space-y-4" :state="state" :schema="forgotSchema" @submit="onSubmit">
      <UFormGroup :label="$t('auth.form.email')" name="email" required>
        <UInput v-model="state.email" type="email" size="md" />
      </UFormGroup>

      <UButton type="submit" size="md" block>
        {{ $t('auth.form.action.forgot') }}
      </UButton>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types'
import { type ForgotSchema, forgotSchema } from '#schema'

definePageMeta({
  layout: 'auth',
})

useHead({
  title: $t('auth.forgot.title'),
})

const state = reactive({
  email: '',
})

function onSubmit(_event: FormSubmitEvent<ForgotSchema>) {

}
</script>
