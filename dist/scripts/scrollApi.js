// Scroll event listener

let isScrolling = false;

 function addScrollingListener(scroller) {
     window.addEventListener('scroll', (e) => {

         if (!isScrolling) {
             window.requestAnimationFrame(() => {
                 scroller(e);
                 isScrolling = false;
             });
             isScrolling = true;
         }
     });
 }
function setObserver(scrollElement, classNameActive) {

    const ScrollItems = document.querySelectorAll(scrollElement);

    ScrollItems.forEach(Item => {

        if (isPartiallyVisible(Item) && !Item.classList.contains(classNameActive)) {
            Item.classList.add(classNameActive);
        }
        else if (Item.classList.contains(classNameActive)) {
            Item.classList.remove(classNameActive);
        }

    });
}
 // Detect if element is partially visible
function isPartiallyVisible(element) {

     const rc = element.getBoundingClientRect();
     const top = rc.top;
     const bottom = rc.bottom;
     const height = rc.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
// Detect if element is fully visible
function isFullyVisible(element) {
    const rc = element.getBoundingClientRect();
    const top = rc.top;
    const bottom = rc.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}
// Scroll to target element
function smoothScroll(target) {

    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
// Scrolling Observer
function scrollingObserver(targetElement, callback, threshold) {
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {

        callback(entries, observer);
    }, {
        threshold: threshold // Trigger when the target is visible
    });
    // Start observing the target
    observer.observe(targetElement);
}

function setIntersectionObserverAll(targetElementsClass, callback) {

    const elements = document.querySelectorAll(targetElementsClass);

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {

        callback(entries);
    }, {
        threshold: 0.1 // Trigger when 10% of the target is visible
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

function getScrollPosition() {
     return document.documentElement.scrollTop;
}

function addParallaxScrolling(targetElement) {

    let ticking = false;

    function updateParallax() {
        const scrolled = window.scrollY;
        const parallax = scrolled * 0.5;
        targetElement.style.transform = `translateY(${parallax}px)`;
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    window.addEventListener('scroll', requestTick);
}