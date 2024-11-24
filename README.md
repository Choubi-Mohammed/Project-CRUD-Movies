# Project-CRUD-Movies

This project is a RESTful API built with **Node.js**, **Express.js**, and **MongoDB**. It allows users to perform CRUD (Create, Read, Update, Delete) operations on a movie collection. The API is designed to manage movie data such as name, genre, and release year, with robust validation using **Joi** and data management via **Mongoose**.

---

## Features

- **Create a Movie**: Add a new movie with name, genre, and year.
- **Read Movies**: Retrieve all movies or a specific movie by ID.
- **Update a Movie**: Modify the details of an existing movie.
- **Delete a Movie**: Remove a movie from the collection by its ID.
- **Input Validation**: Ensures valid data using **Joi** before saving to the database.

---

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing movie data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **Joi**: Data validation library for validating input data.

---

## API Endpoints

### 1. **POST /api/movies**

- **Description**: Add a new movie.
- **Request Body**:
  ```json
  {
    "name": "Movie Name",
    "genre": "Genre",
    "year": 2023
  }
