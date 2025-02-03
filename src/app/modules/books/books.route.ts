import express from 'express'
import { BooksController } from './books.controller'
import { booksValidation } from './books.validation'
import validateRequest from '../../../middleware/validateRequest'
import { USER_ROLE } from '../user/user.constant'
import auth from '../../../middleware/auth'

const router = express.Router()

router.post(
  '/',
  validateRequest(booksValidation.createBooksValidationSchema),

  BooksController.createBooks,
)
router.get('/:productId', BooksController.getSingleBook)
router.put('/:productId', BooksController.updateBook)
router.put('/:productId', BooksController.updatedBookQuantity)
router.delete('/:productId', BooksController.deleteBook)
router.get(
  '/',
  auth(USER_ROLE.user, USER_ROLE.admin),
  BooksController.getAllBooks,
)

export const ProductsRoutes = router
