$(".interfaceButton").click(function() {
  $(".portfolio-hiddenContent").toggle("slow", function() {
    $(".interfaceButton").toggleClass("interfaceButton--visible");
  });
});

$(".owl-carousel").owlCarousel({
  items: 1,
  nav: true,
  loop: true,
  autoplay: true,
  autoplayHoverPause: true,
  lazyLoad: false
});

$(".circlestat").circliful({
  foregroundColor: "#19bd9a",
  backgroundColor: "#047378",
  foregroundBorderWidth: 4,
  backgroundBorderWidth: 4,
  animation: 1
});
