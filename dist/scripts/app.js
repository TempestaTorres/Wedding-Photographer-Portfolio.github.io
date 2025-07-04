document.addEventListener("DOMContentLoaded", function(event) {

    "use strict";

    const backToTop = document.querySelector(".back-to-top");
    const header = document.querySelector(".header");
    const form = document.querySelector("#form");
    const formButton = form.querySelector("button");

    let headerVisible = false;

    const formValidateHandler = () => {

        let oldValue = formButton.textContent;

        formButton.textContent = formButton.dataset.name;

        setTimeout(() => {

            formButton.textContent = oldValue;
            form.reset();

            }, 2000);
    };

    function headerObserver(e) {

        if (window.scrollY > 40 && window.innerWidth > 1023 && !headerVisible) {
            header.classList.add('is-active');
            headerVisible = true;
        }
        else if (window.scrollY === 0 && headerVisible) {
            header.classList.remove('is-active');
            headerVisible = false;
        }
    }

    function scrollObserver(e) {
        headerObserver(e);
        backToTopObserver(backToTop);
    }
    function intersectionObserver(entries, observer){

        entries.forEach(entry => {
            if(entry.isIntersecting && !entry.target.classList.contains('is-active')) {
                entry.target.classList.add('is-active');
            }
            else {
                entry.target.classList.remove('is-active');
            }
        });
    }
    function lineIntersectionObserver(entries, observer){

        entries.forEach(entry => {
            if(entry.isIntersecting && !entry.target.classList.contains('line')) {
                entry.target.classList.add('line');
            }
            else {
                entry.target.classList.remove('line');
            }
        });
    }
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

    // Scrolling
    addScrollingListener(scrollObserver);
    //Effect
    setIntersectionObserverAll('.effect', intersectionObserver);
    setIntersectionObserverAll('.pink-line', lineIntersectionObserver);
});