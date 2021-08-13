//const emojipedia = require('./emojipedia.cjs');
import emojipedia from './emojipedia.js';
/* Map Filter Reduce*/
var numbers = [3, 56, 2, 48, 5];

//Map create a new array by doing something with each item in an array
const numbersA = numbers.map((x) => x * 2);

console.log(numbersA);
//Filter Create a new array by keeping the items that return true
const numbersB = numbers.filter((num) => {
    return num > 10
});
console.log(numbersB);
//Reduce Acumulate a value by doing something to each item in an array

const numbersC = numbers.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber;
});
console.log(numbersC);
//Find find the first item that matches from an array
const numberD = numbers.find((num) => {
    return (num > 40 && num < 56);
});
console.log(numberD);
//FinIndex find the index of the first item that matches
const numberE = numbers.findIndex((num) => {
    return (num > 40 && num < 56);
});
console.log(numberE);

//create new array that contain meaning of emojipedia

const newEmojipedia = emojipedia.map((emojiEntry) => {
    return emojiEntry.meaning.substring(0, 100);
});
console.log(newEmojipedia);

