$(function() {
    var car_key = $('.car_code input').val();
    $('.car_code input').blur(function() {
        var flag = false;
        if (flag != true) {
            $('.car_hint').show();
        } else {
            $('.car_hint').hide();
            $('.use_but').on('click', function() {
                window.location.href = "./get.html";
            });
        }
    })
})