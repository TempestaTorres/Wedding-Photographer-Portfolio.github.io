
function validateForm(form, callback) {
    'use strict';

    const emailRegExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const nameRegExp = /^[A-Z][a-zA-Z]+\s[A-Z][a-zA-Z]*\s*$/;
    //const usernameRegExp = /^[a-zA-Z0-9_-]+\s*$/;
    //const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const inputs = form.querySelectorAll('input');

    let valid = false;

    // Check if the name is valid
    const isValidName = (name) => {
        return name.value.length > 4 && nameRegExp.test(name.value);
    };
    const handleInputName = (target) => {

        valid = isValidName(target);

        if (valid) {
            target.nextElementSibling.textContent = '';
            target.setCustomValidity('');
        }
        else {
            if (target.value.length < 2) {
                target.nextElementSibling.textContent = 'Name must be at least 2 characters long';
            }
            else {
                target.nextElementSibling.textContent = 'Your full name required. First letter is capital';
                target.setCustomValidity('invalid');
            }
        }
    };

    const isValidSubject = (subject) => {
        return subject.value.length > 9;
    };
    const handleInputUserSubject = (target) => {

        valid = isValidSubject(target);

        if (valid) {
            target.nextElementSibling.textContent = '';
            target.setCustomValidity('');
        }
        else {
            target.nextElementSibling.textContent = 'Your subject must be at least 10 characters long';
        }
    };
    const isValidMessage = (message) => {
        return message.value.length > 29;
    };
    const handleInputUserMessage = (target) => {

        valid = isValidMessage(target);

        if (valid) {
            target.nextElementSibling.textContent = '';
            target.setCustomValidity('');
        }
        else {
            target.nextElementSibling.textContent = 'Your message must be at least 30 characters long';
        }
    };

    // Check if the email is valid
    const isValidEmail = (target) => {
        return target.value.length > 6 && emailRegExp.test(target.value);
    };
    const handleInputUserEmail = (target) => {

        valid = isValidEmail(target);

        if (valid) {
            target.nextElementSibling.textContent = '';
            target.setCustomValidity('');
        }
        else {
            target.nextElementSibling.textContent = 'Please enter a valid email address';
            target.setCustomValidity('invalid');
        }
    };

    const handleInput = (event) => {

        switch (event.target.name) {
            case 'name':
                handleInputName(event.target);
                break;
            case 'email':
                handleInputUserEmail(event.target);
                break;
            case 'subject':
                handleInputUserSubject(event.target);
                break;
            case 'message':
                handleInputUserMessage(event.target);
                break;
        }
    };

    // Handle form submission
    const handleValidate = (event) => {
        event.preventDefault();

        if (form.checkValidity() && valid) {

            callback();

        }
    };
    // Form Entry point
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];

        input.addEventListener("input", handleInput);
    }

    form.querySelector("textarea").addEventListener("input", handleInput);

    form.addEventListener("submit", handleValidate);
}