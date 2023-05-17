const addBtn = document.getElementById('add-book-btn');
addBtn.addEventListener('click', addClick);
function addClick() {
    const formContainer = document.getElementById('form-container');
    const blurBackground = document.getElementById('blur-background');
    formContainer.style.display = "block"; 
    blurBackground.style.display = "block";
}