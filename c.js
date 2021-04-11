function include(e, t) {
    var n = document.getElementsByTagName("head")[0],
        a = document.createElement("script");
    a.src = e, a.type = "text/javascript", a.onload = a.onreadystatechange = function() {
        a.readyState ? "complete" !== a.readyState && "loaded" !== a.readyState || (a.onreadystatechange = null, t()) : t()
    }, n.appendChild(a)
}
include("https://cdnjs.cloudflare.com/ajax/libs/cash/8.1.0/cash.min.js", function() {
    $(".c").on("click", function() {
        $(".cw").toggleClass("copen")
    })
});
var head = document.getElementsByTagName("HEAD")[0],
    link = document.createElement("link");
link.rel = "stylesheet", link.type = "text/css", link.href = "https://cdn.jsdelivr.net/gh/ayshptk/clickkk/optimized/style.css", head.appendChild(link);