const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  // 자동 재생
  autoplay: {
    delay: 1000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});
