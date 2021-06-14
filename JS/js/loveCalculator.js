prompt ("What is your name?");
prompt ("What is their name?")



let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; //1-100


if (loveScore >= 80 ){
    console.log ("Your love score is " + loveScore + "%. " + 'You love each other like Kanye loves Kanye.');
} else if (loveScore > 30 && loveScore <= 70) {
    console.log("Your love score is " + loveScore +"%");
} else {
    console.log('ooh no love');
}
console.log(loveScore);