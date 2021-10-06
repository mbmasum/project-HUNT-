$('.venobox').venobox(); 

$(".banner-slider").slick({
    fade: true,
    autoplay: true,
    prevArrow: '<i class="fas fa-arrow-circle-left prev"></i>',
    nextArrow: '<i class="fas fa-arrow-circle-right next"></i>',
})

$(".service-slider").slick({
    vertical: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
    prevArrow: '<i class="fas fa-chevron-up prev"></i>',
    nextArrow: '<i class="fas fa-chevron-down next"></i>',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
            autoplay: true,
            vertical: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            prevArrow: '<i class="fas fa-arrow-circle-left prev"></i>',
            nextArrow: '<i class="fas fa-arrow-circle-right next"></i>',
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            prevArrow: '<i class="fas fa-arrow-circle-left prev"></i>',
            nextArrow: '<i class="fas fa-arrow-circle-right next"></i>',
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})

$(".team-slider").slick({
    vertical: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
    prevArrow: '<i class="fas fa-chevron-up prev"></i>',
    nextArrow: '<i class="fas fa-chevron-down next"></i>',
    asNavFor: ".text-slider",
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            arrows: false,
            vertical: false,
            autoplay: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: false,
            arrows: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: false,
            prevArrow: '<i class="fas fa-arrow-circle-left prev"></i>',
            nextArrow: '<i class="fas fa-arrow-circle-right next"></i>',
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})

$(".text-slider").slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: ".team-slider",
})

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$(".market-slider").slick({
    slidesToShow: 5,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            autoplay:true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,

          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})
