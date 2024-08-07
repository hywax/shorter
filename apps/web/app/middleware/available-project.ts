export default defineNuxtRouteMiddleware(async (to) => {
  const { session } = useUserSession()
  const availableProjects = session.value?.projects ?? []
  const projectId = to.params.project as string | undefined

  if (!projectId) {
    abortNavigation(createError({ statusCode: 404 }))
  }

  const project = availableProjects.find((p) => p.id === projectId)
  if (!project) {
    abortNavigation(createError({ statusCode: 403 }))
  }
})
