const button = document.querySelector('#button');
const input = document.querySelector('#input');
const message = document.querySelector('#lastmessage');

input.focus();
button.addEventListener('click', function() {
    const value = input.value;
    if (value === '') {
        alert('Please Enter Valid Value');
        input.focus();
    } else {
        input.value = '';
        message.textContent = value;
        input.focus();
    }
});