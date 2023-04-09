
$(".slider-wrap").owlCarousel({
    loop:true,
    center:true,
    smartSpeed:600,
    margin: 15,
    autoplay: false,
    items: 3,
    responsiveClass:true,
    nav:true,
    navText: ['<i class="fa-solid fa-arrow-right "></i> ','<i class="fa-solid fa-arrow-left left"></i>' ],
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items: 2
        },
        991:{
            items: 3
        }
    }


});

$(".partner-card-wrapper").owlCarousel({
    loop:true,
    smartSpeed:600,
    margin: 15,
    autoplay: true,
    items: 3,
    responsiveClass:true,
    nav:false,
    navText: ['<i class="fa-solid fa-arrow-right "></i> ','<i class="fa-solid fa-arrow-left left"></i>' ],
    responsiveClass:false,
    responsive:{
        0:{
            items:2
        },
        767:{
            items: 4
        },
    }


});

$(".featured-card-wrapper").owlCarousel({
    loop:true,
    smartSpeed:600,
    margin: 15,
    autoplay: true,
    items: 3,
    responsiveClass:true,
    nav:false,
    responsiveClass:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:  2 
        },
    }


});

$(".b-card-wrapper").owlCarousel({
    loop:true,
    smartSpeed:600,
    margin: 15,
    autoplay: false,
    items: 3,
    responsiveClass:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2 
        },
        991:{
            items:3
        },
    }
    
});
$(".p-wrapper").owlCarousel({
    loop:true,
    smartSpeed:600,
    margin: -1,
    autoplay: true,
    items: 3,
    responsiveClass:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2 
        },
        991:{
            items:4
        },
    }
    
});
$(".lorem").owlCarousel({
    loop:true,
    smartSpeed:600,
    margin: -1,
    autoplay: true,
    items: 1,
    nav:true,
    
});


