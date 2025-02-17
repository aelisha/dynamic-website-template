function menu() {
  document.addEventListener("DOMContentLoaded", function () {
    const menuTrigger = document.querySelector(".menu-trigger");
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menu li a");

    menuTrigger.addEventListener("click", function () {
      menu.classList.toggle("open");
    });

    menuItems.forEach(function (item) {
      item.addEventListener("click", function () {
        menu.classList.remove("open");
      });
    });
  });
}
menu();

$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 2000,
        settings: "unslick",
      },
      {
        breakpoint: 600,
        settings: "unslick",
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });

  $(".slick-img").slick({
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
  $(".right-content ul").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: "unslick",
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});
