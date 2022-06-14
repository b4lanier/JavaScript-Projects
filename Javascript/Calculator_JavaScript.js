//create an object to keep track of values
const Calculator = {
    Display_Value: '0', //displays 0 on screen
    First_Operand: null,    //holds first operand for expressions
    Wait_Second_Operand: false, //checks whether second operand has been input
    operator: null, //holds the operator
};

//modifies values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;   //set display value to key that was clicked
        Calculator.Wait_Second_Operand = false;
    } else {        //overwrites 0 with value, otherwise adds on to it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//handles decimal points
function Input_Decimal(dot) {
    if (Calculator.Wait_Second_Operand === true) return;    //prevents double clicking of decimal point
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;    //add decimal point if display value doesn't have one
    }
}

//handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator   
    const Value_of_Input = parseFloat(Display_Value);   //convert current # to a number and store results in first operand if doesn't already exist
    if (operator && Calculator.Wait_Second_Operand) {   //check if operator exists & if wait second operand is true, then updates operator and exits function
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {        
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {      //check if operator already exists
        const Value_Now = First_Operand || 0;   
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);  //if operator exists, property lookup performed for the operator and function that matches the operator is executed
        result = Number(result).toFixed(9)    //add a fixed amount of numbers afte the decimal
        result = (result * 1).toString()        //remove trailing 0's
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//update screen with contents of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
const keys = document.querySelector('.calculator-keys');    //monitor button clicks
keys.addEventListener('click', (event) => {
    const { target } = event;   //varget variable is object that represents element that was clicked
    if (!target.matches('button')) {    //if clicked element is not a button, exit the function
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) {   //ensure AC clears the numbers from Calculator
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();

})