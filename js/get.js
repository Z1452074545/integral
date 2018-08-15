window.onload = function() {
    var token = JSON.parse(localStorage.getItem("token"));
    if (token == null) {
        window.location.href = "./login.html"
    }
}
$(function() {
    $('.get_buts').on('click', function() {
        var falg = true;
        if (falg != false) {
            if ($(this).text() == "领取") {
                $('.get_succeed').show();
                $(this).text("查看");
            } else {
                window.location.href = "./details.html"
            }
            console.log($(this).text())


        } else {
            $('.get_error').show();
        }

    })
    $('.but_not').on('click', function() {
        $('.get_succeed').hide();
    })
    $('.but_confirm').on('click', function() {
        $('.get_error').hide();
    })

})