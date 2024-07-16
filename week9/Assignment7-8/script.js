// Function to validate the form inputs
function validateForm() {
    // Array to store error messages
    let errorMessages = [];

    // Get values from the form inputs
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let dob = document.getElementById('dob').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // Validate First Name
    if (!firstName) {
        errorMessages.push("First Name is required.");
    }

    // Validate Last Name
    if (!lastName) {
        errorMessages.push("Last Name is required.");
    }

    // Validate Date of Birth
    if (!dob) {
        errorMessages.push("Date of Birth is required.");
    }

    // Validate Gender selection
    if (!gender) {
        errorMessages.push("Gender is required.");
    }

    // Validate Password
    if (!password) {
        errorMessages.push("Password is required.");
    }

    // Validate Confirm Password
    if (!confirmPassword) {
        errorMessages.push("Confirm Password is required.");
    }

    // Check if Password and Confirm Password match
    // This condition checks if both password and confirmPassword are provided and they do not match
    if (password && confirmPassword && password !== confirmPassword) {
        errorMessages.push("Passwords do not match.");
    }

    // Display error messages
    let errorDiv = document.getElementById('errorMessages');
    errorDiv.innerHTML = '';

    // If there are errors, display them
    if (errorMessages.length > 0) {
        errorMessages.forEach(message => {
            let p = document.createElement('p');
            p.textContent = message;
            errorDiv.appendChild(p);
        });
    } else {
        // If no errors, display success message
        errorDiv.innerHTML = '<p>Registration Successful!</p>';
    }
}
