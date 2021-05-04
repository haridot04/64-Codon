$(document).ready(function() {
    console.log("ready");

    $(window).scroll(function() {
        console.log("inside scroll");
        var height = $('.banner').height();
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= height - 40) {
            console.log("Inside if");
            $('.nav-container').addClass('solid-nav');
        } else {
            $('.nav-container').removeClass('solid-nav');
            console.log("inside else");
        }

    });
});