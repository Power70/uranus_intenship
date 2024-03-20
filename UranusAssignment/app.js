document.addEventListener("DOMContentLoaded", function () {
  var imagePaths = [
    "./images/Untitled (1).png",
    "./images/Untitled (2).png",
    "./images/Untitled (3).png",
    "./images/Untitled (4).png",
    "./images/Untitled (5).png",
    "./images/Untitled (6).png",
  ];
  var imgElement = document.getElementById("uranus-image");

  function changeImage() {
    var randomIndex = Math.floor(Math.random() * imagePaths.length);
    imgElement.src = imagePaths[randomIndex];
  }
  changeImage();

  setInterval(changeImage, 5000);
});

const bar = document.querySelector(".fas.fa-bars");
const navbar = document.querySelector(".navbar");

bar.addEventListener("click", () => {
  navbar.classList.toggle("show-navbar");
  navbar.classList.toggle("navbar");
});
