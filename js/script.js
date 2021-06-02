$(function(){
// AOS.js

// スワイパー
    var swiper = new Swiper('.swiper-container', {
          // ここからはオプションです。
        effect: 'coverflow',
        centeredSlides: true,


        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            reverseDirection: false,
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        breakpoints: {
            1: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
        },
        
    });

// スクロールヒント
window.addEventListener('DOMContentLoaded', function(){
    new ScrollHint('.js-scrollable');
  });
   
  new ScrollHint('.js-scrollable', {
    scrollHintIconAppendClass: 'scroll-hint-icon-white', // white-icon will appear
    i18n: {
      scrollable: 'スクロールできます'
    }
  });


});


