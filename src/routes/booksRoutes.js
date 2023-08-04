import express from "express";
import bookController from "../controllers/bookController.js";

const router = express.Router();

router
  .get("/books", bookController.getAllBooks)
  .get("/books/find", bookController.getAllBookByCompanyPublish)
  .get("/books/:id", bookController.getBookById)
  .post("/books", bookController.createdBook)
  .put("/books/:id", bookController.updateBook)
  .delete("/books/:id", bookController.deleteBook);

export default router;