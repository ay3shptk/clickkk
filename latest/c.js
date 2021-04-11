function include(e,t){var a=document.getElementsByTagName("head")[0],c=document.createElement("script");c.src=e,c.type="text/javascript",c.onload=c.onreadystatechange=function(){c.readyState?"complete"!==c.readyState&&"loaded"!==c.readyState||(c.onreadystatechange=null,t()):t()},a.appendChild(c)}include("https://cdnjs.cloudflare.com/ajax/libs/cash/8.1.0/cash.min.js",function(){$(".c").on("click",function(){$(".cw").toggleClass("copen")})});

var head = document.getElementsByTagName('HEAD')[0]; 
var link = document.createElement('link');
link.rel = 'stylesheet'; 
link.type = 'text/css';
link.href = 'https://cdn.jsdelivr.net/gh/ayshptk/clickkk/style.css'; 
head.appendChild(link); 
