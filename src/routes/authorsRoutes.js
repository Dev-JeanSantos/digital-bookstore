import express from "express";
import authorsController from "../controllers/authorController.js";

const router = express.Router();

router
    .get("/authors", authorsController.getAllAuthors)
    .get("/authors/:id", authorsController.getAuthorById)
    .post("/authors", authorsController.createdAuthor)
    .put("/authors/:id", authorsController.updateAuthor)
    .delete("/authors/:id", authorsController.deleteAuthor)

export default router;