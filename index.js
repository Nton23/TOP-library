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
})

//function to check if the book is read or not
function isRead() {
    return confirmRead.checked;
}

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
})


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
})