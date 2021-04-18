//CartDrawer click events ---------------------------

$(function(){
    $('.cart, #addToCartBtn, #add_to_cart').click(function(e){
      e.preventDefault();
      $('.maskCartDrawer, .cart-drawer').toggle();
      $('.cart-drawer').animate({right: "0"}, 300);
      $('body').css('overflowY', 'hidden');
    });

    $('#cartDrawerExit, .maskCartDrawer').click(function(e){
      e.preventDefault();
      $('.cart-drawer').animate({right: "-18rem"}, 300, function() {
        $(this).toggle()
     });
      
      $('.maskCartDrawer').toggle();
      $('body').css('overflowY', 'auto');
    });
  });

//Video click events ---------------------------

$(function(){
$('#videoBtn').click(function(e){
    e.preventDefault();
    $('.maskVideo').toggleClass("invisible" ).animate({opacity: "1"}, 300);
    $('.video').fadeToggle(function(){
    player.playVideo();
    });
    $('body').css('overflowY', 'hidden');
    
});

$('.maskVideo').click(function(e){
    e.preventDefault();
    $('.video').fadeToggle();
    $('.maskVideo').animate({opacity: "0"}, 300, function(){
    $('.maskVideo').toggleClass( "invisible" )
    });
    $('body').css('overflowY', 'auto');
    player.stopVideo();
});
});

//Search bar toggle ---------------------------
// $(function(){
//     $('#header ul li').mouseenter(function(){
//       $('.overlaySearch').fadeToggle(200);
//     });

//     $('#header ul li').mouseleave(function(){
//       $('.overlaySearch').fadeToggle(200);
//     });
  
//   }); 

//Header show after ---------------------------

// window.onscroll = function() {myFunction()};

// var header = document.getElementById("header");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("stickyHeader");
//   } else {
//     header.classList.remove("stickyHeader");
//   }
// }

//Video section ---------------------------
$(function(){
    $('#play-video').on('click', function(ev) {
        $(this).fadeOut();
        player.playVideo();
        ev.preventDefault();
    });
});

//Cookie ---------------------------
var myCookie = Cookies.get('minimal');

if(!myCookie) {
  $('.cookie').toggleClass('hidden');
}

$(function(){
  $('.acceptCookie').click(function(e){
    e.preventDefault();
    Cookies.set('minimal', 'true', { expires: 7 });
    $('.cookie').animate({height: "0px"}, 300, function() {
      $('.cookie').toggleClass('hidden');
    });
  });

  $('.closeCookie').click(function(e){
    e.preventDefault();
    $('.cookie').animate({height: "0px"}, 300, function() {
      $('.cookie').toggleClass('hidden');
    });
  });
});

//On Product Description click ---------------------------
$('.clickDropdown').on('click', function(){
  this.dropdownItem = $(this).siblings('.dropdownItem');

  this.dropdownItem.slideToggle(300);
  $(this).find('.chevronDesc').toggleClass('rotate');
}); 

//Sticky add to cart ---------------------------
$(document).ready(function() {
  if (window.location.href.indexOf("products") > -1) {
    
    jQuery.expr.filters.offscreen = function(el) {
      var rect = el.getBoundingClientRect();
      return (
                (rect.x + rect.width) < 0 
                  || (rect.y + rect.height) < 0
                  || (rect.x > window.innerWidth || rect.y > window.innerHeight)
              );
    };
  
    if ($(window).width() < 960) {
      $(window).scroll(function() { 
        if ($(window).scrollTop() >= $('.addtocart2').offset().top + $('.addtocart2').outerHeight() - window.innerHeight) { 
            
            $('.bottomMenu').slideDown();
        } else {
            $('.bottomMenu').slideUp();
        }
      });
    
    }
    else {
      $(document).scroll(function () {
        if ($('.addtocart').is(':offscreen')) {
            $('.bottomMenu').slideDown();
        } else {
            $('.bottomMenu').slideUp();
        }
    });
    }
  }
});

//Quick shop modal ---------------------------

$('.jquery-modal').addClass('z-75');

$(function(){
  $('.jquery-modal .blocker .current').click(function(e){
    e.preventDefault();
    $('.maskQuickshop').toggleClass( "invisible" );
    $('.quickShop').toggle();
    $('body').css('overflowY', 'hidden');
  });

  $('.maskQuickshop').click(function(e){
    e.preventDefault();
    $('.quickShop').toggle();
    $('.maskQuickshop').toggleClass( "invisible" );
    $('body').css('overflowY', 'auto');
  });
});