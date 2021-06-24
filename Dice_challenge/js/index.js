//Create  a random number
function randomNumberGenerator(maxNum) {
    return Math.floor((Math.random() * maxNum) + 1);

}
let player1 = randomNumberGenerator(6);
let player2 = randomNumberGenerator(6);
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2')
//console.log('player1: ' + randomNumber1, 'player2: ' + randomNumber2);
img1.setAttribute('src', `images/dice${player1}.png`);
img2.setAttribute('src', `images/dice${player2}.png`);
/*console.log(document.querySelector('.img1'));
console.log(document.querySelector('.img2'));*/

let displayWinner = document.querySelector('h1');
if (player1 > player2) {
    displayWinner.innerHTML = 'Player 1 wins!';
}else if (player2 > player1) {
    displayWinner.innerHTML = 'Player 2 wins!';

}else{
    displayWinner.innerHTML = 'Draw!';

}