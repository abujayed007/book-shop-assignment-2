import httpStatus from 'http-status'
import { AppError } from '../../error/AppError'
import { User } from '../user/user.model'
import { IOrder } from './order.interface'
import Order from './order.model'

// Create Order services

const createOrders = async (orderData: typeof Order) => {
  // const user = await User.isUserExists()
  const order = await Order.create(orderData)
  return order
}

const getAllOrderFromDB = async (payload: IOrder) => {
  const result = await Order.find(payload)
  return result
}

// calculate Revenue use mongoDB aggrigation pipeline
const calculateRevenue = async () => {
  const price = await Order.aggregate([
    { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
  ])
  return price
}

const getOrderByUser = async (email: string) => {
  const user = await User.isUserExists(email)

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User Not Found')
  }

  const result = await Order.find({ email })
  return result
}

export const OrderServices = {
  createOrders,
  calculateRevenue,
  getAllOrderFromDB,
  getOrderByUser,
}
