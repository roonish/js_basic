// alert('Welcome to this app');
// var age = prompt("What is your age",0);
// // alert("Your age is"+ age);
// document.writeln("Your age is "+ age);
// document.writeln('<br>');

// console.log("This is it");
// console.log("bye");

// var a = 40;
// var b =parseInt (age);
// var sum = a+b;
// document.writeln("The ans is "+ parseInt( sum));
// document.writeln('This isn\'t right');

// var number = prompt("Enter a number between 1 to 10");
// number = parseInt(number);
// if(isNaN(number)){
//     alert('fuck')
// }
// else if(number<1 || number>10){
//     alert("Not valid");
// }
// else{
//     alert("ok");
// }
// console.log(number);
// var a = [];

// for(var i =0; i<=10; i++){
//     a[i]=i;
// }
// confirm('The value are: ' + a);
// var today = new Date();
// alert( today.toDateString() );
// alert( today.getFullYear() );
// alert(today.getDay());
// alert( today.getDate() );
// alert( today.getMonth() );


// var name = "Grace Hopper";
// var nameUpper = name.toUpperCase();
// var nameLength = name.length;        // nameLength = 12
// var index = name.indexOf(" ");       // index = 5
// var firstName = name.substr(0, index);


// document.write(firstName);
// document.write(name.substring(0,index));
// "use strict";
var calculateTax = function( subtotal, taxRate ) {
    tax = subtotal * taxRate;  // no var keyword so tax
                               // is treated as global
    tax = tax.toFixed(2);
};
calculateTax(10,5);
alert("Tax is " + tax);        // will not cause error
