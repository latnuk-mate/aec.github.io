
window.addEventListener('load', () => {
    const clientSlide2 = new Swiper('.swiper-client-2', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        speed: 6000,
        autoplay: {
          delay: 0,
          disableOnInteraction: true,
          reverseDirection: true,
        },
        allowTouchMove: true,
      });

    const clientSlide1 = new Swiper('.swiper-client-1', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        speed: 6000,
        autoplay: {
          delay: 10,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        },
        allowTouchMove: true,
      });


     const imgSwiper = new Swiper('.swiper-img', {
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        slidesPerView: 1.5,
        spaceBetween: -100,
        centeredSlides: true,
      });

    new Swiper('.common--img--slider', {
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        slidesPerView: 1.5,
        spaceBetween: -100,
        centeredSlides: true,
      });

      new Swiper('.service--swiper', {
        spaceBetween: 30,
        loop: true,
        speed: 4000,
        autoplay: {
          delay: 10,
          disableOnInteraction: true,
          pauseOnMouseEnter: false,
        },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
        allowTouchMove: true,
        navigation: {
        prevEl: ".swiper-button-prev",  
        nextEl: ".swiper-button-next",
      },
      });
})



function gMapCall() {
var props= {
  center:new google.maps.LatLng(20.308439987847567, 85.8862821261613),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("gMap"), props);

}


// page navigation script...

const navEl = document.querySelector('.custom--nav');
console.log(navEl);


window.addEventListener('scroll', function() {
  if (window.scrollY >= 20) {
     navEl.classList.add('custom-bg-styles');
  }else{
    navEl.classList.remove('custom-bg-styles');
  }
});




