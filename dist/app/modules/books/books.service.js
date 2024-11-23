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
exports.BookServices = exports.updatedBookQuantity = exports.getSingleBook = void 0;
const books_model_1 = require("./books.model");
// Client create book into database before send data check Books model
const createBookFromDB = (book) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Books.create(book);
    return result;
});
// Get all books from database
const getAllBooksFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Books.find();
    return result;
});
// Get single book from database
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Books.findById(id);
    // console.log(result)
    return result;
});
exports.getSingleBook = getSingleBook;
// update single book from database when data updated successfully updated time automated saved
const updateBook = (productId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const options = { new: true, runValidators: true };
    const result = yield books_model_1.Books.findByIdAndUpdate(productId, data, options);
    return result;
});
// delete book
const deleteBook = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Books.findByIdAndDelete(productId);
    return result;
});
// Update book stock
const updatedBookQuantity = (productId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield books_model_1.Books.findById(productId);
        if (!book) {
            throw new Error('Book not found');
        }
        if (book.quantity < quantity) {
            throw new Error('Insufficient stock');
        }
        book.quantity -= quantity;
        book.inStock = book.quantity < 0;
        yield book.save();
        return book;
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
});
exports.updatedBookQuantity = updatedBookQuantity;
exports.BookServices = {
    createBookFromDB,
    getAllBooksFromDB,
    getSingleBook: exports.getSingleBook,
    updateBook,
    deleteBook,
};
