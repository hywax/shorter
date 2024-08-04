import type { UseFetchOptions } from 'nuxt/app'

export function useAPI<T>(
  url: string | (() => string),
  options: Omit<UseFetchOptions<T>, 'default'> & { default?: () => T | Ref<T> },
) {
  return useFetch(url, {
    ...options,
    // @ts-expect-error no overload matches this call. Nuxt plans to convert to an easier way to create a custom http client.
    $fetch: useNuxtApp().$api,
  })
}
