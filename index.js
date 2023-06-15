//Declare variable global
const exitBtn = document.getElementById('exit-btn');
const addBtn = document.getElementById('add-book-btn');
const formContainer = document.getElementById('form-container');
const blurBackground = document.getElementById('blur-background');
let inputTitle = document.getElementById('input-title');
let inputAuthor = document.getElementById('input-author');
let inputPage = document.getElementById('input-pages');
let confirmRead = document.getElementById('confirmation-read');
const submitBtn = document.getElementById('submit-btn');
//const bookExitBtn = document.getElementById('book-exit-btn');

//array to store book
let myLibrary = [];

let countBook;
let isChecked = false;

//function to display an add form block
addBtn.addEventListener('click', () => {
    formContainer.style.display = "block"; 
    blurBackground.style.display = "block";
});

//function to check if the book is read or not
function isRead() {
    return confirmRead.checked;
};

//function to exit the add form block
exitBtn.addEventListener('click', () => {
    formContainer.style.display = "none";
    blurBackground.style.display = "none";
});

//function to submit the add form block
submitBtn.addEventListener('click', () => {
    formContainer.style.display = "none";
    blurBackground.style.display = "none";
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let page = inputPage.value;
    let read = isRead();
    addBookToLibrary(title, author, page, read);
    bookBodyStructure(title, author, page, read);
});

//function for creating book container structure
function bookBodyStructure(title, author, page, read) {

    // Create the wrap book container
    const wrapBookContainer = document.getElementById('wrap-book-container');

    // Create the book container div
    const bookContainer = document.createElement('div');
    bookContainer.className = 'relative w-52 h-64 shadow-2xl group';
    bookContainer.id = 'book';

    // Create the top container div
    const topContainer = document.createElement('div');
    topContainer.className = 'p-4 space-y-6';

    // Create the title div
    const titleDiv = document.createElement('div');
    titleDiv.className = 'space-x-3';

    // Create the title span
    const titleSpan = document.createElement('span');
    titleSpan.textContent = 'Title:';

    // Create the span to display the book title
    const bookTitleSpan = document.createElement('span');
    bookTitleSpan.id = 'book-title';

    // Append the title span and book title span to the title div
    titleDiv.appendChild(titleSpan);
    titleDiv.appendChild(bookTitleSpan);

    // Append the title div to the top container div
    topContainer.appendChild(titleDiv);

    // Create the author div
    const authorDiv = document.createElement('div');
    authorDiv.className = 'space-x-3';

    // Create the author span
    const authorSpan = document.createElement('span');
    authorSpan.textContent = 'Author:';

    // Create the span to display the book author
    const bookAuthorSpan = document.createElement('span');
    bookAuthorSpan.id = 'book-author';

    // Append the author span and book author span to the author div
    authorDiv.appendChild(authorSpan);
    authorDiv.appendChild(bookAuthorSpan);

    // Append the author div to the top container div
    topContainer.appendChild(authorDiv);

    // Create the pages div
    const pagesDiv = document.createElement('div');
    pagesDiv.className = 'space-x-3';

    // Create the pages span
    const pagesSpan = document.createElement('span');
    pagesSpan.textContent = 'Pages:';

    // Create the span to display the book pages
    const bookPagesSpan = document.createElement('span');
    bookPagesSpan.id = 'book-pages';

    // Append the pages span and book pages span to the pages div
    pagesDiv.appendChild(pagesSpan);
    pagesDiv.appendChild(bookPagesSpan);

    // Append the pages div to the top container div
    topContainer.appendChild(pagesDiv);

    // Append the top container div to the book container div
    bookContainer.appendChild(topContainer);

    // Create the bottom container div
    const bottomContainer = document.createElement('div');
    bottomContainer.className = 'absolute bottom-0 right-0 left-0 h-1/4 p-2 text-white duration-500 bg-black opacity-0 bg-opacity-40 hover:opacity-100 flex justify-center items-center space-x-4';

    // Create the checkbox input
    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.id = 'book-read';

    // Create the label for the checkbox
    const checkboxLabel = document.createElement('label');
    checkboxLabel.htmlFor = 'book-read';
    checkboxLabel.textContent = 'Have you read it?';

    // Append the checkbox input and label to the bottom container div
    bottomContainer.appendChild(checkboxInput);
    bottomContainer.appendChild(checkboxLabel);

    // Append the bottom container div to the book container div
    bookContainer.appendChild(bottomContainer);
    wrapBookContainer.appendChild(bookContainer);
};

//Constructor function
function Book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
};

//function to add book to array
function addBookToLibrary (title, author, page, read) {
    const book = new Book(title, author, page, read);
    let myLastBook;
    myLibrary.push(book);
    for (let i = 0; i < myLibrary.length; i++) {
        myLastBook = myLibrary[myLibrary.length - 1]
    }
    console.log(myLastBook);
    console.log(myLibrary.length);
    countBook = myLibrary.length;
};



confirmRead.addEventListener('change', () => {
    isRead();
});