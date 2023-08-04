import authors from "../model/Author.js";

class AuthorController {

  static getAllAuthors = (req, res) => {
    authors.find((err, authors) => {
      res.status(200).json(authors);
    });
  };
    
  static getAuthorById = (req, res) => {
    const id = req.params.id;
    authors.findById(id, (err, authors) => {
      if(err){
        res.status(400).send({message: `${err.message} = Id not found! `});
      }else{
        res.status(200).send(authors);
      }
    });
  };

  static deleteAuthor = (req, res) => {
    const id = req.params.id;
    authors.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send("Successfully delete auhtor");
      }else{
        res.status(500).send({message: `${err.message} = Id not found! `});
      }
    });
  };

  static createdAuthor = (req, res) => {
    let author = new authors(req.body);
    author.save((err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - failed create author`
        });
      } else {
        res.status(200).json(author.toJSON());
      }
    });
  };
    
  static updateAuthor = (req, res) => {
    const id = req.params.id;
    authors.findByIdAndUpdate(id, {$set: req.body},(err) =>{
      if(!err){
        res.status(200).send({message: "Successfully update auhtor"});
      }else{
        res.status(500).send({message: err.message});
      }
    });
  };
}

export default AuthorController;