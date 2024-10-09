import { getProjectsAvailableList } from '#core/services/project'
import { updateUserOnlineStatus } from '#core/services/user'

export default defineNitroPlugin(() => {
  sessionHooks.hook('fetch', async (session) => {
    /**
     * Since the `updateUserOnlineStatus` method returns a user, based on it, we can take the actual data model.
     */
    session.user = await updateUserOnlineStatus(session.user!.id)

    /**
     * We get the list of projects available to the user and add it to the session.
     */
    session.projects = await getProjectsAvailableList(session.user.id)
  })
})
