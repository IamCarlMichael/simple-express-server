module.exports.getBooksFromDb = () => [
  { id: 1, title: "React", author: "Melvin" },
  { id: 2, title: "Node", author: "Elson" },
  { id: 3, title: "Express", author: "Jesstern" },
  { id: 4, title: "All about APIs", author: "Ashley" },
  { id: 5, title: "RESTful APIs are not Design Patterns", author: "Syafi" },
  { id: 6, title: "MVC is a design pattern", author: "Yun" }
];

class Books {
  constructor() {
    this.books = module.exports.getBooksFromDb();
  }
  updateBook(id, bookUpdates) {
    let idx = Number(id);
    let index = this.books.findIndex(b => b.id === idx);
    this.books[index].id = bookUpdates.id;
    this.books[index].title = bookUpdates.title;
    this.books[index].author = bookUpdates.author;
  }

  removeBook(idx) {
    let index = this.books.findIndex(b => b.id === idx);
    this.books.splice(index, 1);
    return this.books;
  }

  getAllBooks() {
    return this.books;
  }

  getBookById(id) {
    return this.books[id - 1];
    // return this.books.find(b => b.id === id)
  }
  addNewBook(book) {
    return this.books.push(book);
  }

  filterBooks(queries) {
    const keys = Object.keys(queries);
    return this.books.filter(book => {
      return keys.some(key => {
        return book[key].includes(queries[key]);
      });
    });
  }
}

module.exports = new Books();
