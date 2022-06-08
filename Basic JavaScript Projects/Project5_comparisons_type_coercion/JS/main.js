document.write(typeof (4));   //type of = number
document.write("ten" + 4);    //coercion math strings
document.write(0 / 0);         // display NaN
document.write(isNaN(4));        // use isNaN() to display "false"
document.write(isNaN("green"));   // use isNaN() to display "true"
document.write(2E310);           //too large prints "infinity"
document.write(-2E310);           //too small prints "-infinity"
document.write(2 > 10);           //Boolean false
document.write(2 < 10);           //Boolean true
console.log(2 + 2);             //console to view 4
document.write(2 + 2 == 4);     //boolean check equal
document.write(2 + 2 == 5);     //boolean check not equal
document.write(4 === 4);        // true ===
document.write(4 === "five");   // false ===, different type and value
document.write(4 === "four");   // false ===, different type
document.write(4 === 5);        // false ===, different value
document.write(2 > 10 && 2 < 4);    //use && to display false
document.write(2 < 10 && 2 < 4);    //use && to display true
document.write(2 > 10 || 2 > 4);    //use || to display false
document.write(2 > 10 || 2 < 4);    //use || to display true
document.write(!(2 < 4));         //use ! to display false
document.write(!(2 > 10));        //use ! to display true
