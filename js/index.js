/**** selected elements *****/
let $navIcon = document.querySelector(".nav_icon");
let $mobileUl = document.querySelector(".mobile_ul");
let $enum = document.querySelectorAll(".top"); /**all evaluation number**/
let $stars = document.querySelectorAll(".stars"); /**all stars's div**/
let $scrollForward = document.querySelector(".scroll .forward");
let $scrollBackward = document.querySelector(".scroll .backward");
let $slider = document.querySelector(".slider");

/************************** */

/****** options*************/
let sliderindex = 0;

/*************************/

evaluation(); /** light stars based on evaluation */

scroll(); /**hero slider scrolling */

//for navbar in mobile
$navIcon.addEventListener("click", function () {
  $navIcon.children[0].classList.toggle("active");
  $navIcon.children[1].classList.toggle("active");
  $mobileUl.classList.toggle("active");
});

/******* functions *******/

function evaluation() {
  $enum.forEach((e, index) => {
    let num;
    if (e.textContent > 5) {
      num = 5;
    } else if (e.textContent < 0) {
      num = 0;
    } else {
      num = e.textContent;
    }
    for (let i = 0; i < num; i++) {
      $stars[index].children[i].classList.add("active");
    }
  });
}

function scroll() {
  if ($scrollBackward !== null && $scrollForward !== null) {
    $scrollForward.addEventListener("click", function () {
      //check for length of slider
      if (sliderindex >= $slider.children.length - 1) {
        sliderindex = -1;
      }
      sliderindex++;
      $slider.style.right = sliderindex * 100 + "%";
    });
    $scrollBackward.addEventListener("click", function () {
      //check for length of slider
      if (sliderindex <= 0) {
        sliderindex = $slider.children.length;
      }
      sliderindex--;
      $slider.style.right = sliderindex * 100 + "%";
    });
  }
}
