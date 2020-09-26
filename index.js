//Storing important DOM elements
const screenData = document.querySelector('#screenData');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const functions = document.querySelectorAll('.function');

//Creating vars to store current calculator values
let screenValue;
let currValues = {
    num1: 0,
    num2: 0,
    operand: '',
};


//Basic calculator functions
/*
*/
let isInteger = (num1, num2=0) =>{
    if(Number.isInteger(num1) && Number.isInteger(num2)){
        return true;
    } else{
        alert('Error, one or more parametes are not integers');
        return false;
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
        return num1 / num2;
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