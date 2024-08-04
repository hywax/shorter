import { updateUserOnlineStatus } from '#services/user'

export default defineNitroPlugin(() => {
  sessionHooks.hook('fetch', async (session) => {
    /**
     * Since the `updateUserOnlineStatus` method returns a user, based on it, we can take the actual data model.
     */
    session.user = await updateUserOnlineStatus(session.user.id)
  })
})
