const http = require("http");
const port = 3000;
const routes = {
    '/': 'Course of Node',
    '/books': 'Book listing',
    '/authors': 'Author listing',
    '/categories': 'category listing'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.end(routes[req.url])
});

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
});