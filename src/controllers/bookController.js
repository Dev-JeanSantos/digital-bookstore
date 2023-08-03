import books from "../model/Book.js";

class BookController {

    static getAllBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books)
        })
    }
    
    static getBookById = (req, res) => {
        const id = req.params.id;
        books.findById(id, (err, books) => {
            if(err){
                res.status(400).send({message: `${err.message} = Id not found! `})
            }else{
                res.status(200).send(books)
            }
        })
    }

    static deleteBook = (req, res) => {
        const id = req.params.id;
        books.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send(`Successfully delete book`)
            }else{
                res.status(500).send({message: `${err.message} = Id not found! `})
            }
        })
    }

    static createdBook = (req, res) => {
        let book = new books(req.body)
        book.save((err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - failed create book`
                })
            } else {
                res.status(200).json(book.toJSON)
            }
        });
    }
    
    static updateBook = (req, res) => {
        const id = req.params.id;
        books.findByIdAndUpdate(id, {$set: req.body},(err) =>{
            if(!err){
                res.status(200).send({message: 'Successfully update book'});
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default BookController;