(function() {
    var phone_txt = document.querySelector(".phone input");
    var hint = document.querySelector(".hint span");
    // var code_but = document.querySelector(".code_but input");
    var code_but = document.querySelector(".code_but");
    var codes = document.querySelector(".code input");
    var login_but = document.querySelector(".login_but");
    var m_phone = document.querySelector(".m_phone span");
    phone_txt.onblur = function() {
        var phone_val = phone_txt.value;
        if (!(/^1[34578]\d{9}$/.test(phone_val))) {
            hint.style.display = "block";
            return false;
        } else {
            var timer = null;
            code_but.onclick = function() {
                alert("验证码:1234")
                clearInterval(timer); //这句话至关重要
                var time = 60;
                var that = this;
                timer = setInterval(function() {
                    if (time <= 0) {
                        that.innerHTML = "";
                        that.innerHTML = "点击重新发送";
                        that.disabled = false;
                        clearInterval(timer)
                    } else {
                        that.disabled = true;
                        that.innerHTML = "";
                        that.innerHTML = "剩余时间" + (time) + "秒";
                        time--;
                    }
                }, 1000);


            }
        }
    }
    var code = 1234;
    codes.onblur = function() {
        var code_txt = codes.value;
        if (code == code_txt) {
            login_but.className = "login_but login_but_active"
        }
    }
    login_but.onclick = function() {
        var code_txt = codes.value;
        if (code == code_txt) {
            alert("登录成功");
            var local = {
                "token": true,
                "phone": phone_txt.value
            };
            localStorage.setItem("local", JSON.stringify(local));
            window.location.href = "./get.html";
        } else {
            login_but.onclick = null;
            // alert("验证码错误");
        }
    }
    var login_modai = document.querySelector(".login_modai");
    var cont = document.querySelector(".cont");

    window.onload = function() {
        var local = JSON.parse(localStorage.getItem("local"));
        if (local != null) {
            var token = local.token;
            if (token == true) {
                login_modai.style.display = "block";
                cont.style.display = "none";
                m_phone.innerHTML = local.phone;
            } else {
                login_modai.style.display = "none";
                cont.style.display = "block";
            }
        }

    }
    phone_txt.onfocus = function() {
        hint.style.display = "none";
    }
    var login_quit = document.querySelector('.login_quit');
    login_quit.onclick = function() {
        window.location.href = "./login.html";
        localStorage.removeItem("local");

    }
})()