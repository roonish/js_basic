// Developer: Ronish Shivakoti (C0929420)
// Date: July 17, 2024

// Simplify getting elements by ID
const $ = (id) => document.getElementById(id);

// Function to validate the registration form
function validateForm() {
    // Retrieve values from input fields and trim whitespace
    const firstName = $('firstName').value.trim();
    const lastName = $('lastName').value.trim();
    const dob = $('dob').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const email = $('mail').value.trim();
    const mobile = $('mobile').value.trim();
    const password = $('password').value.trim();
    const confirmPassword = $('confirmPassword').value.trim();

    let isValid = true; // Flag to track form validity

    // Clear previous error messages
    clearErrorMessages();

    // Validate each field and set error messages if invalid
    if (!firstName) {
        setError('firstNameError', 'First Name is required.');
        isValid = false;
    }

    if (!lastName) {
        setError('lastNameError', 'Last Name is required.');
        isValid = false;
    }

    if (!dob) {
        setError('dobError', 'Date of Birth is required.');
        isValid = false;
    }

    if (!gender) {
        setError('genderError', 'Gender is required.');
        isValid = false;
    }

    if (!email) {
        setError('mailError', 'Email is required.');
        isValid = false;
    }

    if (!mobile) {
        setError('mobileError', 'Mobile Number is required.');
        isValid = false;
    }

    if (!password) {
        setError('passwordError', 'Password is required.');
        isValid = false;
    }

    if (!confirmPassword) {
        setError('confirmPasswordError', 'Confirm Password is required.');
        isValid = false;
    }

    if (password !== confirmPassword) {
        setError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    // If form is valid, show success message (or submit to server)
    if (isValid) {
        alert('Student Registration Form submitted successfully!');
    }
}

// Function to clear previous error messages
function clearErrorMessages() {
    const errorFields = document.querySelectorAll('.error-message');
    errorFields.forEach(field => field.innerText = '');
}

// Function to set error messages
function setError(fieldId, message) {
    $(fieldId).innerText = message;
}
