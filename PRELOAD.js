document.addEventListener('DOMContentLoaded', function() {
    document.body.style.display = 'none';
    function load() {
        console.log ("FIND SOURCE");
        setTimeout(function() {
            console.log ("SOURCE FOUND");
            setTimeout(function() {
                console.log ("STARTING MAIN SYSTEM");
                setTimeout(function() {
                  console.log ("STARTING MAIN FUNCTION"); 
                  setTimeout(function() { 
                    console.log ("ALL SYSTEM IS READY");
                    setTimeout(function() {
                      document.body.style.display = 'block';
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    }
    load();
});