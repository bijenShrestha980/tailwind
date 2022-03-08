!(function () {
  "use strict";
  $("#mobile-menu-toggler").on("click", function () {
    null !== $(".mobile-menu").find("ul").first()[0].offsetParent
      ? $(".mobile-menu").find("ul").first().slideUp()
      : $(".mobile-menu").find("ul").first().slideDown();
  }),
    $(".mobile-menu")
      .find(".menu")
      .on("click", function () {
        $(this).parent().find("ul").length &&
          (null !== $(this).parent().find("ul").first()[0].offsetParent
            ? ($(this)
                .find(".menu__sub-icon")
                .removeClass("transform rotate-180"),
              $(this)
                .parent()
                .find("ul")
                .first()
                .slideUp(300, function () {
                  $(this).removeClass("menu__sub-open");
                }))
            : ($(this).find(".menu__sub-icon").addClass("transform rotate-180"),
              $(this)
                .parent()
                .find("ul")
                .first()
                .slideDown(300, function () {
                  $(this).addClass("menu__sub-open");
                })));
      });
})();
