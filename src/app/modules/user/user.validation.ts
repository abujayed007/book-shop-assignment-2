import { z } from 'zod'

const userRegisterValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    role: z.enum(['admin', 'user']).optional().default('user'),
    deactive: z.boolean().default(false),
    password: z
      .string({ invalid_type_error: "'Password must be string" })
      .max(20),
  }),
})

const updateUserActivation = z.object({
  deactive: z.boolean().optional(),
})

export const UserValidation = {
  userRegisterValidationSchema,
  updateUserActivation,
}
