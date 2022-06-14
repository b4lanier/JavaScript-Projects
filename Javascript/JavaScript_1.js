function animalFunction() {
    var animalOutput;
    var animal = document.getElementById("animalInput").value;
    var animalString = " is a fantastic animal";
    switch (animal) {
        case "Dog":
            animalOutput = "Dog " + animalString;
        break;
        case "Penguin":
            animalOutput = "Penguin " + animalString;
        break;
        case "Bird":
            animalOutput = "Bird " + animalString;
        break;
        case "Turtle":
            animalOutput = "Turtle " + animalString;
            break;
        default:
            animalOutput = "Please enter the animal exactly as it appears in the list."
            
    }
    document.getElementById("Output").innerHTML = animalOutput;
}

function changeClass() {
    var A = document.getElementsByClassName("click")
        A[0].innerHTML = "The text has changed!";
}

// FILL RECTANGLE WITH GRADIANT AND CIRCLE
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 400, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 250);

ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();