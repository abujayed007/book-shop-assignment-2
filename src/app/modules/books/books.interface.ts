import { Date } from 'mongoose'

// create a interface for Books
export interface IBooks {
  title: string
  author: string
  price: number
  category: string
  description: string
  quantity: number
  inStock: boolean
  createdAt?: Date
  updatedAt?: Date
}