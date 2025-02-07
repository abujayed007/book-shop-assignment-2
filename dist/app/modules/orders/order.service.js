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
exports.OrderServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = require("../../error/AppError");
const user_model_1 = require("../user/user.model");
const order_model_1 = __importDefault(require("./order.model"));
// Create Order services
const createOrders = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    // const user = await User.isUserExists()
    const order = yield order_model_1.default.create(orderData);
    return order;
});
const getAllOrderFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.find(payload);
    return result;
});
// calculate Revenue use mongoDB aggrigation pipeline
const calculateRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    const price = yield order_model_1.default.aggregate([
        { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
    ]);
    return price;
});
const getOrderByUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.isUserExists(email);
    if (!user) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'User Not Found');
    }
    const result = yield order_model_1.default.find({ email });
    return result;
});
exports.OrderServices = {
    createOrders,
    calculateRevenue,
    getAllOrderFromDB,
    getOrderByUser,
};
