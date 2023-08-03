import express from "express";
import bookController from "../controllers/bookController.js";

const router = express.Router();

router
    .get("/books", bookController.getAllBooks)
    .get("/books/:id", bookController.getBookById)
    .post("/books", bookController.createdBook)
    .put("/books/:id", bookController.updateBook)

export default router;