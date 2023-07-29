function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");

  const img = document.querySelector(".aura img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
  }
}

$(document).ready(function () {
  $(".tech-icons").slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});

function isMobileDevice() {
  return window.innerWidth < 769;
}

function setBodyBackground() {
  const body = document.querySelector("body");
  if (isMobileDevice()) {
    body.style.background = "var(--bg-url) no-repeat top center/cover";
  } else {
    body.style.background =
      "var(--bg-url-desktop) no-repeat center center/cover";
  }
}

document.addEventListener("DOMContentLoaded", setBodyBackground);
window.addEventListener("resize", setBodyBackground);
