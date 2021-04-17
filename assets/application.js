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

window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("stickyHeader");
  } else {
    header.classList.remove("stickyHeader");
  }
}

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


    //Passwork reset click ---------------------------
    $('#clickResetPass').click(function(){
      $('#loginForm').hide();
      $('#resetPass').show();
    }); 

    // $(document).ready(function(){
    //   var $form = $('#resetPass form');
    //   $form.submit(function(){
    //      $.post($(this).attr('action'), $(this).serialize(), function(response){
    //       return
    //      },'json');
    //      return false;
    //   });
    // });

   $('#resetPassForm')
    .ajaxForm({
        url : '/account/recover',
        dataType : 'json',
        success : function (response) {
          return
        },
        error : function (response) {
          $('#status').removeClass("invisible").animate({opacity: "1"}, 300).delay(2000).animate({opacity: "0"}, 300, function() {
            $('#status').addClass("invisible")
          });
          console.log("The server says: " + response.status);
          return
        }
    })
;

    $('#resetPass #cancel').click(function(){
      $('#resetPass').hide();
      $('#loginForm').show();
    }); 