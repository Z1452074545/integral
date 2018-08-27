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