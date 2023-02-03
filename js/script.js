document.addEventListener('DOMContentLoaded', function () {

  /* DROPDOWN */

  const dropdownList = document.querySelectorAll('.hero__item-name');

  dropdownList.forEach(dropdownItem => {
    dropdownItem.addEventListener('click', event => {
      dropdownItem.nextElementSibling.classList.toggle('active');
      dropdownItem.lastElementChild.lastElementChild.classList.toggle('active');
    });

    window.addEventListener('click', event => {
      if (!dropdownItem.parentElement.contains(event.target)) {
        dropdownItem.nextElementSibling.classList.remove('active');
        dropdownItem.lastElementChild.lastElementChild.classList.remove('active');
      };
    });
  });


  /* SIMPLEBAR */

  new SimpleBar(document.querySelector('.hero__dropdown-list'), {
    autohide: false,
  });


  /* FILTER */

  const element = document.querySelector('#galleryFilter');

  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
    allowHTML: true,
  });


  /* MODAL */

  const arts = document.querySelectorAll('.gallery__item');
  const modals = document.querySelector('.modal__overlay');
  const modalList = document.querySelectorAll('.modal__item');
  const closeButton = document.querySelectorAll('.modal__close');

  arts.forEach((el) => {
    el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');

      modalList.forEach((el) => {
        el.classList.remove('modal--visible');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
      modals.classList.add('modal__overlay--visible');

      document.body.style.overflow = 'hidden';
    });
  });

  closeButton.forEach((el) => {
    el.addEventListener('click', (e) => {
      modalList.forEach((elem) => {
        elem.classList.remove('modal--visible');
      });
      modals.classList.remove('modal__overlay--visible');

      document.body.style.overflow = 'auto';
    });
  });

  arts.forEach((el) => {
    el.addEventListener('keydown', (e) => {
      if (e.code == 'Enter') {
        let path = e.currentTarget.getAttribute('data-path');

        modalList.forEach((el) => {
          el.classList.remove('modal--visible');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modals.classList.add('modal__overlay--visible');
      }
    });
    closeButton.forEach((elem) => {
      elem.focus();
    });
  });

  // function modalTab () {
  //   closeButton.forEach((el) => {
  //     el.focus();
  //   });
  // }

  // modalTab();

  // document.addEventListener('keydown', (e) => {
  //   if (e.code == 'Backspace') {
  //     modalList.forEach((el) => {
  //       el.classList.remove('modal--visible');
  //     });
  //     modals.classList.remove('modal__overlay--visible');
  //   }
  // });


  /* CAROUSEL */



  const heroSwiper = new Swiper('.hero__swiper', {

    centeredSlides: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },

  });

  /* -------------------------------------------- */

  const gallerySwiper = new Swiper('.gallery-swiper', {

    navigation: {
      nextEl: '.gallery__swipe-right',
      prevEl: '.gallery__swipe-left',
    },
    pagination: {
      el: '.gallery-swiper-pagination',
      type: 'fraction',
    },
    keyboard: {
      enabled: true,
    },
    slidesPerView: 1,
    breakpoints: {
      700: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    },

  });

  /* -------------------------------------------- */

  const eventSwiper = new Swiper('.event__swiper', {

    navigation: {
      nextEl: '.event__swipe-right',
      prevEl: '.event__swipe-left',
    },
    pagination: {
      el: ".event-swiper-pagination",
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      740: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    },

  });

  /* -------------------------------------------- */

  const projectSwiper = new Swiper('.projects__list-wrapper', {

    navigation: {
      nextEl: '.projects__partners-swipe-right',
      prevEl: '.projects__partners-swipe-left',
    },
    keyboard: {
      enabled: true,
    },
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    breakpoints: {
      700: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    },

  });

  /* ACCORDION */

  new Accordion(".cat__list");


  /* TABS */

  function setTabs(dataPath, dataTarget) {
    const btns = document.querySelectorAll(`.cat__btn-tab[${dataPath}]`);
    const contents = document.querySelectorAll(`.cat__tab[${dataTarget}]`);

    btns.forEach((btn) => {
      btn.addEventListener('click', function (evt) {
        const path = this.getAttribute(dataPath);
        // console.log(path);
        const target = document.querySelector(`.cat__tab[${dataTarget}="${path}"]`);


        btns.forEach((currentBtn) => {
          currentBtn.classList.remove('is-active');
        });

        this.classList.add('is-active');

        contents.forEach((content) => {
          content.classList.remove('is-active');
          content.classList.remove('default');
        });

        target.classList.add('is-active');
      });
    });
  }

  setTabs('data-artist-path', 'data-artist-target');


  /* VALIDATION */

  new JustValidate('#form', {

    colorWrong: '#D11616',
    position: 'top',
    rules: {
      name: {
        required: true,
      },
      phone: {
        required: true,
      },
    },
    messages: {
      name: {
        required: 'Как вас зовут?'
      },
      phone: {
        required: 'Укажите ваш телефон'
      },
    }
  })


  /* MASK */

  var selector = document.querySelectorAll("input[type='tel']");

  var im = new Inputmask("+7(999) 999-99-99");
  im.mask(selector);


  /* MAP */

  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.75816557717227, 37.59687743184652],
      zoom: 14
    });

    var myGeoObject = new ymaps.Placemark([55.75816557717227, 37.59687743184652], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/point.svg',
      iconImageSize: [20, 20],
    });

    myMap.geoObjects.add(myGeoObject);
  };

  /* OTHER */

  function changeFormButtonText() {
    const formButton = document.querySelector('.connect__form-button');
    if (window.innerWidth < 560) {
      formButton.textContent = "Заказать";
    } else {
      formButton.textContent = "Заказать обратный звонок";
    }
  }
  changeFormButtonText();


  window.addEventListener('resize', () => {
    changeFormButtonText();
  })

  /* ----------------------------------------------------------------- */

  const burgerButton = document.querySelector('.header__burger');
  const burgerMenu = document.querySelector('.header__menu');
  burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');
    burgerButton.classList.toggle('open');

    window.addEventListener('resize', () => {
      burgerMenu.classList.remove('open');
    })

    if (burgerMenu.classList.contains('open')) {
      document.body.style.overflowY = 'hidden';
      searchButton.style.marginRight = '25px';
    } else {
      document.body.style.overflowY = 'auto';
      searchButton.style.marginRight = '0';
    }
  })

  /* ----------------------------------------------------------------- */

  const searchButton = document.querySelector('.header__search-mobile');
  const closeSearch = document.querySelector('.header__close-search');
  const searchField = document.querySelector('.header__search-open');
  const searchIcon = document.querySelector('.header__search-mobile');
  const logoIcon = document.querySelector('.header__logo');

  function closeSearchFunc() {
    searchField.classList.remove('open');
    searchIcon.classList.remove('open');
    logoIcon.classList.remove('open');

    closeSearch.tabIndex = '-1';
    searchField.tabIndex = '-1';
  }

  searchButton.addEventListener('click', () => {
    searchField.classList.add('open');
    searchIcon.classList.add('open');

    if (window.innerWidth < 950) {
      logoIcon.classList.add('open');
    }

    closeSearch.tabIndex = '0';
    searchField.tabIndex = '0';
  })
  closeSearch.addEventListener('click', () => {
    closeSearchFunc();
  })
  window.addEventListener('resize', () => {
    closeSearchFunc();
  })

});