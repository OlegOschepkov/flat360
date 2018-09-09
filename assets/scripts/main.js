/* eslint-disable */

const btnHeader = document.querySelector(".js-toggle_header-menu");
const btnSubmit = document.querySelector(".js-toggle_submit");
const btnClose = document.querySelector(".js-close");
const headerMenu = document.querySelector(".header-menu");
const thanksMenu = document.querySelector(".thanks");
// const jsSlider2 = document.querySelectorAll(".js-slider2");
// const jsSlider1Arr = Array.from(jsSlider1);
// const jsSlider2Arr = Array.from(jsSlider2);
// const elementTexts = document.querySelectorAll(".advantages-list__item-text");

// function slider(jsSliderArr) {
//   jsSliderArr[0].classList.add("active");
//   jsSliderArr.forEach(function(element) {
//     element.addEventListener("click", function() {
//       jsSliderArr.forEach(function(elem) {
//         elem.classList.remove("active");
//       });
//       element.classList.add("active");
//     });
//   });
// }

// slider(jsSlider1Arr);
// slider(jsSlider2Arr);

// function getParentByTag(elem, tag) {
//   tag = tag.toUpperCase();
//   while ((elem = elem.parentNode)) if (elem.tagName === tag) return elem;
// }

btnHeader.addEventListener("click", function() {
  if (headerMenu.classList.contains("visually-hidden")) {
    headerMenu.classList.remove("visually-hidden");
    btnHeader.classList.add("is-active");
    btnHeader.classList.remove("unfreeze");
    btnHeader.classList.add("freeze");
  } else if (!headerMenu.classList.contains("visually-hidden")) {
    headerMenu.classList.add("visually-hidden");
    btnHeader.classList.remove("is-active");
    btnHeader.classList.remove("freeze");
    btnHeader.classList.add("unfreeze");
  }
});

btnSubmit.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (thanksMenu.classList.contains("visually-hidden")) {
    thanksMenu.classList.remove("visually-hidden");
    btnSubmit.classList.remove("unfreeze");
    btnSubmit.classList.add("freeze");
  }
});

btnClose.addEventListener("click", function() {
  if (!thanksMenu.classList.contains("visually-hidden")) {
    thanksMenu.classList.add("visually-hidden");
    btnSubmit.classList.remove("freeze");
    btnSubmit.classList.add("unfreeze");
  }
});

$(document).on("click", ".js-dropdown", function() {
  $(this).toggleClass("is-active");
  $(this)
    .find(".js-dropdown-list")
    .slideToggle();
});

/* eslint-enable */
