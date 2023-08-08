import express from "express";
import bookController from "../controllers/bookController.js";
import pagination from "../middlewares/pagination.js";

const router = express.Router();

router
  .get("/books", bookController.getAllBooks, pagination)
  .get("/books/find", bookController.getAllBookByFilter)
  .get("/books/:id", bookController.getBookById)
  .post("/books", bookController.createdBook)
  .put("/books/:id", bookController.updateBook)
  .delete("/books/:id", bookController.deleteBook);

export default router;