import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// 新增swiper
var headerswiper = new Swiper(".headerSwiper", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      lazy: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    },
});

    var indexswiper = new Swiper(".indexSwiper", {
      slidesPerView: "auto",
      lazy: true,
      freeMode: true,
      spaceBetween: 12,
      breakpoints: {
        768: {
          spaceBetween: 24,
        },
      },
    });




// ------- 影片播放控制 -------
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('eventVideo');
  const btn   = document.querySelector('.play-toggle-ghost');

  if (!video || !btn) return; // 安全檢查：避免頁面沒有影片區塊時噴錯

  // 點播放鈕：播放 + 顯示控制列（第一次點才加）+ 隱藏按鈕
  btn.addEventListener('click', () => {
    if (!video.hasAttribute('controls')) video.setAttribute('controls', '');
    video.play().catch(console.error);
  });

  // 視訊開始播放時把按鈕收起來
  video.addEventListener('play', () => btn.classList.add('is-hidden'));

  // 暫停或播畢時，把按鈕顯示回來（播畢也回到 0 秒）
  video.addEventListener('pause', () => btn.classList.remove('is-hidden'));
  video.addEventListener('ended', () => {
    video.currentTime = 0;
    btn.classList.remove('is-hidden');
  });

  // 可選：點影片本身也能切換播放/暫停
  video.addEventListener('click', () => {
    if (video.paused) video.play(); else video.pause();
  });
});


// 手機：評價滑動（卡片寬固定 636px）
var reviewsSwiper = new Swiper(".reviewsSwiper", {
  slidesPerView: "auto",   // 讓每張照 636px 寬排列
  freeMode: true,
  grabCursor: true,
  spaceBetween: 12,        // 卡片與卡片間距
  breakpoints: {
    576: { spaceBetween: 16 },
    768: { spaceBetween: 20 }
  }
  // 如果要分頁圓點：取消註解
  // ,pagination: { el: ".reviewsSwiper .swiper-pagination", clickable: true }
});
