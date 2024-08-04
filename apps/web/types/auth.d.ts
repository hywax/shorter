declare module '#auth-utils' {
  interface User {
    id: string
    name: string
    email: string
    role: 'user' | 'admin'
    onlineAt: Date | null
    createdAt: Date | null
  }

  interface UserSession {
    user: User
  }
}

export {}
