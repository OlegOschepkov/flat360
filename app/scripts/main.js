/* eslint-disable */

(function() {
  "use strict";

  const btn = document.querySelector(".js-toggle_header-menu");
  const headerMenu = document.querySelector(".header-menu");

  btn.addEventListener("click", function() {
    if (headerMenu.classList.contains("visually-hidden")) {
      headerMenu.classList.remove("visually-hidden");
    } else if (!headerMenu.classList.contains("visually-hidden")) {
      headerMenu.classList.add("visually-hidden");
    }
  });
})();

/* eslint-enable */
