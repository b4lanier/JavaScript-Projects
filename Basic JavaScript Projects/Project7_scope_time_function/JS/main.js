var A = 10;             //Global variable
function doMath() {
    var B = 10;         //local variable
    document.getElementById("globalVar").innerHTML = (A * B); //print A*B
    console.log(A * B);
}

function doMath2() {     //should get error calling local var from other function
    document.getElementById("localVar").innerHTML = (A * B); 
    console.log(A * B); //check console for error
}

function get_date() {                       //use time function
    if (new Date().getHours() < 18){        //check hour for after 6pm
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
    else {                                  //different statement if before 6pm
        document.getElementById("Greeting").innerHTML="Man it's late."
    }
}

function get_date2() {
    if (new Date().getHours() >12) {        //new function to check if before noon
        document.getElementById("Greeting2").innerHTML = "It is after noon.";
    }
}

function selected() {       //another function to take user input and check if greater than 5
    var selection;
    selection = document.getElementById("pick").value;
    if (selection > 5) {
        document.getElementById("pickResult").innerHTML = "That number is greater than five.";
    }
    else {
        document.getElementById("pickResult").innerHTML = "That number is not greater than five.";
    }
}

function Time_function() {      //function to check if time is morning, afternoon, or evening
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {        //is between 1am and noon?
        Reply = "It is morning time!";
    }
    else if(Time>=12==Time<18){         //is between noon and 6pm?
        Reply = "It is afternoon.";
    }
    else {                              //is after 6pm?
        Reply = "It is evening.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}