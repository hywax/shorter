import type { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      name: string
      email: string
      role: 'user' | 'admin'
      createdAt: string
      updatedAt: string
    }
  }
}
