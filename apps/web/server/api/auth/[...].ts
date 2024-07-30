import bcrypt from 'bcrypt'
import Credentials from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'
import { loginSchema } from '#schema'

export default NuxtAuthHandler({
  secret: 'test',
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/logout',
    error: '/auth/error',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user
      }

      return token
    },

    async session({ session, token }) {
      return {
        ...session,
        user: {
          id: token.sub,
          name: session.user?.name,
          email: session.user?.email,
        },
      }
    },
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    Credentials.default({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize(credentials: unknown) {
        const { success, data } = loginSchema.safeParse(credentials)

        if (!success) {
          return null
        }

        // ... get user from database
        const user = {
          id: '263c3217-aabe-4901-b5b5-4283123f31c9',
          name: 'Alex Smith',
          email: 'example@example.com',
          password: '$2b$10$SR7Gu4OeIJ7hRLRVbL45ZOUpwfPU0LB0UCju4Hd1T83nso0S14kce', // example
        }

        if (bcrypt.compareSync(data.password, user.password)) {
          return user
        }

        return null
      },
    }),
  ],
})
