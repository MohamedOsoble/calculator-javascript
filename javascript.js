
const keyStrokes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "c"];
const operators = ["+", "-", "*", "/"];

let currentInputText = document.getElementById('calc-display');
let currentExpression = 0;
let currentOperator = "";
let firstTerm = 0;
let secondTerm = 0;
let currentTerm = 0;
let valueExpression = 0;

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

    if(operator === "add"){
        return add(a, b);
    }
    else if(operator === "subtract"){
        return subtract(a, b);

    }
    else if(operator === "multiply"){
        return multiply(a, b);
    }
    else if(operator === "divide"){
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

// process each keyStroke
function input(keyStroke) {

    // check if keystroke is a number
    if(keyStrokes.includes(keyStroke)){
        if(keyStroke === "c"){
            clearFunction();
            return 1;
        }
        else{
            if(currentInputText.value === "0"){
                currentInputText.value = keyStroke;
            }
            else{
                    currentInputText.value = currentInputText.value + keyStroke;
                    currentTerm = currentTerm + keyStroke;  
            }
 
        };

    }
    // check if keystroke is operator
    else if(operators.includes(keyStroke)){

        // if it is an operator, check how many expressions there are
        // if this is the first expression, update the first term and then the calculator display with the operator
        if(currentExpression == 0){
            firstTerm = currentInputText.value;
            currentExpression = 1;
            if(keyStroke != "="){
                currentInputText.value = currentInputText.value + keyStroke;
                currentTerm = 0;
            };
        }
        // if there are more than one expression, evaluate and then update terms
        else{
            secondTerm = currentTerm;
            currentExpression++;
            // operate for addition
            if(keyStroke == "+"){
                valueExpression = operate(parseInt(firstTerm), parseInt(secondTerm), "add");
                firstExpression = valueExpression;
                currentInputText.value = firstExpression;
                currentTerm = 0;
            }

            // operate for subtraction
            else if(keyStroke == "-"){
                valueExpression = operate(parseInt(firstTerm), parseInt(secondTerm), "subtract");
                firstExpression = valueExpression;
                currentInputText.value = firstExpression;
                currentTerm = 0;
            }
            // operate for multiplication
            else if(keyStroke == "*"){
                valueExpression = operate(parseInt(firstTerm), parseInt(secondTerm), "multiply");
                firstExpression = valueExpression;
                currentInputText.value = firstExpression;
                currentTerm = 0;
            }
            // operate for division
            else if(keyStroke == "*"){
                valueExpression = operate(parseInt(firstTerm), parseInt(secondTerm), "divide");
                firstExpression = valueExpression;
                currentInputText.value = firstExpression;
                currentTerm = 0;
            }
        };
        console.log("operator keystroke");
    };
    return 1;
};

operate(5, 4, "add");
operate(5, 4, "subtract");
operate(5, 4, "multiply");
operate(10, 5, "divide");