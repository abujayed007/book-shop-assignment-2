"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksValidation = void 0;
const zod_1 = require("zod");
const createBooksValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string()
            .max(50, 'Title cannot exceed 50 characters')
            .min(1, 'Title is required'), // Ensures it's not an empty string
        author: zod_1.z.string().min(1, 'Author is required'), // Non-empty string
        price: zod_1.z
            .number()
            .positive('Price must be a positive number')
            .min(0.01, 'Price must be at least 0.01'), // Prevents 0 values
        category: zod_1.z.string().min(1, 'Category is required'),
        description: zod_1.z.string().min(1, 'Description is required'),
        quantity: zod_1.z
            .number()
            .int('Quantity must be an integer')
            .nonnegative('Quantity cannot be negative'), // Ensures non-negative values
        inStock: zod_1.z.boolean(), // Boolean validation
    }),
});
const updateBooksValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string()
            .max(50, 'Title cannot exceed 50 characters')
            .min(1, 'Title is required'), // Ensures it's not an empty string
        author: zod_1.z.string().min(1, 'Author is required'), // Non-empty string
        price: zod_1.z
            .number()
            .positive('Price must be a positive number')
            .min(0.01, 'Price must be at least 0.01'), // Prevents 0 values
        category: zod_1.z.string().min(1, 'Category is required'),
        description: zod_1.z.string().min(1, 'Description is required'),
        quantity: zod_1.z
            .number()
            .int('Quantity must be an integer')
            .nonnegative('Quantity cannot be negative'), // Ensures non-negative values
        inStock: zod_1.z.boolean(), // Boolean validation
    }),
});
exports.booksValidation = {
    createBooksValidationSchema,
    updateBooksValidationSchema,
};
