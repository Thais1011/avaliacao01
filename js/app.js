// Variáveis globais
var displayValue = "0";
var previousValue;
var operator = null;
var waitingForSecondOperand = false;
var decimalEntered = false;
// Elementos DOM
var display = document.getElementById("display");
var buttons = document.querySelectorAll(".tecla");
// Função para atualizar o display
function updateDisplay() {
    display.textContent = displayValue;
}
// Função para adicionar um dígito ao display
function inputDigit(digit) {
    if (displayValue.length >= 8)
        return;
    if (displayValue === "0")
        displayValue = "";
    displayValue += digit;
    display.textContent = displayValue;
}
// Função para adicionar um ponto decimal
function inputDecimal() {
    // Implementação da função inputDecimal aqui
}
// Função para executar operações
function performOperation(nextOperator) {
    var inputValue = parseFloat(displayValue);
    var previousValueFormatted = parseFloat(previousValue);
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
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var buttonText = button.getAttribute("alt") || "0";
        switch (buttonText) {
            case "mas":
                if (!previousValue) {
                    operator = "mas";
                    previousValue = displayValue;
                    displayValue = "";
                }
                break;
            case "menos":
                if (!previousValue) {
                    operator = "menos";
                    previousValue = displayValue;
                    displayValue = "";
                }
                break;
            case "por":
                if (!previousValue) {
                    operator = "por";
                    previousValue = displayValue;
                    displayValue = "";
                }
                break;
            case "dividido":
                if (!previousValue) {
                    operator = "dividido";
                    previousValue = displayValue;
                    displayValue = "";
                }
                break;
            case "igual":
                if (operator)
                    performOperation(operator);
                break;
            case "On":
                clearDisplay();
                break;
            default:
                inputDigit(buttonText);
        }
        display.textContent = displayValue;
    });
});
