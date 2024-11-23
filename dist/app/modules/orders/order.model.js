"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
    },
    product: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
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
const Order = (0, mongoose_1.model)('Order', orderSchema);
exports.default = Order;
