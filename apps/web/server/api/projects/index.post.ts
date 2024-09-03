import { ERROR_PROJECT_ALL_READY_EXISTS, ERROR_PROJECT_CREATE_INVALID_DATA } from '#constants/errors'
import { attachUserToProject, createProject, getProjectsAvailableList } from '#core/services/project'

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event)
    const session = await getUserSession(event)
    const project = await createProject(data)

    await attachUserToProject({
      userId: session.user!.id,
      projectId: project.id,
    })

    const projects = await getProjectsAvailableList(session.user!.id)

    await setUserSession(event, {
      user: session.user,
      projects,
    })

    return project
  } catch (e) {
    throw errorResolver(e, {
      ZOD: ERROR_PROJECT_CREATE_INVALID_DATA,
      SQLITE_CONSTRAINT_UNIQUE: ERROR_PROJECT_ALL_READY_EXISTS,
    })
  }
})
