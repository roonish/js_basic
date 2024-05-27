// console.log('Hello World console');
// document.write('Hello World\n')
// var x = 6;
// var y = 10;

// var z = x+y;
// console.log(z);

// var num = prompt("Enter an integer number for F");
// num = parseInt(num);

// var z = (num-52)*5/9;
// z= parseInt(z);

// document.write("The temp in F is "+ num+ " is equal to "+z+" in C");

/* this application calculate and print the total consumptions 
of user 
*/

 
var km = prompt("Enter km driven");
//if user enter empty value for kilometer prompt
if (km == "") {
    alert("Kilometer cannot be empty.");
    km = prompt("Enter km driven");
    //if user enter string value insted of number for kilometer prompt
} else if (isNaN(km)) {
    alert("Input must be a number.");
    km = prompt("Enter km driven");
    //if user enter negetive value
} else if (km < 0) {
    alert("Kilometer should not be negetive.");
    km = prompt("Enter km driven");
}

var liters = prompt("Enter liters of gas used");
//if user enter empty value for liters prompt
if (liters == "") {
    alert("Liters cannot be empty.");
    liters = prompt("Enter liters of gas used");
        //if user enter string value insted of number for liters prompt
} else if (isNaN(liters)) {
    alert("Invalid value! Please enter numbers only.");
    liters = prompt("Enter liters of gas used");
        //if user enter negetive value for liters
} else if (liters < 0) {
    alert("Litres should not be less than 0.");
    liters = prompt("Enter liters of gas used");
}

var consumption = parseFloat(km)/parseFloat(liters);

document.write("The total consumption is " + consumption.toFixed(2) + " km/l");

