<template>
  <div>
    <h1 class="text-3xl font-semibold mb-6 text-black dark:text-white text-center">
      {{ $t('auth.login.title') }}
    </h1>
    <p class="text-sm mb-6 text-gray-500 dark:text-gray-400 text-center">
      {{ $t('auth.login.description') }}
    </p>

    <UForm
      ref="form"
      class="space-y-4"
      :state="state"
      :schema="authLoginSchema"
      @submit="onSubmit"
    >
      <UAlert
        v-if="error"
        color="red"
        variant="soft"
        :title="$t('auth.errors.title')"
        :description="error"
      />

      <UFormGroup :label="$t('auth.form.email.label')" name="email" required>
        <UInput v-model="state.email" type="email" size="md" :placeholder="$t('auth.form.email.placeholder')" />
      </UFormGroup>

      <UFormGroup :label="$t('auth.form.password.label')" name="password" required>
        <UInput v-model="state.password" type="password" size="md" :placeholder="$t('auth.form.password.placeholder')" />
      </UFormGroup>

      <div class="flex justify-end">
        <ULink to="/auth/forgot" class="text-sm text-gray-700 dark:text-gray-200 hover:underline">
          {{ $t('auth.links.forgot') }}
        </ULink>
      </div>

      <UButton type="submit" size="md" :loading="loading" block>
        {{ $t('auth.form.action.login') }}
      </UButton>
    </UForm>

    <div class="mt-4 text-sm text-gray-600 dark:text-gray-500 text-center">
      <I18nT keypath="auth.links.register" scope="global">
        <template #link>
          <ULink to="/auth/register" class="text-primary hover:underline">
            {{ $t('auth.register.title') }}
          </ULink>
        </template>
      </I18nT>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Form, FormSubmitEvent } from '#ui/types'
import { type AuthLoginSchema, authLoginSchema } from '#schema'

definePageMeta({
  layout: 'auth',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  },
})

useHead({
  title: () => $t('auth.login.title'),
})

const { onChangeLocale } = useI18nUtils()
const router = useRouter()
const route = useRoute()
const { signIn } = useAuth()

const loading = ref(false)
const error = ref<string>('')

const form = ref<Form<AuthLoginSchema>>()
// todo: remove credentials from state
const state = reactive({
  email: 'admin@example.com',
  password: 'password',
})

async function onSubmit(event: FormSubmitEvent<AuthLoginSchema>): Promise<void> {
  loading.value = true
  error.value = ''

  try {
    const data = await signIn('credentials', {
      ...event.data,
      redirect: false,
    })

    if (data?.error) {
      error.value = $t('auth.errors.credentials')

      return
    }

    const nextUrl = (route.query?.callbackUrl as string) || '/'

    if (nextUrl.startsWith('http')) {
      await navigateTo(nextUrl, {
        external: true,
      })
    }

    await router.push(nextUrl)
  } catch (e) {
    console.error(e)
    error.value = $t('auth.errors.unknown')
  } finally {
    loading.value = false
  }
}

onChangeLocale(() => {
  form.value?.clear()
  error.value = ''
})
</script>
