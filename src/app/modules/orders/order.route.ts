import express from 'express'
import { OrderController } from './order.controller'
const router = express.Router()

router.post('/place-order', OrderController.orderPlace)
router.get('/revenue', OrderController.getRevenue)

export const BookRoute = router
