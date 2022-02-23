// =============================sticky header Start Script====================
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 5) {
            document.querySelector('.thmv-top-nav').classList.add('fixed-top');
        } else {
            document.querySelector('.thmv-top-nav').classList.remove('fixed-top');
        }
    });
});
// =============================sticky header End Script====================


// ============================navigation menu============================= //
(function ($) {
    $.fn.menumaker = function (options) {
        var cssmenu = $(this),
            settings = $.extend({
                format: "dropdown",
                sticky: false
            }, options);
        return this.each(function () {
            $(this).find(".button").on('click', function () {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.slideToggle().removeClass('open');
                } else {
                    mainmenu.slideToggle().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').show();
                    }
                }
            });

            cssmenu.find('li ul').parent().addClass('has-sub');
            multiTg = function () {
                cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                cssmenu.find('.submenu-button').on('click', function () {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').slideToggle();
                    } else {
                        $(this).siblings('ul').addClass('open').slideToggle();
                    }
                });
            };

            if (settings.format === 'multitoggle') multiTg();
            else cssmenu.addClass('dropdown');
            if (settings.sticky === true) cssmenu.css('position', 'fixed');
            resizeFix = function () {
                var mediasize = 991;
                if ($(window).width() > mediasize) {
                    cssmenu.find(' ul').show();
                }
                if ($(window).width() <= mediasize) {
                    cssmenu.find(' ul').hide().removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);
        });
    };
})(jQuery);

(function ($) {
    $(document).ready(function () {
        $(".thmv-top-navbar").menumaker({
            format: "multitoggle"
        });
    });
})(jQuery);

// welcome section slider
(function () {
    let slider = document.querySelector('.welcome-slider');
    if (slider) {
        const swiper = new Swiper('.welcome-slider', {
            // Optional parameters
            autoplay: {
                delay: 4000,
            },
            loop: true,
            speed: 1000,
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
})();

// rooms & suites slider
(function () {
    let slider = document.querySelector('.swiper');
    if (slider) {
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            autoplay: {
                delay: 4000,
            },
            loop: true,
            speed: 1000,
            slidesPerView: 4,
            spaceBetween: 40,
            autoHeight: true,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                700: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            }
        });
    }
})();

// gallery fancybox js

let fancybox = document.querySelector('[data-fancybox="gallery"]');

if (fancybox) {
    Fancybox.bind('[data-fancybox="gallery"]', {
        dragToClose: false,

        Toolbar: false,
        closeButton: "top",

        Image: {
            zoom: false,
        },

        on: {
            initCarousel: (fancybox) => {
                const slide = fancybox.Carousel.slides[fancybox.Carousel.page];

                fancybox.$container.style.setProperty(
                    "--bg-image",
                    `url("${slide.$thumb.src}")`
                );
            },
            "Carousel.change": (fancybox, carousel, to, from) => {
                const slide = carousel.slides[to];

                fancybox.$container.style.setProperty(
                    "--bg-image",
                    `url("${slide.$thumb.src}")`
                );
            },
        },
    });
}


// What to see slider
(function () {
    let slider = document.querySelector('.what-to-see-slider');
    if (slider) {
        const swiper = new Swiper('.what-to-see-slider', {
            // Optional parameters
            loop: true,
            speed: 1000,
            slidesPerView: 1,
            spaceBetween: 20,
            autoHeight: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 1.5,
                    spaceBetween: 20
                }
            }
        });
    }
})();
