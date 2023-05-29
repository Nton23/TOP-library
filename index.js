//Declare global variables
const exitBtn = document.getElementById('exit-btn');
const addBtn = document.getElementById('add-book-btn');
const formContainer = document.getElementById('form-container');
const blurBackground = document.getElementById('blur-background');
const bookExitBtn = document.getElementById('book-exit-btn');
const inputTitle = document.getElementById('input-title');
const inputAuthor = document.getElementById('input-author');
const inputPage = document.getElementById('input-pages');
const confirmRead = document.getElementById('confirmation-read');
const submitBtn = document.getElementById('submit-btn');
const bookDisplayContainer = document.getElementById('book-display-container');

let titleValue;
let authorValue;
let pageValue;

//array to store book
let myLibrary = [2,3];

//function for library count
function bookNumber() {
    let bookCount = myLibrary.length - 1;
    return ++bookCount;
}


//Constructor function
function Book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
};

//add book to array function
function addBookToLibrary() {

};

//function to see if the book is read or not
function isRead(confirmRead) {
    let isChecked = confirmRead.checked;
    console.log(isChecked);
};

function bookStructure() {
    // Book container
    const containerDiv = document.createElement('div');
    containerDiv.className = 'relative w-48 h-64 shadow-2xl group';
    containerDiv.id = 'book';

    // Top container
    const topContainer = document.createElement('div');
    topContainer.className = 'p-4 space-y-6';

    // Title
    const titleContainer = document.createElement('div');
    titleContainer.className = 'space-x-3';
    const titleSpan = document.createElement('span');
    titleSpan.innerHTML = 'Title :';
    const titleSpanValue = document.createElement('span');
    titleSpanValue.id = 'book-title';

    // Author
    const authorContainer = document.createElement('div');
    authorContainer.className = 'space-x-3';
    const authorSpan = document.createElement('span');
    authorSpan.innerHTML = 'Author :';
    const authorSpanValue = document.createElement('span');
    authorSpanValue.id = 'book-author';

    // Pages
    const pageContainer = document.createElement('div');
    pageContainer.className = 'space-x-3';
    const pageSpan = document.createElement('span');
    pageSpan.innerHTML = 'Pages :';
    const pageSpanValue = document.createElement('span');
    pageSpanValue.id = 'book-pages';

    // Bottom Container
    const bottomContainer = document.createElement('div');
    bottomContainer.className = 'absolute bottom-0 right-0 left-0 h-1/4 p-2 text-white duration-500 bg-black opacity-0 bg-opacity-40 hover:opacity-100 flex justify-center items-center space-x-4';
    const bookRead = document.createElement('input');
    bookRead.id = 'book-read';
    bookRead.setAttribute('type', 'checkbox');
    const bookReadLabel = document.createElement('label');
    bookReadLabel.setAttribute('for', 'book-read');
    bookReadLabel.innerHTML = 'Have you read it?';

    // Append elements to the structure
    titleContainer.appendChild(titleSpan);
    titleContainer.appendChild(titleSpanValue);

    authorContainer.appendChild(authorSpan);
    authorContainer.appendChild(authorSpanValue);

    pageContainer.appendChild(pageSpan);
    pageContainer.appendChild(pageSpanValue);

    bottomContainer.appendChild(bookRead);
    bottomContainer.appendChild(bookReadLabel);

    topContainer.appendChild(titleContainer);
    topContainer.appendChild(authorContainer);
    topContainer.appendChild(pageContainer);

    containerDiv.appendChild(topContainer);
    containerDiv.appendChild(bottomContainer);

    // Append book structure to the parent element
    const bookDisplayContainer = document.getElementById('book-display-container');
    bookDisplayContainer.appendChild(containerDiv);
    console.log('hello')
}


//function to display the book form for filling out the book information
addBtn.addEventListener('click', addClick);
function addClick() {
    formContainer.style.display = "block"; 
    blurBackground.style.display = "block";
};

//function to exit the book form
exitBtn.addEventListener('click', () => {
    formContainer.style.display = "none";
    blurBackground.style.display = "none";
});

//book remove function
//bookExitBtn.addEventListener('click', () => {
   // book.remove();
//});

//function for submit button in the book form
submitBtn.addEventListener('click', () => {
    bookStructure();
});