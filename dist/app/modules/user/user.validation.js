"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const userRegisterValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Name is required'),
        email: zod_1.z.string().email('Invalid email address'),
        role: zod_1.z.enum(['admin', 'user']).optional().default('user'),
        deactive: zod_1.z.boolean().default(false),
        password: zod_1.z
            .string({ invalid_type_error: "'Password must be string" })
            .max(20),
    }),
});
const updateUserActivation = zod_1.z.object({
    deactive: zod_1.z.boolean().optional(),
});
exports.UserValidation = {
    userRegisterValidationSchema,
    updateUserActivation,
};
