/** NAV SHRINK **/
$(document).on("scroll", function() {
  if ($(document).scrollTop() > 140) {
    $("header").addClass("shrink");
  } else {
    $("header").removeClass("shrink");
  }
});



/*NAV MENU*/
$(document).ready(function(){
    $(".hidden-left").click(function() {
        $(".hidden-menu").slideToggle(300, function(){   
            $(this).toggleClass('active').css('display', ''); 

        })      
    })
});

/**********************************
    Scroll Top
***********************************/
$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop()> 40){
            $('#scrollTop').fadeIn();
        }else{
            $('#scrollTop').fadeOut();
        }
    });

    $('#scrollTop').click(function(){
        $('html ,body').animate({scrollTop :0},8);
    });

});


/* Initialize Swiper */

  var swiper = new Swiper(".mySwiper", {
    fadeEffect: { crossFade: true },
    virtualTranslate: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    speed: 1000, 
    slidersPerView: 1,
    effect: "fade"
  });


/***************************************************
    SWIPER GALLERY
****************************************************/
var swiper = new Swiper('.sliderGallery', {
    slidesPerView: 4,
    spaceBetween: 10, 


    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    //dynamicBullets: true,
    //dynamicMainBullets: 4
    },
    
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        spaceBetween: 10, 
        },

        360: {
        slidesPerView: 2,      
        },

        700: {
        slidesPerView: 2,      
        },

        769: {
        slidesPerView: 2,
       
        },
        1024: {
        slidesPerView: 3,
        spaceBetween: 10,
        },
        1200: {
        slidesPerView: 4,
        spaceBetween: 10,
        },
    }
});
// now add mouseover and mouse out events on '.swiper-slide' elemnts to pause and resume the autoplay;

$(".sliderGallery").hover(function() {
    (this).swiper.autoplay.stop();
}, function() {
    (this).swiper.autoplay.start();
});

/***************************************************
    SWIPER TESTIMONIALS
****************************************************/
var swiper = new Swiper('.testimonial-list', {
    slidesPerView: 2,
    spaceBetween: 10, 



    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
        clickable: true,
        dynamicBullets: true,
        //dynamicMainBullets: 4
    },
    
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        spaceBetween: 10, 
        },

        360: {
        slidesPerView: 1,      
        },

        700: {
        slidesPerView: 1,      
        },

        769: {
        slidesPerView: 1,
       
        },

        930: {
        slidesPerView: 2,
       
        },
        
    }
});
// now add mouseover and mouse out events on '.swiper-slide' elemnts to pause and resume the autoplay;

$(".testimonial-list").hover(function() {
    (this).swiper.autoplay.stop();
}, function() {
    (this).swiper.autoplay.start();
});


/***************************************************
    SWIPER NEWS & EVENTS
****************************************************/
var swiper = new Swiper('.news-list', {
    slidesPerView: 3,
    spaceBetween: 10, 

    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    //dynamicBullets: true,
    //dynamicMainBullets: 4
    },
    
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        spaceBetween: 10, 
        },

        360: {
        slidesPerView: 1,      
        },



        651: {
        slidesPerView: 2,      
        },

        1024: {
        slidesPerView: 3,
        spaceBetween: 10,
        },
        1200: {
        slidesPerView: 3,
        spaceBetween: 10,
        },
    }
});
// now add mouseover and mouse out events on '.swiper-slide' elemnts to pause and resume the autoplay;

$(".news-list").hover(function() {
    (this).swiper.autoplay.stop();
}, function() {
    (this).swiper.autoplay.start();
});

/* Room Swiper */

  var swiper = new Swiper(".room_slider", {
    fadeEffect: { crossFade: true },
    virtualTranslate: true,
    
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },

    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    //dynamicBullets: true,
    dynamicMainBullets: 2
    },

    speed: 1000, 
    slidersPerView: 1,
    effect: "fade"
  });



/* loader 

document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('wrapper').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('wrapper').style.visibility="visible";
      },1000);
  }
}*/

/* loader-test*/



//PRELOADER 
var width = 100,
perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
time = parseInt((EstimatedTime/200)%60)*100;



// Fading Out Loadbar on Finised
setTimeout(function(){
$('#load').fadeOut(300);
$('#load').fadeOut(300);
}, time);

//* SERVICES TABS *//
let = tabs = document.querySelectorAll('.tab_toggle'),
    contents = document.querySelectorAll('.tab_content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });

        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
});


//* */ magnific-popup (zoom lightbox)--------------*******/
$(function () {        
     $('.gallery_ul').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
      $('.gallery_ul').isotope({
      // options
      itemSelector: '.gallery_list'
    });

    var $gallery = $('.gallery_ul').isotope({
      // options
    });
}); 

// about us
$(".playBtn").click(function () {
    $("#playYT").hide();
    $("#yt")[0].src += "?autoplay=1";
    setTimeout(function(){ $("#yt").show(); }, 200);
});
