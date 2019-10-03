const express = require("express");
const router = express.Router();
const Books = require("../model/books.js");

router.get("/:id", (req, res) => res.send(Books.getBookById(req.params.id)));
router.post("/", (req, res) => res.send("You have created a new book:)"));

router.post("/new", (req, res) => {
  const newBook = req.body;
  Books.addNewBook(newBook);
  res.send(newBook);
});

router.get("/", (req, res) => {
  const { author, title } = req.query;
  console.log(author, title);
  if (author || title) {
    res.send(Books.filterBooks(req.query));
  }
  res.send(Books.getAllBooks());
});

module.exports = router;
