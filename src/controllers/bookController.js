import json from "express";
import books from "../model/Book.js";

class BookController {

  static getAllBooks = async (req, res) => {
    try {
      const bookResult = await books.find()
        .populate("author")
        .populate("companyPublish")
        .exec();
      res.status(200).json(bookResult);
    } catch (error) {
      res.status(500);
      json({
        message: "Erro no servidor"
      });
    }
  };

  static getBookById = async (req, res) => {
    try {
      const id = req.params.id;
      const bookResult = await books.findById(id)
        .populate("author", "name")
        .populate("companyPublish")
        .exec();
      res.status(200).send(bookResult);
    } catch (error) {
      res.status(400).send({
        message: `${error.message} = Id not found! `
      });
    }
  };

  static deleteBook = async (req, res) => {
    try {
      const id = req.params.id;
      await books.findByIdAndDelete(id);
      res.status(200).send("Successfully delete book");
    } catch (error) {
      res.status(500).send({
        message: `${error.message} = Id not found! `
      });
    }
  };

  static createdBook = async (req, res) => {
    try {
      let book = new books(req.body);
      const bookResult = await book.save();
      res.status(201).json(bookResult.toJSON());

    } catch (error) {
      res.status(500).send({
        message: `${error.message} - failed create book`
      });
    }
  };

  static updateBook = async (req, res) => {
    try {
      const id = req.params.id;
      await books.findByIdAndUpdate(id, {
        $set: req.body
      });
      res.status(200).send({
        message: "Successfully update book"
      });
    } catch (error) {
      res.status(500).send({
        message: error.message
      });
    }
  };

  static getAllBookByCompanyPublish = (req, res) => {
    const companyPublish = req.query.companyPublish;

    books.find({
      "companyPublish": companyPublish
    }, {}, (err, books) => {
      res.status(200).send(books);
    });
  };
}

export default BookController;