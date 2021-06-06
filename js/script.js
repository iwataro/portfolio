$(function(){

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



// 100vh修正
  const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  // 画面のサイズ変動があった時に高さを再計算する
  window.addEventListener('resize', setFillHeight);
  
  // 初期化
  setFillHeight();

});


AOS.init({
    duration: 1000,
    easing: 'ease',
});