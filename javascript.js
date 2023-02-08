
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

function operate(a, b, operator){

    if(operator === "add"){
        console.log(add(a, b));
    }
    else if(operator === "subtract"){
        console.log(subtract(a, b));

    }
    else if(operator === "multiply"){
        console.log(multiply(a, b));
    }
    else if(operator === "divide"){
        console.log(divide(a, b));
    }
}

operate(5, 4, "add");
operate(5, 4, "subtract");
operate(5, 4, "multiply");
operate(10, 5, "divide");