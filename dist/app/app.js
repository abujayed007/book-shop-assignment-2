"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const books_route_1 = require("./modules/books/books.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// when client hit /api/books go to find exact route
app.use('/api/books', books_route_1.StudentRoutes);
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Server On',
    });
});
exports.default = app;
