(function ($) {
    $(document).ready(function () {

        $('#box').on('mousedown', function (e) {
            $('#box').addClass('active').on('mousemove', function (e) {
                $('.active').offset({
                    top: e.pageY - $('.active').outerHeight() / 2,
                    left: e.pageX - $('.active').outerWidth() / 2
                }).on('mouseup', function () {
                    $('#box').removeClass('active');
                });
            });

            return false;

        });


    });
})(jQuery);