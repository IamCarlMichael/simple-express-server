const request = require("supertest");
const app = require("../app");

describe("/books", () => {
  it("[GET] / return all the sets of data", () => {
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
    return request(app)
      .get("/books/1")
      .expect(200)
      .expect({ id: 1, title: "React", author: "Melvin" });
  });

  it("[GET] / return the relevant book id:2", () => {
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
      .expect({ id: 123, title: "My first book", author: "Bob" });
  });

  it("[DELETE] delete a single book by id", () => {
    return request(app)
      .delete("/books/123")
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

  it("[GET] / return Melvin's array", () => {
    return request(app)
      .get("/books")
      .query({ author: "Melvin" })
      .expect(200)
      .expect([{ id: 1, title: "React", author: "Melvin" }]);
  });

  it("[GET] / return empty array", () => {
    return request(app)
      .get("/books")
      .query({ author: "Hello" })
      .expect(200)
      .expect([]);
  });

  it("[GET] /books?title=MVC", () => {
    return request(app)
      .get("/books")
      .query({ title: "MVC" })
      .expect(200)
      .expect([{ id: 6, title: "MVC is a design pattern", author: "Yun" }]);
  });

  it("[GET] /books?author=Melvin&title=MVC", () => {
    return request(app)
      .get("/books")
      .query({ author: "Melvin" })
      .query({ title: "MVC" })
      .expect(200)
      .expect([
        { id: 1, title: "React", author: "Melvin" },
        { id: 6, title: "MVC is a design pattern", author: "Yun" }
      ]);
  });

  it("[PUT] update a single book by id", () => {
    const bookUpdates = {
      id: 6,
      title: "REST is not a design pattern",
      author: "Elvin"
    };
    return request(app)
      .put("/books/5")
      .send(bookUpdates)
      .expect(200)
      .expect({
        id: 6,
        title: "REST is not a design pattern",
        author: "Elvin"
      });
  });
});
