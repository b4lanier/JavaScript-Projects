function combine() {
    var A = "This is a ";
    var B = "complete sentence";
    var sentence = A.concat(B);     //concatenate vars A+B into one sentence
    document.getElementById("concatenate").innerHTML = sentence;
}

function slicer() {
    var A = "Click here for a sliced sentence";
    var sentence = A.slice(17,23);      //slice the word sliced from sentence
    document.getElementById("sliced").innerHTML = sentence;
}

function toUpper() {
    var A = "Click here for upper case";
    var sentence = A.toUpperCase();     //conert sentence to upper case
    document.getElementById("upper").innerHTML = sentence;
}

function toSearch() {
    var A = "Click here for the position of search in this sentence";
    var sentence = A.search("search");      //find position of word "search"
    document.getElementById("searched").innerHTML = sentence;
}

function stringing() {
    var A = 182;        //convert 182 to string
    document.getElementById("stringed").innerHTML = A.toString();
}

function precisioning() {
    var A = 3.14159;        //convert to 3.14
    document.getElementById("precisioned").innerHTML = A.toPrecision(3);
}

function fixing() {
    var A = 3.14159;        //convert to 3.14 string
    document.getElementById("fixed").innerHTML = A.toFixed(2);
}

function valuing() {
    var A = 0/0;        //convert to string value of NaN
    document.getElementById("valued").innerHTML = A.valueOf();
}