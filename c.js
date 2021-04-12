// Code re-write by Daksh Miglani <hello@dak.sh> https://dak.sh

var head = document.getElementsByTagName("HEAD")[0],
  link = document.createElement("link");
(link.rel = "stylesheet"),
  (link.type = "text/css"),
  (link.href = "https://cdn.jsdelivr.net/gh/ayshptk/clickkk/dist/style.css"),
  head.appendChild(link);

// document.ready without jQuery.
function ready(callback) {
  // in case the document is already rendered
  if (document.readyState != "loading") callback();
  // modern browsers
  else if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", callback);
  // IE <= 8
  else
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState == "complete") callback();
    });
}

ready(function () {
  document.querySelector("#c").addEventListener("click", function (evt) {
    evt.preventDefault();
    document.querySelector("#cw").classList.toggle("copen");
  });
});
