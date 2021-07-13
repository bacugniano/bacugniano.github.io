$(document).ready(function(){
    $('.partners__slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      responsive: [
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 890,
          settings: {
            slidesToShow: 2
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
      
    });

    $('.features__list').slick({
      mobileFirst: true,
      arrows: false,
      centerMode: true,
      variableWidth: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        // {
        //   breakpoint: 360,
        //   settings: {
        //     slidesToShow: 1
        //   }
        // },   
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2
          } 
        },
        {
          breakpoint: 890,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1080,
          settings: "unslick"
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('.feedback__list').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      prevArrow: '<button type="button" class="feedback__slide-prev"></button>',
      nextArrow: '<button type="button" class="feedback__slide-next"></button>',
      responsive: [
        {
          breakpoint: 890,
          settings: {
            slidesToShow: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
      
    });

    
  });