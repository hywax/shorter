import { z } from 'zod'

export const accountChangePasswordSchema = z.object({
  currentPassword: z.string().min(6),
  newPassword: z.string().min(6),
  confirmPassword: z.string().min(6),
}).refine((data) => data.newPassword === data.confirmPassword, {
  path: ['confirmPassword'],
})

export const accountGeneralSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
})

export const accountDeleteSchema = z.object({
  password: z.string().min(6),
})

export type AccountChangePasswordSchema = z.input<typeof accountChangePasswordSchema>
export type AccountGeneralSchema = z.input<typeof accountGeneralSchema>
export type AccountDeleteSchema = z.input<typeof accountDeleteSchema>
