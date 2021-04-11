
function include(filename, onload) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.src = filename;
        script.type = 'text/javascript';
        script.onload = script.onreadystatechange = function() {
            if (script.readyState) {
                if (script.readyState === 'complete' || script.readyState === 'loaded') {
                    script.onreadystatechange = null;                                                  
                    onload();
                }
            } 
            else {
                onload();          
            }
        };
        head.appendChild(script);
    }
    
    include('https://cdnjs.cloudflare.com/ajax/libs/cash/8.1.0/cash.min.js', function() {
        $(".c").on("click", function() {$(".cw").toggleClass("copen");});

    });