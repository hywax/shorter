import { ERROR_ACCOUNT_PASSWORD_INVALID_DATA, ERROR_ACCOUNT_PASSWORD_NOT_MATCH } from '#constants/errors'
import { accountChangePassword } from '#core/services/account'

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event)
    const session = await getUserSession(event)

    await accountChangePassword({
      userId: session.user!.id,
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    })
  } catch (e) {
    throw errorResolver(e, {
      ZOD: ERROR_ACCOUNT_PASSWORD_INVALID_DATA,
      ERROR_INVALID_PASSWORD: ERROR_ACCOUNT_PASSWORD_NOT_MATCH,
    })
  }
})
