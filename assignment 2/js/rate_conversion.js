// Programmer: Samir Ranabhat
// Date: June 07, 2024

// Function to get id from html file
var $ = function(id) {
    return document.getElementById(id);
};

// Conversion rates (hard-coded)
const USD_TO_CAD_RATE = 1.33; 
const CAD_TO_USD_RATE = 0.75; 

// Function to convert USD to CAD
function convertUSDtoCAD(usd) {
    return (usd * USD_TO_CAD_RATE).toFixed(3);
}

// Function to convert CAD to USD
function convertCADtoUSD(cad) {
    return (cad * CAD_TO_USD_RATE).toFixed(3);
}

// Function to handle conversion
function convertCurrency() {
    // Get the input values
    const usdAmount = parseFloat($('usd-amount').value);
    const cadAmount = parseFloat($('cad-amount').value);

    // Check if both inputs are empty
    if (isNaN(usdAmount) && isNaN(cadAmount)) {
        showError('Please enter a valid amount in either USD or CAD.');
        return;
    }

    // Check if both inputs are filled
    if (!isNaN(usdAmount) && !isNaN(cadAmount)) {
        showError('Please enter an amount in only one field.');
        return;
    }

    // Perform conversion based on valid input
    if (!isNaN(usdAmount)) {
        $('cad-amount').value = convertUSDtoCAD(usdAmount);
        clearError();
    } else if (!isNaN(cadAmount)) {
        $('usd-amount').value = convertCADtoUSD(cadAmount);
        clearError();
    }
}

// Function to show error message
function showError(message) {
    let errorElement = $('error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.id = 'error-message';
        errorElement.style.color = 'red';
        errorElement.style.marginTop = '10px';
        $('convert-button').insertAdjacentElement('afterend', errorElement);
    }
    errorElement.textContent = message;
}

// Function to clear error message
function clearError() {
    const errorElement = $('error-message');
    if (errorElement) {
        errorElement.textContent = '';
    }
}

// Attach the event handler to the convert button once the DOM is fully loaded
window.onload = function() {
    $('convert-button').onclick = convertCurrency;
};
