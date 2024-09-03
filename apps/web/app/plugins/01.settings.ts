export default defineNuxtPlugin(async () => {
  const settings = await $fetch('/api/app/settings')

  return {
    provide: {
      settings,
    },
  }
})
