function myFunction(x) {
  x.classList.toggle("change");
}

$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: false,
    waitForAnimate: false,
    centerMode: false,
    variableWidth: false,
    rows: 1,
    slidesPerRow: 1, 
    vertical: false,
    verticalSwiping: false,
    responsive:[
      {
        breakpoint: 1200,
        settings: {
          slidesToShow:2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow:1
        }
      }
    ]
  });
});

