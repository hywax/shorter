import { ERROR_TOKEN_EXPIRED, ERROR_TOKEN_INVALID_DATA } from '#constants/errors'
import { getProjectsAvailableList } from '#core/services/project'
import { resetPassword, validateUserPasswordResetToken } from '#core/services/user'

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event)
    const user = await validateUserPasswordResetToken(data.token)

    await resetPassword(user.id, data.password)
    const projects = await getProjectsAvailableList(user.id)
    await setUserSession(event, { user, projects })
  } catch (e) {
    throw errorResolver(e, {
      ERROR_TOKEN_EXPIRED,
      ZOD: ERROR_TOKEN_INVALID_DATA,
    })
  }
})
