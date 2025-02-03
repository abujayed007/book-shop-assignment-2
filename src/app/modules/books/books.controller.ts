/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import httpStatus from 'http-status'
import { BookServices } from './books.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { AuthenticatedRequest } from '../../../middleware/auth'

// Handle create request for create book item and send response

const createBooks = catchAsync(async (req, res) => {
  const result = await BookServices.createBookFromDB(req.body)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Books created successfully',
    data: result,
  })
})

// Handle get all books request and send response

const getAllBooks = catchAsync(async (req: AuthenticatedRequest, res) => {
  console.log(req.cookies)
  console.log(req.user)
  const result = await BookServices.getAllBooksFromDB(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books retrived successfully',
    data: result,
  })
})

// Handle find single product by id

const getSingleBook = catchAsync(async (req, res) => {
  const { productId } = req.params
  const result = await BookServices.getSingleBook(productId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrived successfully',
    data: result,
  })
})

// Handle update properties value

const updateBook = catchAsync(async (req, res) => {
  const { productId } = req.params
  const updateBook = req.body
  const result = await BookServices.updateBook(productId, updateBook)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books updated successfully',
    data: result,
  })
})

// Handle request for deleting book

const deleteBook = catchAsync(async (req, res) => {
  const { productId } = req.params
  const result = await BookServices.deleteBook(productId)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books deleted successfully',
  })
})

// Handle update product quantity after order placed

const updatedBookQuantity = catchAsync(async (req, res) => {
  const { bookId } = req.params
  const updateBook = req.body
  const result = await BookServices.updateBook(bookId, updateBook)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books quantity updated successfully',
  })
})

export const BooksController = {
  createBooks,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
  updatedBookQuantity,
}
