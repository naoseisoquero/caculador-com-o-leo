let currentNumber = '';
let currentOperator = '';
let previousNumber = '';

function calcula(value) {
  const tela = document.getElementById('tela');

  if (value >= '0' && value <= '9') {
    // Número
    currentNumber += value;
    tela.textContent = currentNumber;
  } else if (value === 'C') {
    // Limpar
    currentNumber = '';
    currentOperator = '';
    previousNumber = '';
    tela.textContent = '';
  } else if (value === '=') {
    // Calcular
    let result;
    switch (currentOperator) {
      case '+':
        result = parseFloat(previousNumber) + parseFloat(currentNumber);
        break;
      case '-':
        result = parseFloat(previousNumber) - parseFloat(currentNumber);
        break;
      case 'X':
        result = parseFloat(previousNumber) * parseFloat(currentNumber);
        break;
      case '/':
        result = parseFloat(previousNumber) / parseFloat(currentNumber);
        break;
      default:
        result = currentNumber;
    }
    tela.textContent = result;
    currentNumber = result;
    currentOperator = '';
    previousNumber = '';
  } else {
    // Operador
    currentOperator = value;
    previousNumber = currentNumber;
    currentNumber = '';
  }
}