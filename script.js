let login = document.getElementById('login');
let form = document.querySelector('.form-container');
login.addEventListener('click', () => {
    form.style.display = 'flex';
})

let button = document.getElementById('crossmark-button');
button.addEventListener('click', () => {
    form.style.display = 'none';
})

