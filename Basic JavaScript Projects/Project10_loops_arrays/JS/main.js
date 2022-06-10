function Call_Loop(){
    text = "Click here to execute the loop.";   
    string_length = text.length;        //use string.length function before the loop
    document.getElementById("strLength").innerHTML = "The string length from the button is: " + string_length;
    // didn't write the loop I expected from the assignment prior to this
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];   //set up a list
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++){   //set for loop to cycle as many times as the items in the list
        Content += Instruments[Y] + "<br>";     //set Content to the next item from the list and then line break
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Dogs = [];              //create an array
    Dogs[1] = "eating";
    Dogs[2] = "playing";
    Dogs[3] = "sleeping";
    document.getElementById("Array").innerHTML = "This dog is: " + Dogs[2];
}

function constant_Function() {
    const Cows = [];            //use constant function
    Cows[1] = "eating";
    Cows[2] = "chewing";
    Cows[3] = "walking";
    document.getElementById("Constant").innerHTML = "This cow is: " + Cows[1];
    Cows[3] = "sleeping";       //change property's value
    Cows[4] = "walking";        //add property with value
    document.getElementById("Constant").innerHTML = "This cow is: " + Cows[3];
}

document.getElementById("Pi").innerHTML = piFunction();
function piFunction() {
    return Math.PI;     //use return statement
}

let car = {             //set up car object
    make: "Ford",
    model: "Raptor",    //assign properties to car
    year: 2021,         //properties separated by commas
    color: "blue",
    description: function () {      //description calls a function that returns all properties
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};                      //semicolon at end of declaring object
document.getElementById("CarObject").innerHTML = car.description(); //object.property that is a function that returns a string

let sentence = "";
for (let n = 0; n < 5; n++){    //for loop
    if (n == 3) continue;      //continue loop if n=3
    sentence += n + "<br>";
    document.getElementById("Continue").innerHTML = sentence;
}

sentence2 = "";
let n = 0;
while (n < 5) {   //while loop
    sentence2 += n + ", ";
    if (n == 3) break;       //break loop if n=3
    n++;
    document.getElementById("Break").innerHTML = sentence2;
}