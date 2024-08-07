export function useProject() {
  const { session } = useUserSession()
  const { currentRoute } = useRouter()

  const projects = computed(() => session.value?.projects ?? [])
  // todo: Add an inside check that we are on the project page. Right now we get the projectId from the root parameter, but this is not safe
  const currentProjectId = computed(() => currentRoute.value.params.project as string | undefined)
  const currentProject = computed(() => projects.value.find((p) => p.id === currentProjectId.value))

  return {
    projects,
    currentProjectId,
    currentProject,
  }
}
