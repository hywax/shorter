import { ERROR_ACCOUNT_GENERAL_INVALID_DATA, ERROR_USER_ALL_READY_EXISTS } from '#constants/errors'
import { changeGeneralInfo } from '#core/services/account'

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event)
    const session = await getUserSession(event)

    await changeGeneralInfo({
      userId: session.user!.id,
      name: data.name,
      email: data.email,
    })
  } catch (e) {
    throw errorResolver(e, {
      ZOD: ERROR_ACCOUNT_GENERAL_INVALID_DATA,
      SQLITE_CONSTRAINT_UNIQUE: ERROR_USER_ALL_READY_EXISTS,
    })
  }
})
