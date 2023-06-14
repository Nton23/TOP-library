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

    // Create the main container
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('relative', 'w-52', 'h-64', 'shadow-2xl', 'group');
    bookContainer.id = 'book';

    // Create the top container
    const topContainer = document.createElement('div');
    topContainer.classList.add('p-4', 'space-y-8');

    // Create the title section
    const titleSection = document.createElement('div');
    titleSection.classList.add('space-x-2');
    const titleLabel = document.createElement('span');
    titleLabel.textContent = 'Title: ';
    const titleSpan = document.createElement('span');
    titleSpan.id = 'book-title';
    titleSpan.innerText = title;
    titleSection.appendChild(titleLabel);
    titleSection.appendChild(titleSpan);
    topContainer.appendChild(titleSection);

    // Create the author section
    const authorSection = document.createElement('div');
    authorSection.classList.add('space-x-2');
    const authorLabel = document.createElement('span');
    authorLabel.textContent = 'Author: ';
    const authorSpan = document.createElement('span');
    authorSpan.id = 'book-author';
    authorSpan.innerText = author;
    authorSection.appendChild(authorLabel);
    authorSection.appendChild(authorSpan);
    topContainer.appendChild(authorSection);

    // Create the pages section
    const pagesSection = document.createElement('div');
    pagesSection.classList.add('space-x-2');
    const pagesLabel = document.createElement('span');
    pagesLabel.textContent = 'Pages: ';
    const pagesSpan = document.createElement('span');
    pagesSpan.id = 'book-pages';
    pagesSpan.innerText = page;
    pagesSection.appendChild(pagesLabel);
    pagesSection.appendChild(pagesSpan);
    topContainer.appendChild(pagesSection);

    bookContainer.appendChild(topContainer);

    // Create the bottom container
    const bottomContainer = document.createElement('div');
    bottomContainer.classList.add(
        'absolute',
        'bottom-0',
        'right-0',
        'left-0',
        'h-1/4',
        'p-2',
        'text-white',
        'duration-500',
        'bg-black',
        'opacity-0',
        'bg-opacity-40',
        'hover:opacity-100',
        'flex',
        'justify-center',
        'items-center',
        'space-x-4'
    );

    // Create the "Have you read it?" checkbox
    const checkboxLabel = document.createElement('label');
    checkboxLabel.htmlFor = 'book-read';
    checkboxLabel.textContent = 'Have you read it?';

    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.id = 'book-read';

    bottomContainer.appendChild(checkboxInput);
    bottomContainer.appendChild(checkboxLabel);
    bookContainer.appendChild(bottomContainer);

    // Create the exit button
    const exitButton = document.createElement('div');
    exitButton.classList.add(
        'absolute',
        'top-0',
        'right-0',
        'flex',
        'items-center',
        'justify-center',
        'w-5',
        'h-5',
        'bg-gray-200',
        'rounded-full',
        'hover:cursor-pointer',
        'opacity-0',
        'group-hover:opacity-70'
    );
    exitButton.id = 'book-exit-btn';

    // Create the SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.classList.add('w-6', 'h-6', 'text-black', 'group-hover:text-gray-600');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('stroke-width', '1.5');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');

    // Create the first line element
    const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line1.setAttribute('x1', '18');
    line1.setAttribute('y1', '6');
    line1.setAttribute('x2', '6');
    line1.setAttribute('y2', '18');

    // Create the second line element
    const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line2.setAttribute('x1', '6');
    line2.setAttribute('y1', '6');
    line2.setAttribute('x2', '18');
    line2.setAttribute('y2', '18');

    // Append the lines to the SVG element
    svg.appendChild(line1);
    svg.appendChild(line2);

    // Append the svg to exitbutton container and append that exit button container in the book container
    exitButton.appendChild(svg);
    bookContainer.appendChild(exitButton);

    // Create the container for the main container
    const wrapBookContainer = document.getElementById('wrap-book-container');
    wrapBookContainer.appendChild(bookContainer);

    //Create a variable bookDisplayContainer and appened all of the above children divs
    //const bookDisplayContainer = document.getElementById('book-display-container');
    bookDisplayContainer.appendChild(wrapBookContainer);
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