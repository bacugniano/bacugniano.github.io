var cart = {};

new WOW().init();

$('document').ready(function(){
    //скролл вверх
    $(window).scroll(function() {
      if ($(this).scrollTop() > 600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    })

    $("a[href^='#']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

    $(".header__cart").click(function () {
      var clickCart = $('.header__cart-quantity').text();
      if (clickCart > 0) {
        $('.header__cart').attr('href', "cart.html");
      }

      else $('.modal--top').fadeToggle();    
    });

    $(".footer__link--order").click(function () {
      var clickCart = $('.header__cart-quantity').text();
      if (clickCart > 0) {
        $('.footer__link--order').attr('href', "cart.html");
      }

      else $('.modal--footer').fadeToggle();    
    });

    $(".modal__close").click(function () {
      $('.modal').fadeOut();
    });

    
    
    // $(window).on('load', function() {
    //   $('.preloader').fadeOut().end().delay(500).fadeOut('slow');
    // });
    
    // $(".header__hamburger").click(function() {
    //   $(this).toggleClass("is-active");
    //   $('.navigation').fadeToggle(function(){
    //     if($(this).css('display') === "none"){
    //       $(this).addClass('navigation--active');
    //     }
    //   });
    // });


    loadGoods();
    checkCart();
    showMiniCart();

});

$(window).on('load', function () {
  $('body').addClass('loaded_hiding');
  window.setTimeout(function () {
    $('body').addClass('loaded');
    $('body').removeClass('loaded_hiding');
  }, 400);
});

function loadGoods() {
   $.getJSON('goods.json', function (data) {
    // console.log(data);
      $('button.button-to-cart').on('click', addToCart);
    });
}

function addToCart() {
    //добавляем товар в корзину
    var articul = $(this).attr('data-articul');
    if (cart[articul]!=undefined) {
        cart[articul]++;
    }
    else {
        cart[articul] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart) );
    //console.log(cart);
    showMiniCart();
}

function checkCart(){
    //проверяю наличие корзины в localStorage;
    if ( localStorage.getItem('cart') != null) {
        cart = JSON.parse (localStorage.getItem('cart'));
    }
}

function showMiniCart(){
    //показываю содержимое корзины
    var out = 0;
    for (var w in cart) {
        out += cart[w];
    }
    $('.header__cart-quantity').html(out);

    if (out > 0) {
      $('.header__cart').addClass('header__cart--active');
    }
    
    if (out >= 10) {
      $('.header__cart-quantity').addClass('header__cart-quantity--more');
    } else $('.header__cart-quantity').removeClass('header__cart-quantity--more');
}

$(".additional__button").click(function () {
  $(this).attr('disabled', true);
});

$(".button--add").click(function () {
  $(this).attr('disabled', true);
  $(this).text('');
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.navigation'),
  menuItem = document.querySelectorAll('.navigation__item'),
  hamburger = document.querySelector('.header__hamburger');
  header = document.querySelector('.container-header');
  body = document.querySelector('body');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('is-active');
      menu.classList.toggle('navigation--active');
      header.classList.toggle('container-header--active');
      body.classList.toggle('body--active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('is-active');
          menu.classList.toggle('navigation--active');
          header.classList.toggle('container-header--active');
          body.classList.toggle('body--active');
      })
  })
})

