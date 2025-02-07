/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status'
import { OrderServices } from './order.service'
import { updatedBookQuantity } from './../books/books.service'
import sendResponse from '../../utils/sendResponse'
import catchAsync from '../../utils/catchAsync'
import { AuthenticatedRequest } from '../../../middleware/auth'

// handle create order
const orderPlace = catchAsync(async (req, res) => {
  const newOrder = req.body
  const { product, quantity } = req.body
  const order = await OrderServices.createOrders(newOrder)
  const update = await updatedBookQuantity(product, quantity)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books ordered successfully',
    data: order,
  })
})

const getAllOrder = catchAsync(async (req: AuthenticatedRequest, res) => {
  const result = await OrderServices.getAllOrderFromDB(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order retrived  successfully',
    data: result,
  })
})

// Handle request of calculate revenue
const getRevenue = catchAsync(async (req, res) => {
  const totalRevenues = await OrderServices.calculateRevenue()
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Books ordered successfully',
    data: totalRevenues,
  })
})

const getOrderByUser = catchAsync(async (req, res) => {
  const { email } = req.params

  const result = await OrderServices.getOrderByUser(email)

  // console.log(result)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Ordered retrived successfully',
    data: result,
  })
})

export const OrderController = {
  orderPlace,
  getRevenue,
  getAllOrder,
  getOrderByUser,
}
