import { Schema, model } from 'mongoose'
import { IBooks } from './books.interface'

// Create a books schema generic with IBook Interface

const booksSchema = new Schema<IBooks>(
  {
    title: {
      type: String,
      unique: true,
      required: true,
      maxlength: 50,
    },
    author: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
    createdAt: {
      type: String,
      default: new Date().toISOString(),
    },
    updatedAt: {
      type: String,
      default: new Date().toISOString(),
    },
  },
  { timestamps: true },
)

// Create a model

export const Books = model<IBooks>('Books', booksSchema)
