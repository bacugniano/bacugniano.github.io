var cart = {}; //корзина

$.getJSON('goods.json', function (data) {
    var goods = data; //все товары в массиве
    // console.log(goods);
    checkCart();
    //console.log(cart);
     //вывожу товары на страницу
    // showMiniCart();
    showCart();
    

    function showCart() {
            var technics = '';
            var details = '';
            var services = '';
            var val = 0 ;
            // <picture>
            //             <source 
            //                 class="technics__picture technics__picture--CAT320G"
            //                 media="(max-width: 480px)"
            //                 srcset="image/technics/CAT320G-mobile.png">
            //             <img class="technics__picture technics__picture--CAT320G" src="image/technics/CAT320G.png" alt="CAT 320 G">
            // </picture>
            for (var key in cart) {
                if (key == 't1' || key == 't2' || key == 't3' || key == 't4' || key == 't5' || key == 't6') {
                    technics += '<li class="cart__item">';
                    technics += '<div class="cart__img-wrap">';
                    technics += '<picture class="cart__img">';
                    technics += '<source class="cart__img" media="(max-width: 480px)" srcset="'+ goods[key].imageMobile +'">';
                    technics += '<img class="cart__img" src="' + goods[key].image + '" >';
                    technics += '</picture>';
                    technics += '</div>';
                    technics += '<div class="cart__description-wrap">';
                    technics += '<p class="cart__subtitle">' + goods[key].description + '</p>';
                    technics += '<p class="cart__title" name="goods_name">' + goods[key].name + '</p>';
                    technics += '<p class="cart__price">' + goods[key].cost + '</p>';
                    technics += '<a class="cart__link" href="' + goods[key].link + '">Узнать больше</a>';
                    technics += '</div>';
                    technics += '<div class="cart__value-wrap">';
                    technics += '<ul class="cart__value-list">';
                    technics += '<li class="cart__value-item">';
                    technics += '<button class="cart__value-button cart__button-minus" data-articul="' + key + '">-</button>';
                    technics += '</li>';
                    technics += '<li class="cart__value-item">';
                    technics += cart[key];
                    technics += '</li>';
                    technics += '<li class="cart__value-item">';
                    technics += '<button class="cart__value-button cart__button-plus" data-articul="' + key + '">+</button>';
                    technics += '</li>';
                    technics += '</ul>';
                    technics += '<button class="cart__button-delete" data-articul="' + key + '">Удалить</button>';
                    technics += '</div>';
                    technics += '</li>';
                }
            }

            for (var key in cart) {
                if (key == 'd1' || key == 'd2' || key == 'd3' || key == 'd4' || key == 'd5' || key == 'd6' || key == 'd7' || key == 'd8' || key == 'd9') {
                    details += '<li class="cart__item">';
                    details += '<div class="cart__img-wrap cart__img-wrap--details">';
                    details += '<picture class="cart__img">';
                    details += '<source class="cart__img cart__img--details" media="(max-width: 480px)" srcset="'+ goods[key].imageMobile +'">';
                    details += '<img class="cart__img cart__img--details" src="' + goods[key].image + '" >';
                    details += '</picture>';
                    details += '</div>';
                    details += '<div class="cart__description-wrap cart__description-wrap--details">';
                    details += '<p class="cart__subtitle">' + goods[key].description + '</p>';
                    details += '<p class="cart__title">' + goods[key].name + '</p>';
                    details += '<p class="cart__price">' + goods[key].cost + '</p>';
                    details += '<a class="cart__link cart__link--details" href="' + goods[key].link + '" target="_blank">Узнать больше</a>';
                    details += '</div>';
                    details += '<div class="cart__value-wrap">';
                    details += '<ul class="cart__value-list">';
                    details += '<li class="cart__value-item">';
                    details += '<button class="cart__value-button cart__button-minus" data-articul="' + key + '">-</button>';
                    details += '</li>';
                    details += '<li class="cart__value-item">';
                    details += cart[key];
                    details += '</li>';
                    details += '<li class="cart__value-item">';
                    details += '<button class="cart__value-button cart__button-plus" data-articul="' + key + '">+</button>';
                    details += '</li>';
                    details += '</ul>';
                    details += '<button class="cart__button-delete" data-articul="' + key + '">Удалить</button>';
                    details += '</div>';
                    details += '</li>';
                }
            }

            for (var key in cart) {
                if (key == 's1' || key == 's2' || key == 's3' || key == 's4' || key == 's5' || key == 's6' || key == 's7' || key == 's8' || key == 's9' || key == 's10' || key == 's11' || key == 's12') {
                    services += '<li class="cart__item cart__item--services">';
                    services += '<div class="cart__img-wrap cart__img-wrap--services">';
                    services += '<picture class="cart__img cart__img--services">';
                    services += '<source class="cart__img cart__img--services" media="(max-width: 480px)" srcset="'+ goods[key].imageMobile +'">';
                    services += '<img class="cart__img cart__img--services" src="' + goods[key].image + '" >';
                    services += '</picture>';
                    services += '</div>';
                    services += '<div class="cart__description-wrap cart__description-wrap--services">';
                    services += '<p class="cart__title">' + goods[key].name + '</p>';
                    services += '<div class="cart__price-wrap">';
                    services += '<p class="cart__price">' + goods[key].cost + '</p>';
                    services += '<button class="cart__button-delete cart__button-delete--services" data-articul="' + key + '">Удалить</button>';
                    services += '</div>';
                    services += '</div>';
                    services += '</li>';
                }
            }

            for (var key in cart) {
                val += cart[key];
            }

            
            for (var key in cart) {
               if ( key == 't2' || key== 't3' || key=='t4' ) {

                    $('.cart__paragraph').addClass('cart__paragraph--active');
                    $('.cart__details-list1').addClass('cart__details-list--active');
                    $('.cart__details-list2').removeClass('cart__details-list--active');
                    $('.cart__details-list3').removeClass('cart__details-list--active');

               } 

               else if (key=='t5' || key=='t6') {
    
                    $('.cart__paragraph').addClass('cart__paragraph--active');
                    $('.cart__details-list1').removeClass('cart__details-list--active');
                    $('.cart__details-list2').addClass('cart__details-list--active');
                    $('.cart__details-list3').removeClass('cart__details-list--active');

               }

               else if (( key == 't2' || key== 't3' || key=='t4' ) && (key=='t5' || key=='t6')) {
    
                $('.cart__paragraph').addClass('cart__paragraph--active');
                $('.cart__details-list1').removeClass('cart__details-list--active');
                $('.cart__details-list2').removeClass('cart__details-list--active');
                $('.cart__details-list3').addClass('cart__details-list--active');

              }

              //  else {

              //       $('.details-wrap').hide();

              //  }

              

            }

            $('.cart__list--technics').html(technics);
            $('.cart__list--details').html(details);
            $('.cart__list--services').html(services);
            $('.header__cart-quantity').html(val);
            $('.cart__goods-value').html(val);
            $('.cart__button-plus').on('click', plusGoods);
            $('.cart__button-minus').on('click', minusGoods);
            $('.cart__button-delete').on('click', deleteGoods);
            $('button.button-to-cart').on('click', addToCart);
            

            if (val >= 10) {
                $('.header__cart-quantity').addClass('header__cart-quantity--more');
              } else $('.header__cart-quantity').removeClass('header__cart-quantity--more');

            if (val > 0) {
              $('.header__cart').addClass('header__cart--active');
            }

            if (val == 0) {
                $('.header__cart').removeClass('header__cart--active');
                $('.cart__goods-title').html('Корзина пуста. Выберите <a class="cart__link cart__link--header" href="technics.html">технику</a>');
                $('.cart__paragraph').hide();
                $('.form-cart').hide();
                $('.cart__details-list').hide();
                $('.footer').addClass('cart__footer');
              }

                        
            $('.datepicker-here').datepicker({
                // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
                minDate: new Date(),
                prevHtml: '<img src="icon/arrow-left.svg">',
                nextHtml: '<img src="icon/arrow-right.svg">'
            }).datepicker("setDate", new Date());

            

            function declOfNum(n, text_forms) {  
                n = Math.abs(n) % 100; var n1 = n % 10;
                if (n > 10 && n < 20) { return text_forms[2]; }
                if (n1 > 1 && n1 < 5) { return text_forms[1]; }
                if (n1 == 1) { return text_forms[0]; }
                return text_forms[2];
            }
            
            $('.goods-value').html(declOfNum(val, ['товар', 'товара', 'товаров']));
            $('.paragraph--word1').html(declOfNum(val, ['этим', 'этими', 'этими']));
            $('.paragraph--word2').html(declOfNum(val, ['товаром', 'товарами', 'товарами']));

            $('.form-cart__button-minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                if ($input.val() < 23) {
                    $('.form-cart__button-plus').attr('disabled', false);
                } 
                if ($input.val() <= 6) {
                    $('.form-cart__button-minus').attr('disabled', true);
                } 
                return false;
            });

            $('.form-cart__button-plus').click(function () {
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                // return false;
                if ($input.val() >= 23) {
                    $('.form-cart__button-plus').attr('disabled', true);
                } 

                if ($input.val() > 6) {
                    $('.form-cart__button-minus').attr('disabled', false);
                }

                return false;
            });

            $(function(){
                $(".form__input--phone").mask("+375 (99) 999-99-99");
            });

            $(".form-cart").validate({
                rules: {
                  name: {
                    required: true,
                    minlength: 2
                  },
                  phone: "required",
                  date_begin: "required",
                  phone: "required",
                  message: {
                    required: true,
                    minlength: 10
                  },
                  email: {
                    required: true,
                    email: true
                  },
                  organization: {
                      required: false
                  }
                },
          
                messages: {
                  name: "Введите имя",
                  phone: "Ведите номер телефона",
                  date_begin: "Выберите дату",
                  email: {
                    required: "Пожалуйста, введите e-mail",
                    email: "E-mail введен некорректно"
                  }
                }
            });

            $('.cart__details-list').slick({
                slidesToShow: 3,
                accessibility: false,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"></button>',
                nextArrow: '<button type="button" class="slick-next"></button>',
                responsive: [
                  {
                    breakpoint: 1080,
                    settings: {
                      slidesToShow: 3
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      arrows: false,
                      centerMode: true
                    }
                  }
                  // You can unslick at a given breakpoint now by adding:
                  // settings: "unslick"
                  // instead of a settings object
                ]
                
              });

              $('.form-cart__date--end').on('keyup',function(){
                var $this = $(this),
                    val = $this.val();
                
                if(val.length > 0){
                  $('.form-cart__hour-container').addClass('form-cart__hour-container--none');
                }else {
                  $('.form-cart__hour-container').removeClass('form-cart__hour-container--none');
                }
              });

              
            
    }

    function plusGoods() {
        var articul = $(this).attr('data-articul');
        cart[articul]++;
        saveCartToLS(); //сохраняю корзину в localStorage
        showCart();
    }

    function minusGoods() {
        var articul = $(this).attr('data-articul');
        if (cart[articul] > 1) {
            cart[articul]--;
        }
        else {
            delete cart[articul];
        }
        saveCartToLS();//сохраняю корзину в localStorage
        showCart();
    }  

    function deleteGoods() {
        var articul = $(this).attr('data-articul');
        delete cart[articul];
        saveCartToLS();//сохраняю корзину в localStorage
        showCart();
    }

    function addToCart() {
        //добавляем товар в корзину
        var articul = $(this).attr('data-articul');
        // if (cart[articul]!=undefined) {
        //     cart[articul]++;
        // }
        // else {
            cart[articul] = 1;
        // }
        saveCartToLS();
        // localStorage.setItem('cart', JSON.stringify(cart) );
        //console.log(cart);
        showCart();
    }

});


    function checkCart() {
        //проверяю наличие корзины в localStorage;
        if (localStorage.getItem('cart') != null) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
    }

    function saveCartToLS() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    $(window).on('load', function () {
        $('body').addClass('loaded_hiding');
        window.setTimeout(function () {
          $('body').addClass('loaded');
          $('body').removeClass('loaded_hiding');
        }, 400);
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