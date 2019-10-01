const express = require("express");
const router = express.Router();
const Books = require("../model/books.js");

router.get("/", (req, res) => res.send(Books.getAllBooks()));
router.get("/:id", (req, res) => res.send(Books.getBookById(req.params.id)));
router.post("/", (req, res) => res.send("You have created a new book:)"));

router.post("/new", (req, res) =>
  res.send({ id: 123, title: "My first book", author: "Bob" })
);

module.exports = router;
