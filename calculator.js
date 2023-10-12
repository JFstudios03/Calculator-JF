let currentInput = '';
let currentOutput = '0';

function clearOutput() {
    currentInput = '';
    currentOutput = '0';
    updateInputDisplay();
    updateOutput();
}

function appendToOutput(value) {
    if (currentOutput === '0' && value !== '.') {
        currentOutput = '';
    }
    currentInput += value;
    updateInputDisplay();
    updateOutput();
}

function calculate() {
    // try {
    //     currentOutput = eval(currentInput);
    // } catch (error) {
    //     currentOutput = 'Error';
    // }
    // updateOutput();
    // currentInput = '';
    currentOutput = eval(currentInput);
    updateOutput();
}

function updateInputDisplay() {
    document.getElementById('input-display').innerText = currentInput;
}

function updateOutput() {
    document.getElementById('result').innerText = currentOutput;
    // document.getElementById('result').innerText = currentInput; // Update the input display
}


// let currentInput = '';
// let currentOutput = '0';

// function clearOutput() {
//     currentInput = '';
//     currentOutput = '0';
//     updateOutput();
// }

// function appendToOutput(value) {
//     if (currentOutput === '0' && value !== '.') {
//         currentOutput = '';
//     }
//     currentInput += value;
//     updateOutput();
// }

// function calculate() {
//     try {
//         currentOutput = eval(currentInput);
//     } catch (error) {
//         currentOutput = 'Error';
//     }
//     updateOutput();
//     document.getElementById('input-display').innerText = currentInput; // Update the input display
//     currentInput = '';
// }

// function updateOutput() {
//     document.getElementById('result').innerText = currentOutput;
// }

// let currentInput = '';
// let currentOutput = '0';

// function clearOutput() {
//     currentInput = '';
//     currentOutput = '0';
//     updateInputDisplay();
//     updateOutput();
// }

// function appendToInput(value) {
//     currentInput += value;
//     updateInputDisplay();
// }

// function calculate() {
//     try {
//         currentOutput = eval(currentInput);
//     } catch (error) {
//         currentOutput = 'Error';
//     }
//     updateOutput();
// }

// function updateInputDisplay() {
//     document.getElementById('input-display').innerText = currentInput;
// }

// function updateOutput() {
//     document.getElementById('result').innerText = currentOutput;
// }

// let currentInput = '';
// let currentOutput = '0';

// function clearOutput() {
//     currentInput = '';
//     currentOutput = '0';
//     updateInputDisplay();
//     updateOutput();
// }

// function appendToInput(value) {
//     currentInput += value;
//     updateInputDisplay();
// }

// function calculate() {
//     // Use eval to calculate the result
//     currentOutput = eval(currentInput);
//     updateOutput();
// }

// function updateInputDisplay() {
//     document.getElementById('input-display').innerText = currentInput;
// }

// function updateOutput() {
//     document.getElementById('result').innerText = currentOutput;
// }
