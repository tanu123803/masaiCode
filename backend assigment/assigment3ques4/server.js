const express = require("express");
const fs = require("fs")
const app = express();

app.use(express.json())

function readBooks() {
  const data = fs.readFileSync(DB_FILE, "utf-8");
  return JSON.parse(data);
}
function writeBooks(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), "utf-8");
}

app.post("/books", (req, res) => {
  const books = readBooks();
  const newBook = req.body;
  newBook.id = books.length ? books[books.length - 1].id + 1 : 1;
  books.push(newBook);
  writeBooks(books);
  res.status(201).json(newBook);
});

app.get("/books", (req, res) => {
  const books = readBooks();
  res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
  const books = readBooks();
  const book = books.find(b => b.id === parseInt(req.params.id));

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});
app.put("/books/:id", (req, res) => {
  const books = readBooks();
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index !== -1) {
    books[index] = { ...books[index], ...req.body };
    writeBooks(books);
    res.status(200).json(books[index]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});
app.delete("/books/:id", (req, res) => {
  const books = readBooks();
  const id = parseInt(req.params.id);
  const updatedBooks = books.filter(b => b.id !== id);

  if (books.length === updatedBooks.length) {
    return res.status(404).json({ message: "Book not found" });
  }

  writeBooks(updatedBooks);
  res.status(200).json({ message: "Book deleted successfully" });
});

app.get("/books/search", (req, res) => {
  const { author } = req.query;
  const books = readBooks();

  if (!author) {
    return res.status(400).json({ message: "Author name is required" });
  }

  const filteredBooks = books.filter(b =>
    b.author.toLowerCase().includes(author.toLowerCase())
  );

  if (filteredBooks.length > 0) {
    res.status(200).json(filteredBooks);
  } else {
    res.status(404).json({ message: "No books found" });
  }
});







app.use("/",(req,res)=>{
    res.status(404).json({messsage:"404 route is not found"})
})


app.listen(3000,()=>{
    console.log("server is  running on the port 3000")
})