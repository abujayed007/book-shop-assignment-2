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
exports.BookServices = void 0;
const books_model_1 = require("./books.model");
// Client create book into DB before send data check Books model
const createBookFromDB = (book) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Books.create(book);
    return result;
});
const getAllBooksFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Books.find();
    return result;
});
exports.BookServices = {
    createBookFromDB,
    getAllBooksFromDB,
};
