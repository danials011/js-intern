const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");

const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

const initialResult = 0; // optional, just to embrace const variables
let currentResult = initialResult; // numeric result

// Function here
// void function - no return value
function outputResult(latestCurrentResult, previousResult, operationSymbol, inputValue) {
    // for the result output
    currentResultOutput.textContent = latestCurrentResult;
    // currentCalculationOutput.textContent = numericResult + " " + operationSymbol + " " + inputValue; // typical way
    // for the calculation output
    currentCalculationOutput.textContent = `${previousResult} ${operationSymbol} ${inputValue}`;
    console.log(`${previousResult} ${operationSymbol} ${inputValue}`);
}

// parse the string from the user input value to integer
// number function
function getUserInput() {
    return parseInt(userInput.value);
}

function calculate(operand) {
    const previousResult = currentResult; // just for rendering purposes - placeholder
    const userInputNumber = getUserInput(); // return number
    if (operand === "+") {
        currentResult = currentResult + userInputNumber; // userInput.value = string; 
    } else if (operand === "-") {
        currentResult = currentResult - userInputNumber; // userInput.value = string; 
    } else if (operand === "*") {
        currentResult = currentResult * userInputNumber; // userInput.value = string; 
    } else if (operand === "/") {
        currentResult = currentResult / userInputNumber; // userInput.value = string; 
    }
    outputResult(currentResult, previousResult, operand, userInput.value); // string output
}

addBtn.addEventListener("click", calculate.bind(this, "+"));
subtractBtn.addEventListener("click", calculate.bind(this, "-"));
multiplyBtn.addEventListener("click", calculate.bind(this, "*"));
divideBtn.addEventListener("click", calculate.bind(this, "/"));
