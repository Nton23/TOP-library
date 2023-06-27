//Create variables
const addBtn = document.getElementById('add-btn');
const bookDisplay = document.getElementById('book-display');
//Variables for book container & book content
const bookContainer = document.createElement('div');
bookContainer.classList.add('relative', 'shadow-lg', 'h-72', 'p-5', 'group', 'hover:scale-105', 'hover:shadow-green-400');
const topContainer = document.createElement('div');
const topContent = document.createElement('div');
topContent.classList.add('space-y-5', 'text-center', 'md:text-start');
const title = document.createElement('h5');
const titleContent = document.createElement('span');
const author = document.createElement('h5');
const authorContent = document.createElement('span');
const page = document.createElement('h5');
const pageContent = document.createElement('span');
const bottomContainer = document.createElement('div');
bottomContainer.classList.add('absolute', 'hidden', 'group-hover:block', 'bg-slate-200', 'bottom-0', 'left-0', 'right-0', 'h-20', 'p-5')
const bottomContent = document.createElement('div');
const labelElement = document.createElement('label');
labelElement.textContent = 'have you read it?'
labelElement.setAttribute('for', 'confirmation-checkbox');
const checkboxElement = document.createElement('input');
checkboxElement.setAttribute('type', 'checkbox');
checkboxElement.setAttribute('id', 'confirmation.checkbox')
//Form variables
const form = document.getElementById('form');
const blurryBg = document.getElementById('blurry-bg');




//Add button event listener
addBtn.addEventListener('click', addBtnFunction);

//Function to generate the book structure
function bookStructure() {
    title.appendChild(titleContent);
    title.classList.add('text-gray-500')
    title.textContent = 'Title: ';
    author.appendChild(authorContent);
    author.classList.add('text-gray-500');
    author.textContent = 'Author';
    page.appendChild(pageContent);
    page.classList.add('text-gray-500');
    page.textContent = 'Page: '
    topContent.appendChild(title);
    topContent.appendChild(author);
    topContent.appendChild(page);
    topContainer.appendChild(topContent);
    bottomContent.appendChild(labelElement);
    bottomContent.appendChild(checkboxElement);
    bottomContainer.appendChild(bottomContent);
    bookContainer.appendChild(topContainer);
    bookContainer.appendChild(bottomContainer);
    bookDisplay.appendChild(bookContainer);
}

//Add Functions
function addBtnFunction() {
    form.classList.toggle('hidden');
    form.classList.toggle('block');
    blurryBg.classList.toggle('hidden');
    blurryBg.classList.toggle('block');
}
