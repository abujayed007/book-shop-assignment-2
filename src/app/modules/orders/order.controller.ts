import { OrderServices } from './order.service'
import { updatedBookQuantity } from './../books/books.service'
import { Request, Response } from 'express'

const orderPlace = async (req: Request, res: Response) => {
  try {
    const newOrder = req.body
    const { product, quantity } = req.body
    const order = await OrderServices.createOrders(newOrder)
    const update = await updatedBookQuantity(product, quantity)

    res.status(200).json({
      message: 'Order placed successfully',
      order,
      update,
    })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        message: error.message,
      })
    }
  }
}

const getRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await OrderServices.calculateRevenue()
    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: totalRevenue,
    })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        message: error.message,
      })
    }
  }
}

export const OrderController = {
  orderPlace,
  getRevenue,
}
