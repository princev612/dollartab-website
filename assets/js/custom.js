// Wait for window load
// loader
$(window).on("load", function () { 
  $("#overlayer").delay(2000).fadeOut("slow");
});
// loader

// a tag tooltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});



 // nav toggle

  $("header .fa-bars").click(function(){
    $(".side-nav").css("left", "0");
  });
  $("header .side-nav .top-side-bar .back").click(function(){
    $(".side-nav").css("left", "-270px");
  });

  // customer account menue tggle
  $("#acc-menu-btn").click(function(){
    $(".side-nav").css("left", "0");
  });
  $("header .side-nav .top-side-bar .back").click(function(){
    $(".side-nav").css("left", "-270px");
  });

// To hide a sidebar when the user clicks outside of it  
$(document).mouseup(function(e) 
{
    var container = $("header .side-nav ");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.css("left", "-270px");
    }
});

 // product quantity increase decrease
 function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}  
function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}



// upload img

// filter

      $(document).ready(function () {

        // common pop up
         // $("#thanx-box").hide();
         $("button.become-seller-btn").click(function(){
          $("#thanx-box.pop-up").slideDown();
        })
        $("#thanx-box .fa-times").click(function(){
          $("#thanx-box").fadeOut();
        })

        // $("#thanx-box").hide();
        $("button.thanx-btn").click(function(){
          $("#thanx-box.pop-up").slideDown();
        })
        $("#thanx-box .fa-times").click(function(){
          $("#thanx-box").fadeOut();
        })


        // pop up sign in & signup 
        // Login         
        $(".login-btn").click(function(){
          $("#login-email-box").slideDown();
          $("#signup-box").stop().hide();
        })
        $(".login-sign-btn").click(function(){
          $("#login-sign-box").stop().fadeIn();
        })
        $(".fa-times").click(function(){
          $("#login-sign-box").stop().fadeOut();
        })
        $(".login-otp-btn").click(function(){
          $("#login-otp-box").stop().slideDown();
          $("#login-email-box").stop().hide();
        })
        $("#login-otp-box .back").click(function(){
          $("#login-otp-box").stop().hide();
          $("#login-email-box").stop().slideDown();
        })
        $(".frt-pass-btn").click(function(){
          $("#forgot-pass-box").slideDown();
          $("#login-email-box").hide();
        })
        $("#forgot-pass-box .back").click(function(){
          $("#forgot-pass-box").hide();
          $("#login-email-box").slideDown();
        })
        $("#forgot-pass-box button").click(function(){
          $("#login-email-box").slideDown();
          $("#forgot-pass-box").hide();
        })
        $("#login-otp-box button").click(function(){
          $("#login-email-box").slideDown();
          $("#login-otp-box").hide();
        })
        $("#login-email-box button").click(function(){
          $("#login-sign-box").slideDown();
        })
        // Sign Up 
        $(".signup-btn").click(function(){
          $("#signup-box").stop().slideDown();
          $("#login-email-box").hide();
          $("#forgot-pass-box").hide();
          $("#login-otp-box").stop().hide();
        })



        // filter tab effect
        $(".filt-btn").on("click", function(){
          $(this).siblings(".filt-cats").stop().slideToggle();
          // $(this).chil("i").css("tra");
        })
        $("i.filter-btn.fa.fa-filter").click(function(){
          $(".filter-bar").slideDown();      
        });
        $(".apply-btn ").click(function(){
          $(".filter-bar").fadeOut();      
        });
        // filter products on mobile
        $(".filter-btn").on("click", function(){
          $(this).closest(".filters-result").css("display","block");
        })
          
      });
// flipping card


$(document).ready(function(){
    // shops banner slider
    $('.shop-baner-slider').slick({
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 500,
      cssEase: 'linear',
      lazyLoad: 'ondemand',
      controls: true,
      // slidesToShow: 1,
      // slidesToScroll: 1,
      // centerMode: true,
      // focusOnSelect: true
  });
   // shops banner slider
   $('.offers-coupons').slick({
    autoplay: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows:false,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    lazyLoad: 'ondemand',
    controls: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});
  // shops banner slider
  $('.shops-baner-slider').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    lazyLoad: 'ondemand',
    controls: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // centerMode: true,
    // focusOnSelect: true
});
    //main banner slider
    $('.main-baner-slider').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        lazyLoad: 'ondemand',
        controls: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // centerMode: true,
        // focusOnSelect: true
    });
        //Main Product Imgages slider
        $('.product-img-slider').slick({
          autoplay: false,
          arrows:false,
          dots: true,
          infinite: true,
          centerMode:true,
          speed: 500,
          cssEase: 'linear',
          lazyLoad: 'ondemand',
          controls: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true
      });
    
    $('.signin-slider').slick({
        autoplay: true,
        infinite: true,
        dots: true,
        arrows:false,
        speed: 500
    });
    $('.offer-slider-1').slick({
      autoplay: true,
      infinite: true,
      dots: false,
      speed: 500
  });

    $('.offer-slider-2').slick({
        autoplay: true,
        autoplay: false,
        infinite: true,
        dots: false,
        speed: 500
    });

    // popular products
    $('.slides-products .slider').slick({
      autoplay: false,
      dots: true,
      infinite: true,
      speed: 500,
      cssEase: 'linear',
      lazyLoad: 'ondemand',
      controls: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
  });

  // Actions Btns
  $(document).ready(function () {
     // wishlist icon toggle
     $(".fa-heart").click(function () {
      $(this).toggleClass("red");
    });
    $(".wishlist-page .fa-heart.red, .following-shop-page .fa-heart.red").click(function () {
      // $(this).closest(".product-card").slideUp();
      $(this).closest(".wish-card").slideUp();
    });

    // Delete table row from delete btn
    $(".remove-btn").click(function () {
      $(this).closest("table tbody tr").slideUp();
    });
  });

  // Sweat Alert Pops
  // Alert Modal Type
$(document).on('click', '#success', function(e) {
  swal(
    'Success',
    'You clicked the <b style="color:green;">Success</b> button!',
    'success'
  )
});

$(document).on('click', '#error', function(e) {
  swal(
    'Error!',
    'You clicked the <b style="color:red;">error</b> button!',
    'error'
  )
});

$(document).on('click', '#warning', function(e) {
  swal(
    'Warning!',
    'You clicked the <b style="color:coral;">warning</b> button!',
    'warning'
  )
});

$(document).on('click', '#info', function(e) {
  swal(
    'Info!',
    'You clicked the <b style="color:cornflowerblue;">info</b> button!',
    'info'
  )
});

$(document).on('click', '#question', function(e) {
  swal(
    'Question!',
    'You clicked the <b style="color:grey;">question</b> button!',
    'question'
  )
});

// Alert With Custom Icon and Background Image
$(document).on('click', '#icon', function(event) {
  swal({
    title: 'Custom icon!',
    text: 'Alert with a custom image.',
    imageUrl: 'https://image.shutterstock.com/z/stock-vector--exclamation-mark-exclamation-mark-hazard-warning-symbol-flat-design-style-vector-eps-444778462.jpg',
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: 'Custom image',
    animation: false
  })
});

$(document).on('click', '#image', function(event) {
  swal({
    title: 'Custom background image, width and padding.',
    width: 700,
    padding: 150,
    background: '#fff url(https://image.shutterstock.com/z/stock-vector--exclamation-mark-exclamation-mark-hazard-warning-symbol-flat-design-style-vector-eps-444778462.jpg)'
  })
});

// Alert With Input Type
$(document).on('click', '#subscribe', function(e) {
  swal({
    title: 'Submit email to subscribe',
    input: 'email',
    inputPlaceholder: 'Example@email.xxx',
    showCancelButton: true,
    confirmButtonText: 'Submit',
    showLoaderOnConfirm: true,
    preConfirm: (email) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (email === 'example@email.com') {
            swal.showValidationError(
              'This email is already taken.'
            )
          }
          resolve()
        }, 2000)
      })
    },
    allowOutsideClick: false
  }).then((result) => {
    if (result.value) {
      swal({
        type: 'success',
        title: 'Thank you for subscribe!',
        html: 'Submitted email: ' + result.value
      })
    }
  })
});

// Pop Thanks For becoming Seller
$(document).on('click', '#become-seller-btn', function(e) {
    swal({
            title: "You Registered Successfully", 
            text:'Manage your seller account by signin as a seller',
            type: 'success',
    confirmButtonText: "Login As A Seller",
    showCancelButton: true
    })
      .then((result) => {
      if (result.value) {
          window.location = '#';
      } else if (result.dismiss === 'cancel') {
          swal(
            'Cancelled',
            'Your stay here :)',
            'error'
          )
      }
    })
});
// Pop Thanks For Subscribe banners service
$(document).on('click', '#subscribe-thanx-btn', function(e) {
  swal({
      title: "Succefully Subscribed Service", 
      type: 'success',
      confirmButtonText: "Go To Home Page",
      showCancelButton: true
  })
      .then((result) => {
          if (result.value) {
              window.location = 'index.html';
          } else if (result.dismiss === 'cancel') {
              swal(
                'Cancelled',
                'Your stay here :)',
                'error'
              )
          }
      })
});