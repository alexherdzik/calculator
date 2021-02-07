const calculatorDisplay = document.querySelector('.calculator-display');
const btnNbrs = document.querySelectorAll('.btn-nbr');

btnNbrs.forEach(btn => {
    btn.addEventListener('click', event => {
        calculatorDisplay.textContent += event.target.textContent;
        calculator.display += event.target.textContent;
        //console.log(event.target.textContent);
    });
});

const btnOps = document.querySelectorAll('.btn-op');

btnOps.forEach(btn => {
    btn.addEventListener('click', event => {
        if (!calculator.a && calculator.solution) {
            calculator.a = calculator.solution;
            /*calculator.b = +calculator.display;
            calculator.solution = operate(calculator.operator, calculator.a, calculator.b)
            calculator.a = null;
            calculator.b = null;
            calculator.operator = null;
            calculator.display = '';
            calculatorDisplay.textContent = calculator.solution;*/
        } else {
            calculator.a = +calculator.display;
        }
        calculator.operator = event.target.textContent;
        calculator.display = '';
        calculatorDisplay.textContent += ` ${event.target.textContent} `;
    });
})

const btnEquals = document.querySelector('.btn-equals');
btnEquals.addEventListener('click', () => {
    calculator.b = +calculator.display;
    calculator.solution = operate(calculator.operator, calculator.a, calculator.b)
    calculator.a = null;
    calculator.b = null;
    calculator.operator = null;
    calculator.display = '';
    calculatorDisplay.textContent = calculator.solution;
});

const btnClear = document.querySelector('.btn-clear');
btnClear.addEventListener('click', () => {
    calculator.display = '';
    calculator.a = null;
    calculator.b = null;
    calculator.operator = null;
    calculator.solution = null;
    calculatorDisplay.textContent = '';
});

const calculator = {
    display: '',
    a: null,
    b: null,
    operator: null,
    solution: null,
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
    switch (operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
        default:
            return 0;
    }
}