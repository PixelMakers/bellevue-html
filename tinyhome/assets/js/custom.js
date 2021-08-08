// =============================sticky header Start Script====================
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 83) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.thmv-navbar-light').offsetHeight;
            // document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});
// =============================sticky header End Script====================

// navigetion menu //

(function($) {
    $.fn.menumaker = function(options) {
        var cssmenu = $(this),
            settings = $.extend({
                format: "dropdown",
                sticky: false
            }, options);
        return this.each(function() {
            $(this).find(".button").on('click', function() {
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
            multiTg = function() {
                cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                cssmenu.find('.submenu-button').on('click', function() {
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
            resizeFix = function() {
                var mediasize = 991;
                if ($(window).width() > mediasize) {
                    cssmenu.find('ul').show();
                }
                if ($(window).width() <= mediasize) {
                    cssmenu.find('ul').hide().removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);
        });
    };
})(jQuery);

(function($) {
    $(document).ready(function() {
        $(".thmv-top-navbar").menumaker({
            format: "multitoggle"
        });
    });
})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
    // make it as accordion for smaller screens
    if (window.innerWidth > 991) {
        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem) {
            everyitem.addEventListener('mouseover', function(e) {
                let el_link = this.querySelector('a[data-bs-toggle]');
                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }
            });
            everyitem.addEventListener('mouseleave', function(e) {
                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }
            })
        });
    }
});

//
// $(document).ready(function() {
//   $(window).on("scroll", function() {
//     console.log($(this).scrollTop())
//     if($(this).scrollTop() >= 30){
//       // set to new image
//       $(".thmv-top-nav-fix .logo a img").attr("src","../images/logo/logo-light.svg");
//     } else {
//       //back to default
//       $(".thmv-top-nav-fix .logo a img").attr("src","../images/logo/logo.svg");
//     }
//   })
// })

// =============================Search Form Guest Script====================

$('.select-guests-dropdown .btn-minus').click(function(e) {
    e.stopPropagation();
    var parent = $(this).closest('.form-select-guests');
    var input = parent.find('.select-guests-dropdown [name=' + $(this).data('input') + ']');
    var min = parseInt(input.attr('min'));
    var old = parseInt(input.val());
    if (old <= min) {
        return;
    }
    input.val(old - 1);
    $(this).next().html(old - 1);
    updateGuestCountText(parent);
});
$('.select-guests-dropdown .btn-add').click(function(e) {
    e.stopPropagation();
    var parent = $(this).closest('.form-select-guests');
    var input = parent.find('.select-guests-dropdown [name=' + $(this).data('input') + ']');
    var max = parseInt(input.attr('max'));
    var old = parseInt(input.val());
    if (old >= max) {
        return;
    }
    input.val(old + 1);
    $(this).prev().html(old + 1);
    updateGuestCountText(parent);
});

function updateGuestCountText(parent) {
    var adults = parseInt(parent.find('[name=adults]').val());
    var children = parseInt(parent.find('[name=children]').val());
    var adultsHtml = parent.find('.render .adults .multi').data('html');
    console.log(parent, adultsHtml);
    parent.find('.render .adults .multi').html(adultsHtml.replace(':count', adults));
    var childrenHtml = parent.find('.render .children .multi').data('html');
    parent.find('.render .children .multi').html(childrenHtml.replace(':count', children));
    if (adults > 1) {
        parent.find('.render .adults .multi').removeClass('d-none');
        parent.find('.render .adults .one').addClass('d-none');
    } else {
        parent.find('.render .adults .multi').addClass('d-none');
        parent.find('.render .adults .one').removeClass('d-none');
    }
    if (children > 1) {
        parent.find('.render .children .multi').removeClass('d-none');
        parent.find('.render .children .one').addClass('d-none');
    } else {
        parent.find('.render .children .multi').addClass('d-none');
        parent.find('.render .children .one').removeClass('d-none').html(parent.find('.render .children .one').data('html').replace(':count', children));
    }
}

// Adult & Child Number Script
$(document).ready(function() {

    var guestAmount = $('#guestNo');

    $('#cnt-up').click(function() {
        guestAmount.val(Math.min(parseInt($('#guestNo').val()) + 1, 20));
    });
    $('#cnt-down').click(function() {
        guestAmount.val(Math.max(parseInt($('#guestNo').val()) - 1, 1));
    });

});

$(document).ready(function() {

    var guestAmount = $('#kidsNo');

    $('#kcnt-up').click(function() {
        guestAmount.val(Math.min(parseInt($('#kidsNo').val()) + 1, 20));
    });
    $('#kcnt-down').click(function() {
        guestAmount.val(Math.max(parseInt($('#kidsNo').val()) - 1, 0));
    });
});

// Adult & Child Number Script
$(document).ready(function() {

    var guestAmount = $('#roomNo');

    $('#rom-up').click(function() {
        guestAmount.val(Math.min(parseInt($('#roomNo').val()) + 1, 20));
    });
    $('#rom-down').click(function() {
        guestAmount.val(Math.max(parseInt($('#roomNo').val()) - 1, 0));
    });

});

$(document).ready(function() {

    var guestAmount = $('#kidsroomNo');

    $('#krom-up').click(function() {
        guestAmount.val(Math.min(parseInt($('#kidsroomNo').val()) + 1, 20));
    });
    $('#krom-down').click(function() {
        guestAmount.val(Math.max(parseInt($('#kidsroomNo').val()) - 1, 0));
    });
});

// Guests Dropdown Script
$(".form-content").on("click", function() {
    $(".select-guests-dropdown").slideToggle();
});


// =============================Search Form Guest Script End====================


// =============================Date Picker Script Start====================

$(function() {
    $('#popupDatepickerfrom1, #popupDatepickerfrom2, #popupDatepickerfrom3, #popupDatepickerfrom4, #popupDatepickerfrom5').datepick({
        monthsToShow: 1,
        monthsToStep: 1
    });
    $('#popupDatepickerto1, #popupDatepickerto2, #popupDatepickerto3, #popupDatepickerto4, #popupDatepickerto5').datepick({
        monthsToShow: 1,
        monthsToStep: 1
    });

    $('#inlineDatepicker1').datepick({
        monthsToShow: 1,
        monthsToStep: 1,
        rangeSelect: true
    });
    $('#inlineDatepicker2').datepick({
        monthsToShow: 2,
        monthsToStep: 1,
        rangeSelect: true
    });
    $('#inlineDatepicker3').datepick({
        monthsToShow: 3,
        monthsToStep: 1,
        rangeSelect: true
    });
});

function showDate(date) {
    alert('The date chosen is ' + date);
}

$('#inlineDatepicker1').datepick({
    monthsToShow: 1,
    monthsToStep: 1,
    rangeSelect: true,
    renderer: {
        weekendClass: 'datepick-weekend thmv-date-weekendClass',
        multiClass: 'thmv-date-multiClass',
        defaultClass: 'thmv-date-defaultClass',
        selectedClass: 'datepick-selected thmv-date-selectedClass',
        highlightedClass: 'thmv-date-highlightedClass',
        todayClass: 'datepick-today thmv-date-todayClass',
        otherMonthClass: 'thmv-date-otherMonthClass',
        disabledClass: 'thmv-date-disabledClass'
    }
});

// =============================Date Picker Script End====================

// slick-image-center slider //
$(".slick-testimonial-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    pauseOnHover: true,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    responsive: [{
        breakpoint: 995,
        settings: {
            centerMode: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
        }

    }]
});