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
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const books_service_1 = require("./../books/books.service");
// handle create order
const orderPlace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newOrder = req.body;
        const { product, quantity } = req.body;
        const order = yield order_service_1.OrderServices.createOrders(newOrder);
        const update = yield (0, books_service_1.updatedBookQuantity)(product, quantity);
        res.status(200).json({
            message: 'Order placed successfully',
            order,
            update,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }
});
// Handle request of calculate revenue
const getRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalRevenue = yield order_service_1.OrderServices.calculateRevenue();
        res.status(200).json({
            message: 'Revenue calculated successfully',
            status: true,
            data: totalRevenue,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).json({
                message: error.message,
            });
        }
    }
});
exports.OrderController = {
    orderPlace,
    getRevenue,
};
