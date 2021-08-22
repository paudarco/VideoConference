const burger = document.querySelector('.header__burger'),
      burgerMenu = document.querySelector('.burger__block');

burger.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        burgerMenu.classList.remove('active');
    } else {
        burger.classList.add('active');
        burgerMenu.classList.add('active');
    }
});