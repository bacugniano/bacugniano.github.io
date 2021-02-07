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
            for (var key in cart) {
                if (key == 't1' || key == 't2' || key == 't3' || key == 't4' || key == 't5' || key == 't6') {
                    technics += '<li class="cart__item">';
                    technics += '<div class="cart__img-wrap">';
                    technics += '<img class="cart__img" src="' + goods[key].image + '" >';
                    technics += '</div>';
                    technics += '<div class="cart__description-wrap">';
                    technics += '<p class="cart__subtitle">' + goods[key].description + '</p>';
                    technics += '<p class="cart__title">' + goods[key].name + '</p>';
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
                    details += '<div class="cart__img-wrap">';
                    details += '<img class="cart__img" src="' + goods[key].image + '" >';
                    details += '</div>';
                    details += '<div class="cart__description-wrap">';
                    details += '<p class="cart__subtitle">' + goods[key].description + '</p>';
                    details += '<p class="cart__title">' + goods[key].name + '</p>';
                    details += '<p class="cart__price">' + goods[key].cost + '</p>';
                    details += '<a class="cart__link" href="' + goods[key].link + '" target="_blank">Узнать больше</a>';
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
                    services += '<img class="cart__img cart__img--services" src="' + goods[key].image + '" >';
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

            $('.cart__list--technics').html(technics);
            $('.cart__list--details').html(details);
            $('.cart__list--services').html(services);
            $('.header__cart-quantity').html(val);
            $('.cart__goods-value').html(val);
            $('.cart__button-plus').on('click', plusGoods);
            $('.cart__button-minus').on('click', minusGoods);
            $('.cart__button-delete').on('click', deleteGoods);
            

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