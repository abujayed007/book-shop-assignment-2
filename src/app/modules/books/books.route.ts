import express from 'express'
import { BooksController } from './books.controller'
import { booksValidation } from './books.validation'
import validateRequest from '../../../middleware/validateRequest'
import auth from '../../../middleware/auth'
import { USER_ROLE } from '../user/user.constant'

const router = express.Router()

router.post(
  '/',
  validateRequest(booksValidation.createBooksValidationSchema),

  BooksController.createBooks,
)
router.get('/:productId', BooksController.getSingleBook)
router.put(
  '/:productId',
  auth(USER_ROLE.user, USER_ROLE.admin),
  BooksController.updateBook,
)
router.put(
  '/:productId',
  auth(USER_ROLE.user),
  BooksController.updatedBookQuantity,
)
router.delete(
  '/:productId',
  auth(USER_ROLE.user, USER_ROLE.admin),
  BooksController.deleteBook,
)
router.get('/', BooksController.getAllBooks)

export const ProductsRoutes = router
