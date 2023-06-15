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
const form = document.getElementById('form-container');
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

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Process form data or perform other actions
    // Example: Sending form data to a server using AJAX
    formContainer.style.display = "none";
    blurBackground.style.display = "none";
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let page = inputPage.value;
    let read = isRead();
    addBookToLibrary(title, author, page, read);
    bookBodyStructure(title, author, page, read);
    // Reset form inputs
    inputTitle.value = '';
    inputAuthor.value = '';
    inputPage.value = '';
    confirmRead.checked = false;
}

// Add event listener to the form
form.addEventListener('submit', submitForm);

//function to check to see if the input is empty or not
function inputValidate() {
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let page = inputPage.value;
    if(title.trim() && author.trim() && page.trim() !== '') {
        console.log('check box isn\'t empty')
    } else {
        console.log('check box is empty')
    }
}


//function for creating book container structure
function bookBodyStructure(title, author, page, read) {

    // Create the wrap book container
    const wrapBookContainer = document.getElementById('wrap-book-container');

    // Create the book container div
    const bookContainer = document.createElement('div');
    bookContainer.className = 'relative w-52 h-64 shadow-2xl group justify-self-center md:justify-start';
    bookContainer.id = 'book';

    // Create the top container div
    const topContainer = document.createElement('div');
    topContainer.className = 'p-4 space-y-6';

    // Create the title div
    const titleDiv = document.createElement('div');
    titleDiv.className = 'space-x-3';

    // Create the title span
    const titleSpan = document.createElement('span');
    titleSpan.textContent = 'Title: ';
    titleSpan.classList.add(
        'text-gray-500',
        'text-sm'
    )

    // Create the span to display the book title
    const bookTitleSpan = document.createElement('span');
    bookTitleSpan.id = 'book-title';
    bookTitleSpan.innerHTML = title;
    bookTitleSpan.classList.add(
        'text-gray-500',
        'text-sm',
        'font-bold'
    )

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
    authorSpan.textContent = 'Author: ';
    authorSpan.classList.add(
        'text-gray-500',
        'text-sm'
    )

    // Create the span to display the book author
    const bookAuthorSpan = document.createElement('span');
    bookAuthorSpan.id = 'book-author';
    bookAuthorSpan.innerHTML = author;
    bookAuthorSpan.classList.add(
        'text-gray-500',
        'text-sm',
        'font-bold'
    )

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
    pagesSpan.textContent = 'Pages: ';
    pagesSpan.classList.add(
        'text-gray-500',
        'text-sm'
    )

    // Create the span to display the book pages
    const bookPagesSpan = document.createElement('span');
    bookPagesSpan.id = 'book-pages';
    bookPagesSpan.innerHTML = page;
    bookPagesSpan.classList.add(
        'text-gray-500',
        'text-sm',
        'font-bold'
    )

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

    // Create the SVG element
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('class', 'w-[20px] h-[20px] text-black group-hover:text-gray-600');
    svgElement.setAttribute('viewBox', '0 0 24 24');
    svgElement.setAttribute('stroke-width', '1.5');
    svgElement.setAttribute('stroke', 'currentColor');
    svgElement.setAttribute('fill', 'none');
    svgElement.setAttribute('stroke-linecap', 'round');
    svgElement.setAttribute('stroke-linejoin', 'round');

    // Create the path element
    const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement.setAttribute('stroke', 'none');
    pathElement.setAttribute('d', 'M0 0h24v24H0z');
    pathElement.setAttribute('fill', 'none');

    // Create the first line of the SVG
    const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line1.setAttribute('x1', '18');
    line1.setAttribute('y1', '6');
    line1.setAttribute('x2', '6');
    line1.setAttribute('y2', '18');

    // Create the second line of the SVG
    const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line2.setAttribute('x1', '6');
    line2.setAttribute('y1', '6');
    line2.setAttribute('x2', '18');
    line2.setAttribute('y2', '18');

    // Append the lines to the SVG
    svgElement.appendChild(pathElement);
    svgElement.appendChild(line1);
    svgElement.appendChild(line2);

    // Create the exit button div
    const exitButtonDiv = document.createElement('div');
    exitButtonDiv.className = 'absolute -top-3 -right-3 w-[20px] h-[20px] bg-gray-200 rounded-full hover:cursor-pointer opacity-0 group-hover:opacity-70';
    exitButtonDiv.id = 'book-exit-btn';

    // Append the SVG to the exit button div
    exitButtonDiv.appendChild(svgElement);

    // Append the exit button div to the book container div
    bookContainer.appendChild(exitButtonDiv);

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