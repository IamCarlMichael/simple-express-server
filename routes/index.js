const express = require("express");
const router = express.Router();
// const router = require("../router");

// router.get("/books", (req, res) => res.send("Here are the books"));
// router.post("/books", (req, res) => res.send("You have created a new book:)"));
router.get("/", (req, res) =>
  res.send("Thank you for visiting the server, hope to see you again")
);

module.exports = router;
