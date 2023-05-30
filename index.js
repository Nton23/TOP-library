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

let countLibrary;
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
    const title = inputTitle.value;
    const author = inputAuthor.value;
    const page = inputPage.value;
    const read = isRead();
    addBookToLibrary(title, author, page, read);
    bookBodyStructure(title, author, page, read);
});

//function for creating book container structure
function bookBodyStructure(title, author, page, read) {

    //book wrap container
    const bookWrapContainer = document.createElement('div');
    bookWrapContainer.className = 'border border-red-600 space-y-10 flex flex-col items-center md:flex-row md:items-center md:justify-evenly md:space-y-0 md:space-x-5';

    //book container
    const bookContainer = document.createElement('div');
    bookContainer.className = 'relative w-52 h-64 shadow-2xl group';

    //top container
    const topContainer = document.createElement('div');
    topContainer.className = 'p-4 space-y-6';

    //title container
    const titleContainer = document.createElement('div');
    titleContainer.className = 'space-x-3';

    //spans inside title container
    const titleSpan = document.createElement('span');
    titleSpan.innerHTML = 'Title: ';
    let bookTitle = document.createElement('span');
    bookTitle.innerHTML = title;

    //author container
    const authorContainer = document.createElement('div');
    authorContainer.className = 'space-x-3';

    //spans inside author container
    const authorSpan = document.createElement('span');
    authorSpan.innerHTML = 'Author: ';
    let bookAuthor = document.createElement('span');
    bookAuthor.innerHTML = author;

    //page container
    const pageContainer = document.createElement('div');
    pageContainer.className = 'space-x-3';

    //spans inside page container
    const pageSpan = document.createElement('span');
    pageSpan.innerHTML = 'Pages: ';
    let bookPages = document.createElement('span');
    bookPages.innerHTML = page;

    //bottom container
    const bottomContainer = document.createElement('div');
    bottomContainer.className = 'absolute bottom-0 right-0 left-0 h-1/4 p-2 text-white duration-500 bg-black opacity-0 bg-opacity-40 hover:opacity-100 flex justify-center items-center space-x-4';

    //input checkbox
    let bookRead = document.createElement('input');
    bookRead.setAttribute('type', 'checkbox');
    //bookRead = read;
    const labelBookRead = document.createElement('label');
    labelBookRead.setAttribute('for', 'book-read');
    labelBookRead.innerHTML = 'Have you read it?'
    
    //appendment from bottom to top
    bottomContainer.appendChild(bookRead);
    bottomContainer.appendChild(labelBookRead);
    topContainer.appendChild(titleContainer);
    titleContainer.appendChild(titleSpan);
    titleContainer.appendChild(bookTitle);
    topContainer.appendChild(authorContainer);
    authorContainer.appendChild(authorSpan);
    authorContainer.appendChild(bookAuthor);
    topContainer.appendChild(pageContainer);
    pageContainer.appendChild(pageSpan);
    pageContainer.appendChild(bookPages);
    bookContainer.appendChild(topContainer);
    bookContainer.appendChild(bottomContainer);

    //bookWrapContainer append the other divs
    bookWrapContainer.appendChild(bookContainer);
    
    //Create a variable bookDisplayContainer and appened all of the above children divs
    const bookDisplayContainer = document.getElementById('book-display-container');
    bookDisplayContainer.appendChild(bookWrapContainer);
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
    myLibrary.push(book);
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i])
    }
    console.log(myLibrary.length);
};

confirmRead.addEventListener('change', () => {
    isRead();
});