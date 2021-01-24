//Табы в технике

$(document).ready(function(){

    $('ul.additional__tab-list').on('click', 'li:not(.additional__tab-item--active)', function() {
        $(this)
          .addClass('additional__tab-item--active').siblings().removeClass('additional__tab-item--active')
          .closest('section.additional').find('ul.additional__list').removeClass('additional__list--active').eq($(this).index()).addClass('additional__list--active');
      });

});

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
            item.classList.contains(tabName) ? item.classList.add('details--active') : item.classList.remove('details--active');
        })
    }

};


tab();