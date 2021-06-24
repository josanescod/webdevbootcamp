//Create  a random number
function randomNumberGenerator(maxNum){
    return Math.floor((Math.random()*maxNum) + 1);
    
}

let randomNumber1 = randomNumberGenerator(6);
let randomNumber2 = randomNumberGenerator(6);
console.log('player1: '+ randomNumber1, 'player2: '+randomNumber2);

document.querySelector('.img1').setAttribute('src',`images/dice${randomNumber1}.png`);
document.querySelector('.img2').setAttribute('src',`images/dice${randomNumber2}.png`);
console.log(document.querySelector('.img1'));
console.log(document.querySelector('.img2'));