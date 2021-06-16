
/* Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the nummber
and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"
*/

// push add, pop delete last element


let output = [];
let count = 1;

function fizzBuzz() {

    console.log(output);
    if (count % 3 === 0 && count % 5 === 0) {
        output.push('FizzBuzz');
    }
    else if (count % 3 === 0) {
        output.push('Fizz');
    }
    else if (count % 5 === 0) {
        output.push('Buzz');
    }
    else {
        output.push(count);
    }

    count++;
    console.log(output);
}

function runFB() {
    while (count <= 15) {
        fizzBuzz();
    }
}

runFB();