const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = document.querySelector('.images');
let count = 1;

prevBtn.addEventListener('click', function() {
    images.animate([{opacity: '0.1'}, {opacity: '1.0'}],
        {duration:1000, fill:'forwards'});
    count -= 1;
    if (count === 0) {
        count = 6;
    }
    images.style.backgroundImage = `url(img/${count}.jpg)`;    
});

nextBtn.addEventListener('click', function() {
    images.animate([{opacity: '0.1'}, {opacity: '1.0'}],
    {duration:1000, fill:'forwards'});
    count += 1;
    if (count === 7) {
        count = 1;
    }
    images.style.backgroundImage = `url(img/${count}.jpg)`;
});