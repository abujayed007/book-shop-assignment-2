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
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = require("../../error/AppError");
const user_model_1 = require("../user/user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.isUserExists(payload === null || payload === void 0 ? void 0 : payload.email);
    // console.log(user)
    if (!user) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'User not found');
    }
    if (user.deactive === true) {
        throw new AppError_1.AppError(http_status_1.default.NOT_ACCEPTABLE, 'User is deactived');
    }
    if (!(yield user_model_1.User.isPasswordMatched(payload.password, user === null || user === void 0 ? void 0 : user.password))) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, 'Password not mached');
    }
    const jwtPayload = {
        email: user.email,
        role: user.role,
    };
    const accessToken = jsonwebtoken_1.default.sign(jwtPayload, config_1.default.jwt_access_secret, {
        expiresIn: '7d',
    });
    const refreshToken = jsonwebtoken_1.default.sign(jwtPayload, config_1.default.jwt_refresh_secret, {
        expiresIn: '30d',
    });
    return {
        accessToken,
        refreshToken,
    };
});
const changePassword = (userData, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.isUserExists(userData === null || userData === void 0 ? void 0 : userData.email);
    if (!user) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'User not found');
    }
    if (user.deactive === true) {
        throw new AppError_1.AppError(http_status_1.default.NOT_ACCEPTABLE, 'User is deactived');
    }
    if (!(yield user_model_1.User.isPasswordMatched(payload === null || payload === void 0 ? void 0 : payload.oldPassword, user === null || user === void 0 ? void 0 : user.password))) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, 'Password do not matched');
    }
    const newHashedPassword = yield bcrypt_1.default.hash(payload.newPassword, Number(config_1.default.bcrypt_salt_round));
    yield user_model_1.User.findOneAndUpdate({
        email: userData === null || userData === void 0 ? void 0 : userData.email,
        role: userData === null || userData === void 0 ? void 0 : userData.role,
    }, {
        password: newHashedPassword,
    }, {
        new: true,
    });
    return null;
});
const refreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt_refresh_secret);
    const { email } = decoded;
    const user = yield user_model_1.User.isUserExists(email);
    if (!user) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'User not found');
    }
    if (user.deactive === true) {
        throw new AppError_1.AppError(http_status_1.default.NOT_ACCEPTABLE, 'User is deactived');
    }
    const jwtPayload = {
        id: user._id,
        email: user.email,
        role: user.role,
    };
    const accessToken = jsonwebtoken_1.default.sign(jwtPayload, config_1.default.jwt_access_secret, {
        expiresIn: '7d',
    });
    return {
        accessToken,
    };
});
exports.AuthService = {
    loginUser,
    changePassword,
    refreshToken,
};
