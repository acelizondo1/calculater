//Storing important DOM elements
const screenData = document.querySelector('#screenData');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const options = document.querySelectorAll('.option');

//Creating vars to store current calculator values
let screenValue = "0";
let currValues = {
    num1: 0,
    num2: 0,
    operator: null,
};


//Basic calculator functions

/*Takes in 2 parameters but will run with 1
*Returns if both numbers are integers
*/
let isInteger = (num1, num2=0) =>{
    if(Number.isInteger(num1) && Number.isInteger(num2)){
        return true;
    } else{
        alert('Error, one or more parametes are not integers');
        return false;
    }
};

/*Takes in 1 parameters and converts to integer
*Returns true if conversion can be made or else alerts error
*/
let parseInteger = (number) => {
    if(Number.isInteger(number)){
        return number;
    }else{
        let parse = Number.parseInt(number);
        if(parse){
            return parse;
        }else{
            alert('Error, argument is not a number');
        }
    }
};

/* Takes in 2 parameters and returns the sum of the two
*Checks if both parameters are integers
*Returns error if false, returns sum if true
*/
let add = (num1, num2) =>{
    if(isInteger(num1, num2)){
        return num1 + num2;
    }    
};

/*Takes in 2 parameters and calculates the difference of num1 and num2
*Checks if both parameters are integers
*Returns error if false, returns difference if true
*/
let subtract = (num1, num2) =>{
    if(isInteger(num1, num2)){
        return num1 - num2;
    }    
};

/*Takes in 2 parameters and returns the product of the two
*Checks if both parameters are integers
*Returns error if false, returns product if true
*/
let multiply = (num1, num2) =>{
    if(isInteger(num1, num2)){
        return num1 * num2;
    }    
};

/*Takes in 2 parameters and returns the quotient of num1 and num2
*Checks if both parameters are integers
*Returns error if false, returns quotient if true
*/
let divide = (num1, num2) =>{
    if(isInteger(num1, num2)){
        if(num2 === 0){
            return 'Infinity';
        }else{
            return num1 / num2;
        }
    }    
};

/*Takes in 1 parameters and returns the inverse of the number
*Checks if the parameter is an integer
*Returns error if false, returns inver if true
*/
let invertSign = (num) =>{
    if(isInteger(num1)){
        return num * -1;
    }    
};

/*Takes in 2 number parameters and an operator, returns the calculation
*Matches operator to case and runs appropriate calculation function
*Returns error if operator can't be matched, else returns calculation
*/
let operate = (operator, num1, num2=0) => {
    let calculation = 0;
    num1 = parseInteger(num1);
    num2 = parseInteger(num2);
    switch(true){
        case operator === 'add':
            calculation = add(num1, num2);
            break;
        case operator === 'subtract':
            calculation = subtract(num1, num2);
            break;
        case operator === 'multiply':
            calculation = multiply(num1, num2);
            break;
        case operator === 'divide':
            calculation = divide(num1, num2);
            break;
        case operator === 'invertSign':
            calculation = invertSign(num1);
            break;
        default:
            alert('Error, Invalid Operator');
            return false;
    }
    return calculation;
};

//Functions used in interatcting with DOM

/*Updates DOM screen with current screenValue
*/
let updateScreen = () =>{
    screenData.innerHTML = screenValue;
};

/*resets screen value to 0 and resets current values object to default
*Runs updateScreen
*/
let clear = () =>{
    screenValue = 0;
    currValues.num1 = 0;
    currValues.num2 = 0;
    currValues.operator = null;
    updateScreen();
};

/*Creates listener for every button
*Runs processing of the click based off of its button's grouping
*/
let createListeners = () =>{
    operators.forEach((operator) => {
        operator.addEventListener('click', (e) =>{
            let oper = e.path[0].name;
            runOperator(oper);
        });
    });

    options.forEach((option) => {
        option.addEventListener('click', (e) =>{
            let opt = e.path[0].name;
            runFunction(opt);
        });
    });

    numbers.forEach((number) => {
        number.addEventListener('click', (e) =>{
            let num = e.path[0].name;
            updateNumbers(num);
        });
    });

};


/*
*/
let runFunction = (option) => {
    switch(true){
        case option === 'clear':
            clear();
            break;
        case option === 'invertSign':
            screenValue = operate(option, screenValue);
            updateScreen();
            break;
        case option === 'delete':
            break;
    }
};  

/*
*/
let updateNumbers = (number) => {
    if(screenValue.length < 9){
        if(screenValue === '0'){
            screenValue = number;
        }else{
            screenValue = screenValue + number;
        }
        updateScreen();
    }
    if(!screenData.operator){
        screenData.num1 = screenValue;
    }else{
        screenData.num2 = screenValue;
    }
};

/*
*/
let runOperator = (operator) => {
    

};

createListeners();