//validate basic form data entry
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("First Name must be filled out");
        return false;
    }
    let y = document.forms["myForm"]["lname"].value;
    if (y == "") {
        alert("Last Name must be filled out");
        return false;
    }
}