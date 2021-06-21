'use script';

let burger = document.querySelector('.nav__burger');
let menu = document.querySelector('.nav__list');

burger.onclick = () => {

  menu.classList.toggle('nav__list--active');
  burger.classList.toggle('is-active');   

}

$('.nav__link').click(function(){
  $('.nav__burger').removeClass("is-active");
  $('.nav__list').removeClass('nav__list--active');
  $('body').removeClass('body--active');
});

$('.form__range-value').html($('input[type="range"]').val() + ' %');

$(document).on('input change', 'input[type="range"]', function() {
  $('.form__range-value').html($(this).val() + ' %');
});

//select

$('.form__select').on('click', '.form__select-head', function () {
  if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).next().fadeOut();
  } else {
      $('.form__select-head').removeClass('open');
      $('.form__select-list').fadeOut();
      $(this).addClass('open');
      $(this).next().fadeIn();
  }
});

$('.form__select').on('click', '.form__select-item', function () {
  $('.form__select-head').removeClass('open');
  $(this).parent().fadeOut();
  $(this).parent().prev().text($(this).text());
  $(this).parent().prev().prev().val($(this).text());
});

$(document).click(function (e) {
  if (!$(e.target).closest('.form__select').length) {
      $('.form__select-head').removeClass('open');
      $('.form__select-list').fadeOut();
  }
});