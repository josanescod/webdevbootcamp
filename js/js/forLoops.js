let output = [];
//let count = 1;

function fizzBuzz() {
    for (let count = 1; count <= 15; count++) {
        //console.log(output);
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


        console.log(output);
    }
}

fizzBuzz();

