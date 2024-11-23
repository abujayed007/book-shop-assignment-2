"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
const books_service_1 = require("./books.service");
// Handle create request for create book item
const createBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = req.body;
        const result = yield books_service_1.BookServices.createBookFromDB(book);
        res.status(200).json({
            message: 'Book created successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                message: 'An error occurred',
                success: false,
                error: {
                    name: error.name,
                    message: error.message,
                },
                stack: error.stack,
            });
        }
    }
});
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield books_service_1.BookServices.getAllBooksFromDB();
        res.status(200).json({
            message: 'Books retrieved successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                message: 'An error occurred',
                success: false,
                error: {
                    name: error.name,
                    message: error.message,
                },
                stack: error.stack,
            });
        }
    }
});
exports.BooksController = {
    createBooks,
    getAllBooks,
};
