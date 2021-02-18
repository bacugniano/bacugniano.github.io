//Табы в навигации
let tab = function () {
    let tabNav = document.querySelectorAll('.tab-navigation__item'),
        tabContent = document.querySelectorAll('.details'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('tab-navigation__item--active');
        });
        this.classList.add('tab-navigation__item--active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('details--active', 'wow', 'animate__animated', 'animate__fadeIn') : item.classList.remove('details--active', 'wow', 'animate__animated', 'animate__fadeIn');
        })
    }

};

let tab2 = function () {
    let tabNav = document.querySelectorAll('.tab-navigation__item'),
        tabContent = document.querySelectorAll('.details'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('tab-navigation__item--active');
        });
        this.classList.add('tab-navigation__item--active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('details--active') : item.classList.remove('details--active');
        })
    }

};

$('document').ready(function(){

    if ($(window).width() < 361) {
        $('.details').removeClass('details--active');
        $('.additional__details-item--invisible').remove();
    }

    $(".tab-navigation__button").click(function () {
        $('.tab-navigation').addClass('tab-navigation--none');
    });

    $(".technics__back").click(function () {
        $('.tab-navigation').removeClass('tab-navigation--none');
        $('.details').removeClass('details--active');
    });

});



if ($(window).width() < 361) tab2();
else tab();