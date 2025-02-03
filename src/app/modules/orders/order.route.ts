import express from 'express'
import { OrderController } from './order.controller'
import auth from '../../../middleware/auth'
import { USER_ROLE } from '../user/user.constant'
const router = express.Router()

router.post('/', auth(USER_ROLE.user), OrderController.orderPlace)
router.get('/revenue', OrderController.getRevenue)
router.get('/', auth(USER_ROLE.admin), OrderController.getAllOrder)
router.get(
  '/:email',
  auth(USER_ROLE.admin, USER_ROLE.user),
  OrderController.getOrderByUser,
)

export const BookRoute = router
