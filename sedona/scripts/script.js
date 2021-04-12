window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navigation__list'),
    menuItem = document.querySelectorAll('.navigation__item'),
    hamburger = document.querySelector('.navigation__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('navigation__hamburger--active');
        menu.classList.toggle('navigation__list--active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('navigation__hamburger--active');
            menu.classList.toggle('navigation__list--active');
        })
    })
})