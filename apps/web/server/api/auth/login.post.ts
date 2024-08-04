import { ERROR_USER_INVALID_CREDENTIALS, ERROR_USER_INVALID_DATA } from '#constants/errors'
import { validateUserCredentials } from '#services/user'

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event)
    const user = await validateUserCredentials(data)

    await setUserSession(event, { user })
  } catch (e) {
    throw errorResolver(e, {
      ZOD: ERROR_USER_INVALID_DATA,
      DEFAULT: ERROR_USER_INVALID_CREDENTIALS,
    })
  }
})
