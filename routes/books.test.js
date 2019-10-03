const request = require("supertest");
const book = require("../model/books");
const mockData = [
  { id: 1, title: "React", author: "Melvin" },
  { id: 2, title: "Node", author: "Elson" },
  { id: 3, title: "Express", author: "Jesstern" },
  { id: 4, title: "All about APIs", author: "Ashley" },
  { id: 5, title: "RESTful APIs are not Design Patterns", author: "Syafi" },
  { id: 6, title: "MVC is a design pattern", author: "Yun" }
];
const app = require("../app");
jest.mock("../model/books");

describe("/books", () => {
  it("[GET] / return all the sets of data", () => {
    book.getAllBooks.mockReturnValueOnce(mockData);
    return request(app)
      .get("/books")
      .expect(200)
      .expect([
        { id: 1, title: "React", author: "Melvin" },
        { id: 2, title: "Node", author: "Elson" },
        { id: 3, title: "Express", author: "Jesstern" },
        { id: 4, title: "All about APIs", author: "Ashley" },
        {
          id: 5,
          title: "RESTful APIs are not Design Patterns",
          author: "Syafi"
        },
        { id: 6, title: "MVC is a design pattern", author: "Yun" }
      ]);
  });

  it("[GET] / return the relevant book id:1", () => {
    book.getBookById.mockReturnValueOnce(mockData[0]);
    return request(app)
      .get("/books/1")
      .expect(200)
      .expect({ id: 1, title: "React", author: "Melvin" });
  });

  it("[GET] / return the relevant book id:2", () => {
    book.getBookById.mockReturnValueOnce(mockData[1]);
    return request(app)
      .get("/books/2")
      .expect(200)
      .expect({ id: 2, title: "Node", author: "Elson" });
  });

  it("[POST] / Add a new book", () => {
    const newBook = { id: 123, title: "My first book", author: "Bob" };
    return request(app)
      .post("/books/new")
      .send(newBook)
      .expect(200)
      .expect({ id: 123, title: "My first book", author: "Bob" })
      .expect(() => {
        expect(book.addNewBook).toHaveBeenCalledTimes(1); // this is for adding data test route, inner expect came from jest (to have been called), outer expect is from supertest
      });
  });

  it("[GET] / return Melvin's array", () => {
    book.filterBooks.mockReturnValueOnce(mockData[0]);
    return request(app)
      .get("/books")
      .query({ author: "Melvin" })
      .expect(200)
      .expect({ id: 1, title: "React", author: "Melvin" });
  });

  it("[GET] / return empty array", () => {
    book.filterBooks.mockReturnValueOnce([]);
    return request(app)
      .get("/books")
      .query({ author: "Hello" })
      .expect(200)
      .expect([]);
  });

  it("[GET] /books?title=MVC", () => {
    book.filterBooks.mockReturnValueOnce(mockData[5]);
    return request(app)
      .get("/books")
      .query({ title: "MVC" })
      .expect(200)
      .expect({ id: 6, title: "MVC is a design pattern", author: "Yun" });
  });

  it("[DELETE] delete a single book by id", () => {
    book.removeBook.mockReturnValueOnce(mockData.slice(0, -1));
    return request(app)
      .delete("/books/6")
      .expect(200)
      .expect([
        { id: 1, title: "React", author: "Melvin" },
        { id: 2, title: "Node", author: "Elson" },
        { id: 3, title: "Express", author: "Jesstern" },
        { id: 4, title: "All about APIs", author: "Ashley" },
        {
          id: 5,
          title: "RESTful APIs are not Design Patterns",
          author: "Syafi"
        }
      ]);
  });

  it("[PUT] update a single book by id", () => {
    book.updateBook.mockReturnValueOnce(mockData[5]);
    return request(app)
      .put("/books/6")
      .expect(200)
      .expect(() => {
        expect(book.updateBook).toHaveBeenCalledTimes(1);
      });
  });
});
