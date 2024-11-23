import Order from './order.model'

// Create Order services

const createOrders = async (orderData: typeof Order) => {
  const order = await Order.create(orderData)
  return order
}

// calculate Revenue use mongoDB aggrigation pipeline
const calculateRevenue = async () => {
  const price = await Order.aggregate([
    { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
  ])
  return price
}

export const OrderServices = {
  createOrders,
  calculateRevenue,
}
