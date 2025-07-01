const hamburgerHandler = () => {
    'use strict'

    const mobileMenu = document.querySelector('.nav');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', (e) => {
        e.preventDefault();

        hamburger.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');

        e.stopPropagation();
    });
}