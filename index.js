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
let myLibrary = [];

//library count
bookCount = myLibrary.length

console.log(bookCount);
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

//function to display the book form for filling out the book information
addBtn.addEventListener('click', addClick);
function addClick() {
    
    //formContainer.style.display = "block"; 
    //blurBackground.style.display = "block";
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
    isRead(confirmRead);
    let bookCount = myLibrary.length;
    
});


