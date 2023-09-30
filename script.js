const myLibrary = [];

function Book(bookTitle, bookAuthor, bookPages) {
    this.bookTitle = bookTitle
    this.bookAuthor = bookAuthor
    this.bookPages = bookPages    
}

function addBookToLibrary() {
    const bookTitle = document.getElementById('bookTitle').value;
    const bookAuthor = document.getElementById('bookAuthor').value;
    const bookPages = document.getElementById('bookPages').value;

    const newBook = new Book(bookTitle, bookAuthor, bookPages)
    myLibrary.push(newBook);

    document.getElementById('bookTitle').value='';
    document.getElementById('bookAuthor').value='';
    document.getElementById('bookPages').value='';

    displayLibrary();
}

function displayLibrary() {
    const contentContainer = document.querySelector('.contentContainer');
    contentContainer.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement('div')
        bookCard.classList.add('bookCard');
        bookCard.textContent = `Title: ${myLibrary[i].bookTitle}, Author: ${myLibrary[i].bookAuthor}, Pages: ${myLibrary[i].bookPages}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteButton');
        deleteButton.addEventListener('click', () => deleteBook(i));

        const readBook = document.createElement('button');
        readBook.textContent = 'Read';
        readBook.classList.add('readBook');
        readBook.addEventListener('click', () => toggleRead(i));

        bookCard.appendChild(deleteButton);
        bookCard.appendChild(readBook);
        contentContainer.appendChild(bookCard);
    }
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayLibrary();
}

function toggleRead(index) {
    const bookCard = document.querySelectorAll('.bookCard')[index];
    bookCard.style.backgroundColor = bookCard.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
}