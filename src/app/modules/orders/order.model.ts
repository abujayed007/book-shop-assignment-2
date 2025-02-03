import mongoose, { model, Schema } from 'mongoose'
import { IOrder } from './order.interface'

const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: true,
    },
    user: {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    product: {
      type: String,
      required: true,
      ref: 'Books',
    },
    quantity: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
)

const Order = model<IOrder>('Order', orderSchema)
export default Order
