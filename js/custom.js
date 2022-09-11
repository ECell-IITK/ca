function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const counter = document.querySelectorAll(".counter");
let flag = 0;
document.addEventListener("scroll", function () {
  if (!flag && isInViewport(counter[0])) {
    flag = 1;
    let counts = setInterval(updated);
    let upto = 0;
    function updated() {
      for (e of counter) {
        e.innerHTML = upto + "+";
        if (upto === 1000) {
          clearInterval(counts);
        }
      }
      upto += 2;
    }
  }
});

(function ($) {
  // Init Wow
  wow = new WOW({
    animateClass: "animated",
    offset: 100,
  });
  wow.init();

  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse.collapse").removeClass("in");
  });

  // Navigation scrolls
  $(".navbar-nav li a").bind("click", function (event) {
    $(".navbar-nav li").removeClass("active");
    $(this).closest("li").addClass("active");
    var $anchor = $(this);
    var nav = $($anchor.attr("href"));
    if (nav.length) {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top,
          },
          1500,
          "easeInOutExpo"
        );

      event.preventDefault();
    }
  });

  // About section scroll
  $(".overlay-detail a").on("click", function (event) {
    event.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      900,
      function () {
        window.location.hash = hash;
      }
    );
  });

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function () {
    if ($(".navbar-default").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  // Testimonials Slider
  $(".bxslider").bxSlider({
    adaptiveHeight: true,
    mode: "fade",
  });
})(jQuery);
