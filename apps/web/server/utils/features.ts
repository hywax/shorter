import type { H3Event } from 'h3'

type Feature = 'accountAllowDelete' | 'authAllowRegistration' | 'emailAllowSend'

export function getFeatures(event?: H3Event): Record<Feature, boolean> {
  const config = useRuntimeConfig(event)
  const accountAllowDelete = ['true', '1'].includes(config.accountAllowDelete)
  const authAllowRegistration = !['false', '0'].includes(config.authAllowRegistration)
  const emailAllowSend = !!(config.emailHost && config.emailPort && config.emailAuthUser && config.emailAuthPassword && config.emailFrom)

  return {
    accountAllowDelete,
    authAllowRegistration,
    emailAllowSend,
  }
}

export function featureIsAvailable(key: Feature, event?: H3Event): boolean {
  const futures = getFeatures(event)

  return futures[key]
}
