import type { Project, ProjectDraft, ProjectUser, User } from '#core/database'
import { projectDraftSchema, projectUserDraftSchema, tables, useDatabase } from '#core/database'

export type ProjectAvailable = Pick<ProjectUser, 'role'> & Pick<Project, 'id' | 'name'>

export interface ProjectsListFilters {
  projectsIds?: Project['id'][]
}

export interface AttachUserData {
  userId: User['id']
  projectId: Project['id']
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

/**
 * Create a new project
 *
 * @param data ProjectDraft data
 * @returns Project
 */
export async function createProject(data: ProjectDraft): Promise<Project> {
  const db = useDatabase()

  const projectDraft = projectDraftSchema.parse(data)
  const rows = await db.insert(tables.projects).values({
    ...projectDraft,
  }).returning()

  if (!rows.length) {
    throw new Error('Project not created')
  }

  // todo: find out why errors in types appear during typecheck, remove type casting
  return (rows[0] as Project)
}

/**
 * Attach user to project
 *
 * @param data AttachUserData
 * @returns ProjectUser
 */
export async function attachUserToProject(data: AttachUserData): Promise<ProjectUser> {
  const db = useDatabase()

  const attachDraft = projectUserDraftSchema.parse(data)
  const rows = await db.insert(tables.projectsUsers).values({
    ...attachDraft,
  }).returning()

  if (!rows.length) {
    throw new Error('Project relations not created')
  }

  // todo: find out why errors in types appear during typecheck, remove type casting
  return (rows[0] as ProjectUser)
}
