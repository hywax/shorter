import { ERROR_REGISTRATION_DISABLED, ERROR_USER_ALL_READY_EXISTS, ERROR_USER_INVALID_DATA } from '#constants/errors'
import { createUser } from '#core/services/user'
import { getProjectsAvailableList } from '#core/services/project'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  if (['false', '0'].includes(config.authAllowRegistration)) {
    throw errorResolver({}, ERROR_REGISTRATION_DISABLED)
  }

  try {
    const data = await readBody(event)
    const user = await createUser(data)
    const projects = await getProjectsAvailableList(user.id)

    await setUserSession(event, { user, projects })
  } catch (e) {
    throw errorResolver(e, {
      ZOD: ERROR_USER_INVALID_DATA,
      SQLITE_CONSTRAINT_UNIQUE: ERROR_USER_ALL_READY_EXISTS,
    })
  }
})
