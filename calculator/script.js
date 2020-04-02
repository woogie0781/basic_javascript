const input = document.querySelector('.screen');
const btns = document.querySelectorAll('.btn');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

btns.forEach(function(btn) {
    btn.addEventListener('click',function() {
        let number = btn.getAttribute('data-num');
        input.value += number;
    })
})

equalBtn.addEventListener('click', function() {
    if (input.value === '') {
        alert('input is empty');
    } else {    
        let result = eval(input.value);
        input.value = result;
    }
});

clearBtn.addEventListener('click', function() {
    input.value = '';
})