const express = require("express");
const app = express();

app.use(express.json());

const index = require("./routes/index");
app.use("/", index);

const books = require("./routes/books");
app.use("/books", books);

const middleware = (req, res, next) => {
  console.log("Thanks for dropping by, please continue on your journey");
  next();
};
app.use("/haha", middleware);

module.exports = app;
