const calculatorDisplay = document.querySelector('.calculator-display');
const btnNbrs = document.querySelectorAll('.btn-nbr');

btnNbrs.forEach(btn => {
    btn.addEventListener('click', event => {
        calculatorDisplay.textContent += event.target.textContent;
        //console.log(event.target.textContent);
    });
});

const btnOps = document.querySelectorAll('.btn-op');

btnOps.forEach(btn => {
    btn.addEventListener('click', event => {
        calculator.a = +calculatorDisplay.textContent;
        calculator.operator = event.target.dataset.operator;
        calculatorDisplay.textContent += ` ${event.target.textContent} `;
    });
})

const btnClear = document.querySelector('.btn-clear');
btnClear.addEventListener('click', () => {
    calculator.a = null;
    calculator.b = null;
    calculator.operator = null;
    calculatorDisplay.textContent = '';
});

const calculator = {
    a: null,
    b: null,
    operator: null
}

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