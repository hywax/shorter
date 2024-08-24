export default defineNuxtPlugin(async () => {
  const settings = await useFetch('/api/app/settings')

  return {
    provide: {
      settings: settings.data.value,
    },
  }
})
