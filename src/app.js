import express from "express";

const app = express();

app.use(express.json())

const book = [
    {id:1, "title": "Pais Brilhante, Filhos Fascinantes"},
    {id:2, "title": "A Magia do Amor"}
]

app.get('/',(req, res) => {
    res.status(200).send('Home Page - Book API')
})

app.get('/books',(req, res) => {
    res.status(200).json(book)
})
app.get('/books/:id',(req, res) => {
    let index = getBookById(req.params.id);
    res.json(book[index]);
})

app.post('/books',(req, res) => {
    book.push(req.body);
    res.status(201).send(`Successfully registered book ${req.body.title}`)
})

app.put('/books/:id',(req, res) => {
    let index = getBookById(req.params.id);
    book[index].title = req.body.title
    res.status(200).send(`Successfully update book ${req.body.title}`)
})


function getBookById(id){
    return book.findIndex( book => book.id == id )
}

export default app;