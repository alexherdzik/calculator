const calculatorDisplay = document.querySelector('.calculator-display');
const btnNbrs = document.querySelectorAll('.btn-nbr');

const calculator = {
    a: null,
    b: null,
    operator: null
}

btnNbrs.forEach(btn => {
    btn.addEventListener('click', event => {
        calculatorDisplay.textContent += event.target.textContent;
        //console.log(event.target.textContent);
    });
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return;
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}