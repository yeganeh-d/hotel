$(document).ready(function() {
    $(".owl-carousel-gallery").owlCarousel({
        items: 5,
        loop: false,
        rtl: true,
        margin: 10,
        merge: true,
        responsive: {
            678: {
                mergeFit: true,
            },
            1000: {
                mergeFit: false,
            },
        },
    });
});

$(document).ready(function() {
    $(".owl-carousel-card").owlCarousel({
        stagePadding: 50,
        loop: true,
        rtl: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },

            1000: {
                items: 3,
            },
        },
    });
});