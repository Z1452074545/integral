(function() {
    var but_use = document.querySelector(".but_use");
    var falg = true;
    but_use.onclick = function() {
        if (falg == true) {
            window.location.href = "./drops_express.html";

        } else {
            window.location.href = "./dongdong_car.html";
        }
    }

})()