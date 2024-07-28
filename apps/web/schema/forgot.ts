import { z } from 'zod'

export const forgotSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
})

export type ForgotSchema = z.input<typeof forgotSchema>
