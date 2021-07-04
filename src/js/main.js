const infoblockSlider = new Swiper(".infoblock__slider", {
    slidesPerView: 3,
    spaceBetween: 15,
    navigation: {
      nextEl: ".infoblock__next-btn",
      prevEl: ".infoblock__prev-btn",
    },
    pagination: {
         el: ".infoblock__pagination",
    },
    breakpoints: {
      1000: {
        spaceBetween: 20,
      },
      680: {
        spaceBetween: 15,
      },
    }
 });

const yandexSlider = new Swiper(".yandex-review__slider", {
    slidesPerView: 1,
    spaceBetween: 93,
     navigation: {
       nextEl: ".yandex-review__next",
       prevEl: ".yandex-review__prev",
     },
     pagination: {
          el: ".yandex-review__pagination",
     },
     breakpoints: {
       1400: {
         spaceBetween: 93,
         slidesPerView: "auto",
       },
       680: {
         spaceBetween: 46,
         slidesPerView: 2,
       },
     }
  });

var swiper = new Swiper(".card-slider__thumb", {
    spaceBetween: 10,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        1600: {
          direction: 'vertical',
    }
  }
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

const searchHandler = function () {
    let searchBtn = document.querySelector('.js-search-open');
    let searchBlock = document.querySelector('.search-prev')

    searchBtn.addEventListener('click', () => {
        searchBlock.classList.toggle('search-prev--active');
    });
};

const sandwich = function () {
    let sandwichButton = document.querySelector('.sandwich__open-btn');
    let sandwichClose = document.querySelector('.sandwich__close-btn');
    let content = document.querySelector('.sandwich__content');

    sandwichButton.addEventListener('click', function () {
      content.classList.add('sandwich__content--opened');
      document.body.style.overflow = 'hidden';
    });

    sandwichClose.addEventListener('click', function () {
        content.classList.remove('sandwich__content--opened');
        document.body.style.overflow = 'visible';
    });
};


sandwich();
tab();
toggleCatalogMenu();
searchHandler();


(function () {
    'use strict';
    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia('(min-width:1000px)');
    // keep track of swiper instances to destroy later
    let mySwiper;
    const breakpointChecker = function () {
        // if larger viewport and multi-row layout needed
        if (breakpoint.matches === true) {
            // clean up old instances and inline styles when available
            if (mySwiper !== undefined) mySwiper.destroy(true, true);
            // or/and do nothing
            return;
            // else if a small viewport and single column layout needed
        } else if (breakpoint.matches === false) {
            // fire small viewport version of swiper
            return sliderInstagram();
        }
    };

    if (window.innerWidth <= 1000 && mySwiper) {
        mySwiper.destroy(false)
    }

    const sliderInstagram = function () {
        mySwiper = new Swiper('.similar-cards__list', {
            spaceBetween: 45,
            slidesPerView: 1,
            navigation: {
              nextEl: ".similar-cards__next",
              prevEl: ".similar-cards__prev",
            },
            pagination: {
                el: ".similar-cards__pagination"
            },
            breakpoints: {
              720: {
                  spaceBetween: 25,
                slidesPerView: 3,
              }
            }
        });
    };
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
    // kickstart
    breakpointChecker();
})();

(function () {
    'use strict';
    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia('(min-width:1000px)');
    // keep track of swiper instances to destroy later
    let mySwiper;
    const breakpointChecker = function () {
        // if larger viewport and multi-row layout needed
        if (breakpoint.matches === true) {
            // clean up old instances and inline styles when available
            if (mySwiper !== undefined) mySwiper.destroy(true, true);
            // or/and do nothing
            return;
            // else if a small viewport and single column layout needed
        } else if (breakpoint.matches === false) {
            // fire small viewport version of swiper
            return sliderInstagram();
        }
    };

    if (window.innerWidth <= 1000 && mySwiper) {
        mySwiper.destroy(false)
    }

    const sliderInstagram = function () {
        mySwiper = new Swiper('.past-cards__list', {
            spaceBetween: 45,
            slidesPerView: 1,
            navigation: {
              nextEl: ".past-cards__next",
              prevEl: ".past-cards__prev",
            },
            pagination: {
                el: ".past-cards__pagination"
            },
            breakpoints: {
              720: {
                  spaceBetween: 25,
                slidesPerView: 3,
              }
            }
        });
    };
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
    // kickstart
    breakpointChecker();
})();

(function () {
    'use strict';
    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia('(min-width:1000px)');
    // keep track of swiper instances to destroy later
    let mySwiper;
    const breakpointChecker = function () {
        // if larger viewport and multi-row layout needed
        if (breakpoint.matches === true) {
            // clean up old instances and inline styles when available
            if (mySwiper !== undefined) mySwiper.destroy(true, true);
            // or/and do nothing
            return;
            // else if a small viewport and single column layout needed
        } else if (breakpoint.matches === false) {
            // fire small viewport version of swiper
            return sliderInstagram();
        }
    };

    if (window.innerWidth <= 1000 && mySwiper) {
        mySwiper.destroy(false)
    }

    const sliderInstagram = function () {
        mySwiper = new Swiper('.with-cards__list', {
            spaceBetween: 45,
            slidesPerView: 1,
            navigation: {
              nextEl: ".with-cards__next",
              prevEl: ".with-cards__prev",
            },
            pagination: {
                el: ".with-cards__pagination"
            },
            breakpoints: {
              720: {
                  spaceBetween: 25,
                slidesPerView: 3,
              }
            }
        });
    };
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
    // kickstart
    breakpointChecker();
})();
