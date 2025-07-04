let topVisible = false;

const backToTopObserver = (backToTop) => {
    "use strict";

    if (window.scrollY > 500 && !topVisible) {
        backToTop.classList.add("active");
        topVisible = true;
    }
    else if (window.scrollY <= 500 && topVisible) {
        backToTop.classList.remove("active");
        topVisible = false;
    }
};