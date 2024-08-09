import { ERROR_ACCOUNT_DELETE_INVALID_DATA, ERROR_DELETE_ACCOUNT_DISABLED } from '#constants/errors'
import { accountDelete } from '#core/services/account'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  if (!['true', '1'].includes(config.accountAllowDelete)) {
    throw errorResolver({}, ERROR_DELETE_ACCOUNT_DISABLED)
  }

  try {
    const data = await readBody(event)
    const session = await getUserSession(event)

    await accountDelete({
      userId: session.user!.id,
      password: data.password,
    })
  } catch (e) {
    throw errorResolver(e, {
      ZOD: ERROR_ACCOUNT_DELETE_INVALID_DATA,
    })
  }
})
