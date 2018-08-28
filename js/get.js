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


    // // ajax
    // var pageStart = 1;
    // var pageSize = 4;
    // // 初始加载
    // getdata(pageStart, pageSize);
    // /*监听加载更多*/
    // $(document).on('click', '.get_more', function() {
    //     pageStart++
    //     getdata(pageStart, pageSize);
    // });

    // function getdata(pageStart, pageSize) {
    //     $.ajax({
    //         type: 'GET',
    //         url: '',
    //         dataType: 'json',
    //         success: function(data) {
    //             var html = '';
    //             console.log(sum, pageStart, pageSize);
    //             if (pageStart * pageSize > sum) {
    //                 var x = pageStart * pageSize - sum;
    //                 var leng = pageStart * pageSize - x;
    //             }
    //             var i = (pageStart - 1) * pageSize;
    //             for (i; i < leng; i++) {
    //                 html += `<div class="item" style="text-">
    //             <p>${data[i].title}</P>
    //             <p>${data[i].author}</P>
    //              <p>${data[i].time}</P>
    //             <p>${data[i].data}</P>
    //             </div>`
    //             }
    //             $('.get_cont').append(html);
    //             if ((pageStart * pageSize) >= sum) {
    //                 $(".get_more").hide();
    //             } else {
    //                 $(".get_more").show();
    //             }
    //         }
    //     })
    // }
    // // end
    var throttle = 5;
    $('.get_more').on('click', function() { //点击更多
            if (throttle < 6) {
                alert("没有啦");
                dates();

            } else {
                alert("加载更多")
            }

        })
        // dates() 获取当前时间
    function dates() {
        function p(s) {
            return s < 10 ? '0' + s : s;
        }

        var myDate = new Date();
        //获取当前年
        var year = myDate.getFullYear();
        //获取当前月
        var month = myDate.getMonth() + 1;
        //获取当前日
        var date = myDate.getDate();
        var h = myDate.getHours(); //获取当前小时数(0-23)
        var m = myDate.getMinutes(); //获取当前分钟数(0-59)
        var s = myDate.getSeconds();

        var now = year + '-' + p(month) + "-" + p(date) + " " + p(h) + ':' + p(m) + ":" + p(s);
        console.log(now);
    }
})