import { Date } from 'mongoose'

export interface IOrder {
  email: string
  user: string
  product: string
  quantity: number
  totalPrice: number
  createdAt: Date
  updatedAt: Date
}
