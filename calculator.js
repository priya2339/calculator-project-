
const tone = document.getElementById('tone');

function appendCharacter(character) {
    tone.play();
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
}

function clearDisplay() {
    tone.play();
    display.innerText = '0';
}

function deleteLast() {
    tone.play();
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function calculateResult() {
    tone.play();
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}


document.addEventListener('keydown', function(event) {
    const key = event.key;
    const numbers = '0123456789';
    const operators = '+-*/';

    if (numbers.includes(key)) {
        appendCharacter(key);
    } else if (operators.includes(key)) {
        appendCharacter(key);
    } else if (key === 'Enter') {
        event.preventDefault(); 
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === '.') {
        appendCharacter(key);
    }
});

