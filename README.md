# Bookstore API

This is a simple RESTful API for a bookstore application using Express JS and MongoDB. It allows you to perform CRUD operations (Create, Read, Update, Delete) on books.

## Prerequisites

To run this application, you need to have the following:

- Node.js installed on your machine
- MongoDB Atlas account (or a local MongoDB server)

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install the dependencies:

```bash
cd <repository-folder>
npm install
```

3. Set up the MongoDB connection:

   - Open the `app.js` file.
   - Replace the `<username>`, `<password>`, and `<cluster-url>` placeholders in the MongoDB connection URL with your MongoDB Atlas credentials or your local MongoDB server URL.

4. Start the application:

```bash
npm start
```

The application will start and listen on the specified port (default is 3000).

## API Endpoints

The following API endpoints are available:

- **GET /books**: Retrieve all books.
- **GET /books/:id**: Retrieve a specific book by its ID.
- **POST /books**: Create a new book.
- **PUT /books/:id**: Update an existing book by its ID.
- **DELETE /books/:id**: Delete a book by its ID.

## API Usage

You can use tools like cURL or Postman to interact with the API endpoints. Here are some examples:

- **GET /books**: Retrieve all books.

```bash
curl -X GET http://localhost:3000/books
```

- **GET /books/:id**: Retrieve a specific book by its ID.

```bash
curl -X GET http://localhost:3000/books/12345
```

- **POST /books**: Create a new book.

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "title": "Book Title",
  "author": "Book Author",
  "description": "Book Description",
  "publishedYear": 2022
}' http://localhost:3000/books
```

- **PUT /books/:id**: Update an existing book by its ID.

```bash
curl -X PUT -H "Content-Type: application/json" -d '{
  "title": "Updated Book Title"
}' http://localhost:3000/books/12345
```

- **DELETE /books/:id**: Delete a book by its ID.

```bash
curl -X DELETE http://localhost:3000/books/12345
```

## Error Handling

The API handles common errors and returns appropriate status codes and error messages in the JSON response.

- 404 Not Found: Returned when a book is not found by its ID.
- 400 Bad Request: Returned when there is a validation error or missing required fields in the request body.
- 500 Internal Server Error: Returned when there is a server-side error.

## Conclusion

This is a basic API for a bookstore application that allows you to manage books. You can use it as a starting point to build more complex features and extend it as per your requirements.
