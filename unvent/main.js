'use script';

let burger = document.querySelector('.nav__hamburger');
let menu = document.querySelector('.nav__list');
let body = document.querySelector('body');

burger.onclick = () => {

  menu.classList.toggle('nav__list--active');
  burger.classList.toggle('is-active');   
  body.classList.toggle('body--active');

}

// $('.nav__link').click(function(){
//   $('.nav__burger').removeClass("is-active");
//   $('.nav__list').removeClass('nav__list--active');
//   $('body').removeClass('body--active');
// });