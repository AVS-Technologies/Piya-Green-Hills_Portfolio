$(document).ready(function(){
$('#owl-1').owlCarousel({
    loop:true,
    margin:100,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    smartSpeed: 1500,
    animateIn: 'linear',
    animateOut: 'linear',
    autoplayHoverPause:true,
    navText: ["<img src='./public/images/left.svg'>","<img src='./public/images/right.svg'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }   
})
$('#owl-2').owlCarousel({
    loop:true,  
    margin:330,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    smartSpeed: 1500,
    animateIn: 'linear',
    animateOut: 'linear',
    autoplayHoverPause:true,
    navText: ["<img src='./public/images/left.svg'>","<img src='./public/images/right.svg'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }   
})
var owl = $('.owl-carousel');

$(document.documentElement).keyup(function(event) {    
    if (event.keyCode == 37) { /*left key*/
        owl.trigger('prev.owl.carousel', [700]);
    } else if (event.keyCode == 39) { /*right key*/
        owl.trigger('next.owl.carousel', [700]);
    }
});
});