[Live Deployment Link](https://assaignment-2-book-store.vercel.app/)
[Video Explanetion Link](https://drive.google.com/file/d/1BVU_TGM8sBNNpAM_4m-AyfTn-vdxFTe7/view?usp=sharing)

# Project Overview

**This is a e-commerce api restful application design managing book in online store.It supports operations such as creating, retrieving, updating, and deleting books, placing orders, managing inventory, and calculating total revenue. Built with Node.js, Express.js, and MongoDB, it is scalable, efficient, and adheres to industry-standard practices.**

### Features

### Book Management

- Add new books to the inventory
- Retrieve all books or search by title, author, or category.
- Fetch details of a specific book by its ID.
- Update book details, such as price or quantity and others
- Delete books from the inventory.

### Order Management

- Place orders for books and manage stock levels.
- Automatically reduce stock when an order is placed.
- Mark books as out of stock when inventory reaches zero.
- Handle insufficient stock scenarios with error messages.

### Revenue Calculation

- Use MongoDB's aggregation pipeline to compute total revenue from all orders.

### Technologies Used

- Node.js Server-side JavaScript runtime environment.
- Express.js Lightweight and flexible web framework.
- MongoDB NoSQL database for managing books and orders.
- Mongoose ODM library for seamless MongoDB integration.

# Instructions on setting up the project locally

### Ensure you have the following installed:

- Nodejs
- MongoDB
- Git

### Setup Instructions

1. Clone the Repository
   > git clone <repository-url>
   > cd e-commerce-api
2. Install Dependencies

   > npm install

3. Environment Configuration

- Create a .env file in the project root with the following keys:
  > PORT=5000
  > MONGO_URI=mongodb://localhost:27017/ecommerce

4. Start the Server

   > npm start

5. Test the API

- Use tools like Postman or Thunder Client to interact with the API endpoints.

## API Endpoints

### Books

**POST** /api/products - Create a new book
**GET** /api/products - Retrieve all books or search by a term
**GET** /api/products/:productId - Get details of a specific book
**PUT** /api/products/:productId - Update book details
**DELETE** /api/products/:productId - Delete a book

### Orders

- POST
  > /api/orders - Place an order for books
- GET
  > /api/orders/revenue - Calculate total revenue from orders
