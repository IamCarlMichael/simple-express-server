const request = require("supertest");
const app = require("./app");
const book = require("./model/books");

describe("My first express server", () => {
  it("GET / should connect to the server successfully", () => {
    return request(app)
      .get("/")
      .expect(200)
      .expect("Thank you for visiting the server, hope to see you again");
  });
  it("GET / should connect to the server successfully and return array of books'", () => {
    return request(app)
      .get("/books")
      .expect(200)
      .expect(book.getAllBooks());
  });
  it("POST / should connect to the server successfully and return 'You have created a new book:)'", () => {
    return request(app)
      .post("/books")
      .expect(200)
      .expect("You have created a new book:)");
  });
});
