$(function () {
  $('.banner-carrosel').slick({
    dots: true
  });
});

$(function () {
  $('.slider-produtos').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });
});