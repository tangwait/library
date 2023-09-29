const myLibrary = [];

function Book(name, author, pages) {
    this.name = name
    this.author = author
    this.pages = pages    
}

function addBookToLibrary(name, author, pages) {
    const newBook = new Book(name, author, pages)
    myLibrary.push(newBook);
}