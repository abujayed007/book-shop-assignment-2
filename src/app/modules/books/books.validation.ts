import { z } from 'zod'

const createBooksValidationSchema = z.object({
  body: z.object({
    title: z
      .string()
      .max(50, 'Title cannot exceed 50 characters')
      .min(1, 'Title is required'), // Ensures it's not an empty string
    author: z.string().min(1, 'Author is required'), // Non-empty string
    price: z
      .number()
      .positive('Price must be a positive number')
      .min(0.01, 'Price must be at least 0.01'), // Prevents 0 values
    category: z.string().min(1, 'Category is required'),
    description: z.string().min(1, 'Description is required'),
    quantity: z
      .number()
      .int('Quantity must be an integer')
      .nonnegative('Quantity cannot be negative'), // Ensures non-negative values
    inStock: z.boolean(), // Boolean validation
    image: z.string({ required_error: 'Image is required' }),
  }),
})

const updateBooksValidationSchema = z.object({
  body: z.object({
    title: z
      .string()
      .max(50, 'Title cannot exceed 50 characters')
      .min(1, 'Title is required'), // Ensures it's not an empty string
    author: z.string().min(1, 'Author is required'), // Non-empty string
    price: z
      .number()
      .positive('Price must be a positive number')
      .min(0.01, 'Price must be at least 0.01'), // Prevents 0 values
    category: z.string().min(1, 'Category is required'),
    description: z.string().min(1, 'Description is required'),
    quantity: z
      .number()
      .int('Quantity must be an integer')
      .nonnegative('Quantity cannot be negative'), // Ensures non-negative values
    inStock: z.boolean(), // Boolean validation
    image: z.string({ required_error: 'Image is required' }).optional(),
  }),
})

export const booksValidation = {
  createBooksValidationSchema,
  updateBooksValidationSchema,
}
