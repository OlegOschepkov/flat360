/* eslint-disable */

(function() {
  ("use strict");

  const btn = document.querySelector(".js-toggle_header-menu");
  const headerMenu = document.querySelector(".header-menu");
  const jsSlider1 = document.querySelectorAll(".js-slider1");
  const jsSlider2 = document.querySelectorAll(".js-slider2");
  const jsSlider1Arr = Array.from(jsSlider1);
  const jsSlider2Arr = Array.from(jsSlider2);
  const elementTexts = document.querySelectorAll(".advantages-list__item-text");

  function slider(jsSliderArr) {
    jsSliderArr[0].classList.add("active");
    jsSliderArr.forEach(function(element) {
      element.addEventListener("click", function() {
        jsSliderArr.forEach(function(elem) {
          elem.classList.remove("active");
        });
        element.classList.add("active");
      });
    });
  }

  slider(jsSlider1Arr);
  slider(jsSlider2Arr);

  btn.addEventListener("click", function() {
    if (headerMenu.classList.contains("visually-hidden")) {
      headerMenu.classList.remove("visually-hidden");
      btn.classList.add("is-active");
      btn.classList.remove("unfreeze");
      btn.classList.add("freeze");
    } else if (!headerMenu.classList.contains("visually-hidden")) {
      headerMenu.classList.add("visually-hidden");
      btn.classList.remove("is-active");
      btn.classList.remove("freeze");
      btn.classList.add("unfreeze");
    }
  });

  $(document).on("click", ".js-dropdown", function() {
    $(this).toggleClass("is-active");
    $(this)
      .find(".js-dropdown-list")
      .slideToggle();
  });
})();

/* eslint-enable */
