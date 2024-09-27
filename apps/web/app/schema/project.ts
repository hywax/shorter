import { z } from 'zod'

export const projectCreateSchema = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
})

export type ProjectCreateSchema = z.input<typeof projectCreateSchema>
