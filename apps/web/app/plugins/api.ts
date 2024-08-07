import type { Composer } from 'vue-i18n'

export default defineNuxtPlugin((nuxtApp) => {
  const toast = useToast()
  const i18n = nuxtApp.$i18n as Composer

  const api = $fetch.create({
    headers: useRequestHeaders(['cookie']),
    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo('/auth/login'))
      }

      const customCode = response._data.data?.code || `${response.status}000`

      toast.add({
        title: i18n.t('error.title'),
        description: i18n.t(`error.codes.${customCode}`),
        color: 'red',
      })
    },
  })

  return {
    provide: {
      api,
    },
  }
})
