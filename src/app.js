import express from "express";

const app = express();

const book = [
    {id:1, "titulo": "Dejavú"},
    {id:2, "titulo": "O Livro de Eli"}
]

app.get('/',(req, res) => {
    res.status(200).send('Curso de Node')
})

app.get('/books',(req, res) => {
    res.status(200).json(book)
})

export default app;