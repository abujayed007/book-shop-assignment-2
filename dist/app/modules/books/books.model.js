"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Books = void 0;
const mongoose_1 = require("mongoose");
// Create a books schema generic with IBook Interface
const booksSchema = new mongoose_1.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        maxlength: 50,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: String,
        default: new Date().toISOString(),
    },
    updatedAt: {
        type: String,
        default: new Date().toISOString(),
    },
}, { timestamps: true });
// Create a model
exports.Books = (0, mongoose_1.model)('Books', booksSchema);
