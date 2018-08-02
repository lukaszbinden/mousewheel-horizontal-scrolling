$(function() {

    /* HORIZONTAL SCROLLING */
    var isHorizontalScrollActive = false;
    var callbackMousewheel = function(event, delta) {
        if (Math.abs(delta) == 1) {
            delta *= 100; // increase scrolling speed
        }
        this.scrollLeft -= (delta);
        event.preventDefault();
    };
    $(function() {
        width = $(window).width();
        if (width >= 1008) { // corresponds to 1025px
            // console.log('ENABLE horizontal scrolling!')
            $('html, body').mousewheel(callbackMousewheel);
            isHorizontalScrollActive = true;
        } else {
            // console.log('Do not ENABLE horizontal scrolling!')
        }
    });

    $(window).resize(function () {
        width = $(window).width();
        // console.log("width: " + width + ", isHorizontalScrollActive: " + isHorizontalScrollActive);
        if (width <= 1007 && isHorizontalScrollActive) { // corresponds to 1024px (cf. mobile-landscape.css)
            // console.log('DISABLE horizontal scrolling!')
            isHorizontalScrollActive = false;
            $('html, body').unmousewheel(callbackMousewheel);

        } else if (width >= 1008 && !isHorizontalScrollActive) { // corresponds to 1025
            // console.log('ENABLE horizontal scrolling!')
            isHorizontalScrollActive = true;
            $('html, body').mousewheel(callbackMousewheel);
        }
    });
});