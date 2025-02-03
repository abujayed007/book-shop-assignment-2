import express from 'express'
import { Application, Request, Response } from 'express'
import cors from 'cors'
import { notFound } from './middleware/notFound'
import router from './app/routes'
import { globalErrorHandler } from './middleware/globalErrorHandler'
import cookieParser from 'cookie-parser'

const app: Application = express()

// middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(cors({ origin: ['http://localhost:5173'] }))
// create api
app.use('/api', router)

app.use(globalErrorHandler)
app.use(notFound)

app.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Server On',
  })
})
export default app
