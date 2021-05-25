
/*let dogName = 'rufus';
let dogCat = "SALLY";
dogCat = dogCat.toLowerCase();
console.log(dogName.toUpperCase());
console.log(dogCat);*/

//1 create a var that stores the name that user enters via prompt
let aName = prompt("What is your name?");

//2 Capitalize the first letter of their name.
console.log(aName);

//a isolate the first char
let firstChar = aName.slice(0,1);
//b turn the first char to upper case
let upperCaseFirstChar = firstChar.toUpperCase();
//c Isolate the rest of the name
let restOfName = aName.slice(1,aName.length);
//d Change the rest of the name to lower case
restOfName = restOfName.toLowerCase();
//3 We use the capitalized version of their name to greet them using an alert.
let capitaliseName = upperCaseFirstChar + restOfName;
//show complete name
alert ("Hello, "+ capitaliseName);

