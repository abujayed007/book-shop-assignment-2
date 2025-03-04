"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const validateRequest_1 = __importDefault(require("../../../middleware/validateRequest"));
const user_validation_1 = require("./user.validation");
const user_constant_1 = require("./user.constant");
const auth_1 = __importDefault(require("../../../middleware/auth"));
const router = (0, express_1.Router)();
router.post('/register', (0, validateRequest_1.default)(user_validation_1.UserValidation.userRegisterValidationSchema), user_controller_1.userController.registerUser);
router.patch('/:id', (0, auth_1.default)(user_constant_1.USER_ROLE.admin), user_controller_1.userController.updateUserActivationStatus);
exports.userRoutes = router;
