function add() {        //click on <p> to return addition fact
    document.getElementById("Addition").innerHTML = "2+3= "+ (2 + 3);
}

function subtract() {        //click on <p> to return subtraction fact
    document.getElementById("Subtraction").innerHTML = "5-3= "+(5-3);
}

function multiply() {        //click on <p> to return multiplication fact
    document.getElementById("Mulitplication").innerHTML = "2*3= " + (2*3);
}

function divide() {        //click on <p> to return division fact
    document.getElementById("Division").innerHTML = "8/2= " + (8/2);
}

function doMath() {        //click on <p> to return multiple math fact
    document.getElementById("Math").innerHTML = "8/(2+2)+1= " + (8 / (2+2)+1);
}
function doModulus() {        //click on <p> to return remainder
    document.getElementById("Modulus").innerHTML = "25/6 has a remainder of " + (25 % 6);
}

function negative() {        //click on <p> to return negation
    var A = 10;
    document.getElementById("Negation").innerHTML = "the opposite of 10 is " + (-A);
}

function increase() {        //click on <p> to return increment/decrament
    var B = 10;
    var C = 10;
    B++;
    C--;
    document.getElementById("Increment").innerHTML = "One more than 10 is " + (B)+" and one less than 10 is "+(C);
}

function randGen() {        //click on <p> to return random # in pop up
    window.alert(Math.random()*100);
}

function expt() {        //click on <p> to return Power math object
    document.getElementById("Power").innerHTML = "5 cubed is " + Math.pow(5, 3);
}
