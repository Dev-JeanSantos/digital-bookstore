import books from "../model/Book.js";

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
      res.status(200).send(bookResult);
    } catch (error) {
      next(error);
    }
  };

  static deleteBook = async (req, res, next) => {
    try {
      const id = req.params.id;
      await books.findByIdAndDelete(id);
      res.status(200).send("Successfully delete book");
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
      await books.findByIdAndUpdate(id, {
        $set: req.body
      });
      res.status(200).send({
        message: "Successfully update book"
      });
    } catch (error) {
      next(error);
    }
  };

  static getAllBookByCompanyPublish = async (req, res, next) => {

    try {
      const companyPublish = req.query.companyPublish;
      const booksResult = books.find({
        "companyPublish": companyPublish
      }, {}, (books));
      res.status(200).send(booksResult);
    } catch (error) {
      next(error);
    }
  };
}

export default BookController;