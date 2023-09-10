// Variáveis globais
let displayValue: string = "0";
let previousValue: string;
let operator: string | null = null;
let waitingForSecondOperand: boolean = false;
let decimalEntered: boolean = false;

// Elementos DOM
const display = document.getElementById("display") as HTMLSpanElement;
const buttons = document.querySelectorAll(".tecla");

// Função para atualizar o display
function updateDisplay() {
  display.textContent = displayValue;
}

// Função para adicionar um dígito ao display
function inputDigit(digit: string) {
  if (displayValue.length >= 8) return;

  if (
    displayValue === "0" ||
    displayValue === "mais" ||
    displayValue === "menos" ||
    displayValue === "por" ||
    displayValue === "dividido"
  )
    displayValue = "";

  displayValue += digit;

  display.textContent = displayValue;
}

// Função para adicionar um ponto decimal
function inputDecimal() {
  if (displayValue.indexOf(".") === -1) {
    inputDigit(".");
  }

  return;
}

// Função para executar operações
function performOperation(nextOperator: string) {
  const inputValue = parseFloat(displayValue);
  const previousValueFormatted = parseFloat(previousValue);

  switch (nextOperator) {
    case "mas":
      displayValue = (previousValueFormatted + inputValue).toString();
      break;
    case "menos":
      displayValue = (previousValueFormatted - inputValue).toString();
      break;
    case "por":
      displayValue = (previousValueFormatted * inputValue).toString();
      break;
    case "dividido":
      if (inputValue === 0) {
        alert("Não é possível dividir por zero!");
        clearDisplay();
        return;
      }
      displayValue = (previousValueFormatted / inputValue).toString();
      break;
    default:
      break;
  }
}

// Função para limpar o display
function clearDisplay() {
  displayValue = "0";
  previousValue = "";
  operator = null;
  waitingForSecondOperand = false;
  decimalEntered = false;
}

// Adiciona os event listeners aos botões
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.getAttribute("alt") || "0";

    switch (buttonText) {
      case "mas":
        if (!previousValue) {
          operator = "mas";
          previousValue = displayValue;
          displayValue = "mais";
        }
        break;

      case "menos":
        if (!previousValue) {
          operator = "menos";
          previousValue = displayValue;
          displayValue = "menos";
        }
        break;

      case "por":
        if (!previousValue) {
          operator = "por";
          previousValue = displayValue;
          displayValue = "por";
        }
        break;

      case "dividido":
        if (!previousValue) {
          operator = "dividido";
          previousValue = displayValue;
          displayValue = "dividido";
        }
        break;

      case "igual":
        if (operator) performOperation(operator);
        break;

      case "On":
        clearDisplay();
        break;

      case "punto":
        inputDecimal();
        break;

      default:
        inputDigit(buttonText);
    }

    display.textContent = displayValue;
  });
});
