function Ride_Function() {
    var Height, Can_ride;       //declare variables
    Height = document.getElementById("Height").value;  //set Height to value entered into form
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough"; //ternary function, output based on comparison to 52cm
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //print result of comparison
}

function Vote_Function() {      //same as function above
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {    //set up constructor object class vehicle with 4 properties
    this.Vehicle_Make = Make;       //set up default values
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");  //set up 3 objects with values in properties
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {     //function to return sentence for Eric object with his associated properties
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
}

function nestFunction() {   //outer function called by HTML
    document.getElementById("Nested_Function").innerHTML = count(); //call nested functino
    function count() {      //nested functino
        var starting = 4;   //declare variable with value of 4
        starting += 1;      //increment variable by 1
        return starting;
    }
}