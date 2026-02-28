jQuery(document).ready(function ($) {
    /*======= Skillset *=======*/
    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function () {
        $('.level-bar-inner').each(function () {
            var itemWidth = $(this).data('level');
            $(this).animate({
                width: itemWidth
            }, 800);
        });
    });

    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();


});

var send_to_me = function () {
    $.ajax({
        type: "POST",
        url: "/send_to_me",
        data: $("#send_to_me").serialize()

    }).done(function (result) {

        if (result.status == "success") {
            $(".alert").show();
            setTimeout(function () {
                $(".alert").hide();
                $("#send_to_me").trigger("reset");
            }, 3000)
        }

    }).fail(function (result) {
        alert("Error Encountered!!!")
    });

    return false;

};
