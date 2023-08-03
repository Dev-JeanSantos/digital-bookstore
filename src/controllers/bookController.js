import books from "../model/Book.js";

class BookController {

    static getAllBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books)
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
}

export default BookController;