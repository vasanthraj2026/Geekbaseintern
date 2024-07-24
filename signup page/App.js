const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();

    if (usernameval === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
    
    if (emailval === '') {
        setError(email, 'Email is required');
    } else if (!validateEmail(emailval)) {
        setError(email, 'Please enter a valid email');
    } else {
        setSuccess(email);
    }
    
    if (passwordval === '') {
        setError(password, 'Password is required');
    } else if (passwordval.length < 8) {
        setError(password, 'Password must be at least 8 characters long');
    } else {
        setSuccess(password);
    }
    
    if (cpasswordval === '') {
        setError(cpassword, 'Confirm password is required');
    } else if (cpasswordval != passwordval) {
        setError(cpassword, 'Passwords do not match');
    } else {
        setSuccess(cpassword);
    }
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
