!(function($) {
    "use strict";
    if ($('.typed').length) {
        var typed_strings = $(".typed").data('typed-items');
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }

    function aos_init() {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out-back",
            once: true
        });
    }
    $(window).on('load', function() {
        aos_init();
    });

    // Compétence
    $(window).on('load', function() {
        $('.progress .progress-bar').each(function() {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    });

    // Compétence
    $(document).ready(function() {
        $('.skills-content').addClass('loaded');
    });

    $('.skills-content.loaded').waypoint(function() {
        $('.progress .progress-bar').each(function() {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {
        offset: '80%'
    });

})(jQuery);