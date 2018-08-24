$(function() {
    $('.code_but').on('click', function() {
        var code_key = $('.code_txt input').val();
        alert(code_key);
        var flag = false;
        if (flag != true) {
            $('.cdkey input').val("请输入正确的券码!");
            $('.cdkey input').css('color', 'red');
        } else {
            $('.cdkey input').val(code_key);
        }
    })
})