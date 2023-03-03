const display = document.getElementById('result');
const keys = document.querySelectorAll('.keys button');
const operators = document.querySelectorAll('.operator');
let current = '';
let result = null;
let operator = '';

keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.value;
    if (keyValue === 'C') {
      current = '';
      result = null;
      operator = '';
      display.innerText = '0';
    } else if (keyValue === '=') {
    calculate();
} else if (operatorsArray.includes(keyValue)) {
  handleOperator(keyValue);
} else {
  current += keyValue;
  display.innerText = current;
}
});
});

function handleOperator(nextOperator) {
const inputValue = parseFloat(current);
if (operator && result) {
calculate();
} else {
result = inputValue;
}
operator = nextOperator;
current = '';
}

function calculate() {
const inputValue = parseFloat(current);
if (operator === '+') {
result += inputValue;
} else if (operator === '-') {
result -= inputValue;
} else if (operator === '*') {
result *= inputValue;
} else if (operator === '/') {
result /= inputValue;
}
current = '';
display.innerText = result;
}

const operatorsArray = ['+', '-', '*', '/'];