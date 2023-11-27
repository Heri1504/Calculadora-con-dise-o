let currentInput = '0';
let operator = null;
let previousInput = null;

function appendNumber(number) {
  if (currentInput === '0' || currentInput === '-0') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function setOperator(op) {
  if (operator !== null) {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '0';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  operator = null;
  previousInput = null;
  updateDisplay();
}

function calculate() {
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);

  if (isNaN(num1) || isNaN(num2)) {
    clearDisplay();
    return;
  }

  switch (operator) {
    case '+':
      currentInput = (num1 + num2).toString();
      break;
    case '-':
      currentInput = (num1 - num2).toString();
      break;
    case '*':
      currentInput = (num1 * num2).toString();
      break;
    case '/':
      if (num2 !== 0) {
        currentInput = (num1 / num2).toString();
      } else {
        currentInput = 'Error';
      }
      break;
    default:
      break;
  }

  operator = null;
  previousInput = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = currentInput;
}
