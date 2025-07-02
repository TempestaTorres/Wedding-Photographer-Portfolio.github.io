document.addEventListener("DOMContentLoaded", function(event) {




    // Entry point
    hamburgerHandler();
    // Gallery
    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {
            type: "modern",
        },
        Toolbar: {
            display: {
                left: ["infobar"],
                middle: ["zoomIn", "zoomOut"],
                right: [ "slideshow", "thumbs","close"],
            },
        },
    });

});