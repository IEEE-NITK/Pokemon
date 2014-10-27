        $('body').on({
            'mousewheel': function(e) {
            if (e.target.id == 'el') return;
                e.preventDefault();
                e.stopPropagation();
            }
            });
            window.addEventListener("keydown", function(e) {
            // space and arrow keys
            if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
            }
            }, false);  
            window.addEventListener('load', function() {
                document.body.addEventListener('touchmove', function(e) {
                    e.preventDefault();
                }, false);
            }, false);