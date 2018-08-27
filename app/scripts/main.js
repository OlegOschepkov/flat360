/* eslint-disable */

(function() {
  ("use strict");

  const btn = document.querySelector(".js-toggle_header-menu");
  const headerMenu = document.querySelector(".header-menu");

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
