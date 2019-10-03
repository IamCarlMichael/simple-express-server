const express = require("express");
const router = express.Router();
const Books = require("../model/books.js");

router.put("/:id", (req, res) => {
  const bookUpdates = req.body;
  Books.updateBook(req.params.id, bookUpdates);
  res.send(bookUpdates);
});
router.delete("/:id", (req, res) => res.send(Books.removeBook(req.params.id)));
router.get("/:id", (req, res) => res.send(Books.getBookById(req.params.id)));
router.post("/", (req, res) => res.send("You have created a new book:)"));

router.post("/new", (req, res) => {
  const newBook = req.body;
  Books.addNewBook(newBook);
  res.send(newBook);
});

router.get("/", (req, res) => {
  const { author, title } = req.query;
  if (author || title) {
    res.send(Books.filterBooks(req.query));
  }
  res.send(Books.getAllBooks());
});

module.exports = router;
