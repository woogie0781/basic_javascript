const background = document.querySelector('#colors');
const button = document.querySelector('#colorBtn');
const body = document.querySelector('body');

const colors = ['purple', 'pink', 'blue']
function random() {
    body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}

button.addEventListener('click', function() {
    random()
    if (background.classList.contains('first')) {
        background.classList.remove('first');
        background.classList.add('second');
    } else if (background.classList.contains('second')) {
        background.classList.remove('second');
        background.classList.add('third');
    } else if (background.classList.contains('third')) {
        background.classList.remove('third');
        background.classList.add('first');
    }
});