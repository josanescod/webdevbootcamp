/*let animal = 'dog';
let dogName = 'Watson';


console.log('this animal is a '+animal+" and its name is: "+dogName);

console.log(animal.length);
console.log(dogName.length);
console.log(animal[1]);
console.log(dogName[2]);

for (i=0;i<dogName.length;i++){
    console.log(dogName[i]);
}
*/

//you have written 182 characters, you have -42 characters left
var tweet = prompt("Compose your tweet: ");
var tweetCount = tweet.length;
alert ('You have written '+ tweetCount + " characters, you have "+ (140 - tweetCount)+ " characters remaining.");
