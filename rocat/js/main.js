var cart = {};

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

      else $('.modal').toggleClass('modal--active');    
    });

    $(".footer__link--order").click(function () {
      var clickCart = $('.header__cart-quantity').text();
      if (clickCart > 0) {
        $('.footer__link--order').attr('href', "cart.html");
      }

      else $('.modal--footer').toggleClass('modal--active');    
    });

    $(".modal__close").click(function () {
      $('.modal').removeClass('modal--active'); 
    });

    $(".additional__button").click(function () {
      $(this).attr('disabled', true);
    });

    $(".button--add").click(function () {
      $(this).attr('disabled', true);
      $(this).text('');
    });

    loadGoods();
    checkCart();
    showMiniCart();

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