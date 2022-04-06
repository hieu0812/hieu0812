$(document).ready(function () {
    StyleController.init();
});

var StyleController = {
    init: function () {
        console.log('Running jquery/javascript');

        $('#a').click(function (e) {
            e.preventDefault();
            StyleController.scrollTo('.portfolio');
        });
        $('#b').click(function (e) {
            e.preventDefault();
            StyleController.scrollTo('.about');
        });
        $('#c').click(function (e) {
            e.preventDefault();
            StyleController.scrollTo('.contact');
        });
    },

    scrollTo: function (id, offset) {
        var speed = 800;
        var target = $(id ? id : 'html');
        var position = target.offset().top - (offset ? offset : 40);
        $("html, body").animate({scrollTop: position}, speed, "swing");
    }
};

$(window).scroll(function () {
    //Get current scroll position
    var currentScrollPos = $(document).scrollTop();
    //Iterate through all node
    var width = $(window).width();
    var height = $(window).height();
    if (width>576) {
        $('.collapse > ul > .nav-item > a').each(function () {
            var curLink = $(this);
            var refElem = $(curLink.attr('href'));
    
            //Compare the value of current position and the every section position in each scroll
            if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
                //Remove class active in all nav
                $('#top-nav > ul > li').removeClass("active");
                //Add class active
                curLink.parent().addClass("active");
            } else {
                curLink.parent().removeClass("active");
            }
        });
    }
    else {
        $('.collapse > ul > .nav-item > a').each(function () {
            var curLink = $(this);
            var refElem = $(curLink.attr('href'));
    
            //Compare the value of current position and the every section position in each scroll
            if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
                //Remove class active in all nav
                $('#top-nav > ul > li > a').removeClass("active--2");
                //Add class active
                curLink.parent().addClass("active--2");
            } else {
                curLink.parent().removeClass("active--2");
            }
        });
    }
});