class Books {
  constructor() {
    this.books = [
      { id: 1, title: "React", author: "Melvin" },
      { id: 2, title: "Node", author: "Elson" },
      { id: 3, title: "Express", author: "Jesstern" },
      { id: 4, title: "All about APIs", author: "Ashley" },
      { id: 5, title: "RESTful APIs are not Design Patterns", author: "Syafi" },
      { id: 6, title: "MVC is a design pattern", author: "Yun" }
    ];
  }

  getAllBooks() {
    return this.books;
  }

  getBookById(id) {
    return this.books[id - 1];
    // return this.books.find(b => b.id === id)
  }
}

module.exports = new Books();
