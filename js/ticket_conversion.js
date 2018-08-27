(function() {
    var get = document.querySelector('.get a i');
    var use = document.querySelector('.use a i ');
    get.onclick = function() {
        get.className = "iconfont select";
        use.className = "iconfont";
    }
    use.onclick = function() {
        get.className = "iconfont ";
        use.className = "iconfont select";
    }
})()
$(function() {
    // 查询积分
    $('.inquire').on('click', function() {
            console.log('发送短信,查询积分');
        })
        // 选择面值兑换
    $('.ticket_item').on('click', function() {
        $(this).addClass('ticket_item_active').siblings().removeClass('ticket_item_active');
    });
    // 点击兑换 未选择提示
    $('.ticket_but').on('click', function() {
        if ($('.ticket_item_active').length == 1) {
            var id = $('.ticket_item_active').attr("data-id");
            console.log(id);
        } else {
            alert("请选择兑换面值!");
        }
    })
})