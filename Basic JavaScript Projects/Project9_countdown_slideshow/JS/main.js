//Countdown section
function countdown() {
    var seconds = document.getElementById("seconds").value; //retreive input for # seconds

    function tick() {
        seconds = seconds - 1;      //count down by 1
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);  //pause tick function 1,000 milliseconds
        if (seconds == -1) {        //check if time <0
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();     //call tick function
}

//SlideShow section
let slideIndex = 1;     //start with slide 1
showSlides(slideIndex); //call show slides function

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);    //call showslides after prev or next arrow
}

// Image controls
function currentSlide(n) {
    showSlides(slideIndex = n);     //call showslides based on which dot clicked
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }   //reset at 1 if greater than 3
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {       //loop to set unselected slides invisible
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {         //loop to set unselected dots to inactive
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}