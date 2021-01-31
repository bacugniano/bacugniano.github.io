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