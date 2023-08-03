import express from "express";
import bookController from "../controllers/bookController.js";

const router = express.Router();

router
    .get("/books", bookController.getAllBooks)
    .post("/books", bookController.createdBook)

export default router;