export interface I18nDictionary {
  code: string
  label: string
  icon: string
  disabled: boolean
}

export function _useI18nUtils() {
  const { icons } = useAppConfig()
  const { locale, locales } = useI18n()

  const onChangeLocale = (callback: () => void) => watch(locale, callback)

  const localesDictionary = computed(() => {
    return locales.value.reduce<Record<string, I18nDictionary>>((acc, item) => {
      acc[item.code] = {
        code: item.code,
        label: item.name || item.code,
        icon: Object.hasOwn(icons.flags, item.code) ? icons.flags[item.code as keyof typeof icons.flags] : icons.flags.en,
        disabled: item.code === locale.value,
      }

      return acc
    }, {})
  })

  const currentLocale = computed(() => localesDictionary.value[locale.value]!)

  return {
    currentLocale,
    localesDictionary,
    onChangeLocale,
  }
}

export const useI18nUtils = createSharedComposable(_useI18nUtils)
