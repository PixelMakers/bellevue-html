// ====== Right side floting buttons ====== //
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1000) {
        $(".thmv-home-side").addClass("thmv-home-side-show");
    } else {
        $(".thmv-home-side").removeClass("thmv-home-side-show");
    }
});

// ==== back To Top jquery  ===== //
$(document).ready(function(){ 
   $(window).scroll(function(){ 
       if ($(this).scrollTop() > 100) { 
           $('#home-top').fadeIn(); 
       } else { 
           $('#home-top').fadeOut(); 
       } 
   }); 
   $('#home-top').click(function(){ 
       $("html, body").animate({ scrollTop: 0 }, 100); 
       return false; 
   }); 
});

// ======= our menu responsive tabs ========//

  $(".responsive-tabs i.fa").click(function () {
      $(this).parent().toggleClass("open");
  });

  $(".responsive-tabs > li button").click(function () {
      $(".responsive-tabs > li").removeClass("active");
      $(this).parent().addClass("active");
      $(".responsive-tabs").toggleClass("open");
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
    guestAmount.val(Math.min(parseInt($('#roomNo').val()) +1, 20));
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
  $(".form-content").on("click", function () {
    $(".select-guests-dropdown").slideToggle();
  });


// =============================Search Form Guest Script End====================


// =============================Date Picker Script Start====================

  $(function() {
    $('#popupDatepickerfrom1, #popupDatepickerfrom2, #popupDatepickerfrom3, #popupDatepickerfrom4, #popupDatepickerfrom5').datepick({
      monthsToShow: 1, monthsToStep: 1});
    $('#popupDatepickerto1, #popupDatepickerto2, #popupDatepickerto3, #popupDatepickerto4, #popupDatepickerto5').datepick({
      monthsToShow: 1, monthsToStep: 1});

    $('#inlineDatepicker1').datepick({monthsToShow: 1, monthsToStep: 1, rangeSelect: true});
    $('#inlineDatepicker2').datepick({monthsToShow: 2, monthsToStep: 1, rangeSelect: true});
    $('#inlineDatepicker3').datepick({monthsToShow: 3, monthsToStep: 1, rangeSelect: true});
  });

  function showDate(date) {
    alert('The date chosen is ' + date);
  }

  $('#inlineDatepicker1').datepick({monthsToShow: 1, monthsToStep: 1, rangeSelect: true,renderer:{
      weekendClass: 'datepick-weekend thmv-date-weekendClass',
      multiClass:'thmv-date-multiClass',
      defaultClass:'thmv-date-defaultClass',
      selectedClass:'datepick-selected thmv-date-selectedClass',
      highlightedClass:'thmv-date-highlightedClass',
      todayClass:'datepick-today thmv-date-todayClass',
      otherMonthClass:'thmv-date-otherMonthClass',
      disabledClass:'thmv-date-disabledClass'
  }});

// =============================Date Picker Script End====================

// slick-image-center slider //
$(".slick-image-center").slick({
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  pauseOnHover:true,
  autoplay:true,
  speed: 1000,
  autoplaySpeed:5000,
  responsive: [
    {
      breakpoint: 995,
      settings: {
        centerMode:false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }

    }
  ]
});

// rooms & suites slider //
$(".slick-rooms-slider").slick({
  infinite: true,
  centerMode: true,
  arrows:false,
  pauseOnHover:true,
  autoplay:true,
  speed: 1000,
  autoplaySpeed:5000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 995,
      settings: {
        centerMode:false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerMode:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Rooms Singla Slider 
$(".thmv-header-slick").slick({
  infinite: true,
  arrows:true,
  centerMode: true,
  pauseOnHover:true,
  autoplay:true,
  speed: 1000,
  autoplaySpeed:1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        centerMode:false,
        arrows:false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// room single modern review slider

$(".thmv-modern-review").slick({
  infinite: true,
  arrows:false,
  dots:false,
  pauseOnHover:true,
  autoplay:true,
  speed: 1000,
  autoplaySpeed:1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 995,
      settings: {
        dots:false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 780,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});