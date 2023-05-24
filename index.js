//Declare global variables
const exitBtn = document.getElementById('exit-btn');
const addBtn = document.getElementById('add-book-btn');
const formContainer = document.getElementById('form-container');
const blurBackground = document.getElementById('blur-background');
const bookExitBtn = document.getElementById('book-exit-btn');
const book = document.getElementById('book');
const inputTitle = document.getElementById('input-title');
const inputAuthor = document.getElementById('input-author');
const inputPage = document.getElementById('input-pages');
const confirmRead = document.getElementById('confirmation-read');
const submitBtn = document.getElementById('submit-btn');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookPages = document.getElementById('book-pages');
const bookRead = document.getElementById('book-read');

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

//book structure
function bookStructure() {
    //Book container
    const containerDiv = document.createElement('div');
    containerDiv.className = 'relative w-48 h-64 shadow-2xl group';
    containerDiv.id = 'book';

    //Top container
    const topContainer = document.createElement('div');
    topContainer.className = 'p-4 space-y-6';
    //title
    const titleContainer = document.createElement('div');
    titleContainer.className = 'space-x-3';
    const titleSpan = document.createElement('span');
    titleSpan.innerHTML = 'Title';
    const titleSpanValue= document.createElement('span');
    titleSpanValue.id = 'book-title';
    //author
    const authorContainer = document.createElement('div');
    authorContainer.className = 'space-x-3';
    const authorSpan = document.createElement('span');
    authorSpan.innerHTML = 'Author';
    const authorSpanValue= document.createElement('span');
    authorSpanValue.id = 'book-author';
    //pages
    const pageContainer = document.createElement('div');
    pageContainer.className = 'space-x-3';
    const pageSpan = document.createElement('span');
    pageSpan.innerHTML = 'Pages';
    const pageSpanValue= document.createElement('span');
    pageSpanValue.id = 'book-pages';
    
    //Bottom Container
}

//function to display the book form for filling out the book information
addBtn.addEventListener('click', addClick);
function addClick() {
    bookStructure();
    formContainer.style.display = "block"; 
    blurBackground.style.display = "block";
};

//function to exit the book form
exitBtn.addEventListener('click', () => {
    formContainer.style.display = "none";
    blurBackground.style.display = "none";
});

//book remove function
bookExitBtn.addEventListener('click', () => {
    book.remove();
});

//function for submit button in the book form
submitBtn.addEventListener('click', () => {
    console.log(bookNumber());
});
