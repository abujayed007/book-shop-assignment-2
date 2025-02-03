import { z } from 'zod'

export const orderValidationSchema = z.object({
  body: z.object({
    email: z.string().email({ message: 'Invalid email format' }),
    user: z.string().min(1, { message: 'User ID is required' }),
    product: z.string().min(1, { message: 'Product ID is required' }),
    quantity: z
      .number()
      .int()
      .positive({ message: 'Quantity must be a positive integer' }),
    totalPrice: z
      .number()
      .positive({ message: 'Total price must be a positive number' }),
  }),
})
