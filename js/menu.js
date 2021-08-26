const burger = document.querySelector('.header__burger'),
      burgerMenu = document.querySelector('.burger__block'),
      menuItems = burgerMenu.querySelectorAll('.header__menu__item');

function showMenu() {
    burger.classList.add('active');
    burgerMenu.classList.add('active');
}

function hideMenu() {
    burger.classList.remove('active');
    burgerMenu.classList.remove('active');
}

burger.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
        hideMenu();
    } else {
        showMenu();
    }
});

menuItems.forEach(item => {
    item.addEventListener('click', () => hideMenu())
});

