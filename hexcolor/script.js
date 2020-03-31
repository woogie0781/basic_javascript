const hexNumber = [0,1,2,3,4,5,6,7,8,9];
const Number = Array(10).fill().map(function(ele, idx) { return idx });
// Number와 hexNumber는 같은 배열;
const Alphabet = ['A','B','C','D','E','F'];
const numbers = [...hexNumber, ...Alphabet]; // hexNumber.concat(Alphabet);

const hexBtn = document.querySelector('.hexBtn');
const body = document.querySelector('body');
const hex = document.querySelector('.hex');

hexBtn.addEventListener('click', getHex);

function getHex() {
    let hexColor = '#';
    for (let i=0; i<6; i++) {
        hexColor += numbers[Math.floor(Math.random() * numbers.length)]
    }
    body.style.backgroundColor = hexColor;
    // hex.textContent = hexColor;
    hex.innerHTML = "<i><font color='red'>"+hexColor+"</i>";
};