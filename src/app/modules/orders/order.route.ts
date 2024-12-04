import express from 'express'
import { OrderController } from './order.controller'
const router = express.Router()

router.post('/', OrderController.orderPlace)
router.get('/revenue', OrderController.getRevenue)

export const BookRoute = router
