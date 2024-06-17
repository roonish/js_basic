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

var number = prompt("Enter a number between 1 to 10");
number = parseInt(number);
if(isNaN(number)){
    alert('fuck')
}
else if(number<1 || number>10){
    alert("Not valid");
}
else{
    alert("ok");
}
console.log(number);
var a = [];

for(var i =0; i<=10; i++){
    a[i]=i;
}
alert('The value are: ' + a);