$('.autoplay').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                centerMode: true,
                focusOnSelect: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerMode: true,
                focusOnSelect: true,
                dots: false,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1.2,
                centerMode: true,
                focusOnSelect: true
            }
        }
    ]
});


document.getElementById("bio-card").style.display = "none";
function myFunction() {
    document.getElementById("bio-card").style.display = "block";
}

document.getElementById("bio-card-2").style.display = "none";
function myFunction2() {
    document.getElementById("bio-card-2").style.display = "block";
}

document.getElementById("bio-card-3").style.display = "none";
function myFunction3() {
    document.getElementById("bio-card-3").style.display = "block";
}


$('.sec-4-slider').slick({
    dots: false,
    infinite: true,
    prevArrow: ".leftArrow",
    nextArrow: ".rightArrow",
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});



// // // accordian code
const accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach(button => {
    button.addEventListener('click', function () {
        const activeAccordionItem = document.querySelector('.accordion-item.active');
        const accordionItem = this.closest('.accordion-item');
        accordionItem.classList.toggle('active') && activeAccordionItem.classList.remove("active")
    });
});