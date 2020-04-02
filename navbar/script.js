const navbarBtn = document.querySelector('.navbar__btn');
const navbarLinks = document.querySelector('.navbar__links');

navbarBtn.addEventListener('click', function() {
    let value = navbarLinks.classList.contains('navbar__collapse');
    // classlist.contains 해당 클라스가 포함되어있는지 여부를 true, false로 반환
    console.log(value); // 초기값은 false
    if(value) { //
        navbarLinks.classList.remove('navbar__collapse');
        navbarBtn.classList.remove('change');
    } else {
        navbarLinks.classList.add('navbar__collapse');
        // 초기값이 false이기 때문에 else문에 걸려
        // 클릭시 height:240px로 navbar가 보이도록함.
        navbarBtn.classList.add('change');
    }
})