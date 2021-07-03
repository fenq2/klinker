const infoblockSlider = new Swiper(".infoblock__slider", {
    navigation: {
      nextEl: ".infoblock__next-btn",
      prevEl: ".infoblock__prev-btn",
    },
 });

const yandexSlider = new Swiper(".yandex-review__slider", {
    slidesPerView: "auto",
    spaceBetween: 93,
     navigation: {
       nextEl: ".yandex-review__next",
       prevEl: ".yandex-review__prev",
     },
  });

var swiper = new Swiper(".card-slider__thumb", {
    spaceBetween: 10,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
});

var swiper2 = new Swiper(".card-slider__main", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".card-slider__next",
      prevEl: ".card-slider__prev",
    },
    thumbs: {
      swiper: swiper,
    },
});

const tab = function () {
    let tabNav = document.querySelectorAll('.tabs__list-item'), // Выбираем элементы навигации табов
        tabContent = document.querySelectorAll('.tabs__content-item'), // Выбираем самы табы
        tabName; // Переменная для имени таба

    // Проходим циклом по каждому элементу навигации и навешиваем обработчик клика, который вызывает функцию selectTabNav
    tabNav.forEach((item) => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach((item) => {
            // Удаляем активный класс у всех элементов навигации табов
            item.classList.remove('tabs__list-item--active');
        });
        this.classList.add('tabs__list-item--active');  // Добавляем активный укласс у элемента по которому кликнули
        tabName = this.getAttribute('data-tab-name'); // Получаем имя таба, который нам нужен
        selectTabContent(tabName); // Запускаем функцию, чтобы показать выбранный таб
    }

    function selectTabContent(tab) {
        // Проходим по всем табам и проверяем есть ли у элемента класс, равный имени таба(переменной tabName). Если есть, то добавляем класс активного таба, если нет, то удаляем этот класс
        tabContent.forEach((item) => {
            let classList = item.classList;
            classList.contains(tab) ? classList.add('tabs__content-item--active') : classList.remove('tabs__content-item--active');
        });
    }
};

const toggleCatalogMenu = function () {
    let catalogLinks = document.querySelectorAll('.catalog-menu__list-item');

    catalogLinks.forEach(el => {
        el.addEventListener('mouseover', (e) => {
            catalogLinks.forEach(item => {
                item.classList.remove('catalog-menu__list-item--active');
            });
            if(!(e.target.classList.contains('catalog-menu__list-item'))) {
                e.target.closest('.catalog-menu__list-item').classList.add('catalog-menu__list-item--active');
            } else {
                e.target.classList.add('catalog-menu__list-item--active');
            }
        })
    })
};

tab();
toggleCatalogMenu();
