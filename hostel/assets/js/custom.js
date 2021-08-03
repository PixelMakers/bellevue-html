// ======================= offcanvas menu ======================
jQuery(document).ready(function($){
  var $lateral_menu_trigger = $('#cd-menu-trsgger'),
    $content_wrapper = $('.cd-main-content'),
    $navigation = $('header');

  //open-close lateral menu clicking on the menu icon
  $lateral_menu_trigger.on('click', function(event){
    event.preventDefault();
    
    $lateral_menu_trigger.toggleClass('is-clicked');
    $navigation.toggleClass('lateral-menu-is-open');
    $content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){

    // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
      $('body').toggleClass('overflow-hidden');
    });
    $('#cd-lateral-nav').toggleClass('lateral-menu-is-open');
  });

  //open (or close) submenu items in the lateral menu. Close all the other open submenu items.
  $('.item-has-children').children('a').on('click', function(event){
    event.preventDefault();
    $(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
  });
  //
  $('.thmv-leftside-menu li a.active').parent("item-has-children a").addClass('active');
});

// =============================sticky header Start Script====================
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 83) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        // document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 
// =============================sticky header End Script====================


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

// =============================Date Picker Script End====================

// slick-image-center slider //
$(".slick-image-center").slick({
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        centerMode:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// slick-image-single slider //
$('.slick-image-single, .slick-listing').slick({
  infinite: true,
  adaptiveHeight: true,
  slidesToShow: 1,
  slidesToScroll: 1
});