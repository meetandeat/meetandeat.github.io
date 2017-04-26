$(document).foundation();

/* Scrolling-Helpers */
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.toTop').addClass("show");
  } else {
    $('.toTop').removeClass("show");
  }
});

$(".toTop, .navi-toTop").on("click", function () {
  var body = $("html, body");
  body.animate({scrollTop: 0}, 1300, 'easeInOutCubic', function () {});
});

$(".top-bar a").on("click", function (e) {
  e.preventDefault();

  var href = $(this).attr("href");
  console.log(href);
  if (href.length > 0) {
    var body = $("html, body");
    var position = $(href).offset().top - 45;
    body.animate({scrollTop: position}, 1700, 'easeInOutCubic', function () {});
  }

});

$(".read-more").on("click", function () {
  $(".more-text").slideDown("slow");
  $(".read-more").toggleClass("hide");
  $(".read-less").toggleClass("hide");
});

$(".read-less").on("click", function () {
  $(".more-text").slideUp("slow");
  $(".read-more").toggleClass("hide");
  $(".read-less").toggleClass("hide");
});

$('#map')
    .click(function() {
      $(this).find('iframe').addClass('clicked')
    })
    .mouseleave(function() {
      $(this).find('iframe').removeClass('clicked')
    });