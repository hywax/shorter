import { ERROR_USER_INVALID_CREDENTIALS, ERROR_USER_INVALID_DATA } from '#constants/errors'
import { getProjectsAvailableList } from '#core/services/project'
import { validateUserCredentials } from '#core/services/user'

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event)
    const user = await validateUserCredentials(data)
    const projects = await getProjectsAvailableList(user.id)

    await setUserSession(event, { user, projects })
  } catch (e) {
    throw errorResolver(e, {
      ZOD: ERROR_USER_INVALID_DATA,
      DEFAULT: ERROR_USER_INVALID_CREDENTIALS,
    })
  }
})
