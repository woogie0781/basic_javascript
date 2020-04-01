const lowerBtn = document.querySelector('#lower');
const addBtn = document.querySelector('#add');
const display = document.querySelector('.displayNumber');
let num = display.textContent;


lowerBtn.addEventListener('click', function() {
    num -= 1;
    display.textContent = num;
    if (display.textContent < '0') {
        display.style.color = 'red';
    } else if (display.textContent === '0') {
        display.style.color = 'white';
    }
    display.animate([
        { opacity: '0.2' },
        { opacity: '1.0' }],
        { duration: 1000, fill: 'forwards'})
});

addBtn.addEventListener('click', function() {
    num += 1;
    display.textContent = num;
    if (display.textContent > '0') {
        display.style.color = '#4caf50';
    } else if (display.textContent === '0') {
        display.style.color = 'white';
    }
    display.animate([
        { opacity: '0.2' },
        { opacity: '1.0' }],
        { duration: 500, fill: 'forwards'})
});