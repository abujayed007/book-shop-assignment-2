"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_route_1 = require("../modules/orders/order.route");
const user_route_1 = require("../modules/user/user.route");
const books_route_1 = require("../modules/books/books.route");
const auth_route_1 = require("../modules/auth/auth.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.userRoutes,
    },
    {
        path: '/products',
        route: books_route_1.ProductsRoutes,
    },
    {
        path: '/orders',
        route: order_route_1.BookRoute,
    },
    {
        path: '/revenue',
        route: order_route_1.BookRoute,
    },
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
