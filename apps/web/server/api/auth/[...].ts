import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import { NuxtAuthHandler } from '#auth'
import { userService } from '#services'

export default NuxtAuthHandler({
  secret: useRuntimeConfig().authSecret,
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/logout',
    error: '/auth/error',
  },
  callbacks: {
    /**
     * JWT callback to process user data and enrichment.
     */
    jwt({ token, user }) {
      if (user) {
        token.user = user
      }

      return token
    },
    /**
     * Session callback to process user session data and enrichment.
     * Since the `markUserOnline` method returns a user, based on it, we can take the actual data model.
     */
    async session({ session, token }) {
      const { markUserOnline } = userService()
      const user = await markUserOnline(token.sub as string)

      return {
        ...session,
        user,
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
      async authorize(credentials: unknown) {
        const loginSchema = z.object({
          email: z.string().email(),
          password: z.string().min(6),
        })

        const { success, data } = loginSchema.safeParse(credentials)

        if (!success) {
          return null
        }

        const { findByCredentials } = userService()
        const user = await findByCredentials(data.email, data.password)

        if (user) {
          return user
        }

        return null
      },
    }),
  ],
})
