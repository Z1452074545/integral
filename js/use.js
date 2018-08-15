window.onload = function() {
    var token = JSON.parse(localStorage.getItem("token"));
    if (token == null) {
        window.location.href = "./login.html"
    }
}