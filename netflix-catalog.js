var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 5,
    slidesPerGroup: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
          slidesPerGroup: 3,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
          slidesPerGroup: 2,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
          slidesPerGroup: 4,
        },
        200: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
          },
      }
  });
