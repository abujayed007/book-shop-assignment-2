"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationSchema = void 0;
const zod_1 = require("zod");
exports.orderValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email({ message: 'Invalid email format' }),
        user: zod_1.z.string().min(1, { message: 'User ID is required' }),
        product: zod_1.z.string().min(1, { message: 'Product ID is required' }),
        quantity: zod_1.z
            .number()
            .int()
            .positive({ message: 'Quantity must be a positive integer' }),
        totalPrice: zod_1.z
            .number()
            .positive({ message: 'Total price must be a positive number' }),
    }),
});
