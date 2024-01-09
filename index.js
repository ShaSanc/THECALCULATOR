let displayValue = '';

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function appendCharacter(character) {
    displayValue += character;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function setOperation(operation) {
    if (displayValue !== '') {
        displayValue += operation;
        updateDisplay();
    }
}

function showResult() {
    try {
        const result = eval(displayValue);
        document.getElementById('resultPopup').innerText = `Result: ${result}`;
        document.getElementById('resultPopup').classList.add('show');

        setTimeout(function () {
            document.getElementById('resultPopup').classList.remove('show');
        }, 3000); // Hide after 3 seconds
    } catch (error) {
        document.getElementById('resultPopup').innerText = 'Error';
        document.getElementById('resultPopup').classList.add('show');

        setTimeout(function () {
            document.getElementById('resultPopup').classList.remove('show');
        }, 3000); // Hide after 3 seconds
    }
}

// Listen for keyboard events
document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (/[0-9]/.test(key) || key === '.') {
        appendCharacter(key);
    } else if (key === 'Enter' || key === '=') {
        showResult();
    } else if (key === 'Escape' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace' || key === '⌫') {
        backspace();
    } else if (['/', '*', '-', '+'].includes(key)) {
        setOperation(key);
    }
});

