
// $(document).ready(function() {
//     $("#news-slider").owlCarousel({
//         items : 3,
//         itemsDesktop:[1199,3],
//         itemsDesktopSmall:[980,2],
//         itemsMobile : [600,1],
//         navigation:true,
//         navigationText:["",""],
//         pagination:true,
//         autoPlay:true
//     });
// });


    $(document).ready(function(){
        $("#news-slider").owlCarousel({
            items: 1, /* Number of items to display */
            loop: true, /* Loop through items */
            nav: true, /* Show next/prev buttons */
            dots: true, /* Show dots for pagination */
            autoplay: true, /* Auto-play the carousel */
            autoplayTimeout: 3000, /* Time between transitions (in ms) */
            smartSpeed: 450 /* Speed of the transition */
        });
    });

