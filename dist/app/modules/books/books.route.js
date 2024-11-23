"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("./books.controller");
const router = express_1.default.Router();
// Client found post route for create book item
router.post('/create-book', books_controller_1.BooksController.createBooks);
router.get('/', books_controller_1.BooksController.getAllBooks);
exports.StudentRoutes = router;
