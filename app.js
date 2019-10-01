const express = require("express");
const app = express();
const port = 3000;

const middleware = (req, res, next) => {
  console.log("Thanks for dropping by, please continue on your journey");
  next();
};

app.use("/haha", middleware);

const index = require("./routes/index");
app.use("/", index);

const books = require("./routes/books");
app.use("/books", books);

// // Code moved over to index.js
// app.get("/books", (req, res) => res.send("Here are the books"));
// app.post("/books", (req, res) => res.send("You have created a new book:)"));
// app.get("/", (req, res) =>
//   res.send("Thank you for visiting the server, hope to see you again")
// );

module.exports = app;
