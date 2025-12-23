const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const zipperContainer = document.querySelector('.zipper-container');

// Instantiate the Calculator class (exposed globally via calculator.js)
const calculator = new Calculator();

function updateDisplay() {
    currentOperandTextElement.innerText = calculator.currentOperand;
    if (calculator.operation != null) {
        previousOperandTextElement.innerText =
            `${calculator.previousOperand} ${calculator.operation}`;
    } else {
        previousOperandTextElement.innerText = '';
    }
}

// Event Listeners for Numbers
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        updateDisplay();
    });
});

// Event Listeners for Operations
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        updateDisplay();
    });
});

// Event Listener for Equals
equalsButton.addEventListener('click', () => {
    calculator.compute();
    updateDisplay();
});

// Event Listener for All Clear
allClearButton.addEventListener('click', () => {
    // "Unzip" animation effect simulation
    zipperContainer.classList.add('unzipping');

    // Perform clear logic
    calculator.clear();
    updateDisplay();

    // Reset animation class after delay
    setTimeout(() => {
        zipperContainer.classList.remove('unzipping');
    }, 500);
});

// Event Listener for Delete
deleteButton.addEventListener('click', () => {
    calculator.delete();
    updateDisplay();
});

// Initial Display
updateDisplay();
