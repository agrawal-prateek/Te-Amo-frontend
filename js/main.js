$(document).ready(function () {

    // Google Map
    $('.map').addClass('scrolloff'); // set the pointer events to none on doc ready
    $('#contact').on('click', function () {
        $('.map').removeClass('scrolloff'); // set the pointer events true on click
    });

    // you want to disable pointer events when the mouse leave the canvas area;
    $(".map").mouseleave(function () {
        $('.map').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
    });

    // Contact Form
    $("#contactForm").submit(function (e) {
        e.preventDefault();
        let $ = jQuery;
        let postData = $(this).serializeArray(),
            formURL = $(this).attr("action");

        $.ajax(
            {
                url: formURL,
                type: "POST",
                data: postData,
                success: function (data) {
                    console.log(data);
                    $('#contactForm input[name=name]').val('');
                    $('#contactForm input[name=email]').val('');
                    $('#contactForm input[name=number]').val('');
                    $('#contactForm textarea[name=message]').val('');
                    showSnackBar("Query submitted successfully");
                },
                error: function () {
                    showSnackBar("Error occurd! Please try again");
                }
            });
        return false;
    });

    // Others
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.navlink').each(function () {
            $(this).removeClass('navactive');
        });

        let target = this.hash;
        $target = $(target);
        const scrollToPosition = $(target).offset().top - 80;

        $('html, body').stop().animate({
            'scrollTop': scrollToPosition
        }, 500, 'swing', function () {
            window.location.hash = "" + target;
            $('html').animate({'scrollTop': scrollToPosition}, 0);
            $(document).on("scroll", onScroll);
        });
        $(this).addClass('navactive');
    });
});

function onScroll(event) {
    let scrollPosition = $(document).scrollTop();
    $('.nav li a').each(function () {
        let currentLink = $(this);
        let refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('ul.nav li a').removeClass("navactive");
            currentLink.addClass("navactive");
        } else {
            currentLink.removeClass("navactive");
        }
    });


    $(function () {
        $('#portfolio').mixitup({
            targetSelector: '.item',
            transitionSpeed: 350
        });
    });

}
