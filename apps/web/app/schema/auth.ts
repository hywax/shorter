import { z } from 'zod'

export const authLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export const authRegisterSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
})

export const authForgotSchema = z.object({
  email: z.string().email(),
})

export const authResetSchema = z.object({
  password: z.string().min(6),
  token: z.string(),
})

export type AuthLoginSchema = z.input<typeof authLoginSchema>
export type AuthRegisterSchema = z.input<typeof authRegisterSchema>
export type AuthForgotSchema = z.input<typeof authForgotSchema>
export type AuthResetSchema = z.input<typeof authResetSchema>
