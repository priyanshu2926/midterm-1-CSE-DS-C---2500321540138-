
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.static('public'));

let books = [
    { id: 1, 
    title: "The Alchemist", 
    author: "Paulo Coelho",
    category : "Ficton"
 },
    { id: 2, 
    title: "Programming in C++",
    author: "ABC",
    category:"CS"
 }
]; 


app.post('/books', (req, res) => {
    const book = {
        id: req.body.id,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category
    };

    books.push(book);
    res.json(book);
});


app.get('/books', (req, res) => {
    res.json(books);
});


app.put('/books/:id', (req, res) => {
    const id = Number(req.params.id);

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.send("Book not found");
    }

    book.name = req.body.name;
    book.author = req.body.author;
    book.category = req.body.category;

    res.send("Book updated successfully");
});


app.delete('/books/:id', (req, res) => {
    const id = Number(req.params.id);

    books = books.filter(b => b.id !== id);

    res.send("Book deleted successfully");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});