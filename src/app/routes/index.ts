import { Router } from 'express'
import { BookRoute } from '../modules/orders/order.route'
import { userRoutes } from '../modules/user/user.route'
import { ProductsRoutes } from '../modules/books/books.route'
import { AuthRoutes } from '../modules/auth/auth.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/products',
    route: ProductsRoutes,
  },
  {
    path: '/orders',
    route: BookRoute,
  },
  {
    path: '/revenue',
    route: BookRoute,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
