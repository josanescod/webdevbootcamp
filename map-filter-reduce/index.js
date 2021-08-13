const emojipedia = [
    {
        id: 1,
        emoji: "💪",
        name: "Tense Biceps",
        meaning: "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
    },
    {
        id: 2,
        emoji: "🙏",
        name: "Person With Folded Hands",
        meaning: "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
    },
    {
        id: 3,
        emoji: "🤣",
        name: "Rolling On The Floor, Laughing",
        meaning: "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
    },
    {
        id: 4,
        emoji: "🤓",
        name: "Nerd Face",
        meaning: "Huge glasses, awkward smile and buck teeth. Used humorously or ironically for nerds or to express how smart you are. Stereotype of a nerd; a smart but funny-dressed person with social deficits."
    }
];
import emojipedia from '../emojipedia';/* Map Filter Reduce*/
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

