function _useApp() {
  const route = useRoute()

  const isProjectCreateModalOpen = ref(false)
  const isHelpSlideoverOpen = ref(false)

  defineShortcuts({
    '?': () => isHelpSlideoverOpen.value = true,
  })

  watch(() => route.fullPath, () => {
    isProjectCreateModalOpen.value = false
    isHelpSlideoverOpen.value = false
  })

  return {
    isProjectCreateModalOpen,
    isHelpSlideoverOpen,
  }
}

export const useApp = createSharedComposable(_useApp)
