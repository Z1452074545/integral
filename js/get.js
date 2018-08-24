window.onload = function() {
    var local = JSON.parse(localStorage.getItem("local"));
    if (local == null) {
        window.location.href = "./login.html"
    }
}
$(function() {
    $('.get_buts').on('click', function() {
        var falg = true; // 模拟 请求成功
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
    var throttle = 5;
    $('.get_more').on('click', function() { //点击更多
        if (throttle < 6) {
            alert("没有啦");
        } else {
            alert("加载更多")
        }

    })
})