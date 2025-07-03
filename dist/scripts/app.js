document.addEventListener("DOMContentLoaded", function(event) {

    "use strict";

    const form = document.querySelector("#form");
    const formButton = form.querySelector("button");

    const formValidateHandler = () => {

        let oldValue = formButton.textContent;

        formButton.textContent = formButton.dataset.name;

        setTimeout(() => {

            formButton.textContent = oldValue;
            form.reset();

            }, 2000);
    };
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
    // Form Validate
    validateForm(form, formValidateHandler);
});