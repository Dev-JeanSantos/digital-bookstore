import authors from "../model/Author.js";
import NotFound from "../errors/NotFound.js";

class AuthorController {

  static getAllAuthors = async (req, res, next) => {
    try {
      const authorsResult = await authors.find();
      res.status(200).json(authorsResult);
    } catch (error) {
      next(error);
    }
  };

  static getAuthorById = async (req, res, next) => {
    try {
      const id = req.params.id;
      const authorResult = await authors.findById(id);

      if (authorResult !== null) {
        res.status(200).send(authorResult);
      } else {
        next(new NotFound("Id Author not found!"));
      }
    } catch (error) {
      next(error);
    }
  };

  static deleteAuthor = async (req, res, next) => {
    
    try {
      const id = req.params.id;
      const authorResult = await authors.findByIdAndDelete(id);
      if(authorResult !== null){
        res.status(200).send("Successfully delete author");
      }else{
        next(new NotFound("Id Author not found!"));
      }
    } catch (error) {
      next(error);
    }
  };
  
  static createdAuthor = async (req, res, next) => {
    try {
      let author = new authors(req.body);
      const authorResult = await author.save();
      res.status(201).json(authorResult.toJSON());
    } catch (error) {
      next(error);
    }
  };
  
  static updateAuthor = async (req, res, next) => {
    
    try {
      const id = req.params.id;
      const authorResult = await authors.findByIdAndUpdate(id, {
        $set: req.body
      });
      
      if(authorResult !== null){
        res.status(200).send({
          message: "Successfully update author"
        });
      }else{
        next(new NotFound("Id Author not found!"));
      }
    } catch (error) {
      next(error);
    }
  };
}

export default AuthorController;