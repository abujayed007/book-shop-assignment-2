"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoute = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const auth_1 = __importDefault(require("../../../middleware/auth"));
const user_constant_1 = require("../user/user.constant");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_constant_1.USER_ROLE.user), order_controller_1.OrderController.orderPlace);
router.get('/revenue', order_controller_1.OrderController.getRevenue);
router.get('/', (0, auth_1.default)(user_constant_1.USER_ROLE.admin), order_controller_1.OrderController.getAllOrder);
router.get('/:email', (0, auth_1.default)(user_constant_1.USER_ROLE.admin, user_constant_1.USER_ROLE.user), order_controller_1.OrderController.getOrderByUser);
exports.BookRoute = router;
