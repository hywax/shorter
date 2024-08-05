import { z } from 'zod'

export const accountChangePasswordSchema = z.object({
  currentPassword: z.string().min(6),
  newPassword: z.string().min(6),
  confirmPassword: z.string().min(6),
}).refine((data) => data.newPassword === data.confirmPassword, {
  path: ['confirmPassword'],
})

export type AccountChangePasswordSchema = z.input<typeof accountChangePasswordSchema>
