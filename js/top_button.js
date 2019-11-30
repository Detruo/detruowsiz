$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('.to-top:hidden').stop(true, true).fadeIn();
    } else {
        $('.to-top').stop(true, true).fadeOut();
    }
});
