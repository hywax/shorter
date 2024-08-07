import { getProjectsAvailableIds, getProjectsList } from '#services/project'

export default defineEventHandler(async (event) => {
  try {
    const session = await getUserSession(event)
    const projectsIds = await getProjectsAvailableIds(session.user!.id)

    return await getProjectsList({ projectsIds })
  } catch (e) {
    throw errorResolver(e)
  }
})
