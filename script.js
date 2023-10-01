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
        const bookCard = document.createElement('div');
        bookCard.classList.add('bookCard');

        const details = ['Title', 'Author', 'Pages'];

        details.forEach(detail => {
            const detailElement = document.createElement('div');
            detailElement.classList.add('bookDetails');

            const labelElement = document.createElement('span');
            labelElement.classList.add('detail-label');
            labelElement.textContent = `${detail}: `;

            const valueElement = document.createElement('span');
            valueElement.classList.add('detail-value');
            valueElement.textContent = myLibrary[i][`book${detail}`];

            detailElement.appendChild(labelElement);
            detailElement.appendChild(valueElement);
            bookCard.appendChild(detailElement);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteButton');
        deleteButton.addEventListener('click', () => deleteBook(i));
        bookCard.appendChild(deleteButton);

        const readBook = document.createElement('button');
        readBook.textContent = 'Read';
        readBook.classList.add('readBook');
        readBook.addEventListener('click', () => toggleRead(i));
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
    const currentColor = bookCard.style.backgroundColor;
    
    bookCard.style.backgroundColor = (currentColor === 'yellowgreen') ? 'tomato' : 'yellowgreen';
    
}
