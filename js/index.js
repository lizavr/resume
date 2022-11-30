function myFunction() {
  var secondBlock = document.getElementById("secondBlockId");
  var arrow = document.getElementById("myBtn");

  if (secondBlock.style.display === "none") {
    secondBlock.style.display = "inline";
    arrow.style.transform = "rotate(-45deg)";
  } else {
    secondBlock.style.display = "none";
    arrow.style.transform = "rotate(135deg)";
  }
}

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
