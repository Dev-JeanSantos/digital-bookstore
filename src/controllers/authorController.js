import {
  json
} from "express";
import authors from "../model/Author.js";

class AuthorController {

  static getAllAuthors = async (req, res) => {
    try {
      const authorsResult = await authors.find();
      res.status(200).json(authorsResult);
    } catch (error) {
      res.status(500);
      json({
        message: "Erro no servidor"
      });
    }
  };

  static getAuthorById = async (req, res) => {
    try {
      const id = req.params.id;
      const authorResult = await authors.findById(id);
      res.status(200).send(authorResult);
    } catch (error) {
      res.status(400).send({
        message: `${error.message} = Id not found! `
      });
    }
  };

  static deleteAuthor = async (req, res) => {

    try {
      const id = req.params.id;
      await authors.findByIdAndDelete(id);
      res.status(200).send("Successfully delete auhtor");
    } catch (error) {
      res.status(400).send({
        message: `${error.message} = Id not found! `
      });
    }
  };

  static createdAuthor = async (req, res) => {
    try {
      let author = new authors(req.body);
      const authorResult = await author.save();
      res.status(201).json(authorResult.toJSON());
    } catch (error) {
      res.status(500).send({
        message: `${error.message} - failed create author`
      });
    }
  };

  static updateAuthor = async (req, res) => {

    try {
      const id = req.params.id;
      await authors.findByIdAndUpdate(id, {
        $set: req.body
      });
      res.status(200).send({
        message: "Successfully update author"
      });
    } catch (error) {
      res.status(500).send({
        message: error.message
      });
    }
  };
}

export default AuthorController;