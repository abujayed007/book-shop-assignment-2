import { IBooks } from './books.interface'
import { Books } from './books.model'

// Client create book into database before send data check Books model

const createBookFromDB = async (book: IBooks): Promise<IBooks> => {
  const result = await Books.create(book)
  return result
}

// Get all books from database

const getAllBooksFromDB = async () => {
  const result = await Books.find()
  return result
}

// Get single book from database

export const getSingleBook = async (id: string) => {
  const result = await Books.findById(id)
  // console.log(result)
  return result
}

// update single book from database when data updated successfully updated time automated saved

const updateBook = async (
  productId: string,
  data: typeof Books,
): Promise<IBooks | null> => {
  const options = { new: true, runValidators: true }
  const result = await Books.findByIdAndUpdate(productId, data, options)
  return result
}
// delete book
const deleteBook = async (productId: string) => {
  const result = await Books.findByIdAndDelete(productId)
  return result
}

// Update book stock

export const updatedBookQuantity = async (
  productId: string,
  quantity: number,
) => {
  try {
    const book = await Books.findById(productId)
    if (!book) {
      throw new Error('Book not found')
    }
    if (book.quantity < quantity) {
      throw new Error('Insufficient stock')
    }
    book.quantity -= quantity
    book.inStock = book.quantity < 0
    await book.save()
    return book
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}

export const BookServices = {
  createBookFromDB,
  getAllBooksFromDB,
  getSingleBook,
  updateBook,
  deleteBook,
}
