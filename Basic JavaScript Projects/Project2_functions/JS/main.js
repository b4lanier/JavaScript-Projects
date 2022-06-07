function twoVariables() {                            //function that assigns 2 var
    var A = 4;                                      //assigns variables
    var B = 5;
    document.getElementById("paragraph").innerHTML = (A+B); //changes <p> to 9
}

function myFunction(){                                //function to concatenate
    var sentence = "This sentence";
    sentence += " was concatenated";                  //uses +=
    document.getElementById("concatenate").innerHTML = sentence; //changes <p> display
}