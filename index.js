//Declare global variables
const exitBtn = document.getElementById('exit-btn');
const addBtn = document.getElementById('add-book-btn');
const formContainer = document.getElementById('form-container');
const blurBackground = document.getElementById('blur-background');
const bookExitBtn = document.getElementById('book-exit-btn');
const book = document.getElementById('book');

//function to display the book form for filling out the book information
addBtn.addEventListener('click', addClick);
function addClick() {
    formContainer.style.display = "block"; 
    blurBackground.style.display = "block";
}

//function to exit the book form
exitBtn.addEventListener('click', () => {
    formContainer.style.display = "none";
    blurBackground.style.display = "none";
})

//book remove function
bookExitBtn.addEventListener('click', () => {
    book.remove();
})