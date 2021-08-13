/* Arrow function 
If input has one parameter, don't need (), if output return one value
don't need {}

*/
const emojipedia = require('./emojipedia');
const numbers = [3, 56, 2, 48, 5];

/*function square(x) {
    return x * x;
}

const newNumbers = numbers.map(square);
console.log(newNumbers);*/

const newNumbersA = numbers.map(x => x * x);

const newNumbersB = numbers.map(x => x * 2);

const newNumbersC = numbers.filter(x => x < 10);

const newNumberD = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);

const newNumberE = numbers.find(x => x > 40 && x < 56);

const newNumberF = numbers.findIndex(x => x > 40 && x < 56);

const newEmojipedia = emojipedia.map(emojiEntry => emojiEntry.meaning.substring(0, 100));

console.log(newNumbersA);
console.log(newNumbersB);
console.log(newNumbersC);
console.log(newNumberD);
console.log(newNumberE);
console.log(newNumberF);
console.log(newEmojipedia);
