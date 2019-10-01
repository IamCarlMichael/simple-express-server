const request = require("supertest");
const book = require("../model/books");
const app = require("../app");

describe("/books", () => {
  it("[GET] / return all the sets of data", () => {
    return request(app)
      .get("/books")
      .expect(200)
      .expect(book.getAllBooks());
  });
  it("[GET] / return the relevant book id:1", () => {
    return request(app)
      .get("/books/1")
      .expect(200)
      .expect({ id: 1, title: "React", author: "Melvin" });
  });

  it("[GET] / return the relevant book id:1", () => {
    return request(app)
      .get("/books/2")
      .expect(200)
      .expect({ id: 2, title: "Node", author: "Elson" });
  });

  it("[POST] / Add a new book", () => {
    const newBook = { id: 123, title: "My first book", author: "Bob" };
    return request(app)
      .get("/books/new")
      .send(newBook)
      .expect(200)
      .expect({ id: 123, title: "My first book", author: "Bob" });
  });
});
