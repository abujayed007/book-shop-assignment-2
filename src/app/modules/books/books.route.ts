import express from 'express'
import { BooksController } from './books.controller'

const router = express.Router()

// Client found post route for create book item

router.post('/create-book', BooksController.createBooks)
router.get('/:bookId', BooksController.getSingleBook)
router.put('/:bookId', BooksController.updateBook)
router.put('/bookId', BooksController.updatedBookQuantity)
router.delete('/:bookId', BooksController.deleteBook)
router.get('/', BooksController.getAllBooks)

export const StudentRoutes = router
