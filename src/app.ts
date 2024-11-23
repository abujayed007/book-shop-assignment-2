import express from 'express'
import { Application, Request, Response } from 'express'
import cors from 'cors'
import { StudentRoutes } from './app/modules/books/books.route'
import { BookRoute } from './app/modules/orders/order.route'

const app: Application = express()

app.use(express.json())
app.use(cors())

// when client hit /api/books go to find exact route

app.use('/api/products', StudentRoutes)
app.use('/api/orders', BookRoute)

app.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Server On',
  })
})
export default app
