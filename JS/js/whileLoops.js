function beer() {

    let i = 99;

    while (i >= 0) {

        if (i === 1) {
            console.log(`
        ${i} bottles of beer on the wall, ${i} bottles of beer.
        Take one down and pass it around, no more bottles of beer on the wall.`);

        } else if (i === 0) {
            console.log(`
        No more bottles of beer on the wall, no more bottles of beer.
        Go to the store and buy some more, 99 bottles of beer on the wall.`);

        } else {
            console.log(`
        ${i} bottles of beer on the wall, ${i} bottles of beer.
        Take one down and pass it around, ${i - 1} bottles of beer on the wall.`);

        }


        i--;
    }

}

function beer2() {
    let numberOfBottles = 10;
    while (numberOfBottles >= 0) {
        let bottleWord = "bottle";
        if (numberOfBottles === 1) {
            bottleWord = "bottles";
        }

        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
        console.log(numberOfBottles + " " + bottleWord + " of beer,");
        console.log("Take down, pass it around,");
        numberOfBottles--;
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");

    }
}

beer();
//beer2();

