window.alert(math.random() * 100);
window.alert("hello world");

function add() {
    document.getElementById("Addition").innerHTML = "2+3= "+ (2 + 3);
}

function subtract() {
    document.getElementById("Subtraction").innerHTML = "5-3= "+(5-3);
}

function multiply() {
    document.getElementById("Mulitplication").innerHTML = "2*3= " + (2*3);
}

function divide() {
    document.getElementById("Division").innerHTML = "8/2= " + (8/2);
}

function doMath() {
    document.getElementById("Math").innerHTML = "8/(2+2)+1= " + (8 / (2+2)+1);
}
function doModulus() {
    document.getElementById("Modulus").innerHTML = "25/6 has a remainder of " + (25 % 6);
    
}

function negative() {
    var A = 10;
    document.getElementById("Negation").innerHTML = "the opposite of 10 is " + (-A);

}

function increase() {
    var B = 10;
    var C = 10;
    B++;
    C--
    document.getElementById("Increment").innerHTML = "One more than 10 is " + (B)+" and one less than 10 is "+(C);

}

