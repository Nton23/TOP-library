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
    const bookContainer = document.createElement('div');
    bookContainer.classList.add(
        'relative',
        'w-1/5',
        'border-2',
        'border-gray-500',
    )
    
    const topOutterContainer = document.createElement('div');
    topOutterContainer.classList.add(
        'p-4'
        
    )

    const topPart = document.createElement('div');
    topPart.classList.add(
        'space-y-8'
    )

    const titleSection = document.createElement('div');
    titleSection.classList.add();
    const titleLabel = document.createElement('span');
    titleLabel.textContent = 'Title: ';
    const titleSpan = document.createElement('span');
    titleSpan.id = 'book-title';
    titleSpan.innerText = title;
    titleSection.appendChild(titleLabel);
    titleSection.appendChild(titleSpan);
    topPart.appendChild(titleSection);

    // Create the author section
    const authorSection = document.createElement('div');
    authorSection.classList.add();
    const authorLabel = document.createElement('span');
    authorLabel.textContent = 'Author: ';
    const authorSpan = document.createElement('span');
    authorSpan.id = 'book-author';
    authorSpan.innerText = author;
    authorSection.appendChild(authorLabel);
    authorSection.appendChild(authorSpan);
    topPart.appendChild(authorSection);

    // Create the pages section
    const pagesSection = document.createElement('div');
    pagesSection.classList.add();
    const pagesLabel = document.createElement('span');
    pagesLabel.textContent = 'Pages: ';
    const pagesSpan = document.createElement('span');
    pagesSpan.id = 'book-pages';
    pagesSpan.innerText = page;
    pagesSection.appendChild(pagesLabel);
    pagesSection.appendChild(pagesSpan);
    topPart.appendChild(pagesSection);

    const midBorder = document.createElement('div');
    midBorder.classList.add(
        'border-2',
        'border-gray-500',
        'w-full'
    )

    const bottomOutterContainer = document.createElement('div');
    bottomOutterContainer.classList.add(
        'p-4'
    )

    const bottomPart = document.createElement('div');
    bottomPart.classList.add(
        'flex',
        'justify-center',
        'space-x-4',
    )

    const checkboxLabel = document.createElement('label');
    checkboxLabel.htmlFor = 'book-read';
    checkboxLabel.textContent = 'Have you read it?';

    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.id = 'book-read';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add(
        'bg-black',
        'w-10',
        'h-5',
    )

    bottomPart.appendChild(checkboxInput);
    bottomPart.appendChild(checkboxLabel);
    bottomOutterContainer.appendChild(deleteButton);



    topOutterContainer.appendChild(topPart);
    bottomOutterContainer.appendChild(bottomPart);
    bookContainer.appendChild(topOutterContainer);
    bookContainer.appendChild(midBorder);
    bookContainer.appendChild(bottomOutterContainer);
    const wrapBookContainer = document.getElementById('wrap-book-container');
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