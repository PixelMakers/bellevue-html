// =============================sticky header Start Script====================
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 83) {
            document.getElementById('navbar_top').classList.add('fixed-top');
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
        }
    });
});
// =============================sticky header End Script====================

// ============================navigetion menu============================= //
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

// ====== Right side floting buttons ====== //
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 1000) {
        $(".thmv-home-side").addClass("thmv-home-side-show");
    } else {
        $(".thmv-home-side").removeClass("thmv-home-side-show");
    }
});

// home page v2 and home page v4 booking section
$(".thmv-home-v2 .thmv-booking-sec .thmv-booking-selection ul li, .thmv-choose-option .thmv-choose-room li").click(function () {
    $(".thmv-home-v2 .thmv-booking-sec .thmv-booking-selection ul li, .thmv-choose-option .thmv-choose-room li").removeClass("active");
    $(this).addClass("active");   
});

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
    // home page v3 shwo two month js
    $('#popupDatepickerfrom7, #popupDatepickerto7').datepick({
            monthsToShow: 2,
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
    autoplay: true,
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

// home page v4 slick floor plan slider //
$(".slick-floor-plan-slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    pauseOnHover: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    responsive: [
    {
      breakpoint:1200,
      settings: {
        centerMode:false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

// home page inner
$(".slick-floor-plan-slider-two").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    pauseOnHover: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    responsive: [
    {
      breakpoint:1200,
      settings: {
        centerMode:true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        centerMode:true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint:576,
      settings: {
        centerMode:false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// about page img slider
 $('.thmv-ab-img-slider').slick({
    infinite: true,
    centerMode:true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    pauseOnHover: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    responsive: [{
        breakpoint:992,
        settings: {
          centerMode:true,
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1
        },
        breakpoint:767,
        settings: {
          centerMode:true,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
    }]
});

// 
 $('.slick-review-slider').slick({
    infinite: true,
    centerMode:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    pauseOnHover: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    responsive: [{
        breakpoint:767,
        settings: {
          centerMode:false,
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
    }]
 });

// ======= home page v4 gallery filter ========//
  $(".responsive-tabs > li button").click(function () {
      $(".responsive-tabs > li").removeClass("active");
      $(this).parent().addClass("active");
      $(".responsive-tabs").toggleClass("open");
  });
// =======  gallery
  $(document).ready(function(){

    $(".thmv-filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
    });
    
    $(".thmv-appartments-sec .thmv-filter-tabs  .btn-default").click(function () {
        $(".thmv-appartments-sec .thmv-filter-tabs  .btn-default").removeClass("active");
    $(this).addClass("active");   
});
});

// gallery fancybox js

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