Sure! Here's the updated `README.md` file with method, API, and response information for all the routes:

```markdown
# Project-CRUD-Movies

This project is a RESTful API built with **Node.js**, **Express.js**, and **MongoDB**. It allows users to perform CRUD (Create, Read, Update, Delete) operations on a movie collection. The API is designed to manage movie data such as name, genre, and release year, with robust validation using **Joi**, data management via **Mongoose**, and simplified error handling using **express-async-handler**.

---

## Features

- **Create a Movie**: Add a new movie with name, genre, and year.
- **Read Movies**: Retrieve all movies or a specific movie by ID.
- **Update a Movie**: Modify the details of an existing movie.
- **Delete a Movie**: Remove a movie from the collection by its ID.
- **Input Validation**: Ensures valid data using **Joi** before saving to the database.
- **Error Handling**: Uses **express-async-handler** for streamlined async error handling.

---

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing movie data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **Joi**: Data validation library for validating input data.
- **express-async-handler**: Middleware for handling async errors in Express routes.

---

## API Endpoints

### 1. **POST /api/movies**

- **Method**: `POST`
- **Description**: Add a new movie to the collection.
- **Request Body**:
  ```json
  {
    "name": "Movie Name",
    "genre": "Genre",
    "year": 2023
  }
  ```
- **Response**:
  - **Success (201)**:
    ```json
    {
      "_id": "movie_id",
      "name": "Movie Name",
      "genre": "Genre",
      "year": 2023,
      "createdAt": "2024-11-24T00:00:00.000Z",
      "updatedAt": "2024-11-24T00:00:00.000Z"
    }
    ```
  - **Error (401)**:
    ```json
    {
      "message": "Error message"
    }
    ```

### 2. **GET /api/movies**

- **Method**: `GET`
- **Description**: Retrieve all movies in the collection.
- **Response**:
  - **Success (200)**:
    ```json
    [
      {
        "_id": "movie_id",
        "name": "Movie Name",
        "genre": "Genre",
        "year": 2023
      },
      ...
    ]
    ```
  - **Error (500)**:
    ```json
    {
      "message": "Server error"
    }
    ```

### 3. **GET /api/movies/:id**

- **Method**: `GET`
- **Description**: Retrieve a movie by its ID.
- **Response**:
  - **Success (200)**:
    ```json
    {
      "_id": "movie_id",
      "name": "Movie Name",
      "genre": "Genre",
      "year": 2023
    }
    ```
  - **Error (404)**:
    ```json
    {
      "message": "Movie not found"
    }
    ```

### 4. **PUT /api/movies/:id**

- **Method**: `PUT`
- **Description**: Update a movie's details by its ID.
- **Request Body**:
  ```json
  {
    "name": "Updated Movie Name",
    "genre": "Updated Genre",
    "year": 2024
  }
  ```
- **Response**:
  - **Success (200)**:
    ```json
    {
      "_id": "movie_id",
      "name": "Updated Movie Name",
      "genre": "Updated Genre",
      "year": 2024
    }
    ```
  - **Error (404)**:
    ```json
    {
      "message": "Movie not found"
    }
    ```
  - **Error (400)**:
    ```json
    {
      "message": "Validation error"
    }
    ```

### 5. **DELETE /api/movies/:id**

- **Method**: `DELETE`
- **Description**: Delete a movie from the collection by its ID.
- **Response**:
  - **Success (200)**:
    ```json
    {
      "message": "Movie deleted successfully."
    }
    ```
  - **Error (404)**:
    ```json
    {
      "message": "Movie not found"
    }
    ```

---

## Validation Rules

- **Name**: Required, between 3 and 100 characters.
- **Genre**: Required, between 3 and 150 characters.
- **Year**: Required, an integer between 1888 and the current year.

---

## Installation

### 1. Clone the repository:
```bash
git clone https://github.com/Choubi-Mohammed/Project-CRUD-Movies.git
cd Project-CRUD-Movies
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Set up MongoDB:
- Ensure MongoDB is running locally, or use a remote MongoDB service like MongoDB Atlas.
- Update the connection URL in your project if necessary.

### 4. Start the server:
```bash
npm start
```
The API will be running at `http://localhost:3000`.

---

## Error Handling

- **400 Bad Request**: When the request body doesn't meet validation criteria.
- **404 Not Found**: When the movie with the given ID is not found.
- **500 Internal Server Error**: When an unexpected error occurs on the server.

---

## Example Request and Response

### POST /api/movies
```json
POST /api/movies
{
  "name": "Inception",
  "genre": "Sci-Fi",
  "year": 2010
}
```

#### Response:
```json
{
  "_id": "movie_id",
  "name": "Inception",
  "genre": "Sci-Fi",
  "year": 2010,
  "createdAt": "2024-11-24T12:00:00.000Z",
  "updatedAt": "2024-11-24T12:00:00.000Z"
}
```

---

## Future Enhancements

- User authentication and authorization (JWT, OAuth).
- Advanced search and filtering options.
- Front-end interface for interacting with the API.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

This version of the `README.md` now includes method types (POST, GET, PUT, DELETE) and sample responses for each route, making it more complete and detailed.
