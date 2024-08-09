import { useDatabase } from '#core/database'
import type { Project, ProjectUser, User } from '#core/database'

export type ProjectAvailable = Pick<ProjectUser, 'role'> & Pick<Project, 'id' | 'name'>

export interface ProjectsListFilters {
  projectsIds?: Project['id'][]
}

export type ProjectItem = Project & {
  users: (Pick<User, 'id' | 'name'> & Pick<ProjectUser, 'role'>)[]
}

/**
 * Get a list of projects available to the user
 *
 * @param userId
 * @returns ProjectAvailable[]
 */
export async function getProjectsAvailableList(userId: User['id']): Promise<ProjectAvailable[]> {
  const db = useDatabase()

  const projects = await db.query.projectsUsers.findMany({
    columns: {
      projectId: true,
      role: true,
    },
    with: {
      project: {
        columns: {
          name: true,
        },
      },
    },
    where: (projectsUsers, { eq }) => eq(projectsUsers.userId, userId),
  })

  return projects.map<ProjectAvailable>((project) => ({
    id: project.projectId,
    name: project.project.name,
    role: project.role,
  }))
}

/**
 * Get a list of project IDs available to the user
 *
 * @param userId
 * @returns Project['id'][]
 */
export async function getProjectsAvailableIds(userId: User['id']): Promise<Project['id'][]> {
  const db = useDatabase()

  const projects = await db.query.projectsUsers.findMany({
    columns: {
      projectId: true,
    },
    where: (projectsUsers, { eq }) => eq(projectsUsers.userId, userId),
  })

  return projects.map<Project['id']>((project) => project.projectId)
}

/**
 * Get a list of projects
 *
 * @param filters
 * @returns AvailableProject[]
 */
export async function getProjectsList(filters?: ProjectsListFilters): Promise<ProjectItem[]> {
  const db = useDatabase()

  const data = await db.query.projects.findMany({
    with: {
      users: {
        columns: {
          role: true,
        },
        with: {
          user: {
            columns: {
              id: true,
              name: true,
              role: true,
            },
          },
        },
      },
    },
    ...(filters?.projectsIds
      ? {
          where: (projects, { inArray }) => inArray(projects.id, filters.projectsIds || []),
        }
      : {}),
  })

  return data.map<ProjectItem>((row) => ({
    ...row,
    users: row.users.map((entity) => ({
      ...entity.user,
      role: entity.role,
    })),
  }))
}
