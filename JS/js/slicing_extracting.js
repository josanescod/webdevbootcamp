
// slice
/*let oneName = "Marcial";
console.log(oneName.slice(0, 1));
console.log(oneName.slice(2, 6));
console.log(oneName.slice(0, 6));
console.log(oneName.slice(6, 7));*/

let tweet = prompt("Compose your tweet: ");
let tweetUnder140 = tweet.slice(0,20);
alert(tweetUnder140);