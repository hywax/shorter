export interface I18nDictionaryItem {
  label: string
  icon: string
  to: string
  disabled: boolean
}

export function useI18nDictionary() {
  const { icons } = useAppConfig()
  const { locales, locale } = useI18n()
  const switchLocalePath = useSwitchLocalePath()

  const localesMap = computed(() => {
    return locales.value.reduce<Record<string, I18nDictionaryItem>>((acc, item) => {
      acc[item.code] = {
        label: item.name || item.code,
        icon: Object.hasOwn(icons.flags, item.code) ? icons.flags[item.code as keyof typeof icons.flags] : icons.flags.en,
        to: switchLocalePath(item.code),
        disabled: item.code === locale.value,
      }

      return acc
    }, {})
  })

  const currentLocale = computed(() => localesMap.value[locale.value]!)

  return {
    localesMap,
    currentLocale,
  }
}
