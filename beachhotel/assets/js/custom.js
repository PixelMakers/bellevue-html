// rooms & suites slider //
$(".slick-rooms-slider").slick({
    infinite: true,
    centerMode: true,
    arrows: false,
    pauseOnHover: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 995,
            settings: {
                centerMode: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

