import express from "express";
import db from "./config/dbConnect.js";
import books from "./model/Book.js";
import routes from "./routes/index.js";


db.on("erro", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log("conexão com o banco realizado com sucesso!")
})

const app = express();

app.use(express.json())

routes(app)

app.get('/books/:id', (req, res) => {
    let index = getBookById(req.params.id);
    res.json(books[index]);
})

app.delete('/books/:id', (req, res) => {
    let {
        id
    } = req.params;
    let index = getBookById(id);
    books.splice(index, 1);
    res.status(200).send(`Successfully delete book ${id}`)
})


function getBookById(id) {
    return books.findIndex(book => book.id == id)
}

export default app;