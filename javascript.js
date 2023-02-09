
const keyStrokes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "c"];
const operators = ["+", "-", "*", "/", "="];

let currentInputText = document.getElementById('calc-display');
let currentExpression = 0;
let currentOperator = "+";
let firstTerm = 0;
let secondTerm = 0;
let currentTerm = 0;
let valueExpression = 0;


// add keyboard functionality
document.addEventListener('keydown', (event) => {
    var name = event.key;
    input(name);
  }, false);

function clearFunction(){
    currentExpression = 0;
    firstTerm = 0;
    firstTerm = 0;
    secondTerm = 0;
    valueExpression = 0;
    currentInputText.value = "0";
};

// addition function
function add(a, b){
    return a + b;
};

// subtract function
function subtract(a, b){
    return a - b;
};

// division function
function divide(a, b){
    return a/b;
};

// multiplication function
function multiply(a, b){
    return a*b;
};

// select which operation to run
function operate(a, b, operator){

    if(operator === "+"){
        return add(a, b);
    }
    else if(operator === "-"){
        return subtract(a, b);

    }
    else if(operator === "*"){
        return multiply(a, b);
    }
    else if(operator === "/"){
        return divide(a, b);
    }
}

// add click event listeners for each button
const calcBtns = document.querySelectorAll('.calc-btn');
calcBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        input(btn.id);
    });
});

function updateDisplay(keyStroke){

    if(currentInputText.value === "0"){
        currentInputText.value = keyStroke;
    }
    else {
            currentInputText.value = currentInputText.value + keyStroke;
            currentTerm = currentTerm + keyStroke;  
    };
};

function evalExpression(keyStroke){

    valueExpression = operate(parseInt(firstTerm), parseInt(secondTerm), keyStroke);
    firstExpression = valueExpression;
    currentInputText.value = firstExpression;
    currentTerm = 0;
    return 1;
};

function updateExpression(keyStroke){
    firstTerm = currentInputText.value;
    currentExpression = 1;
    if(keyStroke != "="){
        currentInputText.value = currentInputText.value + keyStroke;
        currentTerm = 0;
        currentOperator = keyStroke;
    };
}

// process each keyStroke
function input(keyStroke) {

    // check if keystroke is a number
    if(keyStrokes.includes(keyStroke)){
        if(keyStroke === "c"){
            clearFunction();
        }
        else{
            updateDisplay(keyStroke);
        };

    }
    // check if keystroke is operator
    else if(operators.includes(keyStroke)){

        // if it is an operator, check how many expressions there are
        // if this is the first expression, update the first term and then the calculator display with the operator
        if(currentExpression == 0){
            updateExpression(keyStroke);
        }
        // if there are more than one expression, evaluate and then update terms
        else{
            secondTerm = currentTerm;
            currentExpression = 0;
            evalExpression(currentOperator);
            currentOperator = keyStroke;
            updateExpression(keyStroke);
        };
    };
    return 1;
};