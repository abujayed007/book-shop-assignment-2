"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const notFound_1 = require("./middleware/notFound");
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandler_1 = require("./middleware/globalErrorHandler");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({ origin: 'http://localhost:5173', credentials: true }));
// create api
app.use('/api', routes_1.default);
app.use(globalErrorHandler_1.globalErrorHandler);
app.use(notFound_1.notFound);
app.get('/api', (req, res) => {
    res.json({
        success: true,
        message: 'Server On',
    });
});
exports.default = app;
