declare module '#auth-utils' {
  interface User {
    id: string
    name: string
    email: string
    role: 'user' | 'admin'
    onlineAt: Date | null
    createdAt: Date | null
  }

  interface Project {
    id: string
    name: string
    role: 'owner' | 'member'
  }

  interface UserSession {
    user: User
    projects: Project[]
  }
}

export {}
