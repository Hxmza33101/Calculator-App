const display = document.getElementById('display');

function appendValue(value) { //Adds the display value with the value
    display.value += value;
}

function clearDisplay() { //Clears the display
    display.value = ' ';
}

function deleteDigit() { //Removes the last digit
    display.value = display.value.slice(0, -1);
}

function calculateResult() { //Calculates this using a simple code
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}