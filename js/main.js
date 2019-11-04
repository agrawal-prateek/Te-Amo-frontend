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
        var $ = jQuery;

        var postData = $(this).serializeArray(),
            formURL = $(this).attr("action"),
            $cfResponse = $('#contactFormResponse'),
            $cfsubmit = $("#cfsubmit"),
            cfsubmitText = $cfsubmit.text();

        $cfsubmit.text("Sending...");


        $.ajax(
            {
                url: formURL,
                type: "POST",
                data: postData,
                success: function (data) {
                    $cfResponse.html(data);
                    $cfsubmit.text(cfsubmitText);
                    $('#contactForm input[name=name]').val('');
                    $('#contactForm input[name=email]').val('');
                    $('#contactForm textarea[name=message]').val('');
                },
                error: function (data) {
                    alert("Error occurd! Please try again");
                }
            });

        return false;

    });


    // Others
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('navactive');
        })
        $(this).addClass('navactive');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPosition = $(document).scrollTop();
    $('.nav li a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
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

    $(function () {
        $("#datepicker").datepicker();
    });

};
