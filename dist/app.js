"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const books_route_1 = require("./app/modules/books/books.route");
const order_route_1 = require("./app/modules/orders/order.route");
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// create api
app.use('/api/products', books_route_1.StudentRoutes);
app.use('/api/orders', order_route_1.BookRoute);
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Server On',
    });
});
exports.default = app;
