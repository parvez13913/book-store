# React + TypeScript + Vite + Redux

# Book Catalog Project

## Live Server Link: https://book-store-backend-peach.vercel.app/

## Live Website Link: https://bookverse-13913.netlify.app/

# Bookify API Documentation

The Bookify API provides endpoints for managing books and user accounts.

## Base URL

`https://book-store-backend-peach.vercel.app/api/v1/`

## Authentication

All requests require authentication using a JWT token. Include the token in the `Authorization` header of the request:

```HTTP
Authorization: Bearer <JWT_TOKEN>

# API Documentation

## Endpoints

### Books

- **Get All Books**
GET /books

Could you get a list of all books?

- **Get Book Details**
GET /books/:id

Could you get details of a specific book by its ID?

- **Get Latest Books**

Sure, here's the provided endpoint documentation formatted as code using Markdown:

markdown
Copy code
# API Documentation

## Endpoints

### Books

- **Get All Books**
GET /books

Could you get a list of all books?

- **Get Book Details**
GET /books/:id


Could you get details of a specific book by its ID?

- **Get Latest Books**
GET /books?limit=10

Get the latest 10 books.

### Users

- **Sign Up User**
POST /users/signup

Sign up a new user.

- **Sign In User**
POST /auth/login

Sign in an existing user.

### Reviews

- **Add/Update Review**
PATCH books/reviews/:id

Add or update a review for a specific book by its ID.
