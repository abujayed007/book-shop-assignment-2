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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = require("../../error/AppError");
const user_model_1 = require("./user.model");
const registerUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    if (yield user_model_1.User.isUserExists(user === null || user === void 0 ? void 0 : user.email)) {
        throw new AppError_1.AppError(http_status_1.default.CONFLICT, 'User already created');
    }
    const result = yield user_model_1.User.create(user);
    return result;
});
const updateUserActivationStatus = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findById(id);
    if ((user === null || user === void 0 ? void 0 : user.deactive) === true) {
        return yield user_model_1.User.findByIdAndUpdate(id, { deactive: false }, { new: true, runValidators: true });
    }
    if ((user === null || user === void 0 ? void 0 : user.deactive) === false) {
        return yield user_model_1.User.findByIdAndUpdate(id, { deactive: true }, { new: true, runValidators: true });
    }
});
exports.UserService = {
    registerUser,
    updateUserActivationStatus,
};
