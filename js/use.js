window.onload = function() {
    var local = JSON.parse(localStorage.getItem("local"));
    // var token = local.token;
    // console.log(token);
    if (local == null) {
        window.location.href = "./login.html"
    }
}