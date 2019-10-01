const express = require("express");
const app = express();
const port = 3000;

app.get("/books", (req, res) => res.send("Here are the books"));
app.post("/books", (req, res) => res.send("You have created a new book:)"));
app.get("/", (req, res) =>
  res.send("Thank you for visiting the server, hope to see you again")
);

module.exports = app;
