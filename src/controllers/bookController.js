import books from "../model/Book.js";

class BookController{
    
    static getAllBooks = (req, res) =>{
        books.find((err, books) => {
            res.status(200).json(books)
        })
    }
}

export default BookController;