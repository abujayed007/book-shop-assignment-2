import { Request, Response } from 'express'
import { BookServices } from './books.service'

// Handle create request for create book item and send response

const createBooks = async (req: Request, res: Response) => {
  try {
    const book = req.body
    const result = await BookServices.createBookFromDB(book)
    res.status(200).json({
      message: 'Book created successfully',
      success: true,
      data: result,
    })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        message: 'An error occurred',
        success: false,
        error: {
          name: error.name,
          message: error.message,
        },
        stack: error.stack,
      })
    }
  }
}

// Handle get all books request and send response

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const result = await BookServices.getAllBooksFromDB()
    res.status(200).json({
      message: 'Books retrieved successfully',
      success: true,
      data: result,
    })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        message: 'An error occurred',
        success: false,
        error: {
          name: error.name,
          message: error.message,
        },
        stack: error.stack,
      })
    }
  }
}

// Handle find single product by id

const getSingleBook = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const result = await BookServices.getSingleBook(productId)
    res.status(200).json({
      message: 'Book retrieved successfully',
      success: true,
      data: result,
    })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        message: 'An error occurred',
        success: false,
        error: {
          name: error.name,
          message: error.message,
        },
        stack: error.stack,
      })
    }
  }
}

// Handle update properties value

const updateBook = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const updateBook = req.body
    const result = await BookServices.updateBook(productId, updateBook)
    res.status(200).json({
      message: 'Book updated successfully',
      success: true,
      data: result,
    })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        message: 'An error occurred',
        success: false,
        error: {
          name: error.name,
          message: error.message,
        },
        stack: error.stack,
      })
    }
  }
}

// Handle request for deleting book

const deleteBook = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const result = await BookServices.deleteBook(productId)
    res.status(200).json({
      message: 'Book deleted successfully',
      success: true,
      data: result,
    })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        message: 'An error occurred',
        success: false,
        error: {
          name: error.name,
          message: error.message,
        },
        stack: error.stack,
      })
    }
  }
}

// Handle update product quantity after order placed

const updatedBookQuantity = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params
    const updateBook = req.body
    const result = await BookServices.updateBook(bookId, updateBook)
    res.status(200).json({
      message: 'Book updated successfully',
      success: true,
      data: result,
    })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        message: 'An error occurred',
        success: false,
        error: {
          name: error.name,
          message: error.message,
        },
        stack: error.stack,
      })
    }
  }
}

export const BooksController = {
  createBooks,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
  updatedBookQuantity,
}
