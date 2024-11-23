import express from 'express'
import { BooksController } from './books.controller'

const router = express.Router()

router.post('/create-product', BooksController.createBooks)
router.get('/:productId', BooksController.getSingleBook)
router.put('/:productId', BooksController.updateBook)
router.put('/:productId', BooksController.updatedBookQuantity)
router.delete('/:productId', BooksController.deleteBook)
router.get('/', BooksController.getAllBooks)

export const StudentRoutes = router
