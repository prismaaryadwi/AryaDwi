const resultDisplay = document.getElementById('result');

// Append a number to the display
function appendNumber(number) {
    resultDisplay.value += number;
}

// Append an operator to the display
function appendOperator(operator) {
    const lastChar = resultDisplay.value.slice(-1);
    if (!isNaN(lastChar)) { // Prevent multiple operators
        resultDisplay.value += operator;
    }
}

// Clear the display
function clearDisplay() {
    resultDisplay.value = '';
}

// Delete the last character
function deleteLast() {
    resultDisplay.value = resultDisplay.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        resultDisplay.value = eval(resultDisplay.value); // Perform the calculation
    } catch (error) {
        alert('Invalid Expression');
    }
}
