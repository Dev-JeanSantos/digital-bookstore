import NotFound from "../errors/NotFound.js";
import {authors, books, companyPublishes} from "../model/index.js";

class BookController {

  static getAllBooks = async (req, res, next) => {
    try {
      const bookResult = await books.find()
        .populate("author")
        .populate("companyPublish")
        .exec();
      res.status(200).json(bookResult);
    } catch (error) {
      next(error);
    }
  };

  static getBookById = async (req, res, next) => {
    try {
      const id = req.params.id;
      const bookResult = await books.findById(id)
        .populate("author", "name")
        .populate("companyPublish")
        .exec();

      if(bookResult !== null){
        res.status(200).send(bookResult);
      }else{
        next(new NotFound("Book Id not found"));
      }
    } catch (error) {
      next(error);
    }
  };
  
  static deleteBook = async (req, res, next) => {
    try {
      const id = req.params.id;
      const bookResult = await books.findByIdAndDelete(id);
      if(bookResult !== null){
        res.status(200).send("Successfully delete book");
      }else{
        next(new NotFound("Book Id not found"));
      }
    } catch (error) {
      next(error);
    }
  };

  static createdBook = async (req, res, next) => {
    try {
      let book = new books(req.body);
      const bookResult = await book.save();
      res.status(201).json(bookResult.toJSON());

    } catch (error) {
      next(error);
    }
  };

  static updateBook = async (req, res, next) => {
    try {
      const id = req.params.id;
      const bookResult = await books.findByIdAndUpdate(id, {
        $set: req.body
      });

      if(bookResult !== null){
        res.status(200).send({
          message: "Successfully update book"
        });
      }else{
        next(new NotFound("Book Id not found"));
      }
    } catch (error) {
      next(error);
    }
  };
  
  static getAllBookByFilter = async (req, res, next) => {
    try {

      const find = await findProcess(req.query);
      const booksResult = await books
        .find(find)
        .populate("author", "name")
        .populate("companyPublish");
      
      if(booksResult !== null){
        res.status(200).send(booksResult);
      }else{
        next(new NotFound("Book Id not found"));
      }
    } catch (error) {
      next(error);
    }
  };
}


async function findProcess(params){
  const {nameAuthor, nameCompanyPublish, title, minPages, maxPages} = params;
  const find = {};

  if(title) find.title = {$regex: title, $options: "i"}; //Utilizando operadores do mongoose
  if(minPages || maxPages) find.numberPages = { };

  if(minPages) find.numberPages.$gte = minPages;
  if(maxPages) find.numberPages.$lte = maxPages;

  if(nameCompanyPublish){
    const companyPublish = await companyPublishes.findOne({name: nameCompanyPublish});
    const companyPublishId = companyPublish._id;

    find.companyPublish = companyPublishId;
  }

  if(nameAuthor){
    const author = await authors.findOne({name: nameAuthor});
    const auhtorId = author._id;

    find.author = auhtorId;
  }

  return find;
}

export default BookController;