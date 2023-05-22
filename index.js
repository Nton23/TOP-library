const addBtn = document.getElementById('add-book-btn');
const formContainer = document.getElementById('form-container');
const blurBackground = document.getElementById('blur-background');
addBtn.addEventListener('click', addClick);
function addClick() {
    formContainer.style.display = "block"; 
    blurBackground.style.display = "block";
}

const exitBtn = document.getElementById('exit-btn');
exitBtn.addEventListener('click', () => {
    formContainer.style.display = "none";
    blurBackground.style.display = "none";
})