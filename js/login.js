(function() {
    var phone_txt = document.querySelector(".phone input");
    var hint = document.querySelector(".hint span");
    var code_but = document.querySelector(".code_but input");
    var codes = document.querySelector(".code input");
    var login_but = document.querySelector(".login_but");
    var m_phone = document.querySelector(".m_phone span");
    var phone_vals = "13522260321";
    phone_txt.onblur = function() {
        var phone_val = phone_txt.value;
        if (!(/^1[34578]\d{9}$/.test(phone_val))) {
            hint.style.display = "block";
            return false;
        } else {
            code_but.onclick = function() {
                alert("验证码:1234")
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
        // var m_phone = document.querySelector(".m_phone span");
        // var phone_val = phone_txt.value;
        var code_txt = codes.value;
        if (code == code_txt) {
            alert("登录成功");
            localStorage.setItem("token", JSON.stringify(true));
            window.location.href = "./get.html";
        } else {
            login_but.onclick = null;
            // alert("验证码错误");
        }
    }
    var login_modai = document.querySelector(".login_modai");
    var cont = document.querySelector(".cont");

    window.onload = function() {
        var token = JSON.parse(localStorage.getItem("token"));
        if (token == true) {
            login_modai.style.display = "block";
            cont.style.display = "none";
            m_phone.innerHTML = phone_vals;
        } else {
            login_modai.style.display = "none";
            cont.style.display = "block";
        }

    }
    phone_txt.onfocus = function() {
        hint.style.display = "none";
    }
    var login_quit = document.querySelector('.login_quit');
    login_quit.onclick = function() {
        window.location.href = "./login.html";
        localStorage.removeItem("token");

    }
})()