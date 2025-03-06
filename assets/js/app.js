$('.autoplay').slick({
    // autoplay: true,
    autoplaySpeed: 900,
    slidesToShow: 3,
    arrows: false,
    dots: false,
    pauseOnMouseEnter: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 5
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});